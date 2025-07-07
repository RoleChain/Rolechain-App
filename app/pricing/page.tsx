"use client";

import { useState } from "react";
import { LuCheck, LuX } from "react-icons/lu";

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for individuals getting started with AI agents",
      monthlyPrice: 29,
      annualPrice: 290,
      features: [
        "5 AI Agents",
        "Basic Analytics",
        "Email Support",
        "1 Custom Agent",
        "Basic Integrations",
        "Community Access"
      ],
      limitations: [
        "Limited API calls",
        "Basic templates only"
      ],
      popular: false,
      gradient: "from-gray-500/20 to-gray-600/20",
      borderColor: "border-gray-500/30"
    },
    {
      name: "Professional",
      description: "For teams and professionals scaling their AI operations",
      monthlyPrice: 99,
      annualPrice: 990,
      features: [
        "25 AI Agents",
        "Advanced Analytics",
        "Priority Support",
        "10 Custom Agents",
        "Advanced Integrations",
        "API Access",
        "Team Collaboration",
        "Custom Workflows"
      ],
      limitations: [],
      popular: true,
      gradient: "from-[#FF6600]/20 via-[#F700F7]/20 to-[#0078F6]/20",
      borderColor: "border-purple-500/50"
    },
    {
      name: "Enterprise",
      description: "For large organizations with advanced requirements",
      monthlyPrice: 299,
      annualPrice: 2990,
      features: [
        "Unlimited AI Agents",
        "Enterprise Analytics",
        "24/7 Dedicated Support",
        "Unlimited Custom Agents",
        "Enterprise Integrations",
        "Full API Access",
        "Advanced Security",
        "Custom Deployment",
        "SLA Guarantee",
        "White-label Options"
      ],
      limitations: [],
      popular: false,
      gradient: "from-purple-500/20 to-blue-500/20",
      borderColor: "border-blue-500/30"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#3C0C3E] via-[#0E0E21] to-[#101112] relative overflow-hidden">
      {/* Background "PRICING" text */}
      <div className="absolute top-4 left-0 w-full select-none place-items-center text-center uppercase grid md:-top-6 lg:-top-[45px] z-0">
        <p className="font-outline bg-gradient-to-b from-[#C193FD] to-transparent to-60% bg-clip-text text-[80px] md:text-[100px] lg:text-[150px] xl:text-[200px] font-bold tracking-tight text-[#3C0C3E] opacity-50">
          Pricing
        </p>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-[#FF6600] via-[#F700F7] to-[#0078F6] bg-clip-text text-transparent">
              Choose Your
            </span>{" "}
            <span className="text-white">Plan</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-medium">
            Scale your AI agent operations with flexible pricing that grows with your needs
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center mb-12">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-full p-1 flex items-center">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                !isAnnual
                  ? "bg-gradient-to-r from-[#FF6600] via-[#F700F7] to-[#0078F6] text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                isAnnual
                  ? "bg-gradient-to-r from-[#FF6600] via-[#F700F7] to-[#0078F6] text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Annual
              <span className="ml-2 px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-white/5 backdrop-blur-xl border ${plan.borderColor} rounded-2xl p-8 shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 hover:scale-105 ${
                plan.popular ? "ring-2 ring-purple-500/50" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-[#FF6600] via-[#F700F7] to-[#0078F6] text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl md:text-5xl font-bold text-white">
                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-400 ml-2">
                    /{isAnnual ? "year" : "month"}
                  </span>
                </div>

                <button className={`w-full py-4 rounded-xl font-medium transition-all duration-200 hover:scale-105 ${
                  plan.popular
                    ? "bg-gradient-to-r from-[#FF6600] via-[#F700F7] to-[#0078F6] text-white shadow-lg hover:shadow-purple-500/30"
                    : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
                }`}>
                  Get Started
                </button>
              </div>

              <div className="space-y-4">
                <h4 className="text-white font-semibold text-lg">Features included:</h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <LuCheck className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.limitations.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <h4 className="text-gray-400 font-medium text-sm mb-3">Limitations:</h4>
                    <ul className="space-y-2">
                      {plan.limitations.map((limitation, limitIndex) => (
                        <li key={limitIndex} className="flex items-center gap-3">
                          <LuX className="w-4 h-4 text-red-400 flex-shrink-0" />
                          <span className="text-gray-500 text-sm">{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-[#FF6600] via-[#F700F7] to-[#0078F6] bg-clip-text text-transparent">
              Frequently Asked
            </span>{" "}
            <span className="text-white">Questions</span>
          </h2>

          <div className="space-y-6">
            {[
              {
                question: "Can I change my plan anytime?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
              },
              {
                question: "Do you offer refunds?",
                answer: "We offer a 30-day money-back guarantee for all plans. If you're not satisfied, we'll provide a full refund."
              },
              {
                question: "What happens if I exceed my agent limit?",
                answer: "You'll receive notifications when approaching your limit. You can upgrade your plan or purchase additional agents as needed."
              },
              {
                question: "Is there a free trial?",
                answer: "Yes, all plans come with a 14-day free trial. No credit card required to start."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
                <h3 className="text-white font-semibold text-lg mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-[#FF6600]/10 via-[#F700F7]/10 to-[#0078F6]/10 border border-purple-500/30 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-white">Ready to get started?</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of teams already using our AI agents to automate their workflows and boost productivity.
            </p>
            <button className="bg-gradient-to-r from-[#FF6600] via-[#F700F7] to-[#0078F6] text-white px-8 py-4 rounded-xl font-medium text-lg hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-purple-500/30">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage; 