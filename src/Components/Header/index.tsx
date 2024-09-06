interface headerProps {
  classe?: string;
  children: any;
}

export default function Header({ children, classe }: headerProps) {
  return <header className={classe}>{children}</header>;
}
