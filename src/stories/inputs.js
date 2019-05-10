import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import InputField from "../components/InputField";

export default () => {
  const stories = storiesOf("Inputs", module);

  stories.addDecorator(withKnobs);

  stories.add("Standard", () => {
    return (
      <InputField
        darkMode={boolean('Dark Mode', false)}
        fullWidth={boolean('Full Width', false)}
        placeholder={text('Placeholder', 'Enter some text…')}
        label={text('Label', 'Input Field Name')}
        value={text("Value", "")}
      />
    );
  });
};
