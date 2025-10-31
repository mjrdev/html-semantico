# 🌍 ONG Esperança Viva

**Projeto desenvolvido nas Experiências Práticas I, II e III** da disciplina de **Desenvolvimento Front-End**, com foco em **HTML5, CSS3 e JavaScript**.

---

## 🎯 Objetivo do Projeto
Criar uma aplicação web completa para uma ONG fictícia — **“Esperança Viva”** — promovendo ações solidárias e de inclusão social.  
O sistema foi evoluído em três etapas:

1. **Estrutura HTML semântica** (Entrega I)  
2. **Estilização e leiautes responsivos com CSS3** (Entrega II)  
3. **Interatividade e funcionalidades JavaScript (SPA)** (Entrega III)

---

## 🧱 Tecnologias Utilizadas
- **HTML5** → estrutura semântica e acessível  
- **CSS3** → design system com variáveis, grid e flexbox  
- **JavaScript (ES Modules)** → manipulação do DOM, templates e validação  
- **LocalStorage** → armazenamento da última página visitada  
- **SPA (Single Page Application)** → navegação dinâmica sem recarregar a página  

---

## 🧩 Estrutura de Páginas
| Página | Descrição |
|-------|-----------|
| 🏠 **index.html** | Shell da SPA: carrega e gerencia as rotas internas. |
| 📦 **Projetos** | Lista campanhas e projetos sociais da ONG. |
| 💚 **Cadastro** | Formulário para inscrição de voluntários com validação dinâmica. |

> Todas as páginas são renderizadas via **templates JavaScript**.

---

## 🗂️ Estrutura de Pastas
```
ong-esperanca-viva/
├── index.html
├── css/
│   ├── base.css          # Design system (cores, tipografia, espaçamento)
│   ├── layout.css        # Grid, flexbox e breakpoints
│   ├── components.css    # Botões, formulários, cards e alerts
│   └── utilities.css     # Classes utilitárias
├── js/
│   ├── main.js           # Inicialização da aplicação (SPA)
│   ├── router.js         # Controle de rotas e navegação
│   ├── templates.js      # Templates HTML das páginas
│   └── formValidator.js  # Validação de formulários
└── imagens/
    ├── logo.png
    └── voluntarios.png
```

---

## 💡 Funcionalidades Principais
- Navegação dinâmica estilo **SPA**  
- **Validação automática** de formulários com feedback visual  
- **Design responsivo** (mobile, tablet e desktop)  
- **Sistema de cores e tipografia** com variáveis CSS  
- **Menu interativo** com botão hambúrguer no mobile  
- **Armazenamento local** da última página visitada  

---

## 🚀 Como Executar
1. Clone o repositório:
```
git clone https://github.com/<seu-usuario>/ong-esperanca-viva.git
```
2. Abra o arquivo `index.html` no navegador. *(Não é necessário servidor local.)*

---

## 🔮 Próximos Passos
- Integração com API real para cadastro de voluntários  
- Painel administrativo para gerenciar projetos e doações  
- Tema escuro e microanimações com CSS  
- Converter para PWA (Progressive Web App)
