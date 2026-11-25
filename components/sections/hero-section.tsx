import Link from "next/link";

export function HeroSection() {
  return (
    <section className="hero" id="top">
      <div className="hero-inner">
        <span className="eyebrow">Welcome to The 5th Avenue</span>
        <h1>A more thoughtful way to experience the extraordinary.</h1>
        <p>
          This is the starting point for the refreshed 5th Avenue experience.
          Replace this introductory copy with the website&apos;s approved brand message.
        </p>
        <div className="hero-actions">
          <Link href="#highlights" className="button button-light">Explore the experience</Link>
          <Link href="#contact" className="button button-light">Get in touch</Link>
        </div>
      </div>
    </section>
  );
}
