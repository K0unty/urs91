export default function Button({ children, ...props }) {
  return (
    <button
      className="px-4 py-2 texct-xs md:text-base rounded-md bg-orange-950  text-orange-500 hover:bg-orange-600 hover:text-orange-100"
      {...props}
    >
      {children}
    </button>
  );
}
