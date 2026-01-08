"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Github,
  Mail,
  ExternalLink,
  Download,
  Code,
  Palette,
  Database,
  Globe,
  ChevronDown,
  Menu,
  X,
  Send,
  MapPin,
  Phone,
  Calendar,
  Award,
  Users,
  Zap,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
// Import EmailJS
import emailjs from "@emailjs/browser";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "projects",
        "skills",
        "resume",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);
      setSubmitStatus("");

      // Validate environment variables first
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS configuration is missing");
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Dominion",
      };

      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(""), 5000);
    }
  };

  const handleResumeDownload = () => {
    // Create a temporary link element
    const link = document.createElement("a");
    link.href = "/resume/dominion-resume.pdf"; // Path to your PDF in public folder
    link.download = "Dominion-Full-Stack-Web3-Developer-Resume.pdf"; // Downloaded filename
    link.target = "_blank"; // Open in new tab as fallback

    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" },
  ];

  const projects = [
    {
      title: "My Portfolio Website",
      description:
        "Responsive portfolio platform featuring live smart contract integrations, DeFi project showcases, and modern Web3 user experience patterns.",
      tech: ["React", "Next.js", "Tailwind CSS", "HTML", "Vercel"],
      github: "https://github.com/Dominion116/my-portfolio",
      demo: "#",
      image: "/images/myportfolio.png",
      featured: true,
    },
    {
      title: "Afrimobile Technology",
      description:
        "Blockchain-integrated smartphone platform, features native crypto wallet, decentralized app store, and smart contract-powered device management. Built for Africa&apos;s rapidly expanding mobile-first economy.",
      tech: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
        "Render",
      ],
      github: "https://github.com/BernardOnuh/Afrimo-Database",
      demo: "https://www.afrimobil.com/",
      image: "/images/afrimobile.png",
      featured: true,
    },
  ];

  const skills = [
    {
      category: "Blockchain & Web3",
      icon: <Code className="text-foreground" size={24} />,
      items: [
        { name: "Solidity", level: 95 },
        { name: "Ethereum", level: 90 },
        { name: "Polygon", level: 85 },
        { name: "Hardhat", level: 90 },
        { name: "Truffle", level: 80 },
        { name: "Web3.js", level: 88 },
        { name: "Ethers.js", level: 92 },
        { name: "The Graph", level: 75 },
      ],
    },
    {
      category: "Frontend Development",
      icon: <Palette className="text-foreground" size={24} />,
      items: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "TypeScript", level: 88 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Vue.js", level: 80 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "JavaScript", level: 92 },
      ],
    },
    {
      category: "Backend & Database",
      icon: <Database className="text-foreground" size={24} />,
      items: [
        { name: "Node.js", level: 90 },
        { name: "Express", level: 85 },
        { name: "Python", level: 88 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Redis", level: 75 },
        { name: "GraphQL", level: 82 },
        { name: "REST APIs", level: 90 },
      ],
    },
    {
      category: "Tools & DevOps",
      icon: <Globe className="text-foreground" size={24} />,
      items: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 85 },
        { name: "AWS", level: 80 },
        { name: "IPFS", level: 75 },
        { name: "Remix IDE", level: 88 },
        { name: "MetaMask", level: 90 },
        { name: "Vercel", level: 85 },
        { name: "GitHub Actions", level: 80 },
      ],
    },
  ];

  const experiences = [
    {
      title: "Blockchain Developer",
      company: "Web3 Nova",
      period: "2024 - Present",
      location: "Remote",
      description: [
        "Development of DeFi protocols managing over $10k in transactions",
        "Architected and deployed smart contracts with zero security incidents",
        "Mentored junior developers and established best practices for smart contract development",
        "Collaborated with cross-functional teams to deliver complex blockchain solutions",
      ],
      technologies: [
        "Solidity",
        "React",
        "Next.js",
        "Node.js",
        "AWS",
        "PostgreSQL",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Metaminds Agency",
      period: "2023 - 2024",
      location: "Remote",
      description: [
        "Led full-stack development for enterprise web applications, delivering scalable solutions for clients across e-commerce, SaaS, and digital marketing sectors",
        "Architected and deployed robust backend APIs using Node.js and Express",
        "Built responsive, mobile-first web applications using React and Next.js, implementing modern UI/UX designs",
        "Collaborated with cross-functional teams including designers, product managers, and DevOps engineers",
        "Implemented comprehensive testing strategies and CI/CD pipelines",
      ],
      technologies: [
        "React",
        "Next.js",
        "Node.js",
        "Express",
        "TypeScript",
        "MongoDB",
        "PostgreSQL",
        "AWS",
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Federal University of Technology, Akure",
      period: "2020 - 2025",
      location: "Akure, Ondo City",
      description:
        "Comprehensive computer science program with strong emphasis on software engineering, data structures, algorithms, and modern web technologies. Specialized in full-stack development and emerging technologies including blockchain and distributed systems.",
      gpa: "4.0",
    },
  ];

  const certifications = [
    {
      name: "Certified Ethereum Developer",
      issuer: "ConsenSys Academy",
      date: "2021",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">


      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-foreground">
              Dominion
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-all duration-300 hover:text-primary relative ${
                    activeSection === item.id
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Navigation Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-md">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-3 px-4 text-sm font-medium transition-colors hover:text-primary hover:bg-muted/50 rounded-lg ${
                    activeSection === item.id
                      ? "text-primary bg-muted/30"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative px-4 pt-32"
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-block p-1 rounded-full bg-primary mb-8">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-background flex items-center justify-center">
                <Image
                  src="/images/dominion-profile.jpg"
                  alt="Dominion"
                  width={150}
                  height={150}
                  className="rounded-full"
                />
              </div>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 text-foreground leading-tight">
              Dominion
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-primary mb-6 font-medium">
              Full-Stack Web3 Developer
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              Passionate about democratizing finance and empowering communities
              through blockchain technology. I specialize in creating intuitive
              DeFi platforms, secure smart contracts, and engaging NFT
              experiences that make Web3 accessible to everyone. Let&apos;s build the
              decentralized future together.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300 hover:scale-105"
            >
              <Zap className="mr-2" size={20} />
              View My Work
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300 hover:scale-105"
            >
              <Send className="mr-2" size={20} />
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-8">
            <Link
              href="https://github.com/Dominion116"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide-icon">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                <path d="M9 18c-4.51 2-5-2-7-2"/>
              </svg>
            </Link>
            <Link
              href="https://x.com/Travishtech"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
              title="X (Twitter)"
            >
              <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide-icon">
                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
              </svg>
            </Link>
            <Link
              href="mailto:limbotech116@gmail.com"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              title="Email"
            >
              <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide-icon">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={() => scrollToSection("about")}>
          <span className="text-muted-foreground text-sm tracking-widest uppercase opacity-70 hover:text-primary transition-colors">
            Scroll &darr;
          </span>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              About Me
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate about building the decentralized future through
              innovative blockchain solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My journey into Web3 started with a simple question: &quot;What if
                  we could rebuild the internet to truly belong to its users?&quot;
                  That curiosity led me from traditional web development into
                  the fascinating world of blockchain technology, where I&apos;ve
                  spent the last 5+ years turning that vision into reality.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  I thrive on solving complex problems at the intersection of
                  technology and human needs. Whether I&apos;m architecting a DeFi
                  protocol that democratizes access to financial services,
                  building an NFT marketplace that empowers creators, or
                  designing DAO governance systems that give communities real
                  power, my focus is always on creating solutions that matter.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Beyond the code, I&apos;m deeply involved in the Web3
                  community—contributing to open-source projects, mentoring
                  developers transitioning into blockchain, and constantly
                  exploring emerging technologies like zero-knowledge proofs and
                  cross-chain interoperability. I also yap about Web3 projects
                  on Kaito leaderboard.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12">
                  <div className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                      5+
                    </div>
                    <div className="text-muted-foreground text-sm">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                      2+
                    </div>
                    <div className="text-muted-foreground text-sm">
                      Years Experience
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                      $10k+
                    </div>
                    <div className="text-muted-foreground text-sm">TVL Managed</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="w-full max-w-md mx-auto">
                  <div className="aspect-square bg-primary rounded-2xl p-1">
                    <div className="w-full h-full bg-background rounded-2xl flex items-center justify-center">
                      <Image
                        src="/images/dominion-profile.jpg"
                        alt="Dominion"
                        width={400}
                        height={400}
                        className="rounded-2xl"
                      />
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 bg-primary rounded-lg p-3 shadow-lg">
                  <Code className="text-foreground" size={24} />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-primary rounded-lg p-3 shadow-lg">
                  <Database className="text-foreground" size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 lg:py-32 bg-muted/20 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Showcasing innovative Web2 and Web3 solutions that push the
              boundaries of blockchain technology and the internet.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {projects
              .filter((project) => project.featured)
              .map((project, index) => (
                <Card
                  key={index}
                  className="bg-card border-border hover:border-primary shadow-sm transition-all duration-500 group hover:scale-105"
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={project.image || "/images/myportfolio.png"}
                      alt={project.title}
                      width={400}
                      height={250}
                      className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary text-primary-foreground">
                        Featured
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="pb-4">
                    <CardTitle className="text-foreground group-hover:text-primary transition-colors text-lg sm:text-xl">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="bg-secondary text-secondary-foreground border-border text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <Link
                        href={project.github}
                        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
                      >
                        <Github size={16} />
                        Code
                      </Link>
                      <Link
                        href={project.demo}
                        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Skills & Technologies
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive expertise across the full blockchain development
              stack
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillCategory, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary shadow-sm transition-all duration-300 group"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {skillCategory.icon}
                  </div>
                  <CardTitle className="text-foreground text-lg">
                    {skillCategory.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {skillCategory.items.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-foreground text-sm font-medium">
                            {skill.name}
                          </span>
                          <span className="text-primary text-xs">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 lg:py-32 bg-muted/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Experience & Education
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              A journey of continuous learning and professional growth in
              blockchain technology
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Experience */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-primary flex items-center gap-3">
                <Users size={28} />
                Professional Experience
              </h3>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <Card
                    key={index}
                    className="bg-card border-border hover:border-primary/50 shadow-sm transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-semibold text-foreground mb-1">
                            {exp.title}
                          </h4>
                          <div className="text-primary font-medium">
                            {exp.company}
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground mt-2 sm:mt-0 sm:text-right">
                          <div className="flex items-center gap-1 mb-1">
                            <Calendar size={14} />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="text-muted-foreground text-sm flex items-start gap-2"
                          >
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="bg-secondary text-secondary-foreground border-border text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Education & Certifications */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-primary flex items-center gap-3">
                <Award size={28} />
                Education & Certifications
              </h3>

              {/* Education */}
              <div className="space-y-6 mb-12">
                {education.map((edu, index) => (
                  <Card
                    key={index}
                    className="bg-card border-border hover:border-primary/50 shadow-sm transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-1">
                            {edu.degree}
                          </h4>
                          <div className="text-primary font-medium">
                            {edu.school}
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground mt-2 sm:mt-0 sm:text-right">
                          <div className="flex items-center gap-1 mb-1">
                            <Calendar size={14} />
                            {edu.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            {edu.location}
                          </div>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm mb-2">
                        {edu.description}
                      </p>
                      <div className="text-primary text-sm font-medium">
                        GPA: {edu.gpa}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Certifications */}
              <h4 className="text-xl font-semibold mb-6 text-foreground">
                Professional Certifications
              </h4>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <Card
                    key={index}
                    className="bg-card/50 border-border shadow-sm"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h5 className="font-semibold text-foreground text-sm">
                            {cert.name}
                          </h5>
                          <div className="text-primary text-xs">
                            {cert.issuer}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-muted-foreground text-xs">
                            {cert.date}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Button
              onClick={handleResumeDownload}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300 hover:scale-105"
            >
              <Download className="mr-2" size={20} />
              Download Full Resume
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-32 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Let&apos;s Build Together
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to bring your web3 vision to life? Let&apos;s discuss how we can
              create something extraordinary together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-card border-border shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">
                  Send a Message
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  I&apos;ll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  {/* Status Messages */}
                  {submitStatus === "success" && (
                    <div className="bg-green-600/20 border border-green-600/30 text-green-300 px-4 py-3 rounded-lg">
                      Message sent successfully! I&apos;ll get back to you within 24
                      hours.
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="bg-red-600/20 border border-red-600/30 text-red-300 px-4 py-3 rounded-lg">
                      Sorry, there was an error sending your message. Please try
                      again or email me directly at limbotech116@gmail.com
                    </div>
                  )}

                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="bg-input border-border text-foreground placeholder-muted-foreground focus:border-primary disabled:opacity-50"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="bg-input border-border text-foreground placeholder-muted-foreground focus:border-primary disabled:opacity-50"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      rows={5}
                      className="bg-input border-border text-foreground placeholder-muted-foreground focus:border-primary resize-none disabled:opacity-50"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 font-medium rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2" size={20} />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  Get In Touch
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Whether you&apos;re looking to build a DeFi protocol, launch an NFT
                  marketplace, or create a DAO, I&apos;m here to help bring your web3
                  vision to reality. Let&apos;s discuss your project and explore the
                  possibilities together.
                </p>
              </div>

              <div className="grid gap-6">
                <Card className="bg-card/50 border-border hover:border-primary/50 shadow-sm transition-all duration-300">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <Mail className="text-foreground" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-1">
                        Email
                      </h4>
                      <p className="text-muted-foreground">limbotech116@gmail.com</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 border-border hover:border-primary/50 shadow-sm transition-all duration-300">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <Phone className="text-foreground" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">
                        Phone
                      </h4>
                      <p className="text-muted-foreground">+2347036686324</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 border-border hover:border-primary/50 shadow-sm transition-all duration-300">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <MapPin className="text-foreground" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">
                        Location
                      </h4>
                      <p className="text-muted-foreground">Onchain</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="pt-8">
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Follow Me
                </h4>
                <div className="flex gap-4">
                  <Link
                    href="https://github.com/Dominion116"
                    className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 hover:scale-110"
                  >
                    <Github size={20} />
                  </Link>
                  <Link
                    href="https://x.com/Travishtech"
                    className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 hover:scale-110"
                  >
                    <Twitter size={20} />
                  </Link>
                  <Link
                    href="mailto:limbotech116@gmail.com"
                    className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 hover:scale-110"
                  >
                    <Mail size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border bg-background/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()} Dominion. All rights reserved.
            </div>
            <div className="text-muted-foreground text-sm">
              Built with React, Next.js & Tailwind CSS
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}