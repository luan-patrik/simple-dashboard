import { ExtendProducts } from "@/types/products";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetStores = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await axios.get("https://fakestoreapi.com/products");

      return data as ExtendProducts[];
    },
  });
};
