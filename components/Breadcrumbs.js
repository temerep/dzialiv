"use client"
import React, { useEffect, useState } from "react"
import { host } from "@/http";
import Link from "next/link"
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
  const [products, setProducts] = useState(null);
  const [services, setServices] = useState(null);
  const [subcategories, setSubcategories] = useState(null);

  useEffect(() => {
    host
      .get("api/product")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((e) => console.log(e.response.data.message));
  }, []);

  useEffect(() => {
    host
      .get("api/services")
      .then((response) => {
        setServices(response.data);
      })
      .catch((e) => console.log(e.response.data.message));
  }, []);

  useEffect(() => {
    host
      .get("api/subcategory")
      .then((response) => {
        setSubcategories(response.data);
      })
      .catch((e) => console.log(e.response.data.message));
  }, []);

  useEffect(() => {
    const allMenu = products?.concat(services)?.concat(subcategories);
    if (router) {
      const linkPath = router.split("/")
      linkPath.shift()

      const pathArray = linkPath.map((path, i) => {
        let item = allMenu?.find(el => el.link == path);
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