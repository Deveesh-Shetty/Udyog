import { clsx, ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// Concatenating classNames
// twMerge to remove conflicting tailwind class
// clsx to do conditional operations on classNames
export function cn(...className: ClassValue[]) {
  return twMerge(clsx(className))
}
