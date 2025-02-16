import Navbar from "@/components/shared/Navbar";
import Form from "@/components/ui/Form";
import { PasswordField } from "@/components/ui/FormFields/PasswordField";
import { TextField } from "@/components/ui/FormFields/Textfield";
import Spinner from "@/components/ui/Spinner";
import useRegister from "@/hooks/useRegister";
import { RegisterSchema } from "@/schema/authentication";
import { IRegister } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { Link } from "react-router";

export default function RegisterPage() {
  const { mutate: register, isPending: isLoading } = useRegister();
  const { handleSubmit, ...formValues } = useForm<IRegister>({
    defaultValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(RegisterSchema),
  });

  const handleRegister = async (data: IRegister) => {
    register(data);
  };

  return (
    <>
      <Navbar />
      <div className="flex-1 flex justify-center items-center bg-gray-100">
        <Form
          handleSubmit={handleSubmit((data: IRegister) => {
            handleRegister(data);
          })}
          className="bg-white p-6 rounded shadow-md w-full max-w-md"
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
          <FormProvider handleSubmit={handleSubmit} {...formValues}>
            <TextField name="email" label="Email" />
            <TextField name="username" label="Username" />
            <PasswordField name="password" label="Password" />
            <PasswordField name="confirmPassword" label="Confirm Password" />
            <button
              type="submit"
              className="bg-(--primary) w-full text-white p-2 rounded mt-4 flex items-center justify-center"
            >
              {isLoading ? <Spinner /> : "Register"}
            </button>
            <div className="flex justify-between mt-4">
              <Link to="/login" className="text-(--primary)">
                Already have an account? Login
              </Link>
            </div>
          </FormProvider>
        </Form>
      </div>
    </>
  );
}
