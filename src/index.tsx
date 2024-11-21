export { default as Accordion } from './components/Accordion';
export { default as Stack } from './components/Stack';
export { default as TextField } from './components/TextField';

export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}
