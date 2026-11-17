import fs from "node:fs";
import path from "node:path";
import type { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const headingIds: Record<string, string> = {
  "TABLE OF CONTENTS": "toc",
  "1. WHAT INFORMATION DO WE COLLECT?": "infocollect",
  "Personal information you disclose to us": "personalinfo",
  "Information collected from other sources": "othersources",
  "2. HOW DO WE PROCESS YOUR INFORMATION?": "infouse",
  "3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?": "legalbases",
  "4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?": "whoshare",
  "5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?": "cookies",
  "6. HOW LONG DO WE KEEP YOUR INFORMATION?": "inforetain",
  "7. HOW DO WE KEEP YOUR INFORMATION SAFE?": "infosafe",
  "8. WHAT ARE YOUR PRIVACY RIGHTS?": "privacyrights",
  "9. CONTROLS FOR DO-NOT-TRACK FEATURES": "DNT",
  "10. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?": "uslaws",
  "11. DO WE MAKE UPDATES TO THIS NOTICE?": "policyupdates",
  "12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?": "contact",
  "13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?": "request",
};

function textOf(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textOf).join("");
  if (node && typeof node === "object" && "props" in node) {
    const element = node as { props?: { children?: ReactNode } };
    return textOf(element.props?.children);
  }
  return "";
}

function localHref(href: string | undefined) {
  if (!href) return href;
  if (href.includes("journeyofbliss.com/contact-us")) return "/contact-us";
  if (href.includes("journeyofbliss.com/privacy-policy")) return "/privacy-policy";
  if (href.includes("journeyofbliss.com/terms-condition")) return "/terms-condition";
  return href;
}

export function LegalDocument({ file }: { file: "terms.md" | "privacy.md" }) {
  const raw = fs.readFileSync(path.join(process.cwd(), "content", file), "utf8");
  const body = raw.replace(/^# .+\n+/, "");

  return (
    <article className="legal-copy">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ children }) => {
            const id = headingIds[textOf(children).trim()];
            return <h2 id={id}>{children}</h2>;
          },
          h3: ({ children }) => {
            const id = headingIds[textOf(children).trim()];
            return <h3 id={id}>{children}</h3>;
          },
          strong: ({ children }) => {
            const label = textOf(children);
            if (label.startsWith("Withdrawing your consent")) {
              return <strong id="withdrawconsent">{children}</strong>;
            }
            return <strong>{children}</strong>;
          },
          a: ({ href, children }) => {
            const url = localHref(href);
            const external = url?.startsWith("http");
            return (
              <a href={url} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
                {children}
              </a>
            );
          },
        }}
      >
        {body}
      </ReactMarkdown>
    </article>
  );
}
