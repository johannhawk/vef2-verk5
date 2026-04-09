async function getNewsItems() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:1337";
  const path = "/api/news-items";

  //http://localhost:1337/api/news-items //eina sem virkar?

  const url = new URL(path, baseUrl);

  const res = await fetch(url);

  if (!res.ok) throw new Error("Failed to fetch");

  const data = await res.json();
  console.log(data);

  return data;
}

export default async function NewsItems() {
  const NewsItems = await getNewsItems();
  console.log(NewsItems);

  return (
    <div>
      <h1>News Items</h1>
      <pre>{JSON.stringify(NewsItems, null, 2)} </pre>
    </div>
  );
}