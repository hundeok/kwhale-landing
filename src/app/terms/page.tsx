'use client';
import React from 'react';
import Link from 'next/link';

export default function HypeChimpTermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      {/* Header */}
      <header className="relative z-20 px-6 py-6 border-b border-slate-800">
        <nav className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 relative">
              <img
                src="/logo1.png"
                alt="HypeChimp Logo"
                className="w-full h-full object-cover rounded-xl"
                onError={(e) => {
                  const target = e.currentTarget;
                  const fallback = target.nextElementSibling;
                  if (fallback) {
                    target.style.display = 'none';
                    fallback.style.display = 'flex';
                  }
                }}
              />
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 via-violet-500 to-purple-600 rounded-xl flex items-center justify-center" style={{display: 'none'}}>
                <span className="text-white font-bold text-xl">H</span>
              </div>
            </div>
            <div>
              <span className="text-white text-2xl font-bold">HypeChimp</span>
              <span className="text-purple-200 text-sm ml-2">Hype + Odds</span>
            </div>
          </Link>
          
          <Link
            href="/"
            className="text-slate-300 hover:text-white transition-colors duration-300"
          >
            Back to Home
          </Link>
        </nav>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 md:p-12">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">
            Terms of Service
          </h1>
          
          <div className="prose prose-invert prose-lg max-w-none">
            <div className="text-slate-300 leading-relaxed space-y-8">
              
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Article 1. Purpose</h2>
                <p>These Terms of Service (the "Terms") set forth the rights, obligations, and responsibilities between HypeChimp (the "Company") and its members, as well as other necessary matters, in connection with the use of HypeChimp and related services (the "Service").</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Article 2. Effect and Amendment of Terms</h2>
                <ol className="list-decimal list-inside space-y-2">
                  <li>These Terms shall be effective for all members who agree to these Terms when using the Service.</li>
                  <li>The contents of these Terms shall become effective when members agree to the content posted or announced at the time of membership registration.</li>
                  <li>When the Company amends the Terms, it shall announce the application date, amended content, and reasons for amendment through the homepage, email, or notices within the Service at least 7 days prior to the application date.</li>
                  <li>If members do not agree to the amended Terms, they may request membership withdrawal. Failure to express objection by the effective date after the announcement of the amended Terms shall be deemed as consent to the amended Terms.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Article 3. Interpretation and Exception Principles of Terms</h2>
                <ol className="list-decimal list-inside space-y-2">
                  <li>The Company may establish separate terms of use and policies for individual services provided. If such content conflicts with these Terms, the terms of use for individual services shall take precedence.</li>
                  <li>Matters not specified in these Terms shall be governed by the Framework Act on Electronic Commerce, Consumer Protection Act in Electronic Commerce, Act on the Regulation of Terms and Conditions, Act on Promotion of Information and Communications Network Utilization and Information Protection, and other relevant laws and regulations.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Article 4. Establishment of Use Agreement</h2>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Clicking the "Agree" button after reading these Terms when applying for Service membership shall be deemed as consent to these Terms.</li>
                  <li>The Terms of Service Agreement shall be established when the Company accepts the application for use after the prospective user consents to the Terms of Service.</li>
                  <li>Applicants must register their real name and actual information when applying for use under Paragraph 1. If the content differs from the facts (alias, non-real name, false information, etc.) or if suspected of using another person's information, the Company may request re-verification to confirm the facts. If discrepancies are clearly confirmed, members cannot claim rights under these Terms, and the Company may delete member privileges without refund and refuse all use of the Service. The Company shall not be responsible for any disadvantages arising therefrom.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Article 5. Notice to Members</h2>
                <ol className="list-decimal list-inside space-y-2">
                  <li>When the Company notifies members, unless otherwise specified in these Terms, it may be done via email, SMS, app push notifications, etc.</li>
                  <li>For notices to all members, the Company may substitute the notice in Paragraph 1 by posting on the Service's initial screen or notice board for 7 days or more. However, individual notice shall be given for matters significantly affecting the member's own transactions.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Article 6. Conclusion of Use Agreement</h2>
                <ol className="list-decimal list-inside space-y-2">
                  <li>A use agreement is concluded when a person wishing to use the Service (hereinafter "applicant") agrees to the terms provided by the "HypeChimp" service and related services, applies for membership, and the Company accepts such application. If necessary, the Company may request real name verification and identity authentication through identity verification agencies.</li>
                  <li>When applying for membership through integration with external services such as Kakao, Google, Apple, etc., the use agreement is established when the applicant agrees to these Terms, Privacy Policy, and the Company's access to and use of the member's external service account information for service provision, and the Company accepts such application.</li>
                  <li>The Company may defer approval of membership for a certain period if there are operational or technical difficulties.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Article 7. Service Content</h2>
                <p className="mb-4">The content of services provided by the Company is as follows:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><span className="font-semibold text-purple-400">Real-Time Hype Tracking:</span> Monitoring trending topics from Reddit communities (r/wallstreetbets, r/stocks, r/CryptoCurrency)</li>
                  <li><span className="font-semibold text-violet-400">Prediction Odds Cross-Reference:</span> Comparing social trends with live prediction market data from Polymarket</li>
                  <li><span className="font-semibold text-orange-400">Signal Dashboard:</span> Visualizing where Hype meets Odds for data-driven decisions</li>
                  <li><span className="font-semibold text-pink-400">Market Data Analysis:</span> Aggregating scattered information into actionable insights</li>
                  <li><span className="font-semibold text-purple-500">Community Features:</span> Sharing signals and discussing market trends with other traders</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Article 12. Member Obligations</h2>
                <p className="mb-4">Members shall not engage in any of the following acts:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Registering false information when applying for use or changing member information</li>
                  <li>Using another person's information</li>
                  <li>Impersonating the Company's operator, employee, or the Company itself</li>
                  <li>Illegally acquiring other users' information</li>
                  <li>Posting or disclosing obscene, violent messages, or other information contrary to public order and morals</li>
                  <li>Spreading false information or committing fraud</li>
                  <li>Providing investment solicitation or illegal investment advice</li>
                  <li>Recommending specific stocks for purchase/sale to others</li>
                  <li>Sharing information related to unfair trading using undisclosed information</li>
                </ul>
              </section>

              <section className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-amber-400 mb-4">Article 15. Special Provisions Related to Trading</h2>
                <ol className="list-decimal list-inside space-y-3">
                  <li><span className="font-semibold text-yellow-400">Nature of Service:</span> This Service is an information provision and analysis tool for investment decision-making, not investment solicitation or advice.</li>
                  <li><span className="font-semibold text-yellow-400">Investment Responsibility:</span> All investment decisions are made at the member's own judgment and responsibility, and the Company assumes no responsibility for investment losses.</li>
                  <li><span className="font-semibold text-yellow-400">No Profit Guarantee:</span> The Company does not guarantee any form of investment returns, and past performance does not guarantee future profits.</li>
                  <li><span className="font-semibold text-yellow-400">Risk Disclosure:</span> All investments carry the risk of principal loss, and members should invest within their risk tolerance.</li>
                  <li><span className="font-semibold text-yellow-400">Legal Compliance:</span> Members must comply with relevant laws and regulations including the Capital Markets Act and Financial Investment Services and Capital Markets Act.</li>
                  <li><span className="font-semibold text-yellow-400">Data Sources:</span> Social media trends and prediction market odds are indicators and should not be the sole basis for investment decisions.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Article 20. Limitation of Liability</h2>
                <ol className="list-decimal list-inside space-y-2">
                  <li>The Company shall not be liable for service interruptions caused by members' fault, including failure to comply with these Terms, service usage methods, and usage standards.</li>
                  <li>The Company does not guarantee the reliability, accuracy, etc., of information, data, and facts posted through the Service.</li>
                  <li>The Company shall not be liable for free services unless otherwise specified by relevant laws.</li>
                  <li>The Company shall be exempted from liability if it cannot provide the Service due to force majeure such as natural disasters, war, telecommunications service provider service interruptions, difficult-to-resolve technical defects, or other force majeure events.</li>
                  <li><span className="text-red-400 font-semibold">The Company shall not be responsible for losses incurred by members when investing based on Hype tracking information and signal analysis results provided by the Company.</span></li>
                  <li><span className="text-red-400 font-semibold">Investment carries high risks, and members should make careful investment decisions.</span></li>
                  <li><span className="text-red-400 font-semibold">The Company assumes no warranty or compensation liability for investment decisions based on information or data obtained by members through the Service.</span></li>
                  <li><span className="text-red-400 font-semibold">Social trends, prediction market odds, and signals provided through the Service are for reference only and do not constitute investment recommendations.</span></li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Article 25. Personal Information Protection</h2>
                <ol className="list-decimal list-inside space-y-2">
                  <li>The Company strives to protect members' personal information in accordance with relevant laws and regulations.</li>
                  <li>Relevant laws and the Company's Privacy Policy apply to the protection and use of personal information.</li>
                  <li>Members' trading information and signal tracking data are protected with enhanced security measures.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Article 28. Rules Other Than Terms</h2>
                <p>Matters not specified in these Terms and interpretation of these Terms shall be governed by the "Act on the Regulation of Terms and Conditions," "Act on Promotion of Information and Communications Network Utilization and Information Protection," "Capital Markets and Financial Investment Services Act," "Content Industry Promotion Act," and other relevant laws and regulations.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Article 29. Jurisdiction</h2>
                <p>In the event of litigation arising from disputes related to the use of the Service, the court having jurisdiction over the location of the Company's headquarters shall be the exclusive jurisdiction court.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Article 30. Governing Law and Jurisdiction</h2>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Legal disputes arising between the Company and members regarding these Terms and use of the Service shall be governed, interpreted, and enforced by the laws of the Republic of Korea.</li>
                  <li>Disputes arising between the Company and members regarding these Terms and use of the Service shall be resolved through good-faith consultations between the parties. If disputes cannot be resolved through such consultations, they shall be resolved through litigation in the competent court under the Civil Procedure Act.</li>
                </ol>
              </section>

              <section className="border-t border-slate-600 pt-8">
                <h2 className="text-2xl font-semibold text-white mb-4">Supplementary Provisions</h2>
                <ol className="list-decimal list-inside space-y-2">
                  <li>These Terms shall be effective from October 20, 2025.</li>
                  <li>Previous terms are replaced by these Terms.</li>
                </ol>
              </section>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}