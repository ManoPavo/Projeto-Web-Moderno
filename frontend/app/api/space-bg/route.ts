
export async function GET() {
  const chaveApi = process.env.PIXABAY_API_KEY;
  if (!chaveApi) {
    return Response.json(
      { error: "PIXABAY_API_KEY não configurada" },
      { status: 500 },
    );
  }

  const parametros = new URLSearchParams({
    key: chaveApi,
    q: "pixel art space",
    image_type: "illustration",
    orientation: "horizontal",
    per_page: "50",
    safesearch: "true",
  });
  const resposta = await fetch(`https://pixabay.com/api/?${parametros}`, {
    next: { revalidate: 3600 },
  });
  if (!resposta.ok) {
    return Response.json(
      { error: "Falha na API da Pixabay" },
      { status: 502 },
    );
  }

  const dados: { hits: { largeImageURL: string }[] } = await resposta.json();
  if (dados.hits.length === 0) {
    return Response.json({ error: "Nenhuma imagem encontrada" }, { status: 404 });
  }

  const indiceAleatorio = Math.floor(Math.random() * dados.hits.length);
  const imagemEscolhida = dados.hits[indiceAleatorio];

  return Response.json(
    { url: imagemEscolhida.largeImageURL },
    { headers: { "Cache-Control": "no-store" } },
  );
}
