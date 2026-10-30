
export async function GET() {
  const key = process.env.PIXABAY_API_KEY;
  if (!key) {
    return Response.json({ error: "PIXABAY_API_KEY não configurada" }, { status: 500 });
  }

  // Passo 1: busca ilustrações horizontais de "pixel art space" na API da Pixabay.
  const params = new URLSearchParams({
    key,
    q: "pixel art space",
    image_type: "illustration",
    orientation: "horizontal",
    per_page: "50",
    safesearch: "true",
  });
  const res = await fetch(`https://pixabay.com/api/?${params}`, {
    next: { revalidate: 3600 }, // cache de 1h para economizar o limite da API
  });
  if (!res.ok) {
    return Response.json({ error: "Falha na API da Pixabay" }, { status: 502 });
  }

  // Passo 2: sorteia uma das imagens retornadas e devolve só a URL.
  const data: { hits: { largeImageURL: string }[] } = await res.json();
  if (!data.hits.length) {
    return Response.json({ error: "Nenhuma imagem encontrada" }, { status: 404 });
  }
  const pick = data.hits[Math.floor(Math.random() * data.hits.length)];
  return Response.json({ url: pick.largeImageURL }, { headers: { "Cache-Control": "no-store" } });
}
