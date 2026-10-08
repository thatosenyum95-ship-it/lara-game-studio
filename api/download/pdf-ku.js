export default async function handler(req, res) {
  const SUPABASE_URL = "https://atswttlqjycruzxuohfw.supabase.co";
  const SUPABASE_KEY = "sb_publishable_oggTNyIqnoaMtUhk-2PxUQ_9V_CHTWj";

  try {
    const releaseUrl = SUPABASE_URL +
      "/rest/v1/app_releases?app_id=eq.pdf-ku&is_current=eq.true&select=apk_path,apk_size_bytes,version&limit=1";

    const releaseResponse = await fetch(releaseUrl, {
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: "Bearer " + SUPABASE_KEY
      },
      cache: "no-store"
    });

    if (!releaseResponse.ok) {
      return res.status(502).json({ error: "Lara Studio release data unavailable" });
    }

    const releases = await releaseResponse.json();
    const release = releases?.[0];

    if (!release?.apk_path) {
      return res.status(404).json({ error: "No current PDF-ku APK release" });
    }

    const storagePath = String(release.apk_path)
      .split("/")
      .map(encodeURIComponent)
      .join("/");

    const apkUrl = SUPABASE_URL +
      "/storage/v1/object/public/lara-apks/" + storagePath;

    const upstream = await fetch(apkUrl, {
      cache: "no-store",
      redirect: "follow"
    });

    if (!upstream.ok) {
      return res.status(502).json({ error: "PDF-ku APK is unavailable in Lara Studio storage" });
    }

    const size = upstream.headers.get("content-length") || release.apk_size_bytes;

    res.setHeader("Content-Type", "application/vnd.android.package-archive");
    if (size) res.setHeader("Content-Length", String(size));
    res.setHeader("Content-Disposition", 'attachment; filename="PDF-ku.apk"');
    res.setHeader("Cache-Control", "public, max-age=300, s-maxage=300");

    const body = Buffer.from(await upstream.arrayBuffer());
    return res.status(200).send(body);
  } catch (e) {
    return res.status(502).json({ error: "Failed to retrieve PDF-ku APK from Lara Studio storage" });
  }
}
