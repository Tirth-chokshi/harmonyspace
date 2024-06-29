import { ModeToggle } from "@/components/ModeToggle";
import Image from 'next/image'

export default function DesktopNav() {
  return (
    <>
    <div className="desktop-nav-container">
        <div className="logo">
        <Image src="/icon.png" width={500} height={500} alt="site-logo" />
        </div>
        <div className="links">Links</div>
        <div className="buttons"><ModeToggle />Login</div>
    </div>
    </>
    );
}
