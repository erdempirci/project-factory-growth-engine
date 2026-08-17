# Project Factory Growth Engine

Project Factory projeleri için ortak AI CMO / growth paneli.

## MVP'de var
- Portfolio dashboard
- Proje bazlı Growth / SEO / GEO / Social skorları
- 6 agent görünümü: CMO, Social, Video, SEO, GEO, Analytics
- Günlük campaign brief alanı
- OpenAI Responses API ile gerçek CMO çıktısı; API key yoksa demo modu
- Vercel-ready Next.js App Router yapı

## Kurulum
```bash
npm install
cp .env.example .env.local
npm run dev
```

Gerçek AI için `.env.local` içine `OPENAI_API_KEY` ekleyin.

## Phase 2
1. Supabase: projects, brand_profiles, campaigns, content_items, social_accounts, metrics
2. Postiz: sosyal hesap OAuth + scheduling/publishing
3. SEO crawler + Search Console + GA4
4. GEO prompt matrix: ChatGPT/Gemini/Perplexity/Google AI visibility
5. Remotion worker: 9:16 template render
6. Vercel Cron: daily CMO sprint + weekly reporting

## Önerilen veri modeli
- projects
- brand_profiles
- channels
- campaigns
- content_items
- seo_audits
- geo_checks
- metrics_daily
- agent_runs

## Güvenlik
- Social OAuth token'larını browser'a göndermeyin.
- Supabase service-role key yalnız server-side.
- Otomatik yayın ilk aşamada kapalı; human approval varsayılan.
