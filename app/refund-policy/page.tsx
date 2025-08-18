import { LuClock, LuShield, LuRefreshCw, LuMail } from "react-icons/lu";

const RefundPolicyPage = () => {
  const policies = [
    {
      icon: <LuClock className="w-8 h-8" />,
      title: "30-Day Money-Back Guarantee",
      description: "We offer a full refund within 30 days of your initial purchase if you're not completely satisfied with our service."
    },
    {
      icon: <LuRefreshCw className="w-8 h-8" />,
      title: "Easy Refund Process",
      description: "Simply contact our support team with your refund request. We'll process it within 3-5 business days."
    },
    {
      icon: <LuShield className="w-8 h-8" />,
      title: "No Questions Asked",
      description: "We believe in our product quality. If it doesn't meet your expectations, we'll refund you without hassle."
    },
    {
      icon: <LuMail className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Our customer support team is available around the clock to help you with any refund-related queries."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#3C0C3E] via-[#0E0E21] to-[#101112] relative overflow-hidden">
      {/* Background "REFUND" text */}
      <div className="absolute top-4 left-0 w-full select-none place-items-center text-center uppercase grid md:-top-6 lg:-top-[45px] z-0">
        <p className="font-outline bg-gradient-to-b from-[#C193FD] to-transparent to-60% bg-clip-text text-[80px] md:text-[100px] lg:text-[150px] xl:text-[200px] font-bold tracking-tight text-[#3C0C3E] opacity-50">
          Refund
        </p>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-[#FF6600] via-[#F700F7] to-[#0078F6] bg-clip-text text-transparent">
              Refund
            </span>{" "}
            <span className="text-white">Policy</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-medium">
            We stand behind our product with a customer-friendly refund policy designed to ensure your satisfaction
          </p>
        </div>

        {/* Policy Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {policies.map((policy, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-r from-[#FF6600]/20 via-[#F700F7]/20 to-[#0078F6]/20 rounded-xl text-white">
                  {policy.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{policy.title}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">{policy.description}</p>
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
              <span className="text-white">Policy Terms</span>
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">1. Eligibility for Refunds</h3>
                <div className="space-y-4 text-gray-300">
                  <p>You are eligible for a full refund if:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>You request a refund within 30 days of your initial purchase</li>
                    <li>You have not violated our Terms of Service</li>
                    <li>You provide a valid reason for the refund request</li>
                    <li>Your account is in good standing</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">2. Refund Process</h3>
                <div className="space-y-4 text-gray-300">
                  <p>To request a refund:</p>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Contact our support team at <span className="text-purple-400">support@rolechain.org</span></li>
                    <li>Provide your account details and purchase information</li>
                    <li>Explain the reason for your refund request</li>
                    <li>Wait for our team to process your request (typically 24-48 hours)</li>
                    <li>Receive your refund within 3-5 business days</li>
                  </ol>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">3. Processing Time</h3>
                <div className="space-y-4 text-gray-300">
                  <p>Refund processing times:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Credit Card:</strong> 3-5 business days</li>
                    <li><strong>PayPal:</strong> 1-2 business days</li>
                    <li><strong>Bank Transfer:</strong> 5-7 business days</li>
                    <li><strong>Cryptocurrency:</strong> 1-3 business days</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">4. Partial Refunds</h3>
                <div className="space-y-4 text-gray-300">
                  <p>In some cases, we may offer partial refunds:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>If you&apos;ve used significant resources beyond the trial period</li>
                    <li>For annual subscriptions after the 30-day period (prorated)</li>
                    <li>For enterprise accounts with custom agreements</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">5. Non-Refundable Items</h3>
                <div className="space-y-4 text-gray-300">
                  <p>The following items are non-refundable:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Custom development work or consulting services</li>
                    <li>Third-party integrations or add-ons</li>
                    <li>Training sessions or workshops</li>
                    <li>Domain names or additional services</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">6. Cancellation vs. Refund</h3>
                <div className="space-y-4 text-gray-300">
                  <p>Understanding the difference:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Cancellation:</strong> Stops future billing but doesn&apos;t refund current period</li>
                    <li><strong>Refund:</strong> Returns money for the current billing period</li>
                    <li>You can cancel anytime to avoid future charges</li>
                    <li>Refunds are only available within the 30-day window</li>
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
              <span className="text-white">Need Help?</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Our customer support team is here to help you with any questions about our refund policy or to process your refund request.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-[#FF6600] via-[#F700F7] to-[#0078F6] text-white px-8 py-4 rounded-xl font-medium text-lg hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-purple-500/30">
                Contact Support
              </button>
              <button className="bg-white/10 text-white border border-white/20 hover:bg-white/20 px-8 py-4 rounded-xl font-medium text-lg hover:scale-105 transition-all duration-200">
                Email Us
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

export default RefundPolicyPage; 