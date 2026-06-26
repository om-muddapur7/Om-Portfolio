import { ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import React from "react";
import Button from "../components/Button";
import AnimatedBorderButton from "../components/AnimatedBorderButton";

const Hero = () => {
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
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* Left col - Text content */}
					<div className="space-y-8">
						<div className="animate-fade-in">
							<span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
								<span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
								Software Developer
							</span>
						</div>

						{/* Headline */}
						<div className="space-y-4 ">
							<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
								Crafting <span className="text-primary glow-text">digital</span>
								<br />
								experiences with
								<br />
								<span className="font-serif italic font-normal text-white">
									precision.
								</span>
							</h1>

							<p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
								Hi I'm Om Muddapur - a software developer specializing in React,
								Next.js and Typescript. I build scalable performant web
								applications that users love.
							</p>
						</div>

						{/* CTA */}
						<div className="flex flex-wrap gap-4 animat-fade-in animation-delay-300">
							<Button size="lg">
								Contact Me <ArrowRight className="w-5 h-5" />
							</Button>

							<AnimatedBorderButton />
						</div>

						{/* Social links */}
						<div className="flex items-center gap-4 animate-fade-in animation-delay-400">
							<span className="text-sm text-muted-foreground">Follow me: </span>
							{[
								{ icon: FaGithub, href: "https://github.com/om-muddapur7" },
								{ icon: FaLinkedin, href: "https://www.linkedin.com/in/om-muddapur-aa56a525b/" },
								{ icon: FaXTwitter, href: "https://x.com/Om7248" },
							].map((social, idx) => (
								<a href={social.href} key={idx} className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">
									{<social.icon className="w-5 h-5"/>}
								</a>
							))}
						</div>
					</div>

					{/* Right col - Profile Img */}
				</div>
			</div>
		</section>
	);
};

export default Hero;
