import { FieldError } from "react-hook-form";

type InputFieldProps = {
  label: string;
  type?: string;
  register: any;
  name: string;
  defaultValue?: string;
  error?: FieldError;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

/**
 * A reusable input field component designed for forms, supporting validation and customization.
 *
 * @component
 * @param {InputFieldProps} props - The properties passed to the InputField component.
 * @param {string} props.label - The label text displayed above the input field.
 * @param {string} [props.type="text"] - The type of the input field (e.g., "text", "password", "email").
 * @param {Function} props.register - A function from a form library (e.g., react-hook-form) to register the input field for validation.
 * @param {string} props.name - The name of the input field, used for form data binding.
 * @param {string} [props.defaultValue] - The default value of the input field.
 * @param {Object} [props.error] - An error object containing validation error details, if any.
 * @param {string} [props.error.message] - The error message to display if validation fails.
 * @param {Object} [props.inputProps] - Additional properties to spread onto the input element.
 *
 * @returns {JSX.Element} A styled input field with optional validation error display.
 *
 * @example
 * ```tsx
 * <InputField
 *   label="Email"
 *   type="email"
 *   register={register}
 *   name="email"
 *   defaultValue=""
 *   error={errors.email}
 *   inputProps={{ placeholder: "Enter your email" }}
 * />
 * ```
 */
const InputField = ({
  label,
  type = "text",
  register,
  name,
  defaultValue,
  error,
  inputProps,
}: InputFieldProps) => {
  return (
    <div className="flex flex-col gap-2 w-full md:w-1/4">
      <label className="text-xs text-black-500">{label}</label>
      <input
        type={type}
        {...register(name)}
        className="ring-[1.5px] ring-black-300 p-2 rounded-md text-sm w-full"
        {...inputProps}
        defaultValue={defaultValue}
      />
      {error?.message && (
        <p className="text-xs text-red-400">{error.message.toString()}</p>
      )}
    </div>
  );
};

export default InputField;