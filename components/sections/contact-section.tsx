import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="section-shell contact-inner">
        <div>
          <span className="eyebrow">Start a conversation</span>
          <h2 className="section-heading">Let&apos;s make something happen.</h2>
          <p className="section-copy">
            Connect this call to action to the existing contact workflow once it has
            been mapped from the current website.
          </p>
        </div>
        <Link className="button button-light" href={`mailto:${siteConfig.contactEmail}`}>
          Contact us
        </Link>
      </div>
    </section>
  );
}
