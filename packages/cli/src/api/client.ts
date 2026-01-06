import { readToken } from "../auth/token-store";

const API_URL =
  process.env.FLAGBASE_API_URL ?? "http://localhost:3001/api/trpc";

export async function apiCall<T>(
  path: string,
  input: unknown,
  type: "query" | "mutation"
): Promise<T> {
  const token = readToken();
  if (!token) {
    throw new Error("Not authenticated. Run `flagbase login`.");
  }

  const headers = {
    authorization: `Bearer ${token}`,
  };

  if (type === "mutation") {
    const res = await fetch(`${API_URL}/${path}`, {
      method: "POST",
      headers: {
        ...headers,
        "content-type": "application/json",
      },
      body: JSON.stringify(input),
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(text || "API request failed");
    }

    const json = (await res.json()) as { result: { data: T } };
    return json.result.data;
  }

  // QUERY → GET
  const query = encodeURIComponent(JSON.stringify(input));
  const res = await fetch(`${API_URL}/${path}?input=${query}`, {
    method: "GET",
    headers,
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || "API request failed");
  }

  const json = (await res.json()) as { result: { data: T } };
  return json.result.data;
}
