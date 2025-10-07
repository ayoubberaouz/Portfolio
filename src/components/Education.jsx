import React from "react";

const educationData = [
  {
    degree: "Licence en ingénierie des systèmes informatiques",
    institution: "Ecole privée supérieure de management, de télécommunication et d'informatique",
    year: "2024-2025",
    description: "",
    modules: {
      semester5: [
        { name: "Administration des SE", description: "Gestion des systèmes d'exploitation et optimisation des performances" },
        { name: "TCP/IP et Programmation réseaux", description: "Développement d'applications réseau et protocoles de communication" },
        { name: "Développement Orienté Objet", description: "Conception de logiciels modulaires avec les principes POO" },
        { name: "Génie Logiciel et Bases de Données (PL/SQL)", description: "Méthodologies de développement et gestion de bases de données" },
        { name: "Python for data science", description: "Analyse de données et machine learning avec Python" },
        { name: "Systèmes de Gestion de Contenu (CMS)", description: "Création et personnalisation de sites web avec CMS" },
        { name: "Langues Etrangères V", description: "Communication technique en anglais/français" }
      ],
      semester6: [
        { name: "Intelligence Artificielle", description: "Algorithmes d'IA et solutions intelligentes" },
        { name: "Administration des bases de données", description: "Optimisation et sécurisation des bases de données" },
        { name: "Développement Orienté Objet Avancé", description: "Architectures logicielles et frameworks modernes" },
        { name: "Droit, Civisme et Citoyenneté", description: "Aspects juridiques et éthique du numérique" },
        { name: "Langues Etrangères VI", description: "Communication professionnelle avancée" },
        { name: "Projet de fin de cycle", description: "Réalisation d'un projet complet intégrant mes compétences" }
      ]
    }
  },
  {
    degree: "Technicien spécialisé en développement informatique",
    institution: "Institut Spécialisé de Technologie Appliquée de Sala Al jadida", 
    year: "2020-2021",
    description: "", // No description provided in the CV
  },
  {
    degree: "Baccalauréat science option science physique",
    institution: "Lycée Mouha Ouhamou Ezzayani",
    year: "2017-2018",
    description: "", // No description provided in the CV
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-16 bg-gradient-to-b from-background via-background/80 to-background">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-center mb-12 text-primary drop-shadow-lg">
          <span className="border-b-4 border-primary pb-2">Education</span>
        </h1>
        <div className="relative border-l-4 border-primary/30 pl-8 space-y-12">
          {educationData.map((edu, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline dot */}
              <span className="absolute -left-5 top-2 w-4 h-4 bg-primary rounded-full border-4 border-background group-hover:scale-110 transition-transform"></span>
              <div className="bg-card/80 backdrop-blur-md shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow border border-primary/10">
                <div className="flex flex-col">
                  <h2 className="text-2xl font-bold text-primary mb-1 text-left">{edu.degree}</h2>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                    <span className="text-lg font-medium text-foreground text-left">{edu.institution}</span>
                    <span className="text-sm text-muted-foreground sm:text-right">{edu.year}</span>
                  </div>
                </div>
                <p className="text-base text-foreground/80 text-left mb-4">{edu.description}</p>
                
                {/* Modules Section for License only */}
                {edu.modules && (
                  <div className="mt-6 space-y-6">
                    {/* Semester 5 */}
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-3 border-b border-primary/30 pb-1">SEMESTRE 5</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {edu.modules.semester5.map((module, index) => (
                          <div key={index} className="bg-background/50 rounded-lg p-3 border border-primary/10 hover:border-primary/30 transition-colors">
                            <h4 className="font-semibold text-foreground text-sm mb-1">{module.name}</h4>
                            <p className="text-xs text-foreground/70">{module.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Semester 6 */}
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-3 border-b border-primary/30 pb-1">SEMESTRE 6</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {edu.modules.semester6.map((module, index) => (
                          <div key={index} className="bg-background/50 rounded-lg p-3 border border-primary/10 hover:border-primary/30 transition-colors">
                            <h4 className="font-semibold text-foreground text-sm mb-1">{module.name}</h4>
                            <p className="text-xs text-foreground/70">{module.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};