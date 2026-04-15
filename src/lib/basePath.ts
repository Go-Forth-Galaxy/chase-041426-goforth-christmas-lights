const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const cacheBust = process.env.NEXT_PUBLIC_CACHE_BUST ?? "";
export const img = (path: string) => `${basePath}${path}?v=${cacheBust}`;
export default basePath;
