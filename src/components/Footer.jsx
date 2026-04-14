import { useState, useEffect } from "react";
import "./Footer.css";

const QUICK_LINKS = [
  { label: "Trending", href: "#" },
  { label: "Top Rated", href: "#" },
  { label: "Coming Soon", href: "#" },
  { label: "Genres", href: "#" },
  { label: "Contact Us", href: "#" },
];

const GENRES = [
  { label: "Action", href: "#" },
  { label: "Drama", href: "#" },
  { label: "Comedy", href: "#" },
  { label: "Horror", href: "#" },
  { label: "Sci-Fi", href: "#" },
  { label: "Romance", href: "#" },
];

const LEGAL = [
  { label: "Terms of Service", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Cookie Policy", href: "#" },
  { label: "DMCA", href: "#" },
];

const SOCIALS = [
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24">
        <path d="M4 4l16 16M4 20L20 4" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
      </svg>
    ),
  },
];

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  function handleSubscribe() {
    if (!email || !email.includes("@")) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 2000);
      return;
    }
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1200);
  }

  return (
    <div className="newsletter">
      <p className="newsletter-label">Get weekly movie picks in your inbox</p>
      <div className="newsletter-row">
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`newsletter-input ${status === "error" ? "input-error" : ""}`}
          disabled={status === "loading" || status === "success"}
          onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
        />
        <button
          onClick={handleSubscribe}
          className={`newsletter-btn ${status}`}
          disabled={status === "loading" || status === "success"}
        >
          {status === "loading" ? "…" : status === "success" ? "✓ Done!" : "Subscribe"}
        </button>
      </div>
      {status === "error" && (
        <p className="newsletter-err">Please enter a valid email.</p>
      )}
    </div>
  );
}

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
 const [isOn , setisOn]=useState(true);
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);


  const handleToggleSwitch=()=>{
        setisOn(!isOn);
    }



    useEffect(() => {
  if (isOn) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
}, [isOn]);

  return (
    <footer className="footer-wrap">
      <div className="footer-main">

        {/* Brand */}
        <div className="brand-col">
          <div className="brand-logo">
            <span className="logo-dot" />
            REELWORLD
          </div>
          <p className="brand-desc">
            Your trusted guide to the world of cinema. Expertly curated picks,
            honest reviews, and personalized recommendations since 2020.
          </p>
          <div className="social-row">
            {SOCIALS.map((s) => (
              <a key={s.name} href={s.href} className="social-btn" title={s.name}>
                {s.icon}
              </a>
            ))}
          </div>
         {/* toggle button for theam */}
            <div className="toggle-switch"onClick={handleToggleSwitch}>
            <div className={`switch ${isOn ? "ON" : "OFF"}`}>
                <span className="switch-state">{isOn ? "ON" : "OFF"}</span>
            </div>
        </div>

        </div>
        

        {/* Explore */}
        <div>
          <p className="col-title">Explore</p>
          <ul className="footer-links">
            {QUICK_LINKS.map((l) => (
              <li key={l.label}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </div>

        {/* Genres */}
        <div>
          <p className="col-title">Genres</p>
          <ul className="footer-links">
            {GENRES.map((g) => (
              <li key={g.label}><a href={g.href}>{g.label}</a></li>
            ))}
          </ul>
        </div>

        {/* Newsletter + Legal */}
        <div>
          <p className="col-title">Newsletter</p>
          <NewsletterForm />
          <div style={{ marginTop: "28px" }}>
            <p className="col-title">Legal</p>
            <ul className="footer-links">
              {LEGAL.map((l) => (
                <li key={l.label}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p className="footer-copy">
          © {currentYear} <span>ReelWorld</span>. All rights reserved. Made with ♥ for movie lovers.
        </p>
      </div>
    </footer>
  );
}