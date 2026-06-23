import { useState } from 'react';
import { FAQ_ITEMS } from '../data/mehndiData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0); // Leave first open by default to guide usability

  const toggleAccordion = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-24 bg-ivory text-deep-brown border-b border-beige/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-gold text-xs font-mono tracking-[0.2em] font-semibold uppercase block">
            KNOWLEDGE BASE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-deep-brown tracking-wide leading-tight">
            Frequently Asked Questions
          </h2>
          <div className="h-[2px] w-24 bg-gold mx-auto mt-2" />
          <p className="text-sm text-[#7D6B5D] font-light leading-relaxed">
            Everything you need to know about preparing your skin, scheduling the sessions, and getting rich dark mahogany stains.
          </p>
        </div>

        {/* Expandable Accordion Body */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-beige shadow-sm overflow-hidden transition-all duration-300"
              >
                {/* Accordion trigger Header */}
                <button
                  id={`faq-accordion-trigger-${idx}`}
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between space-x-4 hover:bg-beige/20 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center space-x-3">
                    <HelpCircle className="h-4.5 w-4.5 text-mehndi-green flex-shrink-0" />
                    <span className="font-serif font-bold text-sm md:text-base text-deep-brown tracking-wide">
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-mehndi-green flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </button>

                {/* Collapsible Content */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen 
                      ? 'max-h-72 opacity-100 border-t border-beige/40 bg-[#F5EBDD]/15' 
                      : 'max-h-0 opacity-0 pointer-events-none'
                  }`}
                  style={{ overflow: 'hidden' }}
                >
                  <div className="px-6 py-5">
                    <p className="text-xs md:text-sm text-[#7D6B5D] font-light leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
