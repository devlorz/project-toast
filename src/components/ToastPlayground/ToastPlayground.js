import React from "react";

import Button from "../Button";
import ToastShelf from "../ToastShelf";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [showToast, setShowToast] = React.useState(false);
  const [toastList, setToastList] = React.useState([]);

  function handleForm(event) {
    event.preventDefault();
    setShowToast(true);
    setToastList([
      ...toastList,
      {
        id: crypto.randomUUID(),
        message,
        variant,
      },
    ]);
    setMessage("");
    setVariant(VARIANT_OPTIONS[0]);
  }

  function handleRemoveToast(id) {
    setToastList(toastList.filter((toast) => toast.id !== id));
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {showToast && (
        <ToastShelf toastList={toastList} removeToast={handleRemoveToast} />
      )}

      <form onSubmit={handleForm}>
        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: "baseline" }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id="message"
                className={styles.messageInput}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              {VARIANT_OPTIONS.map((v) => (
                <label key={v} htmlFor={`variant-${v}`}>
                  <input
                    id={`variant-${v}`}
                    type="radio"
                    name="variant"
                    value={v}
                    checked={variant === v}
                    onChange={() => setVariant(v)}
                  />
                  {v}
                </label>
              ))}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
