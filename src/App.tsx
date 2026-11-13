import { useState } from 'react'
import Cabecalho from './components/Cabecalho'
import CatalogoCursos from './components/CatalogoCursos'
import Hero from './components/Hero'
import Rodape from './components/Rodape'
import SecaoTrilhas from './components/SecaoTrilhas'
import { areas, cursos, type Area } from './data/cursos'
import { trilhas } from './data/trilhas'

function App() {
  // Estado 1: lista de IDs dos cursos salvos nos favoritos
  const [favoritos, setFavoritos] = useState<number[]>([])

  // Estado 2: categoria ativa no filtro do catálogo
  const [areaSelecionada, setAreaSelecionada] = useState<Area | 'Todos'>('Todos')

  // Adiciona ou remove o ID do curso na lista de favoritos
  function alternarFavorito(id: number) {
    setFavoritos((atuais) =>
      atuais.includes(id) ? atuais.filter((itemId) => itemId !== id) : [...atuais, id],
    )
  }

  const rotuloFiltro = areaSelecionada === 'Todos' ? 'Todos os Cursos' : areaSelecionada

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased dark:bg-slate-950 dark:text-slate-200">
      <Cabecalho totalFavoritos={favoritos.length} />

      <main>
        <Hero totalFavoritos={favoritos.length} filtroAtivo={rotuloFiltro} />
        <SecaoTrilhas trilhas={trilhas} />
        <CatalogoCursos
          cursos={cursos}
          areas={areas}
          areaSelecionada={areaSelecionada}
          onSelecionarArea={setAreaSelecionada}
          favoritos={favoritos}
          onFavoritar={alternarFavorito}
        />
      </main>

      <Rodape />
    </div>
  )
}

export default App
