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
  },
  spa: {
    title: "El misterio de rdvptrwjeiptwpes",
    intro: "Un acontecimiento histórico misterioso y fascinante, rodeado de leyendas y enigmas.",
    aboutTitle: "¿Qué es rdvptrwjeiptwpes?",
    aboutText: "El rdvptrwjeiptwpes es un hecho histórico que ocurrió en 1325 en un valle apartado. Se dice que este evento, a menudo descrito como fantástico, alteró el equilibrio social, político y ambiental de la región.",
    theoriesTitle: "Teorías sobre rdvptrwjeiptwpes",
    theory1: "Intervención divina: Algunos creen que fue un acto de los dioses para castigar o recompensar a los habitantes del valle.",
    theory2: "Un fenómeno natural inexplicable: una erupción volcánica, un terremoto o un fenómeno climático extremo podrían explicar los cuentos.",
    theory3: "Una civilización olvidada: Evidencias de una civilización avanzada que dejó una huella imborrable en la región.",
    changelogTitle: "Registro de cambios",
    createdBy: "Creado por Laro1602"
  },
  ar: {
    title: "سر rdvptrwjeiptwpes",
    intro: "حدث تاريخي غامض ورائع، محاط بالأساطير والألغاز.",
    aboutTitle: "ما هو rdvptrwjeiptwpes؟",
    aboutText: "يعد rdvptrwjeiptwpes حدثًا تاريخيًا حدث عام 1325 في وادي منعزل. ويقال إن هذا الحدث، الذي يوصف في كثير من الأحيان بأنه رائع، قد أخل بالتوازن الاجتماعي والسياسي والبيئي في المنطقة.",
    theoriesTitle: "نظريات حول rdvptrwjeiptwpes",
    theory1: "التدخل الإلهي: يعتقد البعض أنه كان من فعل الآلهة لمعاقبة أو مكافأة سكان الوادي.",
    theory2: "ظاهرة طبيعية غير مفسرة: انفجار بركاني أو زلزال أو حدث مناخي شديد يمكن أن يفسر القصص.",
    theory3: "حضارة منسية: دليل على حضارة متقدمة تركت بصمة لا تمحى في المنطقة.",
    changelogTitle: "تغيير السجل",
    createdBy: "تم إنشاؤها بواسطة لارو1602"
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
