"use client";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

// O clique leva o usuário para fora do site (chat.whatsapp.com). Disparar o
// evento via navegação direta do <a href> roda no mesmo instante em que o
// navegador já está saindo da página — em conexões lentas ou no navegador
// in-app do Instagram/Facebook (que é o que abre ao clicar no anúncio), o
// pedido de rede do Pixel pode não terminar de ser enviado, e o evento se
// perde. Por isso: abre a aba primeiro (precisa rodar dentro do clique do
// usuário, senão vira pop-up bloqueado) e só then dispara o Pixel — a aba
// original continua viva tempo suficiente pro request completar.
export default function WhatsappButton({
  href,
  children,
}: Readonly<{
  href: string;
  children: React.ReactNode;
}>) {
  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    window.open(href, "_blank");
    window.fbq?.("track", "Contact");
  }

  return (
    <a href={href} className="btn-whats" onClick={handleClick}>
      {children}
    </a>
  );
}
