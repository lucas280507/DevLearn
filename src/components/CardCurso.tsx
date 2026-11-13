import type { Curso } from '../data/cursos'

type CardCursoProps = {
  curso: Curso
  isFavorito: boolean
  onFavoritar: (id: number) => void
}

function CardCurso({ curso, isFavorito, onFavoritar }: CardCursoProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      <img
        src={curso.capa}
        alt={`Capa do curso ${curso.titulo}`}
        width="800"
        height="450"
        loading="lazy"
        className="aspect-video w-full object-cover"
      />
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-center justify-between gap-2">
          <span className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
            {curso.etiqueta} • {curso.horas}h
          </span>
          <span className="text-sm font-semibold text-amber-500">{curso.nota.toFixed(1)} ★</span>
        </div>
        <h3 className="mt-3 font-display text-base font-semibold leading-snug text-slate-900 dark:text-white">
          {curso.titulo}
        </h3>
        <p className="mt-1 mb-4 text-sm text-slate-500 dark:text-slate-400">{curso.instrutor}</p>
        <div className="mt-auto flex items-center justify-between border-t border-dashed border-slate-200 pt-3 dark:border-slate-800">
          <span className="font-semibold text-emerald-600 dark:text-emerald-400">
            {curso.preco === 0 ? 'Gratuito' : `R$ ${curso.preco}`}
          </span>
          <button
            type="button"
            onClick={() => onFavoritar(curso.id)}
            aria-pressed={isFavorito}
            className={
              isFavorito
                ? 'rounded-md border border-red-500 bg-red-50 px-3 py-1 text-sm font-semibold text-red-600 transition hover:bg-red-100 dark:border-red-500 dark:bg-red-950/60 dark:text-red-400'
                : 'rounded-md border border-slate-300 px-3 py-1 text-sm font-medium text-slate-700 transition hover:border-red-300 hover:bg-red-50 hover:text-red-500 dark:border-slate-700 dark:text-slate-300 dark:hover:border-red-800 dark:hover:bg-red-950/40 dark:hover:text-red-400'
            }
          >
            {isFavorito ? '♥ Favoritado' : '♡ Favoritar'}
          </button>
        </div>
      </div>
    </article>
  )
}

export default CardCurso
