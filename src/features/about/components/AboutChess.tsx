import type { ReactNode } from "react"

import { emphasisTags } from "@/components/shared/emphasis-tags"
import { ProseLink } from "@/components/shared/ProseLink"
import { RichMessage } from "@/components/shared/RichMessage"
import { AboutHobby } from "@/features/about/components/AboutHobby"
import * as m from "@/paraglide/messages.js"

const CHESS_PROFILE_URL = "https://chess.com/member/omergulcicek"

export function AboutChess() {
  const tags: Record<string, (chunk: string) => ReactNode> = {
    ...emphasisTags,
    chess: (chunk) => <ProseLink href={CHESS_PROFILE_URL}>{chunk}</ProseLink>
  }

  return (
    <AboutHobby title={m.about_chess_title()}>
      <p>
        <RichMessage message={m.about_chess_body()} tags={tags} />
      </p>
    </AboutHobby>
  )
}
