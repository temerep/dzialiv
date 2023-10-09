"use client"
import React, { useEffect, useState } from "react"
import Link from "next/link"
import { products, services, subcategories} from "@/app/config"
import { usePathname } from "next/navigation"

const Breadcrumbs = ({
  useDefaultStyle = false,
  rootLabel = "Home",
  omitRootLabel = false,
  labelsToUppercase = false,

  replaceCharacterList = [
    { from: "-", to: " " },
    { from: "_", to: " " }
  ],

  transformLabel = undefined,
  omitIndexList = undefined,
  inactiveItemStyle = null,
  inactiveItemClassName = "",
  activeItemClassName = "text-emerald-600"
}) => {
  const router = usePathname()
  const [breadcrumbs, setBreadcrumbs] = useState(null)

  useEffect(() => {
    const allMenu = products.concat(services).concat(subcategories);
    if (router) {
      const linkPath = router.split("/")
      linkPath.shift()

      const pathArray = linkPath.map((path, i) => {
        let item = allMenu.find(el => el.link == path);
        (item ? item = item.name : "");
        return {
          breadcrumb: item,
          href: "/" + linkPath.slice(0, i + 1).join("/")
        }
      })

      setBreadcrumbs(pathArray)
    }
  }, [router])

  if (!breadcrumbs) {
    return null
  }

  return (
    <nav
      className="mb-5"
      aria-label="breadcrumbs"
    >
      <ol
        className="flex"
      >
        {breadcrumbs.length >= 1 &&
          breadcrumbs.map((breadcrumb, i) => {
            if (
              !breadcrumb ||
              (omitIndexList && omitIndexList.find(value => value === i))
            ) {
              return
            }
            return (
              <li
                key={breadcrumb.href}
                className={(
                  i === breadcrumbs.length - 1
                    ? activeItemClassName
                    : inactiveItemClassName
            ) + " mx-2"}
              >
                <Link href={breadcrumb.href}>
                  {breadcrumb.breadcrumb}
                </Link>
                <span className="ml-2">|</span>
              </li>
            )
          })}
      </ol>
    </nav>
  )
}

export default Breadcrumbs