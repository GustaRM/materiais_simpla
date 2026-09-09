// =========================================================================
// LÓGICA DO CHAT FLUTUANTE
// =========================================================================

const launcher = document.getElementById("chat-launcher");
const panel = document.getElementById("chat-panel");
const closeBtn = document.getElementById("chat-close");
const chatLog = document.getElementById("chat-log");
const chatForm = document.getElementById("chat-form");
const chatText = document.getElementById("chat-text");

// ========= Abrir/fechar painel do chat =========
launcher.addEventListener("click", () => {
  const isOpen = panel.classList.toggle("open");
  launcher.setAttribute("aria-expanded", String(isOpen));
  if (isOpen) chatText.focus();
});

closeBtn.addEventListener("click", () => {
  panel.classList.remove("open");
  launcher.setAttribute("aria-expanded", "false");
});

// ========= Adicionar mensagem ao log =========
function addMessage(text, who) {
  const div = document.createElement("div");
  div.className = `msg ${who}`;
  div.textContent = text;
  chatLog.appendChild(div);
  chatLog.scrollTop = chatLog.scrollHeight;
  return div;
}

// ========= Submissão do formulário =========
chatForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const text = chatText.value.trim();
  if (!text) return;

  addMessage(text, "user");
  chatText.value = "";

  const typingEl = addMessage("digitando...", "bot typing");
  const reply = await askAgent(text);
  typingEl.remove();
  addMessage(reply, "bot");
});

// =========================================================================
// askAgent(pergunta) — Integração com agente de IA
//
// HOJE: resposta simulada (mock), apenas para validar a interface.
//
// QUANDO FOR LIGAR O GEMINI OU O CLAUDE:
// Não chame a API de IA direto do navegador com a chave exposta —
// qualquer pessoa vendo o "Ver código-fonte" da página veria a chave.
//
// O caminho correto é:
//   1) Criar um pequeno backend (serverless function, endpoint Node,
//      Cloud Function, etc.) que guarda a chave da API em segredo.
//   2) Esse backend recebe a pergunta do usuário, monta o prompt com
//      o contexto dos PDFs (idealmente via um índice/RAG dos materiais,
//      não o PDF inteiro a cada chamada) e chama a API do Gemini/Claude.
//   3) Esta função abaixo só faz fetch() nesse SEU backend.
//
// Exemplo de como ficaria (troque a URL pelo seu endpoint real):
//
//   async function askAgent(pergunta) {
//     const resp = await fetch("https://SEU-BACKEND.com/api/chat", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ pergunta })
//     });
//     const data = await resp.json();
//     return data.resposta;
//   }
//
// O backend, do lado dele, chamaria o Gemini (generativelanguage
// .googleapis.com) ou a API da Anthropic (api.anthropic.com/v1/messages),
// passando a base de conhecimento dos PDFs como contexto.
// ========================================================================= */

async function askAgent(pergunta) {
  await new Promise(r => setTimeout(r, 550)); // simula latência de rede

  // mock simples: tenta achar um material cujo título "bate" com a pergunta
  const termo = pergunta.toLowerCase();
  for (const t of TEMAS) {
    for (const m of t.materiais) {
      if (
        termo.includes(t.nome.toLowerCase()) ||
        m.titulo.toLowerCase().split(" ").some(w => w.length > 3 && termo.includes(w))
      ) {
        return `Encontrei um material relacionado: "${m.titulo}" (tema ${t.nome}). Você pode abri-lo na lista ao lado. (Esta é uma resposta simulada — conecte um agente real para respostas geradas a partir do conteúdo dos PDFs.)`;
      }
    }
  }

  return "Ainda não tenho um agente de IA conectado — esta é uma resposta simulada. Quando o Gemini ou o Claude estiverem ligados ao backend, vou responder com base no conteúdo real dos materiais de apoio.";
}
