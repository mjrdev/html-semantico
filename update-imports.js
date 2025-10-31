const fs = require('fs');
const path = require('path');

// Atualiza imports nos arquivos JS minificados
function updateImports() {
  const files = [
    { file: 'dist/js/main.min.js', updates: { './router.js': './router.min.js' } },
    { file: 'dist/js/router.min.js', updates: { './templates.js': './templates.min.js', './formValidator.js': './formValidator.min.js' } }
  ];

  files.forEach(({ file, updates }) => {
    if (fs.existsSync(file)) {
      let content = fs.readFileSync(file, 'utf8');
      Object.entries(updates).forEach(([from, to]) => {
        content = content.replace(new RegExp(from, 'g'), to);
      });
      fs.writeFileSync(file, content);
      console.log(`✅ Imports atualizados em ${file}`);
    }
  });
}

updateImports();
