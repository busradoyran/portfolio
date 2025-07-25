import React from "react";
import { data } from "../data/data";
import { AiOutlineGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

const WorkCard = () => {
  return (
    <>
      {data.map((project) => (
        <div
          data-aos="fade-up"
          key={project.id}
          className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow w-full col-span-full"
        >
          <div className="flex flex-col h-full max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              {project.title.includes('FormaEvi.net') && project.website ? (
                <>
                  {project.title.split('FormaEvi.net')[0]}
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 underline hover:text-purple-800 transition-colors"
                  >
                    FormaEvi.net
                  </a>
                  {project.title.split('FormaEvi.net')[1]}
                </>
              ) : (
                project.title
              )}
            </h3>
            <p className="text-gray-600 mb-4 flex-grow">
              {project.desc}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.git && (
              <div className="flex justify-end">
                <Link
                  to={project.git}
                  target="_blank"
                  className="flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-colors"
                >
                  <AiOutlineGithub className="text-2xl" />
                  <span className="font-medium">View Code</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default WorkCard;
