
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { playstyles, Playstyle } from "@/data/playstyles";
import { Role } from "@/data/roles";

interface PlaystyleSelectionProps {
  selectedRole: Role | null;
  onPlaystyleSelect: (playstyle: Playstyle) => void;
}

const PlaystyleSelection = ({ selectedRole, onPlaystyleSelect }: PlaystyleSelectionProps) => {
  return (
    <>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Define Your Playstyle</h2>
        <p className="text-slate-400">How do you approach your role as a {selectedRole?.name}?</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {playstyles.map((style) => (
          <Card
            key={style.id}
            className="bg-slate-800 border-slate-700 hover:border-orange-500 transition-all duration-300 cursor-pointer hover:scale-105"
            onClick={() => onPlaystyleSelect(style)}
          >
            <CardHeader className="text-center">
              <div className={`mx-auto mb-4 w-16 h-16 ${style.color} rounded-full flex items-center justify-center`}>
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <CardTitle className="text-white text-lg">{style.name}</CardTitle>
              <CardDescription className="text-slate-400">
                {style.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </>
  );
};

export default PlaystyleSelection;
