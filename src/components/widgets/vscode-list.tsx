import { AnimationListLayout } from "@/layouts/animation-list-layout";
import { vsCodeData } from "@/data/vsCodeData";

export function VSCodeList() {
  if (!vsCodeData) return null;

  return <AnimationListLayout data={vsCodeData} />;
}
