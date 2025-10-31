export const templates = {
  home: `
    <section role="main" aria-labelledby="titulo-home">
      <h1 id="titulo-home">ONG Esperança Viva</h1>
      <p>Nossa missão é promover a inclusão social e transformar vidas por meio de ações solidárias.</p>
      <div style="text-align: center; margin-top: var(--space-3);">
        <img src="imagens/voluntarios.png" alt="Grupo de voluntários da ONG Esperança Viva trabalhando em atividades comunitárias" style="max-width: 100%; height: auto; border-radius: 10px;">
      </div>
    </section>
  `,
  projetos: `
    <section role="main" aria-labelledby="titulo-projetos">
      <h2 id="titulo-projetos">Projetos em Andamento</h2>
      <div class="projetos-grid" role="list" aria-label="Lista de projetos da ONG">
        <article class="projeto-card" role="listitem" tabindex="0" aria-labelledby="projeto1-titulo">
          <h3 id="projeto1-titulo">Projeto Alimentar com Amor</h3>
          <p>Distribuição de cestas básicas e refeições para famílias em situação de vulnerabilidade social.</p>
        </article>
        <article class="projeto-card" role="listitem" tabindex="0" aria-labelledby="projeto2-titulo">
          <h3 id="projeto2-titulo">Educar para o Futuro</h3>
          <p>Oficinas culturais e reforço escolar para crianças e adolescentes da comunidade.</p>
        </article>
      </div>
    </section>
  `,
  cadastro: `
    <section role="main" aria-labelledby="titulo-cadastro">
      <h2 id="titulo-cadastro">Cadastro de Voluntário</h2>
      <form id="formCadastro" role="form" aria-labelledby="titulo-cadastro" novalidate>
        <div>
          <label for="nome">Nome Completo <span aria-label="campo obrigatório">*</span>:</label>
          <input type="text" id="nome" name="nome" required aria-describedby="nome-help" aria-invalid="false">
          <span id="nome-help" class="sr-only">Digite seu nome completo</span>
        </div>
        <div>
          <label for="email">Email <span aria-label="campo obrigatório">*</span>:</label>
          <input type="email" id="email" name="email" required aria-describedby="email-help" aria-invalid="false">
          <span id="email-help" class="sr-only">Digite um endereço de email válido</span>
        </div>
        <div>
          <label for="cpf">CPF <span aria-label="campo obrigatório">*</span>:</label>
          <input type="text" id="cpf" name="cpf" required pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}" placeholder="000.000.000-00" aria-describedby="cpf-help" aria-invalid="false">
          <span id="cpf-help" class="sr-only">Digite o CPF no formato 000.000.000-00</span>
        </div>
        <div>
          <label for="telefone">Telefone <span aria-label="campo obrigatório">*</span>:</label>
          <input type="tel" id="telefone" name="telefone" required placeholder="(00) 00000-0000" aria-describedby="telefone-help" aria-invalid="false">
          <span id="telefone-help" class="sr-only">Digite o telefone no formato (00) 00000-0000</span>
        </div>
        <button type="submit" aria-describedby="submit-help">Enviar Cadastro</button>
        <span id="submit-help" class="sr-only">Clique para enviar o formulário de cadastro</span>
      </form>
    </section>
  `
};
