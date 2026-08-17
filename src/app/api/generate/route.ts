import OpenAI from "openai";

export async function POST(req: Request) {
  const { project, brief } = await req.json();
  if (!process.env.OPENAI_API_KEY) {
    return Response.json({
      mode: "demo",
      output: `${project.name} için demo kampanya hazır: X'te 2 kısa post, Instagram Reels için 1 hook/video brief, 1 SEO landing-page konusu ve 1 GEO görünürlük testi. OPENAI_API_KEY eklenince aynı akış gerçek agent çıktısına döner.`
    });
  }
  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const response = await client.responses.create({
    model: process.env.OPENAI_MODEL || "gpt-5.6-luna",
    input: `You are the CMO agent for Project Factory. Project: ${JSON.stringify(project)}. Today's instruction: ${brief}. Return a concise Turkish daily campaign with: 2 X posts, 1 vertical-video hook + 20 sec script, 1 SEO action, 1 GEO action, and a measurable KPI. Do not claim you posted anything.`
  });
  return Response.json({ mode: "live", output: response.output_text });
}
