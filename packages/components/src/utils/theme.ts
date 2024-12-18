/**
 * Theme utility functions
 */

export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
}

export const defaultTheme: ThemeColors = {
  primary: '#007bff',
  secondary: '#6c757d',
  accent: '#28a745',
  background: '#ffffff',
  text: '#212529',
};

export const applyTheme = (theme: Partial<ThemeColors> = {}): void => {
  const finalTheme = { ...defaultTheme, ...theme };
  Object.entries(finalTheme).forEach(([key, value]) => {
    document.documentElement.style.setProperty(`--color-${key}`, value);
  });
};