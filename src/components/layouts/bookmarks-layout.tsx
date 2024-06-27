import Container from "@/shared/container";
import Title from "@/ui/title";

export default function BookmarksLayout({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <Container className="mt-10 md:mt-24 max-w-2xl">
      <Title tag="h2">{title}</Title>
      <Title tag="h3">{subtitle}</Title>

      <section>{children}</section>
    </Container>
  );
}
