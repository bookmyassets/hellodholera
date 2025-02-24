import React, { useEffect, useState } from "react";
import Link from "next/link";
import NotFound from "./ui/NotFound";

const BrowsePropertiesSection = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch("pages/post/projects");
        const text = await response.text(); // Log raw response before parsing JSON
        console.log("API Response:", text);
        
        const data = JSON.parse(text);
        setProperties(data || []);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
      setLoading(false);
    };
    fetchProperties();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  const displayedProperties = properties.slice(0, 3);

  return (
    <section className="min-h-screen py-12 md:py-24">
      <div className="container">
        <div className="w-full px-2 mb-10">
          <h1 className="font-medium text-2xl md:text-3xl lg:text-4xl mb-3">
            Featured Projects
          </h1>
          <p className="text-xs md:text-sm max-w-lg text-slate-500">
            Discover some of our top projects.
          </p>
        </div>
        {displayedProperties.length > 0 ? (
          <div className="px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayedProperties.map((project) => (
              <Property data={project} key={project.slug} />
            ))}
          </div>
        ) : (
          <NotFound />
        )}
        {properties.length > 3 && (
          <div className="mt-6 flex justify-center">
            <Link href="/projects">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Browse More Projects
              </button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default BrowsePropertiesSection;
