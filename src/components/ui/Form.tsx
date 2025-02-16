import {
  FormEventHandler,
  HTMLAttributes,
  memo,
  PropsWithChildren,
} from "react";
import { twMerge } from "tailwind-merge";

type Props = PropsWithChildren &
  HTMLAttributes<HTMLFormElement> & {
    handleSubmit: FormEventHandler<HTMLFormElement>;
  };

function Form({ handleSubmit, children, className, ...props }: Props) {
  const mergedClasses = twMerge(
    "bg-white w-fit h-fit p-10 rounded-md",
    className,
  );
  return (
    <form onSubmit={handleSubmit} className={mergedClasses} {...props}>
      {children}
    </form>
  );
}

export default memo(Form);
