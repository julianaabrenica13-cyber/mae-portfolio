import Image from "next/image";
import {
  ArrowUpRight,
  Bot,
  BriefcaseBusiness,
  Clapperboard,
  FileText,
  Mail,
  PenTool,
  Play,
  Presentation,
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

const reels = [
  {
    title: "Tumbler Product Reel",
    kind: "Short-form video",
    src: "/work/tumbler-reel.mp4",
    poster: "/work/tumbler-reel-poster.jpg",
    width: 1280,
    height: 720,
    aiGenerated: true,
  },
  {
    title: "Skincare UGC Ad",
    kind: "Short-form video",
    src: "/work/ugc-ad.mp4",
    poster: "/work/ugc-ad-poster.jpg",
    width: 720,
    height: 1280,
    aiGenerated: true,
  },
  {
    title: "Pet Hair Remover Ad",
    kind: "Short-form video",
    src: "/work/pet-hair-remover.mp4",
    width: 720,
    height: 1280,
    aiGenerated: true,
  },
  {
    title: "Podcast Clip",
    kind: "Short-form video",
    src: "/work/podcast-reel.mp4",
    width: 1280,
    height: 720,
    aiGenerated: true,
  },
  {
    title: "Games Promo",
    kind: "Short-form video",
    src: "/work/games-reel.mp4",
    width: 864,
    height: 480,
    aiGenerated: true,
  },
  {
    title: "Social Media Reel",
    kind: "Short-form video",
    src: "/work/third-reel.mp4",
    width: 720,
    height: 1280,
    videoEditing: true,
  },
  {
    title: "Social Media Reel",
    kind: "Short-form video",
    src: "/work/second-reel.mp4",
    width: 720,
    height: 1280,
    videoEditing: true,
  },
  {
    title: "Social Media Reel",
    kind: "Short-form video",
    src: "/work/new-reel.mp4",
    width: 720,
    height: 1280,
    videoEditing: true,
  },
  {
    title: "Social Media Reel",
    kind: "Short-form video",
    src: "/work/fourth-reel.mp4",
    width: 720,
    height: 1280,
    videoEditing: true,
  },
];

const showcaseItems = [
  {
    title: "Start YouTube With $0",
    kind: "YouTube thumbnail",
    image: "/work/yt-start-youtube.png",
    width: 1672,
    height: 941,
  },
  {
    title: "He Can't Say No!",
    kind: "YouTube thumbnail",
    image: "/work/yt-cant-say-no.png",
    width: 1536,
    height: 1024,
  },
  {
    title: "Italian Café Menu",
    kind: "Menu design",
    image: "/work/italian-menu.png",
    width: 1024,
    height: 1536,
  },
  {
    title: "Pilates: Glutes & Core",
    kind: "YouTube thumbnail",
    image: "/work/yt-pilates.png",
    width: 1672,
    height: 941,
  },
  {
    title: "1st Birthday Invite",
    kind: "Event invitation",
    image: "/work/birthday-invite.png",
    width: 941,
    height: 1672,
  },
  {
    title: "First Words!",
    kind: "YouTube thumbnail",
    image: "/work/yt-first-words.png",
    width: 1672,
    height: 941,
  },
  {
    title: "iPhone 17 Pro Max",
    kind: "Product poster",
    image: "/work/iphone-poster.png",
    width: 1055,
    height: 1491,
  },
  {
    title: "1 Day, $1 Challenge",
    kind: "YouTube thumbnail",
    image: "/work/yt-1day-1dollar.png",
    width: 1672,
    height: 941,
  },
  {
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
    icon: Clapperboard,
    title: "Video Editing",
    description:
      "Engaging short-form videos, social media content, clean cuts, captions, transitions, sound effects, color adjustments, and polished edits ready to post.",
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
  "Create polished video edits and visual content ready to share across social media and digital platforms.",
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
          src="/work/hero-cover.png"
          alt="Juliana Abrenica creative editing workspace illustration"
          fill
          priority
          sizes="100vw"
          className="hero-image"
          draggable={false}
        />
        <div className="hero-scrim" />
        <div className="hero-content">
          <p className="eyebrow">
            <Sparkles size={16} aria-hidden="true" />
            AI content, design, video editing, and document support
          </p>
          <h1>Juliana Abrenica</h1>
          <p className="hero-copy">
            I turn ideas into eye-catching designs and engaging video content
            that capture attention and communicate clearly. My work focuses on
            video editing, graphic design, and polished digital materials that
            bring creative concepts to life.
          </p>
          <div className="hero-actions" aria-label="Primary links">
            <a href="#work" className="button primary view-work-button">
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

      <section className="section reel-section" aria-label="Featured video reels">
        <div className="section-heading">
          <p className="section-kicker">Featured</p>
          <h2>Short-form video reels.</h2>
        </div>
        <div className="reel-row">
          {reels.map((reel) => (
            <article className="reel-card" key={reel.src}>
              <div
                className={`video-frame${reel.width < reel.height ? " portrait" : ""}`}
              >
                <video
                  src={reel.src}
                  poster={reel.poster}
                  controls
                  controlsList="nodownload noplaybackrate noremoteplayback"
                  disablePictureInPicture
                  disableRemotePlayback
                  playsInline
                  preload="metadata"
                  style={{ aspectRatio: `${reel.width} / ${reel.height}` }}
                />
                <div className="video-badges">
                  <span className="video-badge">
                    <Play size={12} aria-hidden="true" />
                    Video
                  </span>
                  {reel.aiGenerated && (
                    <span className="video-badge ai-badge">
                      <Sparkles size={12} aria-hidden="true" />
                      AI Generated
                    </span>
                  )}
                  {reel.videoEditing && (
                    <span className="video-badge editing-badge">
                      <Clapperboard size={12} aria-hidden="true" />
                      Video Editing Projects
                    </span>
                  )}
                </div>
              </div>
              <div className="work-meta">
                <p>{reel.kind}</p>
                <h3>{reel.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="intro-band" aria-label="Portfolio summary">
        <div className="intro-grid">
          <div>
            <p className="section-kicker">What I do</p>
            <h2>Creative video editing, graphic design, and content concepts that turn ideas into polished, engaging, and ready-to-use digital content.</h2>
          </div>
          <p>
            I create engaging video content, eye-catching graphics, and creative
            visuals that bring ideas to life. From social media content and
            campaign designs to presentations and polished business materials,
            every project is made to look clear, professional, and ready to use.
          </p>
        </div>
      </section>

      <section className="section" id="services">
        <div className="section-heading">
          <p className="section-kicker">Services</p>
          <h2 className="services-heading">Creative video editing and visual design that bring ideas to life.</h2>
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
            draggable={false}
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
                draggable={false}
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
              <Image
                src={item.image}
                alt={`${item.title} — ${item.kind}`}
                width={item.width}
                height={item.height}
                sizes="(max-width: 680px) 100vw, (max-width: 980px) 50vw, 33vw"
                draggable={false}
              />
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
        <a
          href="mailto:julianaabrenica13@gmail.com"
          className="button primary start-project-button"
        >
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
