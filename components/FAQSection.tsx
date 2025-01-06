import { FaqAccordion } from "./FaqAccordion";

const FAQSection = () => {
  return (
    <section id="faq" className="mx-auto w-11/12 max-w-screen-xl scroll-mt-32 py-24">
      <div className="space-y-16">
        <div className="space-y-6 text-center">
          <h2 className="text-4xl font-bold md:text-5xl">
            Frequently Asked{" "}
              Questions
          </h2>
          <h4 className="text-xl text-gray-400 md:text-2xl">
            Demystifying RoleChain&apos;s Decentralized AI Network
          </h4>
        </div>

        <div className="mx-auto max-w-4xl">
          <FaqAccordion />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

