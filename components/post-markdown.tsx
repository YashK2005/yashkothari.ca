import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import ArbFunnel from "./arb-funnel";
import CronSchedule from "./cron-schedule";
import HedgeDirections from "./hedge-directions";

const components: Components = {
  h2: ({ children }) => (
    <h2 className="mb-4 mt-12 text-2xl font-semibold text-[#111] md:text-[1.6rem]">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mb-3 mt-8 text-xl font-semibold text-[#111]">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="my-5 leading-[1.75] text-[#2b2b2b]">{children}</p>
  ),
  a: ({ href, children }) => {
    const external = !!href && /^https?:/.test(href);
    return (
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="font-medium text-[#2563eb] underline decoration-[#2563eb]/30 underline-offset-2 transition-colors hover:decoration-[#2563eb]"
      >
        {children}
      </a>
    );
  },
  ul: ({ children }) => (
    <ul className="my-5 list-disc space-y-2 pl-6 text-[#2b2b2b] marker:text-[#9a9a9a]">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="my-5 list-decimal space-y-2 pl-6 text-[#2b2b2b] marker:text-[#9a9a9a]">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="pl-1 leading-[1.75]">{children}</li>,
  strong: ({ children }) => (
    <strong className="font-semibold text-[#111]">{children}</strong>
  ),
  blockquote: ({ children }) => (
    <blockquote className="my-6 border-l-2 border-[#2563eb]/40 pl-4 italic text-[#555]">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-10 border-[#e6e4dd]" />,
  // `pre` is a pass-through; block rendering happens in `code` so custom
  // components (the diagrams) aren't illegally nested inside <pre>.
  pre: ({ children }) => <>{children}</>,
  code: ({ className, children }) => {
    const lang = /language-([\w-]+)/.exec(className || "")?.[1];
    if (lang === "arb-funnel") return <ArbFunnel />;
    if (lang === "cron-schedule") return <CronSchedule />;
    if (lang === "hedge-directions") return <HedgeDirections />;

    const text = String(children ?? "");
    const isBlock = lang !== undefined || text.includes("\n");
    if (isBlock) {
      return (
        <pre className="my-6 overflow-x-auto rounded-lg border border-[#e6e4dd] bg-[#f6f5f1] p-4 font-mono text-[13px] leading-relaxed text-[#2b2b2b]">
          <code>{children}</code>
        </pre>
      );
    }
    return (
      <code className="rounded bg-[#eceae3] px-1.5 py-0.5 font-mono text-[0.85em] text-[#1a1a1a]">
        {children}
      </code>
    );
  },
};

// Readable serif stack — degrades gracefully to Georgia everywhere.
const SERIF = "'Charter','Bitstream Charter','Sitka Text',Cambria,Georgia,serif";

export default function PostMarkdown({ content }: { content: string }) {
  return (
    <div style={{ fontFamily: SERIF }} className="text-[17px]">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
