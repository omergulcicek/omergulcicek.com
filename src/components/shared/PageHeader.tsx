type PageHeaderProps = {
  title: string
  description: string
}

/** The page's h1 and one-line intro, shared by every inner page. */
export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <header className="flex flex-col gap-2">
      <h1 className="text-3xl font-semibold tracking-tight text-balance">{title}</h1>
      <p className="text-base text-muted-foreground">{description}</p>
    </header>
  )
}
