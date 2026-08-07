
const HomeContent = {
    title: "Smart checklist apps for every moment",
    description: "Organize sports equipment, trips and shopping with simple and powerful checklist apps.",
    appsTitle: "Our apps"
};

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("apps-container");
    if (!container || typeof Apps === "undefined") {
        return;
    }
    document.getElementById("home-title").textContent =
        HomeContent.title;
    document.getElementById("home-description").textContent =
        HomeContent.description;
    document.getElementById("our-apps").textContent =
        HomeContent.appsTitle;

    Object.values(Apps).forEach(app => {
        const article = document.createElement("article");
        article.className = `card app-card ${app.id}`;

        const statusClass =
            app.status === "coming_soon"
                ? "coming"
                : "available";

        article.innerHTML = `
            <img src="${app.icon}" class="app-icon" alt="${app.name}">
            
            <span class="app-status ${statusClass}">${app.statusLabel}</span>
            
            <p>${app.shortDescription}</p>
            
            <a href="${app.seo.url}" class="discover-button ${app.id}">
                Discover ${app.name}
            </a>
        `;

        container.appendChild(article);
    });
});