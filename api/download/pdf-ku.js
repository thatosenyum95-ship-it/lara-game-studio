export default async function handler(req, res) {
  const url = "https://github.com/thatosenyum95-ship-it/PDF-ku/releases/download/pdf-ku-latest/PDF-ku.apk";
  try {
    const upstream = await fetch(url, { cache: "no-store", redirect: "follow" });
    if (!upstream.ok) {
      return res.status(502).json({ error: "PDF-ku APK source unavailable" });
    }
    const type = upstream.headers.get("content-type") || "application/vnd.android.package-archive";
    const size = upstream.headers.get("content-length");
    res.setHeader("Content-Type", "application/vnd.android.package-archive");
    if (size) res.setHeader("Content-Length", size);
    res.setHeader("Content-Disposition", 'attachment; filename="PDF-ku.apk"');
    res.setHeader("Cache-Control", "public, max-age=300, s-maxage=300");
    const body = Buffer.from(await upstream.arrayBuffer());
    return res.status(200).send(body);
  } catch (e) {
    return res.status(502).json({ error: "Failed to retrieve PDF-ku APK" });
  }
}
