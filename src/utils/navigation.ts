
const navBarLinks = [
  { name: "Accueil", url: "/" },
  { name: "Services", url: "/services" },
  // { name: "Partenaires", url: "/ressources" },
  { name: "À Propos", url: "/agence-elr" },
  { name: "Blog", url: "/blog" },
  { name: "Contact", url: "/contact" },
];

const footerLinks = [
  {
    section: "Écosystème",
    links: [
      // { name: "Documentation", url: "/fr/welcome-to-docs/" },
      // { name: "Outils et Équipements", url: "/ressources" },
      { name: "Explorez nos services", url: "/services" },
      { name: "Explorez nos forfaits", url: "/forfaits/gold" },
    ],
  },
  {
    section: "Société",
    links: [
      { name: "À propos de nous", url: "/agence-elr" },
      { name: "Blog", url: "/blog" },
      // { name: "Carrières", url: "#" },
      // { name: "Clients", url: "#" },
    ],
  },
];

const socialLinks = {
  facebook: "https://www.facebook.com/agenceelr",
  instagram: "https://www.instagram.com/agence.elr/",
  linkedin: "https://www.linkedin.com/company/agence-elr",

  // x: "#",
  // github: "https://elragency.com",
  // google: "#",
  // slack: "#",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};