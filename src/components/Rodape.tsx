function Rodape() {
  return (
    <footer className="bg-slate-900 text-slate-400 dark:border-t dark:border-slate-800">
      {/* Mobile e tablet: links centralizados */}
      <div className="mx-auto max-w-7xl px-4 py-10 text-center md:px-6 lg:hidden">
        <nav aria-label="Links do rodapé">
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm">
            <li><a href="#" className="transition hover:text-white">Sobre a Plataforma</a></li>
            <li><a href="#catalogo" className="transition hover:text-white">Catálogo de Cursos</a></li>
            <li><a href="#trilhas" className="transition hover:text-white">Trilhas Aceleradas</a></li>
            <li><a href="#" className="transition hover:text-white">Termos de Uso</a></li>
            <li><a href="#" className="transition hover:text-white">Privacidade</a></li>
          </ul>
        </nav>
        <p className="mt-6 text-sm text-slate-300">© 2026 DevLearn — Trabalho de Conclusão de Disciplina (UNIMATER)</p>
        <p className="mt-1 text-xs text-slate-500">Construído com React + TypeScript + Tailwind CSS</p>
      </div>

      {/* Desktop: 4 colunas */}
      <div className="mx-auto hidden max-w-7xl px-8 pt-14 pb-8 lg:block">
        <div className="grid grid-cols-4 gap-10">
          <div>
            <p className="flex items-center gap-2 font-display text-2xl font-bold text-white">
              <span aria-hidden="true">⚡</span> DevLearn
            </p>
            <p className="mt-4 text-sm leading-relaxed">
              Plataforma de aprendizado front-end desenvolvida como Trabalho de Conclusão da Disciplina de Programação
              Web (UNIMATER).
            </p>
          </div>
          <nav aria-labelledby="rodape-catalogo">
            <h2 id="rodape-catalogo" className="font-display font-semibold text-white">Catálogo</h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#catalogo" className="transition hover:text-white">Front-end Moderno</a></li>
              <li><a href="#catalogo" className="transition hover:text-white">Back-end &amp; Node.js</a></li>
              <li><a href="#catalogo" className="transition hover:text-white">Cloud &amp; DevOps</a></li>
              <li><a href="#catalogo" className="transition hover:text-white">Design Systems</a></li>
            </ul>
          </nav>
          <nav aria-labelledby="rodape-formacoes">
            <h2 id="rodape-formacoes" className="font-display font-semibold text-white">Formações</h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#trilhas" className="transition hover:text-white">Trilha Front-End</a></li>
              <li><a href="#trilhas" className="transition hover:text-white">Trilha Full Stack</a></li>
              <li><a href="#trilhas" className="transition hover:text-white">Trilha UI/UX</a></li>
            </ul>
          </nav>
          <div>
            <h2 className="font-display font-semibold text-white">Requisitos do TCD</h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li>React + TypeScript</li>
              <li>Tailwind CSS</li>
              <li>Mobile-First (md, lg)</li>
              <li>Consumo de JSON Externo</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex items-center justify-between border-t border-slate-800 pt-6 text-xs text-slate-500">
          <p>© 2026 DevLearn. Desenvolvido para fins acadêmicos.</p>
          <p>Tecnologias: React 19 • Vite • TypeScript • Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}

export default Rodape
