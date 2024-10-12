import { type ButtonHTMLAttributes, forwardRef } from "react";
import cl from "clsx";
import { propsToClass } from "root/shared/lib/classList";

import st from "./styles.module.scss";

export const pressableColors = [
  "primary",
  "warning",
  "error",
  "success",
  "inherit",
] as const;

const colorToClass = propsToClass(pressableColors, "color");

export const pressableVariants = [
  "contained",
  "outlined",
  "text",
  "ghost",
] as const;

const variantToClass = propsToClass(pressableVariants, "variant");

export const pressableSizes = ["xs", "sm", "md", "lg"] as const;

const sizeToClass = propsToClass(pressableSizes, "size");

export const pressableRadiuses = ["none", "sm", "md", "lg", "full"] as const;

const radiusToClass = propsToClass(pressableRadiuses, "radius");

export type PressableProps = {
  color: (typeof pressableColors)[number];
  variant: (typeof pressableVariants)[number];
  size: (typeof pressableSizes)[number];
  radius: (typeof pressableRadiuses)[number];
  squared: boolean;
  fullWidth: boolean;
  children: JSX.Element;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

export const Pressable = forwardRef<HTMLButtonElement, PressableProps>(
  ({ color, variant, size, radius, squared, fullWidth, ...rest }, ref) => (
    <button
      ref={ref}
      {...rest}
      className={cl(
        st.pressable,
        st[colorToClass[color]],
        st[variantToClass[variant]],
        st[sizeToClass[size]],
        st[radiusToClass[radius]],
        {
          [st.squared]: squared,
          [st.fullWidth]: !squared && fullWidth,
        },
      )}
    />
  ),
);
