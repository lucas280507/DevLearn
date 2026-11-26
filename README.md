# DevLearn

O **DevLearn** é uma plataforma web voltada para o aprendizado e desenvolvimento profissional em tecnologia. A aplicação reúne um catálogo diversificado de cursos nas áreas de programação, engenharia de software e design (**listagem principal**), além de trilhas aceleradas de carreira e capacitação em destaque (**listagem secundária**), proporcionando uma experiência intuitiva e responsiva para estudantes e desenvolvedores aprimorarem suas competências técnicas.

---

## 🚀 Tecnologias Utilizadas

- **React 19** (Componentes funcionais, Props, `useState` e `useEffect`)
- **TypeScript** (Tipagem estática de dados, props e estados)
- **Tailwind CSS v4** (Estilização utilitária Mobile-First com breakpoints `md:` e `lg:` e tema escuro automático `dark:`)
- **Vite** (Ambiente de desenvolvimento e build)

---

## 💻 Como Executar o Projeto

1. Instale as dependências do projeto:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

3. Abra o endereço exibido no terminal (por padrão, `http://localhost:5173`) no navegador.

---

## 🌐 Fonte dos Dados

- **Listagem Principal (Catálogo de Cursos):** Carregada assincronamente via `fetch` dentro de `useEffect` a partir do arquivo JSON externo [`public/cursos.json`](./public/cursos.json) (servido na rota `/cursos.json`), contendo 10 cursos com `id`, `titulo`, `instrutor`, `area`, `etiqueta`, `horas`, `nota`, `preco` e `capa`.
- **Listagem Secundária (Trilhas de Carreira):** Mantida em vetor estático local tipado em [`src/data/trilhas.ts`](./src/data/trilhas.ts) com 3 formações completas.
- **Como testar o estado de erro:** No arquivo [`src/App.tsx`](./src/App.tsx), altere temporariamente a constante `URL_DADOS` de `'/cursos.json'` para uma URL inexistente (ex.: `'/cursos-erro.json'`) para visualizar a mensagem amigável de erro na interface.
