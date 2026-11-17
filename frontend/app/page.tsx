import Image from "next/image";
import { Suspense } from "react";
import AnaliseGithub from "./GithubAnalysis";
import personagemPavis from "./elemt/Pavis.png";
import fotoPedro from "../public/foto-pedro-pavao.png";

type PosePersonagem =
  | "mascot-wave"
  | "mascot-guide"
  | "mascot-step"
  | "mascot-rest";

function Personagem({
  pose,
  className = "",
}: {
  pose: PosePersonagem;
  className?: string;
}) {
  return (
    <Image
      src={personagemPavis}
      alt=""
      aria-hidden="true"
      width={512}
      height={512}
      className={`mascot-image ${pose} ${className}`}
    />
  );
}

const habilidades = [
  "Boa comunicação e sociabilidade",
  "Adaptabilidade a situações novas",
  "Criatividade e geração de ideias",
  "Iniciativa para resolver problemas",
  "Facilidade para aprender",
  "Colaboração e trabalho em equipe",
];

const atividades = [
  {
    titulo: "Venda de doces — atividade autônoma",
    descricao:
      "Venda de doces na escola e na rua, com atendimento direto a clientes, comunicação e iniciativa.",
    etiqueta: "Autonomia",
  },
  {
    titulo: "Trabalho voluntário — ação comunitária da igreja",
    descricao:
      "Participação na preparação e distribuição de alimentos para pessoas em situação de rua.",
    etiqueta: "Voluntariado",
  },
  {
    titulo: "Trabalhos freelance — Workana e 99Freelas",
    descricao:
      "Realização de trabalhos por plataformas de serviços freelance, desenvolvendo autonomia, responsabilidade e contato com demandas de clientes.",
    etiqueta: "Freelance",
  },
];

const tecnologias = [
  { marcador: "5", nome: "HTML5", grupo: "Web" },
  { marcador: "#", nome: "CSS", grupo: "Web" },
  { marcador: "JS", nome: "JavaScript", grupo: "Web" },
  { marcador: "R", nome: "React Native", grupo: "Mobile" },
  { marcador: "G", nome: "Godot", grupo: "Jogos" },
  { marcador: "{ }", nome: "GDScript", grupo: "Jogos" },
];

const projetos = [
  {
    tipo: "Jogo",
    titulo: "Rit Game",
    descricao:
      "Projeto de um jogo de ritmo em desenvolvimento, com o intuito de permitir que a pessoa jogue usando qualquer música.",
    simbolo: "♪",
    pose: "mascot-wave",
  },
  {
    tipo: "Site · HTML, CSS e JavaScript",
    titulo: "Estudos zero ao 1",
    descricao:
      "Site focado nas habilidades que aprendi no início do curso técnico. Cada etapa do código representa um ensinamento aplicado no próprio site.",
    simbolo: "</>",
    pose: "mascot-guide",
  },
  {
    tipo: "Projeto",
    titulo: "Auto-Colador de Vídeo",
    descricao:
      "Sistema pensado para resolver um problema do cotidiano, transformando ideias em soluções práticas.",
    simbolo: "✧",
    pose: "mascot-rest",
  },
] satisfies {
  tipo: string;
  titulo: string;
  descricao: string;
  simbolo: string;
  pose: PosePersonagem;
}[];

function TituloSecao({
  etiqueta,
  titulo,
  id,
}: {
  etiqueta: string;
  titulo: string;
  id?: string;
}) {
  return (
    <div className="mb-6">
      <p className="section-kicker">{etiqueta}</p>
      <h2
        id={id}
        className="medieval-title mt-2 text-2xl font-bold text-white sm:text-3xl"
      >
        {titulo}
      </h2>
    </div>
  );
}

export default function PaginaInicial() {
  return (
    <main className="relative min-h-screen overflow-hidden px-4 pb-8 text-slate-100 sm:px-6 lg:px-8">
      <div aria-hidden="true" className="ambient-glow ambient-glow-one" />
      <div aria-hidden="true" className="ambient-glow ambient-glow-two" />

      <div className="relative mx-auto max-w-6xl">
        <header className="sticky top-3 z-20 mt-3 flex items-center justify-between gap-4 rounded-2xl border border-violet-300/15 bg-[#100b19]/90 px-4 py-3 shadow-lg shadow-black/20 backdrop-blur-xl sm:px-6">
          <a
            href="#inicio"
            className="group flex min-w-0 items-center gap-3"
            aria-label="Pedro Pavão, início"
          >
            <span className="crest-mark flex h-10 w-10 shrink-0 items-center justify-center text-sm font-bold text-violet-100">
              PP
            </span>
            <span className="min-w-0">
              <span className="medieval-title block truncate text-sm font-bold text-white sm:text-base">
                Pedro Pavão
              </span>
              <span className="hidden text-[10px] uppercase tracking-[0.2em] text-violet-300/70 sm:block">
                Crônicas de um criador
              </span>
            </span>
          </a>
          <nav
            aria-label="Navegação principal"
            className="flex items-center gap-3 text-xs text-slate-300 sm:gap-6 sm:text-sm"
          >
            <a className="nav-link" href="#sobre">
              Jornada
            </a>
            <a className="nav-link" href="#arsenal">
              Arsenal
            </a>
            <a className="nav-link" href="#projetos">
              Projetos
            </a>
            <a className="nav-link hidden sm:inline" href="#contato">
              Contato
            </a>
          </nav>
        </header>

        <section
          id="inicio"
          className="hero-panel relative mt-6 grid scroll-mt-28 items-center gap-10 overflow-hidden p-6 sm:p-10 md:grid-cols-[1fr_auto] md:p-14"
        >
          <span aria-hidden="true" className="hero-ornament">
            ✧
          </span>
          <div className="relative z-10 order-2 md:order-1">
            <p className="section-kicker mb-4">
              <span aria-hidden="true" className="mr-2 text-violet-200">
                ✦
              </span>
              Candidato a oportunidades profissionais
            </p>
            <h1 className="medieval-title max-w-2xl text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Pedro
              <span className="block text-violet-300">Pavão</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-violet-50/80 sm:text-lg sm:leading-8">
              Estudante de Técnico em Programação de Jogos, com perfil criativo,
              comunicativo e adaptável. Gosto de identificar necessidades do
              cotidiano e idealizar soluções práticas por meio da tecnologia.
            </p>
            <p className="mt-3 max-w-xl leading-7 text-slate-400">
              Em busca da primeira oportunidade formal para contribuir,
              aprender e desenvolver novas competências.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="action-button" href="#projetos">
                Explorar projetos <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs text-violet-100/70">
              <span>
                <span aria-hidden="true" className="mr-2 text-violet-300">
                  ⌖
                </span>
                Rio de Janeiro, RJ
              </span>
              <span>
                <span aria-hidden="true" className="mr-2 text-violet-300">
                  ⚔
                </span>
                Programação de jogos
              </span>
            </div>
          </div>

          <div className="relative order-1 mx-auto md:order-2 md:mr-3">
            <div aria-hidden="true" className="portrait-halo" />
            <div className="portrait-frame relative h-52 w-52 overflow-hidden sm:h-64 sm:w-64">
              <Image
                src={fotoPedro}
                alt="Pedro Pavão"
                fill
                sizes="(max-width: 640px) 208px, 256px"
                className="object-cover object-[center_45%]"
                priority
              />
            </div>
            <div className="portrait-caption">
              <Personagem pose="mascot-wave" className="h-9 w-9" />
              <span aria-hidden="true" className="text-violet-200">
                ✦
              </span>
              <span>O aventureiro</span>
              <span aria-hidden="true" className="text-violet-200">
                ✦
              </span>
            </div>
          </div>
        </section>

        <section
          id="arsenal"
          aria-labelledby="arsenal-titulo"
          className="mt-12 scroll-mt-28"
        >
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="section-kicker">Ferramentas da jornada</p>
              <h2
                id="arsenal-titulo"
                className="medieval-title mt-2 text-2xl font-bold text-white"
              >
                Meu arsenal
              </h2>
            </div>
            <span className="hidden text-xs text-slate-500 sm:block">
              Conhecimentos em desenvolvimento
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {tecnologias.map((tecnologia) => (
              <article
                key={tecnologia.nome}
                className="sigil-card group flex items-center gap-3 p-3 sm:p-4"
              >
                <span
                  aria-hidden="true"
                  className="sigil-icon flex h-11 w-11 shrink-0 items-center justify-center text-sm font-black text-violet-100 transition group-hover:-rotate-6 group-hover:scale-105"
                >
                  {tecnologia.marcador}
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-xs font-semibold text-white sm:text-sm">
                    {tecnologia.nome}
                  </span>
                  <span className="mt-1 block text-[10px] uppercase tracking-[0.16em] text-violet-300/60">
                    {tecnologia.grupo}
                  </span>
                </span>
              </article>
            ))}
          </div>
        </section>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.35fr_0.75fr]">
          <div className="space-y-6">
            <section
              id="sobre"
              className="stone-card scroll-mt-28 p-6 sm:p-8"
            >
              <TituloSecao etiqueta="A história até aqui" titulo="Minha jornada" />
              <p className="leading-7 text-slate-300">
                Sou estudante de Técnico em Programação de Jogos, e essa jornada
                tem me permitido unir criatividade e tecnologia. Gosto de
                aprender coisas novas, encarar desafios e transformar minhas
                ideias em projetos. Valorizo colocar a teoria em prática e
                transformar o conhecimento em soluções úteis.
              </p>
              <div className="rune-divider my-7" aria-hidden="true">
                <span>✦</span>
              </div>
              <div className="flex items-start gap-4">
                <Personagem
                  pose="mascot-guide"
                  className="h-14 w-14 shrink-0"
                />
                <div>
                  <p className="section-kicker">Formação</p>
                  <h3 className="medieval-title mt-1 text-lg font-bold text-white">
                    Técnico em Programação de Jogos
                  </h3>
                  <p className="mt-1 text-sm text-slate-400">
                    Em andamento · previsão de conclusão em breve
                  </p>
                </div>
              </div>
            </section>

            <section
              id="experiencias"
              className="stone-card scroll-mt-28 p-6 sm:p-8"
            >
              <TituloSecao
                etiqueta="Missões concluídas"
                titulo="Experiências e atividades"
              />
              <div className="space-y-4">
                {atividades.map((atividade, indice) => (
                  <article
                    key={atividade.titulo}
                    className="quest-card relative pl-12 pr-4 py-4 sm:pl-14 sm:pr-5"
                  >
                    <span
                      aria-hidden="true"
                      className="quest-number absolute left-3 top-4 flex h-7 w-7 items-center justify-center text-xs font-bold text-violet-200 sm:left-4"
                    >
                      0{indice + 1}
                    </span>
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <h3 className="font-semibold leading-6 text-white">
                        {atividade.titulo}
                      </h3>
                      <span className="rounded-full border border-violet-300/20 bg-violet-300/[0.07] px-3 py-1 text-[10px] font-medium uppercase tracking-wide text-violet-200">
                        {atividade.etiqueta}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {atividade.descricao}
                    </p>
                  </article>
                ))}
              </div>
              <div aria-hidden="true" className="mascot-trail">
                <Personagem pose="mascot-step" className="h-16 w-16" />
              </div>
            </section>

            <section className="stone-card p-6 sm:p-8">
              <TituloSecao etiqueta="Próximo capítulo" titulo="Meu objetivo" />
              <p className="leading-7 text-slate-300">
                Conquistar uma oportunidade profissional em que eu possa
                aprender, contribuir com dedicação e criatividade e crescer
                junto à equipe, inclusive em áreas fora da tecnologia.
              </p>
            </section>
          </div>

          <aside className="space-y-6">
            <section
              id="contato"
              className="stone-card scroll-mt-28 p-6 sm:p-8"
            >
              <TituloSecao etiqueta="Abra um portal" titulo="Contato" />
              <p className="mb-6 text-sm leading-6 text-slate-400">
                Vamos conversar sobre ideias, projetos e oportunidades.
              </p>
              <dl className="space-y-5">
                <div className="contact-row">
                  <dt>Telefone</dt>
                  <dd>
                    <a href="tel:+5521964647711">21 96464-7711</a>
                  </dd>
                </div>
                <div className="contact-row">
                  <dt>E-mail</dt>
                  <dd>
                    <a href="mailto:pedro.pavis3005@gmail.com">
                      pedro.pavis3005@gmail.com
                    </a>
                  </dd>
                </div>
                <div className="contact-row">
                  <dt>Localidade</dt>
                  <dd>Rio de Janeiro — RJ</dd>
                </div>
                <div className="contact-row">
                  <dt>Idade</dt>
                  <dd>19 anos</dd>
                </div>
              </dl>
            </section>

            <section className="stone-card p-6 sm:p-8">
              <TituloSecao etiqueta="Atributos" titulo="Habilidades" />
              <ul className="space-y-3">
                {habilidades.map((habilidade) => (
                  <li
                    key={habilidade}
                    className="flex gap-3 text-sm leading-6 text-slate-300"
                  >
                    <span aria-hidden="true" className="text-violet-300">
                      ✦
                    </span>
                    {habilidade}
                  </li>
                ))}
              </ul>
            </section>
          </aside>
        </div>

        <section
          id="projetos"
          className="mt-12 scroll-mt-28"
          aria-labelledby="projetos-titulo"
        >
          <TituloSecao
            etiqueta="Artefatos criados"
            titulo="Projetos em destaque"
            id="projetos-titulo"
          />
          <div className="grid gap-4 md:grid-cols-3">
            {projetos.map((projeto, indice) => (
              <article key={projeto.titulo} className="project-card group p-5 sm:p-6">
                <div className="mb-5 flex items-center justify-between">
                  <span className="project-sigil flex h-12 w-12 items-center justify-center text-lg font-bold text-violet-100">
                    {projeto.simbolo}
                  </span>
                  <Personagem pose={projeto.pose} className="h-14 w-14" />
                  <span className="font-mono text-xs tracking-[0.2em] text-violet-300/50">
                    0{indice + 1}
                  </span>
                </div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-violet-300">
                  {projeto.tipo}
                </p>
                <h3 className="medieval-title mt-2 text-xl font-bold text-white">
                  {projeto.titulo}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {projeto.descricao}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="github"
          className="stone-card mt-12 scroll-mt-28 p-6 sm:p-8"
        >
          <div className="mb-7 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="section-kicker">Código e tecnologia</p>
              <h2 className="medieval-title mt-2 text-2xl font-bold text-white sm:text-3xl">
                Projetos no GitHub
              </h2>
            </div>
            <span
              aria-hidden="true"
              className="hidden text-3xl text-violet-300/40 sm:block"
            >
              ⛨
            </span>
          </div>
          <Suspense
            fallback={
              <p className="text-sm text-slate-400" role="status">
                Carregando projetos do GitHub...
              </p>
            }
          >
            <AnaliseGithub />
          </Suspense>
        </section>

        <footer className="mt-10 border-t border-violet-300/10 py-7 text-center">
          <p className="medieval-title text-sm text-violet-100/70">
            Pedro Pavão
          </p>
          <p className="mt-1 text-xs text-slate-500">
            Rio de Janeiro, RJ · Feito com criatividade e código
          </p>
        </footer>
      </div>
    </main>
  );
}
