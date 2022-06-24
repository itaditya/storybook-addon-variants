import { addons, types } from "@storybook/addons";
import { ADDON_ID, TOOL_ID } from "../constants";
import { Tool } from "../Tool";

addons.register(ADDON_ID, () => {
  addons.add(TOOL_ID, {
    type: types.TOOL,
    title: "Variants",
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
    render: Tool,
  });
});
