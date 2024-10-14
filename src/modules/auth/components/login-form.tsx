import { useState } from "react";
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
// import { Alert, AlertDescription } from "@/components/ui/alert";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="grid w-full max-w-4xl grid-cols-1 gap-4 overflow-hidden rounded-lg md:grid-cols-2">
        <Card className="w-full border-none bg-transparent shadow-none">
          <CardHeader className="mt-12">
            <CardTitle>Iniciar sesión</CardTitle>
          </CardHeader>
          <form>
            <CardContent className="space-y-4">
              {/* {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )} */}
              <div className="space-y-2">
                <Label className="text-xs" htmlFor="email">
                  Correo electrónico
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="nombre@ejemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label className="text-xs" htmlFor="password">
                  Contraseña
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="********"
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button type="submit" className="btn-gradient w-full">
                Iniciar sesión
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
