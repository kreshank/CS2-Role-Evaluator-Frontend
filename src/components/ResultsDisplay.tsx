
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Role } from "@/data/roles";
import { Playstyle } from "@/data/playstyles";
import { getAlignmentColor } from "@/utils/alignmentUtils";

interface ResultsDisplayProps {
  selectedRole: Role | null;
  selectedPlaystyle: Playstyle | null;
  onReset: () => void;
}

const ResultsDisplay = ({ selectedRole, selectedPlaystyle, onReset }: ResultsDisplayProps) => {
  if (!selectedRole || !selectedPlaystyle) return null;

  return (
    <>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Your Player Classification</h2>
        <p className="text-slate-400">Based on your selections, here's your CS2 player profile</p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Card className="bg-gradient-to-r from-slate-800 to-slate-700 border-orange-500 border-2">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="p-4 bg-orange-500/20 rounded-full">
                <selectedRole.icon className="h-12 w-12 text-orange-500" />
              </div>
              <div className="text-4xl font-bold text-white">+</div>
              <div className={`p-4 ${selectedPlaystyle.color} rounded-full`}>
                <div className="w-12 h-12 bg-white rounded-full"></div>
              </div>
            </div>
            <CardTitle className="text-3xl text-white mb-2">
              {selectedPlaystyle.name} {selectedRole.name}
            </CardTitle>
            <CardDescription className="text-xl text-slate-300">
              {selectedRole.description} with a {selectedPlaystyle.name.toLowerCase()} approach
            </CardDescription>
            <div className="mt-4">
              <div className="text-sm text-slate-400 mb-2">Role Alignment Score</div>
              <div className={`text-2xl font-bold ${getAlignmentColor(selectedRole.alignment)}`}>
                {selectedRole.alignment}%
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Role Characteristics</h3>
                <div className="space-y-2">
                  {selectedRole.traits.map((trait, index) => (
                    <Badge key={index} variant="outline" className="mr-2 border-orange-500 text-orange-300">
                      {trait}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Playstyle Analysis</h3>
                <p className="text-slate-300">{selectedPlaystyle.description}</p>
              </div>
            </div>
            
            <div className="text-center pt-6">
              <Button 
                onClick={onReset}
                className="bg-orange-500 hover:bg-orange-600 text-white"
              >
                Classify Again
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default ResultsDisplay;
