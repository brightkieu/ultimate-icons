import React from "react";
import type { IconName } from "./iconData";
export type IconType = "regular" | "bold" | "color";
export interface IconProps {
    /** Name of the icon */
    name: IconName;
    /** Type/variant of the icon */
    type?: IconType;
    /** Color of the icon (applied to fill and stroke) */
    color?: string;
    /** Size in pixels (sets both width and height) */
    size?: number;
    /** Width in pixels (overrides size) */
    width?: number;
    /** Height in pixels (overrides size) */
    height?: number;
    /** Additional CSS class */
    className?: string;
    /** Additional inline styles */
    style?: React.CSSProperties;
    /** Click handler */
    onClick?: () => void;
}
export type IconComponentProps = IconProps;
export type { IconName };
