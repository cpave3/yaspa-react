import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";

import Button from "../components/Button";
import colors from "../constants/colors";

export default () => {
  const stories = storiesOf("Buttons", module);

  stories.addDecorator(withKnobs);

  stories.add("Standard", () => {
    const label = "Colors";
    const options = {
      Red: colors.alazarin,
      Blue: colors.peterRiver,
      Green: colors.emerald,
    };
    const defaultValue = colors.peterRiver;

    const color = select(label, options, defaultValue);
    return (
      <Button
        text={text("Text", "Button Text")}
        fullWidth={boolean("Full Width", false)}
        color={color}
      />
    );
  });
};
