export type Project = {
  name: string;
  category: string;
  url: string;
  growth: number;
  seo: number;
  geo: number;
  social: number;
  momentum: string;
  status: "Live" | "Setup" | "Draft";
};

export const projects: Project[] = [
  { name: "Kapış", category: "Social / Viral", url: "kapis.app", growth: 72, seo: 68, geo: 42, social: 86, momentum: "+18%", status: "Live" },
  { name: "Trade Monitor", category: "Fintech", url: "trade-monitor.app", growth: 51, seo: 38, geo: 31, social: 76, momentum: "+9%", status: "Setup" },
  { name: "Marine Calculation", category: "Naval Engineering", url: "marinecalc.app", growth: 59, seo: 74, geo: 51, social: 33, momentum: "+7%", status: "Live" },
  { name: "SchoolFlow", category: "Education", url: "schoolflow.app", growth: 39, seo: 52, geo: 21, social: 29, momentum: "+3%", status: "Draft" }
];

export const agents = [
  ["CMO", "Plans the daily growth sprint", "Active"],
  ["Social", "X, Instagram, LinkedIn, TikTok drafts", "Ready"],
  ["Video", "Hooks, scripts and 9:16 video briefs", "Ready"],
  ["SEO", "Technical audit, keyword and page opportunities", "Ready"],
  ["GEO", "AI search visibility and citation opportunities", "Beta"],
  ["Analytics", "Learns what converts and feeds strategy", "Setup"]
];
