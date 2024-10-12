import { forwardRef, type HtmlHTMLAttributes } from "react";
import cl from "clsx";
import { propsToClass } from "root/shared/lib/classList";

import st from "./styles.module.scss";

export const inputBaseRadiuses = ["none", "sm", "md", "lg"] as const;

const radiusToClass = propsToClass(inputBaseRadiuses, "radius");

export type InputBaseProps = {
  radius: (typeof inputBaseRadiuses)[number];
  children: JSX.Element;
  disabled?: boolean;
} & Omit<HtmlHTMLAttributes<HTMLDivElement>, "aria-disabled" | "className">;

export const InputBase = forwardRef<HTMLDivElement, InputBaseProps>(
  ({ children, radius, disabled = false, ...rest }, ref) => (
    <div
      {...rest}
      ref={ref}
      aria-disabled={disabled}
      className={cl(st["input-base"], st[radiusToClass[radius]])}
    >
      {children}
    </div>
  ),
);
