import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);

		// BUG FIX: was addEventListener again, should be removeEventListener
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navLinks = [
		{ href: "#about", label: "About" },
		{ href: "#projects", label: "Projects" },
		{ href: "#experience", label: "Experience" },
		{ href: "#testimonials", label: "Testimonials" },
	];

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
				isScrolled
					? "glass-strong py-3 border-white/10"
					: "bg-transparent py-5 border-transparent"
			}`}
		>
			<nav className="container mx-auto px-6 flex items-center justify-between">
				{/* Logo */}
				<a
					href="#"
					className="text-xl font-bold tracking-tight hover:text-primary transition-colors duration-200"
				>
					OM <span className="text-primary">.</span>
				</a>

				{/* Desktop Nav */}
				<div className="hidden md:flex items-center">
					<div className="glass rounded-full px-2 py-1 flex items-center gap-1">
						{navLinks.map((link, index) => (
							<a
								href={link.href}
								key={index}
								className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface transition-colors duration-200"
							>
								{link.label}
							</a>
						))}
					</div>
				</div>

				{/* CTA Button */}
				<div className="hidden md:block">
					<Button size="sm">Contact Me</Button>
				</div>

				{/* Mobile menu button */}
				<button
					className="md:hidden p-2 rounded-full hover:bg-surface text-foreground cursor-pointer transition-colors duration-200"
					onClick={() => setIsMobileMenuOpen((prev) => !prev)}
					aria-label="Toggle menu"
				>
					{isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
				</button>
			</nav>

			{/* Mobile Menu */}
			{isMobileMenuOpen && (
				<div className="md:hidden glass-strong border-t border-white/5 animate-fade-in">
					<div className="container mx-auto px-6 py-6 flex flex-col gap-2">
						{navLinks.map((link, index) => (
							<a
								href={link.href}
								key={index}
								onClick={() => setIsMobileMenuOpen(false)}
								className="text-base text-muted-foreground hover:text-foreground py-2.5 px-3 rounded-lg hover:bg-surface transition-colors duration-200"
							>
								{link.label}
							</a>
						))}

						<div className="pt-2">
							<Button className="w-full">Contact Me</Button>
						</div>
					</div>
				</div>
			)}
		</header>
	);
};

export default Navbar;