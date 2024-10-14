import { LoginForm } from "../components/login-form";

export const LoginPage = () => {
  return (
    <div className="relative h-screen w-screen">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#54d1cf_100%)]"></div>
      <LoginForm />
    </div>
  );
};
