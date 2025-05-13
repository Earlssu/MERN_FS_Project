/**
 * Utility function to merge Tailwind CSS class names.
 * - Uses clsx for conditional class name composition.
 * - Uses tailwind-merge to resolve Tailwind class conflicts.
 *
 * @example
 * cx('text-base', { 'text-red-500': isError }, 'p-4 p-2'); // → 'text-base text-red-500 p-2'
 *
 * @param {...ClassValue[]} inputs - Any number of class name values (strings, objects, arrays, etc.)
 * @returns {string} The merged class name string.
 */
import { twMerge } from 'tailwind-merge';
import clsx, { type ClassValue } from 'clsx';

export const cx = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
