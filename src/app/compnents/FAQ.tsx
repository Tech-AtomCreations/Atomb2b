'use client'

export default function FAQ() {
  const faqs = [
    {
      question: "What is your Minimum Order Quantity (MOQ)?",
      answer:
        "Our MOQ is 10 pieces, though it may vary depending on the product category (e.g., uniforms, caps, tote bags).",
    },
    {
      question: "What is your standard lead time?",
      answer:
        "Typical production and dispatch take 7–12 days, depending on fabric, printing method, and order size.",
    },
    {
      question: "Do you provide design support?",
      answer:
        "Yes. We offer free digital mock-ups so you can see how your logo/design will look before production.",
    },
    {
      question: "What printing/branding methods do you use?",
      answer:
        "We specialize in DTF printing, screen printing, and embroidery—recommended based on your design and fabric type.",
    },
    {
      question: "How do reorders work?",
      answer:
        "Reorders are faster and simpler, as your approved design and specs are already on file.",
    },
    {
      question: "Do you ship pan India?",
      answer:
        "Yes. We offer doorstep delivery with tracking across India.",
    },
    {
      question: "What are the billing and payment terms?",
      answer:
        "All orders come with a GST invoice. Payment terms: 50% advance, 50% before dispatch.",
    },
    {
      question: "What is your return/replacement policy?",
      answer:
        "We replace items only in case of manufacturing defects (such as print errors or stitching issues). Returns are not accepted for sizing errors once approved.",
    },
  ]

  return (
    <>
      <style jsx>{`
        /* FAQ section responsive styles (mobile-first) */
        .faq-title {
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          font-size: 20px; /* base for very small screens */
          line-height: 1;
          letter-spacing: 0;
          text-align: center;
          max-width: 300px;
          margin-bottom: 1.75rem;
          color: #0B0014;
        }

        .faq-card {
          background: #F8F8F8;
          border-radius: 8px;
          padding: 16px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .faq-question {
          font-weight: 600;
          color: #0B0014;
          margin-bottom: 8px;
          font-size: 14px;
          font-family: 'DM Sans', sans-serif;
          line-height: 1.3;
        }

        .faq-answer {
          color: rgba(11, 0, 20, 0.7);
          font-size: 12px;
          font-family: 'DM Sans', sans-serif;
          line-height: 1.5;
        }

        /* 375px and above */
        @media (min-width: 375px) {
          .faq-title {
            font-size: 22px;
            max-width: 360px;
            margin-bottom: 1rem;
             padding-top: 26px;
          }

          .faq-card {
            padding: 18px;
          }

          .faq-question {
            font-size: 15px;
            margin-bottom: 10px;
          }

          .faq-answer {
            font-size: 13px;
          }
        }

        /* 425px and above */
        @media (min-width: 425px) {
          .faq-title {
            font-size: 28px;
            max-width: 420px;
            margin-bottom: 1rem;
            padding-top: 8px;
          }

          .faq-card {
            padding: 20px;
          }

          .faq-question {
            font-size: 16px;
            margin-bottom: 12px;
          }

          .faq-answer {
            font-size: 14px;
          }
        }

  /* 769px and above (desktop/tablet) */
  @media (min-width: 769px) {
          .faq-title {
            font-size: 36.65px; /* original desktop size */
            max-width: 500px;
            margin-bottom: 3rem;
          }

          .faq-card {
            padding: 24px;
          }

          .faq-question {
            font-size: 16px;
            margin-bottom: 8px;
          }

          .faq-answer {
            font-size: 14px;
            line-height: 1.6;
          }
        }
      `}</style>

      <section className="bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-2 sm:px-4 lg:px-8">
          {/* Title */}
          <h2 className="faq-title">
            Frequently Asked Questions
          </h2>

          {/* FAQ Blocks */}
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="faq-card"
              >
                <h3 className="faq-question">
                  {faq.question}
                </h3>
                <p className="faq-answer">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
