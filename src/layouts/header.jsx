import Link from "next/link"

export default function Header() {
  return (
    <>
      <header>
        <ul>
          <li>
            <Link href="/">ana sayfa</Link>
          </li>
          <li>
            <Link href="/about">hakkında</Link>
          </li>
        </ul>
      </header>
    </>
  )
}
