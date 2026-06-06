export const SESSION_COOKIE = "alloninc_admin";
export const SESSION_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

async function computeToken(): Promise<string> {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) throw new Error("ADMIN_SESSION_SECRET env var is not set");
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode("alloninc:admin:v1"));
  return Array.from(new Uint8Array(sig))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function createSessionToken(): Promise<string> {
  return computeToken();
}

export async function verifySessionToken(token: string): Promise<boolean> {
  if (!token) return false;
  try {
    const expected = await computeToken();
    return token === expected;
  } catch {
    return false;
  }
}
