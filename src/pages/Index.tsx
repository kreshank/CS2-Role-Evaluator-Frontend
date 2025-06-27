
import { useState } from "react";
import LandingPage from "@/components/LandingPage";
import ClassificationInterface from "@/components/ClassificationInterface";

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthenticate = () => {
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return <LandingPage onAuthenticate={handleAuthenticate} />;
  }

  return <ClassificationInterface />;
};

export default Index;
