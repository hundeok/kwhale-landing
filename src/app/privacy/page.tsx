'use client';
import React from 'react';
import Link from 'next/link';

export default function KWhalePrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A1D3D] via-slate-950 to-[#051020]">
      {/* Header */}
      <header className="relative z-20 px-6 py-6 border-b border-cyan-500/15 bg-slate-950/10 backdrop-blur-sm">
        <nav className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 relative">
              <img
                src="/logo.png"
                alt="K-Whale Logo"
                className="w-full h-full object-cover rounded-xl border border-cyan-400/40 bg-slate-900"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = document.getElementById('kw-fallback-logo');
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div
                id="kw-fallback-logo"
                className="w-10 h-10 hidden bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-200 rounded-xl flex items-center justify-center"
              >
                <span className="text-slate-950 font-extrabold text-lg tracking-tight">KW</span>
              </div>
            </div>
            <div>
              <span className="text-white text-2xl font-bold leading-none">K-Whale</span>
              <span className="text-cyan-200 text-sm ml-2 leading-none">
                Asset Disclosure Intelligence
              </span>
            </div>
          </Link>

          <Link
            href="/"
            className="text-cyan-100/80 hover:text-white transition-colors duration-200 text-sm"
          >
            Back to Landing
          </Link>
        </nav>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-slate-950/40 backdrop-blur-md border border-cyan-500/15 rounded-2xl p-8 md:p-12 shadow-[0_24px_80px_rgba(0,0,0,0.25)]">
          <h1 className="text-4xl font-bold text-white mb-8 text-center tracking-tight">
            Privacy Policy (K-Whale Intelligence)
          </h1>

          <div className="text-slate-200/90 leading-relaxed space-y-8">
            {/* 1 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                1. Purpose of Processing Personal Information
              </h2>
              <p className="mb-4">
                ‘K-Whale Intelligence’ processes personal information only to operate and improve the
                <span className="text-cyan-200"> public asset disclosure dashboard</span> and related
                internal tools. We do not use the information for purposes other than those stated
                below.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-slate-100/80">
                <li>Identification and authentication of users accessing the dashboard</li>
                <li>Provision of standardized asset views (deposit, securities, digital, land, building, liability)</li>
                <li>Operation of PoC / pilot dashboards for institutions</li>
                <li>Usage analytics to stabilize performance and capacity</li>
                <li>Customer / operator inquiry handling</li>
                <li>Compliance with legal or institutional audit requests</li>
              </ul>
            </section>

            {/* 2 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                2. Processing and Retention Period
              </h2>
              <p className="mb-4">
                ‘K-Whale Intelligence’ processes and retains personal information for the period
                agreed by the data subject or for the period required by relevant laws.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <span className="font-semibold text-cyan-200">Account / access info:</span>{' '}
                  retained while the account is active (deleted within 30 days after withdrawal)
                </li>
                <li>
                  <span className="font-semibold text-cyan-200">
                    Integration / ingestion operation logs:
                  </span>{' '}
                  up to 1 year for debugging and audit
                </li>
                <li>
                  <span className="font-semibold text-cyan-200">Service usage records:</span>{' '}
                  connection history, IP, access module, error traces – 3 months (or longer if law
                  requires)
                </li>
                <li>
                  <span className="font-semibold text-cyan-200">Contract / billing data:</span> 5
                  years
                </li>
              </ul>
            </section>

            {/* 3 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                3. Rights of Data Subjects
              </h2>
              <p className="mb-4">
                You may at any time request ‘K-Whale Intelligence’ to view, correct, delete, or
                suspend processing of your personal information.
              </p>
              <ol className="list-decimal list-inside space-y-2 text-slate-100/80">
                <li>Request to view personal information being processed</li>
                <li>Request correction of inaccurate or incomplete data</li>
                <li>Request deletion when retention purpose is achieved</li>
                <li>Request suspension of processing</li>
              </ol>
              <p className="mt-4 text-slate-400 text-sm">
                We will respond without undue delay unless restricted by laws or institutional
                agreements.
              </p>
            </section>

            {/* 4 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                4. Items of Personal Information Processed
              </h2>
              <p className="mb-4">
                We collect only the minimum information needed to operate the K-Whale standard
                disclosure dashboard.
              </p>
              <div className="bg-slate-900/40 rounded-lg p-6 mb-4 border border-cyan-500/10">
                <h3 className="text-lg font-semibold text-cyan-200 mb-3">Required</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Email / login ID</li>
                  <li>Organization or team name (for institutional dashboards)</li>
                  <li>Role or permission level (viewer / operator / admin)</li>
                </ul>
              </div>
              <div className="bg-slate-900/40 rounded-lg p-6 mb-4 border border-cyan-500/10">
                <h3 className="text-lg font-semibold text-teal-200 mb-3">Automatically Collected</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Access time, IP, user-agent, device info</li>
                  <li>Visited dashboard sections (map, insights, person, asset)</li>
                  <li>Search keywords for troubleshooting</li>
                  <li>Ingestion job status and error traces (system-level)</li>
                </ul>
              </div>
              <div className="bg-slate-900/40 rounded-lg p-6 border border-cyan-500/10">
                <h3 className="text-lg font-semibold text-emerald-200 mb-3">
                  Billing / Paid Option (if enabled)
                </h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Billing identifier from payment provider</li>
                  <li>Plan / option usage records</li>
                  <li>Invoice and receipt history</li>
                </ul>
              </div>
            </section>

            {/* 5 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                5. Destruction of Personal Information
              </h2>
              <p className="mb-4">
                When the purpose of processing is achieved, ‘K-Whale Intelligence’ destroys the
                personal information without delay.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-cyan-200 mb-2">Procedure</h3>
                  <p className="text-slate-200/80">
                    Data that has fulfilled its purpose is transferred to a separate storage, kept
                    only for the period required by laws or institutional contracts, and then
                    destroyed. It is not used for any other purposes.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-teal-200 mb-2">Deadline</h3>
                  <p className="text-slate-200/80">
                    Destruction is done within 30 days after the end of the retention period or
                    within 30 days from the time the data becomes unnecessary (service termination,
                    account deletion, end of PoC).
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-cyan-100 mb-2">Method</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Electronic data: irreversible deletion using secure methods</li>
                    <li>Printed materials: shredding or incineration</li>
                    <li>System logs containing identifiers: truncation / anonymization</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 6 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                6. Safety Measures
              </h2>
              <p className="mb-4">
                We apply technical and organizational measures to protect data related to public
                asset disclosures and internal ingestion pipelines.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-900/30 rounded-lg p-6 border border-cyan-500/10">
                  <h3 className="text-lg font-semibold text-cyan-200 mb-3">Organizational</h3>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>Minimum access principle per role</li>
                    <li>Separation between ingestion operators and dashboard viewers</li>
                    <li>Periodic review of user permissions</li>
                  </ul>
                </div>
                <div className="bg-slate-900/30 rounded-lg p-6 border border-cyan-500/10">
                  <h3 className="text-lg font-semibold text-teal-200 mb-3">Technical</h3>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>HTTPS / TLS for all external access</li>
                    <li>Access control on ingestion endpoints</li>
                    <li>Encryption of sensitive identifiers</li>
                    <li>Detection of abnormal queries on map / search</li>
                  </ul>
                </div>
                <div className="bg-slate-900/30 rounded-lg p-6 border border-cyan-500/10">
                  <h3 className="text-lg font-semibold text-cyan-100 mb-3">Physical</h3>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>Restricted access to servers</li>
                    <li>Protected storage for backup datasets</li>
                  </ul>
                </div>
                <div className="bg-slate-900/30 rounded-lg p-6 border border-cyan-500/10">
                  <h3 className="text-lg font-semibold text-emerald-200 mb-3">Data Pipeline</h3>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>Versioned ingestion and rollback</li>
                    <li>Logging of schema changes</li>
                    <li>Audit trail for entity-level updates</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 7 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                7. Personal Information Protection Officer
              </h2>
              <p className="mb-6">
                ‘K-Whale Intelligence’ appoints a person responsible for handling inquiries and
                complaints regarding personal information.
              </p>
              <div className="bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-400/20 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-cyan-100 mb-4">
                  ▶ Personal Information Protection Officer
                </h3>
                <div className="space-y-2 text-slate-50">
                  <p>
                    <span className="font-semibold">Name:</span> hd cho
                  </p>
                  <p>
                    <span className="font-semibold">Position:</span> Data & Privacy Lead, K-Whale
                  </p>
                  <p>
                    <span className="font-semibold">Email:</span> hdcho@yandex.com
                  </p>
                  <p>
                    <span className="font-semibold">Availability:</span> Weekdays 09:00 ~ 18:00 (KST)
                  </p>
                </div>
              </div>
              <p className="mt-6 text-slate-400 text-sm">
                You may contact the officer for any privacy-related issue while using the K-Whale
                dashboard. We will respond promptly.
              </p>
            </section>

            {/* 8 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                8. Notes on Public-Source / Disclosure Data
              </h2>
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-amber-200 mb-3">
                  About source datasets
                </h3>
                <ul className="list-disc list-inside space-y-2 text-sm text-slate-100/90">
                  <li>
                    K-Whale may process data that was originally ‘publicly available’ (e.g. official
                    asset disclosures).
                  </li>
                  <li>
                    Such data is restructured into K-Whale’s fixed schema (deposit, securities,
                    digital, land, building, liability) and displayed in dashboards.
                  </li>
                  <li>
                    Where the original source requires it, we keep source IDs and timestamps.
                  </li>
                  <li>
                    K-Whale does not change the essence of the original disclosure but may
                    reorganize it for clarity.
                  </li>
                </ul>
              </div>
            </section>

            {/* 9 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                9. Changes to this Policy
              </h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  This policy is effective from{' '}
                  <span className="font-semibold text-cyan-200">October 20, 2025</span>.
                </li>
                <li>
                  When we amend/add/delete clauses due to law or service changes, we will notify
                  via the dashboard or website at least 7 days before it takes effect.
                </li>
                <li>
                  Previous versions will be stored and can be provided upon request.
                </li>
              </ol>
            </section>

            {/* 10 */}
            <section className="border-t border-slate-700/60 pt-8">
              <h2 className="text-2xl font-semibold text-white mb-4">10. External Contacts</h2>
              <p className="mb-4 text-slate-300/90">
                If you need to report or consult about infringements of personal information, you
                can also contact the following institutions:
              </p>
              <div className="space-y-3 text-sm">
                <p>
                  <span className="font-semibold text-cyan-200">
                    Personal Information Infringement Report Center
                  </span>{' '}
                  (privacy.go.kr / 118 in KR)
                </p>
                <p>
                  <span className="font-semibold text-cyan-100">
                    Supreme Prosecutors’ Office Cyber Crime Unit
                  </span>{' '}
                  (www.spo.go.kr / 1301)
                </p>
                <p>
                  <span className="font-semibold text-teal-200">
                    National Police Agency Cyber Safety Bureau
                  </span>{' '}
                  (cyberbureau.police.go.kr / 182)
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
