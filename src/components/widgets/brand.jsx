import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Brand = () => {
  return (
    <>
      <Link href="/">
        <section className="flex gap-2 rounded p-2 transition duration-75 active:scale-95">
          <Avatar>
            <AvatarImage
              src="https://media.licdn.com/dms/image/D4D03AQF2qvC-WxFb-Q/profile-displayphoto-shrink_400_400/0/1705353848344?e=1714608000&v=beta&t=VdYkeOZ5qWWBxenJLse0oes8B7CdNwmaxczuXpay4pk"
              alt="Ömer Gülçiçek"
            />
            <AvatarFallback>ÖG</AvatarFallback>
          </Avatar>

          <div className="flex flex-col text-sm">
            <strong className="font-semibold">Ömer Gülçiçek</strong>
            <span className="text-gray-600">Sr. Frontend Developer</span>
          </div>
        </section>
      </Link>
    </>
  )
}

export { Brand }
