import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url) {
  throw new Error(
    "Missing env var: NEXT_PUBLIC_SUPABASE_URL — restart the dev server after adding .env.local"
  );
}
if (!serviceKey) {
  throw new Error(
    "Missing env var: SUPABASE_SERVICE_ROLE_KEY — restart the dev server after adding .env.local"
  );
}

// Server-only client — service role key bypasses RLS, never sent to the browser.
export const supabase = createClient(url, serviceKey, {
  auth: { persistSession: false },
  global: {
    fetch: (input, init) =>
      fetch(input, { ...init, cache: "no-store" }),
  },
});
