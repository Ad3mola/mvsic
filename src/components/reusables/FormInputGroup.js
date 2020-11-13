import React from "react";

function FormInputGroup({
  name,
  type = "text",
  trigger,
  error,
  errorFeedback,
  className,
  wrapperClassName,
  label,
  icon,
  iconFunction,
  ...props
}) {
  return (
    <div className={`form-group ${wrapperClassName}`}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        name={name}
        onBlur={trigger}
        className={
          `form-control p-4 ${className} ` + (error ? "is-invalid" : "")
        }
        aria-describedby={`${name}Input`}
        {...props}
      />
      {icon }
      {error && <small className="text-danger">{errorFeedback}</small>}
    </div>
  );
}

export default FormInputGroup;
