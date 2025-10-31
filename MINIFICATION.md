# 🗜️ Sistema de Minificação

## 📋 **O que foi configurado:**

### 1. **Ferramentas utilizadas:**
- **clean-css-cli**: Minifica arquivos CSS
- **terser**: Minifica arquivos JavaScript  
- **html-minifier**: Minifica arquivos HTML
- **http-server**: Servidor local para testar

### 2. **Scripts disponíveis:**
```bash
npm install          # Instala as dependências
npm run build        # Executa todo o processo de build
npm run minify       # Apenas minifica os arquivos
npm run serve        # Serve a versão minificada
./build.sh           # Script completo automatizado
```

### 3. **Estrutura gerada:**
```
projeto/
├── dist/                 # Versão minificada para produção
│   ├── index.html       # HTML minificado
│   ├── css/
│   │   └── styles.min.css   # Todos os CSS unidos e minificados
│   ├── js/
│   │   └── scripts.min.js   # Todos os JS unidos e minificados
│   └── imagens/         # Imagens copiadas
├── css/                 # Arquivos originais
├── js/                  # Arquivos originais
└── package.json         # Configuração do build
```

## 🚀 **Como usar:**

### **Opção 1 - Automática (Recomendada):**
```bash
./build.sh
```

### **Opção 2 - Manual:**
```bash
npm install
npm run build
npm run serve
```

## 📊 **Benefícios:**
- **CSS**: Redução de ~40-60% no tamanho
- **JS**: Redução de ~30-50% no tamanho  
- **HTML**: Redução de ~10-20% no tamanho
- **Performance**: Carregamento mais rápido
- **Bandwidth**: Menor uso de dados

## 🔧 **Customização:**
Edite os scripts no `package.json` para ajustar as opções de minificação conforme necessário.
