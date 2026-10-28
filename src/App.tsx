function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased">
      {/* ===== CABEÇALHO ===== */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 md:px-6 lg:gap-8 lg:px-8 lg:py-4">
          <a href="#" className="flex shrink-0 items-center gap-2" aria-label="DevLearn, página inicial">
            <span
              className="flex h-9 w-9 items-center justify-center text-2xl lg:rounded-lg lg:bg-slate-900 lg:text-lg"
              aria-hidden="true"
            >
              ⚡
            </span>
            <span className="font-display text-xl font-bold text-slate-900 lg:text-2xl">DevLearn</span>
          </a>

          {/* Busca central: só no desktop */}
          <form role="search" className="hidden max-w-md flex-1 items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 transition focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-100 lg:flex">
            <span aria-hidden="true">🔍</span>
            <label htmlFor="busca-cabecalho" className="sr-only">
              Buscar cursos
            </label>
            <input
              id="busca-cabecalho"
              type="search"
              placeholder="Buscar cursos, trilhas, tecnologias (ex: React, Docker, Figma)..."
              className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400"
            />
            <kbd className="shrink-0 rounded border border-slate-200 bg-slate-50 px-1.5 py-0.5 font-sans text-xs text-slate-500">
              Ctrl + K
            </kbd>
          </form>

          {/* Links: a partir do tablet */}
          <nav aria-label="Navegação principal" className="ml-auto hidden items-center gap-6 text-sm font-medium md:flex">
            <a href="#catalogo" className="text-slate-900 underline decoration-2 underline-offset-8">
              Catálogo
            </a>
            <a href="#trilhas" className="text-slate-500 transition hover:text-slate-900">
              Trilhas
            </a>
            <a href="#" className="hidden text-slate-500 transition hover:text-slate-900 lg:inline">
              Instrutores
            </a>
            <a href="#" className="text-slate-500 transition hover:text-slate-900 lg:hidden">
              Favoritos (0)
            </a>
          </nav>

          {/* Ações do desktop */}
          <span className="hidden h-6 w-px bg-slate-200 lg:block" aria-hidden="true"></span>
          <a href="#" className="hidden items-center gap-1 text-sm font-medium text-red-500 transition hover:text-red-600 lg:inline-flex">
            <span aria-hidden="true">♥</span> Favoritos (0)
          </a>

          {/* Botão Entrar: só no tablet */}
          <button
            type="button"
            className="hidden rounded-lg border border-slate-900 px-4 py-1.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-900 hover:text-white md:inline-flex lg:hidden"
          >
            Entrar
          </button>

          {/* Botão Cadastre-se: só no desktop */}
          <button
            type="button"
            className="hidden rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600 lg:inline-flex"
          >
            Cadastre-se
          </button>

          {/* Menu: só no mobile */}
          <button
            type="button"
            className="ml-auto inline-flex items-center gap-1 rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 md:hidden"
          >
            <span aria-hidden="true">☰</span> Menu
          </button>
        </div>
      </header>

      <main>
        {/* ===== HERO ===== */}
        <section className="border-b border-slate-200 bg-linear-to-b from-white to-slate-50">
          <div className="mx-auto max-w-7xl px-4 py-12 text-center md:px-6 md:py-16 lg:grid lg:grid-cols-3 lg:items-center lg:gap-12 lg:px-8 lg:py-20 lg:text-left">
            <div className="lg:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">
                Plataforma de capacitação tech
              </p>
              <h1 className="mt-3 font-display text-3xl font-extrabold leading-tight text-slate-900 md:text-4xl lg:text-5xl">
                Acelere sua carreira em tecnologia com o DevLearn
              </h1>
              <p className="mx-auto mt-4 max-w-xl text-slate-500 md:text-lg lg:mx-0 lg:max-w-2xl">
                Projetos práticos, mentorias e catálogo com as habilidades mais requisitadas pela indústria de
                software.
              </p>

              {/* Busca: mobile e tablet */}
              <form
                role="search"
                className="mx-auto mt-8 flex max-w-lg items-center gap-2 rounded-xl border border-slate-300 bg-white p-2 pl-4 shadow-sm transition focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-100 lg:hidden"
              >
                <span aria-hidden="true">🔍</span>
                <label htmlFor="busca-hero" className="sr-only">
                  Buscar por curso, tecnologia ou instrutor
                </label>
                <input
                  id="busca-hero"
                  type="search"
                  placeholder="Buscar por curso, tecnologia ou instrutor..."
                  className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-lg bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-900 hover:text-white"
                >
                  Buscar
                </button>
              </form>

              {/* Botões de ação: só no desktop */}
              <div className="mt-8 hidden gap-4 lg:flex">
                <a
                  href="#catalogo"
                  className="rounded-lg bg-slate-900 px-6 py-3 font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-md"
                >
                  Explorar Catálogo de Cursos ↓
                </a>
                <a
                  href="#trilhas"
                  className="rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:border-slate-900"
                >
                  Ver Trilhas em Destaque
                </a>
              </div>
            </div>

            {/* Painel de Progresso Rápido: só no desktop */}
            <aside
              aria-labelledby="titulo-painel"
              className="hidden rounded-xl border-2 border-dashed border-slate-300 bg-white p-6 shadow-sm lg:block"
            >
              <h2 id="titulo-painel" className="flex items-center gap-2 font-display font-bold text-slate-900">
                <span aria-hidden="true">📊</span> Painel de Progresso Rápido
              </h2>
              <p className="mt-1 text-sm text-slate-500">Resumo da sua navegação pelo catálogo.</p>
              <dl className="mt-4 divide-y divide-slate-100 text-sm">
                <div className="flex items-center justify-between py-3">
                  <dt className="text-slate-600">Cursos salvos nos favoritos:</dt>
                  <dd className="font-semibold text-red-500">0 selecionados</dd>
                </div>
                <div className="flex items-center justify-between py-3">
                  <dt className="text-slate-600">Filtro ativo no catálogo:</dt>
                  <dd className="font-semibold text-slate-900">Todos os Cursos</dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>

        {/* ===== TRILHAS DE CARREIRA (listagem secundária) ===== */}
        <section id="trilhas" aria-labelledby="titulo-trilhas" className="scroll-mt-20 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8 lg:py-16">
            <div className="flex flex-wrap items-end justify-between gap-3 border-b border-slate-200 pb-4">
              <div>
                <h2 id="titulo-trilhas" className="font-display text-2xl font-bold text-slate-900">
                  Trilhas de Carreira Acelerada
                </h2>
                <p className="mt-1 text-sm text-slate-500">3 formações completas, do básico ao avançado.</p>
              </div>
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                Formações Guiadas
              </span>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
              {/* Trilha 01 */}
              <article className="flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <div className="flex items-start justify-between">
                  <span className="text-xs font-bold uppercase tracking-wide text-blue-600">Trilha acelerada</span>
                  <span className="font-display text-2xl font-bold leading-none text-slate-200" aria-hidden="true">
                    01
                  </span>
                </div>
                <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-slate-900">
                  Trilha Engenheiro Front-End Moderno
                </h3>
                <p className="mt-2 flex-1 text-sm text-slate-500">
                  Formação completa com HTML Semântico, CSS/Tailwind, React, TypeScript e consumo de APIs.
                </p>
                <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs font-medium text-slate-600">
                  <li>📚 5 cursos</li>
                  <li>⏱️ 160h</li>
                  <li>⭐ Certificado</li>
                </ul>
                <a
                  href="#catalogo"
                  className="mt-5 rounded-lg border border-slate-300 bg-slate-100 py-2 text-center text-sm font-semibold text-slate-900 transition hover:border-slate-900 hover:bg-slate-900 hover:text-white"
                >
                  Explorar Trilha →
                </a>
              </article>

              {/* Trilha 02 */}
              <article className="flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <div className="flex items-start justify-between">
                  <span className="text-xs font-bold uppercase tracking-wide text-blue-600">Trilha acelerada</span>
                  <span className="font-display text-2xl font-bold leading-none text-slate-200" aria-hidden="true">
                    02
                  </span>
                </div>
                <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-slate-900">
                  Trilha Arquiteto Full Stack JavaScript
                </h3>
                <p className="mt-2 flex-1 text-sm text-slate-500">
                  Domine o ecossistema Node.js, bancos de dados, microsserviços e integração contínua.
                </p>
                <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs font-medium text-slate-600">
                  <li>📚 6 cursos</li>
                  <li>⏱️ 210h</li>
                  <li>⭐ Certificado</li>
                </ul>
                <a
                  href="#catalogo"
                  className="mt-5 rounded-lg border border-slate-300 bg-slate-100 py-2 text-center text-sm font-semibold text-slate-900 transition hover:border-slate-900 hover:bg-slate-900 hover:text-white"
                >
                  Explorar Trilha →
                </a>
              </article>

              {/* Trilha 03 */}
              <article className="flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <div className="flex items-start justify-between">
                  <span className="text-xs font-bold uppercase tracking-wide text-blue-600">Trilha acelerada</span>
                  <span className="font-display text-2xl font-bold leading-none text-slate-200" aria-hidden="true">
                    03
                  </span>
                </div>
                <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-slate-900">
                  Trilha UI/UX &amp; Design Systems
                </h3>
                <p className="mt-2 flex-1 text-sm text-slate-500">
                  Aprenda a construir interfaces acessíveis, consistentes e protótipos de alta usabilidade.
                </p>
                <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs font-medium text-slate-600">
                  <li>📚 4 cursos</li>
                  <li>⏱️ 120h</li>
                  <li>⭐ Certificado</li>
                </ul>
                <a
                  href="#catalogo"
                  className="mt-5 rounded-lg border border-slate-300 bg-slate-100 py-2 text-center text-sm font-semibold text-slate-900 transition hover:border-slate-900 hover:bg-slate-900 hover:text-white"
                >
                  Explorar Trilha →
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* ===== CATÁLOGO DE CURSOS (listagem principal) ===== */}
        <section id="catalogo" aria-labelledby="titulo-catalogo" className="scroll-mt-20">
          <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8 lg:py-16">
            <div className="flex flex-wrap items-end justify-between gap-3 border-b border-slate-200 pb-4">
              <div>
                <h2 id="titulo-catalogo" className="font-display text-2xl font-bold text-slate-900">
                  Catálogo Completo de Cursos
                </h2>
                <p className="mt-1 text-sm text-slate-500">Cursos práticos com instrutores do mercado.</p>
              </div>
              <div className="flex items-center gap-4">
                {/* Selo de quantidade: só no mobile */}
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 md:hidden">
                  10 cursos
                </span>
                {/* Contador: só no desktop */}
                <span className="hidden text-sm text-slate-500 lg:inline">
                  Exibindo <strong className="text-slate-900">10 de 10</strong> cursos
                </span>
                {/* Ordenação: tablet e desktop */}
                <button
                  type="button"
                  className="hidden items-center gap-1 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm font-semibold text-slate-900 transition hover:border-slate-900 md:inline-flex"
                >
                  Ordenar por Nota <span aria-hidden="true">▼</span>
                </button>
              </div>
            </div>

            {/* Filtros por categoria: rolagem horizontal no mobile, quebra de linha a partir do tablet */}
            <div
              role="group"
              aria-label="Filtrar cursos por categoria"
              className="-mx-4 mt-6 flex gap-2 overflow-x-auto px-4 pb-2 md:mx-0 md:flex-wrap md:overflow-visible md:px-0"
            >
              <button
                type="button"
                aria-pressed="true"
                className="shrink-0 whitespace-nowrap rounded-full bg-slate-900 px-4 py-1.5 text-sm font-semibold text-white"
              >
                Todos os Cursos (10)
              </button>
              <button
                type="button"
                aria-pressed="false"
                className="shrink-0 whitespace-nowrap rounded-full border border-slate-300 bg-white px-4 py-1.5 text-sm font-medium text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
              >
                Front-end <span className="hidden lg:inline">(3)</span>
              </button>
              <button
                type="button"
                aria-pressed="false"
                className="shrink-0 whitespace-nowrap rounded-full border border-slate-300 bg-white px-4 py-1.5 text-sm font-medium text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
              >
                Back-end &amp; APIs <span className="hidden lg:inline">(2)</span>
              </button>
              <button
                type="button"
                aria-pressed="false"
                className="shrink-0 whitespace-nowrap rounded-full border border-slate-300 bg-white px-4 py-1.5 text-sm font-medium text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
              >
                DevOps &amp; Cloud <span className="hidden lg:inline">(2)</span>
              </button>
              <button
                type="button"
                aria-pressed="false"
                className="shrink-0 whitespace-nowrap rounded-full border border-slate-300 bg-white px-4 py-1.5 text-sm font-medium text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
              >
                UI/UX &amp; Design <span className="hidden lg:inline">(2)</span>
              </button>
              <button
                type="button"
                aria-pressed="false"
                className="hidden shrink-0 whitespace-nowrap rounded-full border border-slate-300 bg-white px-4 py-1.5 text-sm font-medium text-slate-700 transition hover:border-slate-900 hover:text-slate-900 lg:inline-flex"
              >
                Arquitetura (1)
              </button>
            </div>

            {/* Grade de cursos: 1 coluna (mobile) → 2 (tablet) → 4 (desktop) */}
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {/* Curso 1 */}
              <article className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <img
                  src="/capas/react.jpg"
                  alt="Capa do curso React 19 & TypeScript do Zero ao Pro"
                  width="800"
                  height="450"
                  loading="lazy"
                  className="aspect-video w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">
                      Front-end • 48h
                    </span>
                    <span className="text-sm font-semibold text-amber-500">4.9 ★</span>
                  </div>
                  <h3 className="mt-3 font-display text-base font-semibold leading-snug text-slate-900">
                    React 19 &amp; TypeScript do Zero ao Pro
                  </h3>
                  <p className="mt-1 mb-4 text-sm text-slate-500">Prof. Lucas Santos</p>
                  <div className="mt-auto flex items-center justify-between border-t border-dashed border-slate-200 pt-3">
                    <span className="font-semibold text-emerald-600">Gratuito</span>
                    <button
                      type="button"
                      className="rounded-md border border-slate-300 px-3 py-1 text-sm font-medium text-slate-700 transition hover:border-red-300 hover:bg-red-50 hover:text-red-500"
                    >
                      ♡ Favoritar
                    </button>
                  </div>
                </div>
              </article>

              {/* Curso 2 */}
              <article className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <img
                  src="/capas/tailwind.jpg"
                  alt="Capa do curso Tailwind CSS Moderno e Responsivo"
                  width="800"
                  height="450"
                  loading="lazy"
                  className="aspect-video w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">
                      Design &amp; CSS • 24h
                    </span>
                    <span className="text-sm font-semibold text-amber-500">4.8 ★</span>
                  </div>
                  <h3 className="mt-3 font-display text-base font-semibold leading-snug text-slate-900">
                    Tailwind CSS Moderno e Responsivo
                  </h3>
                  <p className="mt-1 mb-4 text-sm text-slate-500">Prof. Carla Mendes</p>
                  <div className="mt-auto flex items-center justify-between border-t border-dashed border-slate-200 pt-3">
                    <span className="font-semibold text-emerald-600">Gratuito</span>
                    <button
                      type="button"
                      className="rounded-md border border-slate-300 px-3 py-1 text-sm font-medium text-slate-700 transition hover:border-red-300 hover:bg-red-50 hover:text-red-500"
                    >
                      ♡ Favoritar
                    </button>
                  </div>
                </div>
              </article>

              {/* Curso 3 */}
              <article className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <img
                  src="/capas/node.jpg"
                  alt="Capa do curso Node.js, Express & APIs RESTful"
                  width="800"
                  height="450"
                  loading="lazy"
                  className="aspect-video w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">
                      Back-end • 36h
                    </span>
                    <span className="text-sm font-semibold text-amber-500">4.9 ★</span>
                  </div>
                  <h3 className="mt-3 font-display text-base font-semibold leading-snug text-slate-900">
                    Node.js, Express &amp; APIs RESTful
                  </h3>
                  <p className="mt-1 mb-4 text-sm text-slate-500">Prof. Rodrigo Silva</p>
                  <div className="mt-auto flex items-center justify-between border-t border-dashed border-slate-200 pt-3">
                    <span className="font-semibold text-emerald-600">Gratuito</span>
                    <button
                      type="button"
                      className="rounded-md border border-slate-300 px-3 py-1 text-sm font-medium text-slate-700 transition hover:border-red-300 hover:bg-red-50 hover:text-red-500"
                    >
                      ♡ Favoritar
                    </button>
                  </div>
                </div>
              </article>

              {/* Curso 4 */}
              <article className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <img
                  src="/capas/arquitetura.jpg"
                  alt="Capa do curso Arquitetura Front-End Escalável"
                  width="800"
                  height="450"
                  loading="lazy"
                  className="aspect-video w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">
                      Arquitetura • 30h
                    </span>
                    <span className="text-sm font-semibold text-amber-500">4.7 ★</span>
                  </div>
                  <h3 className="mt-3 font-display text-base font-semibold leading-snug text-slate-900">
                    Arquitetura Front-End Escalável
                  </h3>
                  <p className="mt-1 mb-4 text-sm text-slate-500">Prof. Felipe Nogueira</p>
                  <div className="mt-auto flex items-center justify-between border-t border-dashed border-slate-200 pt-3">
                    <span className="font-semibold text-emerald-600">Gratuito</span>
                    <button
                      type="button"
                      className="rounded-md border border-slate-300 px-3 py-1 text-sm font-medium text-slate-700 transition hover:border-red-300 hover:bg-red-50 hover:text-red-500"
                    >
                      ♡ Favoritar
                    </button>
                  </div>
                </div>
              </article>

              {/* Curso 5 */}
              <article className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <img
                  src="/capas/git.jpg"
                  alt="Capa do curso Git, GitHub & Boas Práticas em Equipe"
                  width="800"
                  height="450"
                  loading="lazy"
                  className="aspect-video w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">
                      DevOps • 16h
                    </span>
                    <span className="text-sm font-semibold text-amber-500">4.9 ★</span>
                  </div>
                  <h3 className="mt-3 font-display text-base font-semibold leading-snug text-slate-900">
                    Git, GitHub &amp; Boas Práticas em Equipe
                  </h3>
                  <p className="mt-1 mb-4 text-sm text-slate-500">Prof. Beatriz Lima</p>
                  <div className="mt-auto flex items-center justify-between border-t border-dashed border-slate-200 pt-3">
                    <span className="font-semibold text-emerald-600">Gratuito</span>
                    <button
                      type="button"
                      className="rounded-md border border-slate-300 px-3 py-1 text-sm font-medium text-slate-700 transition hover:border-red-300 hover:bg-red-50 hover:text-red-500"
                    >
                      ♡ Favoritar
                    </button>
                  </div>
                </div>
              </article>

              {/* Curso 6 */}
              <article className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <img
                  src="/capas/uiux.jpg"
                  alt="Capa do curso Fundamentos de UI/UX e Prototipagem"
                  width="800"
                  height="450"
                  loading="lazy"
                  className="aspect-video w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">
                      Design • 28h
                    </span>
                    <span className="text-sm font-semibold text-amber-500">4.8 ★</span>
                  </div>
                  <h3 className="mt-3 font-display text-base font-semibold leading-snug text-slate-900">
                    Fundamentos de UI/UX e Prototipagem
                  </h3>
                  <p className="mt-1 mb-4 text-sm text-slate-500">Prof. Mariana Costa</p>
                  <div className="mt-auto flex items-center justify-between border-t border-dashed border-slate-200 pt-3">
                    <span className="font-semibold text-emerald-600">Gratuito</span>
                    <button
                      type="button"
                      className="rounded-md border border-slate-300 px-3 py-1 text-sm font-medium text-slate-700 transition hover:border-red-300 hover:bg-red-50 hover:text-red-500"
                    >
                      ♡ Favoritar
                    </button>
                  </div>
                </div>
              </article>

              {/* Curso 7 */}
              <article className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <img
                  src="/capas/typescript.jpg"
                  alt="Capa do curso TypeScript Avançado e Design Patterns"
                  width="800"
                  height="450"
                  loading="lazy"
                  className="aspect-video w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">
                      Linguagens • 32h
                    </span>
                    <span className="text-sm font-semibold text-amber-500">4.9 ★</span>
                  </div>
                  <h3 className="mt-3 font-display text-base font-semibold leading-snug text-slate-900">
                    TypeScript Avançado e Design Patterns
                  </h3>
                  <p className="mt-1 mb-4 text-sm text-slate-500">Prof. Gabriel Ramos</p>
                  <div className="mt-auto flex items-center justify-between border-t border-dashed border-slate-200 pt-3">
                    <span className="font-semibold text-emerald-600">Gratuito</span>
                    <button
                      type="button"
                      className="rounded-md border border-slate-300 px-3 py-1 text-sm font-medium text-slate-700 transition hover:border-red-300 hover:bg-red-50 hover:text-red-500"
                    >
                      ♡ Favoritar
                    </button>
                  </div>
                </div>
              </article>

              {/* Curso 8 */}
              <article className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <img
                  src="/capas/testes.jpg"
                  alt="Capa do curso Testes Automatizados com Vitest"
                  width="800"
                  height="450"
                  loading="lazy"
                  className="aspect-video w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">
                      Qualidade • 20h
                    </span>
                    <span className="text-sm font-semibold text-amber-500">4.7 ★</span>
                  </div>
                  <h3 className="mt-3 font-display text-base font-semibold leading-snug text-slate-900">
                    Testes Automatizados com Vitest
                  </h3>
                  <p className="mt-1 mb-4 text-sm text-slate-500">Prof. Arthur Neves</p>
                  <div className="mt-auto flex items-center justify-between border-t border-dashed border-slate-200 pt-3">
                    <span className="font-semibold text-emerald-600">Gratuito</span>
                    <button
                      type="button"
                      className="rounded-md border border-slate-300 px-3 py-1 text-sm font-medium text-slate-700 transition hover:border-red-300 hover:bg-red-50 hover:text-red-500"
                    >
                      ♡ Favoritar
                    </button>
                  </div>
                </div>
              </article>

              {/* Curso 9 */}
              <article className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <img
                  src="/capas/apis.jpg"
                  alt="Capa do curso Consumo de APIs e Gerenciamento de Estado"
                  width="800"
                  height="450"
                  loading="lazy"
                  className="aspect-video w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">
                      Front-end • 26h
                    </span>
                    <span className="text-sm font-semibold text-amber-500">4.9 ★</span>
                  </div>
                  <h3 className="mt-3 font-display text-base font-semibold leading-snug text-slate-900">
                    Consumo de APIs e Gerenciamento de Estado
                  </h3>
                  <p className="mt-1 mb-4 text-sm text-slate-500">Prof. Lucas Santos</p>
                  <div className="mt-auto flex items-center justify-between border-t border-dashed border-slate-200 pt-3">
                    <span className="font-semibold text-emerald-600">Gratuito</span>
                    <button
                      type="button"
                      className="rounded-md border border-slate-300 px-3 py-1 text-sm font-medium text-slate-700 transition hover:border-red-300 hover:bg-red-50 hover:text-red-500"
                    >
                      ♡ Favoritar
                    </button>
                  </div>
                </div>
              </article>

              {/* Curso 10 */}
              <article className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <img
                  src="/capas/performance.jpg"
                  alt="Capa do curso Next.js & Performance Web (Core Web Vitals)"
                  width="800"
                  height="450"
                  loading="lazy"
                  className="aspect-video w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">
                      Full Stack • 42h
                    </span>
                    <span className="text-sm font-semibold text-amber-500">4.8 ★</span>
                  </div>
                  <h3 className="mt-3 font-display text-base font-semibold leading-snug text-slate-900">
                    Next.js &amp; Performance Web (Core Web Vitals)
                  </h3>
                  <p className="mt-1 mb-4 text-sm text-slate-500">Prof. Thiago Pires</p>
                  <div className="mt-auto flex items-center justify-between border-t border-dashed border-slate-200 pt-3">
                    <span className="font-semibold text-emerald-600">Gratuito</span>
                    <button
                      type="button"
                      className="rounded-md border border-slate-300 px-3 py-1 text-sm font-medium text-slate-700 transition hover:border-red-300 hover:bg-red-50 hover:text-red-500"
                    >
                      ♡ Favoritar
                    </button>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>

      {/* ===== RODAPÉ ===== */}
      <footer className="bg-slate-900 text-slate-400">
        {/* Mobile e tablet: links centralizados */}
        <div className="mx-auto max-w-7xl px-4 py-10 text-center md:px-6 lg:hidden">
          <nav aria-label="Links do rodapé">
            <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm">
              <li><a href="#" className="transition hover:text-white">Sobre a Plataforma</a></li>
              <li><a href="#catalogo" className="transition hover:text-white">Catálogo de Cursos</a></li>
              <li><a href="#trilhas" className="transition hover:text-white">Trilhas Aceleradas</a></li>
              <li><a href="#" className="transition hover:text-white">Termos de Uso</a></li>
              <li><a href="#" className="transition hover:text-white">Privacidade</a></li>
            </ul>
          </nav>
          <p className="mt-6 text-sm text-slate-300">
            © 2026 DevLearn — Trabalho de Conclusão de Disciplina (UNIMATER)
          </p>
          <p className="mt-1 text-xs text-slate-500">Construído com React + TypeScript + Tailwind CSS</p>
        </div>

        {/* Desktop: 4 colunas */}
        <div className="mx-auto hidden max-w-7xl px-8 pt-14 pb-8 lg:block">
          <div className="grid grid-cols-4 gap-10">
            <div>
              <p className="flex items-center gap-2 font-display text-2xl font-bold text-white">
                <span aria-hidden="true">⚡</span> DevLearn
              </p>
              <p className="mt-4 text-sm leading-relaxed">
                Plataforma de aprendizado front-end desenvolvida como Trabalho de Conclusão da Disciplina de
                Programação Web (UNIMATER).
              </p>
            </div>
            <nav aria-labelledby="rodape-catalogo">
              <h2 id="rodape-catalogo" className="font-display font-semibold text-white">Catálogo</h2>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a href="#catalogo" className="transition hover:text-white">Front-end Moderno</a></li>
                <li><a href="#catalogo" className="transition hover:text-white">Back-end &amp; Node.js</a></li>
                <li><a href="#catalogo" className="transition hover:text-white">Cloud &amp; DevOps</a></li>
                <li><a href="#catalogo" className="transition hover:text-white">Design Systems</a></li>
              </ul>
            </nav>
            <nav aria-labelledby="rodape-formacoes">
              <h2 id="rodape-formacoes" className="font-display font-semibold text-white">Formações</h2>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a href="#trilhas" className="transition hover:text-white">Trilha Front-End</a></li>
                <li><a href="#trilhas" className="transition hover:text-white">Trilha Full Stack</a></li>
                <li><a href="#trilhas" className="transition hover:text-white">Trilha UI/UX</a></li>
              </ul>
            </nav>
            <div>
              <h2 className="font-display font-semibold text-white">Requisitos do TCD</h2>
              <ul className="mt-4 space-y-2 text-sm">
                <li>React + TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Mobile-First (md, lg)</li>
                <li>Consumo de JSON Externo</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 flex items-center justify-between border-t border-slate-800 pt-6 text-xs text-slate-500">
            <p>© 2026 DevLearn. Desenvolvido para fins acadêmicos.</p>
            <p>Tecnologias: React 19 • Vite • TypeScript • Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
