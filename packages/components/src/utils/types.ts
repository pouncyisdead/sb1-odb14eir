/**
 * Shared type definitions
 */

export type Size = 'small' | 'medium' | 'large';
export type Variant = 'primary' | 'secondary' | 'accent';
export type Status = 'idle' | 'loading' | 'success' | 'error';

export interface ComponentBaseProps {
  class?: string;
  id?: string;
  size?: Size;
  variant?: Variant;
  disabled?: boolean;
}

export interface ComponentEventDetail<T = unknown> {
  value: T;
}