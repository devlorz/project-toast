import React from "react";

function useKeydown(key, callback) {
  React.useEffect(() => {
    const handleKeydown = (event) => {
      if (event.key === key) {
        callback();
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [key, callback]);
}

export default useKeydown;
