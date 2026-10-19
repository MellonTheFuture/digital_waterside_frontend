const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";

export async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
    const response = await fetch(new URL(path, apiUrl), {
        ...init,
        headers: {
            "Content-Type": "application/json",
            ...init?.headers,
        },
    });

    if (!response.ok) {
        throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }

    return response.json() as Promise<T>;
}
