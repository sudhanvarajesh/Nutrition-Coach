
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Quiz, { QuizQuestion } from "@/components/common/Quiz";
import { FileText, Info, AlertTriangle, Check, ListChecks } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const foodLabelQuizQuestions: QuizQuestion[] = [
  {
    id: "food-label-1",
    question: "What does '%DV' on a Nutrition Facts label stand for?",
    options: [
      "Percent Daily Vitamin",
      "Percent Daily Value",
      "Portion-to-Daily Volume",
      "Protein-Density Value"
    ],
    correctAnswer: "Percent Daily Value"
  },
  {
    id: "food-label-2",
    question: "The %DV on a label is calculated based on how many kilocalories per day?",
    options: [
      "1,500 kcal",
      "2,000 kcal",
      "2,500 kcal",
      "3,000 kcal"
    ],
    correctAnswer: "2,000 kcal"
  },
  {
    id: "food-label-3",
    question: "Which of these nutrients should you try to limit?",
    options: [
      "Dietary Fiber",
      "Vitamin D",
      "Added Sugars",
      "Potassium"
    ],
    correctAnswer: "Added Sugars"
  },
  {
    id: "food-label-4",
    question: "In the ingredients list, items are ordered by:",
    options: [
      "Alphabetical order",
      "Most nutritious to least nutritious",
      "Weight (heaviest to lightest)",
      "FDA importance rating"
    ],
    correctAnswer: "Weight (heaviest to lightest)"
  }
];

const FoodLabel = () => {
  const { toast } = useToast();
  
  const handleQuizComplete = (score: number, totalQuestions: number) => {
    console.log(`Food Label Quiz completed! Score: ${score}/${totalQuestions}`);
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
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-center">
            Food Label Lab
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-8">
            Learn how to read and interpret nutrition facts labels to make informed food choices
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
                    <a href="#label-facts" className="text-myplate-protein hover:underline">
                      Label Facts
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
                        href="https://www.fda.gov/food/nutrition-facts-label/how-understand-and-use-nutrition-facts-label"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        FDA: How to Use Nutrition Facts Labels
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.heart.org/healthy-living/healthy-eating/eat-smart/nutrition-basics/understanding-food-nutrition-labels"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        AHA: Understanding Food Nutrition Labels
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
                  <h2 className="text-2xl font-bold mb-4">Understanding Food Labels</h2>
                  <div className="prose max-w-none">
                    <p className="mb-4">
                      The Nutrition Facts label is your key to making informed food choices. The FDA requires these labels on most packaged foods and beverages, providing essential information about a food's nutrient content and how it fits into your daily diet.
                    </p>
                    <p>
                      Learn to interpret these labels to compare products, choose foods with more beneficial nutrients, and limit those with less beneficial nutrients.
                    </p>
                  </div>
                </section>

                <section id="label-facts" className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">Label Facts</h2>
                  
                  <div className="space-y-6">
                    {/* Serving Size Card */}
                    <Card className="overflow-hidden">
                      <CardHeader className="bg-blue-50 flex items-start gap-4">
                        <div className="bg-blue-500 text-white p-3 rounded-lg mt-1">
                          <FileText className="h-6 w-6" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">Serving Size vs. Servings per Container</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="p-6">
                        <p className="text-gray-700">
                          All nutrient information is per serving; if you eat 2 servings, you double calories & nutrients.
                        </p>
                        <div className="mt-4 bg-blue-50 p-4 rounded-lg border border-blue-100">
                          <p className="text-sm font-medium">Label Hotspot</p>
                          <p className="text-sm mt-1">Look at the top of the label for "Serving Size" and "Servings Per Container." Always check how many servings you're actually consuming.</p>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Calories & DV Card */}
                    <Card className="overflow-hidden">
                      <CardHeader className="bg-blue-50 flex items-start gap-4">
                        <div className="bg-blue-500 text-white p-3 rounded-lg mt-1">
                          <Info className="h-6 w-6" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">Calories & % Daily Value (%DV)</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="p-6">
                        <p className="text-gray-700">
                          %DV shows how a nutrient in one serving contributes to a 2,000 kcal/day diet.
                        </p>
                        <div className="mt-4 bg-blue-50 p-4 rounded-lg border border-blue-100">
                          <p className="text-sm font-medium">Label Hotspot</p>
                          <p className="text-sm mt-1">The %DV helps you determine if a serving of food is high or low in a nutrient. 5% DV or less is low, 20% DV or more is high.</p>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Nutrients to Limit Card */}
                    <Card className="overflow-hidden">
                      <CardHeader className="bg-blue-50 flex items-start gap-4">
                        <div className="bg-blue-500 text-white p-3 rounded-lg mt-1">
                          <AlertTriangle className="h-6 w-6" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">Nutrients to Limit</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="p-6">
                        <p className="text-gray-700">
                          Saturated fat, sodium, and added sugars are listed because excess intake raises chronic-disease risk.
                        </p>
                        <div className="mt-4 bg-blue-50 p-4 rounded-lg border border-blue-100">
                          <p className="text-sm font-medium">Label Hotspot</p>
                          <p className="text-sm mt-1">Look for foods with lower %DV for saturated fat, sodium, and added sugars. The FDA recommends keeping these nutrients below 100% DV each day.</p>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Nutrients to Get Enough Of Card */}
                    <Card className="overflow-hidden">
                      <CardHeader className="bg-blue-50 flex items-start gap-4">
                        <div className="bg-blue-500 text-white p-3 rounded-lg mt-1">
                          <Check className="h-6 w-6" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">Nutrients to Get Enough Of</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="p-6">
                        <p className="text-gray-700">
                          Fiber, vitamins D, Ca, Fe, K are under "Get Enough" to encourage adequate intake.
                        </p>
                        <div className="mt-4 bg-blue-50 p-4 rounded-lg border border-blue-100">
                          <p className="text-sm font-medium">Label Hotspot</p>
                          <p className="text-sm mt-1">Look for foods with higher %DV for dietary fiber, vitamin D, calcium, iron, and potassium. These are nutrients many Americans don't get enough of.</p>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Ingredients List Card */}
                    <Card className="overflow-hidden">
                      <CardHeader className="bg-blue-50 flex items-start gap-4">
                        <div className="bg-blue-500 text-white p-3 rounded-lg mt-1">
                          <ListChecks className="h-6 w-6" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">Ingredients List Scan</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="p-6">
                        <p className="text-gray-700">
                          Ingredients are listed by weight; look for whole-food first, avoid added sugars/high-sodium ingredients.
                        </p>
                        <div className="mt-4 bg-blue-50 p-4 rounded-lg border border-blue-100">
                          <p className="text-sm font-medium">Label Hotspot</p>
                          <p className="text-sm mt-1">The first ingredient is what the product contains the most of. Look for products with whole foods like "whole wheat flour" instead of "enriched flour" as the first ingredient.</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                <section id="quiz" className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">Knowledge Check</h2>
                  <Quiz
                    title="Food Label Quiz"
                    description="Test your knowledge of food labels"
                    questions={foodLabelQuizQuestions}
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

export default FoodLabel;
