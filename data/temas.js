// =========================================================================
// DADOS — Temas e materiais das corretoras
// Altere aqui para adicionar ou atualizar conteúdo
// =========================================================================

const TEMAS = [
  {
    id: "btg",
    nome: "BTG Pactual",
    descricao: "Como investir e acompanhar seus ativos, dividendos e movimentações na corretora do BTG.",
    video: "https://www.youtube.com/watch?v=QGlw72JaLMY",
    logo: "https://www.google.com/s2/favicons?domain=btgpactual.com&sz=64",
    materiais: [
      { titulo: "Guia Prático: Como investir no BTG", arquivo: "pdfs/Corretora_BTG.pdf", paginas: 10, atualizado: "ago/2026" },
      { titulo: "Como acompanhar seus investimentos no BTG", arquivo: "pdfs/Acompanhamento_-_BTG.pdf", paginas: 6, atualizado: "ago/2026" }
    ]
  },
  {
    id: "inter",
    nome: "Inter",
    descricao: "Tutorial em vídeo de como abrir a conta e investir pelo Inter.",
    video: "https://www.youtube.com/watch?v=570SiiqQ2_s",
    logo: "https://www.google.com/s2/favicons?domain=bancointer.com.br&sz=64",
    materiais: [
      { titulo: "Guia Prático: Como investir no Inter", arquivo: "pdfs/Corretora_Inter.pdf", paginas: 10, atualizado: "ago/2026" },
      { titulo: "Como acompanhar seus investimentos no Inter", arquivo: "pdfs/Acompanhamento_-_Inter.pdf", paginas: 6, atualizado: "ago/2026" }
    ]
  },
  {
    id: "xp",
    nome: "XP Investimentos",
    descricao: "Como investir e acompanhar seus ativos, dividendos e movimentações na XP.",
    video: "https://www.youtube.com/watch?v=3uMUPnxgOaM",
    logo: "https://www.google.com/s2/favicons?domain=xpi.com.br&sz=64",
    materiais: [
      { titulo: "Guia Prático: Como investir na XP", arquivo: "pdfs/Corretora_XP.pdf", paginas: 10, atualizado: "ago/2026" },
      { titulo: "Como acompanhar seus investimentos na XP", arquivo: "pdfs/Acompanhamento_-_XP.pdf", paginas: 6, atualizado: "ago/2026" }
    ]
  },
  {
    id: "nubank",
    nome: "Nubank",
    descricao: "Como investir e acompanhar seus ativos, dividendos e movimentações no Nubank.",
    video: "https://www.youtube.com/watch?v=deS3xo2sE58",
    logo: "https://www.google.com/s2/favicons?domain=nubank.com.br&sz=64",
    materiais: [
      { titulo: "Guia Prático: Como investir no Nubank", arquivo: "pdfs/Corretora_Nubank.pdf", paginas: 8, atualizado: "ago/2026" },
      { titulo: "Como acompanhar seus investimentos no Nubank", arquivo: "pdfs/Acompanhamento_-_Nubank.pdf", paginas: 6, atualizado: "ago/2026" }
    ]
  },
  {
    id: "rico",
    nome: "Rico",
    descricao: "Como investir e acompanhar seus ativos, dividendos e movimentações na corretora Rico.",
    video: "https://www.youtube.com/watch?v=3OuKU7lfZPU",
    logo: "https://www.google.com/s2/favicons?domain=rico.com.vc&sz=64",
    materiais: [
      { titulo: "Guia Prático: Como investir na Rico", arquivo: "pdfs/Corretora_Rico.pdf", paginas: 10, atualizado: "ago/2026" },
      { titulo: "Como acompanhar seus investimentos na Rico", arquivo: "pdfs/Acompanhamento_-_Rico.pdf", paginas: 6, atualizado: "ago/2026" }
    ]
  }
];

const MENUS = [
  {
    id: "corretoras",
    nome: "Corretoras",
    descricao: "Vídeos e PDFs de apoio, organizados por corretora.",
    temas: TEMAS,
    exibirQuantidade: true
  },
  {
    id: "guias-iniciantes",
    nome: "Guias para Iniciantes",
    descricao: "Materiais essenciais para começar a investir.",
    temas: [
      { id: "tesouro-selic", nome: "Guia Prático do Tesouro Selic", materiais: [{ titulo: "Guia Prático do Tesouro Selic", arquivo: "pdfs/Renda_Fixa_-_Auxiliar_-_Simpla_Club.pdf", paginas: "-", atualizado: "ago/2026" }] },
      { id: "cartoes", nome: "TOP 20 MELHORES CARTÕES", materiais: [{ titulo: "TOP 20 MELHORES CARTÕES", arquivo: "pdfs/TOP_20-Milhas_Areas.pdf", paginas: "-", atualizado: "ago/2026" }] },
      { id: "bitcoin", nome: "BITCOIN", materiais: [{ titulo: "BITCOIN", arquivo: "pdfs/Bitcoin.pdf", paginas: "-", atualizado: "ago/2026" }] }
    ]
  },
  {
    id: "renda-fixa-fundos",
    nome: "Renda Fixa & Fundos",
    descricao: "Materiais sobre renda fixa, fundos e previdência.",
    temas: [
      { id: "etfs-renda-fixa", nome: "Conhecendo os ETFs de renda fixa", materiais: [{ titulo: "Conhecendo os ETFs de renda fixa", arquivo: "pdfs/Conhecendo_os_ETFs_de_renda_fixa_-_Relatrio_Simpla_Club.docx.pdf", paginas: "-", atualizado: "ago/2026" }] },
      { id: "renda-fixa-simpla", nome: "Renda Fixa - Simpla Club", materiais: [{ titulo: "Renda Fixa - Simpla Club", arquivo: "pdfs/Renda_Fixa_-_Auxiliar_-_Simpla_Club.pdf", paginas: "-", atualizado: "ago/2026" }] },
      { id: "previdencia", nome: "Previdência Privada", materiais: [{ titulo: "Previdência Privada", arquivo: "pdfs/Previdncia_Privada_.pdf_(1).pdf", paginas: "-", atualizado: "ago/2026" }] }
    ]
  },
  {
    id: "fiis-acoes",
    nome: "Fundos Imobiliários & Ações",
    descricao: "Materiais sobre fundos imobiliários, ações e dividendos.",
    temas: [
      { id: "fiis-dez", nome: "FIIs de R$10: Valem a pena?", materiais: [{ titulo: "FIIs de R$10: Valem a pena?", arquivo: "pdfs/Fundos_Base_10_-_Relatrio_Simpla_Club.docx.pdf", paginas: "-", atualizado: "ago/2026" }] },
      { id: "etfs-dividendos", nome: "Conhecendo os ETFs de dividendos", materiais: [{ titulo: "Conhecendo os ETFs de dividendos", arquivo: "pdfs/ETFs_brasileiros_que_pagam_dividendos_Relatorio_Simpla_Club_docx.pdf", paginas: "-", atualizado: "ago/2026" }] },
      { id: "tributar", nome: "Tributar Não é a solução", materiais: [{ titulo: "Tributar Não é a solução", arquivo: "pdfs/Tributao_de_FIIs.pdf", paginas: "-", atualizado: "ago/2026" }] }
    ]
  },
  {
    id: "imposto-fiscal",
    nome: "Imposto de Renda & Fiscal",
    descricao: "Orientações fiscais para investidores.",
    temas: [
      { id: "imposto-investidores", nome: "Imposto de Renda - para Investidores", materiais: [{ titulo: "Imposto de Renda - para Investidores", arquivo: "pdfs/Aula_-_Imposto_de_Renda_.pdf.pdf", paginas: "-", atualizado: "ago/2026" }] },
      { id: "documentos-contador", nome: "Guia Prático: O que você precisa \"enviar para o contador\" (IR 2026)", materiais: [{ titulo: "Guia Prático: O que você precisa \"enviar para o contador\" (IR 2026)", arquivo: "pdfs/Documentos_-_Imposto_de_Renda_.pdf", paginas: "-", atualizado: "ago/2026" }] }
    ]
  },
  {
    id: "carteiras-estrategia",
    nome: "Carteiras Recomendadas & Estratégia",
    descricao: "Estratégias de alocação e construção de carteiras.",
    temas: [
      { id: "estrategia-global", nome: "Estratégia Global: Alocação", materiais: [{ titulo: "Estratégia Global: Alocação", arquivo: "pdfs/Relatorio_Construcao_Carteira_Internacional_-_Simpla_Club.pdf", paginas: "-", atualizado: "ago/2026" }] },
      { id: "investir-filhos", nome: "COMO INVESTIR PARA OS FILHOS", materiais: [{ titulo: "COMO INVESTIR PARA OS FILHOS", arquivo: "pdfs/Carteira_para_Filhos_-__Simpla_Club.docx.pdf", paginas: "-", atualizado: "ago/2026" }] },
      { id: "comite-alocacao", nome: "Comitê de Alocação", materiais: [{ titulo: "Comitê de Alocação", arquivo: "pdfs/Comit_de_Alocao.pdf", paginas: "-", atualizado: "ago/2026" }] }
    ]
  },
  {
    id: "plataforma-suporte",
    nome: "Plataforma & Suporte Operacional",
    descricao: "Guias de uso da plataforma e suporte operacional.",
    temas: [
      { id: "onboarding", nome: "Simpla Club: Guia Prático de Uso", materiais: [{ titulo: "Simpla Club: Guia Prático de Uso", arquivo: "pdfs/Onboarding_Simpla_Club.pdf", paginas: "-", atualizado: "ago/2026" }] },
      { id: "troca-assessor", nome: "Orientação de troca de Assessor BTG", materiais: [{ titulo: "Orientação de troca de Assessor BTG", arquivo: "pdfs/Orientao_de_troca_de_Assessor_BTG.pdf", paginas: "-", atualizado: "ago/2026" }] },
      { id: "custodia-xp", nome: "Custódia ativa em outra corretora do Grupo XP", materiais: [{ titulo: "Custódia ativa em outra corretora do Grupo XP", arquivo: "pdfs/Custdia_em_outra_corretora_do_Grupo_XP.pdf", paginas: "-", atualizado: "ago/2026" }] }
    ]
  }
];
