
export interface Playstyle {
  id: string;
  name: string;
  color: string;
  description: string;
}

export const playstyles: Playstyle[] = [
  { id: "aggressive", name: "Aggressive", color: "bg-red-500", description: "Takes risks, pushes advantages" },
  { id: "passive", name: "Passive", color: "bg-blue-500", description: "Plays safely, waits for opportunities" },
  { id: "balanced", name: "Balanced", color: "bg-green-500", description: "Adapts between aggressive and passive" },
  { id: "opportunistic", name: "Opportunistic", color: "bg-yellow-500", description: "Capitalizes on enemy mistakes" },
  { id: "reactive", name: "Reactive", color: "bg-purple-500", description: "Responds to enemy actions" }
];
