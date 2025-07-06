import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ExternalLink, Code, Palette, Zap, Brain, Server, Smartphone, Edit3, Save, Plus, Trash2, Menu, X, Award } from 'lucide-react';
import * as THREE from 'three';

// NavBar Component
const NavBar = ({ personalInfo }) => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when a link is clicked (for smooth scrolling)
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-30 backdrop-blur-lg bg-white/10 shadow-lg rounded-b-2xl">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo/Name */}
        <a href="#hero" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent" onClick={handleLinkClick}>
          {personalInfo.name.split(' ')[0] || 'Portfolio'}
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="text-lg font-medium text-gray-200 hover:text-cyan-400 transition-colors" onClick={handleLinkClick}>About</a>
          <a href="#projects" className="text-lg font-medium text-gray-200 hover:text-cyan-400 transition-colors" onClick={handleLinkClick}>Projects</a>
          <a href="#certificates" className="text-lg font-medium text-gray-200 hover:text-cyan-400 transition-colors" onClick={handleLinkClick}>Certificates</a> {/* Added Certificates link */}
          <a href="#contact" className="text-lg font-medium text-gray-200 hover:text-cyan-400 transition-colors" onClick={handleLinkClick}>Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white/10 backdrop-blur-md pb-4 rounded-b-2xl"
          >
            <div className="flex flex-col items-center space-y-4 py-4">
              <a href="#about" className="text-xl font-medium text-gray-200 hover:text-cyan-400 transition-colors w-full text-center py-2" onClick={handleLinkClick}>About</a>
              <a href="#projects" className="text-xl font-medium text-gray-200 hover:text-cyan-400 transition-colors w-full text-center py-2" onClick={handleLinkClick}>Projects</a>
              <a href="#certificates" className="text-xl font-medium text-gray-200 hover:text-cyan-400 transition-colors w-full text-center py-2" onClick={handleLinkClick}>Certificates</a> {/* Added Certificates link */}
              <a href="#contact" className="text-xl font-medium text-gray-200 hover:text-cyan-400 transition-colors w-full text-center py-2" onClick={handleLinkClick}>Contact</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};


const Portfolio = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isEditing, setIsEditing] = useState(false);
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const { scrollYProgress } = useScroll();
  
  // Personal Information State
  const [personalInfo, setPersonalInfo] = useState({
    name: 'Akash Tiwari',
    title: 'Computer Science Graduate • Java Full-Stack Developer • Coding Enthusiast',
    email: 'tiwariakash.edu@gmail.com',
    github: 'https://github.com/Akash-tiwari05',
    linkedin: 'linkedin.com/in/akash-tiwari-0b5105253/',
    aboutText1: 'Fresh Computer Science graduate with a passion for creating innovative digital solutions. I specialize in full-stack development, machine learning, and creating user-centric experiences that solve real-world problems.',
    aboutText2: 'When I\'m not coding, you\'ll find me exploring the latest tech trends, contributing to open-source projects, or working on personal projects that push the boundaries of what\'s possible.',
    resumeLink: '#'
  });

  // Projects State
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "PeerQuest - MicroInternship Platform",
      description: "PeerQuest is a micro-internship platform that connects students with real-world projects, enhancing their skills and employability.",
      tech: ["React", "Spring Boot", "Socket.io", "Kafka", "PostgreSQL", "Tailwind","Docker", "Kubernetes"],
      link: "https://github.com/Akash-tiwari05/Mentormesh_frontend",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Queue Booking System",
      description: "Queue Booking System is a web application that allows users to book slots in queues for various services, reducing wait times and improving customer experience.",
      tech: ["React.js", "MySql", "RazorPay", "Tailwind","Spring Boot","Microservices","Keycloak"],
      link: "https://github.com/Akash-tiwari05/Salon_Booking_Application_Frontend",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "Project Tracker - Team Collaboration Application",
      description: "Project Tracker is a team collaboration application that helps teams manage projects, track progress, and collaborate effectively.",
      tech: ["React.Js", "Spring Boot", "Component Ui", "My Sql", "Tailwind", "WebSocket"],
      link: "https://github.com/Akash-tiwari05/IET_PROJECT_TRACKER_FRONTEND",
      gradient: "from-green-500 to-emerald-500"
    }
  ]);

  // Skills State
  const [skills, setSkills] = useState([
    { id: 1, name: "Backend Development", icon: "Server", level: 85 },
    { id: 2, name: "Frontend Development", icon: "Code", level: 80 },
    { id: 3, name: "UI/UX Design", icon: "Palette", level: 80 },
    { id: 5, name: "DevOps & Tools", icon: "Smartphone", level: 70 },
    { id: 6, name: "Performance Optimization", icon: "Zap", level: 88 }
  ]);

  // Certificates State
  const [certificates, setCertificates] = useState([
    {
      id: 1,
      title: "Certificate of Excellence- Front End \& Full-Stack Web Development",
      issuer: "Coding Ninjas",
      date: "June 2024",
      link: "https://certificate.codingninjas.com/view/c0e1a20584f0e053",
      gradient: "from-blue-600 to-blue-400"
    },
    {
      id: 2,
      title: "Certificate of Completion- Spring Boot",
      issuer: "Coding Ninjas",
      date: "Oct 2024",
      link: "https://certificate.codingninjas.com/view/caa0caadf2a0a9b1",
      gradient: "from-orange-600 to-yellow-400"
    },
    {
      id: 2,
      title: "Hands-On React.js. Build advanced web applications",
      issuer: "Udmey",
      date: "Oct 2024",
      link: "https://www.udemy.com/certificate/UC-0e381a4d-32a0-4bb8-99b6-bbf8471e00ee/",
      gradient: "from-orange-600 to-yellow-400"
    }
    
  ]);

  const iconMap = {
    Code, Server, Palette, Brain, Smartphone, Zap
  };

  // Three.js setup
  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    
    const geometries = [
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.SphereGeometry(0.7, 32, 32),
      new THREE.OctahedronGeometry(0.8),
      new THREE.TetrahedronGeometry(0.9),
    ];

    const materials = [
      new THREE.MeshBasicMaterial({ color: 0x6366f1, wireframe: true }),
      new THREE.MeshBasicMaterial({ color: 0x8b5cf6, wireframe: true }),
      new THREE.MeshBasicMaterial({ color: 0x06b6d4, wireframe: true }),
      new THREE.MeshBasicMaterial({ color: 0x10b981, wireframe: true }),
    ];

    const meshes = [];
    for (let i = 0; i < 15; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = materials[Math.floor(Math.random() * materials.length)];
      const mesh = new THREE.Mesh(geometry, material);
      
      mesh.position.x = (Math.random() - 0.5) * 20;
      mesh.position.y = (Math.random() - 0.5) * 20;
      mesh.position.z = (Math.random() - 0.5) * 20;
      
      mesh.rotation.x = Math.random() * Math.PI;
      mesh.rotation.y = Math.random() * Math.PI;
      
      scene.add(mesh);
      meshes.push(mesh);
    }

    camera.position.z = 10;

    const animate = () => {
      requestAnimationFrame(animate);
      
      meshes.forEach((mesh, index) => {
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.01;
        mesh.position.y += Math.sin(Date.now() * 0.001 + index) * 0.001;
      });
      
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Project management functions
  const addProject = () => {
    const newProject = {
      id: Date.now(),
      title: "New Project",
      description: "Project description here",
      tech: ["React"],
      link: "#",
      gradient: "from-purple-500 to-pink-500"
    };
    setProjects([...projects, newProject]);
  };

  const updateProject = (id, field, value) => {
    setProjects(projects.map(project => 
      project.id === id ? { ...project, [field]: value } : project
    ));
  };

  const updateProjectTech = (id, techArray) => {
    setProjects(projects.map(project => 
      project.id === id ? { ...project, tech: techArray } : project
    ));
  };

  const deleteProject = (id) => {
    setProjects(projects.filter(project => project.id !== id));
  };

  // Skill management functions
  const addSkill = () => {
    const newSkill = {
      id: Date.now(),
      name: "New Skill",
      icon: "Code",
      level: 50
    };
    setSkills([...skills, newSkill]);
  };

  const updateSkill = (id, field, value) => {
    setSkills(skills.map(skill => 
      skill.id === id ? { ...skill, [field]: value } : skill
    ));
  };

  const deleteSkill = (id) => {
    setSkills(skills.filter(skill => skill.id !== id));
  };

  // Certificate management functions
  const addCertificate = () => {
    const newCertificate = {
      id: Date.now(),
      title: "New Certificate",
      issuer: "Issuer Name",
      date: "Month Year",
      link: "#",
      gradient: "from-gray-500 to-gray-700"
    };
    setCertificates([...certificates, newCertificate]);
  };

  const updateCertificate = (id, field, value) => {
    setCertificates(certificates.map(cert => 
      cert.id === id ? { ...cert, [field]: value } : cert
    ));
  };

  const deleteCertificate = (id) => {
    setCertificates(certificates.filter(cert => cert.id !== id));
  };


  return (
    <div className="min-h-screen bg-black text-white overflow-hidden" ref={containerRef}>
      {/* Navigation Bar */}
      <NavBar personalInfo={personalInfo} />
      
      {/* 3D Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-pink-900/20 z-10 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-20 pt-20"> {/* Added pt-20 to push content below fixed navbar */}
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="backdrop-blur-lg bg-white/10 rounded-3xl p-8 shadow-2xl border border-white/20"
            >
              {isEditing ? (
                <div className="space-y-4">
                  <input
                    type="text"
                    value={personalInfo.name}
                    onChange={(e) => setPersonalInfo({...personalInfo, name: e.target.value})}
                    className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent bg-transparent border-b-2 border-white/30 outline-none text-center w-full"
                    placeholder="Your Name"
                  />
                  <textarea
                    value={personalInfo.title}
                    onChange={(e) => setPersonalInfo({...personalInfo, title: e.target.value})}
                    className="text-xl md:text-2xl mb-8 text-gray-300 bg-transparent border-b-2 border-white/30 outline-none text-center w-full resize-none"
                    placeholder="Your Title"
                    rows="2"
                  />
                  <input
                    type="email"
                    value={personalInfo.email}
                    onChange={(e) => setPersonalInfo({...personalInfo, email: e.target.value})}
                    className="bg-white/10 p-3 rounded-lg border border-white/20 outline-none w-full"
                    placeholder="your.email@example.com"
                  />
                  <input
                    type="url"
                    value={personalInfo.github}
                    onChange={(e) => setPersonalInfo({...personalInfo, github: e.target.value})}
                    className="bg-white/10 p-3 rounded-lg border border-white/20 outline-none w-full"
                    placeholder="GitHub URL"
                  />
                  <input
                    type="url"
                    value={personalInfo.linkedin}
                    onChange={(e) => setPersonalInfo({...personalInfo, linkedin: e.target.value})}
                    className="bg-white/10 p-3 rounded-lg border border-white/20 outline-none w-full"
                    placeholder="LinkedIn URL"
                  />
                  <input
                    type="url"
                    value={personalInfo.resumeLink}
                    onChange={(e) => setPersonalInfo({...personalInfo, resumeLink: e.target.value})}
                    className="bg-white/10 p-3 rounded-lg border border-white/20 outline-none w-full"
                    placeholder="Resume Download Link"
                  />
                </div>
              ) : (
                <>
                  <motion.h1 
                    className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    {personalInfo.name}
                  </motion.h1>
                  
                  <motion.p 
                    className="text-xl md:text-2xl mb-8 text-gray-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    {personalInfo.title}
                  </motion.p>
                  
                  <motion.div 
                    className="flex flex-wrap justify-center gap-4 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <motion.a
                      href={personalInfo.resumeLink}
                      whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(99, 102, 241, 0.3)" }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:from-indigo-600 hover:to-purple-700 transition-all"
                    >
                      <Download size={20} />
                      Download Resume
                    </motion.a>
                    
                    <motion.a
                      href={`mailto:${personalInfo.email}`}
                      whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(16, 185, 129, 0.3)" }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:from-green-600 hover:to-emerald-700 transition-all"
                    >
                      <Mail size={20} />
                      Contact Me
                    </motion.a>
                  </motion.div>
                  
                  <motion.div 
                    className="flex justify-center gap-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    <motion.a
                      href={personalInfo.github}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all border border-white/20"
                    >
                      <Github size={24} />
                    </motion.a>
                    <motion.a
                      href={personalInfo.linkedin}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all border border-white/20"
                    >
                      <Linkedin size={24} />
                    </motion.a>
                    <motion.a
                      href={`mailto:${personalInfo.email}`}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all border border-white/20"
                    >
                      <Mail size={24} />
                    </motion.a>
                  </motion.div>
                </>
              )}
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="backdrop-blur-lg bg-white/5 rounded-3xl p-8 shadow-2xl border border-white/10"
            >
              <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                About Me
              </h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  {isEditing ? (
                    <div className="space-y-4">
                      <textarea
                        value={personalInfo.aboutText1}
                        onChange={(e) => setPersonalInfo({...personalInfo, aboutText1: e.target.value})}
                        className="w-full bg-white/10 p-4 rounded-lg border border-white/20 outline-none text-gray-300 resize-none"
                        rows="4"
                        placeholder="First paragraph about yourself"
                      />
                      <textarea
                        value={personalInfo.aboutText2}
                        onChange={(e) => setPersonalInfo({...personalInfo, aboutText2: e.target.value})}
                        className="w-full bg-white/10 p-4 rounded-lg border border-white/20 outline-none text-gray-300 resize-none"
                        rows="4"
                        placeholder="Second paragraph about yourself"
                      />
                    </div>
                  ) : (
                    <>
                      <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                        {personalInfo.aboutText1}
                      </p>
                      <p className="text-lg text-gray-300 leading-relaxed">
                        {personalInfo.aboutText2}
                      </p>
                    </>
                  )}
                </div>
                
                <div className="space-y-6">
                  {isEditing && (
                    <button
                      onClick={addSkill}
                      className="w-full bg-gradient-to-r from-green-500 to-emerald-600 p-2 rounded-lg flex items-center justify-center gap-2 hover:from-green-600 hover:to-emerald-700 transition-all"
                    >
                      <Plus size={20} />
                      Add Skill
                    </button>
                  )}
                  
                  {skills.map((skill, index) => {
                    const IconComponent = iconMap[skill.icon];
                    return (
                      <motion.div
                        key={skill.id}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group"
                      >
                        {isEditing ? (
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <input
                                type="text"
                                value={skill.name}
                                onChange={(e) => updateSkill(skill.id, 'name', e.target.value)}
                                className="flex-1 bg-white/10 p-2 rounded border border-white/20 outline-none"
                                placeholder="Skill Name"
                              />
                              <select
                                value={skill.icon}
                                onChange={(e) => updateSkill(skill.id, 'icon', e.target.value)}
                                className="bg-white/10 p-2 rounded border border-white/20 outline-none"
                              >
                                <option value="Code">Code</option>
                                <option value="Server">Server</option>
                                <option value="Palette">Palette</option>
                                <option value="Brain">Brain</option>
                                <option value="Smartphone">Smartphone</option>
                                <option value="Zap">Zap</option>
                              </select>
                              <button
                                onClick={() => deleteSkill(skill.id)}
                                className="p-2 bg-red-500 rounded hover:bg-red-600 transition-colors"
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                            <input
                              type="range"
                              min="0"
                              max="100"
                              value={skill.level}
                              onChange={(e) => updateSkill(skill.id, 'level', parseInt(e.target.value))}
                              className="w-full"
                            />
                          </div>
                        ) : (
                          <>
                            <div className="flex items-center gap-3 mb-2">
                              <IconComponent size={20} className="text-cyan-400" />
                              <span className="font-semibold">{skill.name}</span>
                            </div>
                            <div className="w-full bg-gray-800 rounded-full h-2">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                transition={{ duration: 1, delay: index * 0.1 }}
                                className="bg-gradient-to-r from-cyan-400 to-purple-400 h-2 rounded-full"
                              />
                            </div>
                          </>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
            >
              Featured Projects
            </motion.h2>
            
            {isEditing && (
              <div className="text-center mb-8">
                <button
                  onClick={addProject}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto hover:from-green-600 hover:to-emerald-700 transition-all"
                >
                  <Plus size={20} />
                  Add Project
                </button>
              </div>
            )}
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group backdrop-blur-lg bg-white/5 rounded-2xl p-6 shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  {isEditing && (
                    <div className="mb-4 flex justify-end">
                      <button
                        onClick={() => deleteProject(project.id)}
                        className="p-2 bg-red-500 rounded hover:bg-red-600 transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  )}
                  
                  <div className={`w-full h-48 bg-gradient-to-br ${project.gradient} rounded-xl mb-6 flex items-center justify-center`}>
                    <Code size={48} className="text-white opacity-80" />
                  </div>
                  
                  {isEditing ? (
                    <div className="space-y-4">
                      <input
                        type="text"
                        value={project.title}
                        onChange={(e) => updateProject(project.id, 'title', e.target.value)}
                        className="w-full bg-white/10 p-2 rounded border border-white/20 outline-none font-bold"
                        placeholder="Project Title"
                      />
                      <textarea
                        value={project.description}
                        onChange={(e) => updateProject(project.id, 'description', e.target.value)}
                        className="w-full bg-white/10 p-2 rounded border border-white/20 outline-none text-gray-300 resize-none"
                        rows="3"
                        placeholder="Project Description"
                      />
                      <input
                        type="text"
                        value={project.tech.join(', ')}
                        onChange={(e) => updateProjectTech(project.id, e.target.value.split(', ').filter(t => t.trim()))}
                        className="w-full bg-white/10 p-2 rounded border border-white/20 outline-none"
                        placeholder="Technologies (comma separated)"
                      />
                      <input
                        type="url"
                        value={project.link}
                        onChange={(e) => updateProject(project.id, 'link', e.target.value)}
                        className="w-full bg-white/10 p-2 rounded border border-white/20 outline-none"
                        placeholder="Project Link"
                      />
                      <select
                        value={project.gradient}
                        onChange={(e) => updateProject(project.id, 'gradient', e.target.value)}
                        className="w-full bg-white/10 p-2 rounded border border-white/20 outline-none"
                      >
                        <option value="from-purple-500 to-pink-500">Purple to Pink</option>
                        <option value="from-blue-500 to-cyan-500">Blue to Cyan</option>
                        <option value="from-green-500 to-emerald-500">Green to Emerald</option>
                        <option value="from-yellow-500 to-orange-500">Yellow to Orange</option>
                        <option value="from-red-500 to-pink-500">Red to Pink</option>
                      </select>
                    </div>
                  ) : (
                    <>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <motion.a
                        href={project.link}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                      >
                        View Project <ExternalLink size={16} />
                      </motion.a>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Certificates Section */}
        <section id="certificates" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
            >
              Certificates
            </motion.h2>
            
            {isEditing && (
              <div className="text-center mb-8">
                <button
                  onClick={addCertificate}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto hover:from-green-600 hover:to-emerald-700 transition-all"
                >
                  <Plus size={20} />
                  Add Certificate
                </button>
              </div>
            )}
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certificates.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group backdrop-blur-lg bg-white/5 rounded-2xl p-6 shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  {isEditing && (
                    <div className="mb-4 flex justify-end">
                      <button
                        onClick={() => deleteCertificate(cert.id)}
                        className="p-2 bg-red-500 rounded hover:bg-red-600 transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  )}
                  
                  <div className={`w-full h-48 bg-gradient-to-br ${cert.gradient} rounded-xl mb-6 flex items-center justify-center`}>
                    <Award size={48} className="text-white opacity-80" />
                  </div>
                  
                  {isEditing ? (
                    <div className="space-y-4">
                      <input
                        type="text"
                        value={cert.title}
                        onChange={(e) => updateCertificate(cert.id, 'title', e.target.value)}
                        className="w-full bg-white/10 p-2 rounded border border-white/20 outline-none font-bold"
                        placeholder="Certificate Title"
                      />
                      <input
                        type="text"
                        value={cert.issuer}
                        onChange={(e) => updateCertificate(cert.id, 'issuer', e.target.value)}
                        className="w-full bg-white/10 p-2 rounded border border-white/20 outline-none text-gray-300"
                        placeholder="Issuer"
                      />
                      <input
                        type="text"
                        value={cert.date}
                        onChange={(e) => updateCertificate(cert.id, 'date', e.target.value)}
                        className="w-full bg-white/10 p-2 rounded border border-white/20 outline-none text-gray-300"
                        placeholder="Date (e.g., Jan 2023)"
                      />
                      <input
                        type="url"
                        value={cert.link}
                        onChange={(e) => updateCertificate(cert.id, 'link', e.target.value)}
                        className="w-full bg-white/10 p-2 rounded border border-white/20 outline-none"
                        placeholder="Certificate Link"
                      />
                      <select
                        value={cert.gradient}
                        onChange={(e) => updateCertificate(cert.id, 'gradient', e.target.value)}
                        className="w-full bg-white/10 p-2 rounded border border-white/20 outline-none"
                      >
                        <option value="from-blue-600 to-blue-400">Blue Gradient</option>
                        <option value="from-orange-600 to-yellow-400">Orange to Yellow</option>
                        <option value="from-red-600 to-red-400">Red Gradient</option>
                        <option value="from-green-500 to-emerald-500">Green to Emerald</option>
                        <option value="from-purple-500 to-pink-500">Purple to Pink</option>
                      </select>
                    </div>
                  ) : (
                    <>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-1">{cert.issuer}</p>
                      <p className="text-gray-400 text-xs mb-4">{cert.date}</p>
                      
                      <motion.a
                        href={cert.link}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                      >
                        View Certificate <ExternalLink size={16} />
                      </motion.a>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="backdrop-blur-lg bg-white/5 rounded-3xl p-8 shadow-2xl border border-white/10 text-center"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Let's Work Together
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Ready to bring your ideas to life? Let's create something amazing together.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <motion.a
                  href={`mailto:${personalInfo.email}`}
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(99, 102, 241, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:from-indigo-600 hover:to-purple-700 transition-all"
                >
                  <Mail size={20} />
                  {personalInfo.email}
                </motion.a>
                
                <motion.a
                  href={personalInfo.github}
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(16, 185, 129, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:from-green-600 hover:to-emerald-700 transition-all"
                >
                  <Github size={20} />
                  GitHub Profile
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
