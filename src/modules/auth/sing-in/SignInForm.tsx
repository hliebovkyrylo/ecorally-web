import React, { useState, FormEvent } from "react";
import { useRouter } from "next/router";
import { FormField } from "../shared/FormField";
import { SubmitButton } from "../shared/SubmitButton";

export default function SignInForm() {
  const router = useRouter();
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!emailRegex.test(email.trim())) {
      setError("Невалідна електронна адреса");
      return;
    }
    if (isRegister && password !== confirmPassword) {
      setError("Паролі повинні співпадати");
      return;
    }
    setError(null);
    router.back();
  }
  // async function handleSubmit(e: FormEvent<HTMLFormElement>) {
  //   e.preventDefault();

  //   if (isRegister && password !== confirmPassword) {
  //     setError("Паролі повинні співпадати");
  //     return;
  //   }

  //   setError(null);
  //   setLoading(true);

  //   try {
  //     const url = isRegister ? "/api/auth/register" : "/api/auth/login";
  //     const res = await fetch(url, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ email, password }),
  //     });

  //     if (!res.ok) {
  //       const { message } = await res.json();
  //       setError(message ?? "Помилка авторизації");
  //       return;
  //     }

  //     router.push("/dashboard");
  //   } catch (_) {
  //     setError("Сервер недоступний. Спробуйте пізніше.");
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  return (
    <section className="relative flex items-center justify-center min-screen bg-background dark:bg-background">
      <div className="w-full max-w-sm p-8 space-y-2 rounded-2xl shadow-lg bg-secondary/50 dark:bg-input/50">
        <h2 className="text-2xl font-bold text-left text-primary-foreground">
          {isRegister ? "Створити обліковий запис" : "Увійти"}
        </h2>

        <p className="text-sm text-muted-foreground text-left">
          {isRegister
            ? "Створіть обліковий запис, щоб користуватися всіми фможливостями додатку"
            : "Увійдіть, щоб користуватися всіми можливостями додатку"}
        </p>

        <form onSubmit={handleSubmit} className="space-y-2">
          <FormField
            id="email"
            type="email"
            placeholder="Електронна пошта"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <FormField
            id="password"
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {!isRegister && (
            <div className="text-right">
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Забули пароль?
              </a>
            </div>
          )}

          {isRegister && (
            <>
              <FormField
                id="confirmPassword"
                type="password"
                placeholder="Підтвердіть пароль"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              {error && <p className="text-destructive text-sm">{error}</p>}
            </>
          )}

          {error && !isRegister && <p className="text-destructive text-sm">{error}</p>}

          <SubmitButton text="Продолжити" />
        </form>

        <div className="mt-2 space-y-2">
          {isRegister ? (
            <button
              type="button"
              onClick={() => {
                setIsRegister(false);
                setError(null);
              }}
              className="outline-0 px-4 h-12 rounded-xl bg-secondary text-white dark:bg-input/30 flex items-center justify-center w-full min-w-0 text-base shadow-xs transition-[color,box-shadow] border border-gray-500 hover:bg-secondary/60 dark:hover:bg-input/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm">
              Назад
            </button>
          ) : (
            <button
              type="button"
              onClick={() => {
                setIsRegister(true);
                setError(null);
              }}
              className="outline-0 px-4 h-12 rounded-xl bg-secondary text-white dark:bg-input/30 flex items-center justify-center w-full min-w-0 text-base shadow-xs transition-[color,box-shadow] border border-gray-500 hover:bg-secondary/60 dark:hover:bg-input/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm">
              Створити акаунт
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
