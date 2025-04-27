
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Quiz, { QuizQuestion } from "@/components/common/Quiz";
import { Calendar, Utensils, LayoutDashboard, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const dietaryGuidelinesQuizQuestions: QuizQuestion[] = [
  {
    id: "dietary-guidelines-1",
    question: "The Dietary Guidelines emphasize overall ______ rather than individual nutrients.",
    options: ["recipes", "meals", "dietary patterns", "supplements"],
    correctAnswer: "dietary patterns"
  },
  {
    id: "dietary-guidelines-2",
    question: "Which phrase describes customization of the Guidelines to cultural preferences?",
    options: [
      "Your Plate, Your Way",
      "Food for All",
      "Eat Healthy Your Way",
      "Global Nutrition"
    ],
    correctAnswer: "Eat Healthy Your Way"
  },
  {
    id: "dietary-guidelines-3",
    question: "What is the recommended daily limit for sodium intake?",
    options: ["≤1,500 mg", "≤2,300 mg", "≤3,000 mg", "≤3,500 mg"],
    correctAnswer: "≤2,300 mg"
  },
  {
    id: "dietary-guidelines-4",
    question: "What percentage of daily calories should come from added sugars?",
    options: ["<5%", "<10%", "<15%", "<20%"],
    correctAnswer: "<10%"
  }
];

const DietaryGuidelines = () => {
  const { toast } = useToast();
  
  const handleQuizComplete = (score: number, totalQuestions: number) => {
    console.log(`Dietary Guidelines Quiz completed! Score: ${score}/${totalQuestions}`);
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
      <section className="bg-gradient-to-b from-purple-50 to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-center">
            Dietary Guidelines
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-8">
            Understanding the 2020-2025 Dietary Guidelines for Americans
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
                    <a href="#guidelines" className="text-myplate-protein hover:underline">
                      The Four Pillars
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
                        href="https://www.dietaryguidelines.gov/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Dietary Guidelines for Americans
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.dietaryguidelines.gov/resources/2020-2025-dietary-guidelines-online-materials"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Online Materials
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
                  <h2 className="text-2xl font-bold mb-4">Dietary Guidelines for Americans (2020–2025)</h2>
                  <div className="prose max-w-none">
                    <p className="mb-4">
                      The Dietary Guidelines for Americans provide evidence-based nutrition guidance to promote health and prevent chronic disease. Updated every five years, they represent the most current nutritional science and form the basis for federal nutrition policy and programs.
                    </p>
                    <p>
                      The 2020-2025 edition focuses on four key recommendations that encourage eating patterns that support health across the lifespan.
                    </p>
                  </div>
                </section>

                <section id="guidelines" className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">The Four Pillars</h2>
                  
                  <div className="space-y-6">
                    {/* Pillar 1 */}
                    <Card className="overflow-hidden">
                      <div className="flex flex-col md:flex-row">
                        <div className="bg-purple-100 p-6 flex items-center justify-center md:w-1/4">
                          <Calendar className="h-12 w-12 text-purple-600" />
                        </div>
                        <div className="p-6 md:w-3/4">
                          <h3 className="font-bold text-xl mb-2">Follow a Healthy Dietary Pattern at Every Life Stage</h3>
                          <p className="text-gray-700 mb-4">
                            From infancy through older adulthood, patterns matter more than single foods.
                          </p>
                          <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                            <p className="text-sm font-medium">Practical Tip</p>
                            <p className="text-sm mt-1">For toddlers, avoid juice; offer whole fruits instead.</p>
                          </div>
                        </div>
                      </div>
                    </Card>

                    {/* Pillar 2 */}
                    <Card className="overflow-hidden">
                      <div className="flex flex-col md:flex-row">
                        <div className="bg-purple-100 p-6 flex items-center justify-center md:w-1/4">
                          <Utensils className="h-12 w-12 text-purple-600" />
                        </div>
                        <div className="p-6 md:w-3/4">
                          <h3 className="font-bold text-xl mb-2">Customize and Enjoy Nutrient-Dense Foods & Beverages</h3>
                          <p className="text-gray-700 mb-4">
                            Fit personal preferences, cultural traditions, and budget when choosing veggies, fruits, grains, protein, dairy.
                          </p>
                          <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                            <p className="text-sm font-medium">Practical Tip</p>
                            <p className="text-sm mt-1">Spice familiar dishes with new herbs to boost veggie intake.</p>
                          </div>
                        </div>
                      </div>
                    </Card>

                    {/* Pillar 3 */}
                    <Card className="overflow-hidden">
                      <div className="flex flex-col md:flex-row">
                        <div className="bg-purple-100 p-6 flex items-center justify-center md:w-1/4">
                          <LayoutDashboard className="h-12 w-12 text-purple-600" />
                        </div>
                        <div className="p-6 md:w-3/4">
                          <h3 className="font-bold text-xl mb-2">Meet Food-Group Needs Within Calorie Limits</h3>
                          <p className="text-gray-700 mb-4">
                            Balance calories with food-group targets: vegetables, fruits, grains, protein, dairy.
                          </p>
                          <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                            <p className="text-sm font-medium">Practical Tip</p>
                            <p className="text-sm mt-1">Use MyPlate visuals to portion meals.</p>
                          </div>
                        </div>
                      </div>
                    </Card>

                    {/* Pillar 4 */}
                    <Card className="overflow-hidden">
                      <div className="flex flex-col md:flex-row">
                        <div className="bg-purple-100 p-6 flex items-center justify-center md:w-1/4">
                          <AlertCircle className="h-12 w-12 text-purple-600" />
                        </div>
                        <div className="p-6 md:w-3/4">
                          <h3 className="font-bold text-xl mb-2">Limit Added Sugars, Saturated Fat & Sodium</h3>
                          <p className="text-gray-700 mb-4">
                            Added sugars &lt; 10% of calories; saturated fat &lt; 10% of calories; sodium ≤ 2,300 mg/day.
                          </p>
                          <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                            <p className="text-sm font-medium">Practical Tip</p>
                            <p className="text-sm mt-1">Swap soda for sparkling water with fruit slices.</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </section>

                <section id="quiz" className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">Knowledge Check</h2>
                  <Quiz
                    title="Dietary Guidelines Quiz"
                    description="Test your knowledge of the Dietary Guidelines for Americans"
                    questions={dietaryGuidelinesQuizQuestions}
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

export default DietaryGuidelines;
