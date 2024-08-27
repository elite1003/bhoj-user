import { useGetCartQuery } from "./api/apiSlice";
import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";
const Cart = () => {
  const { data, isError, isFetching, isSuccess, status, error } =
    useGetCartQuery();
  return <div>{data?.map((c) => c)}</div>;
};

export default Cart;
