export interface CategoryItem {
  title: string;
  imageUrl: string;
  linkUrl: string;
  id: number;
  size?: string;
}

export type Categories = CategoryItem[];
