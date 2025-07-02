import { z } from "zod";

export interface Download {
  label: string;
  icon: string;
}

export interface Specification {
  icon: string;
  label: string;
  value: string;
}

export interface Product {
  id: number;
  title: string;
  slug: string;
  description: string;
  imageUrl: string;
  category: string[];
  downloads: Download[];
  specifications: Specification[];
}
const DownloadSchema = z.object({
  label: z.string(),
  icon: z.string(),
});

const SpecificationSchema = z.object({
  icon: z.string(),
  label: z.string(),
  value: z.string(),
});

export const CategorySchema = z.array(z.string());
export const DownloadsSchema = z.array(DownloadSchema);
export const SpecificationsSchema = z.array(SpecificationSchema);

export function safeParseJSON<T>(
  jsonStr: string | null | undefined,
  schema: z.ZodType<T>,
  fallback: T,
): T {
  if (!jsonStr) return fallback;
  try {
    const parsed = JSON.parse(jsonStr);
    const result = schema.safeParse(parsed);
    if (result.success) {
      return result.data;
    } else {
      console.warn("Zod validation failed:", result.error.errors);
      return fallback;
    }
  } catch {
    return fallback;
  }
}
