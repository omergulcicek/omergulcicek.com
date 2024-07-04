import { AnimationListLayout } from "@/layouts/animation-list-layout";
import { feyzData } from "@/data/feyz-data";

export function FeyzList() {
  if (!feyzData) return null;

  return <AnimationListLayout data={feyzData} />;
}
