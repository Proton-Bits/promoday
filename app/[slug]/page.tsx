import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LandingPage from "@/components/LandingPage";
import { sites, type SiteConfig, type SiteSlug } from "@/lib/sites";
import { resolverSite } from "@/lib/promozap-admin";

// perfumes-1/2/3 e achadinhos-1 têm entrada estática em lib/sites.ts — serve
// só de fallback se o promozap-admin estiver fora do ar. Slugs criados só
// pelo painel não têm fallback: se o admin não responder, a página 404.
function fallbackEstatico(slug: string): SiteConfig | null {
  return slug in sites ? sites[slug as SiteSlug] : null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const site = await resolverSite(slug, fallbackEstatico(slug));
  return { title: site?.pageTitle ?? "PromoZap" };
}

export default async function Page({
  params,
  searchParams,
}: Readonly<{
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ fbclid?: string }>;
}>) {
  const [{ slug }, { fbclid }] = await Promise.all([params, searchParams]);
  const site = await resolverSite(slug, fallbackEstatico(slug));
  if (!site) notFound();

  return <LandingPage site={site} trackingGroup={site.trackingGroup} slug={slug} fbclid={fbclid ?? null} />;
}
