export const templates = {
  home: `
    <section>
      <h1>ONG Esperança Viva</h1>
      <p>Nossa missão é promover a inclusão social e transformar vidas por meio de ações solidárias.</p>
      <div style="text-align: center; margin-top: var(--space-3);">
        <img src="imagens/voluntarios.png" alt="Voluntários da ONG" style="max-width: 100%; height: auto; border-radius: 10px;">
      </div>
    </section>
  `,
  projetos: `
    <section>
      <h2>Projetos em Andamento</h2>
      <div class="projetos-grid">
        <article class="projeto-card">
          <h3>Projeto Alimentar com Amor</h3>
          <p>Distribuição de cestas básicas e refeições para famílias em situação de vulnerabilidade social.</p>
        </article>
        <article class="projeto-card">
          <h3>Educar para o Futuro</h3>
          <p>Oficinas culturais e reforço escolar para crianças e adolescentes da comunidade.</p>
        </article>
      </div>
    </section>
  `,
  cadastro: `
    <section>
      <h2>Cadastro de Voluntário</h2>
      <form id="formCadastro">
        <div>
          <label>Nome Completo:</label>
          <input type="text" name="nome" required>
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" required>
        </div>
        <div>
          <label>CPF:</label>
          <input type="text" name="cpf" required pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}" placeholder="000.000.000-00">
        </div>
        <div>
          <label>Telefone:</label>
          <input type="tel" name="telefone" required placeholder="(00) 00000-0000">
        </div>
        <button type="submit">Enviar Cadastro</button>
      </form>
    </section>
  `
};
