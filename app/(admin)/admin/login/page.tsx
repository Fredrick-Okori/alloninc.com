import { loginAction } from "./actions";

type Props = { searchParams: Promise<{ error?: string }> };

export default async function LoginPage({ searchParams }: Props) {
  const { error } = await searchParams;

  return (
    <div className="min-h-screen bg-navy flex items-center justify-center px-6">
      <div className="w-full max-w-[360px]">
        {/* Brand */}
        <div className="mb-12">
          <p className="text-[0.6rem] tracking-[0.32em] uppercase text-amber mb-4">
            Alloninc
          </p>
          <h1
            className="font-serif font-[300] tracking-[-0.02em] text-linen leading-none"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.4rem)" }}
          >
            Admin Access
          </h1>
          <p className="text-[0.8rem] text-linen/35 mt-3 leading-relaxed">
            Sign in to manage site content.
          </p>
        </div>

        {/* Form */}
        <form action={loginAction} className="flex flex-col gap-5">
          <div>
            <label className="block text-[0.62rem] tracking-[0.2em] uppercase text-linen/40 mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              autoFocus
              autoComplete="current-password"
              className="w-full bg-navy border border-linen/[0.12] text-linen/80 px-4 py-3.5 focus:outline-none focus:border-amber/50 transition-colors placeholder:text-linen/20 text-[0.9rem]"
              placeholder="Enter password"
            />
          </div>

          {error && (
            <p className="text-[0.75rem] text-red-400/80 -mt-1">
              Incorrect password. Please try again.
            </p>
          )}

          <button
            type="submit"
            className="bg-amber text-navy text-[0.72rem] tracking-[0.2em] uppercase px-6 py-4 hover:bg-amber/90 active:bg-amber/80 transition-colors font-[400]"
          >
            Sign In →
          </button>
        </form>

        {/* Footer */}
        <div className="mt-10 pt-8 border-t border-linen/[0.06]">
          <a
            href="/"
            className="text-[0.62rem] tracking-[0.18em] uppercase text-linen/25 hover:text-linen/55 transition-colors no-underline"
          >
            ← Back to site
          </a>
        </div>
      </div>
    </div>
  );
}
