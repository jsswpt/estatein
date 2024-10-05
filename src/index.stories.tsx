import type { Meta, StoryObj } from "@storybook/react";

const TypographyComponent = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      color: "var(--CONTRAST1)",
    }}
  >
    <hr />
    <h1 className="h1">h1</h1>
    <h2 className="h2">h2</h2>
    <h3 className="h3">h3</h3>
    <h4 className="h4">h4</h4>
    <h5 className="h5">h5</h5>
    <h6 className="h6">h6</h6>
    <hr />
    <p className="subtitle1">subtitle1</p>
    <p className="subtitle2">subtitle2</p>
    <hr />
    <p className="body1">body1</p>
    <p className="body2">body2</p>
    <hr />
    <p className="action1">action1</p>
    <p className="action2">action2</p>
    <p className="action3">action3</p>
  </div>
);

const meta = {
  title: "Base",
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta;

type Story = StoryObj<typeof meta>;

export const Typography: Story = {
  args: {},
  render: TypographyComponent,
};

export default meta;
