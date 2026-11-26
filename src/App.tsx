import { useEffect, useState } from 'react'
import Cabecalho from './components/Cabecalho'
import CatalogoCursos from './components/CatalogoCursos'
import Hero from './components/Hero'
import Rodape from './components/Rodape'
import SecaoTrilhas from './components/SecaoTrilhas'
import { areas, type Area, type Curso } from './data/cursos'
import { trilhas } from './data/trilhas'

// Fonte externa dos dados da listagem principal (servida a partir de public/cursos.json)
const URL_DADOS = '/cursos.json'

function App() {
  // Estados da listagem principal carregada via fetch
  const [cursos, setCursos] = useState<Curso[]>([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState<string | null>(null)

  // Estados de interação do usuário
  const [favoritos, setFavoritos] = useState<number[]>([])
  const [areaSelecionada, setAreaSelecionada] = useState<Area | 'Todos'>('Todos')

  // Busca os cursos do arquivo JSON externo uma única vez ao montar o componente
  useEffect(() => {
    fetch(URL_DADOS)
      .then((resposta) => {
        if (!resposta.ok) throw new Error(`HTTP ${resposta.status}`)
        return resposta.json()
      })
      .then((dados: Curso[]) => setCursos(dados))
      .catch(() => setErro('Não foi possível carregar os cursos. Tente novamente mais tarde.'))
      .finally(() => setCarregando(false))
  }, [])

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
          carregando={carregando}
          erro={erro}
        />
      </main>

      <Rodape />
    </div>
  )
}

export default App
