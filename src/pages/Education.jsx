import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const educationData = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Your University Name",
    year: "2019 - 2023",
    description: "Relevant coursework, honors, or activities."
  },
  // Add more education entries as needed
];

export const Education = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main className="max-w-3xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Education</h1>
        <div className="space-y-8">
          {educationData.map((edu, idx) => (
            <div key={idx} className="bg-card p-6 rounded-lg shadow">
              <h2 className="text-2xl font-semibold">{edu.degree}</h2>
              <p className="text-lg text-primary mb-1">{edu.institution}</p>
              <p className="text-sm text-muted-foreground mb-2">{edu.year}</p>
              <p className="text-base">{edu.description}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};
