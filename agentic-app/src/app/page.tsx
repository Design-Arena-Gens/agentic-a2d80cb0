const menuItems = [
  {
    title: "View Products",
    description:
      "Link customers straight to your best offers and catalog highlights within Messenger.",
  },
  {
    title: "Talk to Admin",
    description:
      "Instant escalation to a human admin in case someone needs personal assistance.",
  },
  {
    title: "FAQ",
    description:
      "Curated answers to your most common questions delivered in Bangla and English.",
  },
];

const quickReplies = [
  {
    question: "Product price? | পণ্যের দাম?",
    answer:
      "We send a dynamic catalog link plus tailored price information in both languages.",
  },
  {
    question: "Delivery time? | ডেলিভারি কতদিন লাগে?",
    answer:
      "Automated response with delivery windows, courier options, and COD availability.",
  },
  {
    question: "Return policy? | রিটার্ন পলিসি?",
    answer:
      "Clear, friendly explanation that matches your shop policy with a link to full details.",
  },
];

const timeline = [
  {
    phase: "Day 1",
    title: "Discovery & Content Setup",
    details:
      "Collect brand tone, FAQs, menu copy, and integration credentials for MD Siam Islam.",
  },
  {
    phase: "Day 2",
    title: "Flow Building & Automation",
    details:
      "Implement welcome flow, main menu buttons, quick replies, and fallback logic.",
  },
  {
    phase: "Day 3",
    title: "Testing, Training & Launch",
    details:
      "End-to-end QA in Messenger, stakeholder walkthrough, final tweaks, and go-live.",
  },
];

const pricing = [
  {
    label: "One-time Setup",
    amount: "$280",
    note: "Covers conversation design, build-out, testing, and launch support.",
  },
  {
    label: "Monthly Care (Optional)",
    amount: "$45",
    note: "24/7 monitoring, minor updates, and performance reporting.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <header className="relative overflow-hidden bg-slate-950/60">
        <div className="absolute inset-0 -z-10 h-full bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.28),_rgba(15,23,42,0))]" />
        <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-24 sm:py-28">
          <div className="flex flex-col gap-6">
            <span className="w-fit rounded-full border border-cyan-400/50 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
              Messenger Automation
            </span>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              MD Siam Islam Messenger Bot
            </h1>
            <p className="max-w-2xl text-lg text-slate-300">
              Human-friendly automation that replies instantly in Bangla + English, handles
              product inquiries, and connects real customers to your admin when they need
              personal support.
            </p>
            <p className="max-w-2xl text-base text-cyan-100/90">
              বন্ধুত্বপূর্ণ ভঙ্গিতে স্বয়ংক্রিয় উত্তর, প্রধান মেনু, দ্রুত রিপ্লাই এবং সার্বক্ষণিক
              সাপোর্ট—সবকিছু আপনার “MD Siam Islam” ফেসবুক পেজের জন্য প্রস্তুত।
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://m.me/MD.Siam.Islam"
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-300"
            >
              Preview Messenger Entry Point
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-500 px-6 py-3 text-sm font-semibold transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Request Kick-off Call
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-5xl flex-col gap-20 px-6 py-20">
        <section className="grid gap-12 lg:grid-cols-[2fr,3fr] lg:items-start">
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold">Always-on welcome with a clear main menu</h2>
            <p className="text-base text-slate-300">
              Every new visitor is greeted with a warm Bangla introduction followed by a
              bilingual menu. Buttons keep the experience simple and clean, mirroring how your
              brand speaks on Facebook today.
            </p>
            <ul className="space-y-4 text-sm">
              {menuItems.map((item) => (
                <li
                  key={item.title}
                  className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 hover:border-cyan-300/50"
                >
                  <h3 className="text-lg font-medium text-cyan-200">{item.title}</h3>
                  <p className="mt-1 text-slate-300">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4 rounded-3xl border border-slate-800 bg-slate-900/40 p-8 shadow-2xl shadow-cyan-500/10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">Live preview</span>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6">
              <p className="text-sm text-slate-200">
                <span className="font-semibold text-cyan-200">MD Siam Islam Bot:</span> Assalamu
                Alaikum! 👋 আমরা কি আপনাকে আমাদের পণ্য সম্পর্কে জানাতে পারি?
              </p>
              <div className="mt-5 grid gap-3">
                {menuItems.map((item) => (
                  <button
                    key={item.title}
                    className="rounded-full border border-cyan-400/40 bg-cyan-400/15 px-4 py-2 text-left text-sm text-cyan-100"
                  >
                    {item.title} • {item.title === "View Products" ? "পণ্য দেখুন" : item.title === "Talk to Admin" ? "অ্যাডমিনের সাথে কথা" : "প্রশ্নোত্তর"}
                  </button>
                ))}
              </div>
            </div>
            <p className="text-sm text-slate-400">
              Guided menus reduce friction and move visitors toward purchase or live support within
              two taps.
            </p>
          </div>
        </section>

        <section className="grid gap-10 rounded-3xl border border-slate-800 bg-slate-900/30 p-10 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">Smart quick replies</h2>
            <p className="text-base text-slate-300">
              Customers expect instant answers. We create quick reply chips with dynamic fallback
              logic so the bot keeps the conversation moving without ever sounding robotic.
            </p>
            <p className="text-base text-slate-300">
              গ্রাহকেরা যে প্রশ্নগুলি সবচেয়ে বেশি করে, সেখানে দ্রুত বাংলা + ইংরেজি উত্তর যাবে, সাথে থাকবে
              আপনার ওয়েবসাইটের প্রাসঙ্গিক লিঙ্ক।
            </p>
          </div>
          <div className="space-y-4">
            {quickReplies.map((reply) => (
              <div
                key={reply.question}
                className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6"
              >
                <p className="text-sm font-semibold text-cyan-200">{reply.question}</p>
                <p className="mt-2 text-sm text-slate-300">{reply.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-12 xl:grid-cols-[3fr,2fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/30 p-10">
            <h2 className="text-2xl font-semibold">3-day launch timeline</h2>
            <div className="mt-6 space-y-6">
              {timeline.map((item) => (
                <div
                  key={item.phase}
                  className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                    {item.phase}
                  </p>
                  <h3 className="mt-2 text-lg font-medium text-slate-100">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{item.details}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900/30 p-10">
            <h2 className="text-2xl font-semibold">Transparent pricing</h2>
            <div className="mt-6 space-y-5">
              {pricing.map((price) => (
                <div
                  key={price.label}
                  className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
                >
                  <p className="text-sm font-semibold text-cyan-200">{price.label}</p>
                  <p className="mt-2 text-2xl font-semibold text-slate-100">{price.amount}</p>
                  <p className="mt-3 text-sm text-slate-400">{price.note}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-slate-400">
              Need other automations? We can connect Shopify, WooCommerce, or custom carts in future
              phases and reuse the same bot foundation.
            </p>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/20 p-10" id="contact">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Launch-ready handoff</h2>
              <p className="text-base text-slate-300">
                You get a fully configured bot, documentation in Bangla + English, and a live
                training session so your team can tweak flows anytime.
              </p>
              <ul className="space-y-3 text-sm text-slate-300">
                <li>✓ 24/7 auto-replies with human handover rules</li>
                <li>✓ FAQ + catalog content management guide</li>
                <li>✓ Future website / shop integration hooks</li>
              </ul>
            </div>
            <form className="grid gap-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-8 shadow-cyan-500/10">
              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm font-medium text-cyan-200">
                  আপনার নাম / Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="MD Siam Islam"
                  className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-100 outline-none focus:border-cyan-400"
                  required
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm font-medium text-cyan-200">
                  যোগাযোগ ইমেইল / Contact Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="admin@mdsiamislam.com"
                  className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-100 outline-none focus:border-cyan-400"
                  required
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="message" className="text-sm font-medium text-cyan-200">
                  প্রকল্পের বিস্তারিত / Project Notes
                </label>
                <textarea
                  id="message"
                  placeholder="Tell us about your products or custom requests"
                  className="min-h-[120px] w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-100 outline-none focus:border-cyan-400"
                  required
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Submit inquiry
              </button>
              <p className="text-xs text-slate-500">
                This form is for demonstration. Connect to your CRM or email provider in the next
                phase.
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800/80 bg-slate-950/80 py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-6 text-center text-xs text-slate-500 sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} Messenger Bot Studio · Crafted for MD Siam Islam</p>
          <div className="flex gap-4">
            <a className="hover:text-cyan-200" href="https://agentic-a2d80cb0.vercel.app">
              Live Preview
            </a>
            <a className="hover:text-cyan-200" href="mailto:hello@messengerbot.studio">
              hello@messengerbot.studio
            </a>
            <a className="hover:text-cyan-200" href="https://m.me/MD.Siam.Islam">
              Messenger
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
