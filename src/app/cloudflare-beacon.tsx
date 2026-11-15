// Cloudflare Web Analytics beacon (official JS snippet).
// Rendered only when NEXT_PUBLIC_CF_BEACON_TOKEN has a non-blank value at build time.
// The literal `process.env.NEXT_PUBLIC_CF_BEACON_TOKEN` access is required so Next inlines it.
// React escapes the attribute value, so the JSON is safe for any token.
export function CloudflareBeacon() {
  const token = process.env.NEXT_PUBLIC_CF_BEACON_TOKEN?.trim() ?? "";
  if (!token) return null;
  return (
    <script
      defer
      src="https://static.cloudflareinsights.com/beacon.min.js"
      data-cf-beacon={JSON.stringify({ token })}
    />
  );
}
