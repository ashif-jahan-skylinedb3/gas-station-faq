import { useState } from "react";

const sections = [
  {
    id: "getting-started-bn",
    number: "০১",
    title: "শুরু করার আগে",
    subtitle: "সম্মিলিত ক্রয়শক্তি সম্পর্কে জানুন",
    questions: [
      {
        id: 1,
        question: "এই যৌথ উদ্যোগটি কী?",
        speaker: "প্রশিক্ষক",
        answer:
          "স্বাধীন দোকানগুলো প্রচলিত পণ্যের অর্ডার একত্র করে, যাতে দল হিসেবে সরবরাহকারীর কাছে ভালো শর্ত চাওয়া যায়। প্রত্যেক মালিক নিজের দোকান নিজেই পরিচালনা করবেন।",
      },
      {
        id: 2,
        question: "কোন পণ্য দিয়ে শুরু করব?",
        speaker: "পাইকার",
        answer:
          "দ্রুত বিক্রি হয় এমন বোতলজাত পানি, পানীয়, প্যাকেটজাত স্ন্যাকস, কফি তৈরির উপকরণ, কাগজের সামগ্রী ও পরিষ্কারক পণ্য দিয়ে শুরু করুন। প্রথমে তিনটি পণ্যের বিভাগ বেছে নিন। কোনো পণ্য অন্তর্ভুক্ত করার আগে বিদ্যমান সরবরাহ চুক্তি যাচাই করুন।",
      },
      {
        id: 3,
        question: "আমাকে কী তথ্য দিতে হবে?",
        speaker: "প্রশিক্ষক",
        answer:
          "অনুমোদিত সমন্বয়কারীকে সাম্প্রতিক চালান, ডেলিভারি খরচ, বিক্রির পরিমাণ এবং বাস্তবসম্মত সাপ্তাহিক অর্ডারের পূর্বাভাস দিন। সম্ভব হলে গত ৯০ দিনের রেকর্ড ব্যবহার করুন। উন্মুক্ত গ্রুপ চ্যাটে এসব তথ্য দেবেন না।",
      },
      {
        id: 4,
        question: "পাইকারদের সঙ্গে কে দরকষাকষি করবেন?",
        speaker: "প্রশিক্ষক",
        answer:
          "সদস্যরা একজন সমন্বয়কারী নিয়োগ করবেন, যিনি তুলনাযোগ্য লিখিত দরপ্রস্তাব সংগ্রহ করবেন। সদস্যরা মোট খরচ ও সেবার মান পর্যালোচনা করবেন। আপনার লিখিত অনুমতি ছাড়া সমন্বয়কারী আপনার দোকানের জন্য অর্ডার দিতে পারবেন না।",
      },
      {
        id: 5,
        question: "যোগ দিলে কি সব পণ্য দলের মাধ্যমে কিনতে হবে?",
        speaker: "প্রশিক্ষক",
        answer:
          "এমন ধরে নেবেন না। সদস্যপদ ও সরবরাহের শর্ত পড়ুন। চাহিদার পূর্বাভাস একটি অনুমান; তবে স্বাক্ষরিত অর্ডার বাধ্যবাধকতা তৈরি করতে পারে। সম্মতির আগে ন্যূনতম ক্রয়, ফি, মেয়াদ ও বেরিয়ে যাওয়ার শর্ত নিশ্চিত করুন।",
      },
    ],
  },
  {
    id: "costs-and-rebates-bn",
    number: "০২",
    title: "খরচ ও রিবেট বুঝুন",
    subtitle: "একই পণ্য তুলনা করুন • সব খরচ ধরুন • রিবেটের শর্ত যাচাই করুন",
    questions: [
      {
        id: 6,
        question: "কোন অফারটি আসলে সস্তা, বুঝব কীভাবে?",
        speaker: "পাইকার",
        answer:
          "একই ব্র্যান্ড, আকার এবং প্রতি কেসে সমান সংখ্যক পণ্য তুলনা করুন। ডেলিভারিসহ মোট খরচকে কেসের পণ্যের সংখ্যা দিয়ে ভাগ করুন। পরিবহন ও ফি যোগ করুন; শুধু বাস্তবে অর্জিত ক্রেডিট বা রিবেট বাদ দিন। কম দামের কেসে পণ্যের সংখ্যা কমও হতে পারে।",
      },
      {
        id: 7,
        question: "ছাড় ও রিবেটের পার্থক্য কী?",
        speaker: "পাইকার",
        answer:
          "ছাড় তাৎক্ষণিকভাবে চালানের মূল্য কমায়। রিবেট হলো লিখিত শর্ত পূরণের পর পরে পাওয়া অর্থ বা ক্রেডিট। কোন পণ্য যোগ্য, কী লক্ষ্যমাত্রা পূরণ করতে হবে, কখন হিসাব হবে এবং কখন অর্থ পাওয়ার কথা—জেনে নিন।",
      },
      {
        id: 8,
        question: "খরচ কমলে মুনাফার হার কীভাবে বাড়ে?",
        speaker: "প্রশিক্ষক",
        answer:
          "ধরুন, একটি পণ্যের বিক্রয়মূল্য $2.00 এবং ক্রয়মূল্য $1.50। মোট মুনাফা $0.50; বিক্রয়মূল্যের হিসাবে মোট মুনাফার হার ২৫%। বিক্রয়মূল্য অপরিবর্তিত রেখে ক্রয়মূল্য $1.40 হলে মোট মুনাফা $0.60 এবং হার ৩০% হবে। এই হিসাবে অন্যান্য খরচ বাদ দেওয়া হয়নি।",
      },
      {
        id: 9,
        question: "দলের রিবেট কীভাবে ভাগ হবে?",
        speaker: "প্রশিক্ষক",
        answer:
          "লিখিত বণ্টননীতি অনুসরণ করুন। উদাহরণ: যোগ্য মোট $100,000 ক্রয়ের পুরো অঙ্কের ওপর ২% রিবেট হলে তা $2,000। যে দোকানের অংশ ১০%, সেটি অনুমোদিত কর্তনের আগে $200 পাবে। হারটি শুধু নির্দিষ্ট সীমার অতিরিক্ত ক্রয়ে প্রযোজ্য হলে ফল ভিন্ন হবে।",
      },
      {
        id: 10,
        question: "সব ফি বাদ দিলে প্রকৃত সাশ্রয় কত?",
        speaker: "প্রশিক্ষক",
        answer:
          "যাচাইকৃত ক্রয় সাশ্রয় ও অর্জিত রিবেট যোগ করুন। এরপর অতিরিক্ত সমবায় ফি, ডেলিভারি, অর্থায়ন, পণ্য ওঠানো-নামানো ও ব্যবস্থাপনা খরচ এবং ক্ষতি বাদ দিন। নিট দামে রিবেট আগেই ধরা থাকলে সেটি আবার যোগ করবেন না।",
      },
    ],
  },
  {
    id: "operate-the-pilot-bn",
    number: "০৩",
    title: "পরীক্ষামূলক কার্যক্রম সফল করুন",
    subtitle:
      "সতর্কভাবে অর্ডার দিন • ডেলিভারি যাচাই করুন • প্রকৃত ফল লিখে রাখুন",
    questions: [
      {
        id: 11,
        question: "রিবেটের লক্ষ্যমাত্রা পূরণ করতে বেশি কিনব?",
        speaker: "পাইকার",
        answer:
          "অতিরিক্ত পণ্য লাভজনকভাবে বিক্রি করতে পারলেই কিনুন। মেয়াদ, সংরক্ষণের জায়গা, নগদ অর্থ ও চাহিদা বিবেচনা করুন। মেয়াদোত্তীর্ণ পণ্যের ক্ষতি বা অর্থায়নের খরচ অতিরিক্ত রিবেটের চেয়েও বেশি হতে পারে।",
      },
      {
        id: 12,
        question: "বিক্রির পরিমাণ কীভাবে বাড়াব?",
        speaker: "প্রশিক্ষক",
        answer:
          "জনপ্রিয় পণ্য মজুত রাখুন, প্রদর্শন উন্নত করুন এবং ক্রেতাদের চাহিদার পণ্য পরীক্ষামূলকভাবে আনুন। নিজের প্রচারমূলক অফার নিজে ঠিক করুন। বিক্রির পরিমাণ ও প্রচারের খরচ বাদ দেওয়ার পর মোট মুনাফা হিসাব করুন। অতিরিক্ত মুনাফা অতিরিক্ত ব্যয়ের চেয়ে বেশি হলেই বাড়তি বিক্রি উপকারী।",
      },
      {
        id: 13,
        question: "ডেলিভারি এলে কী করব?",
        speaker: "প্রশিক্ষক",
        answer:
          "আপনার অনুমোদিত অর্ডারের সঙ্গে মিলিয়ে দেখুন। পরিমাণ, একক মূল্য, ক্ষতি, মেয়াদ এবং বিকল্প পণ্য যাচাই করুন। ঘাটতি লিখে রাখুন এবং সরবরাহকারীর সময়সীমার মধ্যে জানান। দাবি করা ক্রেডিট বা মূল্যসমন্বয়ের প্রমাণ রাখুন।",
      },
      {
        id: 14,
        question:
          "দল কি খুচরা মূল্য ঠিক করতে বা জ্বালানি অন্তর্ভুক্ত করতে পারে?",
        speaker: "প্রশিক্ষক",
        answer:
          "প্রতিটি দোকান স্বাধীনভাবে খুচরা মূল্য নির্ধারণ করবে। মূল্য, মজুরি, ক্রেতা বা বিক্রয় এলাকা ভাগাভাগি নিয়ে সমঝোতা করবেন না। জ্বালানির বিষয়টি আলাদাভাবে মূল্যায়ন করুন; ব্র্যান্ড ও সরবরাহ চুক্তি, ডেলিভারি খরচ এবং ঋণে কেনার শর্ত যৌথ ক্রয় সীমিত করতে পারে।",
      },
      {
        id: 15,
        question: "পরীক্ষামূলক কার্যক্রম শেষে কী হবে?",
        speaker: "প্রশিক্ষক",
        answer:
          "প্রস্তাবিত ৩০ দিনের পরীক্ষামূলক ক্রয়ের ফল পর্যালোচনা করুন। আগের অবস্থার সঙ্গে নিট সাশ্রয়, পণ্য ফুরিয়ে যাওয়া, অপচয়, সরবরাহকারীর কার্যকারিতা ও পরিশোধ তুলনা করুন। স্বাক্ষরিত চুক্তি অনুযায়ী চালিয়ে যান, সরবরাহকারী বা শর্ত বদলান, অথবা বন্ধ করুন। এখনো অর্জিত হয়নি এমন রিবেটকে সাশ্রয় ধরবেন না।",
      },
    ],
  },
];

const firstActions = [
  "সমন্বয়কারীর সঙ্গে যোগাযোগ করে সদস্যপদের শর্ত নিশ্চিত করুন।",
  "সাম্প্রতিক চালান ব্যক্তিগতভাবে জমা দিন।",
  "তিনটি পণ্যের বিভাগ ও সাপ্তাহিক চাহিদা নির্ধারণ করুন।",
  "দাম, ফি, রিবেট ও অর্ডারের বাধ্যবাধকতা পর্যালোচনা করুন।",
  "নিজের অর্ডার নিজে অনুমোদন করুন এবং প্রতি সপ্তাহের ফল লিখে রাখুন।",
];

const toBanglaNumber = (value) =>
  String(value).replace(/\d/g, (digit) => "০১২৩৪৫৬৭৮৯"[Number(digit)]);

function BanglaFAQItem({ item, isOpen, onToggle }) {
  return (
    <article className={`faq-item ${isOpen ? "is-open" : ""}`}>
      <h3 className="faq-item-heading">
        <button
          type="button"
          className="faq-question"
          aria-expanded={isOpen}
          aria-controls={`bn-answer-${item.id}`}
          onClick={onToggle}
        >
          <span className="faq-index">
            {toBanglaNumber(String(item.id).padStart(2, "0"))}
          </span>

          <span className="faq-question-text">{item.question}</span>

          <span className="faq-toggle" aria-hidden="true">
            {isOpen ? "−" : "+"}
          </span>
        </button>
      </h3>

      <div className="faq-answer" id={`bn-answer-${item.id}`} hidden={!isOpen}>
        <span className="faq-speaker">{item.speaker}</span>
        <p>{item.answer}</p>
      </div>
    </article>
  );
}

export default function BanglaHomePage() {
  const [openQuestions, setOpenQuestions] = useState(() => new Set([1, 6, 11]));

  const [completedActions, setCompletedActions] = useState(() => new Set());

  const toggleQuestion = (id) => {
    setOpenQuestions((previous) => {
      const next = new Set(previous);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleAll = () => {
    setOpenQuestions((previous) =>
      previous.size === 15
        ? new Set()
        : new Set(Array.from({ length: 15 }, (_, i) => i + 1)),
    );
  };

  const toggleAction = (id) => {
    setCompletedActions((previous) => {
      const next = new Set(previous);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="training-page training-page--bn" lang="bn">
      <header className="training-hero">
        <div className="training-container">
          <div className="training-eyebrow">
            <span className="training-dot" />
            গ্যাস স্টেশন ও কনভিনিয়েন্স স্টোর
          </div>

          <h1>
            সম্মিলিত ক্রয়শক্তি
            <span>পরিচালক প্রশিক্ষণ</span>
          </h1>

          <p className="training-lead">
            গ্যাস স্টেশন ও কনভিনিয়েন্স স্টোর পরিচালকদের প্রশিক্ষণ
          </p>

          <div className="training-goal">
            <span className="training-goal-label">এই প্রশিক্ষণের উদ্দেশ্য</span>
            <p>
              একসঙ্গে পণ্য কেনা, প্রকৃত খরচ তুলনা করা এবং বেশি মুনাফা ধরে রাখা
              শেখা।
            </p>
          </div>

          <p className="training-intro">
            একজন পরিচালকের প্রশ্ন পড়বেন; অন্যজন প্রশিক্ষক বা পাইকারের উত্তর
            পড়বেন। এটি একটি প্রস্তাবিত কর্মসূচি; সরবরাহকারীর অনুমোদিত অফার নয়।
          </p>

          <div className="training-hero-meta">
            <span>১৫টি প্রশ্ন</span>
            <span>৩টি বিভাগ</span>
            <span>৫টি করণীয়</span>
          </div>
        </div>
      </header>

      <main className="training-container training-main">
        <div className="training-toolbar">
          <nav className="training-nav" aria-label="প্রশিক্ষণের বিভাগ">
            {sections.map((section) => (
              <a key={section.id} href={`#${section.id}`}>
                {section.title}
              </a>
            ))}
          </nav>

          <button type="button" className="expand-all" onClick={toggleAll}>
            {openQuestions.size === 15
              ? "সব উত্তর বন্ধ করুন"
              : "সব উত্তর দেখুন"}
          </button>
        </div>

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
                <BanglaFAQItem
                  key={item.id}
                  item={item}
                  isOpen={openQuestions.has(item.id)}
                  onToggle={() => toggleQuestion(item.id)}
                />
              ))}
            </div>

            {section.id === "getting-started-bn" && (
              <aside className="training-note">
                <span className="training-note-label">অনুশীলন</span>
                <p>
                  আপনার দোকানে প্রতি সপ্তাহে কেনা হয় এমন তিনটি পণ্যের নাম
                  লিখুন। ব্র্যান্ড, প্যাকেটের আকার, পরিমাণ এবং ডেলিভারিসহ দাম
                  উল্লেখ আছে এমন চালান সঙ্গে আনুন।
                </p>
              </aside>
            )}

            {section.id === "costs-and-rebates-bn" && (
              <aside className="training-example">
                <div className="training-example-heading">
                  <span className="training-note-label">মাসিক উদাহরণ</span>
                  <h3>আপনার প্রকৃত সাশ্রয় কত?</h3>
                </div>

                <div className="training-math">
                  <div className="math-item">
                    <span>ক্রয়ে সাশ্রয়</span>
                    <strong>$500</strong>
                  </div>

                  <span className="math-symbol">+</span>

                  <div className="math-item">
                    <span>অর্জিত রিবেট</span>
                    <strong>$100</strong>
                  </div>

                  <span className="math-symbol">−</span>

                  <div className="math-item">
                    <span>অতিরিক্ত খরচ</span>
                    <strong>$150</strong>
                  </div>

                  <span className="math-symbol">=</span>

                  <div className="math-item training-math-result">
                    <span>নিট সুবিধা</span>
                    <strong>$450</strong>
                  </div>
                </div>

                <p className="training-example-disclaimer">
                  সব অঙ্ক কাল্পনিক; সরবরাহকারীর দর বা নিশ্চিত আয়ের প্রতিশ্রুতি
                  নয়। অবিক্রীত পণ্য মজুত হিসেবেই থাকে; কম দামে কিনলেই তা সঙ্গে
                  সঙ্গে মুনাফা হয় না।
                </p>
              </aside>
            )}
          </section>
        ))}

        <section className="training-actions" id="first-actions-bn">
          <div className="training-actions-header">
            <span className="training-note-label">আপনার করণীয়</span>

            <h2>আপনার প্রথম পাঁচটি কাজ</h2>
          </div>

          <div className="actions-progress" aria-live="polite">
            {toBanglaNumber(completedActions.size)} / ৫ সম্পন্ন
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
                    {toBanglaNumber(String(index + 1).padStart(2, "0"))}
                  </span>

                  <span>{action}</span>
                </label>
              </li>
            ))}
          </ol>

          <div className="training-remember">
            <strong>মনে রাখুন</strong>
            <p>
              চাহিদা অনুযায়ী কিনুন। চুক্তিমতো পরিশোধ করুন। নিট সাশ্রয় যাচাই
              করুন। খুচরা মূল্য স্বাধীনভাবে নির্ধারণ করুন।
            </p>
          </div>
        </section>
      </main>

      <footer className="training-footer">
        <div className="training-container">
          <strong>সম্মিলিত ক্রয়শক্তি | পরিচালক প্রশিক্ষণ</strong>

          <p>
            মূল নথির পাঠসূত্র: USDA Cooperative Services; FTC Price Fixing
            guidance। এই নির্দেশিকা স্বাক্ষরিত ক্রয়চুক্তির বিকল্প নয়।
          </p>
        </div>
      </footer>
    </div>
  );
}
