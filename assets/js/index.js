document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("apps-container");
    if (!container || typeof Apps === "undefined") {
        return;
    }

    const language = getEffectiveLanguage();
    document.getElementById("home-title").textContent = translations[language].home.title;
    document.getElementById("home-description").textContent = translations[language].home.description;
    document.getElementById("our-apps").textContent = translations[language].home.appsTitle;

    Object.values(Apps).forEach(app => {
        const article = document.createElement("article");
        article.className = `card app-card ${app.id}`;

        const statusClass =
            app.status === "coming_soon"
                ? "coming"
                : "available";
        const language = getEffectiveLanguage();
        const appTranslation = translations[language].apps[app.id];
        article.innerHTML = `
    <img src="${app.icon}" class="app-icon" alt="${appTranslation.title}">
    
    <!--span class="app-status ${statusClass}">${appTranslation.status}</span-->
    
    <p>${appTranslation.description}</p>
    
    <a href="${app.seo.url}" class="discover-button ${app.id}">
        ${translations[language].apps.button} ${appTranslation.title}
    </a>
`;

        container.appendChild(article);
    });
});