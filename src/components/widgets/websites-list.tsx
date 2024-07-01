import { AnimationListLayout } from "@/layouts/animation-list-layout";
import { webSitesData } from "@/data/webSitesData";

export function WebSitesList() {
  if (!webSitesData) return null;

  return (
    <div className="flex flex-col gap-4">
      <AnimationListLayout data={webSitesData} />
    </div>
  );
}
