import { useQuery } from "@tanstack/react-query";
import { getCategoriesApi } from "../services/categoryService";

export default function useCategories() {
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategoriesApi,
  });

  const { categories: rawCategories = [] } = data || {};

  const categories = rawCategories.map(
    (item: { title: string; _id: number }) => ({
      label: item.title,
      value: item._id,
    }),
  );

  const transformedCategories = rawCategories.map(
    (item: { title: string; englishTitle: string }) => ({
      lable: item.title,
      value: item.englishTitle,
    }),
  );

  return { isLoading, categories, transformedCategories };
}
