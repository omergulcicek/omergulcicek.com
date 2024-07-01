import { AnimationListLayout } from "@/layouts/animation-list-layout";
import { webSitesData } from "@/data/webSitesData";

export function WebSitesList() {
  if (!webSitesData) return null;

  return <AnimationListLayout data={webSitesData} />;
}
