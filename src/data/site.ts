// Single source of truth for all content.
// TODO markers = real information still needed before this goes public.
// Rule: never claim a turnaround, tool or credit you cannot deliver on the spot.

export type PosterTone = "amber" | "violet" | "teal" | "rose"

export type WorkItem = {
  title: string
  client: string
  category: string
  role: string
  duration: string
  tools: string[]
  url: string
  tone: PosterTone
  summary: string
  placeholder: boolean
}

export const site = {
  name: "Radhika Saxena",
  role: "Short-form Video Editor for Food Creators",
  tagline:
    "You shoot it, I cut it. Fast-paced short-form and relaxed long-form tutorials from the same raw footage — first cut back in 24 hours, ready for your colorist.",
  location: "India",
  timezone: "IST (UTC+5:30)",
  email: "radhikasaxen22@gmail.com",
  // TODO: leave empty to hide the phone number entirely.
  phone: "",
  availability: "Taking on one food creator — 10–15 videos a month",
  // TODO: add a link to your CV if you have one; empty hides the button.
  resumeUrl: "",
  links: {
    // TODO: paste real profile URLs. Empty entries are hidden automatically.
    linkedin: "",
    instagram: "",
    youtube: "",
    behance: "",
  },
  showreel: {
    // TODO: paste a YouTube/Vimeo link. Empty shows the placeholder frame.
    // Unlisted YouTube works: https://www.youtube.com/watch?v=XXXXXXXXXXX
    url: "",
    title: "Food edit reel",
    duration: "01:12",
    note: "60–90 seconds of your fastest, punchiest cuts. This is the first thing a creator watches.",
  },
  testEdit: {
    enabled: true,
    body: "Send one raw clip. I will return a 30-second cut in 24 hours, free, so you can judge the pace instead of a portfolio.",
  },
}

// TODO: replace all four entries with real work. Keep the shape, change the words.
export const work: WorkItem[] = [
  {
    title: "Recipe reel — 30s hook cut",
    client: "Creator name",
    category: "Short-form",
    role: "Edit · captions · sound",
    duration: "00:32",
    tools: ["Premiere Pro"],
    url: "",
    tone: "amber",
    summary:
      "Cold open on the finished dish, then the fastest path to it. Step cards timed to the beat, captions burned in, sizzle left loud.",
    placeholder: true,
  },
  {
    title: "ASMR / process cut — no voiceover",
    client: "Creator name",
    category: "Short-form",
    role: "Sound-led edit",
    duration: "00:48",
    tools: ["Premiere Pro", "Audition"],
    url: "",
    tone: "rose",
    summary:
      "Knife, pan, pour, plate. Sound design carries it: room tone cleaned, crunch and sizzle lifted, macro beats given room to breathe.",
    placeholder: true,
  },
  {
    title: "Cooking tutorial — long-form",
    client: "Personal website",
    category: "Long-form",
    role: "Story edit · pacing",
    duration: "14:20",
    tools: ["Premiere Pro"],
    url: "",
    tone: "teal",
    summary:
      "Relaxed pacing, chapters at each step, ingredient callouts that do not fight the voiceover. Cut from the same footage as the reels.",
    placeholder: true,
  },
  {
    title: "Monthly series — 6 reels",
    client: "Creator name",
    category: "Series",
    role: "Edit · templating · batch delivery",
    duration: "00:40 avg",
    tools: ["Premiere Pro", "After Effects"],
    url: "",
    tone: "violet",
    summary:
      "One consistent look across a month: reusable title and caption templates, matched transitions, batch exports named for the upload calendar.",
    placeholder: true,
  },
]

export const services = [
  {
    title: "Recipe reels",
    icon: "smartphone",
    body: "Hook inside three seconds, finished dish up front, then the steps. Captions burned in and a version with clean space for your own overlays.",
  },
  {
    title: "ASMR / process cuts",
    icon: "audio",
    body: "Sound-first edits for the cooking that sells itself: knife work, sear, pour, plate. Sizzle and crunch kept, hiss and hum removed.",
  },
  {
    title: "Long-form tutorials",
    icon: "film",
    body: "The relaxed version of the same shoot. Chapters per step, ingredient cards, no rushed pacing, built for your own website instead of the feed.",
  },
  {
    title: "Series consistency",
    icon: "layout",
    body: "Templates for titles, captions and transitions so ten videos in a month look like one channel. Batch exports named to your upload order.",
  },
]

// Direct answers to the brief. Each one is a promise — only keep what you can hit.
export const commitments = [
  {
    value: "24h",
    label: "First cut back",
    body: "Same day where possible, never past 24 hours from footage landing in the shared folder.",
  },
  {
    value: "10–15",
    label: "Videos a month",
    body: "A realistic monthly cadence, with room reserved for the revision passes that come with it.",
  },
  {
    value: "Same day",
    label: "Revisions",
    body: "Notes in your morning, fixed before your evening. Nothing sits overnight if you are awake.",
  },
  {
    value: "1:1",
    label: "Style matching",
    body: "Two or three references plus one edit and I mirror your pacing, caption style and sound levels. Feedback sticks.",
  },
  {
    value: "Both",
    label: "Short + long form",
    body: "Reels and the website tutorial cut from the same shoot, without duplicating the work twice.",
  },
  {
    value: "Handoff",
    label: "Colorist-ready",
    body: "Clean, labelled timelines and an XML/AAF with the flattened reference. Your colorist starts the moment I stop.",
  },
]

export const process = [
  {
    step: "01",
    title: "Footage lands",
    body: "You upload and send the brief in a sentence. I organise, sync and build proxies the same day — no stalling on a reply.",
  },
  {
    step: "02",
    title: "First cut, 24h",
    body: "Structure, pace and captions done. You get a review link, not a 4GB download.",
  },
  {
    step: "03",
    title: "Your notes",
    body: "Timestamped comments, applied the same day. Two rounds are normal; I would rather get it right than argue.",
  },
  {
    step: "04",
    title: "Handoff",
    body: "Delivery at your specs — 9:16, 1:1, 16:9, plus the tutorial cut and the colourist package. Named so nobody hunts for files.",
  },
]

export const toolGroups = [
  { label: "Editing", tools: ["Adobe Premiere Pro", "CapCut"] },
  { label: "Motion & titles", tools: ["Adobe After Effects", "Photoshop", "Canva"] },
  { label: "Colour & audio", tools: ["DaVinci Resolve", "Adobe Audition"] },
  { label: "Workflow", tools: ["Frame.io", "Proxies", "Batch export", "Google Drive / Dropbox"] },
]

export const about = {
  headline: "Technical hands, editor's eye.",
  paragraphs: [
    "I am Radhika, a Computer Science student who edits video. That background is the practical part: organised projects, proxies before anyone asks, sensible file names, and exports that do not collapse when the platform wants another aspect ratio.",
    "For food content the job is pace and appetite. I cut to make the dish look worth stopping for — and I keep the unglamorous things right: clean audio, matched colour, captions you can actually read.",
    "I am early in my career and I am not going to pretend otherwise. What I am is fast, responsive, and genuinely good at taking notes without taking offence. Teach me your style once and it will be there in the next cut.",
  ],
  facts: [
    { label: "Based in", value: "India · IST (UTC+5:30)" },
    { label: "Cutting on", value: "Premiere Pro · After Effects · Resolve" },
    { label: "Availability", value: "Freelance · 10–15 videos/mo" },
  ],
}

export const faq = [
  {
    q: "Have you edited cooking content before?",
    a: "Not a long-running food series yet — I would rather say that plainly than pad this page. What I bring is editing speed, a technical base, and a working understanding of food pacing: hook on the finished dish, step cards, sizzle kept loud, dead air removed.",
  },
  {
    q: "How do revisions work if we are in different time zones?",
    a: "You send timestamped notes in Frame.io or a plain list. I work IST and reserve the first hours of my day for revision passes, so notes left in your evening are usually back before your next morning.",
  },
  {
    q: "What do you need from me to start?",
    a: "The raw footage, one sentence on what the video should do, and two references you like. That is enough for a first cut — the rest we can tune on the second pass.",
  },
]
