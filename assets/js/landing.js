function loadLanding(appId) {
    const app = Apps[appId];
    if (app.seo) {
        document.title = app.seo.title;
        const updateMeta = (selector, value) => {
            const meta = document.querySelector(selector);
            if (meta && value) {
                meta.setAttribute("content", value);
            }
        };

        updateMeta('meta[name="description"]', app.seo.description);
        updateMeta('meta[property="og:title"]', app.seo.title);
        updateMeta('meta[property="og:description"]', app.seo.description);
        updateMeta('meta[property="og:image"]', app.seo.image);
        updateMeta('meta[name="twitter:title"]', app.seo.title);
        updateMeta('meta[name="twitter:description"]', app.seo.description);
        updateMeta('meta[name="twitter:image"]', app.seo.image);
        updateMeta('meta[property="og:url"]', app.seo.url);
    }

    if (!app) {
        console.error("App not found:", appId);
        return;
    }
    const container =
        document.getElementById("appLanding");
    container.innerHTML = `
<section class="app-hero sport-theme"
style="--app-color:${app.themeColor}">

<div class="app-header-container">
<img src="${app.header}" class="app-header-image" alt="${app.name}">
</div>


<h1 style="color:${app.themeColor}">${app.heroTitle}</h1>
<p>${app.heroDescription}</p>

<div class="app-buttons">


${app.playStore && app.playStore !== "#" ? `

<a href="${app.playStore}"
class="google-play-badge"
target="_blank">
<img 
src="assets/images/store/google_play.svg"
alt="Get ${app.name} on Google Play">
</a>
` : `

<div class="coming-soon-badge">
<span class="material-symbols-outlined">
schedule
</span>
Coming soon on Google Play
</div>
`}

<a href="${app.webApp}" class="app-button web-button" target="_blank">
<span class="material-symbols-outlined">language</span>Open Web App
</a>

</div>
</section>

<section class="app-screenshots">

<h2>See ${app.name} in action</h2>

<div class="screenshots-container">

${app.screenshots.map(img => `

<img src="${img}" alt="${app.name} screenshot">

`).join("")}

</div>
</section>

<section class="app-section">
<img src="${app.logo}" class="app-logo" alt="${app.name}">
<h2>${app.introTitle || ""}</h2>
<p>${app.introText || ""}</p>
</section>

<section class="features-section">

<h2>Powerful Features</h2>

<div class="features-grid">

${app.features.map(feature => `

<div class="feature-card">
<span class="material-symbols-outlined">${feature.icon}</span>
<h3>${feature.title}</h3>
<p>${feature.text}</p>
</div>

`).join("")}


</div>

</section>

<section class="app-section">
<h2>Perfect For</h2>
<div class="sport-categories">
${app.perfectFor.map(item => {
        const parts = item.split(" ");
        const icon = parts.shift();
        const title = parts.join(" ");
        
        return `
    <div>
        <span class="category-icon">${icon}</span>
        <h3>${title}</h3>
    </div>
    `;

    }).join("")}
</div>
</section>

<section class="app-section how-it-works">

<h2>How it works</h2>

<div class="features-grid">
${(app.howItWorks || []).map(step => `
<div class="feature-card">
<span class="material-symbols-outlined">${step.icon}</span>
<h3>${step.title}</h3>
<p>${step.text}</p>
</div>
`).join("")}
</div>
</section>

<section class="faq-section">
<h2>Frequently Asked Questions</h2>

${app.faq.map(item => `

<h3>${item.q}</h3>
<p>${item.a}</p>

`).join("")}

</section>


<section class="final-cta" style="background:${app.themeColor};color:white">

<h2>${app.ctaTitle || "Ready to get started?"}</h2>
<p>${app.ctaText || ""}</p>

${app.playStore && app.playStore !== "#" ? `

<a href="${app.playStore}"
class="google-play-badge"
target="_blank">
<img 
src="assets/images/store/google_play.svg"
alt="Get ${app.name} on Google Play">
</a>
` : `

<div class="coming-soon-badge">
<span class="material-symbols-outlined">
schedule
</span>
Coming soon on Google Play
</div>
`}
</section>

<section class="other-apps">
<h2>Discover other App Checklist apps</h2>

<div class="other-apps-grid">


${(app.relatedApps || []).map(id => {
        const related = Apps[id];

        return `

<a  href="${id}.html" class="other-app-card" style="--app-color:${related.themeColor}">
<img  src="${related.icon}" alt="${related.name}">
<h3>${related.name}</h3>
</a>

`;

    }).join("")}

</div>

</section>
`;
}