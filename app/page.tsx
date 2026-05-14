export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Shopify SEO
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          AI Rewrites Your Product Descriptions to{" "}
          <span className="text-[#58a6ff]">Rank Higher</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Connect your Shopify store, let our AI analyze competitor keywords, and get SEO-optimized descriptions synced back automatically — without losing your brand voice.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Optimizing — $14/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No contracts.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "🔍", title: "Competitor Keyword Analysis", desc: "Scans top-ranking competitors and extracts the keywords driving their traffic." },
            { icon: "✍️", title: "AI Description Rewriting", desc: "OpenAI rewrites your descriptions to rank higher while preserving your tone." },
            { icon: "🔄", title: "Auto-Sync to Shopify", desc: "Optimized descriptions are pushed directly to your store via the Shopify API." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <h3 className="text-white font-semibold mb-1">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$14</p>
          <p className="text-[#8b949e] text-sm mb-6">/month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited product optimizations",
              "Competitor keyword analysis",
              "AI-powered description rewriting",
              "Auto-sync to Shopify store",
              "Optimization history & rollback",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does it connect to my Shopify store?",
              a: "After subscribing, you'll install our Shopify app or enter your store credentials. We use the official Shopify Admin API to read and update your product descriptions securely."
            },
            {
              q: "Will the AI change my brand voice?",
              a: "No. You provide a brand voice guide during onboarding. Our AI uses it as a constraint when rewriting, so descriptions stay on-brand while becoming SEO-friendly."
            },
            {
              q: "Can I revert to the original descriptions?",
              a: "Yes. Every optimization is stored in your history. You can roll back any product description to its previous version with one click."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="text-white font-semibold mb-2">{item.q}</p>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} SEO Optimizer for Shopify. All rights reserved.
      </footer>
    </main>
  );
}
