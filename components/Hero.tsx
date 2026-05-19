import CanvasBackground from "./CanvasBackground";
import Link from "next/link";

const processSteps = [
  { n: "I", title: "Listen", desc: "Arrive without assumptions. Hear the organisation before reading it." },
  { n: "II", title: "Diagnose", desc: "Identify the actual problem — not the stated one. They are rarely the same." },
  { n: "III", title: "Define", desc: "Name what is wrong with enough precision that the solution becomes findable." },
  { n: "IV", title: "Strategise", desc: "Build the path from the actual problem, not the assumed one." },
  { n: "V", title: "Test", desc: "Apply under real conditions. Pressure-test the framework before it becomes doctrine." },
  { n: "VI", title: "Prescribe", desc: "Deliver the framework as medicine — specific, structural, actionable." },
];

const heroLines = [
  { text: "Businesses", italic: false },
  { text: "don't fail", italic: true },
  { text: "strategies.", italic: false },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen pt-[88px] grid md:grid-cols-[55%_45%] relative overflow-hidden"
    >
      <CanvasBackground />

      {/* Vertical amber line */}
      <div
        className="absolute left-16 top-0 bottom-0 w-px opacity-[0.18] hidden md:block"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, #C8912A 30%, #C8912A 70%, transparent 100%)",
          zIndex: 3,
        }}
      />

      {/* Left column */}
      <div
        className="px-6 md:pl-24 md:pr-16 py-[10vh] flex flex-col justify-center relative"
        style={{ zIndex: 2 }}
      >
        {/* Kicker */}
        <div
          className="anim-fade-up text-[0.72rem] tracking-[0.3em] uppercase text-amber mb-10 flex items-center gap-3"
          style={{ animationDelay: "0.5s" }}
        >
          <span className="w-6 h-px bg-amber inline-block" />
          Conductor to an Orchestra
        </div>

        {/* H1 */}
        <h1
          className="font-serif font-[200] leading-[0.93] tracking-[-0.03em] mb-12"
          style={{ fontSize: "clamp(3.6rem, 6.5vw, 8rem)" }}
        >
          {heroLines.map((line, i) => (
            <span key={i} className="block overflow-hidden">
              <span
                className="anim-line-up block"
                style={{
                  animationDelay: `${0.7 + i * 0.2}s`,
                  fontStyle: line.italic ? "italic" : "normal",
                  color: line.italic ? "#C8912A" : undefined,
                }}
              >
                {line.text}
              </span>
            </span>
          ))}
        </h1>

        {/* Sub */}
        <p
          className="anim-fade-up max-w-[44ch] leading-[1.95] text-linen/55 mb-13"
          style={{
            fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
            animationDelay: "1.6s",
            marginBottom: "52px",
          }}
        >
          They fail{" "}
          <strong className="text-linen/80 font-[300]">structures.</strong> The
          strategy is usually sound. What breaks is the organisation beneath it —
          the way departments relate, decisions move, and authority is distributed
          or denied.{" "}
          <strong className="text-linen/80 font-[300]">
            That is where this work begins.
          </strong>
        </p>

        {/* Actions */}
        <div
          className="anim-fade-up flex gap-6 items-center flex-wrap"
          style={{ animationDelay: "1.9s" }}
        >
          <Link
            href="#engage"
            className="text-[0.74rem] tracking-[0.2em] uppercase text-navy bg-amber px-9 py-[15px] no-underline hover:opacity-85 transition-opacity"
          >
            Request a Diagnosis
          </Link>
          <Link
            href="#diagnosis"
            className="text-[0.74rem] tracking-[0.18em] uppercase text-linen/50 no-underline border-b border-linen/[0.18] pb-0.5 hover:text-linen hover:border-linen transition-all"
          >
            See if this applies →
          </Link>
        </div>
      </div>

      {/* Right column */}
      <div
        className="anim-fade-in border-t md:border-t-0 md:border-l border-linen/[0.07] flex flex-col justify-center px-6 md:px-14 py-[10vh] relative"
        style={{ zIndex: 2, animationDelay: "1s" }}
      >
        {/* Process steps */}
        <div className="flex flex-col gap-0.5 mb-12">
          {processSteps.map((step) => (
            <div
              key={step.n}
              className="flex gap-5 items-start px-6 py-5 bg-linen/[0.03] border border-linen/[0.07] border-l-2 border-l-transparent hover:border-l-amber hover:bg-linen/[0.05] transition-all duration-300"
            >
              <span className="font-serif text-[1.05rem] text-amber opacity-50 min-w-[20px] leading-[1.4]">
                {step.n}
              </span>
              <div>
                <h4 className="font-serif font-[400] text-[1.05rem] text-linen/80 mb-1">
                  {step.title}
                </h4>
                <p className="text-[0.88rem] leading-[1.65] text-linen/50">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pull quote */}
        <div className="font-serif font-[200] italic border-t border-linen/[0.07] pt-7 text-linen/40 leading-[1.6]"
          style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.45rem)" }}>
          &ldquo;A physician does not prescribe before examining.{" "}
          <em className="not-italic text-linen/75">
            Neither does this work begin with solutions.
          </em>
          &rdquo;
        </div>
      </div>
    </section>
  );
}
