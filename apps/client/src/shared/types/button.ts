export const widthMap = {
  sm: 'w-24',
  md: 'w-32',
  lg: 'w-48',
  xl: 'w-64',
} as const;

export type ButtonSize = keyof typeof widthMap;
