import { LayoutDashboard, AlertTriangle, FileText, Siren } from "lucide-react";
export const navItems = [
  {
    label: "DASHBOARD",
    icon: LayoutDashboard,
  },
  {
    label: "ALERTS",
    icon: AlertTriangle,
  },
  {
    label: "REPORTS",
    icon: FileText,
    active: true,
  },
  {
    label: "SOS",
    icon: Siren,
  },
];
