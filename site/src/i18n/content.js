export const email = "akshatsafya@gmail.com";

export const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/akshat-safya/" },
  { label: "X", href: "https://x.com/me_safya" },
  { label: "Instagram", href: "https://www.instagram.com/me.safya/" },
];

export const content = {
  en: {
    meta: {
      title: "Akshat Safya – Software Developer",
      description:
        "Software Developer at Siemens Energy in Berlin, building internal data products with Snowflake, Streamlit, SQL, and Python.",
    },
    nav: [
      { id: "home", label: "Now" },
      { id: "skills", label: "Toolkit" },
      { id: "experience", label: "Experience" },
      { id: "projects", label: "Projects" },
      { id: "contact", label: "Contact" },
    ],
    pagesLabel: "Sections",
    pages: [
      { id: "home", label: "Home" },
      { id: "skills", label: "Toolkit" },
      { id: "experience", label: "Journey" },
      { id: "projects", label: "Projects & Contact" },
    ],
    hero: {
      eyebrow: "Software Developer at Siemens Energy",
      greetings: ["Hello!", "Hallo!", "Namaste!"],
      iam: "I'm",
      intro:
        "Based in Berlin, I build internal data products on Snowflake and Streamlit for the Gas Insulated Switchgear product management team, covering the full path from raw SAP and PLM data to the pipelines, dashboards, and applications teams rely on every day. My background spans data analysis, machine learning, and electronics, and I work AI-native, using modern AI tools to turn ideas into working products fast.",
      primaryCta: "Get in touch",
    },
    skills: {
      title: "Toolkit",
      hint: "Tap any skill to see everywhere I've used it.",
      explorer: "Skill Explorer",
      launch: "Explore skills",
      pick: "Pick a skill to see everywhere I've used it.",
      usedInOne: "1 match",
      usedInMany: "{n} matches",
      prev: "Previous match",
      next: "Next match",
      close: "Close explorer",
      kinds: { now: "Now", experience: "Experience", project: "Project" },
      groups: [
        {
          id: "data",
          wide: true,
          name: "Data Platforms",
          desc: "Where I spend most of my days.",
          items: ["Snowflake", "Snowpark", "SQL", "SAP MM Data"],
        },
        {
          id: "ai",
          name: "AI",
          desc: "From idea to working product, accelerated by AI.",
          items: ["Applied Machine Learning", "AI-Native Development"],
        },
        { id: "languages", name: "Languages", desc: "Python first.", items: ["Python", "R", "C"] },
        {
          id: "apps",
          name: "Apps and BI",
          desc: "Turning data into something people use.",
          items: ["Streamlit", "Power BI", "Tableau", "Salesforce"],
        },
        { id: "tools", name: "Tools", desc: "The everyday kit.", items: ["Git", "Jupyter", "MS Office"] },
      ],
    },
    now: {
      title: "Currently Building",
      lead: "What I'm working on in Product Management for Gas Insulated Switchgear.",
      items: [
        {
          title: "Parts Overview Tool",
          body: "An internal data product on Snowflake and Streamlit. I own both the data pipelines and the application layer.",
          tags: ["Snowflake", "Streamlit", "Snowpark"],
        },
        {
          title: "Supplier Performance Dashboard",
          body: "Snowflake views over SAP MM purchasing data that track delivery-reliability KPIs such as Liefertreue and Wunschtermintreue.",
          tags: ["Snowflake", "SQL", "SAP MM"],
        },
        {
          title: "PLM Data Integration",
          body: "Scoping the extraction of Oracle Agile PLM data into Snowflake for the product management team.",
          tags: ["Snowflake", "Oracle Agile PLM"],
        },
      ],
    },
    experience: {
      title: "Experience",
      jobs: [
        {
          role: "Software Developer",
          company: "Siemens Energy",
          detail: "Product Management, Gas Insulated Switchgear",
          place: "Berlin, Germany",
          period: "09/2026 – Present",
          points: [
            "Building data products and pipelines on Snowflake, Snowpark, and Streamlit.",
          ],
          tags: ["Snowflake", "Snowpark", "Streamlit", "SQL", "Python", "SAP MM"],
        },
        {
          role: "Working Student – Account Management Europe",
          company: "Siemens Energy",
          place: "Erlangen, Germany",
          period: "11/2024 – 08/2026",
          points: [
            "Designed and maintained financial dashboards supporting decision-making for Key Account Managers.",
            "Supported Salesforce data quality, system optimization, and process improvements.",
            "Contributed to business development through market trend analysis.",
          ],
          tags: ["Snowflake", "Power BI", "Salesforce", "Tableau", "Excel"],
        },
        {
          role: "Data Analyst Intern",
          company: "QRS Magnovit AG",
          place: "Liechtenstein (remote)",
          period: "11/2022 – 11/2023",
          points: [
            "Analyzed and managed datasets with SQL and Python while ensuring data integrity and HIPAA compliance.",
            "Developed scheduling algorithms in R that increased daily patient throughput by 20%.",
            "Built Power BI dashboards that contributed to a 15% revenue increase.",
          ],
          tags: ["SQL", "Python", "R", "Power BI"],
        },
        {
          role: "Data Science Intern",
          company: "Omdena",
          place: "Delhi (remote)",
          period: "07/2022 – 10/2022",
          points: [
            "Built a machine learning credit scoring model for 5,000+ smallholder farmers.",
            "Engineered creditworthiness features with SQL and Pandas to improve prediction reliability.",
          ],
          tags: ["Applied Machine Learning", "Python", "PyTorch", "Pandas", "SQL", "Git"],
        },
      ],
    },
    projects: {
      title: "Projects",
      items: [
        {
          title: "Sales Performance Dashboard",
          body: "Interactive Power BI dashboard tracking monthly sales, regional performance, and product profitability, with DAX measures for year-over-year growth and running totals.",
          tags: ["Power BI", "DAX", "Power Query", "SQL"],
        },
        {
          title: "Machine Learning Health Analyzer",
          body: "Arduino UNO sensor rig feeding real-time health parameters into a logistic regression model, reaching 80% accuracy in assessing health status.",
          tags: ["Applied Machine Learning", "Python", "Scikit-Learn", "Arduino", "Jupyter"],
        },
        {
          title: "Stock Market Forecasting Model",
          body: "Regression-based forecasting on historical market data, with feature engineering and PCA for dimensionality reduction.",
          tags: ["Applied Machine Learning", "Python", "Statsmodels", "PCA", "Jupyter", "Git"],
        },
        {
          title: "This Website",
          body: "Rebuilt from scratch in Astro with an EN/DE toggle, scroll-driven effects, and a live skill explorer, developed AI-native from the first line of code.",
          tags: ["Astro", "AI-Native Development", "Git"],
        },
      ],
    },
    education: {
      title: "Education",
      items: [
        {
          degree: "Master's Studies, Information and Communication Technology",
          school: "Friedrich-Alexander-Universität Erlangen-Nürnberg",
          period: "04/2024 – 08/2026",
        },
        {
          degree: "Bachelor of Technology, Electronics and Communication Engineering",
          school: "Gautam Buddha University",
          period: "07/2019 – 06/2023",
          grade: "CGPA 8.51 / 10",
        },
      ],
    },
    contact: {
      title: "Let's Connect",
      lead: "Open to conversations about data products, energy, and building faster with AI.",
    },
    footer: "Built with love",
  },

  de: {
    meta: {
      title: "Akshat Safya – Softwareentwickler",
      description:
        "Softwareentwickler bei Siemens Energy in Berlin. Ich entwickle interne Datenprodukte mit Snowflake, Streamlit, SQL und Python.",
    },
    nav: [
      { id: "home", label: "Aktuell" },
      { id: "skills", label: "Kenntnisse" },
      { id: "experience", label: "Erfahrung" },
      { id: "projects", label: "Projekte" },
      { id: "contact", label: "Kontakt" },
    ],
    pagesLabel: "Abschnitte",
    pages: [
      { id: "home", label: "Start" },
      { id: "skills", label: "Kenntnisse" },
      { id: "experience", label: "Werdegang" },
      { id: "projects", label: "Projekte & Kontakt" },
    ],
    hero: {
      eyebrow: "Softwareentwickler bei Siemens Energy",
      greetings: ["Hallo!", "Hello!", "Namaste!"],
      iam: "Ich bin",
      intro:
        "Von Berlin aus entwickle ich interne Datenprodukte auf Basis von Snowflake und Streamlit für das Produktmanagement gasisolierter Schaltanlagen – von SAP- und PLM-Rohdaten bis zu den Pipelines, Dashboards und Anwendungen, mit denen Teams täglich arbeiten. Mein Hintergrund umfasst Datenanalyse, Machine Learning und Elektronik, und ich arbeite KI-nativ: Mit modernen KI-Werkzeugen mache ich aus Ideen schnell funktionierende Produkte.",
      primaryCta: "Kontakt aufnehmen",
    },
    skills: {
      title: "Kenntnisse",
      hint: "Wähle eine Kenntnis und sieh, wo ich sie überall eingesetzt habe.",
      explorer: "Skill-Explorer",
      launch: "Kenntnisse erkunden",
      pick: "Wähle eine Kenntnis, um zu sehen, wo ich sie überall eingesetzt habe.",
      usedInOne: "1 Treffer",
      usedInMany: "{n} Treffer",
      prev: "Vorheriger Treffer",
      next: "Nächster Treffer",
      close: "Explorer schließen",
      kinds: { now: "Aktuell", experience: "Erfahrung", project: "Projekt" },
      groups: [
        {
          id: "data",
          wide: true,
          name: "Datenplattformen",
          desc: "Hier verbringe ich die meisten Tage.",
          items: ["Snowflake", "Snowpark", "SQL", "SAP-MM-Daten"],
        },
        {
          id: "ai",
          name: "KI",
          desc: "Von der Idee zum fertigen Produkt – beschleunigt durch KI.",
          items: ["Angewandtes Machine Learning", "KI-native Entwicklung"],
        },
        { id: "languages", name: "Sprachen", desc: "Python zuerst.", items: ["Python", "R", "C"] },
        {
          id: "apps",
          name: "Apps und BI",
          desc: "Aus Daten wird etwas, das Menschen nutzen.",
          items: ["Streamlit", "Power BI", "Tableau", "Salesforce"],
        },
        { id: "tools", name: "Werkzeuge", desc: "Das tägliche Handwerkszeug.", items: ["Git", "Jupyter", "MS Office"] },
      ],
    },
    now: {
      title: "Woran ich gerade arbeite",
      lead: "Aktuelle Themen im Produktmanagement für gasisolierte Schaltanlagen.",
      items: [
        {
          title: "Parts-Overview-Tool",
          body: "Ein internes Datenprodukt auf Snowflake und Streamlit. Ich verantworte sowohl die Datenpipelines als auch die Anwendungsebene.",
          tags: ["Snowflake", "Streamlit", "Snowpark"],
        },
        {
          title: "Lieferantenperformance-Dashboard",
          body: "Snowflake-Views auf SAP-MM-Einkaufsdaten zur Messung von Liefer-KPIs wie Liefertreue und Wunschtermintreue.",
          tags: ["Snowflake", "SQL", "SAP MM"],
        },
        {
          title: "PLM-Datenintegration",
          body: "Konzeption der Extraktion von Oracle-Agile-PLM-Daten nach Snowflake für das Produktmanagement.",
          tags: ["Snowflake", "Oracle Agile PLM"],
        },
      ],
    },
    experience: {
      title: "Berufserfahrung",
      jobs: [
        {
          role: "Softwareentwickler",
          company: "Siemens Energy",
          detail: "Produktmanagement, gasisolierte Schaltanlagen",
          place: "Berlin, Deutschland",
          period: "09/2026 – heute",
          points: [
            "Entwicklung von Datenprodukten und Pipelines mit Snowflake, Snowpark und Streamlit.",
          ],
          tags: ["Snowflake", "Snowpark", "Streamlit", "SQL", "Python", "SAP MM"],
        },
        {
          role: "Werkstudent – Account Management Europa",
          company: "Siemens Energy",
          place: "Erlangen, Deutschland",
          period: "11/2024 – 08/2026",
          points: [
            "Konzeption und Pflege von Finanz-Dashboards zur Entscheidungsunterstützung der Key Account Manager.",
            "Unterstützung bei Datenqualität, Systemoptimierung und Prozessverbesserungen in Salesforce.",
            "Mitarbeit an Business-Development-Initiativen durch Analyse von Markttrends.",
          ],
          tags: ["Snowflake", "Power BI", "Salesforce", "Tableau", "Excel"],
        },
        {
          role: "Praktikant Data Analytics",
          company: "QRS Magnovit AG",
          place: "Liechtenstein (remote)",
          period: "11/2022 – 11/2023",
          points: [
            "Analyse und Verwaltung von Datensätzen mit SQL und Python unter Einhaltung von Datenintegrität und HIPAA.",
            "Entwicklung von Terminplanungsalgorithmen in R, die den täglichen Patientendurchsatz um 20 % steigerten.",
            "Aufbau von Power-BI-Dashboards, die zu 15 % mehr Umsatz beitrugen.",
          ],
          tags: ["SQL", "Python", "R", "Power BI"],
        },
        {
          role: "Praktikant Data Science",
          company: "Omdena",
          place: "Delhi (remote)",
          period: "07/2022 – 10/2022",
          points: [
            "Entwicklung eines Machine-Learning-Kreditscoring-Modells für über 5.000 Kleinbauern.",
            "Feature Engineering mit SQL und Pandas zur Verbesserung der Vorhersagezuverlässigkeit.",
          ],
          tags: ["Angewandtes Machine Learning", "Python", "PyTorch", "Pandas", "SQL", "Git"],
        },
      ],
    },
    projects: {
      title: "Projekte",
      items: [
        {
          title: "Sales-Performance-Dashboard",
          body: "Interaktives Power-BI-Dashboard zu Monatsumsätzen, regionaler Performance und Produktprofitabilität, mit DAX-Kennzahlen für Vorjahresvergleiche und kumulierte Werte.",
          tags: ["Power BI", "DAX", "Power Query", "SQL"],
        },
        {
          title: "Machine-Learning-Gesundheitsanalyse",
          body: "Arduino-UNO-Sensorik liefert Gesundheitsparameter in Echtzeit an ein logistisches Regressionsmodell mit 80 % Genauigkeit.",
          tags: ["Angewandtes Machine Learning", "Python", "Scikit-Learn", "Arduino", "Jupyter"],
        },
        {
          title: "Aktienmarkt-Prognosemodell",
          body: "Regressionsbasierte Prognosen auf historischen Marktdaten, mit Feature Engineering und PCA zur Dimensionsreduktion.",
          tags: ["Angewandtes Machine Learning", "Python", "Statsmodels", "PCA", "Jupyter", "Git"],
        },
        {
          title: "Diese Website",
          body: "Von Grund auf neu mit Astro gebaut, mit EN/DE-Umschaltung, scrollgesteuerten Effekten und einem Live-Skill-Explorer – von der ersten Codezeile an KI-nativ entwickelt.",
          tags: ["Astro", "KI-native Entwicklung", "Git"],
        },
      ],
    },
    education: {
      title: "Ausbildung",
      items: [
        {
          degree: "Masterstudium Informations- und Kommunikationstechnik",
          school: "Friedrich-Alexander-Universität Erlangen-Nürnberg",
          period: "04/2024 – 08/2026",
        },
        {
          degree: "Bachelor of Technology, Elektronik und Kommunikationstechnik",
          school: "Gautam Buddha University",
          period: "07/2019 – 06/2023",
          grade: "CGPA 8,51 / 10",
        },
      ],
    },
    contact: {
      title: "Kontakt",
      lead: "Offen für Gespräche über Datenprodukte, Energie und schnelleres Entwickeln mit KI.",
    },
    footer: "Mit Liebe gebaut",
  },
};
