import {useRef, useEffect} from 'react';

export const useInterval = <T extends () => void>(
  callback: T,
  delay: number,
  name?: string,
) => {
  const savedCallback = useRef<T>();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      if (name) {
        console.log(`${name} ticked`);
      }
      savedCallback.current && savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => {
        clearInterval(id);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [delay]);
};
