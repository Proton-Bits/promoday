import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { sites } from "@/lib/sites";
import { resolverSite } from "@/lib/promozap-admin";

const fallback = sites["perfumes-3"];

export const metadata: Metadata = {
  title: fallback.pageTitle,
};

export default async function Page({ searchParams }: { searchParams: Promise<{ fbclid?: string }> }) {
  const { fbclid } = await searchParams;
  const site = await resolverSite("perfumes-3", fallback);

  return <LandingPage site={site} trackingGroup={site.trackingGroup} slug="perfumes-3" fbclid={fbclid ?? null} />;
}
