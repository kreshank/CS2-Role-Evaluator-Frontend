
import { Target, Users, Shield, Zap, Crosshair, Heart, Eye, Sword } from "lucide-react";

export interface Role {
  id: string;
  name: string;
  icon: any;
  description: string;
  traits: string[];
  alignment: number;
}

export const mainRoles: Role[] = [
  {
    id: "anchor",
    name: "Site Anchor",
    icon: Shield,
    description: "Holds bombsites and prevents rushes",
    traits: ["Defensive positioning", "Site knowledge", "Clutch potential", "Patience"],
    alignment: 85
  },
  {
    id: "rotator",
    name: "Rotator",
    icon: Users,
    description: "Quick rotations between sites based on information",
    traits: ["Map awareness", "Quick decision making", "Flexible positioning", "Team coordination"],
    alignment: 72
  },
  {
    id: "igl",
    name: "In-Game Leader (IGL)",
    icon: Target,
    description: "Calls strategies and coordinates team movements",
    traits: ["Strategic thinking", "Communication", "Team management", "Adaptability"],
    alignment: 45
  },
  {
    id: "entry",
    name: "Entry Fragger",
    icon: Zap,
    description: "First into sites, creates space for the team",
    traits: ["Aggressive playstyle", "Aim dueling", "Risk taking", "Opening picks"],
    alignment: 68
  },
  {
    id: "awper",
    name: "AWPer",
    icon: Crosshair,
    description: "Primary sniper, controls long angles",
    traits: ["Precision aiming", "Angle control", "Economic awareness", "Positioning"],
    alignment: 91
  },
  {
    id: "support",
    name: "Support",
    icon: Heart,
    description: "Enables teammates with utilities and trades",
    traits: ["Utility usage", "Trade fragging", "Team enabler", "Selfless play"],
    alignment: 78
  },
  {
    id: "lurker",
    name: "Lurker",
    icon: Eye,
    description: "Solo player who gathers info and flanks",
    traits: ["Independent play", "Information gathering", "Timing", "Flanking routes"],
    alignment: 56
  },
  {
    id: "rifler",
    name: "Rifler",
    icon: Sword,
    description: "Versatile player with rifles and SMGs",
    traits: ["Versatility", "Consistent fragging", "Multiple weapons", "Adaptable"],
    alignment: 83
  }
];
