type ExperienceCompanyProps = {
  as: "h2" | "h3"
  company: string
  /** The brand or project, such as "Alışgidiş"; omitted when there is none. */
  parent: string | null
}

/** The company name, with its brand or project in muted text beside it. */
export function ExperienceCompany({ as: Heading, company, parent }: ExperienceCompanyProps) {
  return (
    // The full timeline's h2 entries carry more weight than the compact h3 rows.
    <Heading className={Heading === "h2" ? "text-base font-semibold" : "text-base font-medium"}>
      {company}
      {parent ? (
        <span className="text-sm font-normal text-muted-foreground"> · {parent}</span>
      ) : null}
    </Heading>
  )
}
