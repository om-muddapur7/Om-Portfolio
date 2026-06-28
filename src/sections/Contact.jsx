import { Mail, MapPin } from "lucide-react";
import React from "react";

const Contact = () => {
	const contactInfo = [
		{
			icon: Mail,
			label: "Email",
			value: "ommuddapur7@gmail.com",
			href: "mailto:ommuddapur7@gmail.com",
		},
		{
			icon: MapPin,
			label: "Location",
			value: "India",
			href: "#",
		},
	];

	return (
		<section id="contact" className="py-32 relative overflow-hidden">
			{/* Bg glows */}
			<div className="absolute top-0 left-0 w-full h-full">
				<div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
				<div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"></div>
			</div>

			<div className="container mx-auto px-6 relative z-10">
				{/* Section header */}
				<div className="text-center max-w-3xl mx-auto mb-16">
					<span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
						Get In Touch
					</span>

					<h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
						Let's build{" "}
						<span className="font-serif italic font-normal text-white">
							something great.
						</span>
					</h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est obcaecati vitae saepe accusantium! Ipsam nostrum, in assumenda, molestiae nobis dolorem possimus sit reiciendis animi saepe enim consectetur fuga porro vero!
          </p>
				</div>
			</div>

		</section>
	);
};

export default Contact;
