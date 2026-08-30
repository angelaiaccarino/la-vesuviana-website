const navButtons = document.querySelectorAll(".nav-btn");
const pageLinks = document.querySelectorAll(".page-link");
const pages = document.querySelectorAll(".page");


// SEITEN NAVIGATION

function showPage(pageId) {

  pages.forEach((page) => {
    page.classList.remove("active");
  });

  navButtons.forEach((button) => {
    button.classList.remove("active");
  });

  const selectedPage = document.getElementById(pageId);

  if (selectedPage) {

    selectedPage.classList.add("active");

    window.history.replaceState(
      null,
      "",
      `#${pageId}`
    );

    setTimeout(() => {

      selectedPage.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    }, 50);

  }

  navButtons.forEach((button) => {

    if (button.dataset.page === pageId) {
      button.classList.add("active");
    }

  });

}


// NAVIGATION

navButtons.forEach((button) => {

  button.addEventListener("click", () => {

    const pageId = button.dataset.page;

    showPage(pageId);

  });

});


// LINKS INNERHALB DER SEITE

pageLinks.forEach((link) => {

  link.addEventListener("click", () => {

    const pageId = link.dataset.page;

    showPage(pageId);

  });

});


// URL HASH

window.addEventListener("load", () => {

  const hash =
    window.location.hash.replace("#", "");

  if (hash) {
    showPage(hash);
  }

});

// SPRACHEN DEUTSCH / ENGLISCH

const translations = {

  de: {

    // Navigation
    navHome: "Start",
    navAbout: "Über uns",
    navMenu: "Speisekarte",
    navOrder: "Bestellung",
    navGallery: "Galerie",
    navContact: "Kontakt",

    // Start
    heroTitle:
      "Echte neapolitanische Küche<br>in München",

    heroText:
      "Pizza, Pinsa, Pasta, Antipasti und italienische Spezialitäten – frisch zubereitet mit Leidenschaft und hochwertigen Zutaten.",

    viewMenu:
      "Speisekarte ansehen",

    contact:
      "Kontakt",

    // Über uns
    aboutTitle:
      "Über uns",

    aboutText1:
      "La Vesuviana 081 by Battista steht für authentische neapolitanische Küche und echte italienische Gastfreundschaft. Unser Ziel ist es, ein Stück Neapel nach München zu bringen.",

    aboutText2:
      "Bei uns werden traditionelle Rezepte mit frischen Zutaten und viel Leidenschaft zubereitet. Von neapolitanischer Pizza über knusprige Pinsa Romana bis zu Pasta, Fischgerichten, Panini und Burgern – jedes Gericht soll ehrlich, frisch und geschmackvoll sein.",

    aboutText3:
      "Wir freuen uns darauf, Sie bei uns begrüßen zu dürfen.",

    // Speisekarte
    menuTitle:
      "Speisekarte",

    menuGerman:
      "Speisekarte auf Deutsch",

    menuEnglish:
      "Menu in English",

    menuNotice:
      "Alle Preise inkl. gesetzlicher MwSt. Irrtümer und Änderungen vorbehalten.",

    allergens:
      "Allergene",

    allergenGI:
      "Glutenhaltiges Getreide / Weizen",

    allergenEgg:
      "Eier",

    allergenMilk:
      "Milch und Laktose",

    allergenSesame:
      "Sesam",

    allergenSoy:
      "Soja",

    allergenCrustaceans:
      "Krebstiere",

    allergenFish:
      "Fisch",

    allergenLupin:
      "Lupinen",

    allergenNuts:
      "Schalenfrüchte (Nüsse)",

    allergenMolluscs:
      "Weichtiere (Mollusken)",

    additives:
      "Zusatzstoffe",

    additive1:
      "Farbstoff",

    additive2:
      "Konservierungsstoff",

    additive3:
      "Antioxidationsmittel",

    additive4:
      "Geschmacksverstärker",

    additive5:
      "geschwefelt",

    additive6:
      "geschwärzt",

    additive7:
      "gewachst",

    additive8:
      "Phosphat",

    additive9:
      "Süßungsmittel",

    additive10:
      "enthält Phenylalaninquelle",

    allergenNotice:
      "Informationen zu Allergenen und Zusatzstoffen erhalten Sie auf Nachfrage bei unserem Personal. Kreuzkontaminationen können nicht vollständig ausgeschlossen werden.",


    // Bestellung
    orderTitle:
      "Bestellung",

    orderText:
      "Sie möchten Essen bestellen oder vorab reservieren? Rufen Sie uns einfach an.",

    callNow:
      "Jetzt anrufen",

    uberOrder:
      "🛵 Jetzt bei Uber Eats bestellen",

    woltOrder:
      "🛵 Jetzt bei Wolt bestellen (bald verfügbar)",

    lieferandoOrder:
      "🛵 Jetzt bei Lieferando bestellen",


    // Galerie
    galleryTitle:
      "Galerie",


    // Kontakt
    contactTitle:
      "Kontakt",

    address:
      "Adresse",

    phone:
      "Telefon:",

    openingHours:
      "Öffnungszeiten",

    summerHours:
      "Sommerzeit vom 01.06.-31.08",

    summerSchedule:
      "Montag 10:00 – 22:00 Uhr<br>" +
      "Dienstag 10:00 – 22:00 Uhr<br>" +
      "Mittwoch 10:00 – 22:00 Uhr<br>" +
      "Donnerstag 10:00 – 22:00 Uhr<br>" +
      "Freitag 10:00 – 22:00 Uhr<br>" +
      "Samstag Geschlossen<br>" +
      "Sonntag 10:00 – 22:00 Uhr",

    winterHours:
      "Winterzeit vom 01.09.-31.05",

    winterSchedule:
      "Montag 11:00 – 22:00 Uhr<br>" +
      "Dienstag Geschlossen<br>" +
      "Mittwoch 11:00 – 22:00 Uhr<br>" +
      "Donnerstag 11:00 – 22:00 Uhr<br>" +
      "Freitag 11:00 – 22:00 Uhr<br>" +
      "Samstag 11:00 – 22:00 Uhr<br>" +
      "Sonntag 11:00 – 22:00 Uhr",

    kitchenUntil:
      "Küche bis 21:30 Uhr",


    // Footer
    legalNotice:
      "Impressum",

    privacy:
      "Datenschutz",

    copyright:
      "© 2026 La Vesuviana 081 by Battista. Alle Rechte vorbehalten."

  },


  en: {

    // Navigation
    navHome:
      "Home",

    navAbout:
      "About Us",

    navMenu:
      "Menu",

    navOrder:
      "Order",

    navGallery:
      "Gallery",

    navContact:
      "Contact",


    // Start
    heroTitle:
      "Authentic Neapolitan Cuisine<br>in Munich",

    heroText:
      "Pizza, Pinsa, Pasta, Antipasti and Italian specialties – freshly prepared with passion and high-quality ingredients.",

    viewMenu:
      "View Menu",

    contact:
      "Contact",


    // About us
    aboutTitle:
      "About Us",

    aboutText1:
      "La Vesuviana 081 by Battista stands for authentic Neapolitan cuisine and genuine Italian hospitality. Our goal is to bring a piece of Naples to Munich.",

    aboutText2:
      "We prepare traditional recipes with fresh ingredients and plenty of passion. From Neapolitan pizza and crispy Pinsa Romana to pasta, fish dishes, panini and burgers – every dish is prepared to be authentic, fresh and full of flavour.",

    aboutText3:
      "We look forward to welcoming you.",


    // Menu
    menuTitle:
      "Menu",

    menuGerman:
      "Menu in German",

    menuEnglish:
      "Menu in English",

    menuNotice:
      "All prices include statutory VAT. Errors and changes reserved.",

    allergens:
      "Allergens",

    allergenGI:
      "Cereals containing gluten / wheat",

    allergenEgg:
      "Eggs",

    allergenMilk:
      "Milk and lactose",

    allergenSesame:
      "Sesame",

    allergenSoy:
      "Soy",

    allergenCrustaceans:
      "Crustaceans",

    allergenFish:
      "Fish",

    allergenLupin:
      "Lupin",

    allergenNuts:
      "Tree nuts",

    allergenMolluscs:
      "Molluscs",

    additives:
      "Additives",

    additive1:
      "Colouring",

    additive2:
      "Preservative",

    additive3:
      "Antioxidant",

    additive4:
      "Flavour enhancer",

    additive5:
      "Sulphurised",

    additive6:
      "Blackened",

    additive7:
      "Waxed",

    additive8:
      "Phosphate",

    additive9:
      "Sweetener",

    additive10:
      "Contains a source of phenylalanine",

    allergenNotice:
      "Information about allergens and additives is available from our staff upon request. Cross-contamination cannot be completely ruled out.",


    // Order
    orderTitle:
      "Order",

    orderText:
      "Would you like to order food or make a reservation in advance? Simply give us a call.",

    callNow:
      "Call Now",

    uberOrder:
      "🛵 Order with Uber Eats",

    woltOrder:
      "🛵 Order with Wolt (coming soon)",

    lieferandoOrder:
      "🛵 Order with Lieferando",


    // Gallery
    galleryTitle:
      "Gallery",


    // Contact
    contactTitle:
      "Contact",

    address:
      "Address",

    phone:
      "Phone:",

    openingHours:
      "Opening Hours",

    summerHours:
      "Summer hours from 01 June to 31 August",

    summerSchedule:
      "Monday 10:00 – 22:00<br>" +
      "Tuesday 10:00 – 22:00<br>" +
      "Wednesday 10:00 – 22:00<br>" +
      "Thursday 10:00 – 22:00<br>" +
      "Friday 10:00 – 22:00<br>" +
      "Saturday Closed<br>" +
      "Sunday 10:00 – 22:00",

    winterHours:
      "Winter hours from 01 September to 31 May",

    winterSchedule:
      "Monday 11:00 – 22:00<br>" +
      "Tuesday Closed<br>" +
      "Wednesday 11:00 – 22:00<br>" +
      "Thursday 11:00 – 22:00<br>" +
      "Friday 11:00 – 22:00<br>" +
      "Saturday 11:00 – 22:00<br>" +
      "Sunday 11:00 – 22:00",

    kitchenUntil:
      "Kitchen open until 21:30",


    // Footer
    legalNotice:
      "Legal Notice",

    privacy:
      "Privacy Policy",

    copyright:
      "© 2026 La Vesuviana 081 by Battista. All rights reserved."

  }

};

// SPRACHE WECHSELN

function changeLanguage(lang) {

  document
    .querySelectorAll("[data-i18n]")
    .forEach((element) => {

      const key =
        element.dataset.i18n;

      if (
        translations[lang] &&
        translations[lang][key]
      ) {

        element.innerHTML =
          translations[lang][key];

      }

    });


  // Sprache des HTML-Dokuments ändern

  document.documentElement.lang = lang;


  // Sprache speichern

  localStorage.setItem(
    "language",
    lang
  );


  // Aktiven Sprachbutton markieren

  document
    .querySelectorAll(".lang-btn")
    .forEach((button) => {

      button.classList.toggle(
        "active",
        button.dataset.lang === lang
      );

    });

}

// SPRACHBUTTONS

document
  .querySelectorAll(".lang-btn")
  .forEach((button) => {

    button.addEventListener(
      "click",
      () => {

        changeLanguage(
          button.dataset.lang
        );

      }
    );

  });



// GESPEICHERTE SPRACHE LADEN

const savedLanguage =
  localStorage.getItem("language") || "de";

changeLanguage(savedLanguage);