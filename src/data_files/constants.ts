import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "L'agence ELR",
  tagline: "Ensemble, modernisons votre enteprise pour augmenter votre liberté",
  description: "Votre entreprise mérite une présence en ligne exceptionnelle. Nous nous engageons à transformer cette vision en réalité avec nos solutions web complètes. Imaginez un site web non seulement performant mais également conçu sur mesure pour attirer et fidéliser une clientèle plus large et plus engagée.",
  description_short: "Une croissance accélérée, le temps à investir réduit, une entreprise en autopilote; voici notre promesse.",
  url: "https://elragency.com",
  author: "Agence ELR",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Hardware Tools & Construction Services`,
  description: "Equip your projects with ScrewFast's top-quality hardware tools and expert construction services. Trusted by industry leaders, ScrewFast offers simplicity, affordability, and reliability. Experience the difference with user-centric design and cutting-edge tools. Start exploring now!",
  image: ogImageSrc,
};
