import Link from "next/link";
import SignUpForm from "@/modules/auth/sign-up/SignUpForm";

export default function SignInPage() {
  return (
    <div className="flex h-screen items-center justify-center bg-[url('/auth-bg.jpg')] bg-cover bg-center bg-no-repeat">
      <Link 
      href="/"
      className="absolute bottom-4 left-4 text-sm text-muted-foreground hover:underline">
        🡠 Повернутися на головну
      </Link>
      <SignUpForm />
    </div>
  );
}
