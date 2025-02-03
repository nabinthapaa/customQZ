import { ChangeEvent, HTMLAttributes, memo, useCallback } from "react";

export default memo(function Switch({
  label,
  checked,
  onChange,
  id,
  ...props
}: HTMLAttributes<HTMLInputElement> & {
  label: string;
  checked: boolean;
  id: string;
  onChange: (e: boolean) => void;
}) {
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => onChange(e.target.checked),
    [onChange],
  );

  return (
    <label htmlFor={id} className="flex items-center space-x-2 cursor-pointer">
      <span className="text-gray-700 text-sm">{label}</span>
      <input
        {...props}
        id={id}
        type="checkbox"
        defaultChecked={checked}
        onChange={handleChange}
        className={`hidden`}
      />
      <div
        className={`pl-1 pr-2 py-1 w-10 rounded-full  ${checked ? "bg-green-500" : "bg-gray-400"}`}
      >
        <div
          className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${checked ? "translate-x-4" : ""}`}
        ></div>
      </div>
    </label>
  );
});
