import { FieldValues, Path, useFormContext } from "react-hook-form";

export function PasswordField<T extends FieldValues>({
  name,
  label,
}: {
  name: Path<T>;
  label: string;
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext<T>();

  return (
    <label className="flex flex-col mb-2">
      <span className="text-gray-700">{label}</span>
      <input
        type="password"
        {...register(name)}
        className="border rounded p-2 min-w-64"
      />
      {errors[name] && (
        <span className="text-red-500 text-sm">
          {errors[name]?.message as string}
        </span>
      )}
    </label>
  );
}
