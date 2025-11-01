'use client';
import React from 'react';
import Link from 'next/link';

export default function HypeChimpPrivacyPage() {
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
            Privacy Policy
          </h1>
          
          <div className="prose prose-invert prose-lg max-w-none">
            <div className="text-slate-300 leading-relaxed space-y-8">
              
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">1. Purpose of Processing Personal Information</h2>
                <p className="mb-4">'HypeChimp' processes personal information for the following purposes and does not use it for purposes other than the following:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Verification of membership registration and user identification/authentication</li>
                  <li>Maintaining and managing membership status</li>
                  <li>Providing Hype tracking and signal aggregation services</li>
                  <li>Analyzing social media trends and prediction market data</li>
                  <li>Providing real-time odds comparison from Polymarket</li>
                  <li>Settlement of fees for paid services</li>
                  <li>Statistical analysis for service improvement</li>
                  <li>Customer support and inquiry responses</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">2. Processing and Retention Period of Personal Information</h2>
                <p className="mb-4">'HypeChimp' processes and retains personal information within the period of consent from data subjects or as required by law.</p>
                <p className="mb-4">Specific processing and retention periods are as follows:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><span className="font-semibold text-purple-400">Membership registration and management:</span> Until service use contract or membership cancellation, except when debt relationships remain</li>
                  <li><span className="font-semibold text-purple-400">E-commerce records:</span> Contract/withdrawal, payment, service supply records - 5 years</li>
                  <li><span className="font-semibold text-purple-400">Consumer complaint handling:</span> Records related to complaints or dispute resolution - 3 years</li>
                  <li><span className="font-semibold text-purple-400">Service usage records:</span> Connection logs, IP information, service usage records - 3 months</li>
                  <li><span className="font-semibold text-purple-400">Hype tracking and signal data:</span> Social trend analysis, prediction odds history - Until membership withdrawal</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">3. Rights and Obligations of Data Subjects</h2>
                <p className="mb-4">Data subjects may exercise the following personal information protection rights with 'HypeChimp' at any time:</p>
                <ol className="list-decimal list-inside space-y-2">
                  <li><span className="font-semibold text-violet-400">Request to view personal information</span></li>
                  <li><span className="font-semibold text-violet-400">Request correction if errors exist</span></li>
                  <li><span className="font-semibold text-violet-400">Request deletion</span></li>
                  <li><span className="font-semibold text-violet-400">Request suspension of processing</span></li>
                </ol>
                <p className="mt-4 text-slate-400">These rights may be exercised in writing, email, or fax according to Article 41 of the Enforcement Decree of the Personal Information Protection Act, and 'HypeChimp' will take action without delay.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">4. Items of Personal Information Processed</h2>
                <p className="mb-4">'HypeChimp' processes the following personal information items:</p>
                <div className="bg-slate-800/50 rounded-lg p-6 mb-4">
                  <h3 className="text-lg font-semibold text-purple-400 mb-3">Required Items</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Email address</li>
                    <li>Social login: Social account unique identifier</li>
                    <li>Trading preferences and risk tolerance (essential for service provision)</li>
                  </ul>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-6 mb-4">
                  <h3 className="text-lg font-semibold text-violet-400 mb-3">Automatically Collected Items</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Service usage records</li>
                    <li>Connection logs</li>
                    <li>Cookies, connection IP information</li>
                    <li>Device information (device model, OS version, etc.)</li>
                    <li>Hype tracking and signal analysis records</li>
                    <li>Reddit community interaction data</li>
                    <li>Polymarket odds comparison history</li>
                  </ul>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-orange-400 mb-3">Payment Related</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Payment approval number</li>
                    <li>Payment method information (card company, payment date/time, etc.)</li>
                    <li>Purchase history</li>
                    <li>Premium service usage records</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">5. Destruction of Personal Information</h2>
                <p className="mb-4">'HypeChimp' destroys personal information without delay when the purpose of processing is achieved. The procedures, deadlines, and methods of destruction are as follows:</p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-purple-400 mb-2">Destruction Procedure</h3>
                    <p>Information entered by users is transferred to a separate DB after the purpose is achieved and stored for a certain period according to internal policies and other relevant laws, or destroyed immediately. Personal information transferred to the DB is not used for other purposes except as required by law.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-violet-400 mb-2">Destruction Deadline</h3>
                    <p>User personal information is destroyed within 30 days from the end of the retention period when the retention period has expired, or within 30 days when the personal information becomes unnecessary due to achievement of processing purpose, service termination, or business closure.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-orange-400 mb-2">Destruction Method</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Electronic file format information: Using technical methods that cannot reproduce records</li>
                      <li>Personal information printed on paper: Shredding or incineration</li>
                      <li>Trading-related sensitive information: Complete deletion after enhanced encryption</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">6. Measures to Ensure Safety of Personal Information</h2>
                <p className="mb-4">'HypeChimp' takes the following technical/managerial and physical measures necessary to ensure safety in accordance with Article 29 of the Personal Information Protection Act:</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-slate-800/30 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-purple-400 mb-3">Managerial Measures</h3>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Minimization of personal information handling staff and training</li>
                      <li>Designation and operation of personal information protection officer</li>
                      <li>Regular internal audits</li>
                      <li>Access authority management for signal data</li>
                    </ul>
                  </div>
                  
                  <div className="bg-slate-800/30 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-violet-400 mb-3">Technical Measures</h3>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Access authority management for personal information processing systems</li>
                      <li>Installation and operation of access control systems</li>
                      <li>Encryption of personal information</li>
                      <li>Installation and periodic update of security programs</li>
                      <li>Encryption of tracking and odds data</li>
                    </ul>
                  </div>
                  
                  <div className="bg-slate-800/30 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-orange-400 mb-3">Physical Measures</h3>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Access control for computer rooms and storage rooms</li>
                      <li>Use of locking devices for documents and auxiliary storage media containing personal information</li>
                      <li>Physical security of signal data servers</li>
                    </ul>
                  </div>
                  
                  <div className="bg-slate-800/30 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-pink-400 mb-3">Network Security</h3>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Technical measures against hacking</li>
                      <li>Encryption when transmitting personal information</li>
                      <li>Access control using intrusion prevention systems</li>
                      <li>Enhanced security for market data transmission</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">7. Personal Information Protection Officer</h2>
                <p className="mb-6">'HypeChimp' designates a personal information protection officer to take overall responsibility for personal information processing and handle complaints and remedy damages related to personal information processing.</p>
                
                <div className="bg-gradient-to-r from-purple-500/10 to-violet-500/10 border border-purple-500/20 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-purple-400 mb-4">▶ Personal Information Protection Officer</h3>
                  <div className="space-y-2">
                    <p><span className="font-semibold text-white">Name:</span> hd cho</p>
                    <p><span className="font-semibold text-white">Position:</span> Personal Information Protection Officer</p>
                    <p><span className="font-semibold text-white">Contact:</span> hdcho@yandex.com</p>
                    <p><span className="font-semibold text-white">Response Time:</span> Weekdays 09:00 ~ 18:00 (Excluding weekends and holidays)</p>
                  </div>
                </div>
                
                <p className="mt-6 text-slate-400">Data subjects may contact the personal information protection officer regarding all personal information protection inquiries, complaint handling, and damage relief that occur while using 'HypeChimp' services. 'HypeChimp' will respond and process inquiries from data subjects without delay.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">8. Special Provisions Regarding Trading Information Processing</h2>
                <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-amber-400 mb-3">Trading-Related Disclaimer</h3>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>Hype tracking and signal analysis results provided by this service are for informational purposes only.</li>
                    <li>Investment decisions are entirely the user's responsibility, and the company is not responsible for investment losses.</li>
                    <li>Past performance does not guarantee future returns.</li>
                    <li>Investing carries the risk of principal loss, so careful judgment is recommended.</li>
                    <li>Social media trends and prediction odds are indicators and should not be the sole basis for investment decisions.</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">9. Changes to Privacy Policy</h2>
                <ol className="list-decimal list-inside space-y-2">
                  <li>This privacy policy is effective from <span className="font-semibold text-purple-400">October 20, 2025</span>.</li>
                  <li>When there are additions, deletions, or corrections to the content according to laws and policies, we will notify through announcements at least 7 days before the implementation of changes.</li>
                  <li>Previous privacy policies can be found below.</li>
                </ol>
              </section>

              <section className="border-t border-slate-600 pt-8">
                <h2 className="text-2xl font-semibold text-white mb-4">10. Other Information</h2>
                <div className="space-y-4">
                  <p><span className="font-semibold text-purple-400">Personal Information Infringement Report Center:</span> (privacy.go.kr / 182 without area code)</p>
                  <p><span className="font-semibold text-violet-400">Supreme Prosecutors' Office Cyber Crime Investigation Unit:</span> (www.spo.go.kr / 1301 without area code)</p>
                  <p><span className="font-semibold text-orange-400">National Police Agency Cyber Safety Bureau:</span> (cyberbureau.police.go.kr / 182 without area code)</p>
                </div>
              </section>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}