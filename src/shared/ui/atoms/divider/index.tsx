import cl from "clsx";
import { propsToClass } from "root/shared/lib/classList";

import st from "./styles.module.scss";

export const dividerDirections = ["horizontal", "vertical"] as const;

const directionToClass = propsToClass(dividerDirections, "direction");

export type DividerProps = {
  direction?: (typeof dividerDirections)[number];
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
