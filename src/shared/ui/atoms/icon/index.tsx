import * as icon from "./ui";
import type { IconProps } from "./ui/index.type";

type Props = {
  name: keyof typeof icon;
} & IconProps;

export const Icon = ({ name, ...rest }: Props) => {
  const Component = icon[name];

  return <Component {...rest} />;
};
