"use client";

import { useEffect, useState } from "react";

type Voter = {
    id: number;
    name: string;
    age: number;
    voted_at: string;
};

function isWeirdName(name: string): boolean {
    const lower = name.toLowerCase();

    if (/[^a-z\s]/.test(lower)) return true;
    if (!/[aeiou]/.test(lower)) return true;
    if (/[bcdfghjklmnpqrstvwxyz]{5,}/.test(lower)) return true;

    return false;
}

export default function VotersPage() {
    const [voters, setVoters] = useState<Voter[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [showForm, setShowForm] = useState<boolean>(false);
    const [name, setName] = useState<string>("");
    const [age, setAge] = useState<number | "">("");
    const [filterAgeRange, setFilterAgeRange] = useState<boolean>(false);
    const [checkFakeVotes, setCheckFakeVotes] = useState<boolean>(false);
    const [minAge, setMinAge] = useState<number | "">(18);
    const [maxAge, setMaxAge] = useState<number | "">(100);
    const [error, setError] = useState<string | null>(null);
    const [deletingId, setDeletingId] = useState<number | null>(null);

    const fetchVoters = async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch("/api/get-voters");
            if (!res.ok) throw new Error("Failed to fetch voters");
            const data: Voter[] = await res.json();
            setVoters(data);
        } catch (err) {
            setError((err as Error).message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchVoters();
    }, []);

    const addVoter = async () => {
        setError(null);
        if (!name || age === "" || age <= 0) {
            setError("Please enter a valid name and age");
            return;
        }

        try {
            const res = await fetch("/api/get-voters", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, age }),
            });

            if (!res.ok) {
                const json = await res.json();
                throw new Error(json.error || "Failed to add voter");
            }

            setName("");
            setAge("");
            setShowForm(false);
            fetchVoters();
        } catch (err) {
            setError((err as Error).message);
        }
    };

    const deleteVoter = async (id: number) => {
        if (!confirm("Are you sure you want to delete this voter?")) return;

        setDeletingId(id);
        setError(null);
        try {
            const res = await fetch("/api/get-voters", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id }),
            });

            if (!res.ok) {
                const json = await res.json();
                throw new Error(json.error || "Failed to delete voter");
            }

            await fetchVoters();
        } catch (err) {
            setError((err as Error).message);
        } finally {
            setDeletingId(null);
        }
    };

    let displayedVoters = voters;
    let goodVotesCount: number = 0;
    let badVotesCount: number = 0;
    if (filterAgeRange && minAge !== "" && maxAge !== "") {
        displayedVoters = voters.filter(
            (v) =>
                (typeof minAge === "number" && v.age < minAge) ||
                (typeof maxAge === "number" && v.age > maxAge)
        );
    }

    if (checkFakeVotes) {
        voters.forEach(({ name, age }) => {
            const ageInvalid = age < 18 || age > 60;
            const nameInvalid = isWeirdName(name);
            if (ageInvalid || nameInvalid) badVotesCount++;
            else goodVotesCount++;
        });
    }

    const totalVotes = goodVotesCount + badVotesCount;
    const goodPercent: string = totalVotes ? ((goodVotesCount / totalVotes) * 100).toFixed(1) : "0";
    const badPercent: string = totalVotes ? ((badVotesCount / totalVotes) * 100).toFixed(1) : "0";
    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <header className="flex justify-center mb-6 space-x-4 relative">
                <button
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                    onClick={() => setShowForm(true)}
                >
                    Add Voter
                </button>

                {/* Age range inputs */}
                <div className="flex items-center space-x-2">
                    <label>
                        Min Age:
                        <input
                            type="number"
                            min={0}
                            className="w-16 ml-1 rounded border px-2 py-1"
                            value={minAge}
                            onChange={(e) =>
                                setMinAge(e.target.value === "" ? "" : +e.target.value)
                            }
                        />
                    </label>
                    <label>
                        Max Age:
                        <input
                            type="number"
                            min={0}
                            className="w-16 ml-1 rounded border px-2 py-1"
                            value={maxAge}
                            onChange={(e) =>
                                setMaxAge(e.target.value === "" ? "" : +e.target.value)
                            }
                        />
                    </label>

                    <button
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                        onClick={() => setFilterAgeRange((v) => !v)}
                    >
                        {filterAgeRange ? "Show All Voters" : "Check Age Range"}
                    </button>

                    <button
                        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition whitespace-nowrap"
                        onClick={() => setCheckFakeVotes((v) => !v)}
                    >
                        {checkFakeVotes ? "Hide Fake Votes" : "Check Fake Votes"}
                    </button>
                </div>
            </header>

            {checkFakeVotes && (
                <div className="max-w-md mx-auto mb-6 p-4 rounded border border-stone-500 bg-stone-100 text-center text-red-700 font-semibold">
                    <p className="text-green-600">
                        Good Votes: {goodVotesCount} ({goodPercent}%)
                    </p>
                    <p className="text-red-600">
                        Fake Votes: {badVotesCount} ({badPercent}%)
                    </p>
                </div>
            )}

            {loading && <p className="text-center text-gray-500">Loading voters...</p>}
            {error && (
                <p className="text-center text-red-600 mb-4" role="alert">
                    {error}
                </p>
            )}

            {!loading && displayedVoters.length === 0 && (
                <p className="text-center text-gray-700">No voters found.</p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {displayedVoters.map(({ id, name, age, voted_at }) => {
                    const outOfRange =
                        (typeof minAge === "number" && age < minAge) ||
                        (typeof maxAge === "number" && age > maxAge);
                    const weirdName = isWeirdName(name);

                    // Highlight if fake votes mode is ON and condition matches OR if filterAgeRange is ON and voter out of range
                    const highlight =
                        (checkFakeVotes && (outOfRange || weirdName)) ||
                        (filterAgeRange && outOfRange);

                    return (
                        <div
                            key={id}
                            className={`border rounded-lg p-4 shadow hover:shadow-md transition relative ${highlight
                                ? "bg-red-100 border-red-500"
                                : "bg-white border-gray-200"
                                }`}
                        >
                            <h3 className="text-lg font-semibold">{name}</h3>
                            <p>Age: {age}</p>
                            <p className="text-sm text-gray-500">
                                Voted At: {new Date(voted_at).toLocaleString()}
                            </p>

                            <button
                                onClick={() => deleteVoter(id)}
                                disabled={deletingId === id}
                                className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 transition text-sm"
                                aria-label={`Delete voter ${name}`}
                            >
                                {deletingId === id ? "Deleting..." : "Delete"}
                            </button>
                        </div>
                    );
                })}
            </div>

            {/* Modal Form */}
            {showForm && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center"
                    onClick={() => {
                        setShowForm(false);
                        setError(null);
                    }}
                >
                    <div
                        className="bg-white rounded-lg p-6 w-80"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-xl font-semibold mb-4">Add New Voter</h2>

                        <label className="block mb-2">
                            Name:
                            <input
                                type="text"
                                className="w-full border rounded px-2 py-1 mt-1"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                autoFocus
                            />
                        </label>

                        <label className="block mb-4">
                            Age:
                            <input
                                type="number"
                                className="w-full border rounded px-2 py-1 mt-1"
                                value={age === "" ? "" : age}
                                onChange={(e) =>
                                    setAge(e.target.value === "" ? "" : +e.target.value)
                                }
                                min={1}
                            />
                        </label>

                        {error && (
                            <p className="text-red-600 mb-2" role="alert">
                                {error}
                            </p>
                        )}

                        <div className="flex justify-between">
                            <button
                                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
                                onClick={() => {
                                    setShowForm(false);
                                    setError(null);
                                }}
                            >
                                Close
                            </button>

                            <button
                                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                                onClick={addVoter}
                            >
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
