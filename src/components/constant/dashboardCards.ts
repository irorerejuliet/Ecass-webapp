import { LucideIcon, Map as MapIcon } from "lucide-react";

type Card =
  | {
      type: "map";
      icon: LucideIcon;
      title: string;
      subtitle: string;
      className: string;
    }
  | {
      type: "metric";
      value: string;
      title: string;
      className: string;
    };

export const dashboardCards: Card[] = [
  {
    type: "map",
    icon: MapIcon,
    title: "AREA SURVEILLANCE MAP",
    subtitle: "Sector 4 Perimeter Secured",
    className:
      "border-2 border-black p-10 flex flex-col items-center justify-center text-center bg-white shadow-[4px_4px_0px_#000]",
  },
  {
    type: "metric",
    value: "100%",
    title: "ACCOUNTABILITY RATING",
    className:
      "border-2 border-black p-10 flex flex-col items-center justify-center text-center bg-gray-900 text-white shadow-[4px_4px_0px_#000]",
  },
  {
    type: "metric",
    value: "24/7",
    title: "GUARD AVAILABILITY",
    className:
      "border-2 border-black p-10 flex flex-col items-center justify-center text-center bg-primary shadow-[4px_4px_0px_#000]",
  },
];
