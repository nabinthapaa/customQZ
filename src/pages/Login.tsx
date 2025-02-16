import Navbar from "@/components/shared/Navbar";
import Form from "@/components/ui/Form";
import { PasswordField } from "@/components/ui/FormFields/PasswordField";
import { TextField } from "@/components/ui/FormFields/Textfield";
import Spinner from "@/components/ui/Spinner";
import useLogin from "@/hooks/useLogin";
import { LoginSchema } from "@/schema";
import { ILogin } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { Link } from "react-router";

export default function Login() {
  const { login, isPending: isLoading } = useLogin();
  const { handleSubmit, ...formValues } = useForm<ILogin>({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: zodResolver(LoginSchema),
  });

  const handleLogin = (data: ILogin) => {
    console.log("login", data);
    login(data);
  };

  return (
    <>
      <Navbar />
      <div className="flex-1 flex justify-center items-center bg-gray-100">
        <Form
          handleSubmit={handleSubmit((data: ILogin) => {
            handleLogin(data);
          })}
          className="bg-white p-6 rounded shadow-md w-full max-w-md"
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
          <FormProvider handleSubmit={handleSubmit} {...formValues}>
            <TextField<ILogin> name="username" label="Username" />
            <PasswordField<ILogin> name="password" label="Password" />
            <button
              type="submit"
              className="bg-(--primary) w-full text-white p-2 rounded mt-4 flex items-center justify-center"
            >
              {isLoading ? <Spinner /> : "Login"}
            </button>
            <div className="flex justify-between mt-4">
              <Link to="/register" className="text-(--primary)">
                Don't have an account? Register
              </Link>
              <Link to="/forgot-password" className="text-(--primary)">
                Forgot Password?
              </Link>
            </div>
          </FormProvider>
        </Form>
      </div>
    </>
  );
}
