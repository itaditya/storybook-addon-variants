import React, { useMemo } from "react";
import { DecoratorFunction } from "@storybook/addons";
import { styled } from "@storybook/theming";
import { getCombinations } from "./getCombinations";

const Grid = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  align-items: center;
`;

type DecFn = DecoratorFunction<JSX.Element>;
type StoryParams = Parameters<DecFn>;
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

  if (combinations.length === 0) {
    return StoryFn();
  }

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

export const withVariants: DecFn = (StoryFn, context) => {
  if (!context.globals.variantsAddon) {
    return StoryFn();
  }

  return <CombinationGrid StoryFn={StoryFn} context={context} />;
};
