import SignInForm from "@/modules/auth/sing-in/SignInForm";

export default function SignInPage() {
  return (
    <div className="flex h-screen items-center justify-center bg-[url('/singin.jpg')] bg-cover bg-center bg-no-repeat">
      <a 
      href="/"
      className="absolute bottom-4 left-4 text-sm text-muted-foreground hover:underline">
        🡠 Повернутися на головну
      </a>
      <SignInForm />
    </div>
  );
}
