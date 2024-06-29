import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
  import * as React from "react"
  import Link from "next/link"
  
  export default function NavLinks () {
    return (
        <>
        <NavigationMenu>
  <NavigationMenuList>

    <NavigationMenuItem className="desktop-nav-link">
    <Link href="/home" legacyBehavior passHref>
    <NavigationMenuLink>
      HOME
    </NavigationMenuLink>
  </Link>
  </NavigationMenuItem>
  <NavigationMenuItem className="desktop-nav-link">
    <Link href="/auth/log" legacyBehavior passHref>
    <NavigationMenuLink>
      LOG
    </NavigationMenuLink>
  </Link>
  </NavigationMenuItem>
  <NavigationMenuItem className="desktop-nav-link">
    <Link href="/about" legacyBehavior passHref>
    <NavigationMenuLink>
      ABOUT
    </NavigationMenuLink>
  </Link>
  </NavigationMenuItem>

  </NavigationMenuList>
</NavigationMenu>
</>
    )
  }