import { about, commitments, credits, deliverables, process, site, toolGroups } from "@/data/site"

const siteUrl = "radhikasaxen22.github.io/video-editor-portfolio"
const year = new Date().getFullYear()

export function PrintPortfolio() {
  return (
    <div className="sheet">
      <button type="button" className="screen-only" onClick={() => window.print()}>
        Save as PDF
      </button>

      <header className="head">
        <p className="kicker">Portfolio · {year}</p>
        <h1>{site.name}</h1>
        <p className="role">{site.role}</p>
        <ul className="contact">
          <li>{site.email}</li>
          <li>{site.location}</li>
          <li>{site.timezone}</li>
          <li>{site.availability}</li>
        </ul>
      </header>

      <p className="lede">{site.tagline}</p>

      <section>
        <h2>What I commit to</h2>
        <div className="grid three">
          {commitments.map((item) => (
            <div key={item.label} className="commit">
              <p className="big">{item.value}</p>
              <p className="label">{item.label}</p>
              <p className="body">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Formats I cut</h2>
        <div className="grid two">
          {deliverables.map((item) => (
            <div key={item.title} className="format">
              <div className="format-head">
                <h3>{item.title}</h3>
                <span className="mono time">{item.duration}</span>
              </div>
              <p className="body">{item.summary}</p>
              <p className="meta">
                {item.category} · {item.role} · {item.tools.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Credits</h2>
        <div className="grid two">
          {credits.map((item) => (
            <div key={item.url} className="format">
              <div className="format-head">
                <h3>{item.title}</h3>
                <span className="mono time">{item.platform}</span>
              </div>
              <p className="meta">
                {item.channel} · {item.role}
              </p>
              <p className="meta mono">{item.url.replace("https://", "")}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>How it works</h2>
        <ol className="steps">
          {process.map((item) => (
            <li key={item.step}>
              <span className="mono step">{item.step}</span>
              <div>
                <h3>{item.title}</h3>
                <p className="body">{item.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <h2>Tools</h2>
        <dl className="tools">
          {toolGroups.map((group) => (
            <div key={group.label}>
              <dt>{group.label}</dt>
              <dd>{group.tools.join(" · ")}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section>
        <h2>About</h2>
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph} className="body">
            {paragraph}
          </p>
        ))}
        <dl className="facts">
          {about.facts.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="cta">
        <h2>Send one raw clip</h2>
        <p className="body">{site.testEdit.body}</p>
        <p className="mono strong">{site.email}</p>
        <p className="mono meta">{siteUrl}</p>
      </section>
    </div>
  )
}
