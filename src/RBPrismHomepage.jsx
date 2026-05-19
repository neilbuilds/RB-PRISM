import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Sparkles,
  ShieldCheck,
  Lock,
  Activity,
  Tv,
  Smartphone,
  PlayCircle,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  MessageSquareText,
  Star,
  BarChart3,
  ChevronRight,
  Radio,
  Eye,
  Zap
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const platforms = ["Red Bull TV", "Servus TV"];
const products = ["iOS App", "Android App", "Web", "Smart TV"];
const content = ["Rally Race", "Football Match", "Live Event", "Documentary"];

const signalCards = [
  {
    title: "What users do",
    source: "Clickstream",
    insight: "Rally starts up 18% after homepage placement",
    icon: Activity,
    color: "text-blue-950",
    bg: "bg-blue-50"
  },
  {
    title: "What users say",
    source: "Surveys",
    insight: "Sentiment is positive, but onboarding confusion persists",
    icon: MessageSquareText,
    color: "text-red-700",
    bg: "bg-red-50"
  },
  {
    title: "What users rate",
    source: "Reviews",
    insight: "iOS reviews mention playback stability in v2.4",
    icon: Star,
    color: "text-amber-600",
    bg: "bg-amber-50"
  },
  {
    title: "What users discuss",
    source: "Reddit",
    insight: "3 threads confirm stream interruptions during peak viewing",
    icon: Radio,
    color: "text-sky-700",
    bg: "bg-sky-50"
  }
];

const actionQueue = [
  {
    priority: "High",
    title: "Investigate iOS playback drops",
    detail: "Completion dipped during Rally Race on Red Bull TV iOS.",
    owner: "Product + Eng",
    tone: "bg-red-50 text-red-700 border-red-100"
  },
  {
    priority: "Medium",
    title: "Monitor football match Android sentiment",
    detail: "Servus TV complaints cluster around buffering and start delay.",
    owner: "QA + Support",
    tone: "bg-amber-50 text-amber-700 border-amber-100"
  },
  {
    priority: "Low",
    title: "Package weekly content brief",
    detail: "Rally content shows strong discovery and positive discussion.",
    owner: "Content Lead",
    tone: "bg-blue-50 text-blue-900 border-blue-100"
  }
];

const examplePrompts = [
  "Is the Rally Race working well on Red Bull TV iOS?",
  "What needs attention across platforms this week?",
  "Why did Android completion drop for the Football Match?",
  "Which content has the strongest sentiment right now?"
];

function Chip({ children, active, icon: Icon, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${
        active
          ? "border-blue-950 bg-blue-950 text-white shadow-sm"
          : "border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50"
      }`}
    >
      {Icon && <Icon className="h-4 w-4" />}
      {children}
    </button>
  );
}

function MetricCard({ label, value, detail, icon: Icon, trend, tone = "navy" }) {
  const toneMap = {
    navy: "bg-blue-950 text-white",
    red: "bg-red-600 text-white",
    amber: "bg-amber-400 text-blue-950",
    white: "bg-white text-blue-950"
  };

  return (
    <Card className="rounded-2xl border border-slate-200 bg-white/95 shadow-sm">
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-slate-500">{label}</p>
            <p className="mt-2 text-3xl font-black tracking-tight text-blue-950">
              {value}
            </p>
            <p className="mt-1 text-sm text-slate-600">{detail}</p>
          </div>
          <div className={`rounded-2xl p-3 ${toneMap[tone]}`}>
            <Icon className="h-5 w-5" />
          </div>
        </div>
        {trend && (
          <p className="mt-4 text-xs font-bold uppercase tracking-wide text-red-600">
            {trend}
          </p>
        )}
      </CardContent>
    </Card>
  );
}

function SelectorGroup({ title, icon: Icon, options, value, onChange }) {
  return (
    <div>
      <div className="mb-2 flex items-center gap-2 text-sm font-black text-blue-950">
        <Icon className="h-4 w-4 text-red-600" /> {title}
      </div>
      <div className="flex flex-wrap gap-2">
        {options.map((item) => (
          <Chip key={item} active={item === value} onClick={() => onChange(item)}>
            {item}
          </Chip>
        ))}
      </div>
    </div>
  );
}

function InfoPill({ label, value, className = "" }) {
  return (
    <div className={`rounded-2xl p-4 ${className}`}>
      <p className="text-xs font-black uppercase text-slate-500">{label}</p>
      <p className="mt-1 text-xl font-black text-blue-950">{value}</p>
    </div>
  );
}

export default function RBPrismHomepage() {
  const [selectedPlatform, setSelectedPlatform] = useState("Red Bull TV");
  const [selectedProduct, setSelectedProduct] = useState("iOS App");
  const [selectedContent, setSelectedContent] = useState("Rally Race");
  const [query, setQuery] = useState(
    "Is the Rally Race working well on Red Bull TV iOS?"
  );

  return (
    <div className="min-h-screen bg-[#f7f8fb] text-slate-900">
      <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800" />

      <div className="relative mx-auto max-w-7xl px-6 py-6 lg:px-8">
        <header className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-sm">
              <Sparkles className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-red-400">
                RBMH Hackathon
              </p>
              <h1 className="text-2xl font-black tracking-tight text-white">
                RB Prism
              </h1>
            </div>
          </div>

          <nav className="hidden items-center gap-1 rounded-full bg-white/10 p-1 text-sm font-semibold text-white backdrop-blur md:flex">
            <button className="rounded-full bg-white px-4 py-2 text-blue-950">
              Overview
            </button>
            <button className="rounded-full px-4 py-2 text-white/80 hover:text-white">
              Platforms
            </button>
            <button className="rounded-full px-4 py-2 text-white/80 hover:text-white">
              Products
            </button>
            <button className="rounded-full px-4 py-2 text-white/80 hover:text-white">
              Content
            </button>
            <button className="rounded-full px-4 py-2 text-white/80 hover:text-white">
              Actions
            </button>
          </nav>

          <Button className="rounded-full bg-red-600 px-5 py-3 font-bold text-white hover:bg-red-700">
            Ask RB Prism
          </Button>
        </header>

        <main className="mt-10">
          <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-[2rem] border border-white/20 bg-white p-6 shadow-xl"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-black uppercase tracking-wide text-red-600">
                  AI-first experience insights
                </span>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-950">
                  Platform → Product → Content
                </span>
              </div>

              <h2 className="mt-5 max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-blue-950 md:text-6xl">
                One question. Four sources. One trusted answer.
              </h2>

              <p className="mt-5 max-w-2xl text-lg font-medium leading-8 text-slate-600">
                RB Prism helps PMs, marketers, and leaders understand product
                health across platforms, apps, and content using governed AI
                tools and cited evidence.
              </p>

              <div className="mt-7 rounded-3xl border border-slate-200 bg-slate-50 p-3 shadow-inner">
                <div className="flex flex-col gap-3 md:flex-row">
                  <div className="flex flex-1 items-center gap-3 rounded-2xl bg-white px-4 py-4 shadow-sm">
                    <Search className="h-5 w-5 text-slate-400" />
                    <input
                      value={query}
                      onChange={(event) => setQuery(event.target.value)}
                      className="w-full bg-transparent text-base font-semibold text-blue-950 outline-none placeholder:text-slate-400"
                      placeholder="Ask about platform, product, or content performance..."
                    />
                  </div>

                  <Button className="rounded-2xl bg-blue-950 px-6 py-4 text-base font-black text-white hover:bg-blue-900">
                    Investigate <ChevronRight className="ml-2 inline h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {examplePrompts.map((prompt) => (
                  <button
                    key={prompt}
                    onClick={() => setQuery(prompt)}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-red-200 hover:bg-red-50 hover:text-red-700"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="rounded-[2rem] border border-white/20 bg-white p-6 shadow-xl"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-black uppercase tracking-wide text-slate-400">
                    Current lens
                  </p>
                  <h3 className="mt-1 text-2xl font-black text-blue-950">
                    Experience Scope
                  </h3>
                </div>
                <div className="rounded-2xl bg-amber-300 p-3 text-blue-950">
                  <Eye className="h-6 w-6" />
                </div>
              </div>

              <div className="mt-6 space-y-5">
                <SelectorGroup
                  title="Platform"
                  icon={Tv}
                  options={platforms}
                  value={selectedPlatform}
                  onChange={setSelectedPlatform}
                />
                <SelectorGroup
                  title="Product"
                  icon={Smartphone}
                  options={products}
                  value={selectedProduct}
                  onChange={setSelectedProduct}
                />
                <SelectorGroup
                  title="Content"
                  icon={PlayCircle}
                  options={content}
                  value={selectedContent}
                  onChange={setSelectedContent}
                />
              </div>

              <div className="mt-6 rounded-3xl bg-blue-950 p-5 text-white">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-300">
                  Scoped answer path
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2 text-lg font-black">
                  <span>{selectedPlatform}</span>
                  <ChevronRight className="h-5 w-5 text-red-400" />
                  <span>{selectedProduct}</span>
                  <ChevronRight className="h-5 w-5 text-red-400" />
                  <span>{selectedContent}</span>
                </div>
              </div>
            </motion.div>
          </section>

          <section className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <MetricCard
              label="Platform health"
              value="Stable"
              detail="Red Bull TV engagement up week-over-week"
              icon={CheckCircle2}
              tone="navy"
              trend="+12% total starts"
            />
            <MetricCard
              label="Product risk"
              value="Watch"
              detail="iOS playback issues in v2.4 need review"
              icon={AlertTriangle}
              tone="red"
              trend="Risk concentrated"
            />
            <MetricCard
              label="Content signal"
              value="Strong"
              detail="Rally Race discovery and starts are healthy"
              icon={TrendingUp}
              tone="amber"
              trend="High intent"
            />
            <MetricCard
              label="AI confidence"
              value="High"
              detail="Four sources checked with cited evidence"
              icon={ShieldCheck}
              tone="white"
              trend="Governed answer"
            />
          </section>

          <section className="mt-6 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <Card className="rounded-[2rem] border border-slate-200 bg-white shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-black uppercase tracking-wide text-red-600">
                      RB Prism answer
                    </p>
                    <h3 className="mt-2 text-3xl font-black tracking-tight text-blue-950">
                      Adoption is strong. Experience quality needs attention.
                    </h3>
                  </div>
                  <div className="rounded-2xl bg-blue-950 p-3 text-white">
                    <Sparkles className="h-6 w-6" />
                  </div>
                </div>

                <p className="mt-4 text-base leading-7 text-slate-600">
                  Rally Race discovery and starts are healthy on Red Bull TV
                  iOS, but completion drops appear tied to playback interruptions
                  in the latest app version.
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  <InfoPill label="Confidence" value="High" className="bg-blue-50" />
                  <InfoPill label="Risk" value="Playback" className="bg-red-50 text-red-700" />
                  <InfoPill label="Next move" value="Diagnose v2.4" className="bg-amber-50" />
                </div>

                <div className="mt-5 rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <div className="flex items-center gap-2 text-sm font-black uppercase tracking-wide text-blue-950">
                    <Lock className="h-4 w-4 text-red-600" /> Trust bar
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {[
                      "Read-only",
                      "Scoped tools",
                      "Masked PII",
                      "Audited",
                      "4 sources checked"
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-white px-3 py-1.5 text-xs font-bold text-slate-700 shadow-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-[2rem] border border-slate-200 bg-white shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-black uppercase tracking-wide text-slate-400">
                      Evidence grid
                    </p>
                    <h3 className="mt-1 text-2xl font-black text-blue-950">
                      Four voices of the experience
                    </h3>
                  </div>
                  <BarChart3 className="h-6 w-6 text-red-600" />
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {signalCards.map((card) => {
                    const Icon = card.icon;
                    return (
                      <div
                        key={card.title}
                        className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm"
                      >
                        <div className="flex items-start gap-3">
                          <div className={`rounded-2xl p-3 ${card.bg} ${card.color}`}>
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="font-black text-blue-950">
                              {card.title}
                            </h4>
                            <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                              {card.source}
                            </p>
                          </div>
                        </div>
                        <p className="mt-4 text-sm font-medium leading-6 text-slate-600">
                          {card.insight}
                        </p>
                        <button className="mt-4 text-sm font-black text-red-600 hover:text-red-700">
                          View citation
                        </button>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <Card className="rounded-[2rem] border border-slate-200 bg-white shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-black uppercase tracking-wide text-slate-400">
                      Action queue
                    </p>
                    <h3 className="mt-1 text-2xl font-black text-blue-950">
                      What RB Prism recommends next
                    </h3>
                  </div>
                  <Zap className="h-6 w-6 text-amber-500" />
                </div>

                <div className="mt-5 space-y-3">
                  {actionQueue.map((item) => (
                    <div
                      key={item.title}
                      className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-4 md:flex-row md:items-center md:justify-between"
                    >
                      <div className="flex items-start gap-4">
                        <span
                          className={`rounded-full border px-3 py-1 text-xs font-black ${item.tone}`}
                        >
                          {item.priority}
                        </span>
                        <div>
                          <h4 className="font-black text-blue-950">
                            {item.title}
                          </h4>
                          <p className="mt-1 text-sm text-slate-600">
                            {item.detail}
                          </p>
                        </div>
                      </div>
                      <div className="text-sm font-black text-slate-500">
                        {item.owner}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-[2rem] border border-slate-200 bg-blue-950 text-white shadow-sm">
              <CardContent className="p-6">
                <p className="text-sm font-black uppercase tracking-wide text-amber-300">
                  Homepage promise
                </p>
                <h3 className="mt-3 text-3xl font-black tracking-tight">
                  From scattered dashboards to one AI product analyst.
                </h3>
                <p className="mt-4 leading-7 text-white/75">
                  RB Prism turns platform, product, and content signals into a
                  trusted answer with evidence, confidence, and a recommended
                  next move.
                </p>
                <div className="mt-6 rounded-3xl bg-white/10 p-5">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-white/60">
                    Demo moment
                  </p>
                  <p className="mt-2 text-xl font-black text-white">
                    “An analyst would take days. RB Prism explains it in
                    seconds.”
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>
        </main>
      </div>
    </div>
  );
}
