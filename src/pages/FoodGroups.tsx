
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Quiz, { QuizQuestion } from "@/components/common/Quiz";
import { GridIcon, Carrot, Apple, Wheat, Beef, Milk } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const foodGroupsQuizQuestions: QuizQuestion[] = [
  {
    id: "food-groups-1",
    question: "Which two MyPlate food groups together should cover half your plate?",
    options: [
      "Grains + Protein",
      "Dairy + Protein",
      "Fruits + Vegetables",
      "Grains + Dairy"
    ],
    correctAnswer: "Fruits + Vegetables"
  },
  {
    id: "food-groups-2",
    question: "At least what fraction of your grain servings should be whole grains?",
    options: ["1/4", "1/3", "1/2", "3/4"],
    correctAnswer: "1/2"
  },
  {
    id: "food-groups-3",
    question: "How much leafy greens equals 1 cup of vegetables?",
    options: ["1 cup", "2 cups", "3 cups", "4 cups"],
    correctAnswer: "2 cups"
  },
  {
    id: "food-groups-4",
    question: "What's one ounce-equivalent of protein from beans?",
    options: ["1/4 cup cooked", "1/2 cup cooked", "1 cup cooked", "2 tablespoons"],
    correctAnswer: "1/4 cup cooked"
  }
];

const FoodGroups = () => {
  const { toast } = useToast();
  
  const handleQuizComplete = (score: number, totalQuestions: number) => {
    console.log(`Food Groups Quiz completed! Score: ${score}/${totalQuestions}`);
    const percentage = Math.round((score / totalQuestions) * 100);
    
    toast({
      title: "Quiz Result",
      description: `You scored ${score} out of ${totalQuestions} (${percentage}%)`,
      variant: percentage >= 70 ? "default" : "destructive",
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-center">
            Foods & Food Groups
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-8">
            Understanding the five food groups and how to create balanced meals
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Sidebar with Table of Contents */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
                <h3 className="text-lg font-semibold mb-4">In This Section</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#overview" className="text-myplate-protein hover:underline">
                      Overview
                    </a>
                  </li>
                  <li>
                    <a href="#food-groups" className="text-myplate-protein hover:underline">
                      The Five Food Groups
                    </a>
                  </li>
                  <li>
                    <a href="#quiz" className="text-myplate-protein hover:underline">
                      Knowledge Check
                    </a>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-semibold mb-4">Resources</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a
                        href="https://www.myplate.gov/what-is-myplate"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        What Is MyPlate?
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.myplate.gov/food-group-gallery"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        MyPlate Food Group Gallery
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-xl shadow-md p-8">
                <section id="overview" className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">Overview</h2>
                  <div className="prose max-w-none">
                    <p className="mb-4">
                      MyPlate is a simple visual guide to help you build healthy meals. It encourages you to make half your plate fruits and vegetables, add lean protein, include whole grains, and pair with dairy.
                    </p>
                    <p>
                      Understanding the five food groups and their recommended portions helps you create balanced meals that provide the nutrients your body needs.
                    </p>
                  </div>
                </section>

                <section id="food-groups" className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">The Five Food Groups</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6 my-6">
                    {/* Fruits Card */}
                    <Card className="overflow-hidden">
                      <CardHeader className="bg-myplate-fruit bg-opacity-20 flex flex-row items-center gap-4">
                        <div className="bg-myplate-fruit text-white p-3 rounded-lg">
                          <Apple className="h-6 w-6" />
                        </div>
                        <CardTitle>Fruits</CardTitle>
                      </CardHeader>
                      <CardContent className="p-6">
                        <ul className="list-disc list-inside space-y-2 text-sm mb-4">
                          <li>Make half your plate fruits & vegetables</li>
                          <li>Focus on whole fruits (not juice)</li>
                          <li>1 cup = 1 cup raw/frozen/canned or ½ cup dried or 1 cup 100% juice</li>
                        </ul>
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <h4 className="font-medium text-sm mb-2">Examples (equivalents):</h4>
                          <ul className="text-sm space-y-1">
                            <li>Apple (1 cup sliced)</li>
                            <li>Banana (1 medium)</li>
                            <li>Berries (1 cup)</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Vegetables Card */}
                    <Card className="overflow-hidden">
                      <CardHeader className="bg-myplate-vegetable bg-opacity-20 flex flex-row items-center gap-4">
                        <div className="bg-myplate-vegetable text-white p-3 rounded-lg">
                          <Carrot className="h-6 w-6" />
                        </div>
                        <CardTitle>Vegetables</CardTitle>
                      </CardHeader>
                      <CardContent className="p-6">
                        <ul className="list-disc list-inside space-y-2 text-sm mb-4">
                          <li>Fill half your plate with vegetables</li>
                          <li>Include dark-green, red/orange, legumes</li>
                          <li>1 cup = raw or cooked; 2 cups leafy greens</li>
                        </ul>
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <h4 className="font-medium text-sm mb-2">Examples (equivalents):</h4>
                          <ul className="text-sm space-y-1">
                            <li>Broccoli (1 cup)</li>
                            <li>Spinach (2 cups)</li>
                            <li>Carrots (1 cup)</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Grains Card */}
                    <Card className="overflow-hidden">
                      <CardHeader className="bg-myplate-grain bg-opacity-20 flex flex-row items-center gap-4">
                        <div className="bg-myplate-grain text-white p-3 rounded-lg">
                          <Wheat className="h-6 w-6" />
                        </div>
                        <CardTitle>Grains</CardTitle>
                      </CardHeader>
                      <CardContent className="p-6">
                        <ul className="list-disc list-inside space-y-2 text-sm mb-4">
                          <li>At least half your grains whole grains</li>
                          <li>1 oz-eq = 1 slice bread or ½ cup cooked rice/pasta</li>
                          <li>Limit refined grains</li>
                        </ul>
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <h4 className="font-medium text-sm mb-2">Examples (equivalents):</h4>
                          <ul className="text-sm space-y-1">
                            <li>Whole-grain bread (1 slice)</li>
                            <li>Brown rice (½ cup)</li>
                            <li>Oatmeal (½ cup)</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Protein Card */}
                    <Card className="overflow-hidden">
                      <CardHeader className="bg-myplate-protein bg-opacity-20 flex flex-row items-center gap-4">
                        <div className="bg-myplate-protein text-white p-3 rounded-lg">
                          <Beef className="h-6 w-6" />
                        </div>
                        <CardTitle>Protein</CardTitle>
                      </CardHeader>
                      <CardContent className="p-6">
                        <ul className="list-disc list-inside space-y-2 text-sm mb-4">
                          <li>Vary protein choices: seafood, poultry, eggs, legumes, nuts</li>
                          <li>1 oz-eq = 1 oz cooked meat or ¼ cup cooked beans</li>
                          <li>Choose lean or plant-based</li>
                        </ul>
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <h4 className="font-medium text-sm mb-2">Examples (equivalents):</h4>
                          <ul className="text-sm space-y-1">
                            <li>Chicken breast (1 oz)</li>
                            <li>Beans (¼ cup)</li>
                            <li>Tofu (1 oz)</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Dairy Card */}
                    <Card className="overflow-hidden md:col-span-2">
                      <CardHeader className="bg-myplate-dairy bg-opacity-20 flex flex-row items-center gap-4">
                        <div className="bg-myplate-dairy text-white p-3 rounded-lg">
                          <Milk className="h-6 w-6" />
                        </div>
                        <CardTitle>Dairy</CardTitle>
                      </CardHeader>
                      <CardContent className="p-6">
                        <ul className="list-disc list-inside space-y-2 text-sm mb-4">
                          <li>Choose fat-free or low-fat milk, yogurt, fortified soy</li>
                          <li>1 cup milk or yogurt = 1 cup-eq</li>
                          <li>Provides calcium & vitamin D</li>
                        </ul>
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <h4 className="font-medium text-sm mb-2">Examples (equivalents):</h4>
                          <ul className="text-sm space-y-1">
                            <li>Skim milk (1 cup)</li>
                            <li>Yogurt (1 cup)</li>
                            <li>Fortified soy milk (1 cup)</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                <section id="quiz" className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">Knowledge Check</h2>
                  <Quiz
                    title="Food Groups Quiz"
                    description="Test your knowledge of the different food groups"
                    questions={foodGroupsQuizQuestions}
                    onComplete={handleQuizComplete}
                  />
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FoodGroups;
