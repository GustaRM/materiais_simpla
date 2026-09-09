// =========================================================================
// LÓGICA DO CATÁLOGO — Renderização de temas e materiais
// =========================================================================

const topicsList = document.getElementById("topics-list");
const docGrid = document.getElementById("doc-grid");
const contentTitle = document.getElementById("content-title");
const contentDesc = document.getElementById("content-desc");
const searchInput = document.getElementById("search-input");
const corretorasToggle = document.getElementById("corretoras-toggle");

let activeTopicId = null; // null = "todos"

// ========= Toggle de expansão da barra lateral =========
corretorasToggle.addEventListener("click", () => {
  const isOpen = corretorasToggle.getAttribute("aria-expanded") === "true";
  corretorasToggle.setAttribute("aria-expanded", String(!isOpen));
  topicsList.classList.toggle("collapsed", isOpen);
});

// ========= Ícone de documento (SVG) =========
function docIconSVG() {
  return `<svg class="doc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <path d="M14 2v6h6"/>
  </svg>`;
}

// ========= Logo da corretora =========
function logoCorretora(logoUrl, nomeTema) {
  return `<img class="doc-logo" src="${logoUrl}" alt="Logo ${nomeTema}" loading="lazy" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22currentColor%22 stroke-width=%221.6%22%3E%3Cpath d=%22M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z%22/%3E%3Cpath d=%22M14 2v6h6%22/%3E%3C/svg%3E'">`;
}

// ========= Renderização da lista de temas na barra lateral =========
function renderTopics() {
  const totalCount = TEMAS.reduce((sum, t) => sum + t.materiais.length, 0);
  let html = `<li>
    <button class="topic-btn ${activeTopicId === null ? "active" : ""}" data-topic="">
      <span>Todos os materiais</span>
      <span class="topic-count">${totalCount}</span>
    </button>
  </li>`;

  TEMAS.forEach(t => {
    html += `<li>
      <button class="topic-btn ${activeTopicId === t.id ? "active" : ""}" data-topic="${t.id}">
        <span>${t.nome}</span>
        <span class="topic-count">${t.materiais.length}</span>
      </button>
    </li>`;
  });

  topicsList.innerHTML = html;

  // Listeners para clique em temas
  topicsList.querySelectorAll(".topic-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      activeTopicId = btn.dataset.topic || null;
      searchInput.value = "";
      renderTopics();
      renderDocs();
    });
  });
}

// ========= Card de vídeo =========
function videoCardHTML(t) {
  return `<a class="video-card" href="${t.video}" target="_blank" rel="noopener">
    <span class="video-icon">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
    </span>
    <span class="video-text">
      <strong>Tutorial em vídeo — ${t.nome}</strong>
      <span>Assista o passo a passo completo no YouTube</span>
    </span>
  </a>`;
}

// ========= Renderização do catálogo de documentos =========
function renderDocs() {
  const query = searchInput.value.trim().toLowerCase();
  let temasToShow = activeTopicId
    ? TEMAS.filter(t => t.id === activeTopicId)
    : TEMAS;

  // Atualiza cabeçalho do conteúdo
  if (query) {
    contentTitle.textContent = `Resultados para "${searchInput.value}"`;
    contentDesc.textContent = "Materiais de todas as corretoras que combinam com sua busca.";
  } else if (activeTopicId) {
    const t = TEMAS.find(t => t.id === activeTopicId);
    contentTitle.textContent = t.nome;
    contentDesc.textContent = t.descricao;
  } else {
    contentTitle.textContent = "Todas as corretoras";
    contentDesc.textContent = "Vídeos e PDFs de apoio, organizados por corretora.";
  }

  // Vídeo em destaque (apenas quando uma única corretora está selecionada)
  const videoHTML = (!query && activeTopicId)
    ? videoCardHTML(temasToShow[0])
    : "";

  // Monta lista de materiais visíveis (com referência à corretora)
  let materiaisVisiveis = [];
  temasToShow.forEach(t => {
    t.materiais.forEach(m => materiaisVisiveis.push({ ...m, tema: t.nome, logo: t.logo }));
  });

  // Filtra pela busca
  if (query) {
    materiaisVisiveis = materiaisVisiveis.filter(m =>
      m.titulo.toLowerCase().includes(query) || m.tema.toLowerCase().includes(query)
    );
  }

  // Renderiza grid ou estado vazio
  if (materiaisVisiveis.length === 0) {
    const emptyMsg = (!query && activeTopicId)
      ? "Ainda não há PDFs cadastrados para esta corretora — em breve adicionaremos."
      : "Nenhum material encontrado.";
    docGrid.innerHTML = videoHTML + `<div class="empty-state">${emptyMsg}</div>`;
    return;
  }

  docGrid.innerHTML = videoHTML + materiaisVisiveis.map(m => `
    <article class="doc-card">
      ${logoCorretora(m.logo, m.tema)}
      <h3>${m.titulo}</h3>
      <div class="doc-meta">${m.tema} · ${m.paginas} pág. · atualizado em ${m.atualizado}</div>
      <div class="doc-actions">
        <a href="${m.arquivo}" target="_blank" rel="noopener">Abrir PDF</a>
      </div>
    </article>
  `).join("");
}

// ========= Listener para busca =========
searchInput.addEventListener("input", () => {
  if (searchInput.value.trim()) activeTopicId = null;
  renderTopics();
  renderDocs();
});

// ========= Inicialização =========
renderTopics();
renderDocs();
