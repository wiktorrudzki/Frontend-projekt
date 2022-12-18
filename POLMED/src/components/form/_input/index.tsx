import { useRef, useState } from "react";

type Props = {
  label: string;
  name: string;
  errorEmptyMsg?: string;
  errorWrongMsg: string;
  inputPattern: string;
  maxInputLength?: number;
  required?: boolean;
  type?: string;
};

function Input({
  label,
  name,
  errorEmptyMsg,
  errorWrongMsg,
  inputPattern,
  maxInputLength = 50,
  required = false,
  type
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const iconRef = useRef<HTMLImageElement>(null);
  const warningRef = useRef<HTMLInputElement>(null);
  const [warningMsg, setWarningMsg] = useState("");
  const regex = new RegExp(inputPattern);

  function invalidHandler(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();

    if (event.target.value === "") {
      if (!errorEmptyMsg) {
        validHandler();
        return;
      }
      setWarningMsg(errorEmptyMsg);
    } else {
      setWarningMsg(errorWrongMsg);
    }

    inputRef.current?.classList.add("text-input--invalid");
    iconRef.current?.classList.remove("hidden");
  }

  function validHandler() {
    setWarningMsg("");

    inputRef.current?.classList.remove("text-input--invalid");
    iconRef.current?.classList.add("hidden");
  }

  function checkValidity(e: React.ChangeEvent<HTMLInputElement>) {
    regex.test(e.target.value) ? validHandler() : invalidHandler(e);
  }

  return (
    <div className="form-field">
      <label htmlFor={name} className="form-field--label">
        {label}
        {required && <span className="form-field--label__star">*</span>}
      </label>
      <div className="form-field--wrapper">
        <input
          onChange={checkValidity}
          ref={inputRef}
          className="form-field--wraper__input"
          type={type}
          name={name}
          id={name}
          pattern={inputPattern}
          onInvalid={invalidHandler}
          maxLength={maxInputLength}
          required={required}
        />
        <i className="form-field--wrapper__warning-icon hidden" ref={iconRef}></i>
      </div>
      <p ref={warningRef} className="form-field--warning-msg">
        {warningMsg}
      </p>
    </div>
  );
}

export default Input;
