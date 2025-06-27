
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Target } from "lucide-react";
import { Role } from "@/data/roles";
import { Playstyle } from "@/data/playstyles";
import RoleSelection from "./RoleSelection";
import PlaystyleSelection from "./PlaystyleSelection";
import ResultsDisplay from "./ResultsDisplay";

const ClassificationInterface = () => {
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [selectedPlaystyle, setSelectedPlaystyle] = useState<Playstyle | null>(null);
  const [currentStep, setCurrentStep] = useState(1);

  const handleRoleSelect = (role: Role) => {
    setSelectedRole(role);
    setCurrentStep(2);
  };

  const handlePlaystyleSelect = (playstyle: Playstyle) => {
    setSelectedPlaystyle(playstyle);
    setCurrentStep(3);
  };

  const resetClassification = () => {
    setSelectedRole(null);
    setSelectedPlaystyle(null);
    setCurrentStep(1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white flex items-center gap-3">
                <Target className="h-8 w-8 text-orange-500" />
                CS2 Player Classifier
              </h1>
              <p className="text-slate-400 mt-1">Analyze your in-game tendencies and playstyle</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-slate-400">Classification Progress</div>
              <Progress value={(currentStep / 3) * 100} className="w-32 mt-1" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs value={currentStep.toString()} className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-slate-800 border border-slate-700">
            <TabsTrigger value="1" className="data-[state=active]:bg-orange-500">
              Main Role
            </TabsTrigger>
            <TabsTrigger value="2" disabled={!selectedRole} className="data-[state=active]:bg-orange-500">
              Playstyle
            </TabsTrigger>
            <TabsTrigger value="3" disabled={!selectedPlaystyle} className="data-[state=active]:bg-orange-500">
              Results
            </TabsTrigger>
          </TabsList>

          {/* Step 1: Role Selection */}
          <TabsContent value="1" className="mt-8">
            <RoleSelection onRoleSelect={handleRoleSelect} />
          </TabsContent>

          {/* Step 2: Playstyle Selection */}
          <TabsContent value="2" className="mt-8">
            <PlaystyleSelection 
              selectedRole={selectedRole} 
              onPlaystyleSelect={handlePlaystyleSelect} 
            />
          </TabsContent>

          {/* Step 3: Results */}
          <TabsContent value="3" className="mt-8">
            <ResultsDisplay 
              selectedRole={selectedRole}
              selectedPlaystyle={selectedPlaystyle}
              onReset={resetClassification}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ClassificationInterface;
