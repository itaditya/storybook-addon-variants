import React from "react";
import type { DecoratorFunction } from "@storybook/addons";
import { getCombinations } from "./getCombinations";

export const withVariants: DecoratorFunction = (StoryFn, context) => {
  if (!context.globals.variantsAddon) {
    return StoryFn();
  }

  const combinations = getCombinations(context.argTypes);

  return (
    <ul>
      {combinations.map((combination, index) => (
        <li key={index}>
          {StoryFn({
            args: {
              ...context.args,
              ...combination,
            },
          })}
        </li>
      ))}
    </ul>
  );
};
