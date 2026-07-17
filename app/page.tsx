import Image from "next/image";
import {
  ArrowUpRight,
  Bot,
  BriefcaseBusiness,
  FileText,
  Mail,
  PenTool,
  Play,
  Presentation,
  Sheet,
  Sparkles,
  Wand2,
} from "lucide-react";

const workItems = [
  {
    title: "Launch Banner",
    kind: "Campaign visual",
    image: "/work/actual-banner.png",
  },
  {
    title: "Store Banner",
    kind: "Retail display",
    image: "/work/store-banner.png",
  },
  {
    title: "Instagram Post",
    kind: "Social content",
    image: "/work/ig-post.png",
  },
  {
    title: "Facebook Ad",
    kind: "Paid media",
    image: "/work/fb-ads.png",
  },
  {
    title: "Menu Design",
    kind: "Brand collateral",
    image: "/work/menu.png",
  },
  {
    title: "Packaging",
    kind: "Product mockup",
    image: "/work/packaging.png",
  },
];

type ShowcaseItem =
  | {
      type: "image";
      title: string;
      kind: string;
      image: string;
      width: number;
      height: number;
    }
  | {
      type: "video";
      title: string;
      kind: string;
      src: string;
      poster: string;
      width: number;
      height: number;
    };

const showcaseItems: ShowcaseItem[] = [
  {
    type: "video",
    title: "Tumbler Product Reel",
    kind: "Short-form video",
    src: "/work/tumbler-reel.mp4",
    poster: "/work/tumbler-reel-poster.jpg",
    width: 1280,
    height: 720,
  },
  {
    type: "video",
    title: "Skincare UGC Ad",
    kind: "Short-form video",
    src: "/work/ugc-ad.mp4",
    poster: "/work/ugc-ad-poster.jpg",
    width: 720,
    height: 1280,
  },
  {
    type: "image",
    title: "Start YouTube With $0",
    kind: "YouTube thumbnail",
    image: "/work/yt-start-youtube.png",
    width: 1672,
    height: 941,
  },
  {
    type: "image",
    title: "He Can't Say No!",
    kind: "YouTube thumbnail",
    image: "/work/yt-cant-say-no.png",
    width: 1536,
    height: 1024,
  },
  {
    type: "image",
    title: "Italian Café Menu",
    kind: "Menu design",
    image: "/work/italian-menu.png",
    width: 1024,
    height: 1536,
  },
  {
    type: "image",
    title: "Pilates: Glutes & Core",
    kind: "YouTube thumbnail",
    image: "/work/yt-pilates.png",
    width: 1672,
    height: 941,
  },
  {
    type: "image",
    title: "1st Birthday Invite",
    kind: "Event invitation",
    image: "/work/birthday-invite.png",
    width: 941,
    height: 1672,
  },
  {
    type: "image",
    title: "First Words!",
    kind: "YouTube thumbnail",
    image: "/work/yt-first-words.png",
    width: 1672,
    height: 941,
  },
  {
    type: "image",
    title: "iPhone 17 Pro Max",
    kind: "Product poster",
    image: "/work/iphone-poster.png",
    width: 1055,
    height: 1491,
  },
  {
    type: "image",
    title: "1 Day, $1 Challenge",
    kind: "YouTube thumbnail",
    image: "/work/yt-1day-1dollar.png",
    width: 1672,
    height: 941,
  },
  {
    type: "image",
    title: "Plumbing Services Flyer",
    kind: "Promo poster",
    image: "/work/plumbing-flyer.png",
    width: 1122,
    height: 1402,
  },
];

const services = [
  {
    icon: Wand2,
    title: "AI Content Generation",
    description:
      "Campaign ideas, captions, product descriptions, image prompts, brand concepts, and content calendars shaped for business use.",
  },
  {
    icon: PenTool,
    title: "Canva Design Support",
    description:
      "Social posts, banners, ads, simple brand kits, menus, posters, and ready-to-upload visual assets.",
  },
  {
    icon: FileText,
    title: "Word Documents",
    description:
      "Clean business documents, proposals, reports, letters, templates, formatting, and content polishing.",
  },
  {
    icon: Sheet,
    title: "Excel Assistance",
    description:
      "Organized trackers, simple dashboards, tables, formulas, data cleanup, schedules, and business lists.",
  },
  {
    icon: Presentation,
    title: "Presentations",
    description:
      "Pitch decks, company profiles, training slides, report decks, and visual storytelling for internal teams.",
  },
  {
    icon: BriefcaseBusiness,
    title: "General Business Tasks",
    description:
      "Admin-ready outputs for companies that need fast, tidy execution across content, documents, and operations.",
  },
];

const process = [
  "Clarify the task, audience, format, and deadline.",
  "Generate directions with AI, then select the strongest route.",
  "Build the final asset in Canva, Word, Excel, or slides.",
  "Polish details so the file is ready to send, post, or present.",
];

export default function Home() {
  return (
    <main>
      <header className="site-header" aria-label="Main navigation">
        <a href="#top" className="brand-mark" aria-label="Juliana Abrenica home">
          JA
        </a>
        <nav>
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top" aria-label="Juliana Abrenica portfolio">
        <Image
          src="/work/store-banner.png"
          alt="Ice cream shop campaign banner sample"
          fill
          priority
          sizes="100vw"
          className="hero-image"
        />
        <div className="hero-scrim" />
        <div className="hero-content">
          <p className="eyebrow">
            <Sparkles size={16} aria-hidden="true" />
            AI content, design, and document support
          </p>
          <h1>Juliana Abrenica</h1>
          <p className="hero-copy">
            I help companies turn rough ideas into polished AI-assisted content,
            Canva visuals, Word documents, Excel trackers, and presentation-ready
            business materials.
          </p>
          <div className="hero-actions" aria-label="Primary links">
            <a href="#work" className="button primary">
              View Work
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a href="mailto:julianaabrenica13@gmail.com" className="button secondary">
              <Mail size={18} aria-hidden="true" />
              Email Me
            </a>
          </div>
        </div>
      </section>

      <section className="intro-band" aria-label="Portfolio summary">
        <div className="intro-grid">
          <div>
            <p className="section-kicker">What I do</p>
            <h2>Practical AI generation for business teams that need finished files.</h2>
          </div>
          <p>
            I work where creative output meets everyday operations: social content,
            campaign visuals, documents, spreadsheets, slide decks, and organized
            business materials that teams can use immediately.
          </p>
        </div>
      </section>

      <section className="section" id="services">
        <div className="section-heading">
          <p className="section-kicker">Services</p>
          <h2>AI-powered support across the tools companies already use.</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article className="service-card" key={service.title}>
                <div className="icon-box">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="case-study" aria-label="Ice cream shop case study">
        <div className="case-copy">
          <p className="section-kicker">Featured case study</p>
          <h2>Ice cream shop brand and campaign assets.</h2>
          <p>
            A complete sample set showing how one small business concept can become
            a launch-ready visual system: logo, menu, ads, social posts, packaging,
            loyalty card, and in-store banners.
          </p>
          <div className="case-points">
            <span>Brand direction</span>
            <span>Ad creatives</span>
            <span>Social assets</span>
            <span>Print-ready collateral</span>
          </div>
        </div>
        <div className="case-media">
          <Image
            src="/work/instagram-post-phone.png"
            alt="Instagram post displayed on a phone mockup"
            width={900}
            height={900}
            sizes="(max-width: 900px) 100vw, 46vw"
          />
        </div>
      </section>

      <section className="section work-section" id="work">
        <div className="section-heading">
          <p className="section-kicker">Selected work</p>
          <h2>Campaign pieces, brand touchpoints, and business-ready files.</h2>
        </div>
        <div className="work-grid">
          {workItems.map((item) => (
            <article className="work-card" key={item.title}>
              <Image
                src={item.image}
                alt={`${item.title} sample`}
                width={900}
                height={700}
                sizes="(max-width: 760px) 100vw, (max-width: 1120px) 50vw, 33vw"
              />
              <div className="work-meta">
                <p>{item.kind}</p>
                <h3>{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section showcase-section" id="more-work">
        <div className="section-heading">
          <p className="section-kicker">More work</p>
          <h2>Thumbnails, posters, menus, and short-form video.</h2>
        </div>
        <div className="showcase-grid">
          {showcaseItems.map((item) => (
            <article className="work-card showcase-card" key={item.title}>
              {item.type === "video" ? (
                <div className="video-frame">
                  <video
                    src={item.src}
                    poster={item.poster}
                    controls
                    playsInline
                    preload="metadata"
                    style={{ aspectRatio: `${item.width} / ${item.height}` }}
                  />
                  <span className="video-badge">
                    <Play size={12} aria-hidden="true" />
                    Video
                  </span>
                </div>
              ) : (
                <Image
                  src={item.image}
                  alt={`${item.title} — ${item.kind}`}
                  width={item.width}
                  height={item.height}
                  sizes="(max-width: 680px) 100vw, (max-width: 980px) 50vw, 33vw"
                />
              )}
              <div className="work-meta">
                <p>{item.kind}</p>
                <h3>{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="workflow">
        <div className="workflow-copy">
          <p className="section-kicker">Workflow</p>
          <h2>Clear inputs, fast drafts, polished delivery.</h2>
        </div>
        <ol className="process-list">
          {process.map((step, index) => (
            <li key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {step}
            </li>
          ))}
        </ol>
      </section>

      <section className="contact" id="contact">
        <div>
          <p className="section-kicker">Available for projects</p>
          <h2>Need AI-assisted content or tidy business files?</h2>
          <p>
            I can help turn task lists, product notes, and rough business ideas into
            useful assets your team can post, send, track, or present.
          </p>
        </div>
        <a href="mailto:julianaabrenica13@gmail.com" className="button primary">
          <Mail size={18} aria-hidden="true" />
          Start a Project
        </a>
      </section>

      <footer>
        <div className="footer-mark">
          <Bot size={18} aria-hidden="true" />
          Juliana Abrenica
        </div>
        <p>AI generation, Canva design, documents, spreadsheets, and presentations.</p>
      </footer>
    </main>
  );
}
