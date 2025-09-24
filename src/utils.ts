import { iconData, iconNames, type IconName } from "./iconData";
import { IconType } from "./types";

/**
 * Get all available icon names
 */
export function getIconNames(): IconName[] {
  return iconNames as IconName[];
}

/**
 * Check if an icon exists
 */
export function hasIcon(name: string): name is IconName {
  return name in iconData;
}

/**
 * Get available variants for an icon
 */
export function getIconVariants(name: IconName): IconType[] {
  const icon = iconData[name];
  if (!icon) return [];

  return Object.keys(icon.variants) as IconType[];
}

/**
 * Get icons by category
 */
export function getIconsByCategory(category: string): IconName[] {
  return iconNames.filter(
    (name) => iconData[name].category === category
  ) as IconName[];
}

/**
 * Get all categories
 */
export function getCategories(): string[] {
  const categories = new Set<string>();
  iconNames.forEach((name) => {
    categories.add(iconData[name].category);
  });
  return Array.from(categories).sort();
}

/**
 * Search icons by name
 */
export function searchIcons(query: string): IconName[] {
  const lowerQuery = query.toLowerCase();
  return iconNames.filter(
    (name) =>
      name.toLowerCase().includes(lowerQuery) ||
      iconData[name].category.toLowerCase().includes(lowerQuery)
  ) as IconName[];
}
