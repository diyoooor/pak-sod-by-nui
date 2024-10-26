export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="auth-content">{children}</div>
    </div>
  );
}
