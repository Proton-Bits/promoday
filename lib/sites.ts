// Configuração central das landing pages da família PromoZap.
//
// Cada página compartilha o mesmo layout (components/LandingPage.tsx) e só
// varia por conteúdo, cor de destaque, mascote e link do grupo — é isso que
// permite ter várias páginas (perfumes, achadinhos, futuras verticais) sem
// duplicar HTML/CSS.
export type SiteConfig = {
  slug: string;
  /** <title> da aba do navegador. */
  pageTitle: string;
  brandName: string;
  logoSrc: string;
  logoAlt: string;
  headline: {
    top: string;
    bottomPre: string;
    highlight: string;
    bottomPost: string;
  };
  statsLeft: string;
  statsRight: string;
  subtitle: string;
  whatsappLink: string;
  /** Cor de destaque em hex, ex: "#F5C400". */
  accent: string;
  metaPixelId: string;
  footerTagline: string;
  trackingGroup?: "grupo_18_31" | "grupo_31_50" | "grupo_50_plus" | "achadinhos";
};

export const sites = {
  perfumes: {
    slug: "perfumes",
    pageTitle: "PromoZap Perfumes",
    brandName: "PromoZap Perfumes",
    logoSrc: "/logo-perfume.png",
    logoAlt: "PromoZap Perfumes",
    headline: {
      top: "Chega de pagar caro",
      bottomPre: "em ",
      highlight: "perfume",
      bottomPost: "!",
    },
    statsLeft: "100% gratuito",
    statsRight: "+10.000 membros",
    subtitle:
      "Receba as melhores promoções de perfumes 100% originais do Mercado Livre, direto no seu WhatsApp — de graça 🔥",
    whatsappLink: "https://chat.whatsapp.com/J5iJyofmKxaAvZmW7T9V4f?s=cl&p=a&ilr=1",
    accent: "#F5C400",
    metaPixelId: "1323630969748944",
    footerTagline: "📦👍 Afiliado oficial Mercado Livre · 100% gratuito · Links seguros",
    trackingGroup: "grupo_18_31",
  },
  "perfumes-2": {
    slug: "perfumes-2",
    pageTitle: "PromoZap Perfumes",
    brandName: "PromoZap Perfumes",
    logoSrc: "/logo-perfume.png",
    logoAlt: "PromoZap Perfumes",
    headline: {
      top: "Chega de pagar caro",
      bottomPre: "em ",
      highlight: "perfume",
      bottomPost: "!",
    },
    statsLeft: "100% gratuito",
    statsRight: "+10.000 membros",
    subtitle:
      "Receba as melhores promoções de perfumes 100% originais do Mercado Livre, direto no seu WhatsApp — de graça 🔥",
    // TODO: clone da página de perfumes para uma segunda origem de tráfego —
    // trocar pelo link do grupo/campanha específico desta página.
    whatsappLink: "https://chat.whatsapp.com/J5iJyofmKxaAvZmW7T9V4f?s=cl&p=a&ilr=1",
    accent: "#F5C400",
    metaPixelId: "1323630969748944",
    footerTagline: "📦👍 Afiliado oficial Mercado Livre · 100% gratuito · Links seguros",
    trackingGroup: "grupo_31_50",
  },
  "perfumes-3": {
    slug: "perfumes-3",
    pageTitle: "PromoZap Perfumes",
    brandName: "PromoZap Perfumes",
    logoSrc: "/logo-perfume.png",
    logoAlt: "PromoZap Perfumes",
    headline: {
      top: "Chega de pagar caro",
      bottomPre: "em ",
      highlight: "perfume",
      bottomPost: "!",
    },
    statsLeft: "100% gratuito",
    statsRight: "+10.000 membros",
    subtitle:
      "Receba as melhores promoções de perfumes 100% originais do Mercado Livre, direto no seu WhatsApp — de graça 🔥",
    // TODO: clone da página de perfumes para uma terceira origem de tráfego —
    // trocar pelo link do grupo/campanha específico desta página.
    whatsappLink: "https://chat.whatsapp.com/J5iJyofmKxaAvZmW7T9V4f?s=cl&p=a&ilr=1",
    accent: "#F5C400",
    metaPixelId: "1323630969748944",
    footerTagline: "📦👍 Afiliado oficial Mercado Livre · 100% gratuito · Links seguros",
    trackingGroup: "grupo_50_plus",
  },
  achadinhos: {
    slug: "achadinhos",
    pageTitle: "PromoZap Achadinhos",
    brandName: "PromoZap Achadinhos",
    logoSrc: "/mascote-hero.png",
    logoAlt: "PromoZap Achadinhos",
    headline: {
      top: "Ache os melhores",
      bottomPre: "",
      highlight: "achadinhos",
      bottomPost: " da internet!",
    },
    statsLeft: "100% gratuito",
    statsRight: "Vagas abertas",
    subtitle:
      "Receba os achadinhos mais baratos e virais do Mercado Livre, Shopee e AliExpress, direto no seu WhatsApp — de graça 🔥",
    // TODO: grupo novo — trocar pelo link real assim que criado.
    whatsappLink: "https://chat.whatsapp.com/SEU_LINK_AQUI",
    accent: "#FF5B27",
    metaPixelId: "1323630969748944",
    footerTagline: "🛍️👍 Curadoria diária de achadinhos · 100% gratuito · Links seguros",
    trackingGroup: "achadinhos",
  },
} as const satisfies Record<string, SiteConfig>;

export type SiteSlug = keyof typeof sites;
