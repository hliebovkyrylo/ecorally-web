import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, Plus, Settings, User } from "lucide-react";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex justify-end items-center py-3">
      <div className="flex items-center gap-4">
        <Link
          className="text-muted-foreground hover:text-white transition-colors"
          href={"/"}
        >
          Створити подію
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="bg-blue-400 p-2 rounded-full cursor-pointer text-white">
              KH
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <User className="text-primary-foreground" />
              <span>Профіль</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Plus className="text-primary-foreground" />
              <span>Створити подію</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="text-primary-foreground" />
              <span>Налаштування</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LogOut className="text-primary-foreground" />
              <span>Вийти</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};
