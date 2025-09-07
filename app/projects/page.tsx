import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

// Define the Project interface for TypeScript
interface Project {
  id: number;
  title: string;
  description: string;
  imagePath: string; // Local image path
  projectUrl: string;
}

// Define the Testimonial interface for TypeScript
interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
}

// Project data based on your provided list
const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Website",
    description:
      "A modern e-commerce platform built for TrendyBase, featuring product browsing, cart management, and secure payments for a seamless shopping experience in Lagos.",
    imagePath: "/projects/trendybase.jpeg",
    projectUrl: "https://www.trendybase.com.ng",
  },
  {
    id: 2,
    title: "E-Commerce Website",
    description:
      "A robust e-commerce platform built for EssentialsByTems, inspired by Amazon, offering a wide range of products, seamless browsing, cart management, and secure payments tailored for the Nigerian market.",
    imagePath: "/projects/essentials.jpeg",
    projectUrl: "https://www.essentialsbytems.com",
  },
  {
    id: 3,
    title: "Restaurant Website",
    description:
      "A student-friendly restaurant website for Leadcity University , allowing users to order food like shawarma and drinks with an intuitive interface.",
    imagePath: "/projects/marigold.jpeg",
    projectUrl: "https://marigold-website-front-end.onrender.com",
  },
  {
    id: 4,
    title: "Restaurant Admin Panel",
    description:
      "An admin panel for the restaurant website, enabling efficient management of orders, menus, and customer data, accessible via a separate link.",
    imagePath: "/projects/admin_marigold.jpeg",
    projectUrl: "https://marigold-website-admin-panel.onrender.com",
  },
  {
    id: 5,
    title: "School Feeding App Clone",
    description:
      "A clone of Leadcity University feeding app, designed to streamline meal ordering and management for students with a modern and responsive UI.",
    imagePath: "/projects/clone_fed.jpeg",
    projectUrl: "https://leadcity-feeding-app.vercel.app",
  },
  {
    id: 6,
    title: "Mass Communication Assignment Platform",
    description:
      "A website for the Mass Communication department in Leadcity University , enabling students to order and pay for assignment help with a user-friendly interface.",
    imagePath: "/projects/masscomm_solutions.jpeg",
    projectUrl:
      "https://leadcity-mass-comm-assignment-helper-daniel-opanugas-projects.vercel.app",
  },
  {
    id: 7,
    title: "Mass Communication Department Website",
    description:
      "A comprehensive website for the Mass Communication department Leadcity University, providing access to assignments, notes, news, events, and class schedules.",
    imagePath: "/projects/masscomm_web.jpeg",
    projectUrl: "https://masscomm-dept-lrbt.vercel.app",
  },
];


const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Chinedu Okeke",
    role: "Small Business Owner",
    quote:
      "The e-commerce site built for my store is fantastic! It’s user-friendly, fast, and has driven more sales than I expected. Highly recommended!",
  },
  {
    id: 2,
    name: "Taiwo Orenuga",
    role: "Restaurant Manager",
    quote:
      "The restaurant website and admin panel streamlined our operations. Students love the easy ordering system, and we’ve seen a surge in orders!",
  },
  {
    id: 3,
    name: "Tobi Adeyemi",
    role: "Mass Communication Student",
    quote:
      "The department website is a game changer. Accessing assignments, schedules, and news in one place has made my academic life so much easier!",
  },
  {
    id: 4,
    name: "Temilade",
    role: "Entrepreneur",
    quote:
      "The Jumia like e-commerce platform for my business is top-notch. The design is sleek, and the payment system works flawlessly for my customers.",
  },
  {
    id: 5,
    name: "Grace Oreoluwa",
    role: "Student",
    quote:
      "The feeding app clone is incredibly intuitive. It’s made me order food even when i dont have much with me and it  saved us countless hours in management.",
  },
  {
    id: 6,
    name: "Chioma Eze",
    role: "Freelance Client",
    quote:
      "The assignment platform for Mass Comm is brilliant! It’s easy to use, secure, and has made submitting and paying for assignments seamless.",
  },
  {
    id: 7,
    name: "Yusuf Ibrahim",
    role: "Business Owner",
    quote:
      "The website for my sister’s e-commerce store is professional and modern. It’s boosted her brand’s visibility and sales here in Lagos!",
  },
];

const ProjectsPage: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Projects Section */}
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          My Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <div className="relative h-48">
                <Image
                  src={project.imagePath}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Link
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors"
                >
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="max-w-7xl mx-auto mt-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          What My Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary"
            >
              <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name[0]}
                </div>
                <div className="ml-4">
                  <p className="text-gray-900 font-semibold">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
