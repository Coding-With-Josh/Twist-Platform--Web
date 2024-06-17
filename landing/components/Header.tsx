import NextLogo from "./NextLogo";
import SupabaseLogo from "./SupabaseLogo";
import ArrowRight from "./icons/arrowRight";
import Launch from "./icons/launch";

export default function Header() {
  return (
    <div className="flex flex-col gap-16 items-center my-10">
      <div className="flex gap-8 justify-center items-center">
        <span className="py-4 px-5 gap-3 rounded-lg flex justify-between items-center flex-1 h-6 bg-foreground/10">
          <div className="flex items-center justify-center gap-1.5">
            <Launch />
            <h2 className="mt-0.5 font-bold text-sm">Introducing TwistAI</h2>
          </div>
          <ArrowRight />
        </span>
      </div>
      <h1 className="sr-only">Supabase and Next.js Starter Template</h1>
      <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center">
        The fastest way to build apps with{" "}
        <a
          href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
          target="_blank"
          className="font-bold hover:underline"
          rel="noreferrer"
        >
          Supabase
        </a>{" "}
        and{" "}
        <a
          href="https://nextjs.org/"
          target="_blank"
          className="font-bold hover:underline"
          rel="noreferrer"
        >
          Next.js
        </a>
      </p>
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
    </div>
  );
}
