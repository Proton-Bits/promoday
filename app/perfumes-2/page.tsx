import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { sites } from "@/lib/sites";

const site = sites["perfumes-2"];

export const metadata: Metadata = {
  title: site.pageTitle,
};

export default function Page() {
  return <LandingPage site={site} trackingGroup={site.trackingGroup} />;
}
