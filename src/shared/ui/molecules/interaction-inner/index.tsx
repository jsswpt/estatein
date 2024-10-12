import cl from "clsx";
import { propsToClass } from "root/shared/lib/classList";

import st from "./styles.module.scss";

import { Divider } from "../../atoms";

export const interactionInnerAlignments = ["top", "center", "bottom"] as const;

const alignToClass = propsToClass(interactionInnerAlignments, "align");

export const interactionInnerSizes = ["xs", "sm", "md", "lg"] as const;

const sizeToClass = propsToClass(interactionInnerSizes, "size");

export type InteractionInnerProps = {
  slotStart?: JSX.Element;
  children?: JSX.Element;
  slotEnd?: JSX.Element;
  size: (typeof interactionInnerSizes)[number];
  align?: (typeof interactionInnerAlignments)[number];
  divide?: boolean;
  stretch?: boolean;
  disablePadding?: boolean;
};

export const InteractionInner = ({
  children,
  slotEnd,
  slotStart,
  align = "center",
  size,
  divide,
  stretch = true,
  disablePadding = false,
}: InteractionInnerProps) => (
  <div
    className={cl(
      st["interaction-inner"],
      st[alignToClass[align]],
      st[sizeToClass[size]],
      {
        [st.stretch]: stretch,
        [st["disable-padding"]]: disablePadding,
      },
    )}
  >
    {slotStart && (
      <div className={cl(st.slot, st["slot-start"])}>{slotStart}</div>
    )}
    {divide && (
      <div className={st.slot}>
        <div className={st.divider}>
          <Divider direction="vertical" inheritColor />
        </div>
      </div>
    )}
    <div className={cl(st.slot, st["slot-center"])}>{children}</div>
    {slotEnd && <div className={cl(st.slot, st["slot-end"])}>{slotEnd}</div>}
  </div>
);
