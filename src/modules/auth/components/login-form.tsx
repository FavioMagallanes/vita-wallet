import { useForm, SubmitHandler } from "react-hook-form";
import { useLogin } from "../hooks/use-login";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

type LoginFormInputs = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const navigate = useNavigate();
  const loginMutation = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    setError,
  } = useForm<LoginFormInputs>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    try {
      await loginMutation.mutateAsync(data);
      navigate("/dashboard");
    } catch (error) {
      console.error("Error en el login:", error);
      setError("email", { message: "Verifique sus credenciales" });
      setError("password", { message: "Verifique sus credenciales" });
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="grid w-full max-w-4xl grid-cols-1 gap-4 overflow-hidden rounded-lg md:grid-cols-2">
        <Card className="w-full border-none bg-transparent shadow-none">
          <CardHeader className="mt-12">
            <CardTitle>Iniciar sesión</CardTitle>
          </CardHeader>

          <form onSubmit={handleSubmit(onSubmit)}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label className="text-xs" htmlFor="email">
                  Correo electrónico
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="nombre@ejemplo.com"
                  {...register("email", {
                    required: "Este campo es obligatorio",
                  })}
                />
                {errors.email && (
                  <p className="text-xs text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label className="text-xs" htmlFor="password">
                  Contraseña
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="********"
                  {...register("password", {
                    required: "Este campo es obligatorio",
                  })}
                />
                {errors.password && (
                  <p className="text-xs text-red-600">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </CardContent>

            <CardFooter className="flex flex-col space-y-4">
              <Button
                type="submit"
                className="btn-gradient w-full"
                disabled={!isValid || isSubmitting}
              >
                {isSubmitting ? "Iniciando sesión..." : "Iniciar sesión"}
              </Button>
              <div className="mr-auto text-sm text-gray-500">
                ¿Olvidaste tu contraseña?{" "}
                <a href="#" className="text-[#05bcb9] hover:underline">
                  Recupérala aquí
                </a>
              </div>
            </CardFooter>
          </form>
        </Card>

        <div className="relative hidden md:block">
          <img
            src="/public/modal-img.svg"
            alt="Login visual"
            className="h-full w-full object-cover p-12"
          />
        </div>
      </div>
    </div>
  );
};
