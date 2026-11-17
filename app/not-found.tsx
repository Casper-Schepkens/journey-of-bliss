import Link from "next/link";

export default function NotFound() {
  return (
    <div className="site-wrap py-20 text-center">
      <p className="font-script text-2xl text-teal">Lost the path?</p>
      <h1 className="mt-2 text-4xl font-bold">Page not found</h1>
      <p className="mt-4 text-muted">That page is not on this site. The tours are still here.</p>
      <Link
        href="/"
        className="mt-6 inline-flex bg-teal px-6 py-3 text-sm font-bold tracking-wide text-white uppercase hover:bg-teal-deep"
      >
        Back to home
      </Link>
    </div>
  );
}
