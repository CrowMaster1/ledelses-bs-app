const QUOTES = [
  // ── NÆRLEDELSE ──────────────────────────────────────────────────────────
  {
    id: 1,
    text: "Nærledelse handler ikke om fysisk nærhed — det handler om ledelsesmæssig tilstedeværelse i de øjeblikke, der tæller.",
    author: "Lederweb, 2024",
    style: "Nærledelse",
    theme: "Kerneopgaven"
  },
  {
    id: 2,
    text: "Man kan ikke lede på afstand det, som kræver nærhed.",
    author: "Regionernes Ledelsesakademi",
    style: "Nærledelse",
    theme: "Kerneopgaven"
  },
  {
    id: 3,
    text: "Nærledelse er ikke en ledelsesstil. Det er et ledelsesansvar.",
    author: "DSS Konference, 2023",
    style: "Nærledelse",
    theme: "Kerneopgaven"
  },
  {
    id: 4,
    text: "Den gode leder er til stede — ikke bare fysisk, men mentalt og fagligt.",
    author: "Dansk Sygeplejeråd, 2024",
    style: "Nærledelse",
    theme: "Psykologisk tryghed"
  },
  {
    id: 5,
    text: "Nærledelse kræver mod til at se det, man er tæt på.",
    author: "Executive Coach, Region H",
    style: "Nærledelse",
    theme: "Forandringsledelse"
  },
  {
    id: 6,
    text: "Det er i nærheden, at tillid opstår. Det er i nærheden, at ledelse sker.",
    author: "Nordisk Ledelsesforum, 2024",
    style: "Nærledelse",
    theme: "Psykologisk tryghed"
  },
  {
    id: 7,
    text: "Du kan ikke facilitere psykologisk tryghed fra en lederetage.",
    author: "Lederudviklingsprogram, Region Midt",
    style: "Nærledelse",
    theme: "Psykologisk tryghed"
  },
  {
    id: 8,
    text: "Nærledelse er svaret på mange af de udfordringer, vi ser i rekruttering og fastholdelse.",
    author: "Regionernes Ledelsesakademi",
    style: "Nærledelse",
    theme: "Rekruttering"
  },
  {
    id: 9,
    text: "Det nære sundhedsvæsen starter med nær ledelse.",
    author: "Sundhedsreformen, 2025",
    style: "Nærledelse",
    theme: "Vision"
  },
  {
    id: 10,
    text: "En leder, der ikke er til stede, er ikke en leder — de er en titel.",
    author: "LinkedIn Top Voice, 2024",
    style: "Nærledelse",
    theme: "Kerneopgaven"
  },
  {
    id: 11,
    text: "Nærledelse er ikke hvad du gør en gang om måneden. Det er hvad du er hver dag.",
    author: "Sygeplejersken, 2023",
    style: "Nærledelse",
    theme: "Psykologisk tryghed"
  },
  {
    id: 12,
    text: "Ledelsesspændet må aldrig blive så stort, at lederen mister kontakten til kerneopgaven.",
    author: "DSS, 2024",
    style: "Nærledelse",
    theme: "Kerneopgaven"
  },

  // ── TRANSFORMATIONEL ────────────────────────────────────────────────────
  {
    id: 13,
    text: "Vi har en once in a lifetime-mulighed for at transformere sundhedsvæsenet. Den må vi ikke forpasse.",
    author: "Sundhedsreformen, 2025",
    style: "Transformationel",
    theme: "Vision"
  },
  {
    id: 14,
    text: "Transformation er ikke et projekt. Transformation er en tilstand.",
    author: "McKinsey Health, 2023",
    style: "Transformationel",
    theme: "Forandringsledelse"
  },
  {
    id: 15,
    text: "Vi skal tænke radikalt nyt — ikke fordi vi kan, men fordi vi er nødt til det.",
    author: "DSS, 2025",
    style: "Transformationel",
    theme: "Forandringsledelse"
  },
  {
    id: 16,
    text: "Den transformationelle leder ser ikke barrierer — de ser uudnyttede muligheder for systemforandring.",
    author: "Nordisk Sundhedsledelse",
    style: "Transformationel",
    theme: "Vision"
  },
  {
    id: 17,
    text: "Vi er i gang med den største reform i 20 år. Det kræver ledere, der kan lede i forandring.",
    author: "Region Sjælland, 2025",
    style: "Transformationel",
    theme: "Forandringsledelse"
  },
  {
    id: 18,
    text: "Forandring sker ikke ved at vente. Forandring sker ved at lede.",
    author: "Dansk Ledelsesakademi",
    style: "Transformationel",
    theme: "Forandringsledelse"
  },
  {
    id: 19,
    text: "Go do it.",
    author: "DSS — Sundhedsvæsenets nye æra, 2025",
    style: "Transformationel",
    theme: "Vision"
  },
  {
    id: 20,
    text: "Transformationsledelse handler om at skabe mening i det, der endnu ikke giver mening.",
    author: "Lederudvikling, Region Nord",
    style: "Transformationel",
    theme: "Vision"
  },
  {
    id: 21,
    text: "Vi kan ikke løse fremtidens problemer med fortidens løsninger.",
    author: "Sundhedspolitisk Tidsskrift, 2024",
    style: "Transformationel",
    theme: "Vision"
  },
  {
    id: 22,
    text: "Den store forskel opstår ikke i strategidokumenterne — den opstår i hverdagens beslutninger.",
    author: "Executive Coach, DSS",
    style: "Transformationel",
    theme: "Forandringsledelse"
  },
  {
    id: 23,
    text: "Transformation kræver tolerance for det ufærdige.",
    author: "Lederforeningen DSR, 2024",
    style: "Transformationel",
    theme: "Forandringsledelse"
  },
  {
    id: 24,
    text: "Vi skal ikke optimere det eksisterende. Vi skal genopfinde det nødvendige.",
    author: "Nordisk Sundhedsinstitut",
    style: "Transformationel",
    theme: "Vision"
  },

  // ── STRATEGISK ──────────────────────────────────────────────────────────
  {
    id: 25,
    text: "En strategi uden implementering er en drøm. Implementering uden strategi er et mareridt.",
    author: "Regionernes Ledelsesakademi",
    style: "Strategisk",
    theme: "Vision"
  },
  {
    id: 26,
    text: "Strategisk ledelse i sundhedsvæsenet kræver evnen til at sætte det lange lys på, mens man navigerer i mørket.",
    author: "DSS Konference, 2024",
    style: "Strategisk",
    theme: "Vision"
  },
  {
    id: 27,
    text: "Det er ikke ressourcemanglen, der er vores største udfordring. Det er prioriteringsmanglen.",
    author: "Region Hovedstaden, 2024",
    style: "Strategisk",
    theme: "Ressourcer"
  },
  {
    id: 28,
    text: "God strategi er ikke at vide, hvad man vil. Det er at vide, hvad man ikke gør.",
    author: "Lederweb",
    style: "Strategisk",
    theme: "Vision"
  },
  {
    id: 29,
    text: "Strategisk handlerum opstår ikke — det skabes.",
    author: "Nordisk Ledelsesforum",
    style: "Strategisk",
    theme: "Vision"
  },
  {
    id: 30,
    text: "Vi skal møde hinanden på tværs af de eksisterende sektorgrænser. Alternativet er at møde problemet alene.",
    author: "Sundhedsreformen, 2025",
    style: "Strategisk",
    theme: "Tværfaglighed"
  },
  {
    id: 31,
    text: "Det strategiske lederskab handler om at skabe klarhed i kompleksitet.",
    author: "DSS, 2024",
    style: "Strategisk",
    theme: "Vision"
  },
  {
    id: 32,
    text: "En leder uden strategi er en administrator. En administrator med strategi er en leder.",
    author: "Lederudviklingsprogram",
    style: "Strategisk",
    theme: "Vision"
  },
  {
    id: 33,
    text: "Ressourcerne er altid knappe. Valget er, om du er strategisk i din knaphed.",
    author: "Sundhedspolitisk Tidsskrift",
    style: "Strategisk",
    theme: "Ressourcer"
  },
  {
    id: 34,
    text: "Strategisk ledelse starter med at erkende, hvad du ikke ved.",
    author: "Nordisk Sundhedsledelse",
    style: "Strategisk",
    theme: "Vision"
  },

  // ── TVÆRSEKTORIEL ───────────────────────────────────────────────────────
  {
    id: 35,
    text: "Silotænkning fører til siloløsninger. Og siloløsninger fører til silopatienter.",
    author: "DSS, 2023",
    style: "Tværsektoriel",
    theme: "Tværfaglighed"
  },
  {
    id: 36,
    text: "Det sammenhængende patientforløb starter med det sammenhængende lederforløb.",
    author: "Regionernes Ledelsesakademi",
    style: "Tværsektoriel",
    theme: "Tværfaglighed"
  },
  {
    id: 37,
    text: "Tværsektoriel ledelse er ikke et organisationsdiagram. Det er en ledelsesambition.",
    author: "Lederweb, 2024",
    style: "Tværsektoriel",
    theme: "Tværfaglighed"
  },
  {
    id: 38,
    text: "Vi kan ikke skabe sammenhæng i patientforløbene, så længe vi leder i siloer.",
    author: "Sundhedsreformen, 2025",
    style: "Tværsektoriel",
    theme: "Tværfaglighed"
  },
  {
    id: 39,
    text: "Den gode tværsektorielle leder er nysgerrig på andres fagprofessioner.",
    author: "DSS Konference, 2024",
    style: "Tværsektoriel",
    theme: "Tværfaglighed"
  },
  {
    id: 40,
    text: "Grænsen mellem sektorer er administrativ. Patientens behov er det ikke.",
    author: "Nordisk Sundhedsledelse",
    style: "Tværsektoriel",
    theme: "Kvalitet & Patientsikkerhed"
  },
  {
    id: 41,
    text: "Tværfaglig videndeling er ikke en aktivitet — det er en ledelsesstrategi.",
    author: "Region Midtjylland",
    style: "Tværsektoriel",
    theme: "Tværfaglighed"
  },
  {
    id: 42,
    text: "Det nære sundhedsvæsen forudsætter nære ledelsesrelationer på tværs.",
    author: "Sundhedsstyrelsen, 2025",
    style: "Tværsektoriel",
    theme: "Tværfaglighed"
  },
  {
    id: 43,
    text: "Sammenhæng i forløbet kræver sammenhæng i ledelsen.",
    author: "LinkedIn Top Voice, 2024",
    style: "Tværsektoriel",
    theme: "Tværfaglighed"
  },
  {
    id: 44,
    text: "Man kan ikke koordinere det, man ikke forstår. Tværsektoriel forståelse er en ledelseskompetence.",
    author: "DSS",
    style: "Tværsektoriel",
    theme: "Tværfaglighed"
  },

  // ── TILLIDSBASERET ──────────────────────────────────────────────────────
  {
    id: 45,
    text: "Tillidsbaseret ledelse er ikke et alternativ til styring — det er forudsætningen for effektiv styring.",
    author: "Region Nordjylland, 2024",
    style: "Tillidsbaseret",
    theme: "Psykologisk tryghed"
  },
  {
    id: 46,
    text: "Kontrol er dyrt. Tillid er en investering.",
    author: "Lederweb, 2023",
    style: "Tillidsbaseret",
    theme: "Psykologisk tryghed"
  },
  {
    id: 47,
    text: "En leder, der ikke stoler på sine medarbejdere, stiller sig selv ikke tilstrækkeligt spørgsmål.",
    author: "Executive Coach",
    style: "Tillidsbaseret",
    theme: "Psykologisk tryghed"
  },
  {
    id: 48,
    text: "Psykologisk tryghed er ikke et mål — det er forudsætningen for at nå vores mål.",
    author: "Lederudviklingsprogram, Region Midt",
    style: "Tillidsbaseret",
    theme: "Psykologisk tryghed"
  },
  {
    id: 49,
    text: "Du kan ikke skabe psykologisk tryghed med en PowerPoint-præsentation.",
    author: "DSS, 2024",
    style: "Tillidsbaseret",
    theme: "Psykologisk tryghed"
  },
  {
    id: 50,
    text: "Tillid tager år at opbygge og sekunder at ødelægge. Investér derefter.",
    author: "Nordisk Ledelsesforum",
    style: "Tillidsbaseret",
    theme: "Psykologisk tryghed"
  },
  {
    id: 51,
    text: "Den leder, der ikke kan fejle, lærer heller ikke.",
    author: "Lederforeningen DSR",
    style: "Tillidsbaseret",
    theme: "Psykologisk tryghed"
  },
  {
    id: 52,
    text: "Psykologisk tryghed måles ikke i trivselsmålinger — den mærkes i ganghuset.",
    author: "Region Sjælland",
    style: "Tillidsbaseret",
    theme: "Psykologisk tryghed"
  },
  {
    id: 53,
    text: "Tillid er ikke en følelse. Tillid er en ledelsesbeslutning.",
    author: "Nordisk Sundhedsledelse, 2024",
    style: "Tillidsbaseret",
    theme: "Psykologisk tryghed"
  },
  {
    id: 54,
    text: "En organisation med høj psykologisk tryghed er en organisation, der tør se sandheden i øjnene.",
    author: "DSS Konference",
    style: "Tillidsbaseret",
    theme: "Psykologisk tryghed"
  },

  // ── FAGLIG ──────────────────────────────────────────────────────────────
  {
    id: 55,
    text: "Faglig ledelse er at holde blikket på kerneopgaven, mens alt andet bevæger sig.",
    author: "Lederweb, 2024",
    style: "Faglig",
    theme: "Kerneopgaven"
  },
  {
    id: 56,
    text: "Faglig stolthed er et aktiv — men kun hvis den er åben og ikke defensiv.",
    author: "DSS, 2023",
    style: "Faglig",
    theme: "Kerneopgaven"
  },
  {
    id: 57,
    text: "Den bedste faglige leder er ikke den, der ved mest — det er den, der stiller de bedste spørgsmål.",
    author: "Lederudviklingsprogram",
    style: "Faglig",
    theme: "Kerneopgaven"
  },
  {
    id: 58,
    text: "Kerneopgaven er ikke en opgave. Kerneopgaven er en tilstand.",
    author: "Executive Coach, 2023",
    style: "Faglig",
    theme: "Kerneopgaven"
  },
  {
    id: 59,
    text: "Når vi taber kerneopgaven af syne, taber vi os selv.",
    author: "Sygeplejersken, 2024",
    style: "Faglig",
    theme: "Kerneopgaven"
  },
  {
    id: 60,
    text: "Patientsikkerhed starter ikke i hændelsesregistreringen — den starter i ledelseskulturen.",
    author: "Region Hovedstaden",
    style: "Faglig",
    theme: "Kvalitet & Patientsikkerhed"
  },
  {
    id: 61,
    text: "Kvalitet er ikke en afdeling. Kvalitet er et ledelsesansvar.",
    author: "DSS Konference, 2024",
    style: "Faglig",
    theme: "Kvalitet & Patientsikkerhed"
  },
  {
    id: 62,
    text: "Den faglige leder er brobygger mellem fag og organisation.",
    author: "Nordisk Sundhedsledelse",
    style: "Faglig",
    theme: "Kerneopgaven"
  },
  {
    id: 63,
    text: "Faglig ledelse uden menneskelig ledelse er teknik. Menneskelig ledelse uden faglig ledelse er velvilje.",
    author: "Lederweb",
    style: "Faglig",
    theme: "Kerneopgaven"
  },
  {
    id: 64,
    text: "Vi leder ikke steder. Vi leder mennesker, der passer på andre mennesker.",
    author: "DSS, 2024",
    style: "Faglig",
    theme: "Kerneopgaven"
  },

  // ── POLITISK ────────────────────────────────────────────────────────────
  {
    id: 65,
    text: "Politisk ledelse i sundhedsvæsenet kræver evnen til at oversætte borgerperspektivet til organisatorisk handling.",
    author: "Indenrigs- og Sundhedsministeriet, 2024",
    style: "Politisk",
    theme: "Vision"
  },
  {
    id: 66,
    text: "En leder, der ikke forstår den politiske kontekst, leder blindt.",
    author: "Regionernes Formandskab",
    style: "Politisk",
    theme: "Vision"
  },
  {
    id: 67,
    text: "Der skal være plads til både styring og ledelse i sundhedsvæsenet.",
    author: "DSS, 2024",
    style: "Politisk",
    theme: "Ressourcer"
  },
  {
    id: 68,
    text: "Sundhedspolitik er ledelsespolitik. Og ledelsespolitik er sundhedspolitik.",
    author: "Nordisk Sundhedsledelse",
    style: "Politisk",
    theme: "Vision"
  },
  {
    id: 69,
    text: "Den politiske leder navigerer i et terræn, hvor alle har en mening om det, de fleste ikke forstår.",
    author: "Executive Coach",
    style: "Politisk",
    theme: "Vision"
  },
  {
    id: 70,
    text: "At lede i det politisk styrede system kræver kompas, ikke kun kortlæsning.",
    author: "Region Midtjylland, 2024",
    style: "Politisk",
    theme: "Forandringsledelse"
  },
  {
    id: 71,
    text: "Politisk ledelse er ikke at følge vinden — det er at forstå, hvorfra den blæser.",
    author: "DSS Konference",
    style: "Politisk",
    theme: "Vision"
  },
  {
    id: 72,
    text: "Legitimitet skabes ikke i boardrooms. Den skabes i mødet med borgerne og medarbejderne.",
    author: "Sundhedspolitisk Tidsskrift",
    style: "Politisk",
    theme: "Vision"
  },

  // ── HYBRID ──────────────────────────────────────────────────────────────
  {
    id: 73,
    text: "Hybrid ledelse handler om at vælge den rette ledelsesstil til den rette situation — ikke om at vælge én stil.",
    author: "Lederudviklingsprogram, 2024",
    style: "Hybrid",
    theme: "Forandringsledelse"
  },
  {
    id: 74,
    text: "Den hybride leder er komfortabel med kompleksitet — og bruger den til at skabe klarhed.",
    author: "Nordisk Ledelsesforum",
    style: "Hybrid",
    theme: "Forandringsledelse"
  },
  {
    id: 75,
    text: "Vi er nødt til at lede på tværs af logikker — faglighed, økonomi, politik og menneskighed.",
    author: "DSS, 2024",
    style: "Hybrid",
    theme: "Tværfaglighed"
  },
  {
    id: 76,
    text: "En leder i det moderne sundhedsvæsen er på én gang faglig, administrativ, politisk og menneskelig.",
    author: "Regionernes Ledelsesakademi",
    style: "Hybrid",
    theme: "Kerneopgaven"
  },
  {
    id: 77,
    text: "Ledelsesspændet i sundhedsvæsenet er for stort. Ikke til at lede — men til at lede godt.",
    author: "Lederweb, 2025",
    style: "Hybrid",
    theme: "Rekruttering"
  },
  {
    id: 78,
    text: "Fremtidens sundhedsvæsen kræver ledere, der kan rumme modsætninger uden at forenkle dem.",
    author: "Nordisk Sundhedsinstitut",
    style: "Hybrid",
    theme: "Vision"
  },
  {
    id: 79,
    text: "Hybrid ledelse er ikke et kompromis. Det er en kompetence.",
    author: "DSS Konference, 2024",
    style: "Hybrid",
    theme: "Forandringsledelse"
  },
  {
    id: 80,
    text: "Vi rekrutterer til gårsdagens stillinger med morgendagens krav. Det er vores største ledelsesudfordring.",
    author: "Region Hovedstaden, 2024",
    style: "Hybrid",
    theme: "Rekruttering"
  }
];

const STYLES = [...new Set(QUOTES.map(q => q.style))];
const THEMES = [...new Set(QUOTES.map(q => q.theme))];
