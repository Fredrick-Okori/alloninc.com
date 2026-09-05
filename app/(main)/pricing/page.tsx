import Link from "next/link";
import Grain from "@/components/Grain";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import "./pricing.css";

export const metadata: Metadata = {
  title: "Allon Inc - Financial Management Services Pricing",
  description:
    "We install the financial management system that catches it - and shows you exactly where to look.",
};

export default function PricingPage() {
  return (
    <>
      <Grain />
      <Nav />

      <div className="pricing-page-wrapper">
        {/* ── HERO ──────────────────────────────────────────────────────── */}
        <section className="hero">
          <div className="hero-eyebrow">Allon Inc · Financial Management Services</div>
          <h1 className="hero-h1">
            Most businesses are losing money
            <br />
            they <span className="gold">don&apos;t know they&apos;re losing.</span>
          </h1>
          <p className="hero-sub">
            We install the financial management system that catches it - and shows you exactly where to look.
          </p>
        </section>

        {/* ── THE HOOK ───────────────────────────────────────────────────── */}
        <section className="hook">
          <div className="hook-q">
            The problem isn&apos;t that you can&apos;t afford financial management.
            <br />
            It&apos;s that you&apos;re already paying for not having it.
          </div>
          <div className="hook-a">
            Every month, businesses without financial management lose money through gaps they cannot see. Cash that leaks through weak controls. Customers who pay late - or not at all. Margins that fall quietly without anyone noticing. Tax bills that arrive without cash to cover them. Decisions made on instinct that cost a year&apos;s worth of growth when they&apos;re wrong.
            <br />
            <br />
            <strong>None of this shows up as a line item. That&apos;s exactly what makes it so expensive.</strong>
          </div>
        </section>

        {/* ── COST OF NOT HAVING ──────────────────────────────────────────── */}
        <section className="stack-section">
          <div className="stack-inner">
            <div className="sec-label">The real cost of doing nothing</div>
            <h2 className="stack-headline">
              Every month without this service,
              <br />
              here is what it is quietly costing you.
            </h2>
            <p className="stack-sub">
              These are not hypothetical. They are the losses that show up - quietly, consistently - in businesses that don&apos;t have financial management in place. Most owners never see them. That&apos;s the problem.
            </p>

            <table className="stack-table">
              <thead>
                <tr>
                  <th style={{ width: "40%" }}>What you don&apos;t have</th>
                  <th style={{ width: "35%" }}>What happens without it</th>
                  <th style={{ width: "25%", textAlign: "right" }}>Conservative monthly cost</th>
                </tr>
              </thead>
              <tbody>
                <tr className="stack-row">
                  <td>
                    <div className="item-name">No one watching your cash daily</div>
                    <div className="item-desc">No daily monitoring of inflows, outflows, and anomalies</div>
                  </td>
                  <td>
                    <div className="item-desc">Petty cash leakage, duplicate payments, unapproved spend - undetected for months</div>
                  </td>
                  <td>
                    <div className="item-price" style={{ color: "var(--red)" }}>UGX 800,000-3,000,000</div>
                  </td>
                </tr>
                <tr className="stack-row">
                  <td>
                    <div className="item-name">No receivables management</div>
                    <div className="item-desc">No structured tracking of who owes you and for how long</div>
                  </td>
                  <td>
                    <div className="item-desc">Customers paying 60-90 days late, or not at all - average business loses 8-15% of revenue this way</div>
                  </td>
                  <td>
                    <div className="item-price" style={{ color: "var(--red)" }}>UGX 2,000,000-8,000,000</div>
                  </td>
                </tr>
                <tr className="stack-row">
                  <td>
                    <div className="item-name">No margin or profitability analysis</div>
                    <div className="item-desc">No visibility into which products, customers, or channels make money</div>
                  </td>
                  <td>
                    <div className="item-desc">Profitable revenue mixed with loss-making work - you keep doing both without knowing. A 3% margin gap on UGX 100M is UGX 3M gone every month</div>
                  </td>
                  <td>
                    <div className="item-price" style={{ color: "var(--red)" }}>UGX 1,500,000-5,000,000</div>
                  </td>
                </tr>
                <tr className="stack-row">
                  <td>
                    <div className="item-name">No cash-flow forecasting</div>
                    <div className="item-desc">No forward visibility on what&apos;s coming in and going out</div>
                  </td>
                  <td>
                    <div className="item-desc">Cash crises arrive without warning. Emergency borrowing, missed payroll, or halted growth - all because the problem wasn&apos;t visible 6 weeks earlier when it was still fixable</div>
                  </td>
                  <td>
                    <div className="item-price" style={{ color: "var(--red)" }}>UGX 1,000,000-10,000,000</div>
                  </td>
                </tr>
                <tr className="stack-row">
                  <td>
                    <div className="item-name">No financial decision support</div>
                    <div className="item-desc">No financial modelling before major hires, expansions, or investments</div>
                  </td>
                  <td>
                    <div className="item-desc">One wrong hiring decision costs 3-6 months of salary plus severance. One ill-timed expansion can drain reserves built over years. Decisions made on instinct are expensive when they&apos;re wrong</div>
                  </td>
                  <td>
                    <div className="item-price" style={{ color: "var(--red)" }}>UGX 2,000,000-15,000,000</div>
                  </td>
                </tr>
                <tr className="stack-row">
                  <td>
                    <div className="item-name">No tax and compliance management</div>
                    <div className="item-desc">No proactive tracking of tax obligations, deadlines, and planning</div>
                  </td>
                  <td>
                    <div className="item-desc">Late filing penalties start at 2% per month in Uganda. An unexpected UGX 10M tax bill with no cash reserves is a crisis. Both are entirely preventable</div>
                  </td>
                  <td>
                    <div className="item-price" style={{ color: "var(--red)" }}>UGX 500,000-4,000,000</div>
                  </td>
                </tr>
                <tr className="stack-row">
                  <td>
                    <div className="item-name">No cost control or monitoring</div>
                    <div className="item-desc">No structured review of expense trends and cost creep</div>
                  </td>
                  <td>
                    <div className="item-desc">Supplier costs increase quietly. Subscriptions renew unchecked. Utilities, travel, and overheads expand without approval. Most businesses find 5-10% in unnecessary costs when they look properly for the first time</div>
                  </td>
                  <td>
                    <div className="item-price" style={{ color: "var(--red)" }}>UGX 800,000-3,000,000</div>
                  </td>
                </tr>
                <tr className="stack-row">
                  <td>
                    <div className="item-name">No early warning system</div>
                    <div className="item-desc">No one looking for problems before they become serious</div>
                  </td>
                  <td>
                    <div className="item-desc">Problems that cost UGX 500K to fix in week one cost UGX 5M to fix in month three. The delay - not the problem itself - is what destroys the value</div>
                  </td>
                  <td>
                    <div className="item-price" style={{ color: "var(--red)" }}>UGX 1,000,000-8,000,000</div>
                  </td>
                </tr>
                <tr className="stack-row">
                  <td>
                    <div className="item-name">Your time spent managing finances personally</div>
                    <div className="item-desc">Hours checking, reconciling, investigating, and worrying</div>
                  </td>
                  <td>
                    <div className="item-desc">A conservative estimate: 8-15 hours per month at UGX 200,000/hour of CEO time. That&apos;s before counting the decisions deferred, the opportunities missed, and the cognitive load carried</div>
                  </td>
                  <td>
                    <div className="item-price" style={{ color: "var(--red)" }}>UGX 1,600,000-3,000,000</div>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="stack-total">
                  <td colSpan={2}>
                    <div className="total-label">Total conservative monthly cost of doing nothing</div>
                    <div className="total-label-sub">Most of this is invisible. That&apos;s what makes it dangerous.</div>
                  </td>
                  <td>
                    <div className="total-price">UGX 11M - 59M</div>
                    <div className="total-price-note">leaking every month</div>
                  </td>
                </tr>
              </tfoot>
            </table>

            <div style={{ marginTop: "24px", padding: "20px 24px", background: "var(--chalk)", borderLeft: "3px solid var(--gold)", fontSize: "13px", color: "var(--slate)", lineHeight: 1.7 }}>
              <strong style={{ color: "var(--navy)", display: "block", marginBottom: "6px" }}>A note on these numbers.</strong>
              These are deliberately conservative estimates based on patterns we see repeatedly across businesses. Your actual exposure depends on your size, sector, and current controls. Some businesses reading this are losing far more. The only way to know your number is to look - which is exactly what we do.
            </div>
          </div>
        </section>

        {/* ── THE REVEAL ──────────────────────────────────────────────────── */}
        <section className="reveal-section">
          <div className="reveal-inner">
            <div className="reveal-setup">Now here&apos;s what Allon Inc charges to stop all of that.</div>
            <div className="reveal-vs">
              You just saw what doing nothing costs.
              <br />
              Somewhere between <strong style={{ color: "var(--gold)" }}>UGX 11 million and UGX 59 million</strong> - every single month.
              <br />
              <span className="arrow">↓</span>
              Here is what it costs to fix it.
            </div>

            <div className="reveal-price-block">
              <div className="reveal-from">Starting from</div>
              <div className="reveal-amount">UGX 3.5M</div>
              <div className="reveal-per">per month</div>
              <div className="reveal-saving">Against a minimum UGX 11M monthly exposure - that&apos;s a 3:1 return at worst</div>
            </div>

            <div className="reveal-reframe">
              That&apos;s <span className="daily">UGX 116,000 per day.</span>
              For a senior financial expert watching your money, catching your problems,
              and telling you what to do - every single day.
              The question isn&apos;t whether you can afford this.
              <span className="daily" style={{ fontSize: "clamp(14px,2.5vw,18px)" }}>It&apos;s whether you can afford not to have it.</span>
            </div>
          </div>
        </section>

        {/* ── TIERS ───────────────────────────────────────────────────────── */}
        <section className="tiers-section">
          <div className="tiers-inner">
            <div className="tiers-head">
              <div className="sec-label" style={{ marginBottom: "12px" }}>Choose your level</div>
              <h2>Pick the plan that fits where you are.</h2>
              <p>All plans include onboarding, a dedicated Allon contact, and a 30-day money-back guarantee.</p>
            </div>

            <div className="tiers-grid">
              {/* ESSENTIAL */}
              <div className="tier">
                <div className="tier-name">Essential</div>
                <div className="tier-price">3.5M <span>UGX/month</span></div>
                <div className="tier-tagline">Financial visibility and control.</div>
                <div className="tier-desc">For growing businesses that need professional financial management without the full-time cost. You stop being the one watching everything.</div>
                <div className="tier-features">
                  <div className="feat-group-label">Core Service</div>
                  <div className="feat">
                    <svg className="feat-ck" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l4 4 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Weekly financial health review
                  </div>
                  <div className="feat">
                    <svg className="feat-ck" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l4 4 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Monthly management report
                  </div>
                  <div className="feat">
                    <svg className="feat-ck" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l4 4 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Cash-flow monitoring
                  </div>
                  <div className="feat">
                    <svg className="feat-ck" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l4 4 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Receivables &amp; payables tracking
                  </div>
                  <div className="feat">
                    <svg className="feat-ck" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l4 4 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Tax &amp; compliance calendar
                  </div>
                  <div className="feat">
                    <svg className="feat-ck" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l4 4 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Dedicated Allon contact
                  </div>
                  <div className="feat-group-label">What You Avoid</div>
                  <div className="feat">
                    <svg className="feat-ck" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l4 4 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Personally checking everything
                  </div>
                  <div className="feat">
                    <svg className="feat-ck" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l4 4 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Tax surprises and missed deadlines
                  </div>
                  <div className="feat">
                    <svg className="feat-ck" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l4 4 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Decisions made without data
                  </div>
                </div>
                <div className="tier-cta">
                  <a
                    href="mailto:elias@alloninc.com?subject=Essential%20Plan%20-%20Request%20a%20Diagnosis"
                    className="btn btn-outline"
                  >
                    Start a conversation
                  </a>
                  <div className="btn-note">30-day money-back guarantee</div>
                </div>
              </div>

              {/* INTELLIGENCE (FEATURED) */}
              <div className="tier featured">
                <div className="tier-badge">Best value</div>
                <div className="tier-name">Intelligence</div>
                <div className="tier-price">5.5M <span>UGX/month</span></div>
                <div className="tier-tagline">Full financial intelligence. No blind spots.</div>
                <div className="tier-desc">The plan most clients choose. Where we go beyond monitoring into real analysis - you understand not just what happened, but why, and what to do next.</div>
                <div className="tier-features">
                  <div className="feat-group-label">Everything in Essential, plus</div>
                  <div className="feat">
                    <svg className="feat-ck" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l4 4 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Cash-flow forecasting (4-12 weeks)
                  </div>
                  <div className="feat">
                    <svg className="feat-ck" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l4 4 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Profitability analysis by product &amp; customer
                  </div>
                  <div className="feat">
                    <svg className="feat-ck" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l4 4 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Margin trend &amp; cost analysis
                  </div>
                  <div className="feat">
                    <svg className="feat-ck" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l4 4 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Decision support on all major moves
                  </div>
                  <div className="feat">
                    <svg className="feat-ck" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l4 4 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Quarterly strategic review
                  </div>
                  <div className="feat">
                    <svg className="feat-ck" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l4 4 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Budget vs actuals tracking
                  </div>
                  <div className="feat">
                    <svg className="feat-ck" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l4 4 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Tax planning &amp; optimisation
                  </div>
                  <div className="feat">
                    <svg className="feat-ck" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l4 4 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Supplier &amp; receivables intelligence
                  </div>
                </div>
                <div className="tier-cta">
                  <a
                    href="mailto:elias@alloninc.com?subject=Intelligence%20Plan%20-%20Request%20a%20Diagnosis"
                    className="btn btn-gold"
                  >
                    Start a conversation
                  </a>
                  <div className="btn-note">30-day money-back guarantee</div>
                </div>
              </div>

              {/* COMMAND */}
              <div className="tier premium">
                <div className="tier-name">Command</div>
                <div className="tier-price">9M+ <span>UGX/month</span></div>
                <div className="tier-tagline">Multi-entity. Full financial command.</div>
                <div className="tier-desc">For businesses with multiple companies, locations, or significant operational complexity. One financial management system across the whole group.</div>
                <div className="tier-features">
                  <div className="feat-group-label">Everything in Intelligence, plus</div>
                  <div className="feat">
                    <svg className="feat-ck" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l4 4 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Multiple entities &amp; companies
                  </div>
                  <div className="feat">
                    <svg className="feat-ck" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l4 4 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Multiple locations
                  </div>
                  <div className="feat">
                    <svg className="feat-ck" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l4 4 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Group-level financial reporting
                  </div>
                  <div className="feat">
                    <svg className="feat-ck" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l4 4 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Cross-entity cash management
                  </div>
                  <div className="feat">
                    <svg className="feat-ck" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l4 4 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Advanced forecasting models
                  </div>
                  <div className="feat">
                    <svg className="feat-ck" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l4 4 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Executive reporting
                  </div>
                  <div className="feat">
                    <svg className="feat-ck" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l4 4 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Priority access &amp; response
                  </div>
                  <div className="feat">
                    <svg className="feat-ck" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l4 4 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Bespoke scope &amp; pricing
                  </div>
                </div>
                <div className="tier-cta">
                  <a
                    href="mailto:elias@alloninc.com?subject=Command%20Plan%20-%20Request%20a%20Diagnosis"
                    className="btn btn-navy"
                  >
                    Talk to us
                  </a>
                  <div className="btn-note">Scoped to your specific situation</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── GUARANTEE ──────────────────────────────────────────────────── */}
        <section className="guarantee">
          <div className="guarantee-inner">
            <div className="g-item">
              <div className="g-icon">◆</div>
              <div className="g-title">30-Day Money-Back Guarantee</div>
              <div className="g-desc">
                If you complete onboarding and don&apos;t feel the engagement is delivering value within 30 days, we refund your first month. No conditions.
              </div>
            </div>
            <div className="g-item">
              <div className="g-icon">◆</div>
              <div className="g-title">No Lock-In</div>
              <div className="g-desc">
                Month-to-month. Cancel with 30 days&apos; notice. We keep clients because of the value we deliver - not because of a contract that traps them.
              </div>
            </div>
            <div className="g-item">
              <div className="g-icon">◆</div>
              <div className="g-title">Proven Results</div>
              <div className="g-desc">
                Our clients have protected and recovered over UGX 4.5 billion through having this system in place. That&apos;s not a projection. That&apos;s a track record.
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ────────────────────────────────────────────────────────── */}
        <section className="faq">
          <div className="faq-inner">
            <div className="faq-head">Questions worth answering honestly.</div>

            <div className="faq-item">
              <div className="faq-q">I already have an accountant. Why do I need this?</div>
              <div className="faq-a">
                Your accountant records what happened. We tell you what to do next. Accountants look backwards - at the records of what already occurred. We look forwards - at what it means, what&apos;s coming, and what you should do about it. They are not substitutes for each other.
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-q">What if I&apos;m not sure I can afford it?</div>
              <div className="faq-a">
                That&apos;s exactly the kind of question we answer for you. In most cases, the cost of not having financial management in place is significantly higher than our fee - in cash leakage, bad decisions, uncollected revenue, and tax surprises. The conversation costs nothing.
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-q">How quickly does it start working?</div>
              <div className="faq-a">
                The first week is onboarding - we learn your business. By week two you receive your first weekly review. Within 30 days you have a complete financial picture of your business. Most clients tell us they feel the difference within the first month.
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-q">What happens if I want to stop?</div>
              <div className="faq-a">
                30 days&apos; notice. That&apos;s it. No penalty, no lock-in, no difficult conversation. We also hand over all reports and financial work - it belongs to you.
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-q">Is this right for my size of business?</div>
              <div className="faq-a">
                If you have meaningful financial activity - staff, suppliers, customers, inventory, or significant monthly transactions - and you feel that the finances are getting too complex to manage personally, this is right for you. If you&apos;re very early-stage with minimal financial complexity, it may be premature. We&apos;ll tell you honestly in the first conversation.
              </div>
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ───────────────────────────────────────────────────── */}
        <section className="final-cta">
          <h2>
            The conversation is free.
            <br />
            <span className="gold">The cost of waiting isn&apos;t.</span>
          </h2>
          <p>
            Every month without financial management is another month of money you can&apos;t see leaving, decisions made without data, and problems that could have been caught earlier.
          </p>
          <a
            href="mailto:elias@alloninc.com?subject=Request%20a%20Diagnosis%20-%20Allon%20Inc"
            className="cta-big"
          >
            Request a Diagnosis
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <div className="final-note">No obligation. No jargon. Just an honest conversation about your business.</div>
        </section>
      </div>

      <Footer />
    </>
  );
}
