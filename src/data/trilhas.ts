// Formato de cada trilha da listagem secundária
export type Trilha = {
  id: number
  titulo: string
  descricao: string
  totalCursos: number
  horas: number
  certificado: boolean
}

export const trilhas: Trilha[] = [
  {
    id: 1,
    titulo: 'Trilha Engenheiro Front-End Moderno',
    descricao: 'Formação completa com HTML Semântico, CSS/Tailwind, React, TypeScript e consumo de APIs.',
    totalCursos: 5,
    horas: 160,
    certificado: true,
  },
  {
    id: 2,
    titulo: 'Trilha Arquiteto Full Stack JavaScript',
    descricao: 'Domine o ecossistema Node.js, bancos de dados, microsserviços e integração contínua.',
    totalCursos: 6,
    horas: 210,
    certificado: true,
  },
  {
    id: 3,
    titulo: 'Trilha UI/UX & Design Systems',
    descricao: 'Aprenda a construir interfaces acessíveis, consistentes e protótipos de alta usabilidade.',
    totalCursos: 4,
    horas: 120,
    certificado: true,
  },
]
