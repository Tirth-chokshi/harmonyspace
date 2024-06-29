"use client"
import { ModeToggle } from "@/components/ModeToggle";
import NavLinks from "./NavLinks";

export default function DesktopNav() {
  return (
    <>
    <div className="desktop-nav-container border-b-2">
        <div className="logo">Logo</div>
        <div className="links"><NavLinks/></div>
        <div className="buttons"><ModeToggle /></div>
    </div>
    </>
    );
}
