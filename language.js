document.addEventListener("DOMContentLoaded", () => {
  const userLang = localStorage.getItem("lang") || "en";

  const translations = {
    en: {
      "settings-title": "Settings & Privacy",
      "language-label": "🌐 Choose your preferred language:",
      "save-button": "Save Preferences",
      "language-status": "Your current language is: English",
      "faq-title": "FAQ's:",
      "faqText": "Welcome to the FAQ section!",
      "faq-q1": "Can you play this game alone?",
      "faq-a1": "Game Mash is designed for co-op play, where you control two unique characters with distinct abilities. While it's meant to be played with a friend for maximum fun, playing solo is definitely possible.",
      "faq-q2": "How many levels are there?",
      "faq-a2": "There are 3 main levels with unique environments, enemies, and challenges. Each one becomes more difficult as you progress.",
      "faq-q3": "When was this game released?",
      "faq-a3": "Released in 2025, Game Mash was developed by a group of students from Saint Xavier University.",
      "watch-showcase-title": "Watch Game Showcase:",
      "creators-title": "Get to Know the Creators:",
      "frontEnd-title": "Front End",
      "backend-title": "Backend",
      "pm-title": "Project Manager",
      "how-to-play-title": "How to Play:",
      "game-description-text": "In Game Mash, you take control of two quirky characters, each with their own unique powers and abilities. Imagine one being a delicious burger, ready to flip and sizzle, while the other could be anything from a quirky sidekick to an unpredictable element with special skills! Your goal is to work together, using the strengths of each character to overcome challenges, solve puzzles, and defeat any obstacles in your path. Whether it’s using the burger's tasty moves or the special abilities of the second character, teamwork and strategy are key to success! As you dive deeper into the game, you'll navigate through a variety of levels that test not just your reflexes, but also your logic and coordination. Encounter enemies that require combined efforts to defeat, levers that activate hidden doors, pressure plates that demand synchronized steps, and puzzles that challenge your perception and cooperation. One moment you might need to catapult a teammate across a fiery chasm, the next, time a button press with split-second accuracy to disable a trap. Game Mash isn’t just a game—it’s a chaotic, fun-filled experience that brings players together. Perfect your tag-team skills, master each character’s moves, and uncover secrets that reward the clever and the bold. Are you ready to mash your way to victory?",
      "welcome-text": "Welcome Back",
      "player-info": "Enter Player Info to Login",
      "email-placeholder": "Email",
      "password-placeholder": "Password",
      "login-button": "Login",
      "forgot-password": "Forgot your password?",
      "or-text": "Or",
      "google-signin": "Sign in with Google",
      "signup-text": "Don't have an account?",
      "signup-link": "Sign up!",
      "welcome-text2": "Welcome to the Community!",
      "share-thoughts-title": "Share Your Thoughts",
      "thought-input": "What's on your mind?",
      "post-button": "Post",
      "recent-thoughts-title": "Recent Thoughts",
      "join-discord-title": "Join Our Discord Server",
      "discord-description": "Stay connected with the community on Discord!",
      "discord-link": "Join Our Discord",
      "signup-heading": "Sign Up",
      "create-account-text": "Create your account",
      "first-name-placeholder": "First Name",
      "last-name-placeholder": "Last Name",
      "username-placeholder": "Username",
      "confirm-password-placeholder": "Confirm Password",
      "choose-avatar-title": "Choose Your Avatar",
      "signup-button": "Sign Up",
      "edit-profile-title": "Edit Profile",
      "update-profile-text": "Update your information",
      "save-changes-button": "Save Changes",
      "settings-title": "Settings",
      "graphics-label": "Graphics Quality:",
      "sound-label": "Sound Volume:",
      "music-label": "Music Volume:",
      "reset-button": "Reset to Default",
      "controls-title": "Controls:",
      "control-w": "W - Move Up",
      "control-s": "S - Move Down",
      "control-a": "A - Move Left",
      "control-d": "D - Move Right",
      "live-chat-title": "Live Chat:",
      "guest-message": "If you want people to see your profile, login/signup.",
      "chat-placeholder": "Type a message...",
      "send-button": "Send",
       "support-title": "Need Help?",
      "support-intro": "Use our virtual assistant on the bottom right or contact our team directly."
    },
    es: {
      "settings-title": "Configuración y Privacidad",
      "language-label": "🌐 Elige tu idioma preferido:",
      "save-button": "Guardar Preferencias",
      "language-status": "Tu idioma actual es: Español",
      "faq-title": "Preguntas Frecuentes:",
      "faqText": "¡Bienvenido a la sección de Preguntas Frecuentes!",
      "faq-q1": "¿Puedes jugar este juego solo?",
      "faq-a1": "Game Mash está diseñado para jugarse en modo cooperativo, pero también puedes jugar solo.",
      "faq-q2": "¿Cuántos niveles hay?",
      "faq-a2": "Hay 3 niveles principales con entornos únicos y enemigos desafiantes.",
      "faq-q3": "¿Cuándo se lanzó este juego?",
      "faq-a3": "Lanzado en 2025, Game Mash fue desarrollado por estudiantes de la Universidad Saint Xavier.",
      "watch-showcase-title": "Ver Presentación del Juego:",
      "creators-title": "Conoce a los Creadores:",
      "frontEnd-title": "Frontend",
      "backend-title": "Backend",
      "pm-title": "Gestor del Proyecto",
      "how-to-play-title": "Cómo Jugar:",
      "game-description-text": "En Game Mash, controlas a dos personajes extravagantes, cada uno con sus propios poderes y habilidades únicas. ¡Imagina que uno es una deliciosa hamburguesa, lista para voltear y chisporrotear, mientras que el otro podría ser cualquier cosa, desde un compañero peculiar hasta un elemento impredecible con habilidades especiales! Tu objetivo es trabajar en equipo, aprovechando las fortalezas de cada personaje para superar desafíos, resolver acertijos y derrotar cualquier obstáculo en tu camino. Ya sea usando los sabrosos movimientos de la hamburguesa o las habilidades especiales del segundo personaje, el trabajo en equipo y la estrategia son clave para el éxito. A medida que te adentras más en el juego, navegarás por una variedad de niveles que pondrán a prueba no solo tus reflejos, sino también tu lógica y coordinación. Enfrenta enemigos que requieren esfuerzos combinados para ser derrotados, palancas que activan puertas ocultas, placas de presión que exigen pasos sincronizados y acertijos que desafían tu percepción y cooperación. En un momento podrías necesitar catapultar a tu compañero a través de un abismo ardiente, y al siguiente, presionar un botón con precisión milimétrica para desactivar una trampa. Game Mash no es solo un juego: es una experiencia caótica y divertida que une a los jugadores. Perfecciona tus habilidades en equipo, domina los movimientos de cada personaje y descubre secretos que recompensan a los astutos y valientes. ¿Estás listo para hacer puré tu camino hacia la victoria?",
      "welcome-text": "¡Bienvenido de nuevo",
      "player-info": "Introduce la información del jugador para iniciar sesión",
      "email-placeholder": "Correo electrónico",
      "password-placeholder": "Contraseña",
      "login-button": "Iniciar sesión",
      "forgot-password": "¿Olvidaste tu contraseña?",
      "or-text": "O",
      "google-signin": "Inicia sesión con Google",
      "signup-text": "¿No tienes una cuenta?",
      "signup-link": "¡Regístrate!",
      "welcome-text2": "¡Bienvenido a la Comunidad!",
      "share-thoughts-title": "Comparte tus pensamientos",
      "thought-input": "¿Qué estás pensando?",
      "post-button": "Publicar",
      "recent-thoughts-title": "Pensamientos recientes",
      "join-discord-title": "Únete a nuestro servidor de Discord",
      "discord-description": "¡Mantente conectado con la comunidad en Discord!",
      "discord-link": "Únete a nuestro Discord",
      "signup-heading": "Regístrate",
      "create-account-text": "Crea tu cuenta",
      "first-name-placeholder": "Nombre",
      "last-name-placeholder": "Apellido",
      "username-placeholder": "Nombre de usuario",
      "confirm-password-placeholder": "Confirmar contraseña",
      "choose-avatar-title": "Elige tu avatar",
      "signup-button": "Regístrate",
      "edit-profile-title": "Editar Perfil",
      "update-profile-text": "Actualiza tu información",
      "save-changes-button": "Guardar Cambios",
      "settings-title": "Ajustes",
      "graphics-label": "Calidad de gráficos:",
      "sound-label": "Volumen de sonido:",
      "music-label": "Volumen de música:",
      "reset-button": "Restablecer a valores predeterminados",
      "controls-title": "Controles:",
      "control-w": "W - Mover hacia arriba",
      "control-s": "S - Mover hacia abajo",
      "control-a": "A - Mover a la izquierda",
      "control-d": "D - Mover a la derecha",
      "live-chat-title": "Chat en Vivo:",
      "guest-message": "Si quieres que la gente vea tu perfil, inicia sesión/regístrate.",
      "chat-placeholder": "Escribe un mensaje...",
      "send-button": "Enviar",
      "support-title": "¿Necesitas ayuda?",
      "support-intro": "Usa nuestro asistente virtual en la parte inferior derecha o contacta a nuestro equipo directamente."
    },
    fr: {
      "settings-title": "Paramètres et Confidentialité",
      "language-label": "🌐 Choisissez votre langue préférée :",
      "save-button": "Enregistrer les préférences",
      "language-status": "Votre langue actuelle est : Français",
      "faq-title": "FAQ :",
      "faqText": "Bienvenue dans la section FAQ !",
      "faq-q1": "Pouvez-vous jouer à ce jeu seul ?",
      "faq-a1": "Game Mash est conçu pour le jeu coopératif, mais il est également possible d'y jouer en solo.",
      "faq-q2": "Combien de niveaux y a-t-il ?",
      "faq-a2": "Il y a 3 niveaux principaux avec des environnements uniques et des ennemis difficiles.",
      "faq-q3": "Quand ce jeu a-t-il été publié ?",
      "faq-a3": "Sorti en 2025, Game Mash a été développé par des étudiants de l'université Saint Xavier.",
      "watch-showcase-title": "Regarder la Démonstration du Jeu :",
      "creators-title": "Faites Connaissance avec les Créateurs :",
      "frontEnd-title": "Frontend",
      "backend-title": "Backend",
      "pm-title": "Chef de Projet",
      "how-to-play-title": "Comment Jouer :",
      "game-description-text": "Dans Game Mash, vous prenez le contrôle de deux personnages excentriques, chacun avec ses propres pouvoirs et capacités uniques. Imaginez que l’un est un délicieux burger, prêt à grésiller et à être retourné, tandis que l’autre pourrait être un acolyte loufoque ou un élément imprévisible doté de compétences spéciales ! Votre objectif est de coopérer en utilisant les forces de chaque personnage pour surmonter des défis, résoudre des énigmes et vaincre tous les obstacles sur votre chemin. Qu’il s’agisse d’utiliser les mouvements savoureux du burger ou les capacités spéciales du second personnage, le travail d’équipe et la stratégie sont essentiels pour réussir ! En progressant dans le jeu, vous traverserez une variété de niveaux qui mettront à l’épreuve non seulement vos réflexes, mais aussi votre logique et votre coordination. Affrontez des ennemis qui exigent des efforts combinés, actionnez des leviers qui ouvrent des portes cachées, activez des plaques de pression qui demandent des pas synchronisés et résolvez des énigmes qui défient votre perception et votre coopération. À un moment donné, vous devrez peut-être catapulter un coéquipier par-dessus un gouffre enflammé, et le moment suivant, appuyer sur un bouton avec une précision absolue pour désactiver un piège. Game Mash n’est pas qu’un jeu : c’est une expérience chaotique et pleine de fun qui rassemble les joueurs. Perfectionnez vos compétences en duo, maîtrisez les mouvements de chaque personnage et découvrez des secrets qui récompensent les plus malins et audacieux. Êtes-vous prêt à écraser votre chemin vers la victoire ?",
      "welcome-text": "Bon retour",
      "player-info": "Entrez les informations du joueur pour vous connecter",
      "email-placeholder": "E-mail",
      "password-placeholder": "Mot de passe",
      "login-button": "Connexion",
      "forgot-password": "Mot de passe oublié ?",
      "or-text": "Ou",
      "google-signin": "Se connecter avec Google",
      "signup-text": "Vous n'avez pas de compte ?",
      "signup-link": "Inscrivez-vous !",
      "welcome-text2": "Bienvenue dans la communauté !",
      "share-thoughts-title": "Partagez vos pensées",
      "thought-input": "À quoi pensez-vous ?",
      "post-button": "Publier",
      "recent-thoughts-title": "Pensées récentes",
      "join-discord-title": "Rejoignez notre serveur Discord",
      "discord-description": "Restez connecté avec la communauté sur Discord !",
      "discord-link": "Rejoignez notre Discord",
      "signup-heading": "S'inscrire",
      "create-account-text": "Créez votre compte",
      "first-name-placeholder": "Prénom",
      "last-name-placeholder": "Nom de famille",
      "username-placeholder": "Nom d'utilisateur",
      "confirm-password-placeholder": "Confirmer le mot de passe",
      "choose-avatar-title": "Choisissez votre avatar",
      "signup-button": "S'inscrire",
      "edit-profile-title": "Modifier le Profil",
      "update-profile-text": "Mettez à jour vos informations",
      "save-changes-button": "Enregistrer les modifications",
      "settings-title": "Paramètres",
      "graphics-label": "Qualité des graphismes:",
      "sound-label": "Volume du son:",
      "music-label": "Volume de la musique:",
      "reset-button": "Réinitialiser par défaut",
      "controls-title": "Contrôles:",
      "control-w": "W - Monter",
      "control-s": "S - Descendre",
      "control-a": "A - Aller à gauche",
      "control-d": "D - Aller à droite",
      "live-chat-title": "Chat en Direct:",
      "guest-message": "Si vous voulez que les gens voient votre profil, connectez-vous/inscrivez-vous.",
      "chat-placeholder": "Tapez un message...",
      "send-button": "Envoyer",
      "support-title": "Besoin d'aide ?",
      "support-intro": "Utilisez notre assistant virtuel en bas à droite ou contactez directement notre équipe."
    }
  };

  const applyPlayTranslations = (lang) => {
    const langMap = translations[lang];
    if (!langMap) return;

    document.getElementById("settingsBtn").textContent = langMap["settings-title"];
    document.querySelector("label[for='graphicsQuality']").textContent = langMap["graphics-label"];
    document.querySelector("label[for='sound']").textContent = langMap["sound-label"];
    document.querySelector("label[for='music']").textContent = langMap["music-label"];
    document.getElementById("resetBtn").textContent = langMap["reset-button"];
    document.querySelector(".controls h2").textContent = langMap["controls-title"];

    const controlItems = document.querySelectorAll(".controls ul li");
    if (controlItems.length === 4) {
      controlItems[0].textContent = langMap["control-w"];
      controlItems[1].textContent = langMap["control-s"];
      controlItems[2].textContent = langMap["control-a"];
      controlItems[3].textContent = langMap["control-d"];
    }

    document.querySelector(".chat h2").textContent = langMap["live-chat-title"];
    document.querySelector(".guest-message").textContent = langMap["guest-message"];
    document.getElementById("chatInput").placeholder = langMap["chat-placeholder"];
    document.getElementById("sendBtn").textContent = langMap["send-button"];
  };

  const applyTranslations = (lang) => {
    const langMap = translations[lang];
    if (!langMap) return;

    Object.keys(langMap).forEach(key => {
      const el = document.getElementById(key);
      if (el) {
        if (el.tagName === "TEXTAREA" && el.placeholder !== undefined) {
          el.placeholder = langMap[key];
        } else if (el.tagName === "A") {
          el.textContent = langMap[key];
        } else if (!el.hasAttribute("data-translate-placeholder")) {
          el.textContent = langMap[key];
        }
      }
    });

    const inputs = document.querySelectorAll('input[data-translate-placeholder]');
    inputs.forEach(input => {
      const key = input.getAttribute('data-translate-placeholder');
      if (langMap[key]) {
        input.placeholder = langMap[key];
      }
    });
  };

  const languageSelect = document.getElementById("language-select");
  const statusMsg = document.getElementById("language-status");
  const saveBtn = document.getElementById("save-button");

  if (languageSelect) languageSelect.value = userLang;
  applyTranslations(userLang);
  applyPlayTranslations(userLang);

  if (saveBtn) {
    saveBtn.addEventListener("click", () => {
      const selectedLang = languageSelect.value;
      localStorage.setItem("lang", selectedLang);
      applyTranslations(selectedLang);
      applyPlayTranslations(selectedLang);
      if (statusMsg) {
        statusMsg.textContent = translations[selectedLang]["language-status"];
      }
      alert("Settings saved successfully!");
    });
  }
});