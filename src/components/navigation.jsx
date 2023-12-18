import NavItem from "components/navItem"
import SubMenus from "components/subMenus"
import { navigationMenu } from "lib/constant"
import { cn } from "lib/utils"

export default function Navigation({ className }) {
  return (
    <>
      <ul className={cn("flex items-center gap-6 h-16 px-4", className)}>
        {navigationMenu.map(({ subMenus, ...props }, index) => (
          <li key={index} className="group/link">
            {subMenus ? (
              <>
                <SubMenus subMenus={subMenus} {...props} />
              </>
            ) : (
              <>
                <NavItem {...props} />
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  )
}
