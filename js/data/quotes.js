const QUOTES = [

  // ══════════════════════════════════════════════════════
  // NÆRLEDELSE × KERNEOPGAVEN
  // ══════════════════════════════════════════════════════
  {
    id: 1,
    text: "Nærledelse handler ikke om fysisk nærhed — det handler om ledelsesmæssig tilstedeværelse i de øjeblikke, der tæller.",
    author: "Lederweb, 2024",
    style: "Nærledelse",
    theme: "Kerneopgaven"
  },
  {
    id: 2,
    text: "Ledelsesspændet må aldrig blive så stort, at lederen mister kontakten til kerneopgaven.",
    author: "DSS, 2024",
    style: "Nærledelse",
    theme: "Kerneopgaven"
  },
  {
    id: 3,
    text: "Det nære sundhedsvæsen starter med nær ledelse.",
    author: "Sundhedsreformen, 2025",
    style: "Nærledelse",
    theme: "Kerneopgaven"
  },
  {
    id: 4,
    text: "En leder, der ikke er til stede, er ikke en leder — de er en titel.",
    author: "LinkedIn Top Voice, 2024",
    style: "Nærledelse",
    theme: "Kerneopgaven"
  },
  {
    id: 5,
    text: "Man kan ikke lede på afstand det, som kræver nærhed.",
    author: "Regionernes Ledelsesakademi",
    style: "Nærledelse",
    theme: "Kerneopgaven"
  },

  // ══════════════════════════════════════════════════════
  // NÆRLEDELSE × PSYKOLOGISK TRYGHED
  // ══════════════════════════════════════════════════════
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
    text: "Den gode leder er til stede — ikke bare fysisk, men mentalt og fagligt.",
    author: "Dansk Sygeplejeråd, 2024",
    style: "Nærledelse",
    theme: "Psykologisk tryghed"
  },
  {
    id: 9,
    text: "Nærledelse er ikke hvad du gør en gang om måneden. Det er hvad du er hver dag.",
    author: "Sygeplejersken, 2023",
    style: "Nærledelse",
    theme: "Psykologisk tryghed"
  },
  {
    id: 10,
    text: "Psykologisk tryghed skabes ikke i politikker. Den skabes i gangene.",
    author: "Region Nordjylland, 2024",
    style: "Nærledelse",
    theme: "Psykologisk tryghed"
  },

  // ══════════════════════════════════════════════════════
  // NÆRLEDELSE × FORANDRINGSLEDELSE
  // ══════════════════════════════════════════════════════
  {
    id: 11,
    text: "Nærledelse kræver mod til at se det, man er tæt på.",
    author: "Executive Coach, Region H",
    style: "Nærledelse",
    theme: "Forandringsledelse"
  },
  {
    id: 12,
    text: "Forandring, der ikke er forankret i nærhed, er forandring uden tyngde.",
    author: "DSS Konference, 2024",
    style: "Nærledelse",
    theme: "Forandringsledelse"
  },
  {
    id: 13,
    text: "Den leder, der er tættest på problemet, er oftest tættest på løsningen.",
    author: "Lederweb, 2023",
    style: "Nærledelse",
    theme: "Forandringsledelse"
  },
  {
    id: 14,
    text: "Nærledelse er ikke en buffer mod forandring. Det er forudsætningen for den.",
    author: "Nordisk Sundhedsledelse",
    style: "Nærledelse",
    theme: "Forandringsledelse"
  },
  {
    id: 15,
    text: "Nærledelse er svaret på mange af de udfordringer, vi ser i forandringsparathed og fastholdelse.",
    author: "Regionernes Ledelsesakademi",
    style: "Nærledelse",
    theme: "Forandringsledelse"
  },

  // ══════════════════════════════════════════════════════
  // NÆRLEDELSE × VISION
  // ══════════════════════════════════════════════════════
  {
    id: 16,
    text: "Nærledelse er ikke en ledelsesstil. Det er et ledelsesansvar.",
    author: "DSS Konference, 2023",
    style: "Nærledelse",
    theme: "Vision"
  },
  {
    id: 17,
    text: "Visionen forankres ikke i præsentationer — den forankres i hverdagens ledelse.",
    author: "LinkedIn Top Voice, 2024",
    style: "Nærledelse",
    theme: "Vision"
  },
  {
    id: 18,
    text: "En leder uden nærhed til sine medarbejdere er en leder uden jordforbindelse til sin vision.",
    author: "Lederudviklingsprogram, Region Nord",
    style: "Nærledelse",
    theme: "Vision"
  },
  {
    id: 19,
    text: "Det nære sundhedsvæsen er ikke en struktur. Det er en ledelsesfilosofi.",
    author: "Sundhedsreformen, 2025",
    style: "Nærledelse",
    theme: "Vision"
  },
  {
    id: 20,
    text: "Når vision og dagligdag mødes i lederen, sker der noget.",
    author: "DSS, 2024",
    style: "Nærledelse",
    theme: "Vision"
  },

  // ══════════════════════════════════════════════════════
  // TRANSFORMATIONEL × KERNEOPGAVEN
  // ══════════════════════════════════════════════════════
  {
    id: 21,
    text: "Vi leder ikke steder. Vi leder mennesker, der passer på andre mennesker.",
    author: "DSS, 2024",
    style: "Transformationel",
    theme: "Kerneopgaven"
  },
  {
    id: 22,
    text: "Transformation, der glemmer kerneopgaven, er disruption af det, der virker.",
    author: "Nordisk Ledelsesforum",
    style: "Transformationel",
    theme: "Kerneopgaven"
  },
  {
    id: 23,
    text: "Den transformationelle leder holder to ting i hånden på én gang: fremtiden og patientens behov.",
    author: "DSS Konference, 2024",
    style: "Transformationel",
    theme: "Kerneopgaven"
  },
  {
    id: 24,
    text: "Vi transformerer for patienten. Ikke for organisationsdiagrammet.",
    author: "Sundhedsreformen, 2025",
    style: "Transformationel",
    theme: "Kerneopgaven"
  },
  {
    id: 25,
    text: "Kerneopgaven er ikke et hinder for transformation. Det er dens formål.",
    author: "Executive Coach",
    style: "Transformationel",
    theme: "Kerneopgaven"
  },

  // ══════════════════════════════════════════════════════
  // TRANSFORMATIONEL × PSYKOLOGISK TRYGHED
  // ══════════════════════════════════════════════════════
  {
    id: 26,
    text: "Transformation kræver tolerance for det ufærdige.",
    author: "Lederforeningen DSR, 2024",
    style: "Transformationel",
    theme: "Psykologisk tryghed"
  },
  {
    id: 27,
    text: "Du kan ikke transformere en organisation, hvis medarbejderne ikke tør sige sandheden.",
    author: "DSS, 2024",
    style: "Transformationel",
    theme: "Psykologisk tryghed"
  },
  {
    id: 28,
    text: "Psykologisk tryghed er ikke en forudsætning for stabilitet. Det er en forudsætning for bevægelse.",
    author: "Lederudviklingsprogram",
    style: "Transformationel",
    theme: "Psykologisk tryghed"
  },
  {
    id: 29,
    text: "Den leder, der skaber tryghed under forandring, skaber mulighed for ægte transformation.",
    author: "Nordisk Sundhedsledelse",
    style: "Transformationel",
    theme: "Psykologisk tryghed"
  },
  {
    id: 30,
    text: "Forandring er lettest for dem, der føler sig tryggest.",
    author: "LinkedIn Top Voice, 2025",
    style: "Transformationel",
    theme: "Psykologisk tryghed"
  },

  // ══════════════════════════════════════════════════════
  // TRANSFORMATIONEL × FORANDRINGSLEDELSE
  // ══════════════════════════════════════════════════════
  {
    id: 31,
    text: "Vi har en once in a lifetime-mulighed for at transformere sundhedsvæsenet. Den må vi ikke forpasse.",
    author: "Sundhedsreformen, 2025",
    style: "Transformationel",
    theme: "Forandringsledelse"
  },
  {
    id: 32,
    text: "Transformation er ikke et projekt. Transformation er en tilstand.",
    author: "McKinsey Health, 2023",
    style: "Transformationel",
    theme: "Forandringsledelse"
  },
  {
    id: 33,
    text: "Vi skal tænke radikalt nyt — ikke fordi vi kan, men fordi vi er nødt til det.",
    author: "DSS, 2025",
    style: "Transformationel",
    theme: "Forandringsledelse"
  },
  {
    id: 34,
    text: "Go do it.",
    author: "DSS — Sundhedsvæsenets nye æra, 2025",
    style: "Transformationel",
    theme: "Forandringsledelse"
  },
  {
    id: 35,
    text: "Forandring sker ikke ved at vente. Forandring sker ved at lede.",
    author: "Dansk Ledelsesakademi",
    style: "Transformationel",
    theme: "Forandringsledelse"
  },

  // ══════════════════════════════════════════════════════
  // TRANSFORMATIONEL × VISION
  // ══════════════════════════════════════════════════════
  {
    id: 36,
    text: "Vi er i gang med den største reform i 20 år. Det kræver ledere, der kan lede i forandring.",
    author: "Region Sjælland, 2025",
    style: "Transformationel",
    theme: "Vision"
  },
  {
    id: 37,
    text: "Den transformationelle leder ser ikke barrierer — de ser uudnyttede muligheder for systemforandring.",
    author: "Nordisk Sundhedsledelse",
    style: "Transformationel",
    theme: "Vision"
  },
  {
    id: 38,
    text: "Vi kan ikke løse fremtidens problemer med fortidens løsninger.",
    author: "Sundhedspolitisk Tidsskrift, 2024",
    style: "Transformationel",
    theme: "Vision"
  },
  {
    id: 39,
    text: "Vi skal ikke optimere det eksisterende. Vi skal genopfinde det nødvendige.",
    author: "Nordisk Sundhedsinstitut",
    style: "Transformationel",
    theme: "Vision"
  },
  {
    id: 40,
    text: "Visionen er ikke et mål på en slide. Det er en retning, lederen legemliggør.",
    author: "DSS Konference, 2024",
    style: "Transformationel",
    theme: "Vision"
  },

  // ══════════════════════════════════════════════════════
  // STRATEGISK × KERNEOPGAVEN
  // ══════════════════════════════════════════════════════
  {
    id: 41,
    text: "Faglig ledelse er at holde blikket på kerneopgaven, mens alt andet bevæger sig.",
    author: "Lederweb, 2024",
    style: "Strategisk",
    theme: "Kerneopgaven"
  },
  {
    id: 42,
    text: "Kerneopgaven er ikke en opgave. Kerneopgaven er en tilstand.",
    author: "Executive Coach, 2023",
    style: "Strategisk",
    theme: "Kerneopgaven"
  },
  {
    id: 43,
    text: "Strategisk ledelse starter og slutter ved det, vi er her for.",
    author: "Regionernes Ledelsesakademi",
    style: "Strategisk",
    theme: "Kerneopgaven"
  },
  {
    id: 44,
    text: "Prioritering er kærlighedens hårdeste form — at sige fra for at sige til.",
    author: "DSS, 2024",
    style: "Strategisk",
    theme: "Kerneopgaven"
  },
  {
    id: 45,
    text: "En strategi, der ikke beskytter kerneopgaven, er ikke en strategi for sundhedsvæsenet.",
    author: "Nordisk Sundhedsledelse",
    style: "Strategisk",
    theme: "Kerneopgaven"
  },

  // ══════════════════════════════════════════════════════
  // STRATEGISK × PSYKOLOGISK TRYGHED
  // ══════════════════════════════════════════════════════
  {
    id: 46,
    text: "Strategisk ledelse kræver medarbejdere, der tør tale op. Det kræver psykologisk tryghed.",
    author: "DSS Konference, 2024",
    style: "Strategisk",
    theme: "Psykologisk tryghed"
  },
  {
    id: 47,
    text: "En organisation uden psykologisk tryghed er en organisation, der leder strategisk i blinde.",
    author: "Lederudviklingsprogram",
    style: "Strategisk",
    theme: "Psykologisk tryghed"
  },
  {
    id: 48,
    text: "Strategiens svaghed opdages ikke i analyserne. Den opdages af den medarbejder, der ikke tør sige det.",
    author: "Lederweb",
    style: "Strategisk",
    theme: "Psykologisk tryghed"
  },
  {
    id: 49,
    text: "Tillid er den mest undervurderede strategiske ressource i sundhedsvæsenet.",
    author: "LinkedIn Top Voice, 2024",
    style: "Strategisk",
    theme: "Psykologisk tryghed"
  },
  {
    id: 50,
    text: "Psykologisk tryghed er ikke blødt. Det er det hårdeste strategiske arbejde, en leder kan gøre.",
    author: "Nordisk Ledelsesforum",
    style: "Strategisk",
    theme: "Psykologisk tryghed"
  },

  // ══════════════════════════════════════════════════════
  // STRATEGISK × FORANDRINGSLEDELSE
  // ══════════════════════════════════════════════════════
  {
    id: 51,
    text: "En strategi uden implementering er en drøm. Implementering uden strategi er et mareridt.",
    author: "Regionernes Ledelsesakademi",
    style: "Strategisk",
    theme: "Forandringsledelse"
  },
  {
    id: 52,
    text: "Det er ikke ressourcemanglen, der er vores største udfordring. Det er prioriteringsmanglen.",
    author: "Region Hovedstaden, 2024",
    style: "Strategisk",
    theme: "Forandringsledelse"
  },
  {
    id: 53,
    text: "God strategi er ikke at vide, hvad man vil. Det er at vide, hvad man ikke gør.",
    author: "Lederweb",
    style: "Strategisk",
    theme: "Forandringsledelse"
  },
  {
    id: 54,
    text: "Strategisk handlerum opstår ikke — det skabes.",
    author: "Nordisk Ledelsesforum",
    style: "Strategisk",
    theme: "Forandringsledelse"
  },
  {
    id: 55,
    text: "Forandringsmodstand er ikke irrationel. Det er uinformeret.",
    author: "DSS, 2024",
    style: "Strategisk",
    theme: "Forandringsledelse"
  },

  // ══════════════════════════════════════════════════════
  // STRATEGISK × VISION
  // ══════════════════════════════════════════════════════
  {
    id: 56,
    text: "Strategisk ledelse i sundhedsvæsenet kræver evnen til at sætte det lange lys på, mens man navigerer i mørket.",
    author: "DSS Konference, 2024",
    style: "Strategisk",
    theme: "Vision"
  },
  {
    id: 57,
    text: "Det strategiske lederskab handler om at skabe klarhed i kompleksitet.",
    author: "DSS, 2024",
    style: "Strategisk",
    theme: "Vision"
  },
  {
    id: 58,
    text: "En leder uden strategi er en administrator. En administrator med strategi er en leder.",
    author: "Lederudviklingsprogram",
    style: "Strategisk",
    theme: "Vision"
  },
  {
    id: 59,
    text: "Ressourcerne er altid knappe. Valget er, om du er strategisk i din knaphed.",
    author: "Sundhedspolitisk Tidsskrift",
    style: "Strategisk",
    theme: "Vision"
  },
  {
    id: 60,
    text: "Visionen er lederens vigtigste arbejdsredskab — og det mest misbrugte.",
    author: "Nordisk Sundhedsinstitut",
    style: "Strategisk",
    theme: "Vision"
  },

  // ══════════════════════════════════════════════════════
  // TILLIDSBASERET × KERNEOPGAVEN
  // ══════════════════════════════════════════════════════
  {
    id: 61,
    text: "Patientsikkerhed starter ikke i hændelsesregistreringen — den starter i ledelseskulturen.",
    author: "Region Hovedstaden",
    style: "Tillidsbaseret",
    theme: "Kerneopgaven"
  },
  {
    id: 62,
    text: "Kvalitet er ikke en afdeling. Kvalitet er et ledelsesansvar.",
    author: "DSS Konference, 2024",
    style: "Tillidsbaseret",
    theme: "Kerneopgaven"
  },
  {
    id: 63,
    text: "Tillidsbaseret ledelse er ikke en modsætning til høj faglig standard. Det er forudsætningen.",
    author: "Lederweb, 2024",
    style: "Tillidsbaseret",
    theme: "Kerneopgaven"
  },
  {
    id: 64,
    text: "Den kultur, lederen skaber, er den kultur, patienten møder.",
    author: "Nordisk Sundhedsledelse",
    style: "Tillidsbaseret",
    theme: "Kerneopgaven"
  },
  {
    id: 65,
    text: "Kerneopgaven udføres bedst af folk, der har tillid til dem, de arbejder med.",
    author: "DSS, 2024",
    style: "Tillidsbaseret",
    theme: "Kerneopgaven"
  },

  // ══════════════════════════════════════════════════════
  // TILLIDSBASERET × PSYKOLOGISK TRYGHED
  // ══════════════════════════════════════════════════════
  {
    id: 66,
    text: "Tillidsbaseret ledelse er ikke et alternativ til styring — det er forudsætningen for effektiv styring.",
    author: "Region Nordjylland, 2024",
    style: "Tillidsbaseret",
    theme: "Psykologisk tryghed"
  },
  {
    id: 67,
    text: "Kontrol er dyrt. Tillid er en investering.",
    author: "Lederweb, 2023",
    style: "Tillidsbaseret",
    theme: "Psykologisk tryghed"
  },
  {
    id: 68,
    text: "Psykologisk tryghed er ikke et mål — det er forudsætningen for at nå vores mål.",
    author: "Lederudviklingsprogram, Region Midt",
    style: "Tillidsbaseret",
    theme: "Psykologisk tryghed"
  },
  {
    id: 69,
    text: "Du kan ikke skabe psykologisk tryghed med en PowerPoint-præsentation.",
    author: "DSS, 2024",
    style: "Tillidsbaseret",
    theme: "Psykologisk tryghed"
  },
  {
    id: 70,
    text: "En leder, der ikke stoler på sine medarbejdere, stiller sig selv ikke tilstrækkeligt spørgsmål.",
    author: "Executive Coach",
    style: "Tillidsbaseret",
    theme: "Psykologisk tryghed"
  },

  // ══════════════════════════════════════════════════════
  // TILLIDSBASERET × FORANDRINGSLEDELSE
  // ══════════════════════════════════════════════════════
  {
    id: 71,
    text: "Tillid er den ene konstant, der kan bære en organisation gennem forandring.",
    author: "DSS, 2024",
    style: "Tillidsbaseret",
    theme: "Forandringsledelse"
  },
  {
    id: 72,
    text: "Den leder, der ikke kan fejle, lærer heller ikke.",
    author: "Lederforeningen DSR",
    style: "Tillidsbaseret",
    theme: "Forandringsledelse"
  },
  {
    id: 73,
    text: "Forandring uden tillid er tvang. Forandring med tillid er fælles bevægelse.",
    author: "Nordisk Ledelsesforum",
    style: "Tillidsbaseret",
    theme: "Forandringsledelse"
  },
  {
    id: 74,
    text: "Den sværeste forandring er den, ingen tør sige er nødvendig.",
    author: "Lederweb, 2024",
    style: "Tillidsbaseret",
    theme: "Forandringsledelse"
  },
  {
    id: 75,
    text: "Psykologisk tryghed under forandring er ikke en luksus — det er en forudsætning for at komme helskindet igennem.",
    author: "Region Sjælland",
    style: "Tillidsbaseret",
    theme: "Forandringsledelse"
  },

  // ══════════════════════════════════════════════════════
  // TILLIDSBASERET × VISION
  // ══════════════════════════════════════════════════════
  {
    id: 76,
    text: "Tillid tager år at opbygge og sekunder at ødelægge. Investér derefter.",
    author: "Nordisk Ledelsesforum",
    style: "Tillidsbaseret",
    theme: "Vision"
  },
  {
    id: 77,
    text: "Tillid er ikke en følelse. Tillid er en ledelsesbeslutning.",
    author: "Nordisk Sundhedsledelse, 2024",
    style: "Tillidsbaseret",
    theme: "Vision"
  },
  {
    id: 78,
    text: "En organisation med høj psykologisk tryghed er en organisation, der tør se sandheden i øjnene.",
    author: "DSS Konference",
    style: "Tillidsbaseret",
    theme: "Vision"
  },
  {
    id: 79,
    text: "Psykologisk tryghed måles ikke i trivselsmålinger — den mærkes i ganghuset.",
    author: "Region Sjælland",
    style: "Tillidsbaseret",
    theme: "Vision"
  },
  {
    id: 80,
    text: "En leder, hvis vision ikke er forankret i tillid, kan ikke forvente, at andre løfter den med.",
    author: "Lederudviklingsprogram",
    style: "Tillidsbaseret",
    theme: "Vision"
  }

];

const STYLES = ["Nærledelse", "Transformationel", "Strategisk", "Tillidsbaseret"];
const THEMES = ["Kerneopgaven", "Psykologisk tryghed", "Forandringsledelse", "Vision"];
