'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// K-Whale Constants
const NAVIGATION_ITEMS = [
  { name: '소개', href: '#overview' },
  { name: '데이터', href: '#model' },
  { name: '화면', href: '#screens' },
  { name: '사용처', href: '#who' },
  { name: '도입 문의', href: '#access' }
];

const CATEGORY_PILLS = [
  { label: '예금', value: 'deposit', amount: '₩3.77조' },
  { label: '증권', value: 'security', amount: '₩1.35조' },
  { label: '코인', value: 'digital', amount: '₩443.8억' },
  { label: '채무', value: 'liability', amount: '₩3.18조', negative: true },
  { label: '토지', value: 'land', amount: '₩1.69조' },
  { label: '건물', value: 'building', amount: '₩7.67조' },
];

const DATA_STEPS = [
  {
    step: '1단계 · 원본 수집',
    title: 'assets.json',
    desc: '기관별·연도별로 포맷이 달라도 일단 그대로 받아둡니다.',
    code: '{ id, personId, assetType, amount, location, declaredAt }'
  },
  {
    step: '2단계 · 표준화',
    title: 'K-Whale 스키마',
    desc: '"예금/증권/코인/부동산/차량/채무" 이렇게 우리가 쓰는 축으로만 다시 묶습니다.',
    code: 'KWAsset { category, subCategory, amount, declaredPeriod, locationId }'
  },
  {
    step: '3단계 · 화면용 집계',
    title: '지역·종목·인물',
    desc: '"이 지역이 얼마인지", "이 종목 누가 갖고 있는지" 같은 질문을 바로 답할 수 있게 만듭니다.',
    items: ['지역별 부동산 합계', '증권/코인 보유 순위', '사람별 신고 타임라인']
  },
  {
    step: '4단계 · 대시보드 노출',
    title: 'Executive View',
    desc: '임원/의사결정자가 바로 볼 수 있는 KPI 뷰로 바꿉니다.',
    code: '{ totalPersons, totalAssets, byCategory[] }'
  }
];

const SCREEN_CARDS = [
  {
    title: '1. 지도 뷰',
    desc: '시도 → 시군구 → 동까지 내려가면서 "누가 어디에 무엇을 신고했는지" 한눈에 봅니다.'
  },
  {
    title: '2. 인텔리전스 대시보드',
    desc: '예금·증권·코인·토지·건물, 그리고 채무까지 같은 기준으로 묶어서 보여주는 보고서형 화면입니다.'
  },
  {
    title: '3. 자산별 리스트',
    desc: '증권/코인/특정 항목만 뽑아 직원들한테 리스트로 내려보낼 때 쓰는 화면입니다.'
  },
  {
    title: '4. 인물 상세',
    desc: '사람 기준으로 연도별 신고 내역을 모아서, "이 사람이 어떤 자산을 어디에 얼마나 갖고 있는지"를 정리해서 보여줍니다.'
  }
];

const WHO_LIST = [
  {
    icon: '🏛️',
    title: '공공·기관 서비스 기획팀',
    desc: '여러 출처에서 들어오는 재산 공개 데이터를 하나로 묶어서 대시보드·웹·앱에 동시에 노출하고 싶은 팀'
  },
  {
    icon: '🏢',
    title: '부동산·자산 인사이트 서비스',
    desc: '지역별 신고 부동산을 깔끔하게 지도에 입혀서 내부 모니터링/외부 서비스로 확장하려는 팀'
  },
  {
    icon: '💻',
    title: '1인·소규모 빌더',
    desc: '데이터 스키마는 고정해두고, 위에 얹을 화면만 빠르게 바꾸면서 여러 앱을 찍어내고 싶은 사람'
  }
];

// Animation variants (HypeChimp에서 검증된 것)
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

// Components
function Header() {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      style={{
        background: "rgba(10, 29, 61, 0.9)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(6, 182, 212, 0.2)"
      }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div
          className="flex items-center space-x-3"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center overflow-hidden">
              <img 
                src="/logo.png" 
                alt="K-Whale Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur opacity-30"></div>
          </div>
          <div>
            <span className="text-white text-2xl font-bold">K-Whale</span>
            <span className="text-cyan-200 text-sm ml-2">Asset Intelligence</span>
          </div>
        </motion.div>
        
        <div className="hidden md:flex items-center space-x-8">
          {NAVIGATION_ITEMS.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="text-cyan-200 hover:text-white transition-colors duration-300"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -2 }}
            >
              {item.name}
            </motion.a>
          ))}
        </div>
        
        <motion.button
          className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg"
          whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(6, 182, 212, 0.4)" }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          도입 문의
        </motion.button>
      </nav>
    </motion.header>
  );
}

function HeroSection({ heroScale, heroOpacity }) {
  return (
    <motion.section 
      id="overview"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      style={{ 
        scale: heroScale,
        opacity: heroOpacity 
      }}
    >
      <div className="max-w-6xl w-full px-4 lg:px-0 mx-auto grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="flex items-center justify-start mb-8">
            <motion.div 
              className="w-16 h-16 relative"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden">
                <img 
                  src="/logo.png" 
                  alt="K-Whale Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            예금·증권·코인·토지·건물은<br />
            물론이고 채무까지<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-slate-50">
              같은 스키마로 정리한 대시보드
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
            어디서 온 데이터든 한 번만 규격화하면 앱 · 웹 · 사내 대시보드 어디에 꽂아도 똑같이 보입니다.
          </p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.button 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-10 py-4 rounded-xl text-lg font-bold shadow-2xl"
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              라이브 데모 보기
            </motion.button>
            <motion.button 
              className="text-white px-10 py-4 rounded-xl text-lg font-semibold border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm"
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              데이터 시트 받기
            </motion.button>
          </motion.div>
        </motion.div>

        {/* KPI Card */}
        <motion.div
          className="relative bg-slate-950/30 border border-cyan-400/10 rounded-2xl p-5 backdrop-blur-xl shadow-2xl"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
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

      {/* Floating circles */}
      <motion.div
        className="absolute -top-24 -right-10 w-64 h-64 bg-cyan-400/20 blur-3xl rounded-full"
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-10 left-10 w-56 h-56 bg-blue-500/10 blur-3xl rounded-full"
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
    </motion.section>
  );
}

function DataModelSection() {
  return (
    <section id="model" className="min-h-screen flex items-center justify-center relative py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            데이터는 4단계로만 흘러갑니다
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            원본이 어디서 왔든 일단 ① 받아두고 → ② 우리가 쓰는 기준으로 바꾸고 → ③ 화면에서 바로 쓸 수 있게 집계하고 → ④ 보고서/대시보드로 뿌리는 구조예요.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {DATA_STEPS.map((step, index) => (
            <motion.div
              key={index}
              className="rounded-2xl p-6 border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <p className="text-xs text-cyan-200/60 mb-2">{step.step}</p>
              <h3 className="text-white font-bold text-lg mb-3">{step.title}</h3>
              <p className="text-slate-300 text-sm mb-4">{step.desc}</p>
              {step.code && (
                <pre className="text-xs bg-slate-950/40 p-3 rounded-lg text-slate-100/70">{step.code}</pre>
              )}
              {step.items && (
                <ul className="text-xs space-y-1 text-slate-100/70">
                  {step.items.map((item, i) => (
                    <li key={i}>· {item}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ScreensSection() {
  return (
    <section id="screens" className="min-h-screen flex items-center justify-center relative py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            화면 구성
          </h2>
          <p className="text-xl text-slate-300">
            관리자는 대시보드로, 운영자는 리스트로, 외부는 지도/검색으로. 같은 데이터로 전부 나옵니다.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {SCREEN_CARDS.map((card, index) => (
            <motion.div
              key={index}
              className="rounded-2xl p-8 border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <h3 className="text-cyan-200 font-bold text-lg mb-3">{card.title}</h3>
              <p className="text-slate-300">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhoSection() {
  return (
    <section id="who" className="min-h-screen flex items-center justify-center relative py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            이런 분들이 바로 가져다 씁니다
          </h2>
        </motion.div>
        
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {WHO_LIST.map((item, index) => (
            <motion.div
              key={index}
              className="text-center rounded-2xl p-8 border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-sm"
              variants={fadeInUp}
              whileHover={{
                y: -8,
                scale: 1.03,
                boxShadow: "0 25px 50px rgba(6, 182, 212, 0.3)"
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-slate-300">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section id="access" className="min-h-screen flex items-center justify-center relative py-20">
      <div className="max-w-4xl mx-auto text-center px-6">
        <motion.div
          className="rounded-3xl p-12 border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            바로 테스트해보고 싶으세요?
          </h2>
          
          <p className="text-xl text-slate-300 mb-12 leading-relaxed">
            샘플 JSON과 리액트/플러터용 UI 예시, 그리고 데이터 스키마 설명을 한 번에 드립니다.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.button
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-12 py-5 rounded-xl text-xl font-bold shadow-2xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              샘플 데이터 요청
            </motion.button>
            
            <motion.button
              className="border border-cyan-200/40 text-cyan-50 px-12 py-5 rounded-xl text-xl font-bold"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              도입 상담 일정 잡기
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <motion.footer 
      className="relative z-10 px-6 py-16 border-t border-cyan-500/20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center text-slate-400">
          <p className="mb-2">&copy; 2025 K-Whale. All rights reserved.</p>
          <p className="text-slate-500 text-sm mb-4">
            예금·증권·코인·부동산·차량·채무를 하나의 기준으로. 어디에 꽂아도 같은 모양으로.
          </p>
          <div className="flex justify-center items-center space-x-4 text-sm">
            <motion.a 
              href="/terms" 
              className="hover:text-white transition-colors"
              whileHover={{ y: -1 }}
            >
              이용약관
            </motion.a>
            <span>|</span>
            <motion.a 
              href="/privacy" 
              className="hover:text-white transition-colors"
              whileHover={{ y: -1 }}
            >
              개인정보처리방침
            </motion.a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

// Main Landing Component
export default function KWhaleLanding() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.9]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0.3]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  
  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    ["#0A1D3D", "#0A2540", "#051A2E", "#0A1D3D"]
  );

  return (
    <div ref={containerRef} className="relative">
      {/* Dynamic background */}
      <motion.div 
        className="fixed inset-0 -z-10"
        style={{ backgroundColor: bgColor }}
      />

      {/* Parallax background */}
      <motion.div 
        className="fixed inset-0 pointer-events-none overflow-hidden -z-5"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full filter blur-3xl"></div>
      </motion.div>

      <Header />
      <HeroSection heroScale={heroScale} heroOpacity={heroOpacity} />
      <DataModelSection />
      <ScreensSection />
      <WhoSection />
      <CTASection />
      <Footer />
    </div>
  );
}