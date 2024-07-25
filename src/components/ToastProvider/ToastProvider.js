import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toastList, setToastList] = React.useState([]);

  function addToast(message, variant) {
    setToastList([
      ...toastList,
      {
        id: crypto.randomUUID(),
        message,
        variant,
      },
    ]);
  }

  function removeToast(id) {
    setToastList(toastList.filter((toast) => toast.id !== id));
  }

  function removeAll() {
    setToastList([]);
  }

  return (
    <ToastContext.Provider
      value={{ toastList, addToast, removeToast, removeAll }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
