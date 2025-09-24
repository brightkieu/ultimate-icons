import React from "react";
import { iconData } from "./iconData";
import { IconProps } from "./types";

export const Icon: React.FC<IconProps> = ({
  name,
  type = "regular",
  color = "currentColor",
  size,
  width,
  height,
  className,
  style,
  onClick,
}) => {
  // Determine dimensions
  const finalWidth = width ?? size ?? 24;
  const finalHeight = height ?? size ?? 24;

  // Get icon data
  const icon = iconData[name];

  if (!icon) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  // Get the variant (fallback to available variants if requested type doesn't exist)
  const variant =
    icon.variants[type] ||
    icon.variants.regular ||
    icon.variants.bold ||
    icon.variants.color ||
    Object.values(icon.variants)[0];

  if (!variant) {
    console.warn(`No variants found for icon "${name}"`);
    return null;
  }

  // Create style object with color applied
  const svgStyle: React.CSSProperties = {
    ...style,
    color,
  };

  // Process the SVG content to apply color
  let processedContent = variant.content;

  // For regular and bold types, replace fill and stroke colors
  if (type !== "color") {
    processedContent = processedContent
      .replace(/fill="[^"]*"/g, `fill="${color}"`)
      .replace(/stroke="[^"]*"/g, `stroke="${color}"`);
  }

  return (
    <svg
      width={finalWidth}
      height={finalHeight}
      viewBox={variant.viewBox}
      style={svgStyle}
      className={className}
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      dangerouslySetInnerHTML={{ __html: processedContent }}
    />
  );
};
