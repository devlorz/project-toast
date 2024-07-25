import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";
import useKeydown from "../../hooks/useKeydown";

function ToastShelf() {
  const { toastList, removeToast, removeAll } = React.useContext(ToastContext);

  const handleEscape = React.useCallback(() => {
    removeAll();
  }, []);

  useKeydown("Escape", handleEscape);

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toastList.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast variant={toast.variant} onClose={() => removeToast(toast.id)}>
            {toast.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
