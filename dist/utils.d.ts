import { type IconName } from "./iconData";
import { IconType } from "./types";
/**
 * Get all available icon names
 */
export declare function getIconNames(): IconName[];
/**
 * Check if an icon exists
 */
export declare function hasIcon(name: string): name is IconName;
/**
 * Get available variants for an icon
 */
export declare function getIconVariants(name: IconName): IconType[];
/**
 * Get icons by category
 */
export declare function getIconsByCategory(category: string): IconName[];
/**
 * Get all categories
 */
export declare function getCategories(): string[];
/**
 * Search icons by name
 */
export declare function searchIcons(query: string): IconName[];
