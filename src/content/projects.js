// ──────────────────────────────────────────────────────────────────
//  EDIT YOUR PROJECTS HERE
//  Each project becomes a card on /projects and a full page at /projects/:slug.
//  Drop images into /public/projects/ and reference them via the `cover` field.
// ──────────────────────────────────────────────────────────────────

export const projects = [
  {
    slug: "dynastyvb",
    title: "Dynasty Volleyball",
    role: "Web Developer (Contract)",
    timeframe: "Jun 2026 - Present",
    tags: ["Web Development", "Astro", "Client Work"],
    // Rendered as buttons in the case-study hero. First one gets the solid style.
    links: [{ label: "Visit the live site", href: "https://dynasty-volleyball.ca/" }],
    summary:
      "Designed and shipped the marketing site for a new volleyball club - a static Astro build with no client framework, a lead-capture form, and a $0 hosting bill.",
    cover: "/projects/dynasty-crest.png",
    coverFit: "contain", // crest - show it whole instead of cropping
    accentText: "DYNASTY",
    context:
      "Dynasty Volleyball Club is a new youth club in Caledon, Ontario that needed a site before its first season. I took the build as contract work: my scope was the website and the technical stack around it, not the club's programming. The client supplied the brand and the program details; I owned everything from the repo to the domain.",
    problem:
      "A brand-new club with no staff and no budget for a monthly bill needed a fast, credible site it wouldn't have to maintain. How do you build something that stays up and stays cheap when there's no one to operate it?",
    approach: [
      "Chose a static Astro build over a CMS or a React SPA - the content changes a few times a season, so paying a runtime cost on every page load to support edits nobody is making was the wrong trade.",
      "Shipped no client-side framework. The five pages are prerendered HTML with per-page scoped CSS; the only JavaScript is ~800 bytes inline for the sticky-header IntersectionObserver and the mobile menu.",
      "Wired lead capture to a Formspree endpoint so form submissions reach the client's inbox with no backend, no database, and no server to keep patched.",
      "Handled the production details: canonical URLs and Open Graph tags per page, explicit image dimensions to avoid layout shift, a custom 404, and keyboard-accessible nav with proper ARIA state on the menu toggle.",
      "Deployed to GitHub Pages behind the client's custom domain, so the whole thing runs at no recurring cost beyond the domain itself.",
    ],
    outcome: [
      { stat: "0", label: "External JS files shipped to the browser" },
      { stat: "5", label: "Pages, fully prerendered at build time" },
      { stat: "$0", label: "Monthly hosting and infrastructure cost" },
    ],
    reflection:
      "The interesting constraint here wasn't technical difficulty, it was picking a stack the client could survive. Anything with a server, a subscription, or a build I had to babysit would have quietly become my problem forever. Choosing boring, static, and free was the actual engineering decision.",
  },
  {
    slug: "promptera",
    title: "Promptera",
    role: "Creator & Developer",
    timeframe: "Jun 2026 - Present",
    tags: ["AI", "Chrome Extension", "0→1"],
    summary:
      "An open-source Chrome extension that rewrites your prompts for sharper LLM output, live on the Chrome Web Store.",
    cover: "/projects/promptera-cover.png",
    coverFit: "contain", // logo is square - show it whole instead of cropping
    accentText: "PROMPT",
    // Drop the mp4 into /public/projects/ and reference it here.
    // The video shows its own first frame as the thumbnail (no poster).
    video: "/projects/promptera-demo.mp4",
    context:
      "Most people get mediocre results from AI because the prompt, not the model, is the bottleneck. Promptera is a Chrome extension I built to close that gap, quietly improving prompts before they reach the model.",
    problem:
      "How do you help everyday users get better LLM output without asking them to learn prompt engineering?",
    approach: [
      "Built and shipped the extension end to end in Python and HTML, optimizing a user's prompt in place for better output quality across tools.",
      "Published to the Chrome Web Store and open-sourced it on GitHub to enable community contribution and transparency.",
      "Iterated on features and UX based on direct user feedback and review insights from early users.",
    ],
    outcome: [
      { stat: "Live", label: "On the Chrome Web Store" },
      { stat: "4", label: "Five-star reviews" },
      { stat: "10+", label: "Early users" },
    ],
    reflection:
      "Shipping something real - code, deploy, store submission - taught me how much product thinking lives in the last mile: packaging, distribution, and lowering the effort a user has to spend to get value. The reviews changed what I built next.",
  },
  {
    slug: "importique",
    title: "Importique",
    role: "Founder",
    timeframe: "Oct 2021 - Present",
    tags: ["E-commerce", "0→1", "Growth"],
    summary:
      "Founded a sourcing company, owning the full product lifecycle from international sourcing to customer experience.",
    cover: "/projects/importique_logo.png",
    coverFit: "contain", // logo - show it whole instead of cropping
    accentText: "IMPORT",
    context:
      "Importique started as a bet that I could source products internationally and build a lean company around it. As a solo founder, I owned every part of the business, from supplier negotiations to the customer's experience.",
    problem:
      "Running a one-person e-commerce operation means owning the entire lifecycle - sourcing, pricing, demand, and retention - at once. Where do you focus to stay profitable while still growing?",
    approach: [
      "Owned the end-to-end product lifecycle: sourcing, pricing, demand forecasting, and customer experience.",
      "Built supplier relationships and negotiated terms to hold margins.",
      "Used customer feedback and sales analytics to prioritize which new products to offer next.",
    ],
    outcome: [
      { stat: "$13K+", label: "Revenue generated" },
      { stat: "600+", label: "Units sold" },
      { stat: "35–40%", label: "Margins held" },
    ],
    reflection:
      "Importique was my first real lesson in unit economics and trade-offs - every decision had a visible cost, and watching margin respond to my choices is what got me hooked on building products with measurable outcomes.",
  },
  {
    slug: "verified-cars",
    title: "Verified Cars",
    role: "Founding Product Manager",
    timeframe: "Mar 2026 - Jun 2026",
    tags: ["Marketplace", "0→1", "Trust & Safety"],
    summary:
      "Founding PM on a peer-to-peer car marketplace, designing the identity and trust layer that makes strangers willing to transact.",
    cover: "/projects/verified-cars-logo.png",
    coverFit: "contain", // wordmark - show it whole instead of cropping
    accentText: "VERIFY",
    context:
      "Verified Cars was a 0→1 peer-to-peer marketplace for buying and selling cars directly between individuals. I joined as founding product manager, and the team was selected for the Chai Tech Accelerator, which gave us structured mentorship to pressure-test product strategy.",
    problem:
      "Peer-to-peer car sales fail on trust, not on listings. How do you make two strangers confident enough to transact on a high-value asset without a dealership in the middle?",
    approach: [
      "Designed an API-driven ID verification system to establish trust between buyers and sellers before any money moved.",
      "Defined user personas and key workflows for both sides of the marketplace, then mapped where fraud risk actually entered the flow.",
      "Refined product strategy through structured mentorship in the Chai Tech Accelerator, scoping the MVP down to the trust layer first.",
    ],
    outcome: [
      { stat: "0→1", label: "MVP scoped and defined" },
      { stat: "Chai Tech", label: "Accelerator selection" },
      { stat: "API", label: "ID verification designed" },
    ],
    reflection:
      "Verified Cars taught me that in a marketplace, the product isn't the listings - it's the confidence to act on them. Scoping the MVP around verification instead of features was the decision that made the rest of the roadmap legible.",
  },
];

export const getProject = (slug) =>
  projects.find((p) => p.slug === slug);
