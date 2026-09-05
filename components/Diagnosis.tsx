import Reveal from "./Reveal";
import Link from "next/link";

const cards = [
  {
    dept: "Strategy",
    abbr: "Str",
    heading: "The strategy is clear. The organisation moves as if it isn't.",
    body: (
      <>
        The document is coherent. The presentations are convincing. And the
        business continues to behave in ways that contradict the stated
        direction.{" "}
        <strong className="text-linen/65 font-[300]">
          The strategy has not failed - it has not been structurally embedded.
        </strong>
      </>
    ),
  },
  {
    dept: "Operations",
    abbr: "Ops",
    heading: "Processes exist. The right things still don't happen consistently.",
    body: (
      <>
        The SOPs are written. The systems are in place. Output is still
        inconsistent, escalations are frequent, and execution depends more on
        individuals than structure.{" "}
        <strong className="text-linen/65 font-[300]">
          The process is documented but not designed.
        </strong>
      </>
    ),
  },
  {
    dept: "Departments",
    abbr: "Dept",
    heading: "Each department is performing. The organisation as a whole is not.",
    body: (
      <>
        Individual units are hitting their numbers. Leadership is competent. And
        yet something between the departments is consistently losing value —
        decisions slow, handoffs break, accountability diffuses.{" "}
        <strong className="text-linen/65 font-[300]">
          The departments are functional. The system between them is not.
        </strong>
      </>
    ),
  },
  {
    dept: "Leadership",
    abbr: "Lead",
    heading: "The leaders are capable. The decisions they produce are not.",
    body: (
      <>
        Individual intelligence is high. Experience is present. And yet decision
        quality is inconsistent, speed is low, and the same kinds of mistakes
        recur.{" "}
        <strong className="text-linen/65 font-[300]">
          The issue is not capability - it is the structure within which
          decisions are made.
        </strong>
      </>
    ),
  },
  {
    dept: "Growth",
    abbr: "Gro",
    heading: "Revenue grows. The organisation cannot keep pace with itself.",
    body: (
      <>
        What worked at the previous scale has not been redesigned for the
        current one. The informal structures that carried the early business are
        now its ceiling.{" "}
        <strong className="text-linen/65 font-[300]">
          Growth has outrun the organisation&rsquo;s internal architecture.
        </strong>
      </>
    ),
  },
  {
    dept: "Culture",
    abbr: "Cul",
    heading: "The values are stated. The behaviour they describe is not occurring.",
    body: (
      <>
        The culture deck is thorough. The leadership genuinely believes in it.
        And the daily reality of the organisation operates by a different,
        unwritten code.{" "}
        <strong className="text-linen/65 font-[300]">
          Culture is not what is declared - it is what is structurally
          incentivised.
        </strong>
      </>
    ),
  },
];

export default function Diagnosis() {
  return (
    <section id="diagnosis" className="border-t border-linen/[0.07] bg-navy">
      <div className="px-6 md:px-16 py-[100px]">
        {/* Section header */}
        <Reveal className="flex items-baseline gap-[18px] mb-[72px]">
          <span className="font-serif text-[0.95rem] text-amber opacity-50">01</span>
          <h2
            className="font-serif font-[200] tracking-[-0.02em] leading-none"
            style={{ fontSize: "clamp(1.9rem, 3.2vw, 3rem)" }}
          >
            The <em className="italic text-amber">Problem</em>
          </h2>
          <div className="flex-1 h-px bg-linen/[0.07] ml-2" />
        </Reveal>

        {/* Intro */}
        <Reveal className="max-w-[64ch] mb-16">
          <p
            className="font-serif font-[200] text-linen/60 leading-[1.55] tracking-[-0.01em]"
            style={{ fontSize: "clamp(1.2rem, 2vw, 1.75rem)" }}
          >
            Every business that is underperforming relative to its potential has
            a structural explanation.{" "}
            <em className="italic text-amber">
              It is almost never the one currently being addressed.
            </em>
          </p>
        </Reveal>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 mb-0.5">
          {cards.map((card, i) => (
            <Reveal key={card.dept} delay={(i % 3) * 100}>
              <div
                className="relative overflow-hidden bg-linen/[0.03] border border-linen/[0.07] p-10 hover:bg-linen/[0.055] transition-colors duration-300 group h-full"
              >
                {/* Watermark */}
                <span
                  className="absolute bottom-[-12px] right-[-8px] font-serif font-[200] leading-none text-linen/[0.03] group-hover:text-amber/[0.05] transition-colors duration-300 pointer-events-none select-none"
                  style={{ fontSize: "5rem" }}
                  aria-hidden="true"
                >
                  {card.abbr}
                </span>

                <div className="text-[0.72rem] tracking-[0.2em] uppercase text-amber mb-4">
                  {card.dept}
                </div>
                <h3
                  className="font-serif font-[300] leading-[1.3] tracking-[-0.01em] mb-3.5"
                  style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.45rem)" }}
                >
                  {card.heading}
                </h3>
                <p className="text-[0.92rem] leading-[1.8] text-linen/50">
                  {card.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Cost of Inaction Callout */}
        <Reveal className="mt-8">
          <div className="p-8 md:p-10 bg-linen/[0.03] border border-linen/[0.08] flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="max-w-2xl">
              <div className="text-[0.7rem] tracking-[0.2em] uppercase text-amber mb-2">
                The Cost of Doing Nothing
              </div>
              <p className="font-serif text-[1.2rem] md:text-[1.35rem] font-[200] text-linen/80 leading-[1.5]">
                &ldquo;None of this shows up as a line item. That&apos;s exactly what makes it so expensive.{" "}
                <span className="text-amber">Most businesses are losing money they don&apos;t know they&apos;re losing.</span>&rdquo;
              </p>
            </div>
            <Link
              href="/pricing"
              className="shrink-0 text-[0.72rem] tracking-[0.18em] uppercase text-amber border border-amber/35 px-6 py-3 hover:bg-amber hover:text-navy transition-all no-underline"
            >
              See the Cost of Inaction →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
