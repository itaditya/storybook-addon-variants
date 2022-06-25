import React, { ReactNode } from "react";
import "./button.css";

export interface Props {
  result?: "neutral" | "positive" | "negative";
  size?: "small" | "normal" | "large";
  outline?: boolean;
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
