import Reveal from "./Reveal";

const rows = [
  {
    breaks: "Decision speed",
    presents: "Meetings multiply, nothing resolves, escalation becomes the default mode of operation",
    actually: "Authority is distributed without clarity — no one knows who can actually decide",
    domain: "Structure",
  },
  {
    breaks: "Execution consistency",
    presents: "Output varies dramatically by team or individual despite identical process documentation",
    actually: "The process is documented but not designed — it describes what should happen, not how to make it happen",
    domain: "Operations",
  },
  {
    breaks: "Cross-department value",
    presents: "Each unit performs; the business as a whole underperforms relative to the sum of its parts",
    actually: "The interfaces between departments are structurally broken — handoffs fail, accountability diffuses",
    domain: "Departments",
  },
  {
    breaks: "Strategic traction",
    presents: "The strategy is clear in the room where it was agreed; behaviour outside that room is unchanged",
    actually: "The strategy has not been structurally translated — it lives in language, not in incentives or process",
    domain: "Strategy",
  },
  {
    breaks: "Leadership output",
    presents: "Capable individuals producing inconsistent or poor decisions at the collective level",
    actually: "Decision-making structures are broken — the system, not the people, is producing the results",
    domain: "Leadership",
  },
  {
    breaks: "Cultural coherence",
    presents: "Values stated, behaviours inconsistent — employees experience a gap between what is said and what is rewarded",
    actually: "Culture is structurally incentivised, not declared — what is rewarded is the actual culture, regardless of what is written",
    domain: "Culture",
  },
];

export default function Structure() {
  return (
    <section id="structure" className="border-t border-linen/[0.07] bg-navy2">
      <div className="px-6 md:px-16 py-[100px]">
        {/* Section header */}
        <Reveal className="flex items-baseline gap-[18px] mb-[72px]">
          <span className="font-serif text-[0.95rem] text-amber opacity-50">03</span>
          <h2
            className="font-serif font-[200] tracking-[-0.02em] leading-none"
            style={{ fontSize: "clamp(1.9rem, 3.2vw, 3rem)" }}
          >
            What <em className="italic text-amber">Breaks</em>
          </h2>
          <div className="flex-1 h-px bg-linen/[0.07] ml-2" />
        </Reveal>

        {/* Intro */}
        <Reveal className="max-w-[56ch] mb-16">
          <p
            className="font-serif font-[200] text-linen/60 leading-[1.55]"
            style={{ fontSize: "clamp(1.2rem, 2vw, 1.7rem)" }}
          >
            Business failure is almost always structural before it is strategic.{" "}
            <em className="italic text-amber">
              The cracks form in the architecture long before they appear in the
              numbers.
            </em>
          </p>
        </Reveal>

        {/* Table */}
        <Reveal className="mb-12 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                {["What breaks", "How it presents", "What it actually is", "Domain"].map(
                  (h, i) => (
                    <th
                      key={h}
                      className={`text-[0.72rem] tracking-[0.18em] uppercase text-amber font-[300] text-left pb-4 border-b border-amber/20 ${i > 0 ? "pl-8" : ""}`}
                    >
                      {h}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr
                  key={row.breaks}
                  className="border-b border-linen/[0.07] hover:[&_td]:text-linen/85 transition-colors"
                >
                  <td className="py-5 font-serif font-[300] text-[1.05rem] text-linen/80 whitespace-nowrap align-top">
                    {row.breaks}
                  </td>
                  <td className="py-5 pl-8 text-[0.95rem] leading-[1.7] text-linen/60 align-top">
                    {row.presents}
                  </td>
                  <td className="py-5 pl-8 text-[0.8rem] leading-[1.65] text-linen/55 align-top hidden md:table-cell">
                    {row.actually}
                  </td>
                  <td className="py-5 pl-8 text-[0.85rem] text-amber opacity-70 whitespace-nowrap align-top">
                    {row.domain}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        {/* Pull quote */}
        <Reveal>
          <div className="px-[52px] py-11 bg-amber/[0.06] border border-amber/[0.14]">
            <p
              className="font-serif font-[200] italic text-linen/70 leading-[1.45] tracking-[-0.01em]"
              style={{ fontSize: "clamp(1.3rem, 2.2vw, 2rem)" }}
            >
              &ldquo;The presenting problem is rarely the real one. The business
              that thinks it has a performance problem{" "}
              <em className="not-italic text-amber">
                almost always has a structural one.
              </em>{" "}
              Fixing the performance without fixing the structure produces
              temporary results.&rdquo;
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
