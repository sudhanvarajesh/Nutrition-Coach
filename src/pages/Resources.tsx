
import Layout from "@/components/layout/Layout";
import { Card } from "@/components/ui/card";
import { ExternalLink, Book } from "lucide-react";

const Resources = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-center">
            Resources & Citations
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-8">
            Authoritative sources and references for nutrition information
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
                <h3 className="text-lg font-semibold mb-4">In This Section</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#official" className="text-myplate-protein hover:underline">
                      Official Guidelines
                    </a>
                  </li>
                  <li>
                    <a href="#educational" className="text-myplate-protein hover:underline">
                      Educational Resources
                    </a>
                  </li>
                  <li>
                    <a href="#news" className="text-myplate-protein hover:underline">
                      Recent News & Research
                    </a>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-medium text-blue-800 mb-2">Citation Format</h3>
                    <p className="text-sm text-gray-700">
                      All sources are cited in APA (American Psychological Association) 7th edition format.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-xl shadow-md p-8">
                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-6">Nutrition Science Resources</h2>
                  <p className="text-gray-600 mb-8">
                    This page compiles authoritative sources for nutrition information used throughout this educational platform. Click on any citation to access the original source.
                  </p>
                </section>

                {/* Official Guidelines */}
                <section id="official" className="mb-12">
                  <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-myplate-protein">
                    <Book className="h-5 w-5" /> Official Guidelines
                  </h2>
                  
                  <div className="space-y-4">
                    <Card className="p-5 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="flex-1">
                          <p className="text-gray-800">
                            U.S. Department of Agriculture & U.S. Department of Health and Human Services. (2020). <em>Dietary Guidelines for Americans, 2020–2025</em>. Retrieved from https://www.dietaryguidelines.gov/
                          </p>
                          <p className="text-sm text-gray-500 mt-1">Dietary Guidelines</p>
                        </div>
                        <a 
                          href="https://www.dietaryguidelines.gov/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      </div>
                    </Card>
                    
                    <Card className="p-5 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="flex-1">
                          <p className="text-gray-800">
                            U.S. Department of Agriculture. (2024). What Is MyPlate? <em>MyPlate.gov</em>. Retrieved from https://www.myplate.gov/what-is-myplate
                          </p>
                          <p className="text-sm text-gray-500 mt-1">MyPlate</p>
                        </div>
                        <a 
                          href="https://www.myplate.gov/what-is-myplate"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      </div>
                    </Card>
                    
                    <Card className="p-5 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="flex-1">
                          <p className="text-gray-800">
                            U.S. Department of Agriculture. (2024). Food Group Gallery. <em>MyPlate.gov</em>. Retrieved from https://www.myplate.gov/food-group-gallery
                          </p>
                          <p className="text-sm text-gray-500 mt-1">MyPlate</p>
                        </div>
                        <a 
                          href="https://www.myplate.gov/food-group-gallery"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      </div>
                    </Card>
                    
                    <Card className="p-5 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="flex-1">
                          <p className="text-gray-800">
                            U.S. Food and Drug Administration. (2023). How to Understand and Use the Nutrition Facts Label. <em>FDA.gov</em>. Retrieved from https://www.fda.gov/food/nutrition-facts-label/how-understand-and-use-nutrition-facts-label
                          </p>
                          <p className="text-sm text-gray-500 mt-1">U.S. Food and Drug Administration</p>
                        </div>
                        <a 
                          href="https://www.fda.gov/food/nutrition-facts-label/how-understand-and-use-nutrition-facts-label"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      </div>
                    </Card>
                    
                    <Card className="p-5 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="flex-1">
                          <p className="text-gray-800">
                            U.S. Food and Drug Administration. (2023). Daily Value on the Nutrition and Supplement Facts Labels. <em>FDA.gov</em>. Retrieved from https://www.fda.gov/food/nutrition-facts-label/daily-value-nutrition-and-supplement-facts-labels
                          </p>
                          <p className="text-sm text-gray-500 mt-1">U.S. Food and Drug Administration</p>
                        </div>
                        <a 
                          href="https://www.fda.gov/food/nutrition-facts-label/daily-value-nutrition-and-supplement-facts-labels"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      </div>
                    </Card>
                  </div>
                </section>

                {/* Educational Resources */}
                <section id="educational" className="mb-12">
                  <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-myplate-protein">
                    <Book className="h-5 w-5" /> Educational Resources
                  </h2>
                  
                  <div className="space-y-4">
                    <Card className="p-5 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="flex-1">
                          <p className="text-gray-800">
                            U.S. Food and Drug Administration. (2023). What's on the Nutrition Facts Label. <em>FDA.gov</em>. Retrieved from https://www.fda.gov/food/nutrition-facts-label/whats-nutrition-facts-label
                          </p>
                          <p className="text-sm text-gray-500 mt-1">U.S. Food and Drug Administration</p>
                        </div>
                        <a 
                          href="https://www.fda.gov/food/nutrition-facts-label/whats-nutrition-facts-label"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      </div>
                    </Card>
                    
                    <Card className="p-5 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="flex-1">
                          <p className="text-gray-800">
                            U.S. Department of Agriculture. (2022). Your MyPlate Plan. <em>MyPlate.gov</em>. Retrieved from https://www.myplate.gov/myplate-plan
                          </p>
                          <p className="text-sm text-gray-500 mt-1">MyPlate</p>
                        </div>
                        <a 
                          href="https://www.myplate.gov/myplate-plan"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      </div>
                    </Card>
                    
                    <Card className="p-5 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="flex-1">
                          <p className="text-gray-800">
                            U.S. Department of Agriculture. (2015). Back to Basics: All About MyPlate Food Groups. <em>USDA.gov</em>.
                          </p>
                          <p className="text-sm text-gray-500 mt-1">USDA</p>
                        </div>
                        <a 
                          href="https://www.usda.gov/media/blog/2017/09/26/back-basics-all-about-myplate-food-groups"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      </div>
                    </Card>
                    
                    <Card className="p-5 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="flex-1">
                          <p className="text-gray-800">
                            American Heart Association. (2023). Understanding Food Nutrition Labels. <em>Heart.org</em>. Retrieved from https://www.heart.org/healthy-living/healthy-eating/eat-smart/nutrition-basics/understanding-food-nutrition-labels
                          </p>
                          <p className="text-sm text-gray-500 mt-1">www.heart.org</p>
                        </div>
                        <a 
                          href="https://www.heart.org/healthy-living/healthy-eating/eat-smart/nutrition-basics/understanding-food-nutrition-labels"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      </div>
                    </Card>
                    
                    <Card className="p-5 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="flex-1">
                          <p className="text-gray-800">
                            U.S. Department of Health and Human Services. (2024). Top 10 Things You Need to Know About the Dietary Guidelines for Americans. <em>DietaryGuidelines.gov</em>.
                          </p>
                          <p className="text-sm text-gray-500 mt-1">Dietary Guidelines</p>
                        </div>
                        <a 
                          href="https://www.dietaryguidelines.gov/resources/2020-2025-dietary-guidelines-online-materials"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      </div>
                    </Card>
                  </div>
                </section>

                {/* News & Research */}
                <section id="news" className="mb-12">
                  <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-myplate-protein">
                    <Book className="h-5 w-5" /> Recent News & Research
                  </h2>
                  
                  <div className="space-y-4">
                    <Card className="p-5 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="flex-1">
                          <p className="text-gray-800">
                            Center for Science in the Public Interest. (2020). CSPI Key Takeaways: 2020-2025 Dietary Guidelines. <em>CSPINet.org</em>.
                          </p>
                          <p className="text-sm text-gray-500 mt-1">CSPI</p>
                        </div>
                        <a 
                          href="https://www.cspinet.org/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      </div>
                    </Card>
                    
                    <Card className="p-5 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="flex-1">
                          <p className="text-gray-800">
                            National Academies of Sciences, Engineering, and Medicine. (2022). Evaluating the Process to Develop the Dietary Guidelines for Americans, 2020–2025: A Midcourse Report. <em>NASEM.edu</em>.
                          </p>
                          <p className="text-sm text-gray-500 mt-1">Wikipedia</p>
                        </div>
                        <a 
                          href="https://en.wikipedia.org/wiki/Dietary_Guidelines_for_Americans"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      </div>
                    </Card>
                    
                    <Card className="p-5 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="flex-1">
                          <p className="text-gray-800">
                            People. (2024). FDA Proposes Moving Nutrition Info to Front of Boxes. <em>People.com</em>.
                          </p>
                          <p className="text-sm text-gray-500 mt-1">People.com</p>
                        </div>
                        <a 
                          href="https://people.com/food/fda-proposes-rule-nutrition-info-front-food-packages-7566958"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      </div>
                    </Card>
                    
                    <Card className="p-5 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="flex-1">
                          <p className="text-gray-800">
                            AP News. (2024). More Beans and Less Red Meat: Nutrition Experts Weigh In. <em>APNews.com</em>.
                          </p>
                          <p className="text-sm text-gray-500 mt-1">AP News</p>
                        </div>
                        <a 
                          href="https://apnews.com/hub/health"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      </div>
                    </Card>
                    
                    <Card className="p-5 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="flex-1">
                          <p className="text-gray-800">
                            Business Insider. (2025). Focus on Fiber Over Protein. <em>BusinessInsider.com</em>.
                          </p>
                          <p className="text-sm text-gray-500 mt-1">Business Insider</p>
                        </div>
                        <a 
                          href="https://www.businessinsider.com/health"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      </div>
                    </Card>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resources;
