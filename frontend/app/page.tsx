import Image from "next/image";
import { Suspense } from "react";
import AnaliseGithub from "./GithubAnalysis";
import fotoPedro from "../public/foto-pedro-pavao.png";

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

export default function PaginaInicial() {
  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-8 text-slate-100 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute left-1/2 top-24 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-600/10 blur-3xl" />

      <div className="mx-auto max-w-6xl">
        <header className="mb-10 flex items-center justify-between border-b border-white/10 pb-5">
          <a
            href="#inicio"
            className="flex items-center gap-3 text-sm font-semibold tracking-wide text-white"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-violet-300/50 bg-violet-400/10 text-violet-200">
              PP
            </span>
            <span>PORTFÓLIO</span>
          </a>
          <nav aria-label="Navegação principal" className="flex gap-4 text-sm text-slate-300 sm:gap-7">
            <a className="transition hover:text-white" href="#sobre">
              Sobre
            </a>
            <a className="transition hover:text-white" href="#experiencias">
              Experiências
            </a>
            <a className="transition hover:text-white" href="#projetos">
              Projetos
            </a>
            <a className="hidden transition hover:text-white sm:inline" href="#contato">
              Contato
            </a>
          </nav>
        </header>

        <section
          id="inicio"
          className="grid items-center gap-10 rounded-3xl border border-white/10 bg-slate-950/65 p-6 shadow-2xl shadow-violet-950/20 backdrop-blur sm:p-10 md:grid-cols-[1fr_auto] md:p-14"
        >
          <div className="order-2 md:order-1">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-violet-300">
              Candidato a oportunidades profissionais
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Pedro Pavão
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Estudante de Técnico em Programação de Jogos, com perfil criativo,
              comunicativo e adaptável. Gosto de identificar necessidades do
              cotidiano e idealizar soluções práticas por meio da tecnologia.
            </p>
            <p className="mt-3 max-w-2xl leading-7 text-slate-400">
              Busco minha primeira oportunidade formal para contribuir, aprender
              e desenvolver novas competências.
            </p>
          </div>

          <div className="order-1 flex justify-center md:order-2 md:pr-4">
            <div
              className="relative h-44 w-44 overflow-hidden rounded-full border-2 border-violet-300/70 shadow-[0_0_60px_rgba(139,92,246,0.18)] sm:h-56 sm:w-56"
            >
              <Image
                src={fotoPedro}
                alt="Pedro Pavão"
                fill
                sizes="(max-width: 640px) 176px, 224px"
                className="object-cover object-[center_45%]"
                priority
              />
            </div>
          </div>
        </section>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="space-y-8">
            <section
              id="sobre"
              className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 backdrop-blur sm:p-8"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
                Perfil
              </p>
              <h2 className="mt-2 text-2xl font-bold text-white">Sobre mim</h2>
              <p className="mt-4 leading-7 text-slate-300">
                Sou estudante de Técnico em Programação de Jogos e estou em
                busca de uma oportunidade para aprender na prática, colaborar
                com uma equipe e transformar ideias em soluções úteis. Tenho
                facilidade para aprender, gosto de desafios e valorizo uma boa
                comunicação.
              </p>
            </section>

            <section
              id="formacao"
              className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 backdrop-blur sm:p-8"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
                Formação
              </p>
              <h2 className="mt-2 text-2xl font-bold text-white">
                Técnico em Programação de Jogos
              </h2>
              <p className="mt-2 text-slate-400">
                Em andamento · previsão de conclusão em breve
              </p>
            </section>

            <section
              id="experiencias"
              className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 backdrop-blur sm:p-8"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
                Trajetória
              </p>
              <h2 className="mt-2 text-2xl font-bold text-white">
                Experiências e atividades
              </h2>
              <div className="mt-6 space-y-4">
                {atividades.map((atividade) => (
                  <article
                    key={atividade.titulo}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <h3 className="font-semibold text-white">
                        {atividade.titulo}
                      </h3>
                      <span className="rounded-full bg-violet-400/10 px-3 py-1 text-xs font-medium text-violet-200">
                        {atividade.etiqueta}
                      </span>
                    </div>
                    <p className="mt-2 leading-6 text-slate-400">
                      {atividade.descricao}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 backdrop-blur sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
                Objetivo
              </p>
              <p className="mt-3 leading-7 text-slate-300">
                Conquistar uma oportunidade profissional em que eu possa
                aprender, contribuir com dedicação e criatividade e crescer
                junto à equipe, inclusive em áreas fora da tecnologia.
              </p>
            </section>
          </div>

          <aside className="space-y-8">
            <section
              id="contato"
              className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 backdrop-blur sm:p-8"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
                Contato
              </p>
              <h2 className="mt-2 text-2xl font-bold text-white">
                Se conecte comigo
              </h2>
              <dl className="mt-6 space-y-5">
                <div>
                  <dt className="text-xs uppercase tracking-wider text-slate-500">
                    Telefone
                  </dt>
                  <dd className="mt-1">
                    <a
                      className="text-slate-200 transition hover:text-violet-300"
                      href="tel:+5521964647711"
                    >
                      21 96464-7711
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-slate-500">
                    E-mail
                  </dt>
                  <dd className="mt-1 break-all">
                    <a
                      className="text-slate-200 transition hover:text-violet-300"
                      href="mailto:pedro.pavis3005@gmail.com"
                    >
                      pedro.pavis3005@gmail.com
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-slate-500">
                    Localidade
                  </dt>
                  <dd className="mt-1 text-slate-200">Rio de Janeiro — RJ</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-slate-500">
                    Idade
                  </dt>
                  <dd className="mt-1 text-slate-200">19 anos</dd>
                </div>
              </dl>
            </section>

            <section className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 backdrop-blur sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
                Habilidades
              </p>
              <ul className="mt-5 space-y-3">
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

            <section className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 backdrop-blur sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
                Conhecimentos
              </p>
              <div className="mt-5">
                <h3 className="font-semibold text-white">Programação</h3>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {["HTML", "CSS", "JavaScript", "React Native"].map(
                    (conhecimento) => (
                      <li
                        key={conhecimento}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm text-slate-300"
                      >
                        {conhecimento}
                      </li>
                    ),
                  )}
                </ul>
              </div>
              <div className="mt-5">
                <h3 className="font-semibold text-white">Jogos</h3>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {["Godot", "GDScript"].map((conhecimento) => (
                    <li
                      key={conhecimento}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm text-slate-300"
                    >
                      {conhecimento}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

          </aside>
        </div>

        <section
          id="projetos"
          className="mt-8 rounded-3xl border border-violet-300/20 bg-gradient-to-br from-violet-950/70 to-slate-950/70 p-6 sm:p-8"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
            Projetos em destaque
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-2xl border border-white/10 bg-slate-950/50 p-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-violet-300">
                Jogo
              </span>
              <h2 className="mt-2 text-xl font-bold text-white">Rit Game</h2>
              <p className="mt-2 leading-7 text-slate-300">
                Projeto de um jogo de ritmo em desenvolvimento, com o intuito
                de permitir que a pessoa jogue usando qualquer música.
              </p>
            </article>
            <article className="rounded-2xl border border-white/10 bg-slate-950/50 p-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-violet-300">
                Site · HTML, CSS e JavaScript
              </span>
              <h2 className="mt-2 text-xl font-bold text-white">
                Estudos zero ao 1
              </h2>
              <p className="mt-2 leading-7 text-slate-300">
                Site focado nas habilidades que aprendi no início do curso
                técnico. Cada etapa do código representa um ensinamento
                aplicado no próprio site.
              </p>
            </article>
            <article className="rounded-2xl border border-white/10 bg-slate-950/50 p-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-violet-300">
                Projeto
              </span>
              <h2 className="mt-2 text-xl font-bold text-white">
                Auto-Colador de Vídeo
              </h2>
              <p className="mt-2 leading-7 text-slate-300">
                Sistema pensado para resolver um problema do cotidiano,
                transformando ideias em soluções práticas.
              </p>
            </article>
          </div>
        </section>

        <section className="mt-14 border-t border-white/10 pt-10">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
              Código e tecnologia
            </p>
            <h2 className="mt-2 text-3xl font-bold text-white">
              Projetos no GitHub
            </h2>
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

        <footer className="py-8 text-center text-sm text-slate-500">
          Pedro Pavão · Rio de Janeiro, RJ
        </footer>
      </div>
    </main>
  );
}
