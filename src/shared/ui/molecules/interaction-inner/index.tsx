import cl from "clsx";
import { propsToClass } from "root/shared/lib/classList";

import st from "./styles.module.scss";

import { Divider } from "../../atoms";

export const interactionInnerGaps = ["xs", "sm", "md", "lg"];

const gapToClass = propsToClass(interactionInnerGaps, "gap");

export const interactionInnerAlignments = ["top", "center", "bottom"];

const alignToClass = propsToClass(interactionInnerAlignments, "align");

export type InteractionInnerProps = {
  slotStart?: JSX.Element;
  children?: JSX.Element;
  slotEnd?: JSX.Element;
  gap: (typeof interactionInnerGaps)[number];
  align?: (typeof interactionInnerAlignments)[number];
  divide?: boolean;
};

export const InteractionInner = ({
  children,
  slotEnd,
  slotStart,
  gap,
  align = "center",
  divide,
}: InteractionInnerProps) => (
  <div
    className={cl(
      st["interaction-inner"],
      st[gapToClass[gap]],
      st[alignToClass[align]],
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
