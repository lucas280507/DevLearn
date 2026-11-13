import type { Trilha } from '../data/trilhas'
import CardTrilha from './CardTrilha'

type SecaoTrilhasProps = {
  trilhas: Trilha[]
}

function SecaoTrilhas({ trilhas }: SecaoTrilhasProps) {
  return (
    <section id="trilhas" aria-labelledby="titulo-trilhas" className="scroll-mt-20 border-b border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8 lg:py-16">
        <div className="flex flex-wrap items-end justify-between gap-3 border-b border-slate-200 pb-4 dark:border-slate-800">
          <div>
            <h2 id="titulo-trilhas" className="font-display text-2xl font-bold text-slate-900 dark:text-white">
              Trilhas de Carreira Acelerada
            </h2>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              {trilhas.length} formações completas, do básico ao avançado.
            </p>
          </div>
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 dark:bg-blue-950 dark:text-blue-300">
            Formações Guiadas
          </span>
        </div>

        {/* 1 coluna no mobile, 3 a partir do tablet */}
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          {trilhas.map((trilha) => (
            <CardTrilha key={trilha.id} trilha={trilha} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SecaoTrilhas

