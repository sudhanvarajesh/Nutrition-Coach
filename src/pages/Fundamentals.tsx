import { useState } from "react";
import Layout from "@/components/layout/Layout";
import Quiz, { QuizQuestion } from "@/components/common/Quiz";
import { Button } from "@/components/ui/button";
import { Calculator, Award } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const fundamentalsQuizQuestions: QuizQuestion[] = [
  {
    id: "q1",
    question: "How many kilocalories per gram do fats provide?",
    options: ["A. 4 kcal/g", "B. 9 kcal/g", "C. 7 kcal/g", "D. 2 kcal/g"],
    correctAnswer: "B. 9 kcal/g",
  },
  {
    id: "q2",
    question: "What percentage of total calories should come from protein for adults ages 19–30?",
    options: ["A. 5–15%", "B. 10–35%", "C. 35–50%", "D. 45–65%"],
    correctAnswer: "B. 10–35%",
  },
  {
    id: "q3",
    question: "Which of these is a water-soluble vitamin?",
    options: ["A. Vitamin A", "B. Vitamin D", "C. Vitamin C", "D. Vitamin K"],
    correctAnswer: "C. Vitamin C",
  },
  {
    id: "q4",
    question: "Calcium belongs to which mineral category?",
    options: ["A. Trace minerals", "B. Electrolytes", "C. Major minerals", "D. Ultra-trace minerals"],
    correctAnswer: "C. Major minerals",
  },
  {
    id: "q5",
    question: "What is the recommended maximum daily sodium intake?",
    options: ["A. 1,500 mg", "B. 2,300 mg", "C. 3,000 mg", "D. 4,000 mg"],
    correctAnswer: "B. 2,300 mg",
  },
];

const Fundamentals = () => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const { toast } = useToast();
  const [weight, setWeight] = useState<string>("");
  const [showMacros, setShowMacros] = useState(false);
  const [macros, setMacros] = useState({
    calories: 0,
    protein: { min: 0, max: 0 },
    carbs: { min: 0, max: 0 },
    fats: { min: 0, max: 0 },
  });

  const handleQuizComplete = (score: number, totalQuestions: number) => {
    setQuizCompleted(true);
    setQuizScore(score);
    
    if (score / totalQuestions >= 0.7) {
      toast({
        title: "Module Completed!",
        description: `You scored ${score}/${totalQuestions} on the Fundamentals quiz.`,
        duration: 5000,
      });
    } else {
      toast({
        title: "Keep Learning!",
        description: `You scored ${score}/${totalQuestions}. Review the material and try again.`,
        duration: 5000,
      });
    }
  };

  const calculateMacros = () => {
    if (!weight || isNaN(Number(weight)) || Number(weight) <= 0) {
      toast({
        title: "Invalid Weight",
        description: "Please enter a valid weight in kilograms.",
        variant: "destructive",
      });
      return;
    }

    const weightKg = Number(weight);
    const calories = weightKg * 30; // Simple estimate based on weight

    setMacros({
      calories,
      protein: {
        min: Math.round((calories * 0.1) / 4), // 10% of calories from protein
        max: Math.round((calories * 0.35) / 4), // 35% of calories from protein
      },
      carbs: {
        min: Math.round((calories * 0.45) / 4), // 45% of calories from carbs
        max: Math.round((calories * 0.65) / 4), // 65% of calories from carbs
      },
      fats: {
        min: Math.round((calories * 0.2) / 9), // 20% of calories from fats
        max: Math.round((calories * 0.35) / 9), // 35% of calories from fats
      },
    });

    setShowMacros(true);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-center">
            Fundamentals - Macro & Micronutrients
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-8">
            Learn the essential building blocks of nutrition and how they fuel your body.
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
                    <a href="#key-concepts" className="text-myplate-protein hover:underline">
                      Key Concepts
                    </a>
                  </li>
                  <li>
                    <a href="#macros" className="text-myplate-protein hover:underline">
                      Macronutrients
                    </a>
                  </li>
                  <li>
                    <a href="#micros" className="text-myplate-protein hover:underline">
                      Micronutrients
                    </a>
                  </li>
                  <li>
                    <a href="#calculator" className="text-myplate-protein hover:underline">
                      Macro Calculator
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
                        href="https://www.merckmanuals.com/home/disorders-of-nutrition/overview-of-nutrition/carbohydrates-proteins-and-fats"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline flex items-center"
                      >
                        Merck Manuals - Nutrition Overview
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://brainly.com/question/15160445"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Brainly - Nutrient Distribution
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://en.wikipedia.org/wiki/Micronutrient"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Wikipedia - Micronutrients
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-xl shadow-md p-8">
                <section id="key-concepts" className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">Key Concepts</h2>
                  <div className="prose max-w-none">
                    <p>
                      Nutrition science divides the components of food into two main categories: 
                      macronutrients, which we need in large amounts, and micronutrients, which 
                      we need in smaller amounts but are equally essential for health.
                    </p>
                  </div>
                </section>

                <section id="macros" className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">Macronutrients</h2>
                  <div className="prose max-w-none">
                    <p>
                      Macronutrients provide energy (calories) and are the building blocks of our diet.
                      There are three main types:
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 my-6">
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                        <h3 className="font-semibold text-myplate-protein mb-2">Carbohydrates</h3>
                        <p className="text-sm mb-2">Energy density: <strong>4 kcal/g</strong></p>
                        <p className="text-sm">Recommended intake: <strong>45-65%</strong> of daily calories</p>
                        <p className="text-sm mt-2">
                          Found in grains, fruits, vegetables, and dairy products. Primary source of quick energy.
                        </p>
                      </div>
                      
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                        <h3 className="font-semibold text-myplate-protein mb-2">Proteins</h3>
                        <p className="text-sm mb-2">Energy density: <strong>4 kcal/g</strong></p>
                        <p className="text-sm">Recommended intake: <strong>10-35%</strong> of daily calories</p>
                        <p className="text-sm mt-2">
                          Found in meat, fish, eggs, dairy, legumes, and some grains. Essential for tissue growth and repair.
                        </p>
                      </div>
                      
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                        <h3 className="font-semibold text-myplate-protein mb-2">Fats</h3>
                        <p className="text-sm mb-2">Energy density: <strong>9 kcal/g</strong></p>
                        <p className="text-sm">Recommended intake: <strong>20-35%</strong> of daily calories</p>
                        <p className="text-sm mt-2">
                          Found in oils, butter, nuts, seeds, and animal products. Important for cell structure and nutrient absorption.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="micros" className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">Micronutrients</h2>
                  <div className="prose max-w-none">
                    <p>
                      Micronutrients are required in smaller amounts but are vital for health, disease prevention, and proper functioning.
                    </p>

                    <h3 className="font-semibold mt-6 mb-3">Vitamins</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                        <h4 className="font-medium text-myplate-protein">Water-soluble Vitamins</h4>
                        <p className="text-sm mt-1">
                          B vitamins and Vitamin C; not stored in the body for long periods, excess amounts are excreted.
                        </p>
                      </div>
                      
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                        <h4 className="font-medium text-myplate-protein">Fat-soluble Vitamins</h4>
                        <p className="text-sm mt-1">
                          Vitamins A, D, E, and K; stored in fatty tissue and the liver for longer periods.
                        </p>
                      </div>
                    </div>

                    <h3 className="font-semibold mt-6 mb-3">Minerals</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                        <h4 className="font-medium text-myplate-protein">Major Minerals</h4>
                        <p className="text-sm mt-1">
                          Calcium, phosphorus, magnesium, sodium, potassium, chloride, and sulfur; needed in larger amounts.
                        </p>
                      </div>
                      
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                        <h4 className="font-medium text-myplate-protein">Trace Minerals</h4>
                        <p className="text-sm mt-1">
                          Iron, zinc, copper, manganese, selenium, and iodine; needed in smaller amounts.
                        </p>
                      </div>
                    </div>

                    <div className="bg-red-50 p-4 rounded-lg border border-red-100 mt-6">
                      <h4 className="font-medium text-myplate-fruit">Important Note on Sodium</h4>
                      <p className="text-sm mt-1">
                        The recommended daily limit for sodium is <strong>≤2,300 mg/day</strong> to reduce hypertension risk.
                        Most Americans consume far more than this amount, primarily from processed foods.
                      </p>
                    </div>

                    <div className="bg-myplate-dairy bg-opacity-10 p-4 rounded-lg border border-myplate-dairy border-opacity-20 mt-6">
                      <h4 className="font-medium text-myplate-dairy">The Role of Water</h4>
                      <p className="text-sm mt-1">
                        While not technically a nutrient, water is essential for nutrient transport, temperature regulation, and waste removal.
                        The average adult body is approximately 60% water, emphasizing its importance in nutrition.
                      </p>
                    </div>
                  </div>
                </section>

                <section id="calculator" className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">Macro Calculator</h2>
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <p className="mb-4">
                      Enter your weight to calculate your recommended daily macronutrient intake:
                    </p>
                    
                    <div className="flex flex-wrap gap-4 items-end mb-6">
                      <div>
                        <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-1">
                          Weight (kg)
                        </label>
                        <input
                          type="number"
                          id="weight"
                          value={weight}
                          onChange={(e) => setWeight(e.target.value)}
                          className="p-2 border border-gray-300 rounded w-24"
                          min="20"
                          max="200"
                        />
                      </div>
                      <Button onClick={calculateMacros} className="flex items-center">
                        <Calculator className="mr-2 h-4 w-4" /> Calculate
                      </Button>
                    </div>
                    
                    {showMacros && (
                      <div className="animate-fade-in">
                        <h3 className="font-semibold mb-3">Your Recommended Daily Intake:</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <p className="font-medium">Estimated Daily Calories</p>
                            <p className="text-2xl font-bold text-myplate-protein">
                              {macros.calories} kcal
                            </p>
                          </div>
                          
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <p className="font-medium">Protein (10-35%)</p>
                            <p className="text-lg font-bold text-myplate-protein">
                              {macros.protein.min} - {macros.protein.max} g
                            </p>
                          </div>
                          
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <p className="font-medium">Carbohydrates (45-65%)</p>
                            <p className="text-lg font-bold text-myplate-protein">
                              {macros.carbs.min} - {macros.carbs.max} g
                            </p>
                          </div>
                          
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <p className="font-medium">Fats (20-35%)</p>
                            <p className="text-lg font-bold text-myplate-protein">
                              {macros.fats.min} - {macros.fats.max} g
                            </p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500 mt-4">
                          Note: These are general estimates. Individual needs may vary based on age, sex, activity level, and health goals.
                        </p>
                      </div>
                    )}
                  </div>
                </section>

                <section id="quiz" className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">Knowledge Check</h2>
                  
                  {!showQuiz && !quizCompleted && (
                    <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                      <p className="mb-6">
                        Ready to test your knowledge? Complete this quiz to check your understanding of nutrition fundamentals.
                      </p>
                      <Button 
                        onClick={() => setShowQuiz(true)}
                        className="bg-myplate-fruit hover:bg-myplate-fruit/90"
                      >
                        Start Quiz
                      </Button>
                    </div>
                  )}
                  
                  {showQuiz && (
                    <Quiz
                      title="Fundamentals Quiz"
                      questions={fundamentalsQuizQuestions}
                      onComplete={handleQuizComplete}
                    />
                  )}
                  
                  {quizCompleted && quizScore !== null && quizScore / fundamentalsQuizQuestions.length >= 0.7 && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                      <div className="flex justify-center mb-4">
                        <Award className="h-16 w-16 text-green-500" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Module Complete!</h3>
                      <p className="mb-6">
                        Congratulations! You've successfully completed the Fundamentals module with a score of {quizScore}/{fundamentalsQuizQuestions.length}.
                      </p>
                      <div className="flex justify-center">
                        <Button 
                          asChild
                          className="bg-myplate-protein hover:bg-myplate-protein/90"
                        >
                          <Link to="/food-groups">
                            Continue to Foods & Food Groups
                          </Link>
                        </Button>
                      </div>
                    </div>
                  )}
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Fundamentals;
