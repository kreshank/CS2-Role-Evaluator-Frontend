
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Target, Key } from "lucide-react";

interface LandingPageProps {
  onAuthenticate: () => void;
}

const LandingPage = ({ onAuthenticate }: LandingPageProps) => {
  const [apiKey, setApiKey] = useState("");

  const handleApiKeySubmit = () => {
    if (apiKey.trim()) {
      // Store API key in localStorage for frontend-only app
      localStorage.setItem('cs2-classifier-api-key', apiKey);
      onAuthenticate();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <Card className="max-w-md mx-auto bg-slate-800 border-slate-700">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 p-3 bg-orange-500/20 rounded-full w-fit">
              <Target className="h-12 w-12 text-orange-500" />
            </div>
            <CardTitle className="text-2xl text-white">CS2 Player Classifier</CardTitle>
            <CardDescription className="text-slate-400">
              Enter your API key to analyze your in-game tendencies and playstyle
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="api-key" className="text-slate-300">API Key</Label>
              <div className="relative">
                <Key className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <Input
                  id="api-key"
                  type="password"
                  placeholder="Enter your API key"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  className="pl-10 bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                />
              </div>
            </div>
            <Button 
              onClick={handleApiKeySubmit}
              disabled={!apiKey.trim()}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white"
            >
              Start Classification
            </Button>
            <div className="text-xs text-slate-400 text-center">
              Your API key is stored locally and never sent to our servers
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LandingPage;
