import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

type SplashProps = {
  handleReady: () => void;
};

export const Splash: React.FC<SplashProps> = ({ handleReady }) => {
  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-2xl mx-auto p-8 text-center space-y-6">
        <div className="space-y-4 mb-8">
          <h1 className="text-4xl font-bold text-gray-900">
            AI Teaching Assistant Demo
          </h1>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg space-y-4">
            <p className="text-lg text-gray-700">
              Experience an interactive AI Teacher that can see and respond to you in real-time.
            </p>

            <div className="flex flex-col gap-2 text-gray-600">
              <p className="text-sm">
                Powered by:
              </p>
              <ul className="text-sm font-medium">
                <li>🤖 Anthropic's Claude</li>
                <li>⚡ OpenAI's Real-time AI</li>
              </ul>
            </div>
          </div>
        </div>

        <Button
          onClick={handleReady}
          className="text-lg px-8 py-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          <span>Start Demo</span>
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </main>
  );
};

export default Splash;
