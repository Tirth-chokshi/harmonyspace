"use client"
import NavLinks from "./NavLinks";
import Image from 'next/image'
import NavBtn from "./NavBtn";


export default function DesktopNav() {
  return (
    <>
    <div className="desktop-nav-container border-b-2">
        <div className="logo">
        <Image src="/harmony_logo.png" width={200} height={20} alt="site-logo" />
        </div>
        <div className="links"><NavLinks/></div>
        <div className="buttons"><NavBtn/></div>
    </div>
    </>
    );
}
