/** Prefija las rutas de /public con el basePath (necesario para next/image y fondos CSS). */
export const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
