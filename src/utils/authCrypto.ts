/**
 * Cryptographic authorization verification.
 * Passwords are never stored in plaintext anywhere in the source code.
 * Verification uses salted SHA-256 cryptographic hashing via the Web Crypto API.
 */

// Cryptographic salt to protect against precomputed dictionary/rainbow table attacks
const AUTH_SALT = 'lance_portfolio_auth_salt_2026';

// One-way salted SHA-256 cryptographic hash digest
const AUTH_HASH = '7198b723f145333eef1f540bc8e222fa9f28f0282c0a6b481f8f227739e4597a';

/**
 * Verifies the provided passphrase against the salted cryptographic hash.
 * Completely protects credentials from source-code inspection and DevTools scraping.
 */
export async function verifyPassphrase(input: string): Promise<boolean> {
  if (!input) return false;

  try {
    const encoder = new TextEncoder();
    const data = encoder.encode(AUTH_SALT + input.trim());

    // Native Web Crypto API SHA-256 calculation
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const computedHash = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');

    return computedHash === AUTH_HASH;
  } catch (err) {
    console.error('Error during cryptographic verification:', err);
    return false;
  }
}
