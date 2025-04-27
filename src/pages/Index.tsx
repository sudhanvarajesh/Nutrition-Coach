
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import BuildYourPlate from "@/components/home/BuildYourPlate";
import LearningProgress from "@/components/common/LearningProgress";
import { Button } from "@/components/ui/button";
import { BookOpen, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Sample modules data
const modules = [
  {
    id: "fundamentals",
    title: "Fundamentals - Macro & Micronutrients",
    path: "/fundamentals",
    completed: false,
  },
  {
    id: "food-groups",
    title: "Foods & Food Groups",
    path: "/food-groups",
    completed: false,
  },
  {
    id: "food-label",
    title: "Food Label Lab",
    path: "/food-label",
    completed: false,
  },
  {
    id: "dietary-guidelines",
    title: "Dietary Guidelines",
    path: "/dietary-guidelines",
    completed: false,
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Welcome to Your{" "}
              <span className="text-myplate-protein">Nutrition Coach</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Learn about nutrition fundamentals, understand food groups, and make
              healthier choices—one bite at a time!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-myplate-fruit hover:bg-myplate-fruit/90">
                <Link to="/fundamentals">
                  <BookOpen className="mr-2 h-5 w-5" /> Start Learning
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#build-plate">Build Your Plate <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Your Learning Path</h2>
            <p className="text-gray-600">
              Track your progress through our nutrition curriculum
            </p>
          </div>
          <LearningProgress modules={modules} />
        </div>
      </section>

      {/* Build Your Plate Section */}
      <section id="build-plate" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Create a Balanced Meal</h2>
            <p className="text-gray-600">
              Drag and drop food items to build a nutritious plate
            </p>
          </div>
          <BuildYourPlate />
        </div>
      </section>

      {/* Coach's Tip Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-blue-50 rounded-xl p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-myplate-protein mb-4">
              Why Nutrition Matters
            </h2>
            <div className="prose text-gray-700">
              <p className="mb-4">
                Good nutrition is about more than just eating healthy foods. It's
                about understanding how different nutrients fuel your body and
                support your overall well-being.
              </p>
              <ul className="space-y-2 mb-4">
                <li>
                  <strong>Energy & Performance:</strong> Proper nutrition provides
                  the energy you need for daily activities and exercise.
                </li>
                <li>
                  <strong>Recovery & Growth:</strong> Essential nutrients help repair
                  tissues and support muscle growth after physical activity.
                </li>
                <li>
                  <strong>Disease Prevention:</strong> A balanced diet reduces the
                  risk of chronic diseases like heart disease and type 2 diabetes.
                </li>
                <li>
                  <strong>Mental Wellness:</strong> Nutrition impacts brain health,
                  affecting mood, cognitive function, and mental clarity.
                </li>
              </ul>
              <p>
                Ready to learn more? Start with our Fundamentals module to build a
                strong nutrition foundation!
              </p>
            </div>
            <div className="mt-6 text-center">
              <Button asChild className="bg-myplate-protein hover:bg-myplate-protein/90">
                <Link to="/fundamentals">
                  Start Learning <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
