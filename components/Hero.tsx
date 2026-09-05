import Link from "next/link";

const leakages = [
  {
    num: "01",
    title: "Daily Cash Leakage",
    desc: "Unapproved spend, duplicate invoices, and petty cash bleed undetected for months.",
    impact: "UGX 800K - 3M / mo",
  },
  {
    num: "02",
    title: "Receivables Drag",
    desc: "Customers paying 60-90 days late or defaulting. Average businesses lose 8-15% of revenue.",
    impact: "UGX 2M - 8M / mo",
  },
  {
    num: "03",
    title: "Silent Margin Drift",
    desc: "Profitable work mixed with loss-making clients. A 3% margin gap quietly drains millions.",
    impact: "UGX 1.5M - 5M / mo",
  },
  {
    num: "04",
    title: "The Cost of Delay",
    desc: "A problem that costs UGX 500K to fix in week one costs UGX 5M to fix in month three.",
    impact: "Compounding Loss",
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen pt-[110px] md:pt-[128px] pb-16 md:pb-24 px-6 md:px-16 grid grid-cols-1 lg:grid-cols-[56%_44%] relative overflow-hidden bg-navy border-b border-linen/[0.07]"
    >
      {/* Background Radial Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 20% 30%, rgba(200, 145, 42, 0.07) 0%, transparent 70%)",
        }}
      />

      {/* Left Column: Bold Headline & Value Proposition */}
      <div className="flex flex-col justify-center lg:pr-14 relative z-10 py-8 lg:py-12">
        {/* Eyebrow */}
        <div
          className="anim-fade-up text-[0.72rem] tracking-[0.25em] uppercase text-amber mb-7 flex items-center gap-3"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="w-6 h-px bg-amber inline-block" />
          Allon Inc · Financial Management Services
        </div>

        {/* H1 Main Statement */}
        <h1
          className="font-serif font-[200] leading-[0.93] tracking-[-0.03em] text-linen mb-8"
          style={{ fontSize: "clamp(3.2rem, 6.2vw, 6.8rem)" }}
        >
          <span className="block overflow-hidden">
            <span className="anim-line-up block">Most businesses</span>
          </span>
          <span className="block overflow-hidden mt-1">
            <span
              className="anim-line-up block italic text-amber font-[300]"
              style={{ animationDelay: "0.25s" }}
            >
              are losing money
            </span>
          </span>
          <span className="block overflow-hidden mt-3">
            <span
              className="anim-line-up block text-[0.4em] font-sans font-[200] tracking-normal text-linen/75 uppercase tracking-[0.14em]"
              style={{ animationDelay: "0.45s" }}
            >
              they don&apos;t know they&apos;re losing.
            </span>
          </span>
        </h1>

        {/* Supporting Hook Copy */}
        <p
          className="anim-fade-up max-w-[50ch] leading-[1.85] text-linen/60 mb-10 font-[300]"
          style={{
            fontSize: "clamp(1.05rem, 1.6vw, 1.22rem)",
            animationDelay: "0.65s",
          }}
        >
          None of this shows up as a line item on your P&amp;L. It leaks quietly through weak controls,
          uncollected invoices, unmonitored margins, and decisions made on instinct.{" "}
          <strong className="text-linen/90 font-[400]">
            We install the financial management system that catches it - and shows you exactly where to look.
          </strong>
        </p>

        {/* Actions */}
        <div
          className="anim-fade-up flex gap-5 items-center flex-wrap mb-12"
          style={{ animationDelay: "0.85s" }}
        >
          <a
            href="mailto:elias@alloninc.com?subject=Request%20a%20Diagnosis%20-%20Allon%20Inc"
            className="text-[0.74rem] tracking-[0.2em] uppercase text-navy bg-amber px-9 py-[16px] no-underline hover:opacity-85 transition-opacity font-[400]"
          >
            Request a Diagnosis
          </a>
          <a
            href="#cost-table"
            className="text-[0.74rem] tracking-[0.18em] uppercase text-linen/65 no-underline border border-linen/[0.2] px-8 py-[15px] hover:text-linen hover:border-linen transition-all"
          >
            See What It Costs You ↓
          </a>
        </div>

        {/* Proof / Value Metrics Bar */}
        <div
          className="anim-fade-up pt-8 border-t border-linen/[0.08] grid grid-cols-2 sm:grid-cols-3 gap-6"
          style={{ animationDelay: "1.05s" }}
        >
          <div>
            <div className="font-serif text-[1.45rem] font-[300] text-linen tracking-tight">
              UGX 4.5B+
            </div>
            <div className="text-[0.66rem] tracking-[0.15em] uppercase text-linen/40 mt-1">
              Protected &amp; Recovered
            </div>
          </div>

          <div>
            <div className="font-serif text-[1.45rem] font-[300] text-amber tracking-tight">
              UGX 11M - 59M
            </div>
            <div className="text-[0.66rem] tracking-[0.15em] uppercase text-linen/40 mt-1">
              Average Monthly Leakage
            </div>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <div className="font-serif text-[1.45rem] font-[300] text-linen tracking-tight">
              From 3.5M<span className="text-[0.85rem] text-linen/50">/mo</span>
            </div>
            <div className="text-[0.66rem] tracking-[0.15em] uppercase text-linen/40 mt-1">
              30-Day Money-Back Guarantee
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: The 4 Quiet Leakages + Core Reframing Pull Quote */}
      <div
        className="anim-fade-in flex flex-col justify-center pt-8 lg:pt-0 lg:pl-10 lg:border-l border-linen/[0.08] relative z-10"
        style={{ animationDelay: "0.5s" }}
      >
        <div className="text-[0.7rem] tracking-[0.2em] uppercase text-amber mb-5">
          Where Businesses Quietly Bleed Capital
        </div>

        {/* Leakage cards */}
        <div className="flex flex-col gap-2 mb-8">
          {leakages.map((item) => (
            <div
              key={item.num}
              className="p-5 bg-linen/[0.03] border border-linen/[0.07] border-l-2 border-l-transparent hover:border-l-amber hover:bg-linen/[0.05] transition-all duration-300 flex flex-col gap-1.5"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="font-serif text-[0.92rem] text-amber opacity-60">
                    {item.num}
                  </span>
                  <span className="font-serif font-[300] text-[1.05rem] text-linen">
                    {item.title}
                  </span>
                </div>
                <span className="text-[0.7rem] text-red-400 tracking-[0.05em] uppercase font-[400]">
                  {item.impact}
                </span>
              </div>
              <p className="text-[0.86rem] leading-[1.65] text-linen/50 pl-5">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Central Anchor Statement */}
        <div className="p-6 md:p-8 bg-amber/[0.05] border border-amber/[0.18]">
          <p className="font-serif font-[200] italic text-linen/80 text-[1.15rem] leading-[1.6] mb-3">
            &ldquo;The problem isn&apos;t that you can&apos;t afford financial management.{" "}
            <span className="text-amber not-italic font-[300]">
              It&apos;s that you&apos;re already paying for not having it.
            </span>
            &rdquo;
          </p>
          <div className="flex items-center justify-between text-[0.72rem] tracking-[0.14em] uppercase text-linen/40 pt-3 border-t border-amber/[0.12]">
            <span>Senior expert on your cash daily</span>
            <Link href="#plans" className="text-amber hover:underline">
              View Plans →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

