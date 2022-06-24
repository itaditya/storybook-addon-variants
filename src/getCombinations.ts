import { ArgTypes } from "@storybook/addons";
import cartesian from "cartesian";

export function getCombinations(argTypes: ArgTypes) {
  const args = {};
  Object.entries(argTypes).map(([argName, argData]) => {
    const { name: typeName, value } = argData.type;
    if (!["enum", "boolean"].includes(typeName)) {
      return;
    }

    const values = typeName === "boolean" ? [true, false] : value;
    args[argName] = values;
  });

  const combinations = cartesian(args);

  return combinations;
}
