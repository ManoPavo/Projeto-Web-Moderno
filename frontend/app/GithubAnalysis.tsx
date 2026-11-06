import Carrossel from "./Carousel";

const usuario = "ManoPavo";

type Repositorio = {
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  size: number;
  pushed_at: string;
  fork: boolean;
  languages_url: string;
};

type Linguagem = {
  nome: string;
  porcentagem: number;
};

const opcoesGitHub = {
  headers: { Accept: "application/vnd.github+json" },
  next: { revalidate: 600 },
};

const coresLinguagens = [
  "bg-sky-400",
  "bg-pink-400",
  "bg-amber-400",
  "bg-emerald-400",
  "bg-violet-400",
];

async function buscarRepositorios(): Promise<Repositorio[]> {
  const resposta = await fetch(
    `https://api.github.com/users/${usuario}/repos?per_page=100&sort=pushed`,
    opcoesGitHub,
  );

  if (!resposta.ok) {
    return [];
  }

  return resposta.json();
}

async function buscarLinguagens(url: string): Promise<Linguagem[]> {
  const resposta = await fetch(url, opcoesGitHub);

  if (!resposta.ok) {
    return [];
  }

  const bytesPorLinguagem: Record<string, number> = await resposta.json();
  const totalDeBytes = Object.values(bytesPorLinguagem).reduce(
    (total, bytes) => total + bytes,
    0,
  );

  if (totalDeBytes === 0) {
    return [];
  }

  return Object.entries(bytesPorLinguagem)
    .map(([nome, bytes]) => ({
      nome,
      porcentagem: (bytes / totalDeBytes) * 100,
    }))
    .sort((a, b) => b.porcentagem - a.porcentagem);
}

export default async function AnaliseGithub() {
  const repositorios = await buscarRepositorios();

  if (repositorios.length === 0) {
    return (
      <p className="text-gray-400">
        Não foi possível carregar os repositórios.
      </p>
    );
  }

  const repositoriosComLinguagens = await Promise.all(
    repositorios.map(async (repositorio) => ({
      repositorio,
      linguagens: await buscarLinguagens(repositorio.languages_url),
    })),
  );

  return (
    <Carrossel>
      {repositoriosComLinguagens.map(({ repositorio, linguagens }) => (
        <a
          key={repositorio.name}
          href={repositorio.html_url}
          target="_blank"
          rel="noreferrer"
          className="block h-full rounded-lg border border-white/10 bg-black/60 p-4 backdrop-blur transition duration-[360ms] ease-out hover:-translate-y-3 hover:border-white/30 hover:shadow-lg hover:shadow-violet-500/20 active:-translate-y-6 active:-rotate-3"
        >
          <h2 className="font-semibold text-white">{repositorio.name}</h2>
          <p className="mt-1 min-h-10 text-sm text-gray-400">
            {repositorio.description ?? "Sem descrição"}
          </p>

          <div className="mt-3 flex h-2 overflow-hidden rounded bg-white/10">
            {linguagens.map((linguagem, indice) => (
              <div
                key={linguagem.nome}
                className={coresLinguagens[indice % coresLinguagens.length]}
                style={{ width: `${linguagem.porcentagem}%` }}
              />
            ))}
          </div>

          <ul className="mt-2 flex flex-wrap gap-x-3 text-xs text-gray-300">
            {linguagens.map((linguagem, indice) => (
              <li
                key={linguagem.nome}
                className="flex items-center gap-1"
              >
                <span
                  className={`inline-block h-2 w-2 rounded-full ${coresLinguagens[indice % coresLinguagens.length]}`}
                />
                {linguagem.nome} {linguagem.porcentagem.toFixed(1)}%
              </li>
            ))}
          </ul>

          <dl className="mt-3 grid grid-cols-4 gap-2 text-center text-xs text-gray-400">
            <div>
              <dt>★</dt>
              <dd className="text-white">{repositorio.stargazers_count}</dd>
            </div>
            <div>
              <dt>Derivações</dt>
              <dd className="text-white">{repositorio.forks_count}</dd>
            </div>
            <div>
              <dt>Problemas</dt>
              <dd className="text-white">{repositorio.open_issues_count}</dd>
            </div>
            <div>
              <dt>Tamanho</dt>
              <dd className="text-white">{repositorio.size} KB</dd>
            </div>
          </dl>

          <p className="mt-2 text-xs text-gray-500">
            Última atualização:{" "}
            {new Date(repositorio.pushed_at).toLocaleDateString("pt-BR")}
            {repositorio.fork && " · derivado"}
          </p>
        </a>
      ))}
    </Carrossel>
  );
}
