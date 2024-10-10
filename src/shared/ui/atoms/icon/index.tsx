import * as icon from "./ui";
import type { IconProps as CommonIconProps } from "./ui/index.type";

export type IconProps = {
  name: keyof typeof icon;
} & CommonIconProps;

export const Icon = ({ name, ...rest }: IconProps) => {
  const Component = icon[name];

  return <Component {...rest} />;
};
