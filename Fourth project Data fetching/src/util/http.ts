export async function get(url: string) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch data.");
  }
  const data = (await response.json()) as unknown;

  return data;
}

// GENERIC FUNKCIJAS VERSIJA

export async function got<T>(url: string) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch data.");
  }

  const data = (await response.json()) as unknown;
  return data as T;
}

// izsaucas šādi:

// const data = await get<RawDataBlogPost[]>(
//   'https://jsonplaceholder.typicode.com/posts'
// );
