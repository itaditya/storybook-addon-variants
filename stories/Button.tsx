import React, { ReactNode } from "react";
import "./button.css";

export interface Props {
  /** Activating the button would lead to what type of result */
  result?: "neutral" | "positive" | "negative";
  /** Size of the button */
  size?: "small" | "normal" | "large";
  /** Show solid bg or transparent bg with outline button */
  outline?: boolean;
  /** Content of the button */
  children: ReactNode;
}

/**
 * UI component for user interaction
 */
export function Button(props: Props) {
  const { result, size, outline, ...restProps } = props;

  return (
    <button
      {...restProps}
      className="btn"
      data-result={result}
      data-size={size}
      data-outline={outline ? true : null}
    />
  );
}

Button.defaultProps = {
  result: "neutral",
  size: "normal",
  outline: false,
};
