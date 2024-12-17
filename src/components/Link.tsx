interface LinkProps {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent) => void;
}

function Link({ children, ...props }: LinkProps) {
  return (
    <button
      className="text-xs text-indigo-800 cursor-pointer no-underline hover:underline"
      {...props}
    >
      {children}
    </button>
  );
}

export default Link;
