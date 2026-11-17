export function SectionTitle({
  eyebrow,
  title,
  light = false,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  light?: boolean;
  align?: "center" | "left";
}) {
  const centered = align === "center";
  return (
    <div className={centered ? "text-center" : "text-left"}>
      {eyebrow ? <p className="font-script text-[1.35rem] text-ink">{eyebrow}</p> : null}
      <h2
        className={`text-[1.7rem] leading-tight font-bold tracking-wide uppercase md:text-[2rem] ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      <span className={`mt-3 block h-[5px] w-12 bg-teal ${centered ? "mx-auto" : ""}`} />
    </div>
  );
}
