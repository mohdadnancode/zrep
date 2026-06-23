import {
  LayoutDashboard,
  Dumbbell,
  BarChart3,
  Apple,
  MessageSquare,
  User,
  Settings,
} from "lucide-react";

export const navItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Workouts",
    href: "/workouts",
    icon: Dumbbell,
  },
  {
    label: "Analytics",
    href: "/analytics",
    icon: BarChart3,
  },
  {
    label: "Diet",
    href: "/diet",
    icon: Apple,
  },
  {
    label: "AI Coach",
    href: "/ai-coach",
    icon: MessageSquare,
  },
  {
    label: "Profile",
    href: "/profile",
    icon: User,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
  },
];