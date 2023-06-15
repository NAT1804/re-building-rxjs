export interface Observer<T = any> {
  next: (value?: T) => void;
  error?: (value?: T) => void;
  complete?: (value?: T) => void;
}
