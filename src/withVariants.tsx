import React, { useMemo } from "react";
import { DecoratorFunction } from "@storybook/addons";
import { styled } from "@storybook/theming";
import { getCombinations } from "./getCombinations";

const Grid = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  align-items: center;
`;

type StoryParams = Parameters<DecoratorFunction>;
type StoryFnType = StoryParams[0];
type ContextType = StoryParams[1];

interface CombinationGridProps {
  StoryFn: StoryFnType;
  context: ContextType;
}

function CombinationGrid({ StoryFn, context }: CombinationGridProps) {
  const combinations = useMemo(
    () => getCombinations(context.argTypes),
    [context.argTypes]
  );

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
}

export const withVariants: DecoratorFunction = (StoryFn, context) => {
  if (!context.globals.variantsAddon) {
    return StoryFn();
  }

  return <CombinationGrid StoryFn={StoryFn} context={context} />;
};
