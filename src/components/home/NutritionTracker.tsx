
import { FoodItemProps } from "./FoodItem";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface NutritionTrackerProps {
  plateItems: FoodItemProps[];
}

const NutritionTracker = ({ plateItems }: NutritionTrackerProps) => {
  // Calculate nutrition values based on plate items
  const calculateNutrition = () => {
    const counts = {
      vegetable: 0,
      fruit: 0,
      grain: 0,
      protein: 0,
      dairy: 0,
    };

    // Count items by type
    plateItems.forEach(item => {
      counts[item.type]++;
    });

    return counts;
  };

  const nutrition = calculateNutrition();
  const totalItems = plateItems.length;
  const totalCalories = plateItems.reduce((sum, item) => sum + item.calories, 0);

  // Recommended amounts
  const recommended = {
    vegetable: 3,
    fruit: 2,
    grain: 2,
    protein: 2,
    dairy: 1,
  };

  // Calculate percentages
  const percentages = {
    vegetable: Math.min((nutrition.vegetable / recommended.vegetable) * 100, 100),
    fruit: Math.min((nutrition.fruit / recommended.fruit) * 100, 100),
    grain: Math.min((nutrition.grain / recommended.grain) * 100, 100),
    protein: Math.min((nutrition.protein / recommended.protein) * 100, 100),
    dairy: Math.min((nutrition.dairy / recommended.dairy) * 100, 100),
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
      <h2 className="text-xl font-semibold mb-4">Nutrition Tracker</h2>
      
      <div className="space-y-4">
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-myplate-vegetable">Vegetables</span>
            <span className="text-sm text-gray-500">{nutrition.vegetable}/{recommended.vegetable} servings</span>
          </div>
          <Progress value={percentages.vegetable} className={cn("h-2 bg-gray-100", "bg-myplate-vegetable")} />
        </div>
        
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-myplate-fruit">Fruits</span>
            <span className="text-sm text-gray-500">{nutrition.fruit}/{recommended.fruit} servings</span>
          </div>
          <Progress value={percentages.fruit} className={cn("h-2 bg-gray-100", "bg-myplate-fruit")} />
        </div>
        
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-myplate-grain">Grains</span>
            <span className="text-sm text-gray-500">{nutrition.grain}/{recommended.grain} servings</span>
          </div>
          <Progress value={percentages.grain} className={cn("h-2 bg-gray-100", "bg-myplate-grain")} />
        </div>
        
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-myplate-protein">Protein</span>
            <span className="text-sm text-gray-500">{nutrition.protein}/{recommended.protein} servings</span>
          </div>
          <Progress value={percentages.protein} className={cn("h-2 bg-gray-100", "bg-myplate-protein")} />
        </div>
        
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-myplate-dairy">Dairy</span>
            <span className="text-sm text-gray-500">{nutrition.dairy}/{recommended.dairy} servings</span>
          </div>
          <Progress value={percentages.dairy} className={cn("h-2 bg-gray-100", "bg-myplate-dairy")} />
        </div>
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-100">
        <div className="flex justify-between mb-2">
          <span className="font-medium">Total Calories:</span>
          <span>{totalCalories} kcal</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Total Items:</span>
          <span>{totalItems}</span>
        </div>
      </div>
      
      <div className="mt-6 bg-blue-50 p-3 rounded-lg">
        <h3 className="text-sm font-semibold text-blue-700 mb-1">Coach's Tip</h3>
        <p className="text-xs text-blue-600">
          {totalItems === 0 ? (
            "Start building your plate! Aim for half vegetables and fruits."
          ) : nutrition.vegetable >= 3 && nutrition.fruit >= 2 ? (
            "Great job! Your plate has plenty of vegetables and fruits."
          ) : nutrition.vegetable < 3 ? (
            "Try adding more vegetables to your plate - aim for at least 3 servings."
          ) : nutrition.fruit < 2 ? (
            "Don't forget your fruits! Aim for at least 2 servings."
          ) : nutrition.grain < 2 ? (
            "Add some whole grains for energy and fiber."
          ) : nutrition.protein < 2 ? (
            "Include lean proteins for muscle recovery and satiety."
          ) : nutrition.dairy < 1 ? (
            "Add a serving of dairy or dairy alternative for calcium."
          ) : (
            "Your plate looks well-balanced! Good job!"
          )}
        </p>
      </div>
    </div>
  );
};

export default NutritionTracker;
