// Áreas usadas no filtro do catálogo.
// O tipo só aceita um destes textos: se eu digitar errado, o TypeScript avisa.
export type Area = 'Front-end' | 'Back-end & APIs' | 'DevOps & Cloud' | 'UI/UX & Design' | 'Arquitetura'

// Formato de cada curso da listagem principal (carregado via fetch de /cursos.json)
export type Curso = {
  id: number
  titulo: string
  instrutor: string
  area: Area // usada no filtro
  etiqueta: string // texto do selo no card (ex.: "Linguagens")
  horas: number
  nota: number
  preco: number // 0 = gratuito
  capa: string
}

// Lista de áreas na ordem em que aparecem nos botões de filtro
export const areas: Area[] = ['Front-end', 'Back-end & APIs', 'DevOps & Cloud', 'UI/UX & Design', 'Arquitetura']
