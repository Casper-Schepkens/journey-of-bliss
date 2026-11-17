import Image from "next/image";

export function PageBanner({
  title,
  image,
  alt,
  eyebrow,
}: {
  title: string;
  image: string;
  alt: string;
  eyebrow?: string;
}) {
  return (
    <section className="relative flex min-h-[220px] items-center justify-center overflow-hidden bg-navy text-white md:min-h-[280px]">
      <Image src={image} alt={alt} fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-black/45" />
      <div className="relative z-10 px-4 py-12 text-center">
        {eyebrow ? <p className="font-script text-2xl text-gold">{eyebrow}</p> : null}
        <h1 className="text-3xl font-bold tracking-wide uppercase md:text-5xl">{title}</h1>
        <span className="mx-auto mt-4 block h-[5px] w-12 bg-teal" />
      </div>
    </section>
  );
}
