const translations = {
  fr: {
    title: "L'Énigme de rdvptrwjeiptwpes",
    intro: "Un événement historique mystérieux et fascinant, entouré de légendes et de mystères.",
    aboutTitle: "Qu'est-ce que rdvptrwjeiptwpes ?",
    aboutText: "Le rdvptrwjeiptwpes est un événement historique survenu en 1325, au cœur d'une petite vallée isolée. Cet événement, souvent qualifié de fantastique, aurait bouleversé les équilibres sociaux, politiques et environnementaux de la région.",
    theoriesTitle: "Les théories autour de rdvptrwjeiptwpes",
    theory1: "Une intervention divine : Certains croyants y voient un acte des dieux pour punir ou récompenser les habitants de la vallée.",
    theory2: "Un phénomène naturel inexpliqué : Une éruption volcanique, un tremblement de terre ou un phénomène météorologique extrême pourrait être à l'origine des récits.",
    theory3: "Une civilisation oubliée : Des traces d'une civilisation avancée qui aurait laissé une empreinte indélébile sur la région.",
    changelogTitle: "Changelog",
    createdBy: "Créé par Laro1602"
  },
  en: {
    title: "The Mystery of rdvptrwjeiptwpes",
    intro: "A mysterious and fascinating historical event, surrounded by legends and enigmas.",
    aboutTitle: "What is rdvptrwjeiptwpes?",
    aboutText: "The rdvptrwjeiptwpes is a historical event that occurred in 1325 in a secluded valley. This event, often described as fantastical, is said to have disrupted the social, political, and environmental balance of the region.",
    theoriesTitle: "Theories about rdvptrwjeiptwpes",
    theory1: "Divine intervention: Some believe it was an act of gods to punish or reward the inhabitants of the valley.",
    theory2: "An unexplained natural phenomenon: A volcanic eruption, earthquake, or extreme weather event might explain the tales.",
    theory3: "A forgotten civilization: Evidence of an advanced civilization that left an indelible mark on the region.",
    changelogTitle: "Changelog",
    createdBy: "Created by Laro1602"
  }
};

function switchLanguage(lang) {
  document.getElementById("title").textContent = translations[lang].title;
  document.getElementById("intro").textContent = translations[lang].intro;
  document.getElementById("aboutTitle").textContent = translations[lang].aboutTitle;
  document.getElementById("aboutText").textContent = translations[lang].aboutText;
  document.getElementById("theoriesTitle").textContent = translations[lang].theoriesTitle;
  document.getElementById("theory1").textContent = translations[lang].theory1;
  document.getElementById("theory2").textContent = translations[lang].theory2;
  document.getElementById("theory3").textContent = translations[lang].theory3;
  document.getElementById("changelogTitle").textContent = translations[lang].changelogTitle;
  document.getElementById("createdBy").textContent = translations[lang].createdBy;
}
