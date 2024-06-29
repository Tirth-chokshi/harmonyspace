import { ModeToggle } from "@/components/ModeToggle";

export default function DesktopNav() {
  return (
    <>
    <div className="desktop-nav-container">
        <div className="logo">Logo</div>
        <div className="links">Links</div>
        <div className="buttons"><ModeToggle /></div>
    </div>
    </>
    );
}
