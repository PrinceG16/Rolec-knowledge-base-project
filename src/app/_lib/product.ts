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
