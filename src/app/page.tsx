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

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
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
      title: "DeFi Yield Farming Protocol",
      description:
        "A comprehensive DeFi platform featuring automated yield farming, liquidity mining, and governance tokens. Built with advanced smart contract security and gas optimization.",
      tech: ["Solidity", "React", "Web3.js", "Node.js", "PostgreSQL", "Docker"],
      github: "#",
      demo: "#",
      image: "/placeholder.svg?height=250&width=400",
      featured: true,
    },
    {
      title: "Multi-Chain NFT Marketplace",
      description:
        "Cross-chain NFT marketplace supporting Ethereum, Polygon, and BSC. Features include lazy minting, royalty distribution, and advanced search capabilities.",
      tech: ["Next.js", "Solidity", "IPFS", "Ethers.js", "MongoDB", "Redis"],
      github: "#",
      demo: "#",
      image: "/placeholder.svg?height=250&width=400",
      featured: true,
    },
    {
      title: "DAO Governance Platform",
      description:
        "Decentralized governance platform with proposal creation, quadratic voting, and treasury management. Includes delegation and multi-sig wallet integration.",
      tech: ["React", "Hardhat", "The Graph", "TypeScript", "Tailwind", "AWS"],
      github: "#",
      demo: "#",
      image: "/placeholder.svg?height=250&width=400",
      featured: true,
    },
    {
      title: "Crypto Portfolio Tracker",
      description:
        "Real-time portfolio tracking with DeFi protocol integration, yield farming analytics, and tax reporting features.",
      tech: ["Vue.js", "Python", "FastAPI", "PostgreSQL", "WebSocket"],
      github: "#",
      demo: "#",
      image: "/placeholder.svg?height=250&width=400",
      featured: false,
    },
    {
      title: "Decentralized Identity System",
      description:
        "Self-sovereign identity solution using zero-knowledge proofs and verifiable credentials for privacy-preserving authentication.",
      tech: ["Solidity", "React", "zk-SNARKs", "IPFS", "Node.js"],
      github: "#",
      demo: "#",
      image: "/placeholder.svg?height=250&width=400",
      featured: false,
    },
    {
      title: "Blockchain Analytics Dashboard",
      description:
        "Comprehensive analytics platform for tracking on-chain metrics, whale movements, and DeFi protocol performance.",
      tech: ["React", "D3.js", "Python", "GraphQL", "Redis", "Docker"],
      github: "#",
      demo: "#",
      image: "/placeholder.svg?height=250&width=400",
      featured: false,
    },
  ];

  const skills = [
    {
      category: "Blockchain & Web3",
      icon: <Code className="text-white" size={24} />,
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
      icon: <Palette className="text-white" size={24} />,
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
      icon: <Database className="text-white" size={24} />,
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
      icon: <Globe className="text-white" size={24} />,
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
      title: "Senior Web3 Developer",
      company: "BlockTech Solutions",
      period: "2022 - Present",
      location: "San Francisco, CA",
      description: [
        "Lead development of DeFi protocols managing over $50M in total value locked",
        "Architected and deployed 15+ smart contracts with zero security incidents",
        "Mentored junior developers and established best practices for smart contract development",
        "Collaborated with cross-functional teams to deliver complex blockchain solutions",
      ],
      technologies: ["Solidity", "React", "Node.js", "AWS", "PostgreSQL"],
    },
    {
      title: "Blockchain Developer",
      company: "CryptoInnovate Labs",
      period: "2020 - 2022",
      location: "New York, NY",
      description: [
        "Developed and deployed smart contracts for NFT marketplaces and DeFi protocols",
        "Built responsive web applications using React and modern JavaScript frameworks",
        "Implemented automated testing suites achieving 95% code coverage",
        "Optimized gas usage resulting in 30% reduction in transaction costs",
      ],
      technologies: ["Ethereum", "Polygon", "React", "Web3.js", "MongoDB"],
    },
    {
      title: "Full Stack Developer",
      company: "TechStartup Inc",
      period: "2019 - 2020",
      location: "Austin, TX",
      description: [
        "Built scalable web applications serving 100K+ daily active users",
        "Implemented RESTful APIs and microservices architecture",
        "Collaborated with UX/UI designers to create intuitive user interfaces",
        "Transitioned company's tech stack to modern blockchain technologies",
      ],
      technologies: ["JavaScript", "Python", "React", "Express", "MySQL"],
    },
  ];

  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "Stanford University",
      period: "2017 - 2019",
      location: "Stanford, CA",
      description:
        "Specialized in Distributed Systems and Cryptography. Thesis on blockchain scalability solutions.",
      gpa: "3.9/4.0",
    },
    {
      degree: "Bachelor of Science in Computer Engineering",
      school: "University of California, Berkeley",
      period: "2013 - 2017",
      location: "Berkeley, CA",
      description:
        "Graduated Magna Cum Laude. Focus on software engineering and computer networks.",
      gpa: "3.8/4.0",
    },
  ];

  const certifications = [
    {
      name: "Certified Ethereum Developer",
      issuer: "ConsenSys Academy",
      date: "2021",
      credential: "CED-2021-001234",
    },
    {
      name: "AWS Solutions Architect Professional",
      issuer: "Amazon Web Services",
      date: "2022",
      credential: "AWS-SAP-2022-567890",
    },
    {
      name: "Certified Blockchain Security Professional",
      issuer: "Blockchain Council",
      date: "2023",
      credential: "CBSP-2023-112233",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-x-hidden">
      {/* Enhanced Background Pattern */}
      <div className="fixed inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
              linear-gradient(rgba(99, 102, 241, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99, 102, 241, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: "100% 100%, 100% 100%, 40px 40px, 40px 40px",
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Dominion
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-all duration-300 hover:text-indigo-400 relative ${
                    activeSection === item.id
                      ? "text-indigo-400"
                      : "text-gray-300"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-indigo-400 rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Navigation Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-slate-800 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-800 bg-slate-900/95 backdrop-blur-md">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-3 px-4 text-sm font-medium transition-colors hover:text-indigo-400 hover:bg-slate-800/50 rounded-lg ${
                    activeSection === item.id
                      ? "text-indigo-400 bg-slate-800/30"
                      : "text-gray-300"
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
        className="min-h-screen flex items-center justify-center relative px-4 pt-25"
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-block p-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 mb-8">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-slate-900 flex items-center justify-center">
                <Image
                  src="/images/dominion-profile.jpg"
                  alt="Dominion"
                  width={150}
                  height={150}
                  className="rounded-full"
                />
              </div>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent leading-tight">
              Dominion
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-indigo-400 mb-6 font-medium">
              Full-Stack Web3 Developer
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Passionate about democratizing finance and empowering communities
              through blockchain technology. I specialize in creating intuitive
              DeFi platforms, secure smart contracts, and engaging NFT
              experiences that make Web3 accessible to everyone. Let's build the
              decentralized future together.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300 hover:scale-105"
            >
              <Zap className="mr-2" size={20} />
              View My Work
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-2 border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300 hover:scale-105"
            >
              <Send className="mr-2" size={20} />
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-8">
            <Link
              href="https://github.com/Dominion116"
              className="text-gray-400 hover:text-indigo-400 transition-all duration-300 hover:scale-110"
            >
              <Github size={28} />
            </Link>
            <Link
              href="https://x.com/Travishtech"
              className="text-gray-400 hover:text-indigo-400 transition-all duration-300 hover:scale-110"
            >
              <Twitter size={28} />
            </Link>
            <Link
              href="mailto:limbotech116@gmail.com"
              className="text-gray-400 hover:text-indigo-400 transition-all duration-300 hover:scale-110"
            >
              <Mail size={28} />
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-indigo-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              Passionate about building the decentralized future through
              innovative blockchain solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  My journey into Web3 started with a simple question: "What if we could rebuild the internet to truly belong to its users?" That curiosity led me from traditional web development into the fascinating world of blockchain technology, where I've spent the last 5+ years turning that vision into reality.
                </p>

                <p className="text-lg text-gray-300 leading-relaxed">
                  I thrive on solving complex problems at the intersection of technology and human needs. Whether I'm architecting a DeFi protocol that democratizes access to financial services, building an NFT marketplace that empowers creators, or designing DAO governance systems that give communities real power, my focus is always on creating solutions that matter.
                </p>

                <p className="text-lg text-gray-300 leading-relaxed">
                  Beyond the code, I'm deeply involved in the Web3 community—contributing to open-source projects, mentoring developers transitioning into blockchain, and constantly exploring emerging technologies like zero-knowledge proofs and cross-chain interoperability. I also yap about Web3 projects on Kaito leaderboard.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12">
                  <div className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-indigo-400 mb-2">
                      5+
                    </div>
                    <div className="text-gray-400 text-sm">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-indigo-400 mb-2">
                      2+
                    </div>
                    <div className="text-gray-400 text-sm">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-indigo-400 mb-2">
                      $10k+
                    </div>
                    <div className="text-gray-400 text-sm">TVL Managed</div>
                  </div>
                  {/* <div className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-indigo-400 mb-2">
                      100K+
                    </div>
                    <div className="text-gray-400 text-sm">Users Served</div>
                  </div> */}
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="w-full max-w-md mx-auto">
                  <div className="aspect-square bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800 rounded-2xl p-1">
                    <div className="w-full h-full bg-slate-900 rounded-2xl flex items-center justify-center">
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
                <div className="absolute -top-4 -right-4 bg-indigo-600 rounded-lg p-3 shadow-lg">
                  <Code className="text-white" size={24} />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-purple-600 rounded-lg p-3 shadow-lg">
                  <Database className="text-white" size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 lg:py-32 bg-slate-800/30 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              Showcasing innovative Web2 and Web3 solutions that push the boundaries of
              blockchain technology and the internet.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {projects
              .filter((project) => project.featured)
              .map((project, index) => (
                <Card
                  key={index}
                  className="bg-slate-800/50 border-slate-700 hover:border-indigo-500 transition-all duration-500 group hover:scale-105"
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={250}
                      className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-indigo-600/90 text-white">
                        Featured
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="pb-4">
                    <CardTitle className="text-white group-hover:text-indigo-400 transition-colors text-lg sm:text-xl">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400 text-sm sm:text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="bg-indigo-600/20 text-indigo-300 border-indigo-600/30 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <Link
                        href={project.github}
                        className="flex items-center gap-2 text-gray-400 hover:text-indigo-400 transition-colors text-sm font-medium"
                      >
                        <Github size={16} />
                        Code
                      </Link>
                      <Link
                        href={project.demo}
                        className="flex items-center gap-2 text-gray-400 hover:text-indigo-400 transition-colors text-sm font-medium"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>

          {/* Other Projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter((project) => !project.featured)
              .map((project, index) => (
                <Card
                  key={index}
                  className="bg-slate-800/30 border-slate-700 hover:border-indigo-500/50 transition-all duration-300 group"
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={200}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <CardHeader className="pb-3">
                    <CardTitle className="text-white group-hover:text-indigo-400 transition-colors text-lg">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400 text-sm line-clamp-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tech.slice(0, 3).map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="bg-slate-700 text-gray-300 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 3 && (
                        <Badge
                          variant="secondary"
                          className="bg-slate-700 text-gray-300 text-xs"
                        >
                          +{project.tech.length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="flex gap-4">
                      <Link
                        href={project.github}
                        className="flex items-center gap-1 text-gray-400 hover:text-indigo-400 transition-colors text-sm"
                      >
                        <Github size={14} />
                        Code
                      </Link>
                      <Link
                        href={project.demo}
                        className="flex items-center gap-1 text-gray-400 hover:text-indigo-400 transition-colors text-sm"
                      >
                        <ExternalLink size={14} />
                        Demo
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
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive expertise across the full blockchain development
              stack
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillCategory, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 hover:border-indigo-500 transition-all duration-300 group"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {skillCategory.icon}
                  </div>
                  <CardTitle className="text-white text-lg">
                    {skillCategory.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {skillCategory.items.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300 text-sm font-medium">
                            {skill.name}
                          </span>
                          <span className="text-indigo-400 text-xs">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-slate-700 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-indigo-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
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
      <section id="resume" className="py-20 lg:py-32 bg-slate-800/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Experience & Education
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              A journey of continuous learning and professional growth in
              blockchain technology
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Experience */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-indigo-400 flex items-center gap-3">
                <Users size={28} />
                Professional Experience
              </h3>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <Card
                    key={index}
                    className="bg-slate-800/50 border-slate-700 hover:border-indigo-500/50 transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-semibold text-white mb-1">
                            {exp.title}
                          </h4>
                          <div className="text-indigo-400 font-medium">
                            {exp.company}
                          </div>
                        </div>
                        <div className="text-sm text-gray-400 mt-2 sm:mt-0 sm:text-right">
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
                            className="text-gray-300 text-sm flex items-start gap-2"
                          >
                            <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="bg-indigo-600/20 text-indigo-300 border-indigo-600/30 text-xs"
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
              <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-indigo-400 flex items-center gap-3">
                <Award size={28} />
                Education & Certifications
              </h3>

              {/* Education */}
              <div className="space-y-6 mb-12">
                {education.map((edu, index) => (
                  <Card
                    key={index}
                    className="bg-slate-800/50 border-slate-700 hover:border-indigo-500/50 transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-1">
                            {edu.degree}
                          </h4>
                          <div className="text-indigo-400 font-medium">
                            {edu.school}
                          </div>
                        </div>
                        <div className="text-sm text-gray-400 mt-2 sm:mt-0 sm:text-right">
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
                      <p className="text-gray-300 text-sm mb-2">
                        {edu.description}
                      </p>
                      <div className="text-indigo-400 text-sm font-medium">
                        GPA: {edu.gpa}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Certifications */}
              <h4 className="text-xl font-semibold mb-6 text-white">
                Professional Certifications
              </h4>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <Card
                    key={index}
                    className="bg-slate-800/30 border-slate-700"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h5 className="font-semibold text-white text-sm">
                            {cert.name}
                          </h5>
                          <div className="text-indigo-400 text-xs">
                            {cert.issuer}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-gray-400 text-xs">
                            {cert.date}
                          </div>
                          <div className="text-gray-500 text-xs">
                            {cert.credential}
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
            <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300 hover:scale-105">
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
              Let's Build Together
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to bring your web3 vision to life? Let's discuss how we can
              create something extraordinary together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-2xl text-white">
                  Send a Message
                </CardTitle>
                <CardDescription className="text-gray-400">
                  I'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-2"
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
                      className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-indigo-500"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
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
                      className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-indigo-500"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-indigo-500 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 font-medium rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    <Send className="mr-2" size={20} />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white">
                  Get In Touch
                </h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Whether you're looking to build a DeFi protocol, launch an NFT
                  marketplace, or create a DAO, I'm here to help bring your web3
                  vision to reality. Let's discuss your project and explore the
                  possibilities together.
                </p>
              </div>

              <div className="grid gap-6">
                <Card className="bg-slate-800/30 border-slate-700 hover:border-indigo-500/50 transition-all duration-300">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">
                        Email
                      </h4>
                      <p className="text-gray-400">alex.chen@example.com</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/30 border-slate-700 hover:border-indigo-500/50 transition-all duration-300">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center">
                      <Phone className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">
                        Phone
                      </h4>
                      <p className="text-gray-400">+1 (555) 123-4567</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/30 border-slate-700 hover:border-indigo-500/50 transition-all duration-300">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">
                        Location
                      </h4>
                      <p className="text-gray-400">San Francisco, CA</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="pt-8">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Follow Me
                </h4>
                <div className="flex gap-4">
                  <Link
                    href="https://github.com/Dominion116"
                    className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-indigo-400 hover:border-indigo-500 transition-all duration-300 hover:scale-110"
                  >
                    <Github size={20} />
                  </Link>
                  <Link
                    href="https://x.com/Travishtech"
                    className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-indigo-400 hover:border-indigo-500 transition-all duration-300 hover:scale-110"
                  >
                    <Twitter size={20} />
                  </Link>
                  <Link
                    href="mailto:limbotech@gmail.com"
                    className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-indigo-400 hover:border-indigo-500 transition-all duration-300 hover:scale-110"
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
      <footer className="py-8 border-t border-slate-800 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Dominion. All rights reserved.
            </div>
            <div className="text-gray-400 text-sm">
              Built with React, Next.js & Tailwind CSS
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
