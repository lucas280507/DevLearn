// Áreas usadas no filtro do catálogo.
// O tipo só aceita um destes textos: se eu digitar errado, o TypeScript avisa.
export type Area = 'Front-end' | 'Back-end & APIs' | 'DevOps & Cloud' | 'UI/UX & Design' | 'Arquitetura'

// Formato de cada curso da listagem principal
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

export const cursos: Curso[] = [
  {
    id: 1,
    titulo: 'React 19 & TypeScript do Zero ao Pro',
    instrutor: 'Prof. Lucas Santos',
    area: 'Front-end',
    etiqueta: 'Front-end',
    horas: 48,
    nota: 4.9,
    preco: 0,
    capa: '/capas/react.jpg',
  },
  {
    id: 2,
    titulo: 'Tailwind CSS Moderno e Responsivo',
    instrutor: 'Prof. Carla Mendes',
    area: 'UI/UX & Design',
    etiqueta: 'Design & CSS',
    horas: 24,
    nota: 4.8,
    preco: 0,
    capa: '/capas/tailwind.jpg',
  },
  {
    id: 3,
    titulo: 'Node.js, Express & APIs RESTful',
    instrutor: 'Prof. Rodrigo Silva',
    area: 'Back-end & APIs',
    etiqueta: 'Back-end',
    horas: 36,
    nota: 4.9,
    preco: 0,
    capa: '/capas/node.jpg',
  },
  {
    id: 4,
    titulo: 'Arquitetura Front-End Escalável',
    instrutor: 'Prof. Felipe Nogueira',
    area: 'Arquitetura',
    etiqueta: 'Arquitetura',
    horas: 30,
    nota: 4.7,
    preco: 0,
    capa: '/capas/arquitetura.jpg',
  },
  {
    id: 5,
    titulo: 'Git, GitHub & Boas Práticas em Equipe',
    instrutor: 'Prof. Beatriz Lima',
    area: 'DevOps & Cloud',
    etiqueta: 'DevOps',
    horas: 16,
    nota: 4.9,
    preco: 0,
    capa: '/capas/git.jpg',
  },
  {
    id: 6,
    titulo: 'Fundamentos de UI/UX e Prototipagem',
    instrutor: 'Prof. Mariana Costa',
    area: 'UI/UX & Design',
    etiqueta: 'Design',
    horas: 28,
    nota: 4.8,
    preco: 0,
    capa: '/capas/uiux.jpg',
  },
  {
    id: 7,
    titulo: 'TypeScript Avançado e Design Patterns',
    instrutor: 'Prof. Gabriel Ramos',
    area: 'Front-end',
    etiqueta: 'Linguagens',
    horas: 32,
    nota: 4.9,
    preco: 0,
    capa: '/capas/typescript.jpg',
  },
  {
    id: 8,
    titulo: 'Testes Automatizados com Vitest',
    instrutor: 'Prof. Arthur Neves',
    area: 'DevOps & Cloud',
    etiqueta: 'Qualidade',
    horas: 20,
    nota: 4.7,
    preco: 0,
    capa: '/capas/testes.jpg',
  },
  {
    id: 9,
    titulo: 'Consumo de APIs e Gerenciamento de Estado',
    instrutor: 'Prof. Lucas Santos',
    area: 'Front-end',
    etiqueta: 'Front-end',
    horas: 26,
    nota: 4.9,
    preco: 0,
    capa: '/capas/apis.jpg',
  },
  {
    id: 10,
    titulo: 'Next.js & Performance Web (Core Web Vitals)',
    instrutor: 'Prof. Thiago Pires',
    area: 'Back-end & APIs',
    etiqueta: 'Full Stack',
    horas: 42,
    nota: 4.8,
    preco: 0,
    capa: '/capas/performance.jpg',
  },
]
