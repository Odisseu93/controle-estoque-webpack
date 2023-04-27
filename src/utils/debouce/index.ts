type FuncType = (...args: any[]) => void;

export function debounce<F extends FuncType>(func: F, delay: number): F {
  let timer: NodeJS.Timeout;
  return function(this: any, ...args: any[]) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  } as F;
}
