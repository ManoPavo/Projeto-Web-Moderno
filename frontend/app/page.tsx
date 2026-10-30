import GithubAnalysis from "./GithubAnalysis";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div className="flex min-h-screen flex-col items-center justify-center gap-8 px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white">
            Portfólio
          </h1>

          <p className="mt-4 text-gray-400">
            Next.js + TypeScript + Tailwind CSS
          </p>
        </div>

        <GithubAnalysis />
      </div>
    </main>
  );
}