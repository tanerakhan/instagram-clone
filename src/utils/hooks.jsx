import { useState, useMemo } from "react";
export const useHover = () => {
  let timer;
  const config = {
    timeout: 750,
    timeoutLeave: 200,
  };
  const [isView, setIsView] = useState(false);
  const clearTimer = () => {
    clearTimeout(timer);
  };
  const eventHandlers = useMemo(
    () => ({
      onMouseEnter() {
        timer = setTimeout(() => {
          setIsView(true);
        }, config.timeout);
      },
      onMouseLeave() {
        setTimeout(() => {
          setIsView(false);
        }, config.timeoutLeave);
        clearTimer();
      },
    }),
    []
  );

  return [isView, eventHandlers];
};
