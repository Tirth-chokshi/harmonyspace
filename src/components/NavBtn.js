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
  import { ModeToggle } from "@/components/ModeToggle";
  import { Button } from "@/components/ui/button"

  
  export default function NavBtn () {
    return (
        <>
        <NavigationMenu>
  <NavigationMenuList>

    <NavigationMenuItem className="desktop-nav-btn">
    <Link href="/auth/log" legacyBehavior passHref>
    <NavigationMenuLink>
    <Button variant="secondary">Login</Button>
    </NavigationMenuLink>
  </Link>
  </NavigationMenuItem>
  <NavigationMenuItem className="desktop-nav-btn">
    <Link href="/auth/log" legacyBehavior passHref>
    <NavigationMenuLink>
    <Button variant="secondary">Register</Button>
    </NavigationMenuLink>
  </Link>
  </NavigationMenuItem>

  <NavigationMenuItem className="desktop-nav-btn">
        <ModeToggle/>
  </NavigationMenuItem>

  </NavigationMenuList>
</NavigationMenu>
</>
    )
  }