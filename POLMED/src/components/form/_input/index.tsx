import { useRef, useState } from "react";
import triangleExclemationIcon from "@/img/icons/triangle-exclamation-solid.svg";

type Props = {
  label: string;
  name: string;
  errorEmptyMsg: string;
  errorWrongMsg: string;
  inputPattern: string;
  maxInputLength: number;
  required: boolean;
};

function Input({
  label,
  name,
  errorEmptyMsg,
  errorWrongMsg,
  inputPattern,
  maxInputLength,
  required
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const iconRef = useRef<HTMLImageElement>(null);
  const warningRef = useRef<HTMLInputElement>(null);
  const [warningMsg, setWarningMsg] = useState("");
  const regex = new RegExp(inputPattern);

  function invalidHandler(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();

    if (event.target.value === "") {
      setWarningMsg(errorEmptyMsg);
    } else {
      setWarningMsg(errorWrongMsg);
    }

    inputRef.current?.classList.add("text-input--invalid");
    iconRef.current?.classList.remove("hidden");
  }

  function validHandler() {
    console.log("valid");
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
        {required ? <span className="form-field--label__star">*</span> : ""}
      </label>
      <div className="form-field--wrapper">
        <input
          onChange={checkValidity}
          ref={inputRef}
          className="form-field--wraper__input"
          type="text"
          name={name}
          id={name}
          pattern={inputPattern}
          onInvalid={invalidHandler}
          maxLength={maxInputLength}
          required={required}
        />
        <img
          className="form-field--wrapper__warning-icon hidden"
          src={triangleExclemationIcon}
          ref={iconRef}
        />
      </div>
      <p ref={warningRef} className="form-field--warning-msg">
        {warningMsg}
      </p>
    </div>
  );
}

export default Input;
