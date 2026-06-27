import React from "react";

const Projects = () => {
	const projects = [
		{
			title: "title",
			description: "description",
			image: "/profile.jpg",
			tags: ["React", "TS", "Nodejs"],
			link: "#",
			github: "#",
		},
		{
			title: "title",
			description: "description",
			image: "/profile.jpg",
			tags: ["React", "TS", "Nodejs"],
			link: "#",
			github: "#",
		},
		{
			title: "title",
			description: "description",
			image: "/profile.jpg",
			tags: ["React", "TS", "Nodejs"],
			link: "#",
			github: "#",
		},
		{
			title: "title",
			description: "description",
			image: "/profile.jpg",
			tags: ["React", "TS", "Nodejs"],
			link: "#",
			github: "#",
		},
	];

	return (
		<section id="projects" className="py-32 relative overflow-hidden">
			{/* Bg glows */}
			<div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full"></div>
			<div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full"></div>

			<div className="container mx-auto px-6 relative z-10">
        {/* Section headers */}
        <div className="text-center mx-auto max-w-3xl mb-16 ">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Featured Works</span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white"> make an impact.</span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam saepe aspernatur nobis quos dolor a doloribus culpa quaerat ab illum, enim minus repudiandae asperiores dolorem, sunt quibusdam animi, sapiente odio!</p>

        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1" style={{animationDelay: `${(idx + 1) * 100}ms`}}>

              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
              </div>
            </div>
          ))}
        </div>

      </div>

		</section>
	);
};

export default Projects;
