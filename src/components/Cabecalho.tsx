type CabecalhoProps = {
  totalFavoritos: number
}

function Cabecalho({ totalFavoritos }: CabecalhoProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 md:px-6 lg:gap-8 lg:px-8 lg:py-4">
        <a href="#" className="flex shrink-0 items-center gap-2" aria-label="DevLearn, página inicial">
          <span
            className="flex h-9 w-9 items-center justify-center text-2xl lg:rounded-lg lg:bg-slate-900 lg:text-lg dark:lg:bg-slate-800"
            aria-hidden="true"
          >
            ⚡
          </span>
          <span className="font-display text-xl font-bold text-slate-900 lg:text-2xl dark:text-white">DevLearn</span>
        </a>

        {/* Busca central: só no desktop */}
        <form
          role="search"
          className="hidden max-w-md flex-1 items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 transition focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-100 lg:flex dark:border-slate-700 dark:bg-slate-900 dark:focus-within:ring-blue-900"
        >
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
          <kbd className="shrink-0 rounded border border-slate-200 bg-slate-50 px-1.5 py-0.5 font-sans text-xs text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400">
            Ctrl + K
          </kbd>
        </form>

        {/* Links: a partir do tablet */}
        <nav aria-label="Navegação principal" className="ml-auto hidden items-center gap-6 text-sm font-medium md:flex">
          <a href="#catalogo" className="text-slate-900 underline decoration-2 underline-offset-8 dark:text-white">
            Catálogo
          </a>
          <a href="#trilhas" className="text-slate-500 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
            Trilhas
          </a>
          <a href="#" className="hidden text-slate-500 transition hover:text-slate-900 lg:inline dark:text-slate-400 dark:hover:text-white">
            Instrutores
          </a>
          <a href="#catalogo" className="text-slate-500 transition hover:text-slate-900 lg:hidden dark:text-slate-400 dark:hover:text-white">
            Favoritos ({totalFavoritos})
          </a>
        </nav>

        {/* Ações do desktop */}
        <span className="hidden h-6 w-px bg-slate-200 lg:block dark:bg-slate-800" aria-hidden="true"></span>
        <a
          href="#catalogo"
          className="hidden items-center gap-1 text-sm font-medium text-red-500 transition hover:text-red-600 lg:inline-flex dark:text-red-400"
        >
          <span aria-hidden="true">♥</span> Favoritos ({totalFavoritos})
        </a>

        {/* Botão Entrar: só no tablet */}
        <button
          type="button"
          className="hidden rounded-lg border border-slate-900 px-4 py-1.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-900 hover:text-white md:inline-flex lg:hidden dark:border-slate-300 dark:text-slate-100 dark:hover:bg-white dark:hover:text-slate-900"
        >
          Entrar
        </button>

        {/* Botão Cadastre-se: só no desktop */}
        <button
          type="button"
          className="hidden rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600 lg:inline-flex dark:bg-blue-600 dark:hover:bg-blue-500"
        >
          Cadastre-se
        </button>

        {/* Menu: só no mobile */}
        <button
          type="button"
          className="ml-auto inline-flex items-center gap-1 rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 md:hidden dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
        >
          <span aria-hidden="true">☰</span> Menu
        </button>
      </div>
    </header>
  )
}

export default Cabecalho
