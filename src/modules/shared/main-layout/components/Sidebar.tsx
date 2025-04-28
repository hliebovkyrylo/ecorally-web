import { ChartBar, Home, Plus, Search, User } from "lucide-react";
import Link from "next/link";

export const Sidebar = () => {
  return (
    <aside className="sticky top-0 left-0 h-screen w-[300px] py-6">
      <Link href={"/"} className="gradient-logo text-2xl font-bold">
        EcoRally
      </Link>
      <div className="mt-7">
        <Link
          href={"/"}
          className="w-full flex items-center gap-2 group rounded-lg p-2 text-muted-foreground hover:bg-primary-foreground transition-colors"
        >
          <Home className="text-muted-foreground group-hover:text-accent" />
          <div className="group-hover:text-accent">Головна</div>
        </Link>
        <Link
          href={"/cleanup-events"}
          className="w-full flex items-center gap-2 group rounded-lg p-2 text-muted-foreground hover:bg-primary-foreground transition-colors"
        >
          <Search className="text-muted-foreground group-hover:text-accent" />
          <div className="group-hover:text-accent">Всі події</div>
        </Link>
        <Link
          href={"/create-event"}
          className="w-full flex items-center gap-2 group rounded-lg p-2 text-muted-foreground hover:bg-primary-foreground transition-colors"
        >
          <Plus className="text-muted-foreground group-hover:text-accent" />
          <div className="group-hover:text-accent">Створити подію</div>
        </Link>
        <Link
          href={"/profile"}
          className="w-full flex items-center gap-2 group rounded-lg p-2 text-muted-foreground hover:bg-primary-foreground transition-colors"
        >
          <User className="text-muted-foreground group-hover:text-accent" />
          <div className="group-hover:text-accent">Мій профіль</div>
        </Link>
        <Link
          href={"/statistics"}
          className="w-full flex items-center gap-2 group rounded-lg p-2 text-muted-foreground hover:bg-primary-foreground transition-colors"
        >
          <ChartBar className="text-muted-foreground group-hover:text-accent" />
          <div className="group-hover:text-accent">Статистика додатку</div>
        </Link>
      </div>
    </aside>
  );
};
