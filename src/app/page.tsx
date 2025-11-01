'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';

// ===== K-WHALE CONSTANTS (MARKETING COPY) =====
const NAV_ITEMS = [
  { name: '소개', href: '#overview' },
  { name: '데이터', href: '#model' },
  { name: '화면', href: '#screens' },
  { name: '사용처', href: '#who' },
  { name: '도입 문의', href: '#access' },
];

const CATEGORY_PILLS = [
  { label: '예금', value: 'deposit', amount: '₩3.77조' },
  { label: '증권', value: 'security', amount: '₩1.35조' },
  { label: '코인', value: 'digital', amount: '₩443.8억' },
  { label: '채무', value: 'liability', amount: '₩3.18조', negative: true },
  { label: '토지', value: 'land', amount: '₩1.69조' },
  { label: '건물', value: 'building', amount: '₩7.67조' },
];

const SCREEN_CARDS = [
  {
    title: '1. 지도 뷰',
    desc: '시도 → 시군구 → 동까지 내려가면서 "누가 어디에 무엇을 신고했는지" 한눈에 봅니다. 필터는 자산 기준이라 다른 화면과 어긋나지 않습니다.',
  },
  {
    title: '2. 인텔리전스 대시보드',
    desc: '예금·증권·코인·토지·건물, 그리고 채무까지 같은 기준으로 묶어서 보여주는 보고서형 화면입니다.',
  },
  {
    title: '3. 자산별 리스트',
    desc: '증권/코인/특정 항목만 뽑아 직원들한테 리스트로 내려보낼 때 쓰는 화면입니다. 종목을 누르면 보유자 목록이 바로 열립니다.',
  },
  {
    title: '4. 인물 상세',
    desc: '사람 기준으로 연도별 신고 내역을 모아서, "이 사람이 어떤 자산을 어디에 얼마나 갖고 있는지"를 정리해서 보여줍니다.',
  },
];

const WHO_LIST = [
  {
    title: '공공·기관 서비스 기획팀',
    desc: '여러 출처에서 들어오는 재산 공개 데이터를 하나로 묶어서 대시보드·웹·앱에 동시에 노출하고 싶은 팀',
  },
  {
    title: '부동산·자산 인사이트 서비스',
    desc: '지역별 신고 부동산을 깔끔하게 지도에 입혀서 내부 모니터링/외부 서비스로 확장하려는 팀',
  },
  {
    title: '1인·소규모 빌더',
    desc: '데이터 스키마는 고정해두고, 위에 얹을 화면만 빠르게 바꾸면서 여러 앱을 찍어내고 싶은 사람',
  },
];

// ===== HEADER =====
function KWHeader() {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-cyan-500/10"
      style={{ background: 'rgba(10, 29, 61, 0.45)' }}
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.33, 1, 0.68, 1] }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-0 flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-xl overflow-hidden bg-slate-900 flex items-center justify-center shadow-[0_0_30px_rgba(0,194,255,0.4)]">
              <img src="/logo.png" alt="K-Whale" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -inset-1 rounded-2xl bg-cyan-400/30 blur-xl" />
          </div>
          <div className="flex flex-col">
            <span className="text-slate-50 font-semibold leading-none">K-Whale</span>
            <span className="text-cyan-200 text-xs leading-none mt-1">Asset Disclosure Intelligence</span>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <a key={item.name} href={item.href} className="text-cyan-50/60 text-sm hover:text-white transition-colors">
              {item.name}
            </a>
          ))}
        </nav>
        <button className="hidden md:inline-flex items-center gap-2 bg-cyan-400 text-slate-950 font-semibold px-4 py-1.5 rounded-lg shadow-[0_20px_30px_rgba(0,194,255,0.25)] hover:brightness-105 transition">
          도입 문의
          <span aria-hidden>→</span>
        </button>
      </div>
    </motion.header>
  );
}

// ===== HERO =====
function KWHero({ scale, opacity }: { scale: MotionValue<number>; opacity: MotionValue<number> }) {
  return (
    <motion.section id="overview" className="min-h-screen flex items-center justify-center pt-20 pb-28 relative" style={{ scale, opacity }}>
      <div className="max-w-6xl w-full px-4 lg:px-0 mx-auto grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-center">
        <div>
          <motion.p
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/40 text-cyan-100 text-xs mb-5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
          >
            네이비톤 인텔리전스 대시보드
            <span className="opacity-50">·</span>
            공시 자산을 한 기준으로
          </motion.p>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-[3.35rem] font-bold leading-tight text-slate-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15, ease: [0.33, 1, 0.68, 1] }}
          >
            예금·증권·코인·토지·건물은
            <br />
            물론이고 채무까지
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-200 to-slate-50 mt-3">
              같은 스키마로 정리한 대시보드
            </span>
          </motion.h1>
          <motion.p
            className="text-slate-200/75 mt-6 text-base md:text-lg leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25, ease: [0.33, 1, 0.68, 1] }}
          >
            어디서 온 데이터든 한 번만 규격화하면 앱 · 웹 · 사내 대시보드 어디에 꽂아도 똑같이 보입니다.
            <br />
            공시 데이터 특유의 들쭉날쭉함을 K-Whale이 앞단에서 막아줍니다.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35, ease: [0.33, 1, 0.68, 1] }}
          >
            <button className="px-5 py-2.5 rounded-lg bg-cyan-400 text-slate-950 font-semibold shadow-[0_18px_35px_rgba(0,194,255,0.35)] hover:brightness-110 transition">
              라이브 데모 보기
            </button>
            <button className="px-5 py-2.5 rounded-lg border border-cyan-400/30 text-cyan-50/90 hover:bg-cyan-50/5 transition">
              데이터 시트 받기 (PDF)
            </button>
          </motion.div>
        </div>

        <motion.div
          className="relative bg-slate-950/30 border border-cyan-400/10 rounded-2xl p-5 backdrop-blur-xl shadow-[0_24px_80px_rgba(0,0,0,0.2)]"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, delay: 0.25, ease: [0.33, 1, 0.68, 1] }}
        >
          <p className="text-xs uppercase tracking-wide text-slate-200/40 mb-3">현재 샘플 번들 총액</p>
          <p className="text-2xl text-slate-50 font-semibold mb-6">₩17.6조</p>
          <div className="grid grid-cols-2 gap-2">
            {CATEGORY_PILLS.map((c) => (
              <div key={c.value} className={`rounded-xl px-3 py-2 bg-slate-950/30 border border-cyan-400/5 flex flex-col gap-1 ${c.negative ? 'ring-1 ring-red-500/20' : ''}`}>
                <span className="text-xs text-slate-200/65">{c.label}</span>
                <span className={`text-sm font-semibold ${c.negative ? 'text-red-200' : 'text-cyan-100'}`}>{c.amount}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 text-xs text-slate-200/50">* 채무는 기본적으로 합산에서 제외되도록 세팅되어 있어요.</div>
        </motion.div>
      </div>

      <motion.div className="absolute -top-24 -right-10 w-64 h-64 bg-cyan-400/20 blur-3xl rounded-full" animate={{ y: [0, 25, 0] }} transition={{ duration: 7, repeat: Infinity, ease: [0.33, 1, 0.68, 1] }} />
      <motion.div className="absolute -bottom-10 left-10 w-56 h-56 bg-teal-500/10 blur-3xl rounded-full" animate={{ y: [0, -25, 0] }} transition={{ duration: 5, repeat: Infinity, ease: [0.33, 1, 0.68, 1] }} />
    </motion.section>
  );
}

// ===== DATA MODEL SECTION =====
function KWDataModel() {
  return (
    <section id="model" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 lg:px-0">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-3">데이터는 4단계로만 흘러갑니다</h2>
          <p className="text-slate-200/70 mb-8">
            원본이 어디서 왔든 일단 ① 받아두고 → ② 우리가 쓰는 기준으로 바꾸고 → ③ 화면에서 바로 쓸 수 있게 집계하고 → ④ 보고서/대시보드로 뿌리는 구조예요.
            <br />
            이걸 고정해두면 &quot;여긴 왜 코인이 안 나와요?&quot; 같은 질문이 아예 없어집니다.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          <motion.div className="rounded-2xl bg-slate-950/30 border border-cyan-500/10 p-5 backdrop-blur-md" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.05, ease: [0.33, 1, 0.68, 1] }} viewport={{ once: true, margin: '-80px' }}>
            <p className="text-xs text-cyan-200/60 mb-2">1단계 · 원본 수집</p>
            <h3 className="text-slate-50 font-semibold mb-4">assets.json</h3>
            <p className="text-sm text-slate-200/70 mb-4">기관별·연도별로 포맷이 달라도 일단 그대로 받아둡니다.</p>
            <pre className="text-[0.6rem] bg-slate-950/40 p-3 rounded-lg text-slate-100/70">{`{ id, personId, assetType, amount, location, declaredAt }`}</pre>
          </motion.div>

          <motion.div className="rounded-2xl bg-slate-950/30 border border-cyan-500/10 p-5 backdrop-blur-md" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.1, ease: [0.33, 1, 0.68, 1] }} viewport={{ once: true, margin: '-80px' }}>
            <p className="text-xs text-cyan-200/60 mb-2">2단계 · 표준화</p>
            <h3 className="text-slate-50 font-semibold mb-4">K-Whale 스키마</h3>
            <p className="text-sm text-slate-200/70 mb-4">&quot;예금/증권/코인/부동산/차량/채무&quot; 이렇게 우리가 쓰는 축으로만 다시 묶습니다.</p>
            <pre className="text-[0.6rem] bg-slate-950/40 p-3 rounded-lg text-slate-100/70">{`KWAsset { category, subCategory, amount, declaredPeriod, locationId }`}</pre>
          </motion.div>

          <motion.div className="rounded-2xl bg-slate-950/30 border border-cyan-500/10 p-5 backdrop-blur-md" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.15, ease: [0.33, 1, 0.68, 1] }} viewport={{ once: true, margin: '-80px' }}>
            <p className="text-xs text-cyan-200/60 mb-2">3단계 · 화면용 집계</p>
            <h3 className="text-slate-50 font-semibold mb-4">지역·종목·인물</h3>
            <p className="text-sm text-slate-200/70 mb-4">&quot;이 지역이 얼마인지&quot;, &quot;이 종목 누가 갖고 있는지&quot; 같은 질문을 바로 답할 수 있게 만듭니다.</p>
            <ul className="text-[0.6rem] space-y-1 text-slate-100/70">
              <li>· 지역별 부동산 합계</li>
              <li>· 증권/코인 보유 순위</li>
              <li>· 사람별 신고 타임라인</li>
            </ul>
          </motion.div>

          <motion.div className="rounded-2xl bg-slate-950/30 border border-cyan-500/10 p-5 backdrop-blur-md" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.2, ease: [0.33, 1, 0.68, 1] }} viewport={{ once: true, margin: '-80px' }}>
            <p className="text-xs text-cyan-200/60 mb-2">4단계 · 대시보드 노출</p>
            <h3 className="text-slate-50 font-semibold mb-4">Executive View</h3>
            <p className="text-sm text-slate-200/70 mb-4">임원/의사결정자가 바로 볼 수 있는 KPI 뷰로 바꿉니다.</p>
            <pre className="text-[0.6rem] bg-slate-950/40 p-3 rounded-lg text-slate-100/70">{`{ totalPersons, totalAssets, byCategory[] }`}</pre>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ===== SCREENS SECTION =====
function KWScreens() {
  return (
    <section id="screens" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 lg:px-0">
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease: [0.33, 1, 0.68, 1] }} viewport={{ once: true }}>
          <div className="flex items-center justify-between gap-4 mb-7">
            <div>
              <h2 className="text-3xl font-bold text-slate-50 mb-2">화면 구성</h2>
              <p className="text-slate-200/70">관리자는 대시보드로, 운영자는 리스트로, 외부는 지도/검색으로. 같은 데이터로 전부 나옵니다.</p>
            </div>
            <div className="hidden md:flex items-center gap-2 border border-cyan-500/20 rounded-lg px-3 py-1.5 text-xs text-slate-100/70">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              샘플 번들 연결 중
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {SCREEN_CARDS.map((sc, idx) => (
            <motion.div key={sc.title} className="rounded-2xl bg-slate-950/20 border border-cyan-500/10 p-6 backdrop-blur-md hover:border-cyan-400/40 transition group" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.05 * idx, ease: [0.33, 1, 0.68, 1] }} viewport={{ once: true, margin: '-80px' }}>
              <p className="text-cyan-100/70 text-xs mb-2">{sc.title}</p>
              <p className="text-slate-50 font-semibold mb-3">{sc.desc}</p>
              <p className="text-slate-200/40 text-xs">데이터가 한 번만 정리되면 이 화면들은 그냥 선택지일 뿐입니다.</p>
              <div className="mt-4 inline-flex items-center gap-1 text-cyan-200/80 text-sm group-hover:gap-2 transition-all">
                화면 예시 보기
                <span aria-hidden>→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== WHO SECTION =====
function KWWho() {
  return (
    <section id="who" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 lg:px-0">
        <motion.h2 className="text-3xl font-bold text-slate-50 mb-8" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease: [0.33, 1, 0.68, 1] }} viewport={{ once: true }}>
          이런 분들이 바로 가져다 씁니다
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {WHO_LIST.map((w, idx) => (
            <motion.div key={w.title} className="rounded-2xl bg-slate-950/20 border border-cyan-500/10 p-5 backdrop-blur-md" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.05 * idx, ease: [0.33, 1, 0.68, 1] }} viewport={{ once: true, margin: '-60px' }}>
              <p className="text-cyan-100/75 text-sm mb-2">{w.title}</p>
              <p className="text-slate-200/70 text-sm leading-relaxed">{w.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== CTA =====
function KWCTA() {
  return (
    <section id="access" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 lg:px-0">
        <motion.div className="rounded-3xl bg-gradient-to-br from-cyan-500/15 via-slate-950/20 to-slate-950/0 border border-cyan-400/15 p-10 backdrop-blur-lg" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease: [0.33, 1, 0.68, 1] }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">바로 테스트해보고 싶으세요?</h2>
          <p className="text-slate-200/70 mb-8">
            샘플 JSON과 리액트/플러터용 UI 예시, 그리고 데이터 스키마 설명을 한 번에 드립니다. 내부 PoC·사내 대시보드·외부 서비스 어디에 붙이든 같은 톤으로 유지됩니다.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-cyan-400 text-slate-950 font-semibold px-5 py-2.5 rounded-lg hover:brightness-110 transition">샘플 데이터 요청</button>
            <button className="border border-cyan-200/40 text-cyan-50 px-5 py-2.5 rounded-lg hover:bg-cyan-50/5 transition">도입 상담 일정 잡기</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ===== FOOTER =====
function KWFooter() {
  return (
    <footer className="py-12 border-t border-cyan-500/5 text-center text-slate-400 text-sm">
      <p>© 2025 K-Whale Intelligence. Public Asset Dashboard for apps, web, and internal tools.</p>
      <p className="mt-2 text-slate-500 text-xs">예금·증권·코인·부동산·차량·채무를 하나의 기준으로. 어디에 꽂아도 같은 모양으로.</p>
    </footer>
  );
}

// ===== MAIN =====
export default function KWhaleLanding() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] });

  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.92]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0.35]);
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const bgColor = useTransform(scrollYProgress, [0, 0.5, 1], ['#0A1D3D', '#0A1D3D', '#051020']);

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-x-hidden">
      <motion.div className="fixed inset-0 -z-10" style={{ backgroundColor: bgColor }} />
      <motion.div className="fixed inset-0 -z-5 pointer-events-none" style={{ y: bgY }}>
        <div className="absolute top-32 right-10 w-72 h-72 bg-cyan-500/15 blur-3xl rounded-full" />
        <div className="absolute bottom-10 left-10 w-56 h-56 bg-teal-400/10 blur-3xl rounded-full" />
      </motion.div>

      <KWHeader />
      <KWHero scale={heroScale} opacity={heroOpacity} />
      <KWDataModel />
      <KWScreens />
      <KWWho />
      <KWCTA />
      <KWFooter />
    </div>
  );
}