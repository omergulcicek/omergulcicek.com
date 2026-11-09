type ExperienceCompanyProps = {
  as: "h2" | "h3"
  company: string
  /** "Fibabanka iştiraki"; omitted when the company has no parent. */
  parent: string | null
}

/** The company name, with its parent company in muted text beside it. */
export function ExperienceCompany({ as: Heading, company, parent }: ExperienceCompanyProps) {
  return (
    <Heading className="text-base font-semibold">
      {company}
      {parent ? (
        <span className="text-sm font-normal text-muted-foreground"> · {parent}</span>
      ) : null}
    </Heading>
  )
}
