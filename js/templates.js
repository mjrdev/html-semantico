export const templates = {
  home: `
    <section>
      <h1>ONG Esperança Viva</h1>
      <p>Nossa missão é promover a inclusão social e transformar vidas por meio de ações solidárias.</p>
      <img src="imagens/voluntarios.png" alt="Voluntários da ONG" width="400">
    </section>
  `,
  projetos: `
    <section>
      <h2>Projetos em Andamento</h2>
      <article>
        <h3>Projeto Alimentar com Amor</h3>
        <p>Distribuição de cestas básicas e refeições.</p>
      </article>
      <article>
        <h3>Educar para o Futuro</h3>
        <p>Oficinas culturais e reforço escolar para crianças.</p>
      </article>
    </section>
  `,
  cadastro: `
    <section>
      <h2>Cadastro de Voluntário</h2>
      <form id="formCadastro">
        <label>Nome Completo:</label>
        <input type="text" name="nome" required>
        <label>Email:</label>
        <input type="email" name="email" required>
        <label>CPF:</label>
        <input type="text" name="cpf" required pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}">
        <label>Telefone:</label>
        <input type="tel" name="telefone" required placeholder="(00) 00000-0000">
        <button type="submit">Enviar Cadastro</button>
      </form>
    </section>
  `
};
