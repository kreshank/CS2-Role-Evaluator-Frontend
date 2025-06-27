
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { mainRoles, Role } from "@/data/roles";
import { getAlignmentColor } from "@/utils/alignmentUtils";

interface RoleSelectionProps {
  onRoleSelect: (role: Role) => void;
}

const RoleSelection = ({ onRoleSelect }: RoleSelectionProps) => {
  return (
    <>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Select Your Main Role</h2>
        <p className="text-slate-400">Choose the role that best describes your primary function in CS2</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {mainRoles.map((role) => {
          const IconComponent = role.icon;
          return (
            <Card
              key={role.id}
              className="bg-slate-800 border-slate-700 hover:border-orange-500 transition-all duration-300 cursor-pointer hover:scale-105"
              onClick={() => onRoleSelect(role)}
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-orange-500/20 rounded-full w-fit">
                  <IconComponent className="h-8 w-8 text-orange-500" />
                </div>
                <CardTitle className="text-white text-lg">{role.name}</CardTitle>
                <CardDescription className="text-slate-400">
                  {role.description}
                </CardDescription>
                <div className="mt-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-300">Alignment</span>
                    <span className={`text-sm font-bold ${getAlignmentColor(role.alignment)}`}>
                      {role.alignment}%
                    </span>
                  </div>
                  <Progress value={role.alignment} className="h-2" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {role.traits.map((trait, index) => (
                    <Badge key={index} variant="outline" className="text-xs border-slate-600 text-slate-300">
                      {trait}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default RoleSelection;
