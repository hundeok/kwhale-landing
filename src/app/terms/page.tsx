'use client';
import React from 'react';
import Link from 'next/link';

export default function KWhaleTermsPage() {
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
                  const fb = document.getElementById('kw-terms-fallback');
                  if (fb) fb.style.display = 'flex';
                }}
              />
              <div
                id="kw-terms-fallback"
                className="w-10 h-10 hidden bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-200 rounded-xl flex items-center justify-center"
              >
                <span className="text-slate-950 font-extrabold text-lg">KW</span>
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
        <div className="bg-slate-950/40 backdrop-blur-sm border border-cyan-500/15 rounded-2xl p-8 md:p-12 shadow-[0_24px_80px_rgba(0,0,0,0.25)]">
          <h1 className="text-4xl font-bold text-white mb-8 text-center tracking-tight">
            Terms of Service (K-Whale Intelligence)
          </h1>

          <div className="text-slate-200/90 leading-relaxed space-y-8">
            {/* 1 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Article 1. Purpose</h2>
              <p>
                These Terms of Service (“Terms”) define the rights, obligations, and responsibilities
                between K-Whale Intelligence (the “Company”) and users (“Members”) in relation to the
                use of the Company’s public asset disclosure dashboard, data ingestion modules,
                internal monitoring screens, and any related web/app services (collectively, the
                “Service”).
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Article 2. Effect and Amendment of Terms
              </h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  These Terms apply to all Members who agree to them when accessing or using the
                  Service.
                </li>
                <li>
                  The Company may amend these Terms to reflect service changes, legal requirements,
                  or operational needs.
                </li>
                <li>
                  When amended, the Company will notify Members (dashboard notice, email, or in-app
                  notice) at least 7 days before the effective date; material changes may be notified
                  30 days in advance.
                </li>
                <li>
                  If a Member does not agree to the amended Terms, the Member may stop using the
                  Service and request account deletion. Continued use after the effective date is
                  deemed acceptance.
                </li>
              </ol>
            </section>

            {/* 3 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Article 3. Supplementary Rules
              </h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  For some features (map disclosure, ingestion scheduler, dataset download), the
                  Company may provide separate policies. In case of conflict, the separate policy
                  prevails.
                </li>
                <li>
                  Matters not specified herein shall follow the laws of the Republic of Korea, such
                  as the Act on Promotion of Information and Communications Network Utilization and
                  Information Protection, the Personal Information Protection Act, and other relevant
                  regulations.
                </li>
              </ol>
            </section>

            {/* 4 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Article 4. Formation of Use Agreement
              </h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  The agreement is formed when an applicant agrees to these Terms and the Company
                  approves the use.
                </li>
                <li>
                  For institutional dashboards, approval may be limited by organization, domain, or
                  IP range.
                </li>
                <li>
                  If the applicant provides false information, uses another person’s information, or
                  attempts unauthorized access to ingestion/admin APIs, the Company may reject or
                  later cancel the agreement.
                </li>
              </ol>
            </section>

            {/* 5 */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Article 5. Notices</h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  The Company may notify Members via email, dashboard banner, in-app notice, or
                  institutional contact channel.
                </li>
                <li>
                  For notices to all Members, posting on the Service for 7 days or more may replace
                  individual notice.
                </li>
              </ol>
            </section>

            {/* 6: Service Content */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Article 6. Service Content
              </h2>
              <p className="mb-3">
                The Company provides the following K-Whale specific functions (service menu names
                may differ in your plan):
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <span className="font-semibold text-cyan-200">
                    Standardized Asset Dashboard:
                  </span>{' '}
                  showing deposits, securities, digital assets, land, buildings, and liabilities on
                  one axis
                </li>
                <li>
                  <span className="font-semibold text-cyan-100">Map / Geo View:</span> drilling down
                  from region → city → district to see “who reported which asset where”
                </li>
                <li>
                  <span className="font-semibold text-teal-200">Ingestion / ETL Monitor:</span>{' '}
                  monitoring raw → standardized → materialized stages
                </li>
                <li>
                  <span className="font-semibold text-emerald-200">Search & Intelligence:</span>{' '}
                  person-based, asset-based, or period-based disclosure search
                </li>
                <li>
                  <span className="font-semibold text-cyan-100">Export / PoC bundle (optional):</span>{' '}
                  sample JSON/CSV for internal PoC or app prototype
                </li>
              </ul>
            </section>

            {/* 7: Member obligations */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Article 7. Member Obligations
              </h2>
              <p className="mb-4">
                Members shall use the Service in a lawful and reasonable manner and shall not:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide false organizational or identity information</li>
                <li>Attempt to crawl or mass-extract data beyond license/scope</li>
                <li>Bypass or modify the K-Whale schema to make source attribution unclear</li>
                <li>
                  Redistribute dashboards, raw datasets, or ingestion logic to 3rd parties without
                  written consent
                </li>
                <li>Upload or distribute malicious code, exploits, or automated attack scripts</li>
                <li>
                  Use disclosed public-figure data for defamation, doxxing, or purposes prohibited by
                  law
                </li>
              </ul>
            </section>

            {/* 8: License / Data use */}
            <section className="bg-slate-900/30 border border-cyan-500/10 rounded-xl p-6">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Article 8. Data License & Disclosure Source
              </h2>
              <p className="mb-3">
                Some datasets shown in K-Whale may originate from public disclosures or legally
                accessible information. The Company:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-slate-100/90">
                <li>
                  Reorganizes the data to K-Whale’s fixed schema (deposit / securities / digital /
                  land / building / liability)
                </li>
                <li>Keeps source IDs and timestamps where required</li>
                <li>
                  May restrict screen-level access for sensitive entities or for institution-only
                  bundles
                </li>
              </ul>
            </section>

            {/* 9: Fees */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Article 9. Fees and Billing (If Applicable)
              </h2>
              <p>
                If you are on a paid plan, the fee policy, billing period, refund rules, and
                overage/extra dataset usage policies are governed by the separate commercial
                agreement or order form. In case of conflict, the commercial agreement prevails.
              </p>
            </section>

            {/* 10: Limitation of Liability */}
            <section className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-amber-200 mb-4">
                Article 10. Limitation of Liability
              </h2>
              <ol className="list-decimal list-inside space-y-3 text-slate-100/90">
                <li>
                  The Service provides reorganized and standardized views of disclosure-like data. It
                  does not guarantee legal, tax, or investment outcomes.
                </li>
                <li>
                  The Company is not responsible for decisions (administrative, disciplinary,
                  investment, media) made solely based on the visualization in the dashboard.
                </li>
                <li>
                  If a source agency later corrects or retracts its disclosure, the Company may
                  update or hide the corresponding record; the Company is not liable for delays in
                  propagation.
                </li>
                <li>
                  The Company shall not be liable for service suspension due to force majeure,
                  network incidents, or cloud provider failures.
                </li>
                <li className="text-amber-200 font-semibold">
                  Any interpretation or publication of a person’s asset information must follow the
                  law and the rules of the source institution.
                </li>
              </ol>
            </section>

            {/* 11: Personal Info */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Article 11. Personal Information Protection
              </h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  The Company processes personal information in accordance with the separately
                  published Privacy Policy (K-Whale Intelligence).
                </li>
                <li>
                  If personal information is needed for login, access control, or ingestion
                  operation, the Company will collect only the minimum necessary.
                </li>
                <li>
                  For details, see the Privacy Policy page. In case of conflict, the Privacy Policy
                  prevails.
                </li>
              </ol>
            </section>

            {/* 12: Governing Law */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Article 12. Governing Law and Jurisdiction
              </h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  These Terms are governed by the laws of the Republic of Korea, without regard to
                  conflict-of-law principles.
                </li>
                <li>
                  Any disputes arising out of or in connection with these Terms shall be submitted to
                  the competent court having jurisdiction over the location of the Company’s
                  principal office.
                </li>
              </ol>
            </section>

            {/* 13: Supplement */}
            <section className="border-t border-slate-700/60 pt-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Supplementary Provisions</h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>These Terms shall be effective from October 20, 2025.</li>
                <li>Previous K-Whale or temporary PoC terms are replaced by this document.</li>
              </ol>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
