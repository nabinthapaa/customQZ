import { config } from "@/config";
import { useAuth } from "@/context/auth";
import { ILogin } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { redirect } from "react-router";

const url = config.API_ROOT + "user/login/";

export default function useLogin() {
  const client = useQueryClient();
  const { dispatch } = useAuth();
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
        dispatch({ type: "ADD_USER", payload: data });
        redirect("/");
      },
    },
    client,
  );

  return { login: mutate, isSuccess, isPending, isError };
}
