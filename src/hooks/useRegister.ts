import { config } from "@/config";
import { IRegister } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const url = config.API_ROOT + "user/register/";

export default function useRegister() {
  const client = useQueryClient();
  const { mutate, isSuccess, isPending, isError } = useMutation(
    {
      mutationKey: ["register"],
      mutationFn: async (data: IRegister) => {
        try {
          const res = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
          return await res.json();
        } catch (e) {
          if (e instanceof Error) {
            console.log(e.message);
            throw e;
          }
        }
      },
    },
    client,
  );

  return { mutate, isSuccess, isPending, isError };
}
