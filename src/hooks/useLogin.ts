import { config } from "@/config";
import { ILogin } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const url = config.API_ROOT + "user/login/";

export default function useLogin() {
  const client = useQueryClient();
  const { mutate, isSuccess, isPending, isError } = useMutation(
    {
      mutationKey: ["login"],
      mutationFn: async (data: ILogin) => {
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
      onError(error: Error) {
        alert(error.message);
      },
      onSuccess(data) {
        console.log(data);
      },
    },
    client,
  );

  return { login: mutate, isSuccess, isPending, isError };
}
