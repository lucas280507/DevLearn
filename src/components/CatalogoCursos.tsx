import type { Area, Curso } from '../data/cursos'
import CardCurso from './CardCurso'

type CatalogoCursosProps = {
  cursos: Curso[]
  areas: Area[]
  areaSelecionada: Area | 'Todos'
  onSelecionarArea: (area: Area | 'Todos') => void
  favoritos: number[]
  onFavoritar: (id: number) => void
}

function CatalogoCursos({
  cursos,
  areas,
  areaSelecionada,
  onSelecionarArea,
  favoritos,
  onFavoritar,
}: CatalogoCursosProps) {
  // Filtra os cursos de acordo com a área selecionada no estado
  const cursosFiltrados =
    areaSelecionada === 'Todos' ? cursos : cursos.filter((curso) => curso.area === areaSelecionada)

  return (
    <section id="catalogo" aria-labelledby="titulo-catalogo" className="scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8 lg:py-16">
        <div className="flex flex-wrap items-end justify-between gap-3 border-b border-slate-200 pb-4 dark:border-slate-800">
          <div>
            <h2 id="titulo-catalogo" className="font-display text-2xl font-bold text-slate-900 dark:text-white">
              Catálogo Completo de Cursos
            </h2>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Cursos práticos com instrutores do mercado.
            </p>
          </div>
          <div className="flex items-center gap-4">
            {/* Selo de quantidade: só no mobile */}
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 md:hidden dark:bg-blue-950 dark:text-blue-300">
              {cursosFiltrados.length} cursos
            </span>
            {/* Contador: só no desktop */}
            <span className="hidden text-sm text-slate-500 lg:inline dark:text-slate-400">
              Exibindo <strong className="text-slate-900 dark:text-white">{cursosFiltrados.length} de {cursos.length}</strong> cursos
            </span>
            {/* Ordenação: tablet e desktop */}
            <button
              type="button"
              className="hidden items-center gap-1 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm font-semibold text-slate-900 transition hover:border-slate-900 md:inline-flex dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-500"
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
            onClick={() => onSelecionarArea('Todos')}
            aria-pressed={areaSelecionada === 'Todos'}
            className={
              areaSelecionada === 'Todos'
                ? 'shrink-0 whitespace-nowrap rounded-full bg-slate-900 px-4 py-1.5 text-sm font-semibold text-white dark:bg-blue-600'
                : 'shrink-0 whitespace-nowrap rounded-full border border-slate-300 bg-white px-4 py-1.5 text-sm font-medium text-slate-700 transition hover:border-slate-900 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:text-white'
            }
          >
            Todos os Cursos ({cursos.length})
          </button>

          {areas.map((area) => {
            const quantidade = cursos.filter((curso) => curso.area === area).length
            const ativo = areaSelecionada === area

            return (
              <button
                key={area}
                type="button"
                onClick={() => onSelecionarArea(area)}
                aria-pressed={ativo}
                className={
                  ativo
                    ? 'shrink-0 whitespace-nowrap rounded-full bg-slate-900 px-4 py-1.5 text-sm font-semibold text-white dark:bg-blue-600'
                    : 'shrink-0 whitespace-nowrap rounded-full border border-slate-300 bg-white px-4 py-1.5 text-sm font-medium text-slate-700 transition hover:border-slate-900 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:text-white'
                }
              >
                {area} <span className="hidden lg:inline">({quantidade})</span>
              </button>
            )
          })}
        </div>

        {/* Grade de cursos: 1 coluna (mobile) → 2 (tablet) → 4 (desktop) */}
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {cursosFiltrados.map((curso) => (
            <CardCurso
              key={curso.id}
              curso={curso}
              isFavorito={favoritos.includes(curso.id)}
              onFavoritar={onFavoritar}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CatalogoCursos
