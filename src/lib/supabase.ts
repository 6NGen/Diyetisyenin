import "server-only";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Yalnızca sunucu istemcisi.
 * `server-only` importu sayesinde bu modül bir istemci bileşeninden
 * import edilmeye kalkışılırsa derleme hata verir; service role anahtarı
 * hiçbir koşulda istemci paketine giremez.
 */
let istemci: SupabaseClient | null = null;

export function supabaseSunucu(): SupabaseClient | null {
  if (istemci) return istemci;

  const url = process.env.SUPABASE_URL;
  const anahtar = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !anahtar) return null;

  istemci = createClient(url, anahtar, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  return istemci;
}
