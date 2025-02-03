import { HTMLAttributes, memo, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type ChilrenAndAttributes<T> = PropsWithChildren<HTMLAttributes<T>>;

const defaultClasses =
  "bg-white rounded-md shadow-lg p-4 w-fit text-(--primary) flex items-center justify-center gap-2";

export const Button = memo(
  ({
    children,
    className,
    type = "button",
    ...props
  }: ChilrenAndAttributes<HTMLButtonElement> & {
    type?: "submit" | "reset" | "button";
  }) => {
    const classes = twMerge(
      defaultClasses,
      className?.split(" ").filter(Boolean).join(" "),
    );

    return (
      <button className={classes} type={type} {...props}>
        {children}
      </button>
    );
  },
);

export const ButtonIcon = memo(
  ({ children, className }: ChilrenAndAttributes<HTMLSpanElement>) => {
    const classes = twMerge(
      "inline-block aspect-square w-24 pointer-events-none",
      className,
    );
    return <span className={classes}>{children}</span>;
  },
);

export const ButtonText = memo(
  ({ children, className }: ChilrenAndAttributes<HTMLSpanElement>) => {
    const classes = twMerge(
      "flex items-center gap-x-1 justify-center pointer-events-none font-bold text-xl",
      className,
    );
    return <span className={classes}>{children}</span>;
  },
);
