document.addEventListener("DOMContentLoaded", function () {
    console.log("Script is running!");

    // Handle SAO Start Screen
    const saoText = document.getElementById("saoText");
    const flashOverlay = document.querySelector(".flash-overlay");

    if (saoText && flashOverlay) {
        setTimeout(() => {
            flashOverlay.style.opacity = "1"; // Flash effect

            setTimeout(() => {
                flashOverlay.style.opacity = "0";
                saoText.style.opacity = "0"; // Fade out screen

                setTimeout(() => {
                    window.location.href = "index.html"; // Redirect after animation
                }, 500);
            }, 1500);
        }, 3000);
    }

    // Restore Bored Button functionality
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
            worksDesc: "1. Miller, April. “¿Será Posible la Realidad Virtual de Cuerpo Completo como 'Sword Art Online'?” <i>AR Insider</i>, 30 de nov. de 2021, <a href='https://arinsider.co/2021/11/24/will-full-body-vr-like-sword-art-online-ever-be-possible/' target='_blank'>arinsider.co</a>.<br><br> Miller analiza el potencial de una realidad virtual al estilo SAO. Habla de los desarrollos en hardware de VR, interfaces neuronales y el concepto de inmersión. Aunque los avances son impresionantes, concluye que aún no se alcanza una verdadera replicación sensorial.",
            worksDesc2: "2. Turns, John. “¿Qué Tan Cerca Estamos de la Realidad Virtual Total?” <i>Seisan Software Development</i>, 24 de oct. de 2024, <a href='https://seisan.com/how-close-are-we-to-full-dive-vr/' target='_blank'>seisan.com</a>.<br><br> Turns ofrece un análisis profundo sobre la VR actual y las interfaces neuronales. Evalúa la brecha entre la tecnología existente y las experiencias estilo SAO. Concluye que la inmersión sensorial completa aún está a décadas de distancia.",
            worksDesc3: "3. Gault, Matthew, et al. “Palmer Luckey Creó un Casco de VR que Mata al Jugador si Muere en el Juego.” <i>VICE</i>, 9 de ago. de 2024, <a href='https://www.vice.com/en/article/palmer-luckey-made-a-vr-headset-that-kills-the-user-if-they-die-in-the-game/' target='_blank'>vice.com</a>.<br><br> El periodista Matthew Gault informa sobre el prototipo de un casco VR letal inspirado en SAO. Aunque no es un producto comercial, generó un gran revuelo. La pieza ofrece un vistazo a cómo la sociedad reacciona ante el concepto de una VR mortal.",
            worksDesc4: "4. Terbeck, Sylvia, et al. “Presencia Física Durante la Acción Moral en Realidad Virtual Inmersiva.” <i>International Journal of Environmental Research and Public Health</i>, Biblioteca Nacional de Medicina de EE.UU., 29 de julio de 2021, <a href='https://pmc.ncbi.nlm.nih.gov/articles/PMC8345728/' target='_blank'>pmc.ncbi.nlm.nih.gov</a>.<br><br> Este estudio analiza cómo las personas toman decisiones morales en entornos VR. Concluye que la presencia de otros avatares realistas aumenta la empatía y la moral, lo cual contradice la idea de que todos se volverían despiadados en un mundo estilo SAO.",
            worksDesc5: "5. Jern, Alan. “La Psicología Detrás de ‘Squid Game.’” Editado por Ekua Hagan, <i>Psychology Today</i>, Sussex Publishers, <a href='https://www.psychologytoday.com/us/blog/overthinking-tv/202110/the-psychology-behind-squid-game' target='_blank'>psychologytoday.com</a>. Accedido el 21 de abril de 2025.<br><br> El científico cognitivo Alan Jern analiza el programa <i>Squid Game</i> para ilustrar conceptos psicológicos en situaciones extremas. Habla de cómo la presión y el anonimato pueden influir en el comportamiento moral, observaciones aplicables a un escenario tipo SAO.",
            worksDesc6: "6. Margolis, Ora. “Sword Art Online: Explorando el Metaverso y la Realidad Virtual.” <i>Sabukaru</i>, 26 de julio de 2022, <a href='https://sabukaru.online/articles/sword-art-online-exploring-the-metaverse-and-virtual-reality' target='_blank'>sabukaru.online</a>.<br><br> Este artículo compara SAO con los avances reales del metaverso. Critica la narrativa por asumir que los gobiernos permitirían que miles quedaran atrapados en VR. También señala que una catástrofe de ese nivel destruiría la confianza pública en la tecnología y forzaría una regulación estricta.",
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

        // Translate About Page Body Paragraphs
        if (lang === "es" && document.getElementById("aboutDesc")) {
            const newParagraphs = [
                "En 2022, el fundador de Oculus, Palmer Luckey, creó un prototipo de casco de realidad virtual que mataría al usuario si moría en el juego — un guiño espeluznante a <em>Sword Art Online</em> (SAO), el anime en el que los jugadores quedan atrapados en un mundo virtual donde la muerte es permanente. Lo que antes era ciencia ficción se está volviendo cada vez más real. Tecnologías como las interfaces neuronales, el seguimiento corporal completo y la realidad virtual están evolucionando más rápido que nunca, planteando una pregunta crítica: ¿Estamos listos para lo que viene?",
                "Este foro pregunta cómo reaccionaría la sociedad moderna si lo que ocurrió en <em>Sword Art Online</em> ocurriera en el mundo real. En el centro del debate está la inquietante idea de una realidad virtual de \"Matar o Morir\". ¿Qué pasaría si un juego en línea se convirtiera en una situación de vida o muerte? ¿La gente mantendría su moral y ética — o las olvidaría para sobrevivir?",
                "Desde tres nuevas perspectivas, este Foro Digital investiga el cruce entre tecnología, ética y respuesta social. La primera examina cómo la evolución de la realidad virtual, la inteligencia artificial y las interfaces cerebro-computadora nos están llevando rápidamente a una realidad de inmersión total. La segunda discute la ética en un mundo virtual de alto riesgo — ¿qué es la moralidad cuando la vida o la muerte están en juego? La tercera examina a la sociedad en su conjunto: ¿Cómo reaccionarían las personas, las instituciones y los gobiernos ante la situación de miles de personas atrapadas en un juego de muerte digital?",
                "Esto no es fantasía de ciencia ficción — es hacia donde vamos. Considerar estas preguntas ahora nos da una mejor idea de lo que está en juego mientras diseñamos espacios virtuales más inmersivos. Este foro te reta a pensar seriamente sobre el futuro de la tecnología y la humanidad que está en riesgo — o, posiblemente, la que podríamos encontrar en el camino."
            ];
            const contentSection = document.querySelector(".content");
            if (contentSection) {
                const pTags = contentSection.querySelectorAll("p");
                for (let i = 1; i < 5 && i < pTags.length; i++) {
                    pTags[i].innerHTML = newParagraphs[i - 1];
                }
            }
        }
        // Restore About Page English Body Paragraphs
        if (lang === "en" && document.getElementById("aboutDesc")) {
            const newParagraphs = [
                "In 2022, Oculus founder Palmer Luckey created a prototype VR headset that would kill its user if they die while playing the game — a spooky nod to <em>Sword Art Online</em> (SAO), the anime show in which players are trapped in a virtual world where death is permanent. What was once science fiction is becoming increasingly real. Technologies like neural interfaces, full-body tracking, and virtual reality are evolving faster than ever before, raising a very critical question: Are we ready for what comes next?",
                "This forum asks how modern society would react if what happened in <em>Sword Art Online</em> occurred in the real world. At the center of the debate is the chilling idea of a \"Kill or Be Killed\" virtual reality. What happens when an internet game becomes a life-or-death situation? Would the people hold on to their morals and ethics — or forget them in order to survive?",
                "In three new perspectives, this Digital Forum investigates the crossroads of technology, ethics, and social response. The first examines how the evolution of VR, AI, and brain-computer interfaces are rapidly leading us to full-dive reality. The second discusses the ethics that would exist in a high-stakes virtual world — what is morality when life or death are on the line? The third examines society as a whole: How would people, institutions, and governments respond to the situation of thousands trapped in a digital death game?",
                "This is not science fiction fantasy — it's where we're going. Considering these questions now gives us a better sense of what's at stake as we design more immersive virtual spaces. This forum challenges you to think seriously about the future of technology and the humanity that's at risk — or, quite possibly, that we may find along the way."
            ];
            const contentSection = document.querySelector(".content");
            if (contentSection) {
                const pTags = contentSection.querySelectorAll("p");
                for (let i = 1; i < 5 && i < pTags.length; i++) {
                    pTags[i].innerHTML = newParagraphs[i - 1];
                }
            }
        }

        // Translate Tech Advancements Page Body Paragraphs
        if (lang === "es" && document.getElementById("techDesc")) {
            const newParagraphs = [
                "La tecnología moderna está evolucionando constantemente hacia una realidad virtual inmersiva como la de <em>Sword Art Online</em>, aunque aún no hemos llegado. Los visores actuales (como el Valve Index o Meta Quest) ofrecen visuales de alta fidelidad y seguimiento corporal completo, pero se basan principalmente en la vista y el sonido. La verdadera inmersión sensorial sigue siendo limitada: no hay tacto, gusto ni olor directo, solo vibraciones o señales audiovisuales. Se están desarrollando trajes hápticos experimentales con retroalimentación de presión y vibración en todo el cuerpo, pero por ahora son costosos y experimentales (Miller). En resumen, la realidad virtual actual puede engañar a nuestros ojos y oídos, pero no logra convencer al cerebro por completo.",
                "Las interfaces cerebro-computadora (BCIs) podrían ser la clave para una inmersión más profunda al conectar directamente las señales neuronales con los dispositivos. Por ejemplo, científicos han logrado que personas paralizadas controlen prótesis con la mente y han decodificado ondas cerebrales en palabras (Turns). En 2021, Neuralink mostró un mono jugando Pong usando solo una interfaz cerebral (Miller). Aunque controlar con la mente es posible, escribir sensaciones en el cerebro es mucho más difícil. Simular los cinco sentidos o provocar dolor/placer realistas es un reto técnico inmenso. Como dijo Palmer Luckey tras crear un casco VR letal en broma: “solo he logrado la mitad que te mata” (Gault et al.).",
                "Crear un mundo como <em>Aincrad</em> de SAO no solo requiere cascos, sino también inteligencia artificial y potencia computacional. Los motores gráficos actuales y los NPCs con IA se están volviendo más sofisticados con mundos generados proceduralmente y respuestas dinámicas. Pero para lograr una experiencia MMORPG de cien pisos con IA de nivel humano, aún necesitamos avances significativos en IA e infraestructura de servidores.",
                "¿Qué tan cerca estamos de la experiencia SAO? La mayoría de expertos concuerda en que la inmersión total aún está a décadas de distancia. Algunos análisis proyectan que la VR total de estilo SAO podría llegar a mediados del siglo XXI (Turns). Aunque aún no tenemos un NerveGear, tecnologías como Neuralink insinúan que podríamos ver algo similar al Oasis de <em>Ready Player One</em> en un futuro no muy lejano. En resumen, los bloques ya existen — cascos VR, retroalimentación háptica, BCIs, IA — pero falta que estas tecnologías maduren y converjan. La gran pregunta es cuándo, y más importante, si la sociedad aceptará ese nivel de inmersión tan riesgoso."
            ];
            const contentSection = document.querySelector(".content");
            if (contentSection) {
                const pTags = contentSection.querySelectorAll("p");
                for (let i = 1; i < 5 && i < pTags.length; i++) {
                    pTags[i].innerHTML = newParagraphs[i - 1];
                }
            }
        }

        // Restore Tech Advancements Page English Paragraphs
        if (lang === "en" && document.getElementById("techDesc")) {
            const newParagraphs = [
                "<strong>Modern technology</strong> is steadily evolving toward the kind of fully immersive “full-dive” VR seen in <em>Sword Art Online</em>, though we’re not there yet. Virtual reality headsets today (like the Valve Index or Meta Quest) offer high-fidelity visuals and full-body tracking, but they still rely mainly on sight and sound. We can move avatars and look around freely, yet true sensory immersion remains limited – there’s no direct touch, taste, or smell, only vibrations or audio-visual cues​ (Miller). Experimental haptic suits are in development to fill this gap, with prototypes promising whole-body feedback via pressure and vibration, but those remain experimental and expensive for now​ (Miller). In short, current VR can transport our eyes and ears, but it can’t yet fool our other senses or fully convince the brain.",
                "One key to deeper immersion may lie in brain-computer interfaces (BCIs). BCIs aim to link computers with our neural signals, potentially enabling a “full-dive” experience by reading and sending information directly to the brain. Recent breakthroughs demonstrate the promise of this approach. For example, scientists have enabled paralyzed individuals to control prosthetic limbs with their thoughts, and they’ve decoded brainwave patterns into words with increasing accuracy​ (Turns). In 2021, Elon Musk’s company Neuralink even showed a monkey playing a simple video game (Pong) using only a neural implant and brain signals – no handheld controller needed​ (Miller). These remarkable feats suggest that thought-controlled virtual actions are becoming feasible. However, writing into the brain (to create realistic sensory experiences) is far harder than reading signals. Simulating all five senses or causing realistic pain/pleasure via a headset is a massive technical challenge still unresolved. As Oculus founder Palmer Luckey quipped after building a tongue-in-cheek “killer headset,” “we are halfway to making a true NerveGear… The bad news is that so far, I have only figured out the half that kills you”​ (Gault et al.) – meaning we could make a VR device lethal, but we cannot yet make it fully lifelike.",
                "Beyond interfaces, improvements in computing power and AI are also relevant. Creating a vast VR world like SAO’s Aincrad requires enormous processing and intelligent software. Today’s game engines and AI NPCs are growing more sophisticated – we see procedurally generated worlds and AI-driven characters that respond dynamically – but achieving a seamless, hundred-floor VR MMORPG with human-level AI characters would demand further advances in AI and server infrastructure. In <em>Sword Art Online</em>, the game’s architect offloaded human consciousness onto a virtual server; in reality, we would need breakthroughs in AI to manage complex simulations and perhaps cloud computing infrastructure far beyond today’s capacity.",
                "So how close are we to SAO-like experiences? Most experts agree we’re decades away from true full-dive VR. One analysis predicts that it will take several more decades of development before full-dive VR becomes a consumer reality​ (Turns). Even relatively optimistic forecasts place SAO-style tech in the mid-21st century. (Recall that <em>Ready Player One</em> imagined a similar VR metaverse in 2045.) At present, “<em>Sword Art Online</em>–style full-dive VR is out of reach”, though technologies like Neuralink hint that “we may have our own version of the Oasis before too much longer”​ (Miller). In short, the building blocks – VR headsets, haptic feedback, BCIs, and AI – are advancing, but a fully realized NerveGear and death-game environment would require these components to mature and converge. It’s a question of when (perhaps in a few decades) – and importantly if – society chooses to adopt such dangerous immersion once it’s possible."
            ];
            const contentSection = document.querySelector(".content");
            if (contentSection) {
                const pTags = contentSection.querySelectorAll("p");
                for (let i = 1; i < 5 && i < pTags.length; i++) {
                    pTags[i].innerHTML = newParagraphs[i - 1];
                }
            }
        }

        // Translate Ethics & Morality Page Body Paragraphs
        if (lang === "es" && document.getElementById("ethicsDesc")) {
            const newParagraphs = [
                "Un juego de realidad virtual mortal con la regla de “matar o morir” plantea dilemas éticos y morales profundos. A diferencia de los videojuegos comunes, donde la muerte es ficticia, una situación como SAO implica consecuencias reales. Matar ya no sería algo neutral o parte del juego. Como dijo Palmer Luckey, vincular la vida real al avatar eleva instantáneamente las apuestas y obliga a las personas a replantearse cómo interactúan en estos mundos (Gault et al.). En otras palabras, si asesinar en el juego equivale a asesinar en la vida real, los jugadores actuarían con más cautela y tomarían la moral más en serio.",
                "La toma de decisiones morales cambiaría en condiciones extremas. Algunos jugadores, atrapados en una situación letal, podrían adoptar una mentalidad de supervivencia similar a la descrita por Hobbes como el “estado de naturaleza”: una condición sin reglas donde cada uno actúa por su cuenta. Matar podría racionalizarse como defensa propia. Sin embargo, no todos reaccionarían con brutalidad. Estudios muestran que los escenarios inmersivos aumentan la empatía. En un experimento, quienes enfrentaron dilemas morales en VR se preocuparon más por no dañar a un avatar que quienes solo leyeron el escenario (Terbeck et al.). Esto sugiere que la presencia de otros, aunque sean virtuales, puede despertar la conciencia y fomentar la cooperación, incluso a riesgo de la propia vida.",
                "Por otro lado, la presión extrema y la estructura del juego podrían erosionar la moralidad convencional. Experimentos como el de la prisión de Stanford y series como <em>Squid Game</em> revelan cómo el estrés, el anonimato y la pertenencia grupal pueden hacer que personas comunes cometan actos terribles. En <em>Squid Game</em>, los guardias con máscaras se deshumanizan y obedecen sin cuestionar, matando en frío (Jern). En SAO, algunos jugadores podrían escudarse tras sus avatares o alianzas para justificar violencia. Además, el miedo constante puede desencadenar respuestas de pánico o traición, impulsadas por instinto y no por juicio moral. La ley de Yerkes-Dodson demuestra que altos niveles de estrés reducen la capacidad de tomar decisiones racionales (Jern). En un juego de muerte, las normas éticas podrían desmoronarse fácilmente."
            ];
            const contentSection = document.querySelector(".content");
            if (contentSection) {
                const pTags = contentSection.querySelectorAll("p");
                for (let i = 1; i < 4 && i < pTags.length; i++) {
                    pTags[i].innerHTML = newParagraphs[i - 1];
                }
            }
        }

        // Restore Ethics & Morality Page English Paragraphs
        if (lang === "en" && document.getElementById("ethicsDesc")) {
            const newParagraphs = [
                "A “kill or be killed” virtual death game raises profound ethical and moral dilemmas. Unlike ordinary video games, where death is make-believe, a real SAO situation means every action has life-and-death consequences. Players could no longer treat killing as “just a game” or morally neutral. As Oculus founder Palmer Luckey noted when discussing raising the stakes of VR, tying a person’s real life to their avatar “instantly raise[s] the stakes to the maximum level and force[s] people to fundamentally rethink how they interact” in the virtual world​ (Gault et al.). In other words, once in-game murder equates to real murder, participants would likely behave far more cautiously and view ethical lines (like not killing innocents) much more seriously. The virtual environment stops being a consequence-free playground and instead becomes a true moral arena.",
                "Moral decision-making would likely shift under these extreme conditions. Players trapped in a lethal game face the ultimate ethical test: self-preservation versus compassion. Some individuals might revert to a survivalist mentality, akin to what philosopher Thomas Hobbes described as the “state of nature” – a lawless state where normal rules collapse and it’s “every man for himself.” In such a scenario, killing another player might be rationalized as self-defense or a necessity to survive. Indeed, psychological research on life-threatening dilemmas shows that when people are under dire threat, their moral reasoning can shift. However, not everyone would become a ruthless killer. Studies suggest that being immersed in a realistic scenario can actually heighten empathy. In one experiment, participants who experienced a moral dilemma in immersive VR were more concerned about not harming a virtual person (showing empathy for the individual in front of them) than participants who only read the scenario on paper​ (Terbeck et al.). This indicates that the presence of others (even virtual avatars) and the visceral realism of the situation could trigger players’ conscience and altruism – some may choose to help each other or refuse to kill, even at great personal risk, due to moral conviction.",
                "On the other hand, the game’s high-stakes pressure and structure could erode conventional morality for many. Psychology offers insights from situations like the Stanford Prison Experiment and fictional scenarios like <em>Squid Game</em>. Under extreme stress and group dynamics, people might do things they’d never contemplate otherwise. <em>Squid Game</em> (a deadly competition in a TV series) illustrated how anonymity and deindividuation can facilitate cruelty: masked guards in identical uniforms felt less individual responsibility and more inclined to follow orders, enabling them to kill “innocent people in cold blood” as part of the group​ (Jern). In a real SAO, players might similarly hide behind avatars or group allegiances, making it easier to justify violence. The fear of death can also trigger tunnel vision – fight-or-flight responses that bypass moral reflection. According to the Yerkes-Dodson law in psychology, a moderate level of stress can enhance performance, but extreme stress severely impairs judgment and leads to panic or “choking”​ (Jern). Translated to SAO: the ever-present terror of immediate death could drive some to panic killings or betrayal, acts they’d never consider in calm circumstances. Moral rules of engagement might deteriorate as rational strategy gives way to raw instinct."
            ];
            const contentSection = document.querySelector(".content");
            if (contentSection) {
                const pTags = contentSection.querySelectorAll("p");
                for (let i = 1; i < 4 && i < pTags.length; i++) {
                    pTags[i].innerHTML = newParagraphs[i - 1];
                }
            }
        }

        // Translate Society's Reaction Page Body Paragraphs
        if (lang === "es" && document.getElementById("societyDesc")) {
            const newParagraphs = [
                "<strong>Jugadores y familias:</strong> Las personas atrapadas en el juego VR mortal y sus seres queridos experimentarían terror y angustia. Las familias exigirían acciones inmediatas y acudirían a los medios de comunicación con súplicas públicas. Los jugadores, una vez liberados, podrían sufrir traumas a largo plazo como PTSD o culpa del sobreviviente. Aunque podrían ser considerados héroes, necesitarían apoyo psicológico significativo. La sociedad tendería a mostrar compasión y organizar vigilias, redes de apoyo y donaciones para las víctimas.",
                "<strong>Público general:</strong> Para el resto del mundo, un escenario como SAO sería tanto aterrador como fascinante. Habría cobertura de noticias constante y opiniones divididas entre empatía y pánico moral. Muchas personas ya temen las nuevas tecnologías — un desastre como este validaría esos temores. La gente exigiría prohibiciones, nuevos controles, y algunos verían paralelismos con distopías. Las redes sociales se llenarían de teorías, culpas a las empresas de videojuegos, y homenajes en línea. Esta tragedia podría disparar una nueva tecnofobia, pero también despertar solidaridad global.",
                "<strong>Gobiernos y fuerzas del orden:</strong> Tratarían esto como una emergencia internacional. A diferencia del mundo ficticio de SAO donde los gobiernos reaccionan lentamente, en la vida real las agencias como el FBI o la policía nacional intervendrían rápidamente. Crearían grupos especiales con ingenieros y expertos en ciberseguridad para encontrar una salida segura sin activar protocolos de muerte. Se emitirían órdenes ejecutivas para prohibir el equipo involucrado. Después, habría juicios, investigaciones y nuevas leyes que regularían severamente la tecnología VR. Como concluyó un análisis: después de miles de muertes, nadie volvería a confiar en esta tecnología sin una revisión exhaustiva."
            ];
            const contentSection = document.querySelector(".content");
            if (contentSection) {
                const pTags = contentSection.querySelectorAll("p");
                for (let i = 1; i < 4 && i < pTags.length; i++) {
                    pTags[i].innerHTML = newParagraphs[i - 1];
                }
            }
        }

        // Restore Society's Reaction Page English Paragraphs
        if (lang === "en" && document.getElementById("societyDesc")) {
            const newParagraphs = [
                "<strong>Players and Families:</strong> The individuals trapped in the VR death game and their loved ones would experience terror and anguish. Families of trapped players would likely demand immediate action from authorities and flood media with their pleas. The players themselves, once (or if) they escape, could suffer long-term trauma (PTSD, survivor’s guilt) akin to hostages or war survivors. They might be celebrated as heroes for enduring such an ordeal, but they would also need significant psychological support to recover from the life-or-death environment. Society tends to show immense compassion for victims of high-profile crises – we could expect vigils, support networks, and donations to help the victims and their families.",
                "<strong>General Public:</strong> For the broader public, a SAO scenario would be both horrifying and gripping. The news coverage would be wall-to-wall worldwide, with constant updates on the “virtual hostage crisis.” Public opinion would likely swing between empathy for the players and moral panic about the technology that enabled this. Remember that even in today’s world, many people “deeply fear and distrust” emerging technologies​ (Margolis) – often imagining worst-case scenarios about AI, VR, or the “metaverse.” A deadly VR incident would validate those fears overnight. We’d likely see widespread outrage and calls to “never let this happen again.” Comparisons might be drawn to past tragedies or science fiction come to life (headlines might literally say “Real-Life Sword Art Online”). Social media would erupt with debates: some users might blame the game industry or lax regulation; conspiracy theories might swirl; others would focus on the human stories of those trapped. Culturally, this could trigger a new techno-phobia in the public consciousness, similar to past moral panics about violent video games or dystopian AI – but amplified by the very real body count. In positive terms, we might also see solidarity – communities rallying in support of the victims, gamers worldwide possibly organizing online vigils in the virtual landscapes of other games to pay tribute or raise awareness.",
                "<strong>Governments and Law Enforcement:</strong> Governments would treat this as an international emergency and crime. In Sword Art Online, authorities in the story were surprisingly ineffectual at first, but in reality, no responsible government would simply sit by. Law enforcement agencies (from local police to national agencies like the FBI or Japan’s National Police) would mobilize to find the mastermind and free the players. They might collaborate with the game’s developers or hardware makers to find a technical backdoor or safe shutdown – though as SAO’s fiction showed, that’s perilous if the system is rigged to kill upon tampering. We would likely see an emergency task force – perhaps akin to a hostage rescue team but composed of cybersecurity experts and VR engineers – attempting to hack into or disable the death game without harming the participants. Military cyber-units could be involved if the perpetrator is highly sophisticated. In parallel, the political response would be swift. Expect new legislation or executive orders banning the use of the particular VR gear involved until it’s proven safe. If thousands of citizens are effectively held hostage, heads would roll in regulatory agencies for any oversight lapses. After the immediate crisis, there would be rigorous investigations and likely trials for the responsible individuals. It’s also probable that governments would enforce strict regulations on VR and neural interface technology moving forward. As one analysis noted, in SAO’s world it was bizarre that after 3,853 players died “the government allowed similar virtual worlds to develop again” – in reality, such an event would almost certainly make VR MMO games illegal or heavily regulated, because “after so many casualties, who would even begin to trust it?”​ (Margolis). In essence, regulators would hit the “emergency brake” on immersive VR tech – licensing, safety certifications, maybe even shutdowns of VR arcades or online worlds – at least until they could ensure no one could ever be trapped and endangered in this way again."
            ];
            const contentSection = document.querySelector(".content");
            if (contentSection) {
                const pTags = contentSection.querySelectorAll("p");
                for (let i = 1; i < 4 && i < pTags.length; i++) {
                    pTags[i].innerHTML = newParagraphs[i - 1];
                }
            }
        }

        // Translate Navigation Tabs
        document.querySelector("nav ul li:nth-child(1) a").textContent = translations[lang].navAbout;
        document.querySelector("nav ul li:nth-child(2) a").textContent = translations[lang].navTech;
        document.querySelector("nav ul li:nth-child(3) a").textContent = translations[lang].navEthics;
        document.querySelector("nav ul li:nth-child(4) a").textContent = translations[lang].navSociety;
        document.querySelector("nav ul li:nth-child(5) a").textContent = translations[lang].navWorksCited;
    }

    document.getElementById("englishBtn").addEventListener("click", () => switchLanguage("en"));
    document.getElementById("spanishBtn").addEventListener("click", () => switchLanguage("es"));

    document.addEventListener("DOMContentLoaded", function() {
        const englishBtn = document.getElementById("englishBtn");
        const spanishBtn = document.getElementById("spanishBtn");
    
        function setActiveLanguage(lang) {
            if (lang === "en") {
                englishBtn.classList.add("active-language");
                spanishBtn.classList.remove("active-language");
            } else {
                spanishBtn.classList.add("active-language");
                englishBtn.classList.remove("active-language");
            }
        }
    
        englishBtn.addEventListener("click", function() {
            setActiveLanguage("en");
            // Call your existing language switch function
        });
    
        spanishBtn.addEventListener("click", function() {
            setActiveLanguage("es");
            // Call your existing language switch function
        });
    
        // Set default active language to English when the page loads
        setActiveLanguage("en");
    });
});
