import cl from "clsx";
import { propsToClass } from "root/shared/lib/classList";

import st from "./styles.module.scss";

export const directionToClass = propsToClass(
  ["horizontal", "vertical"],
  "direction",
);

type DividerDirection = keyof typeof directionToClass;

export type DividerProps = {
  direction?: DividerDirection;
  inheritColor?: boolean;
};

export const Divider = ({
  direction = "horizontal",
  inheritColor = false,
}: DividerProps) => (
  <hr
    className={cl(st.divider, st[directionToClass[direction]], {
      [st["inherit-color"]]: inheritColor,
    })}
  />
);
