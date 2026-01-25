import { useCallback, useRef } from "react";

function useThrottle<T extends (...args: undefined[]) => void>(
  fn: T,
  delay: number,
): (...args: Parameters<T>) => void {
  const lastCallRef = useRef(0);

  const throttledFn = useCallback(
    (...args: Parameters<T>) => {
      const now = Date.now();

      if (now - lastCallRef.current >= delay) {
        lastCallRef.current = now;
        fn(...args);
      }
    },
    [fn, delay],
  );

  return throttledFn;
}

export default useThrottle;
