import { useState } from "react";

const sections = [
  {
    id: "getting-started",
    number: "01",
    title: "Getting Started",
    subtitle: "Understand the opportunity and how to participate.",
    questions: [
      {
        id: 1,
        question: "What is this group opportunity?",
        speaker: "Trainer",
        answer:
          "Independent stores combine orders for common products so the group can request better supplier terms. Each owner continues running their own store.",
      },
      {
        id: 2,
        question: "Which products should we start with?",
        speaker: "Wholesaler",
        answer:
          "Start with fast-selling bottled water, beverages, packaged snacks, coffee supplies, paper goods, and cleaning products. Pick three categories first. Check existing supplier agreements before including a product.",
      },
      {
        id: 3,
        question: "What do I need to provide?",
        speaker: "Trainer",
        answer:
          "Give the authorized coordinator recent invoices, delivery charges, quantities sold, and a realistic weekly order forecast. Use 90 days of records where available. Keep your information out of an open group chat.",
      },
      {
        id: 4,
        question: "Who negotiates with wholesalers?",
        speaker: "Trainer",
        answer:
          "Members appoint a coordinator to collect comparable written bids. Members review the total cost and service. The coordinator cannot place an order for your store without your written authorization.",
      },
      {
        id: 5,
        question: "Does joining mean I must buy everything through the group?",
        speaker: "Trainer",
        answer:
          "Do not assume that. Read the participation and supplier terms. Forecasts are estimates; a signed order may create an obligation. Confirm any minimum purchases, fees, duration, and exit terms before agreeing.",
      },
    ],
  },
  {
    id: "costs-and-rebates",
    number: "02",
    title: "Understand Costs and Rebates",
    subtitle:
      "Compare the same product, count every cost, and verify the rebate rules.",
    questions: [
      {
        id: 6,
        question: "How do I know which offer is really cheaper?",
        speaker: "Wholesaler",
        answer:
          "Compare the same brand, size, and case count. Divide total delivered cost by the units in the case. Include freight and fees; subtract only credits or rebates actually earned. A cheaper case can contain fewer units.",
      },
      {
        id: 7,
        question: "What is the difference between a discount and a rebate?",
        speaker: "Wholesaler",
        answer:
          "A discount reduces your invoice now. A rebate is paid or credited later after you meet written conditions. Ask which products qualify, what target applies, when it is measured, and when payment is due.",
      },
      {
        id: 8,
        question: "Can you show how a lower cost improves margin?",
        speaker: "Trainer",
        answer:
          "Suppose an item sells for $2.00 and costs $1.50. Gross profit is $0.50 and gross margin is 25%. If cost falls to $1.40 with the selling price unchanged, gross profit becomes $0.60 and gross margin becomes 30%, before other costs.",
      },
      {
        id: 9,
        question: "How is a group rebate shared?",
        speaker: "Trainer",
        answer:
          "Use the written allocation rule. For example, a 2% rebate on all $100,000 of qualifying purchases equals $2,000. A store responsible for 10% receives $200 before approved deductions. If the rate applies only above a threshold, the result differs.",
      },
      {
        id: 10,
        question: "What is my actual saving after fees?",
        speaker: "Trainer",
        answer:
          "Start with verified purchasing savings and earned rebates, then subtract extra co-op fees, delivery, financing, handling, and losses. Do not add a rebate twice if it is already included in the net price.",
      },
    ],
  },
  {
    id: "operate-the-pilot",
    number: "03",
    title: "Operate the Pilot Successfully",
    subtitle:
      "Order carefully, verify deliveries, and track what actually improves.",
    questions: [
      {
        id: 11,
        question: "Should I buy more to reach a rebate target?",
        speaker: "Wholesaler",
        answer:
          "Only if you can sell the extra stock profitably. Consider shelf life, storage, cash, and demand. An extra rebate can be smaller than the cost of expired goods or financing.",
      },
      {
        id: 12,
        question: "How do I increase sales volume?",
        speaker: "Trainer",
        answer:
          "Keep popular items available, improve displays, and test products customers want. Choose your own promotions. Track units sold and gross profit after promotional costs. More sales are useful only when the additional profit exceeds the additional expense.",
      },
      {
        id: 13,
        question: "What should I do when a delivery arrives?",
        speaker: "Trainer",
        answer:
          "Match it to your approved order. Check quantities, unit prices, damage, expiry dates, and substitutions. Record shortages and report them within the supplier’s deadline. Keep proof of any credit requested.",
      },
      {
        id: 14,
        question: "Can the group set retail prices or include fuel?",
        speaker: "Trainer",
        answer:
          "Each store must decide its retail prices independently. Do not agree on prices, wages, customers, or territories. Evaluate fuel separately because branding and supply contracts, delivery costs, and credit terms may limit group purchasing.",
      },
      {
        id: 15,
        question: "What happens after the trial?",
        speaker: "Trainer",
        answer:
          "Review a proposed 30-day buying pilot. Compare net savings, stockouts, waste, supplier performance, and payments with your baseline. Continue, change suppliers or terms, or stop according to the signed agreements. Do not treat an unearned rebate as a saving.",
      },
    ],
  },
];

const firstActions = [
  "Contact the coordinator and confirm membership terms.",
  "Submit recent invoices privately.",
  "Select three product categories and forecast weekly demand.",
  "Review all prices, fees, rebate rules, and order obligations.",
  "Approve your own orders and record results every week.",
];

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <article className={`faq-item ${isOpen ? "is-open" : ""}`}>
      <h3 className="faq-item-heading">
        <button
          type="button"
          className="faq-question"
          aria-expanded={isOpen}
          aria-controls={`answer-${item.id}`}
          onClick={onToggle}
        >
          <span className="faq-index">{String(item.id).padStart(2, "0")}</span>

          <span className="faq-question-text">{item.question}</span>

          <span className="faq-toggle" aria-hidden="true">
            {isOpen ? "−" : "+"}
          </span>
        </button>
      </h3>

      <div id={`answer-${item.id}`} className="faq-answer" hidden={!isOpen}>
        <span className="faq-speaker">{item.speaker}</span>
        <p>{item.answer}</p>
      </div>
    </article>
  );
}

export default function HomePage() {
  const [openQuestions, setOpenQuestions] = useState(() => new Set([1, 6, 11]));

  const [completedActions, setCompletedActions] = useState(() => new Set());

  const toggleQuestion = (id) => {
    setOpenQuestions((previous) => {
      const next = new Set(previous);

      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }

      return next;
    });
  };

  const allOpen = openQuestions.size === 15;

  const toggleAll = () => {
    if (allOpen) {
      setOpenQuestions(new Set());
    } else {
      setOpenQuestions(new Set(Array.from({ length: 15 }, (_, i) => i + 1)));
    }
  };

  const toggleAction = (index) => {
    setCompletedActions((previous) => {
      const next = new Set(previous);

      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }

      return next;
    });
  };

  return (
    <div className="training-page">
      {/* HERO */}

      <header className="training-hero">
        <div className="training-container">
          <div className="training-eyebrow">
            <span className="training-dot" />
            OPERATOR TRAINING GUIDE
          </div>

          <h1>
            Group Buying Power
            <span>Operator Training FAQ</span>
          </h1>

          <p className="training-lead">
            A simple read-aloud dialogue for gas station and convenience store
            operators
          </p>

          <div className="training-goal">
            <span className="training-goal-label">TRAINING GOAL</span>

            <p>
              Learn how to pool purchases, compare the true cost, and keep more
              profit.
            </p>
          </div>

          <p className="training-intro">
            One person reads the operator questions; another reads the trainer
            or wholesaler answers. This is a proposed program, not an approved
            supplier offer.
          </p>

          <div className="training-hero-meta">
            <span>15 Questions</span>
            <span>3 Learning Sections</span>
            <span>5 Next Steps</span>
          </div>
        </div>
      </header>

      <main className="training-container training-main">
        {/* NAVIGATION */}

        <div className="training-toolbar">
          <nav className="training-nav" aria-label="Training sections">
            {sections.map((section) => (
              <a href={`#${section.id}`} key={section.id}>
                {section.title}
              </a>
            ))}
          </nav>

          <button type="button" className="expand-all" onClick={toggleAll}>
            {allOpen ? "Collapse All" : "Expand All"}
          </button>
        </div>

        {/* FAQ SECTIONS */}

        {sections.map((section) => (
          <section
            className="training-section"
            id={section.id}
            key={section.id}
          >
            <div className="training-section-header">
              <span className="training-section-number">{section.number}</span>

              <div>
                <h2>{section.title}</h2>
                <p>{section.subtitle}</p>
              </div>
            </div>

            <div className="faq-list">
              {section.questions.map((item) => (
                <FAQItem
                  key={item.id}
                  item={item}
                  isOpen={openQuestions.has(item.id)}
                  onToggle={() => toggleQuestion(item.id)}
                />
              ))}
            </div>

            {/* PRACTICE EXERCISE */}

            {section.id === "getting-started" && (
              <aside className="training-note">
                <span className="training-note-label">PRACTICE</span>

                <p>
                  Name three products your store buys every week. Bring invoices
                  showing their brand, pack size, quantity, and delivered price.
                </p>
              </aside>
            )}

            {/* COST EXAMPLE */}

            {section.id === "costs-and-rebates" && (
              <aside className="training-example">
                <div className="training-example-heading">
                  <span className="training-note-label">
                    ILLUSTRATIVE MONTHLY EXAMPLE
                  </span>

                  <h3>What does the store really save?</h3>
                </div>

                <div className="training-math">
                  <div className="math-item">
                    <span>Purchasing savings</span>
                    <strong>$500</strong>
                  </div>

                  <span className="math-symbol">+</span>

                  <div className="math-item">
                    <span>Earned rebate</span>
                    <strong>$100</strong>
                  </div>

                  <span className="math-symbol">−</span>

                  <div className="math-item">
                    <span>Extra costs</span>
                    <strong>$150</strong>
                  </div>

                  <span className="math-symbol">=</span>

                  <div className="math-item training-math-result">
                    <span>Net benefit</span>
                    <strong>$450</strong>
                  </div>
                </div>

                <p className="training-example-disclaimer">
                  All figures are hypothetical, not supplier quotes or promised
                  returns. Unsold goods remain inventory; buying them at a
                  discount does not immediately create profit.
                </p>
              </aside>
            )}
          </section>
        ))}

        {/* FIRST FIVE ACTIONS */}

        <section className="training-actions" id="first-actions">
          <div className="training-actions-header">
            <span className="training-note-label">READY TO START?</span>

            <h2>Your First Five Actions</h2>

            <p>
              Follow these five steps to prepare for the proposed group buying
              pilot.
            </p>
          </div>

          <div className="actions-progress">
            {completedActions.size} of 5 completed
          </div>

          <ol className="training-checklist">
            {firstActions.map((action, index) => (
              <li key={index}>
                <label
                  className={
                    completedActions.has(index) ? "action-complete" : ""
                  }
                >
                  <input
                    type="checkbox"
                    checked={completedActions.has(index)}
                    onChange={() => toggleAction(index)}
                  />

                  <span className="action-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span>{action}</span>
                </label>
              </li>
            ))}
          </ol>

          <div className="training-remember">
            <strong>REMEMBER</strong>

            <p>
              Buy according to demand. Pay as agreed. Verify net savings. Keep
              retail pricing independent.
            </p>
          </div>
        </section>
      </main>

      {/* FOOTER */}

      <footer className="training-footer">
        <div className="training-container">
          <strong>
            GROUP BUYING POWER
            <span> / OPERATOR TRAINING</span>
          </strong>

          <p>
            Reference reading: USDA Cooperative Services; FTC Price Fixing
            guidance. This training guide does not replace your signed
            purchasing agreements.
          </p>
        </div>
      </footer>
    </div>
  );
}
