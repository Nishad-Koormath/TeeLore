import { Product } from "@/types/types";

export const fetch_products = async (): Promise<Product[]> => {
  const response = await fetch("https://fakestoreapi.com/products");
  return response.json();
};

export const fetch_products_by_id = async (id: string) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  return response.json();
}

export const fetch_products_by_category = async (category: string) => {
  const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
  return response.json();
}