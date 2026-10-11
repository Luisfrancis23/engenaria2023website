/* ============================================================
   ENGENHARIA 2023 — Dados (komponente reutilizável)
   ============================================================ */

/* ---------- Área Engenharia ---------- */
const AREAS = [
  {
    id: "informatica",
    icon: "fa-solid fa-microchip",
    titulu: "Engenharia Informátika",
    kor: "#2e86de",
    deskrisaun: "Área ne'e foka ba teknolojia informasaun, programasaun, software, website, sistema informasaun, database, rede, seguransa no solusaun digital.",
    detalhe: "Engenharia Informátika ne'e área ne'ebé estuda no dezenvolve sistemas informasaun, programasaun, software, website, database, rede komputador no seguransa digital. Estudante iha área ne'e bele kria solusaun teknolojia ba problemu real, hanesan aplikasaun móvel, plataforma web, intelijénsia artifisiál no analiza dadus. Innovasaun digital ne'e futuru, no Engenharia Informátika mak motór ba transformasaun ne'ebá.",
    pontus: [
      "Programasaun no desenvolvimentu software",
      "Website, aplikasaun móvel no sistema informasaun",
      "Database, rede no seguransa cibernétika",
      "Intelijénsia artifisiál no analiza dadus"
    ]
  },
  {
    id: "industrial",
    icon: "fa-solid fa-industry",
    titulu: "Engenharia Industrial",
    kor: "#e8590c",
    deskrisaun: "Área ne'e foka ba prosesu industrial, produsaun, qualidade, produtividade, logístika, gestão no otimizasaun rekursu.",
    detalhe: "Engenharia Industrial ne'e área ne'ebé otimiza prosesu produsaun, logístika, gestão operasaun no kualitas. Estudante iha área ne'e hanorin atu reduze kustu, aumenta produtividade no melhora efisiénsia ba fabrika, empresa no servisu. Nia papel mak importante liu ba dezenvolvimentu industria no ekonomia nasionál.",
    pontus: [
      "Otimizasaun prosesu produsaun no logístika",
      "Kontrole qualidade no produtividade",
      "Gestão operasaun no kadeia fornecimentu",
      "Automasaun no industria 4.0"
    ]
  },
  {
    id: "petrolifero",
    icon: "fa-solid fa-oil-well",
    titulu: "Engenharia Petrolíferu",
    kor: "#7048e8",
    deskrisaun: "Área ne'e foka ba esplorasaun, produsaun, prosesamentu, rekursu energia, seguransa no sustentabilidade iha setor petrolíferu.",
    detalhe: "Engenharia Petrolíferu ne'e área ne'ebé hatene ba esplorasaun, produsaun no prosesamentu rekursu petrolíferu no energia. Estudante iha área ne'e estudu teknolojia esplorasaun, seguransa operasaun, ambiente no sustentabilidade iha setor energia — setor chave ba dezenvolvimentu Timor-Leste.",
    pontus: [
      "Esplorasaun no produsaun petróleo no gás",
      "Prosesamentu no refinamentu rekursu energia",
      "Seguransa operasaun no proteksaun ambiente",
      "Transisaun energia no sustentabilidade"
    ]
  },
  {
    id: "geologia",
    icon: "fa-solid fa-mountain",
    titulu: "Engenharia Geologia",
    kor: "#2f9e44",
    deskrisaun: "Área ne'e foka ba estudu rai, rocha, rekursu mineral, rekursu naturál, risku geológiku no proteksaun ambiente.",
    detalhe: "Engenharia Geologia ne'e área ne'ebé estudu rai, rocha, rekursu mineral no rekursu naturál. Estudante iha área ne'e identifika risku geológiku, halo mapa jeológiku no apoia planifikasaun utilizasaun terra ho proteksaun ambiente — fundamental ba dezenvolvimentu sustentável no prevenzaun desastre natural.",
    pontus: [
      "Estudu rai, rocha no rekursu mineral",
      "Mapa jeológiku no analiza risku",
      "Rekursu naturál no água subterrânea",
      "Proteksaun ambiente no prevenzaun risku"
    ]
  }
];

/* ---------- Kategoria cores ---------- */
const KOR = {
  "Semináriu": "#5b6cff",
  "Workshop": "#f5a524",
  "Formasaun": "#2e86de",
  "Kompetisaun": "#e8590c",
  "Komunidade": "#2f9e44",
  "Projetu": "#0ca678",
  "Eventu": "#e64980",
  "Vizita": "#748ffc",
  "Enkontru": "#845ef7",
  "Atividade": "#1e6091"
};

/* ---------- Atividade Sira ---------- */
const ATIVIDADES = [
  {
    id: 1,
    titulu: "Semináriu Inovasaun Teknolojia 2025",
    kategoria: "Semináriu",
    data: "15 Marsu 2025",
    fatin: "Auditorium Universitáriu, Dili",
    ikon: "fa-solid fa-chalkboard-user",
    img: { u: "photo-1540575467063-178a50c2df87", seed: "seminario-2025" },
    deskrisaun: "Semináriu nasionál ho especialista teknolojia hosi diferente área, foka ba inovasaun digital no futuru teknolojia iha Timor-Leste.",
    detalhe: "Semináriu Inovasaun Teknolojia 2025 ne'e eventu nasionál ne'ebé juntu estudante engenharia, profesor no profissional industria atu diskute inovasaun digital, intelijénsia artifisiál no start-up teknolojia. Eventu ne'e iha 3 sessaun: palestra principal, painel diskusaun no networking session. Partisipante bele hatene tendénsia teknolojia mais recente no kontaktu mentore husi industria."
  },
  {
    id: 2,
    titulu: "Workshop Programasaun Web Modernu",
    kategoria: "Workshop",
    data: "12 Abril 2025",
    fatin: "Laboratório Informátika, Campus",
    ikon: "fa-solid fa-screwdriver-wrench",
    img: { u: "photo-1461749280684-dccba630e2f6", seed: "workshop-web" },
    deskrisaun: "Workshop prátiku 2 dias ho hands-on lab: HTML5, CSS3, JavaScript no Bootstrap 5 atu kria website modernu responsivu.",
    detalhe: "Workshop ne'e prátiku no interativu. Partisipante bele aprende HTML5 semântiku, CSS3 modernu ho Flexbox no Grid, JavaScript ES6+ no Bootstrap 5. Kada equipa sei kria projétu website responsivu real. Material completo no sertifikadu participasaun fornecido. Habilidoso ba estudante iniciante no intermediário."
  },
  {
    id: 3,
    titulu: "Formasaun Lideransa Estudante",
    kategoria: "Formasaun",
    data: "20 Maiu 2025",
    fatin: "Sala Konferensia, Dili",
    ikon: "fa-solid fa-user-graduate",
    img: { u: "photo-1552664730-d307ca884978", seed: "lideransa" },
    deskrisaun: "Programa formasaun lideransa, komunikasaun no trabalhu equipa ba lider futuru engenharia nian.",
    detalhe: "Formasaun Lideransa Estudante ne'e programa 4 semanas ne'ebé dezenvolve habilidoso lideransa, komunikasaun efektiva, resolucaun problema no trabalhu hamutuk iha equipa. Metodologia ne'e baseia iha kazu real engenharia no simulasaun projetu. Estudante completante bele sertifikadu no hatene mo'at lideransa iha proyektu sira."
  },
  {
    id: 4,
    titulu: "Kompetisaun Robotika ENGENHARIA 2023",
    kategoria: "Kompetisaun",
    data: "10 Junho 2025",
    fatin: "Ginásio Universitáriu, Dili",
    ikon: "fa-solid fa-trophy",
    img: { u: "photo-1485827404703-89b55fcc595e", seed: "robotika" },
    deskrisaun: "Kompetisaun robotika entre equipa estudante — dezegna, konstrui no programa robot atu resolva desafiu propostu.",
    detalhe: "Kompetisaun Robotika ne'e desafiu anual ne'ebé ekipa estudante (2-4 pessoa) dezegna, konstrui no programa robot atu resolva desafiu propostu. Kategoria: linha seguimento, obstákulu no desafiu livre. Juri husi profesor no industria. Premiu ba 3 primeiru no sertifikadu ba todos partisipante. Insizaun aberta ate 31 Maiu."
  },
  {
    id: 5,
    titulu: "Servisu Komunidade: Instalasaun Sistema Água",
    kategoria: "Komunidade",
    data: "05 Julho 2025",
    fatin: "Aldeia Fatumaca, Dili",
    ikon: "fa-solid fa-hands-helping",
    img: { u: "photo-1593154547489-0962bdd5b9c3", seed: "komunidade-aga" },
    deskrisaun: "Projektu servisu komunidade: estudante engenharia instala sistema água potável no halo formasaun higiene ba komunidade.",
    detalhe: "Projektu servisu komunidade ne'e parte husi missi Engenharia 2023 atu kontribui ba komunidade. Estudante engenharia, ho apoio supervisor, instalou sistema água potável ne'ebé benefisia 120 familia, no halo kampanha higiene no sanitasaun. Projétu ne'e mos demonstrasaun praktika engenharia sustentável no responsavel."
  },
  {
    id: 6,
    titulu: "Enkontru Estudante Engenharia 2025",
    kategoria: "Enkontru",
    data: "28 Julho 2025",
    fatin: "Kampus Universitáriu, Dili",
    ikon: "fa-solid fa-users",
    img: { u: "photo-1517486808906-6ca8b3f04846", seed: "enkontru" },
    deskrisaun: "Enkontru anual estudante engenharia hosi área diferente — networking, partilha experiencia no planifikasaun futuru.",
    detalhe: "Enkontru Estudante Engenharia ne'e eventu anual ne'ebé juntu estudante hosi Engenharia Informátika, Industrial, Petrolíferu no Geologia. Programa inklui: partilha experiencia akademika, painel karreira, networking session no lanche fraternal. Objetivu: harii kooperasaun entre estudante sira no prepara atividade akademiku tinan seguinte."
  },
  {
    id: 7,
    titulu: "Formasaun CAD no Desenhu Tekniku",
    kategoria: "Formasaun",
    data: "09 Agostu 2025",
    fatin: "Laboratório Engenharia, Campus",
    ikon: "fa-solid fa-computer",
    img: { u: "photo-1581091226825-a6a2a5aee158", seed: "cad" },
    deskrisaun: "Formasaun prátiku CAD 2D/3D no desenhu tekniku ba projetu engenharia — ferramenta essensial ba profissional futuru.",
    detalhe: "Formasaun CAD no Desenhu Tekniku hatudu estudante atu uza software CAD (AutoCAD no Fusion 360) ba desenhu 2D no modelagem 3D. Kurikulu: fundamentu desenhu tekniku, cotagem, vistas no render. Estudante completante bele sertifikadu no prepara ba projetu real no estágiu industria."
  },
  {
    id: 8,
    titulu: "Kompetisaun Projektu Inovasaun",
    kategoria: "Kompetisaun",
    data: "14 Setembru 2025",
    fatin: "Auditorium, Dili",
    ikon: "fa-solid fa-diagram-project",
    img: { u: "photo-1531403009284-440f080d1e12", seed: "inovasaun" },
    deskrisaun: "Estudante apresenta projetu inovasaun ba juri — solusaun ba problemu real komunitariu ho teknolojia no enjenharia.",
    detalhe: "Kompetisaun Projektu Inovasaun ne'e plataforma ba estudante apresenta solusaun inovadora ba problemu real iha Timor-Leste. Kada ekipa apresenta projetu (protótipu no planu negósio) ba juri husi universidade no industria. Kategoria: teknolojia, industria, ambiente no energia. Vencedor bele mentoria no apoio ba implementasaun."
  },
  {
    id: 9,
    titulu: "Vizita Edukasaun ba Instalasaun Industriál",
    kategoria: "Vizita",
    data: "03 Outubru 2025",
    fatin: "Zona Industriál, Dili",
    ikon: "fa-solid fa-industry",
    img: { u: "photo-1504328345606-18bbc8c9d7d1", seed: "vizita-industria" },
    deskrisaun: "Vizita edukasaun ba fabrica no instalasaun industriál — estudante hatene prosesu produsaun real no gestão industrial.",
    detalhe: "Vizita Edukasaun ne'e oportunidade ba estudante hatene prosesu produsaun real, kontrolo qualidade, logístika no seguransa industriál. Estudante acompanha operasaun fabrika, diskute ho enjeñeiro no supervisiona, no identifika oportunidade otimizasaun. Relatóriu vizita obrigatóriu ba estudante Engenharia Industrial."
  }
];

/* ---------- Projetu Sira ---------- */
const PROJETUS = [
  {
    id: 1,
    titulu: "Sistema Informasaun Gestão Estudante",
    area: "Engenharia Informátika",
    kor: "#2e86de",
    ikon: "fa-solid fa-database",
    tinan: "2025",
    membru: "4 membru",
    img: { u: "photo-1498050108023-c5249f4df085", seed: "proj-sistema" },
    deskrisaun: "Plataforma web ba gestãu dadus estudante: insizaun, notas, presensa no relatóriu — automatiza prosesu akademiku.",
    detalhe: "Sistema Informasaun Gestão Estudante ne'e plataforma web ne'ebé automatiza insizaun estudante, registu notas, kontrolo presensa no jenera relatóriu akademiku. Desenvolvido ho arquitetura cliente-servidor, database relasional no interface responsivu. Objetivu: reduz trabalhu administrativu no aumenta transparensia informasaun akademika.",
    tags: ["PHP", "MySQL", "JavaScript", "Bootstrap 5", "HTML/CSS"]
  },
  {
    id: 2,
    titulu: "Otimizasaun Prosesu Produsaun Fabrika",
    area: "Engenharia Industrial",
    kor: "#e8590c",
    ikon: "fa-solid fa-chart-line",
    tinan: "2024",
    membru: "5 membru",
    img: { u: "photo-1537462715879-360eeb61a0ad", seed: "proj-industria" },
    deskrisaun: "Estudu otimizasaun linia produsaun: analiza gargalo, balansa linia no proposta melhora produtividade 23%.",
    detalhe: "Projétu ne'e realiza analisa detalhada ba linia produsaun fabrika local: identifika gargalo, mede tempo siklu, balansa linia no proposta re-organizasaun espasial. Resultadu: produtividade aumenta 23% no desperdísiu reduze 15%. Metodologia: estudu tempu, diagrama fluxu no analiza capacidade. Relatóriu entregue ba managment fabrika.",
    tags: ["Lean", "Six Sigma", "Excel", "Simulaçao", "IE Tools"]
  },
  {
    id: 3,
    titulu: "Analiza Rekursu Energia Lokal",
    area: "Engenharia Petrolíferu",
    kor: "#7048e8",
    ikon: "fa-solid fa-oil-well",
    tinan: "2025",
    membru: "4 membru",
    img: { u: "photo-1466611653911-95081537e5b7", seed: "proj-energia" },
    deskrisaun: "Avaliasaun rekursu energia renewável — potensial solar no eóliku ba dezenvolvimentu energia sustentável.",
    detalhe: "Projétu Avaliasaun Rekursu Energia ne'e estudu potensial energia solar no eóliku iha rejião seleisionada: mede irradiansia solar, dadus meteorológiku no analiza viabilidade tekniku-ekonomiku. Konkluzaun: potensial solar alta ba eletrisasaun rural. Rezultadu apoiou planifikasaun programa energia renovável no reduza dependénsia combustível fósseis.",
    tags: ["Solar", "Eóliku", "GIS", "HOMER", "MATLAB"]
  },
  {
    id: 4,
    titulu: "Mapa Jeológiku Zona Dili",
    area: "Engenharia Geologia",
    kor: "#2f9e44",
    ikon: "fa-solid fa-layer-group",
    tinan: "2024",
    membru: "3 membru",
    img: { u: "photo-1464822759023-fed622ff2c3b", seed: "proj-geologia" },
    deskrisaun: "Mapa jeológiku detalladu zona Dili: identifikasaun formasaun rai, risku erosaun no zona ocupasaun segura.",
    detalhe: "Mapa Jeológiku Zona Dili ne'e trabálhu de kampu no laboratório: amostra rocha, analiza stratigrafia, mapeamentu digital no identifikasaun zona risku (erosaun, deslizamentu). Produz mapa jeológi-skala 1:25000 no relatóriu rekomendasaun ba planifikasaun urbana. Ferramenta importante ba governu no investidor.",
    tags: ["QGIS", "Field Mapping", "Petrografia", "GPS", "CAD"]
  }
];

/* ---------- Ekipa ---------- */
const EKIPA = [
  { naran: "Adriano Martins", pozisaun: "Prezidenti", area: "Gestão & Lideransa", foto: "https://randomuser.me/api/portraits/men/12.jpg", seed: "adriano", role: "Lideransa" },
  { naran: "Sónia da Silva", pozisaun: "Vise-Prezidenti", area: "Koordenasaun Geral", foto: "https://randomuser.me/api/portraits/women/65.jpg", seed: "sonia", role: "Lideransa" },
  { naran: "Rui Cardoso", pozisaun: "Sekretáriu", area: "Dokumentasaun & Protokolu", foto: "https://randomuser.me/api/portraits/men/22.jpg", seed: "rui", role: "Direksaun" },
  { naran: "Celeste Alves", pozisaun: "Tesoureiru", area: "Finanças & Orsamentu", foto: "https://randomuser.me/api/portraits/women/47.jpg", seed: "celeste", role: "Direksaun" },
  { naran: "Nélson Guterres", pozisaun: "Koordenadór Área", area: "Engenharia Informátika", foto: "https://randomuser.me/api/portraits/men/56.jpg", seed: "nelson", role: "Koordenadór" },
  { naran: "Mariana Ximenes", pozisaun: "Koordenadór Área", area: "Engenharia Industrial", foto: "https://randomuser.me/api/portraits/women/33.jpg", seed: "mariana", role: "Koordenadór" },
  { naran: "António Dias", pozisaun: "Koordenadór Área", area: "Engenharia Petrolíferu", foto: "https://randomuser.me/api/portraits/men/45.jpg", seed: "antonio", role: "Koordenadór" },
  { naran: "Filipa Mendonça", pozisaun: "Koordenadór Área", area: "Engenharia Geologia", foto: "https://randomuser.me/api/portraits/women/28.jpg", seed: "filipa", role: "Koordenadór" },
  { naran: "Joaquim Lopes", pozisaun: "Membru Komisaun", area: "Eventu & Logístika", foto: "https://randomuser.me/api/portraits/men/67.jpg", seed: "joaquim", role: "Komisaun" },
  { naran: "Beatriz Soares", pozisaun: "Membru Komisaun", area: "Komunikasaun & Media", foto: "https://randomuser.me/api/portraits/women/50.jpg", seed: "beatriz", role: "Komisaun" }
];

/* ---------- Notísia no Avisu ---------- */
const NOTISIAS = [
  {
    id: 1,
    titulu: "Konklusaun Sembrináriu Inovasaun Teknolojia — Suksesu Grandi",
    kategoria: "Eventu",
    data: "16 Marsu 2025",
    img: { u: "photo-1540575467063-178a50c2df87", seed: "noticia-seminario" },
    deskrisaun: "Semináriu Inovasaun Teknolojia 2025 konkluidu ho sucessu — 350+ partisipante, 12 palestrante no 4 painel diskusaun.",
    detalhe: "Semináriu Inovasaun Teknolojia 2025 konkluidu ho sucessu grandi iha Auditorium Universitáriu. 350+ estudante, profesor no profissional partisipou, ho 12 palestrante nasionál no internasional no 4 painel diskusaun. Tema: 'Inovasaun Digital ba Dezenvolvimentu Timor-Leste'. Agradimentu ba todos patrocinadór no voluntáriu. Hau bele hatene feedback tuir iha formuláriu online."
  },
  {
    id: 2,
    titulu: "Avisu Importantísimu: Insizaun Workshop Foun — Vaga Limitadu",
    kategoria: "Avisu",
    data: "02 Setembru 2025",
    img: { u: "photo-1524178232363-1fb2b075b655", seed: "noticia-aviso" },
    deskrisaun: "Insizaun aberta ba Workshop Programasaun Web Modernu — 40 vida. Insizaun ate 30 Setembru. Sertifikadu oficial incluidu.",
    detalhe: "Avisu: Insizaun Workshop Programasaun Web Modernu agora aberta. Vaga limitadu — 40 partisipante. Datas: 9-10 Outubru 2025, Laboratório Informátika. Konteúdu: HTML5, CSS3, JavaScript no Bootstrap 5. Requisitu: laptop própriu (pode empresta iha lab). Taxa: gratuitu ba membru Engenharia 2023. Sertifikadu oficial insira. Insizaun: formulario iha balcão sekretariadu."
  },
  {
    id: 3,
    titulu: "Orgulhus: Estudante Engenharia 2023 Buka Konkursa Nasional",
    kategoria: "Konquista",
    data: "21 Junho 2025",
    img: { u: "photo-1485827404703-89b55fcc595e", seed: "notisia-konquista" },
    deskrisaun: "Ekipa robótika Engenharia 2023 representa Timor-Leste iha Konkursa Robotika Nasionál — 2.ª pozisaun kategoria inovasaun.",
    detalhe: "Orgulhus ba comunidade Engenharia 2023! Ekipa robótika nian (Nélson, Mariana, Rui no Celeste) representa Timor-Leste iha Konkursa Robotika Nasionál no konsegue 2.ª pozisaun kategoria inovasaun. Projétu 'Robot Asisténte Laboratóriu' impresiona juri ho design no funsionaun. Parabéns ba ekipa no mentor! Kontinua harii inovasaun, harii futuru."
  },
  {
    id: 4,
    titulu: "Parceria Nova: Kolaborasaun ho Industria Lokal",
    kategoria: "Atualizasaun",
    data: "08 Agostu 2025",
    img: { u: "photo-1517486808906-6ca8b3f04846", seed: "noticia-parceria" },
    deskrisaun: "Engenharia 2023 assinatura acordo kolaborasaun ho 3 empresa industriál local — estágiu, formasaun no projetu real.",
    detalhe: "Notísia boa: Engenharia 2023 assinatura acordo kolaborasaun ho 3 empresa industriál lokal. Konveniênsia: programa estágiu ba estudante, formasaun in-empresa, acessu ba dadus projetu real no mentoria profissiál. Parceria ne'e fortalece ligasaun akademiku-industria no aumenta empleabilidade estudante. Obrigadu ba parceiru sira — juntos harii futuru!"
  }
];

/* ---------- Galeria ---------- */
const GALERIA = [
  { img: { u: "photo-1540575467063-178a50c2df87", seed: "g1" }, kategoria: "Semináriu", titulu: "Semináriu Inovasaun Teknolojia" },
  { img: { u: "photo-1461749280684-dccba630e2f6", seed: "g2" }, kategoria: "Workshop", titulu: "Hands-on Lab Programasaun" },
  { img: { u: "photo-1524178232363-1fb2b075b655", seed: "g3" }, kategoria: "Formasaun", titulu: "Sala Formasaun Lideransa" },
  { img: { u: "photo-1485827404703-89b55fcc595e", seed: "g4" }, kategoria: "Projetu Engenharia", titulu: "Robotika — Projetu Estudante" },
  { img: { u: "photo-1593154547489-0962bdd5b9c3", seed: "g5" }, kategoria: "Servisu Komunidade", titulu: "Servisu Ba Komunidade" },
  { img: { u: "photo-1517486808906-6ca8b3f04846", seed: "g6" }, kategoria: "Eventu", titulu: "Enkontru Estudante" },
  { img: { u: "photo-1519389950473-47ba0277781c", seed: "g7" }, kategoria: "Estudante", titulu: "Estudante Hamutuk" },
  { img: { u: "photo-1531403009284-440f080d1e12", seed: "g8" }, kategoria: "Eventu", titulu: "Apresentasaun Projetu" },
  { img: { u: "photo-1504328345606-18bbc8c9d7d1", seed: "g9" }, kategoria: "Atividade", titulu: "Vizita Instalasaun Industriál" },
  { img: { u: "photo-1541888946425-d81bb19240f5", seed: "g10" }, kategoria: "Projetu Engenharia", titulu: "Konstrusaun — Projetu Site" },
  { img: { u: "photo-1498050108023-c5249f4df085", seed: "g11" }, kategoria: "Workshop", titulu: "Lab Programasaun Web" },
  { img: { u: "photo-1464822759023-fed622ff2c3b", seed: "g12" }, kategoria: "Estudante", titulu: "Estudu Kampu Geologia" },
  { img: { u: "photo-1466611653911-95081537e5b7", seed: "g13" }, kategoria: "Atividade", titulu: "Energia Renovable" },
  { img: { u: "photo-1552664730-d307ca884978", seed: "g14" }, kategoria: "Formasaun", titulu: "Sessaun Treinamentu" },
  { img: { u: "photo-1523240795612-9a054b0db644", seed: "g15" }, kategoria: "Estudante", titulu: "Grupu Estudu" },
  { img: { u: "photo-1511578314322-379afb476865", seed: "g16" }, kategoria: "Eventu", titulu: "Eventu Akademiku" },
  { img: { u: "photo-1581091226825-a6a2a5aee158", seed: "g17" }, kategoria: "Workshop", titulu: "Formasaun CAD" },
  { img: { u: "photo-1529156069898-49953e39b3ac", seed: "g18" }, kategoria: "Servisu Komunidade", titulu: "Voluntáriu Komunidade" }
];

/* ---------- Timeline ---------- */
const TIMELINE = [
  { tinan: "2023", titulu: "Inísiu Engenharia 2023", textu: "Fundasaun oficial ENGENHARIA 2023 ho 45 estudante pioneer — visiun klaru: harii inovasaun, harii futuru." },
  { tinan: "2024", titulu: "Atividade Akademika", textu: "Primeiru semináriu, workshop no enkontru estudante — base edukasaun no kooperasaun hatama." },
  { tinan: "2025", titulu: "Workshop no Atividade Komunidade", textu: "Expansion: kompetisaun robotika, servisu komunidade no parceria industria — impactu real ba sokidade." },
  { tinan: "2026", titulu: "Inovasaun no Kolaborasaun", textu: "Projetu inovasaun, kolaborasaun internasional no dezenvolvimentu sustentável — futuru ne'ebé harii hamutuk." }
];
