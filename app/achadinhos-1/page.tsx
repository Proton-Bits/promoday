import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { sites } from "@/lib/sites";
import { resolverSite } from "@/lib/promozap-admin";

const fallback = sites["achadinhos-1"];

export const metadata: Metadata = {
  title: fallback.pageTitle,
};

export default async function Page({ searchParams }: { searchParams: Promise<{ fbclid?: string }> }) {
  const { fbclid } = await searchParams;
  const site = await resolverSite("achadinhos-1", fallback);

  return <LandingPage site={site} trackingGroup={site.trackingGroup} slug="achadinhos-1" fbclid={fbclid ?? null} />;
}
