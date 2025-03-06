document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("boredButton");

    let originalX = window.innerWidth - 120;
    let originalY = window.innerHeight - 80;
    let timeout;

    const messages = {
        en: [
            "Stop it!", "Quit it!", "It's not funny!", "Do your work!", "Alright, fine!",
            "Ugh!", "Seriously?", "You're wasting time!", "Go away!", "I'm warning you!",
            "I’m not a game!", "What do you want?!", "Just leave me alone!", "You again?!"
        ],
        es: [
            "¡Detente!", "¡Déjalo!", "¡No es gracioso!", "¡Haz tu trabajo!", "Está bien, vale...",
            "¡Ugh!", "¿En serio?", "¡Estás perdiendo el tiempo!", "¡Vete!", "¡Te estoy advirtiendo!",
            "¡No soy un juego!", "¿Qué quieres?!", "¡Déjame en paz!", "¿Otra vez tú?!"
        ]
    };

    function getRandomMessage(lang) {
        return messages[lang][Math.floor(Math.random() * messages[lang].length)];
    }

    function moveButton() {
        let newX = Math.random() * (window.innerWidth - 150);
        let newY = Math.random() * (window.innerHeight - 100);

        button.style.left = `${newX}px`;
        button.style.top = `${newY}px`;

        button.textContent = getRandomMessage(document.body.dataset.lang || "en");

        clearTimeout(timeout);
        timeout = setTimeout(() => {
            button.style.left = `${originalX}px`;
            button.style.top = `${originalY}px`;
            button.textContent = document.body.dataset.lang === "es" ? "¿Estás aburrido?" : "Are you bored?";
        }, 2000);
    }

    if (button) {
        button.style.position = "fixed";
        button.style.left = `${originalX}px`;
        button.style.top = `${originalY}px`;
        button.addEventListener("mouseover", moveButton);
    }

    // Language Toggle Logic
    const translations = {
        en: {
            title: "Sword Art Online: The Future of VR & Ethics",
            aboutTitle: "Welcome to the SAO Digital Forum",
            aboutDesc: "Exploring how technology is bringing us closer to SAO and questioning how society would react in a 'Kill or Be Killed' scenario.",
            worksTitle: "Works Cited",
            worksDesc: "1. Source 1 – <i>Author Name</i> - Citation details here.",
            worksDesc2: "2. Source 2 – <i>Author Name</i> - Citation details here.",
            worksDesc3: "3. Source 3 – <i>Author Name</i> - Citation details here.",
            worksDesc4: "4. Source 4 – <i>Author Name</i> - Citation details here.",
            worksDesc5: "5. Source 5 – <i>Author Name</i> - Citation details here.",
            techTitle: "Technological Advancements",
            techDesc: "Technology is evolving rapidly, bringing us closer to the world of Sword Art Online. From full-dive VR to neural interfaces, advancements in AI and immersive environments are shaping the future of gaming and virtual worlds.",
            ethicsTitle: "Ethics & Morality in SAO",
            ethicsDesc: "The concept of 'Kill or Be Killed' in Sword Art Online raises deep ethical questions. How would morality shift if survival depended on abandoning one's principles?",
            societyTitle: "How Would Society React?",
            societyDesc: "Would people break their own morals and ethics to survive? Would society adapt to a world where choices have permanent consequences?",

            // Navigation Bar
            navAbout: "About",
            navTech: "Tech Advancements",
            navEthics: "Ethics & Morality",
            navSociety: "Society’s Reaction",
            navWorksCited: "Works Cited"
        },
        es: {
            title: "Sword Art Online: El Futuro de la Realidad Virtual y la Ética",
            aboutTitle: "Bienvenido al Foro Digital de SAO",
            aboutDesc: "Explorando cómo la tecnología nos acerca cada día más al mundo de SAO y cuestionando cómo reaccionaría la sociedad en un escenario de 'Matar o Morir'.",
            worksTitle: "Fuentes Citadas",
            worksDesc: "1. Fuente 1 – <i>Nombre del Autor</i> - Detalles de la cita aquí.",
            worksDesc2: "2. Fuente 2 – <i>Nombre del Autor</i> - Detalles de la cita aquí.",
            worksDesc3: "3. Fuente 3 – <i>Nombre del Autor</i> - Detalles de la cita aquí.",
            worksDesc4: "4. Fuente 4 – <i>Nombre del Autor</i> - Detalles de la cita aquí.",
            worksDesc5: "5. Fuente 5 – <i>Nombre del Autor</i> - Detalles de la cita aquí.",
            techTitle: "Avances Tecnológicos",
            techDesc: "La tecnología está evolucionando rápidamente, acercándonos cada vez más al mundo de Sword Art Online. Desde la realidad virtual inmersiva hasta las interfaces neuronales, los avances en inteligencia artificial están moldeando el futuro de los juegos y los mundos virtuales.",
            ethicsTitle: "Ética y Moralidad en SAO",
            ethicsDesc: "El concepto de 'Matar o Morir' en Sword Art Online plantea profundas cuestiones éticas. ¿Cómo cambiaría la moral si la supervivencia dependiera de abandonar los propios principios?",
            societyTitle: "¿Cómo Reaccionaría la Sociedad?",
            societyDesc: "¿Las personas romperían sus propias normas éticas para sobrevivir? ¿Se adaptaría la sociedad a un mundo donde las decisiones tienen consecuencias permanentes?",

            // Navigation Bar
            navAbout: "Sobre",
            navTech: "Avances Tecnológicos",
            navEthics: "Ética y Moralidad",
            navSociety: "Reacción de la Sociedad",
            navWorksCited: "Fuentes Citadas"
        }
    };

    function switchLanguage(lang) {
        document.body.dataset.lang = lang;
        document.querySelector("h1").textContent = translations[lang].title;

        // Page-Specific Translations
        let aboutTitle = document.getElementById("aboutTitle");
        let aboutDesc = document.getElementById("aboutDesc");
        let worksTitle = document.getElementById("worksTitle");

        if (aboutTitle) aboutTitle.textContent = translations[lang].aboutTitle;
        if (aboutDesc) aboutDesc.textContent = translations[lang].aboutDesc;
        if (worksTitle) worksTitle.textContent = translations[lang].worksTitle;

        let techTitle = document.getElementById("techTitle");
        let techDesc = document.getElementById("techDesc");
        let ethicsTitle = document.getElementById("ethicsTitle");
        let ethicsDesc = document.getElementById("ethicsDesc");
        let societyTitle = document.getElementById("societyTitle");
        let societyDesc = document.getElementById("societyDesc");

        if (techTitle) techTitle.textContent = translations[lang].techTitle;
        if (techDesc) techDesc.textContent = translations[lang].techDesc;
        if (ethicsTitle) ethicsTitle.textContent = translations[lang].ethicsTitle;
        if (ethicsDesc) ethicsDesc.textContent = translations[lang].ethicsDesc;
        if (societyTitle) societyTitle.textContent = translations[lang].societyTitle;
        if (societyDesc) societyDesc.textContent = translations[lang].societyDesc;

        // Translate Navigation Tabs
        document.querySelector("nav ul li:nth-child(1) a").textContent = translations[lang].navAbout;
        document.querySelector("nav ul li:nth-child(2) a").textContent = translations[lang].navTech;
        document.querySelector("nav ul li:nth-child(3) a").textContent = translations[lang].navEthics;
        document.querySelector("nav ul li:nth-child(4) a").textContent = translations[lang].navSociety;
        document.querySelector("nav ul li:nth-child(5) a").textContent = translations[lang].navWorksCited;
    }

    document.getElementById("englishBtn").addEventListener("click", () => switchLanguage("en"));
    document.getElementById("spanishBtn").addEventListener("click", () => switchLanguage("es"));
});