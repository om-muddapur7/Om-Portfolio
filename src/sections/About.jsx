import { Code2, Lightbulb, Rocket, Users } from "lucide-react";
import React from "react";

const About = () => {
	const highlights = [
		{
			icon: Code2,
			title: "Clean Code",
			description:
				"Writing maintainable code scalable that stands the test of time",
		},
		{
			icon: Rocket,
			title: "Performance",
			description:
				"Writing maintainable code scalable that stands the test of time",
		},
		{
			icon: Users,
			title: "Collabration",
			description:
				"Writing maintainable code scalable that stands the test of time",
		},
		{
			icon: Lightbulb,
			title: "Innovation",
			description:
				"Writing maintainable code scalable that stands the test of time",
		},
	];

	return (
		<section id="about" className="py-32 relative overflow-hidden">
			<div className="container mx-auto relative px-6 z-10">
				<div className="grid lg:grid-cols-2 gap-16 items-center">
					{/* Left column */}
					<div className="space-y-8">
						<div className="animate-fade-in">
							<span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
								About Me
							</span>
						</div>

						<h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
							Building the future,
							<span className="font-serif italic font-normal text-white">
								{" "}
								one component at a time.
							</span>
						</h2>

						<div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
							<p>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
								eligendi ullam expedita dolores quasi exercitationem magnam
								ipsum dolor alias, cum beatae hic consequuntur aut vitae!
								Voluptatibus ab quaerat cum voluptatum.
							</p>

							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab hic
								porro non, accusantium, dolores officiis, veniam earum vitae
								ipsum soluta doloremque! Similique ex soluta vel numquam
								deleniti in obcaecati animi!
							</p>

							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
								distinctio praesentium vitae voluptates atque libero soluta
								earum cupiditate, sint architecto id corporis unde numquam cum
								iusto tenetur minus deserunt temporibus.
							</p>
						</div>

						<div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
							<p className="text-lg font-medium italic text-foreground">
								"My mission " Lorem ipsum dolor sit amet consectetur adipisicing
								elit. Voluptatem consequuntur natus accusamus a dolorum
								laudantium! Excepturi deserunt recusandae sed impedit doloribus
								quam nemo, sint pariatur suscipit totam eos hic temporibus.
							</p>
						</div>
					</div>

					{/* Right Column - Highlights */}
					<div className="grid sm:grid-cols-2 gap-6">
						{highlights.map((item, idx) => (
							<div key={idx} className="glass p-6 rounded-2xl animate-fade-in" style={{animationDelay: `${(idx + 1) * 100}ms`}}>
								<div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
									<item.icon className="w-6 h-6 text-primary" />
								</div>
								<h3 className="text-lg font-semibold mb-2">{item.title}</h3>
								<p className="text-sm text-muted-foreground">{item.description}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
