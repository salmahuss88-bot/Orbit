import Login from "./Login/page";
export default function AuthLayout({ children }) {
  return (
    <main className="flex items-center justify-center min-h-screen">
      {children}
    </main>
  );
}