
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-6xl font-bold text-myplate-protein mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-6">
            Oops! This page seems to be missing from our nutrition guide.
          </p>
          <Button asChild className="bg-myplate-fruit hover:bg-myplate-fruit/90">
            <Link to="/" className="flex items-center">
              <Home className="mr-2 h-5 w-5" /> Return to Home
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
