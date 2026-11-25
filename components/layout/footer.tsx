import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <Link href="/" className="footer-brand">{siteConfig.name}</Link>
        <span>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</span>
        <Link href="#top">Back to top ↑</Link>
      </div>
    </footer>
  );
}
