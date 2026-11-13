type HeroProps = {
  totalFavoritos: number
  filtroAtivo: string
}

function Hero({ totalFavoritos, filtroAtivo }: HeroProps) {
  return (
    <section className="border-b border-slate-200 bg-linear-to-b from-white to-slate-50 dark:border-slate-800 dark:from-slate-900 dark:to-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-12 text-center md:px-6 md:py-16 lg:grid lg:grid-cols-3 lg:items-center lg:gap-12 lg:px-8 lg:py-20 lg:text-left">
        <div className="lg:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            Plataforma de capacitação tech
          </p>
          <h1 className="mt-3 font-display text-3xl font-extrabold leading-tight text-slate-900 md:text-4xl lg:text-5xl dark:text-white">
            Acelere sua carreira em tecnologia com o DevLearn
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-slate-500 md:text-lg lg:mx-0 lg:max-w-2xl dark:text-slate-400">
            Projetos práticos, mentorias e catálogo com as habilidades mais requisitadas pela indústria de software.
          </p>

          {/* Busca: mobile e tablet */}
          <form
            role="search"
            className="mx-auto mt-8 flex max-w-lg items-center gap-2 rounded-xl border border-slate-300 bg-white p-2 pl-4 shadow-sm transition focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-100 lg:hidden dark:border-slate-700 dark:bg-slate-900 dark:focus-within:ring-blue-900"
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
              className="shrink-0 rounded-lg bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-900 hover:text-white dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-blue-600"
            >
              Buscar
            </button>
          </form>

          {/* Botões de ação: só no desktop */}
          <div className="mt-8 hidden gap-4 lg:flex">
            <a
              href="#catalogo"
              className="rounded-lg bg-slate-900 px-6 py-3 font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-md dark:bg-blue-600 dark:hover:bg-blue-500"
            >
              Explorar Catálogo de Cursos ↓
            </a>
            <a
              href="#trilhas"
              className="rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:border-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-slate-400"
            >
              Ver Trilhas em Destaque
            </a>
          </div>
        </div>

        {/* Painel de Progresso Rápido: só no desktop. Os valores vêm do estado do App. */}
        <aside
          aria-labelledby="titulo-painel"
          className="hidden rounded-xl border-2 border-dashed border-slate-300 bg-white p-6 shadow-sm lg:block dark:border-slate-700 dark:bg-slate-900"
        >
          <h2 id="titulo-painel" className="flex items-center gap-2 font-display font-bold text-slate-900 dark:text-white">
            <span aria-hidden="true">📊</span> Painel de Progresso Rápido
          </h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Resumo da sua navegação pelo catálogo.</p>
          <dl className="mt-4 divide-y divide-slate-100 text-sm dark:divide-slate-800">
            <div className="flex items-center justify-between py-3">
              <dt className="text-slate-600 dark:text-slate-400">Cursos salvos nos favoritos:</dt>
              <dd className="font-semibold text-red-500 dark:text-red-400">{totalFavoritos} selecionados</dd>
            </div>
            <div className="flex items-center justify-between py-3">
              <dt className="text-slate-600 dark:text-slate-400">Filtro ativo no catálogo:</dt>
              <dd className="font-semibold text-slate-900 dark:text-white">{filtroAtivo}</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  )
}

export default Hero
