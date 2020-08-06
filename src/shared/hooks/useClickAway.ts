import { useEffect, useRef } from 'react';

const defaultEvents = ['mousedown', 'touchstart'];

function useClickAway(
  ref,
  onClickAway,
  events = defaultEvents,
  element = window,
) {
  const savedCallback = useRef(onClickAway);

  useEffect(() => {
    savedCallback.current = onClickAway;
  }, [onClickAway]);

  useEffect(() => {
    const handler = event => {
      const { current: el } = ref;

      el && !el.contains(event.target) && savedCallback.current(event);
    };

    for (const eventName of events) {
      element.addEventListener(eventName, handler);
    }

    return () => {
      for (const eventName of events) {
        element.removeEventListener(eventName, handler);
      }
    };
  }, [events, ref]);
}

export { useClickAway };
