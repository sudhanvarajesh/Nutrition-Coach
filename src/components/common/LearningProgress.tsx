
import { CheckCircle, Circle } from "lucide-react";
import { Link } from "react-router-dom";

interface Module {
  id: string;
  title: string;
  path: string;
  completed: boolean;
}

interface LearningProgressProps {
  modules: Module[];
  currentModule?: string;
}

const LearningProgress = ({ modules, currentModule }: LearningProgressProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-3xl mx-auto">
      <h2 className="text-xl font-semibold mb-6">Your Learning Path</h2>
      
      <div className="space-y-4">
        {modules.map((module, index) => {
          const isActive = module.id === currentModule;
          
          return (
            <div 
              key={module.id}
              className={`relative flex items-center ${
                index < modules.length - 1 ? "pb-6" : ""
              }`}
            >
              {/* Connector Line */}
              {index < modules.length - 1 && (
                <div 
                  className={`absolute left-3 top-8 w-0.5 h-full ${
                    module.completed ? "bg-myplate-protein" : "bg-gray-200"
                  }`}
                ></div>
              )}
              
              {/* Icon */}
              <div className="mr-4 flex-shrink-0">
                {module.completed ? (
                  <CheckCircle className="w-6 h-6 text-myplate-protein" />
                ) : (
                  <Circle className={`w-6 h-6 ${isActive ? "text-myplate-fruit" : "text-gray-300"}`} />
                )}
              </div>
              
              {/* Content */}
              <div className="flex-grow">
                <Link 
                  to={module.path}
                  className={`text-lg font-medium ${
                    isActive 
                      ? "text-myplate-fruit" 
                      : module.completed 
                      ? "text-myplate-protein" 
                      : "text-gray-700"
                  } hover:underline`}
                >
                  {module.title}
                </Link>
                
                {isActive && (
                  <p className="text-sm text-gray-500 mt-1">
                    You are currently working on this module
                  </p>
                )}
                
                {module.completed && (
                  <p className="text-sm text-myplate-protein mt-1">
                    Completed
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LearningProgress;
