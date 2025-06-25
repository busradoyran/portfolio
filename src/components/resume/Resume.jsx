import React from "react";

const Resume = () => {
  return (
    <div id="resume" className="container m-auto mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">
          Resume
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className="text-gray-700 font-medium w-[100%]">
          Here are my experiences and qualifications.
        </p>
      </div>

      {/* Timeline container */}
      <div className="relative mt-8 max-w-4xl mx-auto">
        {/* Experience Section */}
        <div data-aos="fade-up" className="mb-12">
          <h2 className="text-2xl font-bold text-purple-600 mb-8">Experience</h2>
          <div className="space-y-8">
            {/* Experience Item 1 */}
            <div className="relative pl-8 border-l-2 border-purple-400 pb-8">
              <div className="absolute w-4 h-4 bg-purple-400 rounded-full left-[-9px] top-0"></div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold">Software Developer</h3>
                <p className="text-gray-600 font-medium">Aurora Solution</p>
                <p className="text-purple-600 font-medium">April 2025 - Present</p>
                <p className="mt-2 text-gray-600 text-justify">
                  My responsibilities include verifying backend data for accuracy and consistency, performing manual testing, and writing SQL scripts to identify bugs and edge cases. I also provide feedback on data flow and user scenarios to improve reliability, and participate in meetings with international teams to coordinate project goals and share progress updates.
                </p>
              </div>
            </div>

            {/* Experience Item 2 */}
            <div className="relative pl-8 border-l-2 border-purple-400 pb-8">
              <div className="absolute w-4 h-4 bg-purple-400 rounded-full left-[-9px] top-0"></div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold">Software Development Intern</h3>
                <p className="text-gray-600 font-medium">Sentez Software - Business Solutions</p>
                <p className="text-purple-600 font-medium">July 2024 - August 2024</p>
                <p className="mt-2 text-gray-600 text-justify">
                  My responsibilities included developing a Hostel & Dormitory Management System using C# and WinForms, with features such as admin login, student tracking, and debt management. I also worked on a social media web application built with ASP.NET Core MVC, where I implemented user authentication, interactive dashboards, and other key features.
                </p>
              </div>
            </div>

            {/* Experience Item 3 */}
            <div className="relative pl-8 border-l-2 border-purple-400">
              <div className="absolute w-4 h-4 bg-purple-400 rounded-full left-[-9px] top-0"></div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold">Software Developer Intern</h3>
                <p className="text-gray-600 font-medium">Somera</p>
                <p className="text-purple-600 font-medium">August 2022 - September 2022</p>
                <p className="mt-2 text-gray-600 text-justify">
                  My responsibilities included developing web crawlers using Scrapy to extract structured data from target websites efficiently. I also built a web application using FastAPI, focusing on building lightweight, high-performance APIs. Additionally, I developed a full-featured website using Django, handling both backend logic and dynamic front-end rendering.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div data-aos="fade-up">
          <h2 className="text-2xl font-bold text-purple-600 mb-8">Education</h2>
          <div className="space-y-8">
            {/* Education Item 1 */}
            <div className="relative pl-8 border-l-2 border-purple-400 pb-8">
              <div className="absolute w-4 h-4 bg-purple-400 rounded-full left-[-9px] top-0"></div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold">Bachelor of Computer Science</h3>
                <p className="text-gray-600 font-medium">Muğla Sıtkı Koçman University</p>
                <p className="text-purple-600 font-medium">2020 - 2024</p>
                <p className="text-purple-600 font-medium italic">Graduated with a GPA of 3.22</p>
                <p className="mt-2 text-gray-600 text-justify">
                  Focused on core areas such as software development, artificial intelligence, machine learning, and data science. Worked on real-world projects involving game development, object detection, and mobile app development.
                </p>
              </div>
            </div>

            {/* Education Item 2 */}
            <div className="relative pl-8 border-l-2 border-purple-400 pb-8">
              <div className="absolute w-4 h-4 bg-purple-400 rounded-full left-[-9px] top-0"></div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold">Erasmus+ Exchange Program</h3>
                <p className="text-gray-600 font-medium">AGH University of Science and Technology</p>
                <p className="text-purple-600 font-medium">02/2023 - 07/2023</p>
                <p className="mt-2 text-gray-600 text-justify">
                  Studied Computer Science as part of Erasmus+ exchange program. Took part in courses aligned with core CS curriculum while gaining international academic and cultural experience.
                </p>
              </div>
            </div>

            {/* Education Item 3 */}
            <div className="relative pl-8 border-l-2 border-purple-400">
              <div className="absolute w-4 h-4 bg-purple-400 rounded-full left-[-9px] top-0"></div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold">Vefa High School</h3>
                <p className="text-purple-600 font-medium">2014 - 2019</p>
                <p className="mt-2 text-gray-600 text-justify">
                  Organized and led the Sports Festival Committee as a social responsibility initiative. Helped underprivileged students discover Istanbul by arranging sponsors and coordinating tours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
