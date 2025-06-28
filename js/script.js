    document.getElementById("year").textContent = new Date().getFullYear();

    const translations = {
      ru: {
        title: "Привет, я Рамик — начинающий фронтенд разработчик",
        subtitle: "Пишу интерфейсы на HTML, CSS и JS. Стараюсь создавать качественные, адаптивные и продуманные UI.",
        p1_title: "Weather App ( пока не готов )",
        p1_desc: "Приложение для прогноза погоды с использованием OpenWeather API. Используются Fetch, адаптивный дизайн и localStorage.",
        p1_btn: "Смотреть проект",
        p2_title: "Сайт-портфолио ( → этот сайт ← )",
        p2_desc: "Полностью адаптивный сайт с анимацией, чистым схематическим HTML/CSS кодом.",
        p2_btn: "Смотреть проект",
        p3_title: "Todo-Manager",
        p3_desc: "Простой менеджер задач с достаточно функциональным интерфейсом, создавайте задачи и следите за временем. JS без библиотек.",
        p3_btn: "Смотреть проект"
      },
      en: {
        title: "Hi, I'm Ramik - Beginner Frontend Developer",
        subtitle: "I build interfaces with HTML, CSS, and JS. I really try to create high-quality, adaptive and well-thought-out UI.",
        p1_title: "Weather App ( still in beta )",
        p1_desc: "A weather forecast app using OpenWeather API, with Fetch, responsive design, and localStorage.",
        p1_btn: "View Project",
        p2_title: "Portfolio-Website ( → this website ← )",
        p2_desc: "Fully responsive website with animation and clean HTML/CSS code.",
        p2_btn: "View Project",
        p3_title: "Todo-Manager",
        p3_desc: "Simple task manager with a fairly functional interface, create tasks and track time. JS without libraries.",
        p3_btn: "View Project"
      }
    };

    function switchLang(lang) {
      const t = translations[lang];
      document.getElementById('title').textContent = t.title;
      document.getElementById('subtitle').textContent = t.subtitle;
      document.getElementById('p1-title').textContent = t.p1_title;
      document.getElementById('p1-desc').textContent = t.p1_desc;
      document.getElementById('p1-btn').textContent = t.p1_btn;
      document.getElementById('p2-title').textContent = t.p2_title;
      document.getElementById('p2-desc').textContent = t.p2_desc;
      document.getElementById('p2-btn').textContent = t.p2_btn;
      document.getElementById('p3-title').textContent = t.p3_title;
      document.getElementById('p3-desc').textContent = t.p3_desc;
      document.getElementById('p3-btn').textContent = t.p3_btn;
    }