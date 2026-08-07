document.addEventListener("DOMContentLoaded", () => {
    const language = getEffectiveLanguage();
    document.documentElement.lang = language;
    applyTranslations();
});