"use client";

import { useState, FormEvent } from "react";
import Reveal from "./Reveal";

const concerns = [
  "Organisational structure",
  "Operational execution",
  "Department interfaces",
  "Strategic alignment",
  "Leadership & decision-making",
  "Culture & behaviour",
  "Growth & scaling",
  "I don't know yet — that's the problem",
];

const sizes = ["1–50", "50–250", "250–1,000", "1,000+"];

const conditions = [
  {
    lead: "This engagement is right for you",
    body: " if your business is underperforming relative to its potential and conventional advice has not resolved it.",
  },
  {
    lead: "Size is not the qualifier.",
    body: " Complexity is. This work applies equally at 10 people and 10,000 — wherever structure has become the constraint.",
  },
  {
    lead: "Engagements are selective.",
    body: " Not every situation is the right fit. The first conversation determines whether there is one.",
  },
  {
    lead: "The output is a framework",
    body: " — not a report. Something structural the business can implement, adapt, and operate from independently.",
  },
];

export default function Engage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="engage" className="border-t border-linen/[0.07] bg-charcoal relative overflow-hidden">
      {/* Radial highlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 50%, rgba(200,145,42,0.05) 0%, transparent 60%)",
          zIndex: 0,
        }}
      />

      <div className="relative px-6 md:px-16 py-[100px]" style={{ zIndex: 1 }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left */}
          <Reveal>
            <div className="text-[0.72rem] tracking-[0.25em] uppercase text-amber mb-7 flex items-center gap-3">
              <span className="w-5 h-px bg-amber inline-block" />
              Request a Diagnosis
            </div>

            <h2
              className="font-serif font-[200] leading-[1.02] tracking-[-0.025em] mb-9"
              style={{ fontSize: "clamp(2.2rem, 4vw, 4.5rem)" }}
            >
              The problem
              <br />
              is already
              <br />
              <em className="italic text-amber">in the room.</em>
            </h2>

            <p className="text-[1rem] leading-[1.9] text-linen/50 mb-4">
              Most organisations already know, at some level, what is wrong.{" "}
              <strong className="text-linen/72 font-[300]">
                What they lack is the precision to name it and the structure to
                address it.
              </strong>{" "}
              That is where this engagement begins.
            </p>
            <p className="text-[1rem] leading-[1.9] text-linen/50 mb-10">
              Write and describe the situation as you actually experience it —
              not the polished version. The messier and more honest the
              description, the faster the diagnosis.
            </p>

            <div className="flex flex-col">
              {conditions.map((c, i) => (
                <div
                  key={i}
                  className="py-[18px] border-t border-linen/[0.07] flex gap-4 items-start last:border-b last:border-linen/[0.07]"
                >
                  <span className="w-[5px] h-[5px] rounded-full bg-amber opacity-50 mt-[7px] shrink-0" />
                  <p className="text-[0.92rem] leading-[1.8] text-linen/52">
                    <strong className="text-linen/75 font-[300]">{c.lead}</strong>
                    {c.body}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right — Form */}
          <Reveal delay={200}>
            {submitted ? (
              <div className="flex flex-col items-start gap-6 py-16">
                <div className="text-[0.58rem] tracking-[0.3em] uppercase text-amber flex items-center gap-3">
                  <span className="w-5 h-px bg-amber inline-block" />
                  Received
                </div>
                <p
                  className="font-serif font-[200] italic text-linen/70 leading-[1.5]"
                  style={{ fontSize: "clamp(1.3rem, 2vw, 1.8rem)" }}
                >
                  Your submission has been received. If there is a genuine fit,
                  you will hear back directly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  <input
                    type="text"
                    placeholder="Your name"
                    required
                    className="bg-linen/[0.04] border border-linen/[0.08] text-linen font-[200] text-[0.95rem] tracking-[0.02em] px-[18px] py-[15px] outline-none w-full placeholder:text-linen/30 placeholder:text-[0.88rem] focus:border-amber/45 focus:bg-linen/[0.06] transition-all"
                    style={{ fontFamily: "inherit" }}
                  />
                  <input
                    type="text"
                    placeholder="Organisation"
                    required
                    className="bg-linen/[0.04] border border-linen/[0.08] text-linen font-[200] text-[0.95rem] tracking-[0.02em] px-[18px] py-[15px] outline-none w-full placeholder:text-linen/30 placeholder:text-[0.88rem] focus:border-amber/45 focus:bg-linen/[0.06] transition-all"
                    style={{ fontFamily: "inherit" }}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    className="bg-linen/[0.04] border border-linen/[0.08] text-linen font-[200] text-[0.95rem] tracking-[0.02em] px-[18px] py-[15px] outline-none w-full placeholder:text-linen/30 placeholder:text-[0.88rem] focus:border-amber/45 focus:bg-linen/[0.06] transition-all"
                    style={{ fontFamily: "inherit" }}
                  />
                  <input
                    type="text"
                    placeholder="Role / Title"
                    className="bg-linen/[0.04] border border-linen/[0.08] text-linen font-[200] text-[0.95rem] tracking-[0.02em] px-[18px] py-[15px] outline-none w-full placeholder:text-linen/30 placeholder:text-[0.88rem] focus:border-amber/45 focus:bg-linen/[0.06] transition-all"
                    style={{ fontFamily: "inherit" }}
                  />
                </div>

                <select
                  defaultValue=""
                  required
                  className="bg-linen/[0.04] border border-linen/[0.08] text-linen/40 font-[200] text-[0.95rem] tracking-[0.02em] px-[18px] py-[15px] outline-none w-full focus:border-amber/45 focus:bg-linen/[0.06] transition-all cursor-pointer appearance-none"
                  style={{ fontFamily: "inherit" }}
                >
                  <option value="" disabled>Primary area of concern</option>
                  {concerns.map((c) => (
                    <option key={c} value={c} className="bg-charcoal text-linen">
                      {c}
                    </option>
                  ))}
                </select>

                <select
                  defaultValue=""
                  required
                  className="bg-linen/[0.04] border border-linen/[0.08] text-linen/40 font-[200] text-[0.95rem] tracking-[0.02em] px-[18px] py-[15px] outline-none w-full focus:border-amber/45 focus:bg-linen/[0.06] transition-all cursor-pointer appearance-none"
                  style={{ fontFamily: "inherit" }}
                >
                  <option value="" disabled>Organisation size</option>
                  {sizes.map((s) => (
                    <option key={s} value={s} className="bg-charcoal text-linen">
                      {s}
                    </option>
                  ))}
                </select>

                <textarea
                  placeholder="Describe the situation as you actually experience it. Not the polished version — the real one. What is happening that should not be? What has been tried? What hasn't worked?"
                  required
                  className="bg-linen/[0.04] border border-linen/[0.08] text-linen font-[200] text-[0.8rem] tracking-[0.03em] px-[18px] py-[15px] outline-none w-full h-[120px] placeholder:text-linen/[0.18] placeholder:text-[0.74rem] focus:border-amber/45 focus:bg-linen/[0.06] transition-all resize-none"
                  style={{ fontFamily: "inherit" }}
                />

                <button
                  type="submit"
                  className="bg-amber text-navy border-none w-full font-[300] text-[0.74rem] tracking-[0.22em] uppercase py-[18px] cursor-pointer hover:opacity-85 transition-opacity mt-1.5"
                  style={{ fontFamily: "inherit" }}
                >
                  Submit for Diagnosis →
                </button>

                <p className="text-[0.76rem] tracking-[0.04em] leading-[1.7] text-linen/30 mt-3 text-center">
                  All submissions are read. Responses are sent to those where
                  there is a genuine fit.
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
