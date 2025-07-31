"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function F4() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            className="min-h-screen flex items-center justify-center"
        >
            <div className="text-center pt-20 text-xl font-bold">
                <Image
                src="/f4/1.png"
                width={500}
                height={500}
                alt="reeds"
                className="rotate-90 hover:scale-y-200 transition-all ease-in-out duration-300"
                />
            </div>

            {/* Follower image */}
            <img
                src="/f4/galactus.jpg"
                alt="cursor-follower"
                className="pointer-events-none fixed w-50 z-50"
                style={{
                    left: position.x,
                    top: position.y + 20, // appears below cursor
                    transform: "translate(-50%, 0)",
                }}
            />
        </div>
    );
}
