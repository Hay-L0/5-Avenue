import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found section-shell">
      <span className="eyebrow">404 — Page not found</span>
      <h1>This page isn&apos;t here.</h1>
      <p>The address may have changed, or the page may no longer exist.</p>
      <Link className="button button-dark" href="/">Return home</Link>
    </section>
  );
}
