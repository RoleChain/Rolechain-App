"use client";

import { LuShield, LuEye, LuLock, LuDatabase, LuUsers, LuGlobe } from "react-icons/lu";

const PrivacyPolicyPage = () => {
  const privacyPrinciples = [
    {
      icon: <LuShield className="w-8 h-8" />,
      title: "Data Protection",
      description: "We employ industry-standard security measures to protect your personal information from unauthorized access, disclosure, or misuse."
    },
    {
      icon: <LuEye className="w-8 h-8" />,
      title: "Transparency",
      description: "We are transparent about what data we collect, how we use it, and with whom we share it. No hidden practices or unclear terms."
    },
    {
      icon: <LuLock className="w-8 h-8" />,
      title: "Your Control",
      description: "You have full control over your data. You can access, modify, or delete your information at any time through your account settings."
    },
    {
      icon: <LuDatabase className="w-8 h-8" />,
      title: "Minimal Collection",
      description: "We only collect data that is necessary for providing our services. We don't collect unnecessary personal information."
    },
    {
      icon: <LuUsers className="w-8 h-8" />,
      title: "No Selling",
      description: "We never sell your personal data to third parties. Your information is used solely to improve our services and your experience."
    },
    {
      icon: <LuGlobe className="w-8 h-8" />,
      title: "Global Compliance",
      description: "We comply with international privacy regulations including GDPR, CCPA, and other applicable data protection laws."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#3C0C3E] via-[#0E0E21] to-[#101112] relative overflow-hidden">
      {/* Background "PRIVACY" text */}
      <div className="absolute top-4 left-0 w-full select-none place-items-center text-center uppercase grid md:-top-6 lg:-top-[45px] z-0">
        <p className="font-outline bg-gradient-to-b from-[#C193FD] to-transparent to-60% bg-clip-text text-[80px] md:text-[100px] lg:text-[150px] xl:text-[200px] font-bold tracking-tight text-[#3C0C3E] opacity-50">
          Privacy
        </p>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-[#FF6600] via-[#F700F7] to-[#0078F6] bg-clip-text text-transparent">
              Privacy
            </span>{" "}
            <span className="text-white">Policy</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-medium">
            Your privacy is our priority. Learn how we collect, use, and protect your information when you use our AI agent platform.
          </p>
        </div>

        {/* Privacy Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {privacyPrinciples.map((principle, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-r from-[#FF6600]/20 via-[#F700F7]/20 to-[#0078F6]/20 rounded-xl text-white">
                  {principle.icon}
                </div>
                <h3 className="text-lg font-bold text-white">{principle.title}</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">{principle.description}</p>
            </div>
          ))}
        </div>

        {/* Detailed Policy */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              <span className="bg-gradient-to-r from-[#FF6600] via-[#F700F7] to-[#0078F6] bg-clip-text text-transparent">
                Detailed
              </span>{" "}
              <span className="text-white">Privacy Terms</span>
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h3>
                <div className="space-y-4 text-gray-300">
                  <p><strong>Personal Information:</strong></p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Name and email address when you create an account</li>
                    <li>Payment information for subscription processing</li>
                    <li>Profile information you choose to provide</li>
                    <li>Communication preferences and settings</li>
                  </ul>
                  <p><strong>Usage Data:</strong></p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>How you interact with our AI agents and platform</li>
                    <li>Features you use and frequency of use</li>
                    <li>Performance metrics and error logs</li>
                    <li>Device information and IP addresses</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h3>
                <div className="space-y-4 text-gray-300">
                  <p>We use your information to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide and improve our AI agent services</li>
                    <li>Process payments and manage your subscription</li>
                    <li>Send important updates and security notifications</li>
                    <li>Provide customer support and respond to inquiries</li>
                    <li>Analyze usage patterns to enhance user experience</li>
                    <li>Comply with legal obligations and prevent fraud</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">3. Information Sharing</h3>
                <div className="space-y-4 text-gray-300">
                  <p>We may share your information with:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Service Providers:</strong> Third-party vendors who help us operate our platform</li>
                    <li><strong>Payment Processors:</strong> To process your subscription payments securely</li>
                    <li><strong>Legal Authorities:</strong> When required by law or to protect our rights</li>
                    <li><strong>Business Transfers:</strong> In case of merger, acquisition, or sale of assets</li>
                  </ul>
                  <p className="text-purple-400 font-medium">We never sell your personal data to advertisers or marketers.</p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">4. Data Security</h3>
                <div className="space-y-4 text-gray-300">
                  <p>We protect your data through:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>End-to-end encryption for sensitive data</li>
                    <li>Regular security audits and penetration testing</li>
                    <li>Secure data centers with 24/7 monitoring</li>
                    <li>Access controls and employee training</li>
                    <li>Regular backups and disaster recovery procedures</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">5. Your Rights</h3>
                <div className="space-y-4 text-gray-300">
                  <p>You have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Access:</strong> Request a copy of your personal data</li>
                    <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
                    <li><strong>Erasure:</strong> Request deletion of your personal data</li>
                    <li><strong>Portability:</strong> Export your data in a machine-readable format</li>
                    <li><strong>Restriction:</strong> Limit how we process your data</li>
                    <li><strong>Objection:</strong> Object to certain types of data processing</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">6. Cookies and Tracking</h3>
                <div className="space-y-4 text-gray-300">
                  <p>We use cookies and similar technologies to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Keep you logged in to your account</li>
                    <li>Remember your preferences and settings</li>
                    <li>Analyze website traffic and usage patterns</li>
                    <li>Provide personalized content and recommendations</li>
                  </ul>
                  <p>You can control cookie settings through your browser preferences.</p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">7. Data Retention</h3>
                <div className="space-y-4 text-gray-300">
                  <p>We retain your data for as long as:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Your account remains active</li>
                    <li>Required to provide our services</li>
                    <li>Necessary for legal compliance</li>
                    <li>Needed for legitimate business purposes</li>
                  </ul>
                  <p>When you delete your account, we remove your personal data within 30 days.</p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">8. International Transfers</h3>
                <div className="space-y-4 text-gray-300">
                  <p>Your data may be transferred to and processed in countries other than your own. We ensure adequate protection through:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Standard contractual clauses approved by regulatory authorities</li>
                    <li>Adequacy decisions by the European Commission</li>
                    <li>Certification under recognized privacy frameworks</li>
                    <li>Your explicit consent when required</li>
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
              <span className="text-white">Questions About Privacy?</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Our Data Protection Officer is available to answer any questions about how we handle your personal information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-[#FF6600] via-[#F700F7] to-[#0078F6] text-white px-8 py-4 rounded-xl font-medium text-lg hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-purple-500/30">
                Contact DPO
              </button>
              <button className="bg-white/10 text-white border border-white/20 hover:bg-white/20 px-8 py-4 rounded-xl font-medium text-lg hover:scale-105 transition-all duration-200">
                privacy@rolechain.org
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

export default PrivacyPolicyPage; 