import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";

import Banner from "../components/Banner";
import ResultBanner from "../components/ResultBanner";

export default () => {
  const stories = storiesOf("Banners", module);

  stories.addDecorator(withKnobs);

  stories.add("Standard", () => {
    return (
      <Banner
        fullSize={boolean('Full Size', true)}
        topic={text('Topic', 'Enter your issue here')}
        header={text('Header', 'Round 1')}
      />
    );
  });

  stories.add("Results", () => {

    const results = [
      {
        label: 'Min',
        value: 5,
      },
      {
        label: 'Min',
        value: 5,
      },
    ];

    return (
      <ResultBanner
        fullSize={boolean('Full Size', true)}
        results={results}
      />
    );
  });

};
