# Simpla Invest — Materiais de Apoio

Plataforma de organização e distribuição de materiais educacionais sobre as principais corretoras de investimento.

## 📁 Estrutura do Projeto

```
materiais_simpla/
├── index.html              # Arquivo HTML principal
├── styles/
│   └── main.css            # Todos os estilos (CSS)
├── scripts/
│   ├── app.js              # Lógica do catálogo e navegação
│   └── chat.js             # Lógica do chat flutuante
├── data/
│   └── temas.js            # Dados dos temas e materiais
├── pdfs/                   # Pasta para os PDFs (criada automaticamente)
│   ├── btg/
│   ├── inter/
│   ├── xp/
│   ├── nubank/
│   └── rico/
├── README.md               # Este arquivo
└── materiais_apoio_simpla.html  # Arquivo original (pode ser removido)
```

## 🚀 Como Usar

### Abrir o projeto
Simplesmente abra o arquivo `index.html` no navegador:
```bash
# No Windows
start index.html

# Ou abra via VS Code: Clique com botão direito > "Abrir com Live Server"
```

### Adicionar novos materiais
1. Abra o arquivo `data/temas.js`
2. Adicione ou edite temas (corretoras) e materiais (PDFs) no array `TEMAS`
3. Exemplo:
```javascript
{
  id: "meu-banco",
  nome: "Meu Banco",
  descricao: "Como investir no Meu Banco",
  video: "https://youtube.com/...",
  materiais: [
    { 
      titulo: "Guia Prático", 
      arquivo: "pdfs/meu-banco/guia.pdf", 
      paginas: 10, 
      atualizado: "jan/2027" 
    }
  ]
}
```

### Customizar estilos
Todos os estilos estão em `styles/main.css`. As cores principais estão definidas em variáveis CSS no início do arquivo:
- `--navy`: Azul escuro principal
- `--blue`: Azul de destaque
- `--paper`: Fundo claro
- Etc.

### Ativar o chat com IA real
No arquivo `scripts/chat.js`, procure pela função `askAgent()`. Atualmente ela faz respostas simuladas. Para conectar um agente de IA:

1. Crie um backend que guarde suas chaves de API com segurança
2. Modifique a função `askAgent()` para fazer `fetch()` até seu backend
3. Seu backend chama o Gemini, Claude, ou outra API de IA

```javascript
async function askAgent(pergunta) {
  const resp = await fetch("https://seu-backend.com/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ pergunta })
  });
  const data = await resp.json();
  return data.resposta;
}
```

## 📊 Funcionalidades

- ✅ **Navegação por temas** — Sidebar com lista de corretoras
- ✅ **Busca global** — Encontre PDFs por nome ou corretora
- ✅ **Links para vídeos** — Tutorial em YouTube para cada corretora
- ✅ **Chat flutuante** — Interface pronta para agente de IA
- ✅ **Responsivo** — Funciona em desktop e mobile
- ✅ **Acessível** — Compatível com leitores de tela

## 🎨 Design

O projeto segue o design system da **Simpla Invest** com:
- Paleta de cores coordenada
- Typography com Fraunces (serif) e IBM Plex Sans (sans-serif)
- Componentes reutilizáveis
- Espaçamento e ritmo visual consistente

## 📝 Licença

Conteúdo educacional — Não constitui recomendação de investimento.
