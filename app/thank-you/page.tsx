export default function ThankYouPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0b0a0d] text-[#efe9dc]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(177,120,65,0.25),_transparent_60%)]" />
      <div className="absolute bottom-[-120px] left-[-80px] h-72 w-72 rounded-full bg-[#2b0f1a] opacity-70 blur-[120px]" />
      <div className="absolute right-[-120px] top-10 h-80 w-80 rounded-full bg-[#0f2a33] opacity-70 blur-[140px]" />

      <main className="relative mx-auto flex min-h-screen w-full max-w-3xl flex-col items-start justify-center gap-8 px-6 py-24">
        <p className="text-sm uppercase tracking-[0.3em] text-white/60">
          Request received
        </p>
        <h1 className="font-[var(--font-display)] text-4xl font-semibold text-[#f7e9cf] sm:text-5xl">
          Thank you for your interest.
        </h1>
        <div className="space-y-4 text-lg leading-8 text-white/75">
          <p>
            I handle these requests personally. Look for the subject line:
            Project Vectus Excerpt 1
          </p>
          <p>Sincerely,</p>
          <p className="text-xl font-semibold text-[#f2c37b]">Hedron Archer</p>
        </div>
      </main>
    </div>
  );
}
