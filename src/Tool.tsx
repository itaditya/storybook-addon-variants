import React, { useCallback } from "react";
import { useGlobals } from "@storybook/api";
import { Icons, IconButton } from "@storybook/components";
import { TOOL_ID } from "./constants";

export const Tool = () => {
  const [{ variantsAddon }, updateGlobals] = useGlobals();

  const handleToggle = useCallback(() => {
    updateGlobals({
      variantsAddon: variantsAddon ? undefined : true,
    });
  }, [variantsAddon]);

  const title = `${variantsAddon ? "Hide" : "Show"} Variants`;

  return (
    <IconButton
      key={TOOL_ID}
      active={variantsAddon}
      title={title}
      onClick={handleToggle}
    >
      <Icons icon="component" />
    </IconButton>
  );
};
