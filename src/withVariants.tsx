import React from "react";
import type { DecoratorFunction } from "@storybook/addons";
import { styled } from "@storybook/theming";
import { getCombinations } from "./getCombinations";

const Grid = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  align-items: center;
`;

export const withVariants: DecoratorFunction = (StoryFn, context) => {
  if (!context.globals.variantsAddon) {
    return StoryFn();
  }

  const combinations = getCombinations(context.argTypes);

  return (
    <Grid>
      {combinations.map((combination, index) => (
        <li key={index} title={JSON.stringify(combination, null, 2)}>
          {StoryFn({
            args: {
              ...context.args,
              ...combination,
            },
          })}
        </li>
      ))}
    </Grid>
  );
};
