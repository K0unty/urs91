import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  const classes =
    "w-full p-1 border-b-2 rounded-sm border-stone-300  text-cyan-300 focus:outline-none focus:border-stone-600 bg-cyan-900";

  return (
    <p className="flex flex-col my-4 ">
      <label className="text-sm font-bold uppercase text-cyan-500">
        {label}
      </label>
      {textarea ? (
        <textarea ref={ref} className={classes} {...props} />
      ) : (
        <input ref={ref} className={classes} {...props} />
      )}
    </p>
  );
});

export default Input;
