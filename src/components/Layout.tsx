import { ReactNode } from 'react';

interface GenericProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Container({ children }: GenericProps) {
  return (
    <div className="w-full justify-center flex justify-items-center">
      <div className="flex justify-items-center flex-col my-12 justify-between h-2/4 w-3/5">
        {children}
      </div>
    </div>
  );
}

interface HeaderProps {
  title: string;
  description: string;
}

export function Header({ title, description, ...props }: HeaderProps) {
  return (
    <div {...props}>
      <h1 className="text-2xl font-bold mb-2">{title}</h1>
      <p className="text-xs text-slate-400">{description}</p>
    </div>
  );
}

export function Content({ children, className, ...props }: GenericProps) {
  return (
    <div
      className={'flex flex-col w-full space-y-4 mt-10 ' + className}
      {...props}
    >
      {children}
    </div>
  );
}

export function Footer({ children, className, ...props }: GenericProps) {
  return (
    <section
      className={'flex items-center justify-between mt-5 ' + className}
      {...props}
    >
      {children}
    </section>
  );
}
