
import Carousel from "./Carousel";
const USER = "ManoPavo";

type Repo = {
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  size: number; // em KB
  pushed_at: string;
  fork: boolean;
  languages_url: string;
};

const GH = { headers: { Accept: "application/vnd.github+json" }, next: { revalidate: 600 } };


async function getRepos(): Promise<Repo[]> {
  const res = await fetch(
    `https://api.github.com/users/${USER}/repos?per_page=100&sort=pushed`,
    GH,
  );
  if (!res.ok) return [];
  return res.json();
}


async function getLanguages(url: string): Promise<[string, number][]> {
  const res = await fetch(url, GH);
  if (!res.ok) return [];
  const bytes: Record<string, number> = await res.json();
  const total = Object.values(bytes).reduce((a, b) => a + b, 0);
  return Object.entries(bytes)
    .map(([lang, b]): [string, number] => [lang, (b / total) * 100])
    .sort((a, b) => b[1] - a[1]);
}

const COLORS = ["bg-sky-400", "bg-pink-400", "bg-amber-400", "bg-emerald-400", "bg-violet-400"];

export default async function GithubAnalysis() {
  const repos = await getRepos();
 
  const languages = await Promise.all(repos.map((r) => getLanguages(r.languages_url)));

  if (!repos.length) {
    return <p className="text-gray-400">Não foi possível carregar os repositórios.</p>;
  }

  
  return (
    <Carousel>
      {repos.map((repo, i) => (
        <a
          key={repo.name}
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
          className="block h-full rounded-lg border border-white/10 bg-black/60 p-4 backdrop-blur transition duration-[360ms] ease-out hover:-translate-y-3 hover:border-white/30 hover:shadow-lg hover:shadow-violet-500/20 active:-translate-y-6 active:-rotate-3"
        >
          <h2 className="font-semibold text-white">{repo.name}</h2>
          <p className="mt-1 min-h-10 text-sm text-gray-400">
            {repo.description ?? "Sem descrição"}
          </p>

          
          <div className="mt-3 flex h-2 overflow-hidden rounded bg-white/10">
            {languages[i].map(([lang, pct], j) => (
              <div key={lang} className={COLORS[j % COLORS.length]} style={{ width: `${pct}%` }} />
            ))}
          </div>
          <ul className="mt-2 flex flex-wrap gap-x-3 text-xs text-gray-300">
            {languages[i].map(([lang, pct], j) => (
              <li key={lang} className="flex items-center gap-1">
                <span className={`inline-block h-2 w-2 rounded-full ${COLORS[j % COLORS.length]}`} />
                {lang} {pct.toFixed(1)}%
              </li>
            ))}
          </ul>

          
          <dl className="mt-3 grid grid-cols-4 gap-2 text-center text-xs text-gray-400">
            <div><dt>★</dt><dd className="text-white">{repo.stargazers_count}</dd></div>
            <div><dt>Forks</dt><dd className="text-white">{repo.forks_count}</dd></div>
            <div><dt>Issues</dt><dd className="text-white">{repo.open_issues_count}</dd></div>
            <div><dt>Tamanho</dt><dd className="text-white">{repo.size} KB</dd></div>
          </dl>
          <p className="mt-2 text-xs text-gray-500">
            Último push: {new Date(repo.pushed_at).toLocaleDateString("pt-BR")}
            {repo.fork && " · fork"}
          </p>
        </a>
      ))}
    </Carousel>
  );
}
