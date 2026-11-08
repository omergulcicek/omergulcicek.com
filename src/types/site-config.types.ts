export type SiteConfig = {
  name: string
  shortName: string
  /** Wordmark shown in the header; the same in every locale. */
  handle: string
  description: string
  url: string
  apiUrl: string
  ogImage: string
  links: {
    github: string
    twitter: string
  }
}
