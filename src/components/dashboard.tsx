"use client";

import { useMemo, useState } from "react";
import { Activity, Bot, CalendarDays, Check, ChevronRight, Globe2, LayoutDashboard, Search, Send, Sparkles, TrendingUp, Video } from "lucide-react";
import { agents, projects } from "@/lib/data";

const nav = [["Overview", LayoutDashboard], ["Projects", Globe2], ["Content", Sparkles], ["SEO", Search], ["GEO", Bot], ["Social", Send], ["Analytics", Activity]] as const;

export function Dashboard() {
  const [activeProject, setActiveProject] = useState(projects[0].name);
  const [activeNav, setActiveNav] = useState("Overview");
  const [running, setRunning] = useState(false);
  const [brief, setBrief] = useState("Trend fırsatı: kısa karşılaştırma formatında yüksek yorum potansiyelli içerik üret. X için 2 post, Reels için 1 hook ve SEO için 1 landing-page fikri hazırla.");
  const [result, setResult] = useState<string | null>(null);
  const project = useMemo(() => projects.find((p) => p.name === activeProject)!, [activeProject]);

  async function runCampaign() {
    setRunning(true); setResult(null);
    try {
      const res = await fetch("/api/generate", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ project, brief }) });
      const data = await res.json(); setResult(data.output);
    } catch {
      setResult("Demo plan: 2 X postu + 1 Reels hook + 1 SEO içerik fikri üretildi. API bağlantısı eklenince gerçek model çıktısı burada görünecek.");
    } finally { setRunning(false); }
  }

  return <div className="shell"><aside className="sidebar"><div className="brand"><div className="logo">PF</div><div><b>Project Factory</b><span>Growth Engine</span></div></div><nav>{nav.map(([name, Icon]) => <button key={name} className={activeNav === name ? "nav active" : "nav"} onClick={() => setActiveNav(name)}><Icon size={17}/>{name}</button>)}</nav><div className="side-note"><Sparkles size={17}/><div><b>AI CMO</b><span>6 agents connected</span></div></div></aside><main className="main"><header><div><p className="eyebrow">{activeNav.toUpperCase()}</p><h1>Growth command center</h1><p className="muted">Tüm projelerin reklam, SEO, GEO ve içerik operasyonu tek yerde.</p></div><button className="secondary"><CalendarDays size={16}/> Content calendar</button></header><section className="stats"><Stat label="Growth score" value={`${project.growth}/100`} note={project.momentum}/><Stat label="SEO" value={`${project.seo}`} note="Site health"/><Stat label="GEO" value={`${project.geo}`} note="AI visibility"/><Stat label="Social" value={`${project.social}`} note="Channel readiness"/></section><section className="grid-main"><div className="card cmo-card"><div className="card-head"><div><p className="eyebrow">TODAY'S CMO SPRINT</p><h2>{project.name}</h2></div><span className="live-dot">● LIVE</span></div><textarea value={brief} onChange={(e)=>setBrief(e.target.value)} /><div className="action-row"><button className="primary" onClick={runCampaign} disabled={running}><Sparkles size={17}/>{running ? "Agents running…" : "Generate today's campaign"}</button><span className="muted">Human approval stays on</span></div>{result && <div className="result"><b>CMO output</b><p>{result}</p></div>}</div><div className="card opportunity"><div className="iconbox"><TrendingUp size={21}/></div><p className="eyebrow">OPPORTUNITY</p><h3>Short-form content gap</h3><p className="muted">Rakiplerde kısa video yoğunluğu artıyor. Bugün 9:16 formatında bir karşılaştırma videosu test et.</p><div className="mini-actions"><span><Video size={15}/> Reel brief</span><span><Send size={15}/> X thread</span></div></div></section><section className="card table-card"><div className="card-head"><div><p className="eyebrow">PORTFOLIO</p><h2>Projects</h2></div><button className="secondary">+ Add project</button></div><div className="project-table"><div className="tr th"><span>Project</span><span>Growth</span><span>SEO</span><span>GEO</span><span>Social</span><span></span></div>{projects.map(p => <button className={p.name === activeProject ? "tr selected" : "tr"} key={p.name} onClick={()=>setActiveProject(p.name)}><span><b>{p.name}</b><small>{p.category}</small></span><span>{p.growth}</span><span>{p.seo}</span><span>{p.geo}</span><span>{p.social}</span><ChevronRight size={17}/></button>)}</div></section><section className="agents">{agents.map(([name, desc, status]) => <div className="agent card" key={name}><div className="agent-icon"><Bot size={18}/></div><div><b>{name} Agent</b><p>{desc}</p></div><span className="badge"><Check size={12}/>{status}</span></div>)}</section></main></div>;
}

function Stat({label,value,note}:{label:string;value:string;note:string}){return <div className="card stat"><span className="muted">{label}</span><strong>{value}</strong><small>{note}</small></div>}
