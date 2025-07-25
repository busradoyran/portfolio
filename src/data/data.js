// This is a collection of freelance projects.
// More projects will be added as they are completed.
// Each project should include:
// - A detailed description of the problem solved
// - Technologies used
// - Business impact
// - GitHub repository link (if public)

export const data = [
  {
    id: 1,
    title: "CSV Processor for FormaEvi.net",
    desc: "I built a custom CSV processing web application for FormaEvi to streamline their order management workflow. The tool takes a single order CSV file — containing both product and customer information — and generates two different outputs: an English-translated order file enriched with product images automatically fetched from the company's website based on product details, and a set of formatted billing documents. I developed both the frontend and backend using HTML, CSS, and Django, designing a simple and user-friendly interface tailored for non-technical users. The application features restricted access, allowing only the company owner to use it, which ensures data privacy and security. This tool significantly reduces manual work while improving consistency and accuracy in document handling.",
    tech: ["Python", "Django", "HTML", "CSS", "Web Scraping"],
    website: "https://www.formaevi.net/"
  },
];
