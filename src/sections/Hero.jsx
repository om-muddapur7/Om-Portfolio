import { ArrowRight, ChevronDown, Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import React from "react";
import Button from "../components/Button";
import AnimatedBorderButton from "../components/AnimatedBorderButton";

const Hero = () => {

	const skills = [
		"React",
		"Next.js",
		"Typescript",
		"Node.js",
		"PostgreSql",
		"MongoDB",
		"Vercel",
		"Tailwind CSS",
		"Figma",
		"Git"
	];

	return (
		<section className="relative min-h-screen flex items-center overflow-hidden">
			{/* Bg */}
			<div className="absolute inset-0">
				<img
					src="/hero-bg.jpg"
					alt="Hero image"
					className="w-full h-full object-cover opacity-40"
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
			</div>

			{/* Green dots */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				{[...Array(30)].map((_, i) => (
					<div
						key={i}
						className="absolute w-1.5 h-1.5 rounded-full opacity-60"
						style={{
							backgroundColor: "#20b2a6",
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
							animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
							animationDelay: `${Math.random() * 5}s`,
						}}
					/>
				))}
			</div>

			{/* Content */}
			<div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
				<div className="grid lg:grid-cols-2 gap-16 items-center">

					{/* Left col - Text content */}
					<div className="flex flex-col gap-8">
						{/* Badge */}
						<div className="animate-fade-in">
							<span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
								<span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
								Software Developer
							</span>
						</div>

						{/* Headline */}
						<div className="flex flex-col gap-4">
							<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
								Crafting <span className="text-primary glow-text">digital</span>
								<br />
								experiences with
								<br />
								<span className="font-serif italic font-normal text-white">
									precision.
								</span>
							</h1>

							<p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200 leading-relaxed">
								Hi, I'm Om Muddapur — a software developer specializing in React,
								Next.js and TypeScript. I build scalable, performant web
								applications that users love.
							</p>
						</div>

						{/* CTA */}
						<div className="flex flex-wrap items-center gap-4 animate-fade-in animation-delay-300">
							<Button size="lg">
								Contact Me <ArrowRight className="w-5 h-5 ml-1" />
							</Button>
							<AnimatedBorderButton />
						</div>

						{/* Social links */}
						<div className="flex items-center gap-4 animate-fade-in animation-delay-400">
							<span className="text-sm text-muted-foreground">Follow me:</span>
							{[
								{ icon: FaGithub, href: "https://github.com/om-muddapur7", label: "GitHub" },
								{ icon: FaLinkedin, href: "https://www.linkedin.com/in/om-muddapur-aa56a525b/", label: "LinkedIn" },
								{ icon: FaXTwitter, href: "https://x.com/Om7248", label: "X / Twitter" },
							].map((social, idx) => (
								<a
									href={social.href}
									key={idx}
									aria-label={social.label}
									className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
								>
									<social.icon className="w-5 h-5" />
								</a>
							))}
						</div>
					</div>

					{/* Right col - Profile Image */}
					<div className="flex justify-center items-center animate-fade-in animation-delay-300">
						<div className="relative w-full max-w-sm">
							{/* Glow backdrop */}
							<div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />

							{/* Card */}
							<div className="relative glass rounded-3xl p-2 glow-border">
								<img
									src="/profile.jpg"
									alt="Om Muddapur"
									className="w-full aspect-[4/5] object-cover rounded-2xl"
								/>

								{/* Available badge - bottom right */}
								<div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float shadow-lg">
									<div className="flex items-center gap-2">
										<div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse flex-shrink-0" />
										<span className="text-sm font-medium whitespace-nowrap">Available for work</span>
									</div>
								</div>

								{/* Experience badge - top left */}
								<div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500 shadow-lg text-center">
									<div className="text-2xl font-bold text-primary leading-none">5+</div>
									<div className="text-xs text-muted-foreground mt-0.5">Years Exp.</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Technologies marquee */}
				<div className="mt-24 animate-fade-in animation-delay-600">
					<p className="text-sm text-muted-foreground mb-6 text-center tracking-wide uppercase">
						Technologies I work with
					</p>

					<div className="relative overflow-hidden">
						{/* Fade edges */}
						<div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
						<div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

						<div className="flex animate-marquee whitespace-nowrap">
							{[...skills, ...skills].map((skill, idx) => (
								<div key={idx} className="flex-shrink-0 px-8 py-4">
									<span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors cursor-default">
										{skill}
									</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Scroll indicator */}
			<div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
				<a
					href="#about"
					className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
				>
					<span className="text-xs uppercase tracking-widest">Scroll</span>
					<ChevronDown className="w-5 h-5 animate-bounce" />
				</a>
			</div>
		</section>
	);
};

export default Hero;