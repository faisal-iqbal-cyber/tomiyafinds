import { ArrowLeft } from "lucide-react";

type Section = {
  title: string;
  content: string;
};

export default function InfoPage({
  eyebrow,
  title,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  sections: Section[];
}) {
  return (
    <main className="min-h-screen bg-[#080808] text-white">
      <header className="border-b border-white/10 px-6 py-6 lg:px-12">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between">
          <a href="/" className="text-xl font-black tracking-[0.28em]">
            TOMIYA
          </a>

          <a
            href="/"
            className="flex items-center gap-2 text-sm text-white/50 transition hover:text-white"
          >
            <ArrowLeft size={15} />
            Back home
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-[1000px] px-6 pb-20 pt-24">
        <p className="text-xs tracking-[0.3em] text-[#dfbd91]">
          {eyebrow}
        </p>

        <h1 className="mt-5 font-serif text-5xl leading-tight md:text-7xl">
          {title}
        </h1>

        <p className="mt-7 max-w-2xl text-base leading-8 text-white/55">
          {intro}
        </p>
      </section>

      <section className="mx-auto max-w-[1000px] px-6 pb-28">
        <div className="border-t border-white/10">
          {sections.map((section) => (
            <div
              key={section.title}
              className="grid gap-5 border-b border-white/10 py-10 md:grid-cols-[.35fr_1fr]"
            >
              <h2 className="font-serif text-2xl">
                {section.title}
              </h2>

              <p className="whitespace-pre-line text-sm leading-7 text-white/50">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}