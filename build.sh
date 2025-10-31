#!/bin/bash

echo "🚀 Iniciando processo de build da ONG Esperança Viva..."

# Instala dependências se necessário
if [ ! -d "node_modules" ]; then
    echo "📦 Instalando dependências..."
    npm install
fi

# Executa o build
echo "🔧 Minificando arquivos..."
npm run build

echo ""
echo "📊 Comparação de tamanhos:"
echo "==========================="
echo "📁 Arquivos originais:"
original_total=$(find css js -name "*.css" -o -name "*.js" | xargs stat -f%z | awk '{total += $1} END {print total}')
echo "   Total: $original_total bytes"

echo ""
echo "🗜️ Arquivos minificados:"
minified_total=$(find dist/css dist/js -name "*.css" -o -name "*.js" 2>/dev/null | xargs stat -f%z | awk '{total += $1} END {print total}')
echo "   Total: $minified_total bytes"

if [ ! -z "$original_total" ] && [ ! -z "$minified_total" ]; then
    reduction=$(echo "scale=1; (($original_total - $minified_total) * 100) / $original_total" | bc -l)
    echo "   📈 Redução: ${reduction}%"
fi

echo ""
echo "✅ Build concluído! Arquivos minificados estão na pasta 'dist'"
echo "🌐 Para testar, execute: npm run serve"
echo "🔗 Depois acesse: http://localhost:3000"
