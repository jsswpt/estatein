import { forwardRef } from "react";
import cl from "clsx";

import st from "./styles.module.scss";

import {
  Icon,
  type IconProps,
  Pressable,
  type PressableProps,
} from "../../atoms";
import { InteractionInner } from "../../molecules";

export type ButtonProps = ButtonUnion &
  Omit<PressableProps, "children" | "squared">;

type ButtonUnion =
  | {
      mainIcon?: IconProps;
      children: string;
      additionalIcon?: IconProps;
    }
  | {
      mainIcon: IconProps;
      children?: undefined;
      additionalIcon?: undefined;
    };

const sizeToClasses: Record<
  PressableProps["size"],
  {
    text: string;
    icon: string;
  }
> = {
  lg: {
    icon: st["icon_lg"],
    text: "action1",
  },
  md: {
    icon: st["icon_md"],
    text: "action1",
  },
  sm: {
    icon: st["icon_sm"],
    text: "action2",
  },
  xs: {
    icon: st["icon_xs"],
    text: "action3",
  },
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      color,
      fullWidth,
      radius,
      size,
      variant,
      mainIcon,
      additionalIcon,
      ...rest
    },
    ref,
  ) => {
    const iconClass = cl(st.icon, sizeToClasses[size].icon);

    const renderMainIcon = mainIcon ? (
      <div className={iconClass}>
        <Icon {...mainIcon} />
      </div>
    ) : null;

    const renderAdditionalIcon = additionalIcon ? (
      <div className={iconClass}>
        <Icon {...additionalIcon} />
      </div>
    ) : null;

    return (
      <Pressable
        color={color}
        fullWidth={fullWidth}
        radius={radius}
        size={size}
        squared={!children && !!mainIcon}
        variant={variant}
        ref={ref}
        {...rest}
      >
        <InteractionInner
          gap={size}
          align="center"
          slotStart={
            !!children && !!renderMainIcon ? renderMainIcon : undefined
          }
          slotEnd={
            !!children && !!renderAdditionalIcon
              ? renderAdditionalIcon
              : undefined
          }
        >
          {children ? (
            <span className={cl(st.text, sizeToClasses[size].text)}>
              {children}
            </span>
          ) : (
            renderMainIcon!
          )}
        </InteractionInner>
      </Pressable>
    );
  },
);
