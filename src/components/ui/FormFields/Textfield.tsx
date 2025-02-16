import { FieldValues, useFormContext, Path } from "react-hook-form";

export function TextField<T extends FieldValues>({
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
    <label className="mb-2 flex flex-col">
      <span className="text-gray-700">{label}</span>
      <input {...register(name)} className="border rounded p-2 min-w-64" />
      {errors[name] && (
        <span className="text-red-500 text-sm">
          {errors[name]?.message as string}
        </span>
      )}
    </label>
  );
}
