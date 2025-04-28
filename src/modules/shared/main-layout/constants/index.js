import { ChartBar, Earth, Map, Plus, Search, User } from "lucide-react";

export const sidebarLinks = [
  {
    icon: <Earth />,
    name: "Події неподалеку",
    path: "/near-events",
  },
  {
    icon: <Map />,
    name: "Карта подій",
    path: "/events-map",
  },
  {
    icon: <Search />,
    name: "Всі події",
    path: "/cleanup-events",
  },
  {
    icon: <Plus />,
    name: "Створити подію",
    path: "/create-event",
  },
  {
    icon: <User />,
    name: "Мій профіль",
    path: "/profile",
  },
  {
    icon: <ChartBar />,
    name: "Статистика додатку",
    path: "/statistics",
  },
];
