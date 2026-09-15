// =========================================================================
// LÓGICA DO CATÁLOGO — Renderização de temas e materiais
// =========================================================================

const sidebarNav = document.getElementById("sidebar-nav");
const docGrid = document.getElementById("doc-grid");
const contentTitle = document.getElementById("content-title");
const contentDesc = document.getElementById("content-desc");
const searchInput = document.getElementById("search-input");

let activeTopicId = null;
let activeMenuId = "corretoras";

// ========= Logo da corretora =========
function logoCorretora(logoUrl, nomeTema) {
  return `<img class="doc-logo" src="${logoUrl}" alt="Logo ${nomeTema}" loading="lazy" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22currentColor%22 stroke-width=%221.6%22%3E%3Cpath d=%22M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z%22/%3E%3Cpath d=%22M14 2v6h6%22/%3E%3C/svg%3E'">`;
}

// ========= Renderização da lista de temas na barra lateral =========
function renderTopics() {
  sidebarNav.innerHTML = MENUS.map((menu, index) => `
    <div class="menu-group">
      <button class="nav-toggle" data-menu="${menu.id}" aria-expanded="${activeMenuId === menu.id}">
        <span>${menu.nome}</span>
        <svg class="chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      <ul class="topics ${activeMenuId === menu.id ? "" : "collapsed"}">
        ${menu.temas.map(t => `<li>
          <button class="topic-btn ${activeTopicId === t.id ? "active" : ""}" data-topic="${t.id}">
            <span>${t.nome}</span>
            ${menu.exibirQuantidade ? `<span class="topic-count">${t.materiais.length}</span>` : ""}
          </button>
        </li>`).join("")}
      </ul>
    </div>
  `).join("");

  sidebarNav.querySelectorAll(".nav-toggle").forEach(btn => {
    btn.addEventListener("click", () => {
      const menuId = btn.dataset.menu;
      activeMenuId = activeMenuId === menuId ? null : menuId;
      renderTopics();
    });
  });

  // Listeners para clique em temas
  sidebarNav.querySelectorAll(".topic-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      activeTopicId = btn.dataset.topic || null;
      activeMenuId = MENUS.find(menu => menu.temas.some(t => t.id === activeTopicId)).id;
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
  const todosTemas = MENUS.flatMap(menu => menu.temas.map(t => ({ ...t, menuNome: menu.nome })));
  let temasToShow = activeTopicId
    ? todosTemas.filter(t => t.id === activeTopicId)
    : todosTemas;

  // Atualiza cabeçalho do conteúdo
  if (query) {
    contentTitle.textContent = `Resultados para "${searchInput.value}"`;
    contentDesc.textContent = "Materiais que combinam com sua busca.";
  } else if (activeTopicId) {
    const t = todosTemas.find(t => t.id === activeTopicId);
    contentTitle.textContent = t.nome;
    contentDesc.textContent = t.descricao || t.menuNome;
  } else {
    contentTitle.textContent = "Materiais de apoio";
    contentDesc.textContent = "Vídeos e PDFs organizados por tema e corretora.";
  }

  // Vídeo em destaque (apenas quando uma única corretora está selecionada)
  const videoHTML = (!query && activeTopicId && temasToShow[0].video)
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
      ${m.logo ? logoCorretora(m.logo, m.tema) : ""}
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
