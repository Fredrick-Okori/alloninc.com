import Reveal from "./Reveal";

const clinicalSteps = [
  { n: "I", label: "Entry", title: "Listen", desc: "Arrive without a predetermined solution. Hear the organisation from multiple angles - leadership, operations, frontline - before forming any view." },
  { n: "II", label: "Clinical", title: "Diagnose", desc: "Map the actual problem - structural, operational, human - beneath the presenting symptoms. Name it precisely enough to be actionable." },
  { n: "III", label: "Precision", title: "Define", desc: "Articulate the problem in terms the organisation can act on. Vague diagnosis produces vague intervention. Definition is the prerequisite of solution." },
  { n: "IV", label: "Architecture", title: "Strategise", desc: "Build the intervention from the actual condition - not from a template. The path is specific to this organisation, this problem, this moment." },
  { n: "V", label: "Validation", title: "Test", desc: "Apply under real conditions before locking the framework. Pressure test. Adjust. The medicine is not final until it has been tested against the actual patient." },
  { n: "VI", label: "Prescription", title: "Prescribe", desc: "Deliver the framework as a complete, structural prescription - not a recommendation, not a report. Something the organisation can operate from." },
];

const domains = [
  { tag: "Organisational Design", name: "Structure & Hierarchy", desc: "How authority is distributed, where decisions are made, and whether the formal structure matches the way the business actually operates." },
  { tag: "Operational Systems", name: "Process & Execution", desc: "The gap between documented process and actual execution - and the structural reasons that gap persists despite repeated attempts to close it." },
  { tag: "Department Dynamics", name: "Interfaces & Handoffs", desc: "Where value is lost between departments - in handoffs, escalations, and the informal politics that form around structural ambiguity." },
  { tag: "Strategic Coherence", name: "Direction & Alignment", desc: "Whether the stated strategy and the actual organisational behaviour are pointing in the same direction - and if not, which one is real." },
  { tag: "Leadership Architecture", name: "Decision Quality & Speed", desc: "The structures that determine how decisions are made - and why capable leaders consistently produce suboptimal results inside poorly designed systems." },
];

export default function Method() {
  return (
    <section
      id="method"
      className="border-t border-charcoal/20 bg-linen text-charcoal"
    >
      <div className="px-6 md:px-16 py-[100px]">
        {/* Section header */}
        <Reveal className="flex items-baseline gap-[18px] mb-[72px]">
          <span className="font-serif text-[0.95rem] text-amber opacity-50">02</span>
          <h2
            className="font-serif font-[200] text-charcoal tracking-[-0.02em] leading-none"
            style={{ fontSize: "clamp(1.9rem, 3.2vw, 3rem)" }}
          >
            The <em className="italic text-amber">Method</em>
          </h2>
          <div className="flex-1 h-px bg-charcoal/[0.09] ml-2" />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Left */}
          <Reveal className="md:pr-[72px] md:border-r border-charcoal/[0.09]">
            <p
              className="font-serif font-[300] text-charcoal leading-[1.5] tracking-[-0.01em] mb-7"
              style={{ fontSize: "clamp(1.2rem, 2vw, 1.75rem)" }}
            >
              This is not consulting in the conventional sense. There are no
              frameworks imported from elsewhere and applied to your situation.{" "}
              <em className="italic text-amber">
                The diagnosis precedes everything.
              </em>
            </p>
            <p className="text-[1rem] leading-[1.9] text-grey mb-[18px]">
              A physician does not arrive with a preferred medicine. They arrive,
              examine, test, and then - only then - prescribe. The prescription
              is specific to this patient, this condition, this moment.
            </p>
            <p className="text-[1rem] leading-[1.9] text-grey mb-12">
              The same discipline applies here. The engagement begins with
              listening. What the business says its problem is. What the
              structure of the business reveals its problem to be. The two are
              almost never identical - and the gap between them is where the
              actual work lives.
            </p>

            {/* Clinical steps */}
            <div>
              {clinicalSteps.map((step) => (
                <div
                  key={step.n}
                  className="grid border-t border-charcoal/[0.09] hover:bg-linen2 transition-colors duration-300"
                  style={{ gridTemplateColumns: "48px 1fr" }}
                >
                  <div className="py-6 flex items-start justify-center border-r border-charcoal/[0.09]">
                    <span className="font-serif text-[0.95rem] text-amber opacity-60 pt-0.5">
                      {step.n}
                    </span>
                  </div>
                  <div className="py-6 pl-6">
                    <div className="text-[0.72rem] tracking-[0.18em] uppercase text-amber mb-1.5">
                      {step.label}
                    </div>
                    <div className="font-serif font-[400] text-[1.1rem] text-charcoal mb-1.5">
                      {step.title}
                    </div>
                    <div className="text-[0.9rem] leading-[1.75] text-grey">
                      {step.desc}
                    </div>
                  </div>
                </div>
              ))}
              <div className="border-b border-charcoal/[0.09]" />
            </div>
          </Reveal>

          {/* Right */}
          <Reveal delay={200} className="md:pl-[72px] pt-14 md:pt-0">
            <div className="text-[0.72rem] tracking-[0.18em] uppercase text-amber mb-6">
              Domain Coverage
            </div>
            <div className="flex flex-col gap-0.5">
              {domains.map((d) => (
                <div
                  key={d.name}
                  className="bg-white px-7 py-7 border-l-[3px] border-l-transparent hover:border-l-amber hover:translate-x-1 transition-all duration-200"
                >
                  <div className="text-[0.72rem] tracking-[0.18em] uppercase text-amber mb-2">
                    {d.tag}
                  </div>
                  <div className="font-serif font-[400] text-[1.1rem] text-charcoal mb-1.5">
                    {d.name}
                  </div>
                  <div className="text-[0.9rem] leading-[1.75] text-grey">
                    {d.desc}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 px-7 py-6 border border-charcoal/[0.09] bg-linen2 text-[0.92rem] leading-[1.8] text-grey">
              <strong className="text-charcoal font-[400]">On the output:</strong>{" "}
              The engagement ends with a framework - not a slide deck. A
              structural prescription the organisation can implement, test, and
              build from. It is designed to outlast the engagement.
            </div>

            <div className="mt-3 px-7 py-6 border border-charcoal/[0.09] bg-white text-[0.92rem] leading-[1.8] text-grey">
              <strong className="text-charcoal font-[400]">Forward vs Backward:</strong>{" "}
              Your accountant records what already happened. We tell you what to do next - installing
              the financial and operational intelligence that catches blind spots before they turn into crises.
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
