export default async function getData(fetchApi) {
  try {
    const res = await fetch(fetchApi);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error('Error:', err);
  }
}
