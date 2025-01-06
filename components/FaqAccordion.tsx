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
      "RoleChain stands out as a fully decentralized AI network built specifically for Web3, featuring innovative decentralized node training. Unlike centralized AI solutions, RoleChain leverages blockchain technology and distributed computing to ensure transparent, secure, and community-driven AI development. Our AI agents learn from a global network of nodes, making them more adaptable and resistant to bias while operating across various Web3 sectors, from DeFi to gaming.",
  },
  {
    question: "How does RoleChain ensure the security and privacy of user data?",
    answer:
      "Security and privacy are fundamental to RoleChain's architecture. We employ advanced encryption and decentralized storage across our node network, ensuring data protection during both training and deployment. Our blockchain-based verification system guarantees transparent and tamper-proof AI operations, while our data sovereignty feature gives users complete control over their information sharing preferences.",
  },
  {
    question: "How can I participate in RoleChain's decentralized node training?",
    answer:
      "Anyone can participate in RoleChain's decentralized training network by running a node. Node operators contribute computational resources to train AI models and earn rewards for their participation. This distributed approach ensures more robust and unbiased AI models while creating additional revenue streams for network participants. Whether you're a developer or infrastructure provider, you can join our network and help shape the future of decentralized AI.",
  },
  {
    question: "How does RoleChain's token economy work?",
    answer:
      "The RoleChain ecosystem is powered by our native token, which drives both governance and node training incentives. Token holders can participate in decision-making and earn rewards by staking or contributing to the decentralized training network. The token facilitates network transactions, including AI agent services and node operator compensation. This economic model ensures alignment between all participants while incentivizing high-quality training data and computational resources.",
  },
  {
    question: "What kind of performance can I expect from RoleChain's AI agents?",
    answer:
      "RoleChain's AI agents achieve superior performance through our decentralized training infrastructure. Our network of nodes enables parallel processing and continuous learning, resulting in faster operations even during peak demand. Real-world tests show RoleChain agents process complex DeFi transactions 50% faster than traditional methods, with a 30% improvement in accuracy due to our diverse, global training data. The decentralized nature of our training ensures models remain current and adapt to changing conditions automatically.",
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

