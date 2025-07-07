"use client";

import { LuFileText, LuScale, LuShieldCheck, LuAlertTriangle, LuGavel, LuUsers } from "react-icons/lu";

const TermsAndConditionsPage = () => {
  const termsOverview = [
    {
      icon: <LuFileText className="w-8 h-8" />,
      title: "Service Agreement",
      description: "These terms govern your use of our AI agent platform and define the relationship between you and Rolechain."
    },
    {
      icon: <LuScale className="w-8 h-8" />,
      title: "Fair Usage",
      description: "We maintain fair usage policies to ensure optimal performance and availability for all users."
    },
    {
      icon: <LuShieldCheck className="w-8 h-8" />,
      title: "User Responsibilities",
      description: "Users are responsible for maintaining account security and using our services in compliance with applicable laws."
    },
    {
      icon: <LuAlertTriangle className="w-8 h-8" />,
      title: "Prohibited Activities",
      description: "Certain activities are prohibited to maintain platform integrity and protect all users."
    },
    {
      icon: <LuGavel className="w-8 h-8" />,
      title: "Dispute Resolution",
      description: "We provide clear procedures for resolving disputes and handling service-related issues."
    },
    {
      icon: <LuUsers className="w-8 h-8" />,
      title: "Account Management",
      description: "Guidelines for creating, maintaining, and terminating your account with our platform."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#3C0C3E] via-[#0E0E21] to-[#101112] relative overflow-hidden">
      {/* Background "TERMS" text */}
      <div className="absolute top-4 left-0 w-full select-none place-items-center text-center uppercase grid md:-top-6 lg:-top-[45px] z-0">
        <p className="font-outline bg-gradient-to-b from-[#C193FD] to-transparent to-60% bg-clip-text text-[80px] md:text-[100px] lg:text-[150px] xl:text-[200px] font-bold tracking-tight text-[#3C0C3E] opacity-50">
          Terms
        </p>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-[#FF6600] via-[#F700F7] to-[#0078F6] bg-clip-text text-transparent">
              Terms &
            </span>{" "}
            <span className="text-white">Conditions</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-medium">
            Please read these terms carefully before using our AI agent platform. By using our services, you agree to be bound by these terms.
          </p>
        </div>

        {/* Terms Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {termsOverview.map((term, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-r from-[#FF6600]/20 via-[#F700F7]/20 to-[#0078F6]/20 rounded-xl text-white">
                  {term.icon}
                </div>
                <h3 className="text-lg font-bold text-white">{term.title}</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">{term.description}</p>
            </div>
          ))}
        </div>

        {/* Detailed Terms */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              <span className="bg-gradient-to-r from-[#FF6600] via-[#F700F7] to-[#0078F6] bg-clip-text text-transparent">
                Detailed
              </span>{" "}
              <span className="text-white">Terms</span>
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h3>
                <div className="space-y-4 text-gray-300">
                  <p>By accessing or using Rolechain&apos;s AI agent platform, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access the service.</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>These terms apply to all users of the platform</li>
                    <li>You must be at least 18 years old to use our services</li>
                    <li>You represent that you have the legal capacity to enter into this agreement</li>
                    <li>Your use of the service constitutes acceptance of these terms</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">2. Description of Service</h3>
                <div className="space-y-4 text-gray-300">
                  <p>Rolechain provides an AI agent orchestration platform that allows users to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Deploy and manage AI agents across Web3 ecosystems</li>
                    <li>Access a marketplace of specialized AI agents</li>
                    <li>Create custom AI agents for specific use cases</li>
                    <li>Integrate AI agents with blockchain protocols and DeFi platforms</li>
                    <li>Monitor and analyze AI agent performance</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">3. User Accounts</h3>
                <div className="space-y-4 text-gray-300">
                  <p>To use our services, you must create an account. You are responsible for:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Providing accurate and complete information during registration</li>
                    <li>Maintaining the security of your account credentials</li>
                    <li>All activities that occur under your account</li>
                    <li>Notifying us immediately of any unauthorized use</li>
                    <li>Keeping your account information up to date</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">4. Acceptable Use Policy</h3>
                <div className="space-y-4 text-gray-300">
                  <p>You agree not to use our services to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Violate any applicable laws or regulations</li>
                    <li>Infringe on intellectual property rights</li>
                    <li>Transmit harmful or malicious code</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Interfere with other users&apos; use of the service</li>
                    <li>Use the service for illegal financial activities</li>
                    <li>Create fake accounts or impersonate others</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">5. Subscription and Payment</h3>
                <div className="space-y-4 text-gray-300">
                  <p>Our subscription terms include:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Subscription fees are billed in advance on a recurring basis</li>
                    <li>All fees are non-refundable except as required by law</li>
                    <li>We may change subscription fees with 30 days&apos; notice</li>
                    <li>You can cancel your subscription at any time</li>
                    <li>Cancellation takes effect at the end of the current billing period</li>
                    <li>We reserve the right to suspend accounts for non-payment</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">6. Intellectual Property</h3>
                <div className="space-y-4 text-gray-300">
                  <p>Intellectual property rights are distributed as follows:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Rolechain retains all rights to the platform and its technology</li>
                    <li>You retain ownership of your data and custom AI agents</li>
                    <li>You grant us a license to use your data to provide our services</li>
                    <li>You may not reverse engineer or copy our technology</li>
                    <li>All trademarks and service marks belong to their respective owners</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">7. Privacy and Data Protection</h3>
                <div className="space-y-4 text-gray-300">
                  <p>Your privacy is important to us. Our data practices include:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>We collect and use data as described in our Privacy Policy</li>
                    <li>We implement security measures to protect your data</li>
                    <li>We comply with applicable data protection regulations</li>
                    <li>You have rights regarding your personal data</li>
                    <li>We may process data to improve our services</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">8. Limitation of Liability</h3>
                <div className="space-y-4 text-gray-300">
                  <p>To the maximum extent permitted by law:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>We provide the service &quot;as is&quot; without warranties</li>
                    <li>We are not liable for indirect or consequential damages</li>
                    <li>Our total liability is limited to the amount you paid in the last 12 months</li>
                    <li>We are not responsible for third-party services or content</li>
                    <li>You use AI agents at your own risk</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">9. Termination</h3>
                <div className="space-y-4 text-gray-300">
                  <p>This agreement may be terminated:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>By you at any time by closing your account</li>
                    <li>By us if you violate these terms</li>
                    <li>By us with 30 days&apos; notice for any reason</li>
                    <li>Immediately if required by law or regulation</li>
                    <li>Upon termination, your access to the service will cease</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">10. Changes to Terms</h3>
                <div className="space-y-4 text-gray-300">
                  <p>We may modify these terms at any time:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>We will notify you of significant changes</li>
                    <li>Changes take effect 30 days after notification</li>
                    <li>Continued use constitutes acceptance of new terms</li>
                    <li>You may terminate your account if you disagree with changes</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">11. Governing Law</h3>
                <div className="space-y-4 text-gray-300">
                  <p>These terms are governed by:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>The laws of the jurisdiction where Rolechain is incorporated</li>
                    <li>Disputes will be resolved through binding arbitration</li>
                    <li>You waive the right to participate in class action lawsuits</li>
                    <li>If arbitration is unavailable, disputes will be resolved in designated courts</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#FF6600]/10 via-[#F700F7]/10 to-[#0078F6]/10 border border-purple-500/30 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-white">Questions About These Terms?</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Our legal team is available to answer any questions about these terms and conditions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-[#FF6600] via-[#F700F7] to-[#0078F6] text-white px-8 py-4 rounded-xl font-medium text-lg hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-purple-500/30">
                Contact Legal Team
              </button>
              <button className="bg-white/10 text-white border border-white/20 hover:bg-white/20 px-8 py-4 rounded-xl font-medium text-lg hover:scale-105 transition-all duration-200">
                legal@rolechain.org
              </button>
            </div>
          </div>
        </div>

        {/* Last Updated */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage; 