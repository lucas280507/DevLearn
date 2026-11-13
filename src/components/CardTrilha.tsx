import type { Trilha } from '../data/trilhas'

type CardTrilhaProps = {
  trilha: Trilha
}

function CardTrilha({ trilha }: CardTrilhaProps) {
  // Transforma 1 em "01", 2 em "02"... para o número decorativo do card
  const numero = String(trilha.id).padStart(2, '0')

  return (
    <article className="flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-start justify-between">
        <span className="text-xs font-bold uppercase tracking-wide text-blue-600 dark:text-blue-400">Trilha acelerada</span>
        <span className="font-display text-2xl font-bold leading-none text-slate-200 dark:text-slate-700" aria-hidden="true">
          {numero}
        </span>
      </div>
      <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-slate-900 dark:text-white">{trilha.titulo}</h3>
      <p className="mt-2 flex-1 text-sm text-slate-500 dark:text-slate-400">{trilha.descricao}</p>
      <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs font-medium text-slate-600 dark:text-slate-300">
        <li>📚 {trilha.totalCursos} cursos</li>
        <li>⏱️ {trilha.horas}h</li>
        {/* Só mostra o selo se a trilha tiver certificado */}
        {trilha.certificado && <li>⭐ Certificado</li>}
      </ul>
      <a
        href="#catalogo"
        className="mt-5 rounded-lg border border-slate-300 bg-slate-100 py-2 text-center text-sm font-semibold text-slate-900 transition hover:border-slate-900 hover:bg-slate-900 hover:text-white dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:border-blue-600 dark:hover:bg-blue-600"
      >
        Explorar Trilha →
      </a>
    </article>
  )
}

export default CardTrilha

