import { Args, ArgTypes } from "@storybook/addons";
// @ts-expect-error
import cartesian from "cartesian";

type ArgsMap = {
  [argName: string]: unknown;
};

type Combinations = Array<Args>;

export function getCombinations(argTypes: ArgTypes) {
  const argsMap: ArgsMap = {};

  // args order can change in stories, sorting ensures grid items don't jump between story previews.
  const sortedArgTypes = [...Object.entries(argTypes)].sort(
    ([firstName], [secondName]) => {
      return firstName.localeCompare(secondName);
    }
  );

  sortedArgTypes.forEach(([argName, argData]) => {
    // @ts-expect-error
    const { name: typeName, value } = argData.type;
    if (!["enum", "boolean"].includes(typeName)) {
      return;
    }

    const values = typeName === "boolean" ? [true, false] : value;
    argsMap[argName] = values;
  });

  const combinations = cartesian(argsMap) as Combinations;

  return combinations;
}
