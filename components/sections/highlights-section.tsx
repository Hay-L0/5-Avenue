const highlights = [
  { number: "01", title: "Discover", copy: "Introduce a key offering, service, collection or experience here." },
  { number: "02", title: "Experience", copy: "Explain the value visitors receive and what makes it distinctive." },
  { number: "03", title: "Connect", copy: "Guide visitors toward the next meaningful action." }
];

export function HighlightsSection() {
  return (
    <section className="highlights-section" id="highlights">
      <div className="section-shell">
        <div className="section-top">
          <div>
            <span className="eyebrow">Explore</span>
            <h2 className="section-heading">Designed around the details.</h2>
          </div>
        </div>
        <div className="highlight-grid">
          {highlights.map((item) => (
            <article className="highlight-card" key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
