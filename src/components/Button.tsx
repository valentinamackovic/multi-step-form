interface ButtonProps {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent) => void;
}

function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="text-xs rounded text-slate-100 bg-indigo-900 w-fit px-3 py-2 self-end hover:bg-indigo-600 ease-in-out duration-200"
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
