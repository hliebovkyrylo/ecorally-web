import React from "react";
import { useRouter } from "next/router";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SubmitButton } from "../shared/SubmitButton";

export default function SignInForm() {
  const router = useRouter();

  return (
    <section className="relative flex items-center justify-center min-screen bg-background dark:bg-background">
      <div className="w-full max-w-sm p-8 space-y-2 rounded-2xl shadow-lg bg-secondary/50 dark:bg-input/50">
        <h2 className="text-2xl font-bold text-left text-primary-foreground">Увійти</h2>

        <p className="text-sm text-muted-foreground text-left">
          Увійдіть, щоб користуватися всіми можливостями додатку
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="space-y-2"
        >
          <Input
            id="email"
            type="email"
            placeholder="Електронна пошта"
            required
            className="mt-1 border border-gray-500 rounded-lg py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />

          <Input
            id="password"
            type="password"
            placeholder="Пароль"
            required
            className="mt-1 border border-gray-500 rounded-lg py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />

          <div className="text-right">
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Забули пароль?
            </a>
          </div>

          <SubmitButton text="Продолжити" />
        </form>

        <Button variant="outline" className="w-full mt-1" onClick={() => router.push("/auth/sign-up")}>
          Створити акаунт
        </Button>
      </div>
    </section>
  );
}
