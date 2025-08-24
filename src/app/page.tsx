import LinkButton from "./(components)/LinkButton";

export default function HomeIndex() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-5 p-5">
      <LinkButton href="/f4">Fantastic Four 4</LinkButton>
      <LinkButton href="/voters">Voters</LinkButton>
      <LinkButton href="/tailwind-motion">Tailwind-Motion</LinkButton>
    </div>
  );
}
