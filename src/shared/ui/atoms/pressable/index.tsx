import { type ButtonHTMLAttributes, forwardRef } from "react";
import cl from "clsx";
import { propsToClass } from "root/shared/lib/classList";

import st from "./styles.module.scss";

export const colorToClass = propsToClass(
  ["primary", "warning", "error", "success", "inherit"],
  "color",
);

type PressableColor = keyof typeof colorToClass;

export const variantToClass = propsToClass(
  ["contained", "outlined", "text", "ghost"],
  "variant",
);

type PressableVariant = keyof typeof variantToClass;

export const sizeToClass = propsToClass(["xs", "sm", "md", "lg"], "size");

type PressableSize = keyof typeof sizeToClass;

export const radiusToClass = propsToClass(
  ["none", "sm", "md", "lg", "full"],
  "radius",
);

type PressableRadius = keyof typeof radiusToClass;

export type PressableProps = {
  color: PressableColor;
  variant: PressableVariant;
  size: PressableSize;
  radius: PressableRadius;
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
