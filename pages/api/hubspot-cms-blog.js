export default async function handler(req, res) {
  const articles = [
    {
      id: 1,
      title: "Article 1",
      slug: "article-1",
      summary: "Article 1 summary",
      body: "Article 1 body",
    }
  ];
  res.status(200).json(articles);
}