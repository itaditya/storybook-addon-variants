import { Args, ArgTypes } from "@storybook/addons";
import cartesian from "cartesian";

export function getCombinations(argTypes: ArgTypes, args: Args) {
  const argsMap: Args = {};

  // args order can change in stories, sorting ensures grid items don't jump between story previews.
  const sortedArgTypes = [...Object.entries(argTypes)].sort(
    ([firstName], [secondName]) => {
      return firstName.localeCompare(secondName);
    }
  );

  sortedArgTypes.forEach(([argName, argData]) => {
    // If args are provided, use them.
    if (args[argName] !== undefined) {
      argsMap[argName] = args[argName];
      return;
    }

    if (!argData.type) {
      return;
    }

    // @ts-expect-error
    const { name: typeName, value } = argData.type;
    if (!["enum", "boolean"].includes(typeName)) {
      return;
    }

    if (typeName === "boolean") {
      argsMap[argName] = [true, false];
      return;
    }

    argsMap[argName] = value;
  });

  const combinations = cartesian(argsMap);

  return combinations;
}
