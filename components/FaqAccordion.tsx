"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "What makes RoleChain different from other AI platforms?",
    answer:
      "RoleChain stands out as a fully decentralized AI network built specifically for Web3. Unlike centralized AI solutions, RoleChain leverages blockchain technology to ensure transparency, security, and community governance. Our AI agents are autonomous, adaptable, and operate across various Web3 sectors, from DeFi to gaming, providing a level of integration and flexibility unmatched by traditional AI platforms.",
  },
  {
    question: "How does RoleChain ensure the security and privacy of user data?",
    answer:
      "Security and privacy are at the core of RoleChain's design. We utilize advanced encryption techniques and decentralized storage to protect user data. Our blockchain-based verification system ensures that all AI operations are transparent and tamper-proof. Additionally, users have complete control over their data through our data sovereignty feature, allowing them to decide what information is shared and used by the AI agents.",
  },
  {
    question: "Can I create my own AI agents on the RoleChain network?",
    answer:
      "RoleChain is designed to be an open ecosystem where users can create, train, and deploy their own AI agents. Our platform provides tools and frameworks that make it easy for developers of all skill levels to build and customize AI agents for specific use cases. Whether you're looking to create a trading bot, a content moderation AI, or a game asset manager, RoleChain gives you the power to bring your AI ideas to life in the Web3 space.",
  },
  {
    question: "How does RoleChain's token economy work?",
    answer:
      "The RoleChain ecosystem is powered by our native token, which serves multiple purposes. It's used for governance, allowing token holders to participate in decision-making processes. The token also facilitates transactions within the network, such as paying for AI agent services or rewarding node operators. Additionally, staking the token provides benefits like priority access to new features and a share in the network's revenue. This economic model ensures alignment between all participants and drives the continuous growth and improvement of the RoleChain network.",
  },
  {
    question: "What kind of performance can I expect from RoleChain's AI agents?",
    answer:
      "RoleChain's AI agents are designed for high performance in Web3 environments. Our decentralized infrastructure allows for parallel processing, enabling lightning-fast operations even during peak demand. The adaptive nature of our AI means that performance continuously improves over time as agents learn from interactions. In real-world tests, RoleChain agents have demonstrated the ability to process complex DeFi transactions 50% faster than traditional methods and have shown a 30% improvement in accuracy for market predictions compared to centralized alternatives.",
  },
];

export function FaqAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqData.map((item, index) => (
        <AccordionItem
          className="mb-4 overflow-hidden rounded-2xl border border-gray-500  bg-black/50 transition-all "
          key={item.question}
          value={`item-${index + 1}`}
        >
          <AccordionTrigger className=" p-6 text-left text-xl font-bold text-white">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6 text-gray-300">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

