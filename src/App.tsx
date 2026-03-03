import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import type { Variants } from 'framer-motion'; 
import { Youtube, ArrowRight, Instagram, Facebook, Sparkles, MessageCircle, Radio, CheckCircle2, PlayCircle, X, Video, Megaphone, FileText } from 'lucide-react';

export default function App() {
  const primaryColor = '#8A3FFC';
  const { scrollY } = useScroll();
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState('about');
  
  const navY = useTransform(scrollY, [0, 100], [0, 8]);
  const navOpacity = useTransform(scrollY, [0, 100], [1, 0.95]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ['about', 'work', 'services'];
    
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const typingContainer: Variants = {
    initial: { opacity: 1 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const wordVars: Variants = {
    initial: { opacity: 0, y: 15 },
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const itemVars: Variants = {
    initial: { opacity: 0, y: 10 },
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  const floatingPhoto = {
    animate: {
      y: [0, -15, 0],
      rotate: [0, 0.5, -0.5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut" as const 
      }
    }
  };

  const floatingSocial = (i: number) => ({
    animate: {
      y: [0, -5, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        delay: i * 0.2,
        ease: "easeInOut" as const
      }
    }
  });

  const socialLinks = [
    { Icon: Youtube, color: 'text-[#FF0000]', glow: 'shadow-[#FF0000]/10', url: 'https://youtube.com/@ShaharaOnlineTV' },
    { Icon: Facebook, color: 'text-[#1877F2]', glow: 'shadow-[#1877F2]/10', url: 'https://www.facebook.com/profile.php?id=61556698025463' },
    { Icon: Instagram, color: 'text-[#E4405F]', glow: 'shadow-[#E4405F]/10', url: 'https://instagram.com' },
    { Icon: MessageCircle, color: 'text-[#25D366]', glow: 'shadow-[#25D366]/10', url: 'https://wa.me/9779868735225' },
  ];

  const projects = [
  { 
    id: "TkWo9Cur6TM", 
    title: "Kailali: Domestic Betrayal", 
    desc: "सौता ल्याउदा श्रीमानलाई लगाईन कालो मोसो ।। भारतबाट झिकाई सौताको राम धुलाई....Kailali", 
    views: "2.1M", 
    img: "/tum1.jpg" 
  },
  { 
    id: "fq4RkUkEnug", 
    title: "Marriage Fraud Exposed", 
    desc: "विहे गर्छु भन्दै १० वर्षिय जेठी महिलालाई एक पुरुषले यस्तो सम्म गरे ।। laxmi lamichhane", 
    views: "549K", 
    img: "/tum2.jpg" 
  },
  { 
    id: "D99F30XNpvY", 
    title: "The Runaway Husband", 
    desc: "बाहिर HOTEL मा राखेकी कान्छी श्रीमती घरमा आएपछि जेठि र कान्छी बिच भयो यस्तो.. श्रीमान भए फरार....", 
    views: "376K", 
    img: "/tum3.jpg" 
  },
  { 
    id: "Gh9xEE6LbLU", 
    title: "Second Marriage Conflict", 
    desc: "सन्तान नभए पछि श्रीमतीले गराईन श्रीमानको दोस्रो बिहे । श्रीमान र सौताले पिट्छन भन्दै पिडित श्रीमती..", 
    views: "356K", 
    img: "/tum4.jpg" 
  },
  { 
    id: "UORAG7rCEi0", 
    title: "Unconventional Love Story", 
    desc: "कैलालीमा अच्चमको घटना केटिले केटि भगाए । स्कुल पढ्दा खेरि बसेको माया.....", 
    views: "319K", 
    img: "/tum5.jpg" 
  },
  { 
    id: "AV7pqi-sZIM", 
    title: "Tragedy of Infidelity", 
    desc: "कैलाली नाठो काण्ड, श्रीमतीलाई रंगेहात भेटे छिमेकीले, विदेशमा रहेका श्रीमानले गरे आत्मा हत्या..", 
    views: "295K", 
    img: "/tum6.jpg" 
  },
];

  const serviceList = [
    {
      title: "Video Production",
      desc: "Creating high-impact documentaries, news segments, and digital stories with professional quality.",
      icon: Video,
      accent: "#8A3FFC"
    },
    {
      title: "Advertisement",
      desc: "Strategic media placements and digital ad campaigns designed to amplify your brand presence.",
      icon: Megaphone,
      accent: "#3B82F6"
    },
    {
      title: "Proposal Writing",
      desc: "Comprehensive project proposals and professional media documentation for grants and partnerships.",
      icon: FileText,
      accent: "#10B981"
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#050507] text-white font-sans selection:bg-purple-500/30 antialiased overflow-x-hidden">
      
      <div className="fixed inset-0 -z-20">
        <div className="absolute top-[-5%] left-[-5%] w-[35%] h-[35%] bg-purple-900/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.08] mix-blend-overlay" />
      </div>

      {/* --- Navbar (Fixed for Mobile) --- */}
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        style={{ y: navY, opacity: navOpacity }}
        className="fixed top-4 md:top-5 left-0 w-full z-50 px-4 md:px-6 flex justify-center"
      >
        <div className="bg-white/[0.05] backdrop-blur-2xl border border-white/10 px-5 md:px-6 py-2.5 md:py-2 rounded-full flex items-center justify-between w-full max-w-sm md:max-w-fit md:justify-center gap-4 md:gap-8 shadow-2xl">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => handleScroll('about')}>
            <div className="w-8 h-8 md:w-7 md:h-7 rounded-lg flex items-center justify-center font-black text-white text-[11px] md:text-[9px]" style={{ background: primaryColor }}>S</div>
            <span className="text-[10px] md:text-[10px] font-bold tracking-widest uppercase group-hover:text-purple-400 transition-colors hidden sm:inline-block">Shahara TV</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            {['About', 'Work', 'Services'].map((item) => (
              <button 
                key={item} 
                onClick={() => handleScroll(item)}
                className={`text-[9px] font-bold tracking-widest uppercase transition-all duration-300 ${activeSection === item.toLowerCase() ? 'text-purple-400' : 'text-neutral-400 hover:text-white'}`}
              >
                {item}
              </button>
            ))}
          </div>
          <button onClick={() => window.open('thapakhakendra017@gmail.com')} className="bg-white text-black px-5 py-2 md:py-1.5 rounded-full text-[10px] md:text-[9px] font-black uppercase tracking-widest hover:scale-105 transition-all whitespace-nowrap">Connect</button>
        </div>
      </motion.nav>

      {/* --- About/Hero Section (Fixed Gap & Photo Position) --- */}
      <section id="about" className="relative pt-28 md:pt-32 pb-12 px-5 md:px-8 max-w-6xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 items-center min-h-[85vh] scroll-mt-20">
        <motion.div variants={typingContainer} initial="initial" animate="animate" className="space-y-6 w-full">
          <motion.div variants={itemVars} className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[8px] sm:text-[9px] font-bold tracking-[0.3em] uppercase text-purple-400">
            <Sparkles size={10} className="animate-pulse" /> Pioneering Digital Journalism
          </motion.div>

          <motion.h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight will-change-transform">
            {["I", "am", "Khakendra"].map((word, i) => (
              <motion.span key={i} variants={wordVars} className={`inline-block mr-2 sm:mr-3 ${i === 2 ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300' : ''}`}>
                {word}
              </motion.span>
            ))}
            <br />
            {["Thapa", "Magar."].map((word, i) => (
              <motion.span key={i} variants={wordVars} className="inline-block mr-2 sm:mr-3 mt-1 sm:mt-0">
                {word}
              </motion.span>
            ))}
          </motion.h1>
          
          <div className="space-y-4">
            <motion.p variants={itemVars} className="text-neutral-400 text-sm sm:text-base md:text-lg max-w-md leading-relaxed border-l-2 border-purple-500/30 pl-4 sm:pl-5">
               An independent journalist and dedicated content architect. Through **Shahara Online TV**, I leverage digital storytelling to amplify unheard voices.
            </motion.p>
            
            <motion.div variants={itemVars} className="flex flex-wrap gap-5 md:gap-8 items-center pt-4 border-t border-white/5 w-full md:w-fit">
               <div className="text-left group cursor-default"><p className="text-lg sm:text-xl font-black group-hover:text-purple-400 transition-colors">92K+</p><p className="text-neutral-500 text-[7px] font-bold uppercase tracking-widest mt-0.5">Global Audience</p></div>
               <div className="text-left group cursor-default"><p className="text-lg sm:text-xl font-black group-hover:text-purple-400 transition-colors">1.2K</p><p className="text-neutral-500 text-[7px] font-bold uppercase tracking-widest mt-0.5">In-depth Reports</p></div>
               <div className="text-left group cursor-default"><p className="text-lg sm:text-xl font-black group-hover:text-purple-400 transition-colors">14+</p><p className="text-neutral-500 text-[7px] font-bold uppercase tracking-widest mt-0.5">Years Experience</p></div>
            </motion.div>
          </div>
          
          <motion.div variants={itemVars} className="flex flex-wrap gap-3">
             {socialLinks.map((social, i) => (
               <motion.a 
                key={i} 
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={floatingSocial(i)} 
                animate="animate" 
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.08)" }} 
                className={`p-3 md:p-3.5 bg-white/5 border border-white/10 rounded-xl transition-all shadow-lg ${social.color} ${social.glow}`}
               >
                 <social.Icon size={16} />
               </motion.a>
             ))}
          </motion.div>

          <motion.div variants={itemVars} className="pt-2 flex gap-4 items-center">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} onClick={() => handleScroll('work')} className="group relative overflow-hidden bg-[#8A3FFC] text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-2xl text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-3 transition-all shadow-[0_0_20px_rgba(138,63,252,0.3)] hover:shadow-[0_0_35px_rgba(138,63,252,0.6)]">
              <span className="relative z-10">View Investigations</span>
              <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <motion.div animate={{ x: ['-100%', '200%'] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }} className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Removed margin-top (mt-10) so it doesn't go down */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="relative flex justify-center lg:justify-end w-full mt-4 lg:mt-0">
          <motion.div variants={floatingPhoto} animate="animate" className="relative w-full max-w-[300px] md:max-w-[360px] aspect-[4/5] group">
            <div className="absolute inset-0 bg-purple-600/10 rounded-[2rem] blur-[60px] group-hover:bg-purple-600/20 transition-colors duration-700"></div>
            <div className="w-full h-full bg-neutral-900 rounded-[24px] md:rounded-[32px] overflow-hidden border border-white/10 relative z-10 shadow-2xl" style={{ transform: 'translateZ(0)', WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}>
               <motion.img src="/mama.jpg" alt="Khakendra" className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-700" whileHover={{ scale: 1.05 }}/>
               <div className="absolute bottom-3 left-3 right-3 bg-black/40 backdrop-blur-xl border border-white/10 p-3.5 md:p-4 rounded-xl shadow-2xl">
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                      <p className="text-[6px] font-bold text-purple-400 uppercase tracking-widest mb-0.5">Media Influence</p>
                      <div className="flex items-center gap-1.5">
                        <p className="text-base md:text-lg font-black tracking-tight">Verified Journalist</p>
                        <motion.div animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}><CheckCircle2 size={16} className="text-[#1D9BF0] fill-[#1D9BF0]/20" strokeWidth={3} /></motion.div>
                      </div>
                    </div>
                    <div className="text-red-500"><Youtube size={20} /></div>
                  </div>
               </div>
               <div className="absolute top-4 right-4 flex items-center gap-2 px-2.5 md:px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-lg border border-white/10">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                  <span className="text-[7px] md:text-[8px] font-black uppercase tracking-widest text-white">Live</span>
                  <Radio size={12} className="text-purple-400" />
               </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* --- WORK SECTION --- */}
      <section id="work" className="py-16 md:py-24 relative scroll-mt-20">
        <div className="px-5 md:px-8 max-w-6xl mx-auto mb-12 md:mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-[2px] bg-purple-500" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-purple-400">Work</span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter mb-4">
                Featured <span className="text-purple-500">Investigations</span>
              </h2>
              <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-lg">
                Exploring the truth behind the shadows. Here is a curated selection of our most impactful digital reports and field investigations.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5 md:px-8 max-w-6xl mx-auto">
          {projects.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white/[0.03] border border-white/10 p-5 rounded-2xl h-full flex flex-col hover:bg-white/[0.06] hover:border-purple-500/30 transition-all duration-500 relative overflow-hidden">
                <div onClick={() => setActiveVideo(p.id)} className="relative aspect-video rounded-xl overflow-hidden cursor-pointer mb-6">
                  <img src={p.img} className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center shadow-lg">
                      <PlayCircle size={24} className="text-white ml-0.5" />
                    </div>
                  </div>
                  <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-3 right-3 text-[8px] font-bold text-white bg-purple-600 px-2 py-1 rounded-md backdrop-blur-md shadow-lg">
                    {p.views} VIEWS
                  </motion.div>
                </div>
                <div className="flex-grow space-y-3">
                  <h3 className="text-lg font-black uppercase tracking-tight leading-tight group-hover:text-purple-400 transition-colors">{p.title}</h3>
                  <p className="text-[11px] text-neutral-400 leading-relaxed line-clamp-2">{p.desc}</p>
                </div>
                <div className="pt-6 mt-auto border-t border-white/5 flex justify-between items-center">
                   <button onClick={() => setActiveVideo(p.id)} className="text-[9px] font-black uppercase tracking-widest text-purple-400 flex items-center gap-2 group/btn">
                     Watch Report 
                     <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform"/>
                   </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-16 md:py-24 relative scroll-mt-20">
        <div className="px-5 md:px-8 max-w-6xl mx-auto mb-12 md:mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-[2px] bg-purple-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-purple-400">Expertise</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter mb-4">
            Our <span className="text-purple-500">Services</span>
          </h2>
          <p className="text-neutral-400 text-sm md:text-lg leading-relaxed max-w-2xl border-l-2 border-purple-500/30 pl-4 sm:pl-6">
            We provide comprehensive media solutions tailored for the digital age. From professional journalism to strategic brand storytelling, we bridge the gap between complex information and audience engagement through high-quality production and creative documentation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-5 md:px-8 max-w-6xl mx-auto">
          {serviceList.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="relative group p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-[#0A0A0C] border border-white/5 overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute -top-24 -right-24 w-48 h-48 blur-[100px] transition-all duration-700 group-hover:opacity-100 opacity-40 group-hover:scale-150" style={{ background: service.accent }} />
              
              <div className="relative z-10 flex flex-col h-full">
                <motion.div 
                  animate={{ 
                    y: [0, -8, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: i * 0.5
                  }}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-[1.5rem] md:rounded-[2rem] flex items-center justify-center mb-8 md:mb-10 bg-white/5 border border-white/10 group-hover:border-white/20 shadow-inner overflow-hidden"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <service.icon size={32} style={{ color: service.accent }} strokeWidth={1.5} />
                  </motion.div>
                </motion.div>

                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-3 md:mb-4 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-neutral-400 text-sm leading-relaxed font-medium flex-grow">
                  {service.desc}
                </p>

                <div className="mt-6 md:mt-8 w-12 h-1 rounded-full bg-neutral-800 overflow-hidden">
                  <motion.div 
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "0%" }}
                    transition={{ delay: 0.5 + (i * 0.2), duration: 0.8 }}
                    className="w-full h-full"
                    style={{ background: service.accent }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Video Modal --- */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4">
            <button onClick={() => setActiveVideo(null)} className="absolute top-4 right-4 md:top-8 md:right-8 text-white/50 hover:text-white transition-colors z-50 bg-black/50 p-2 rounded-full md:bg-transparent md:p-0"><X size={28}/></button>
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="w-full max-w-5xl aspect-video rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(138,63,252,0.2)] border border-white/10 relative z-40">
              <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`} frameBorder="0" allowFullScreen></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="py-10 md:py-12 text-center border-t border-white/5 flex flex-col gap-2">
        <p className="text-[7px] md:text-[8px] font-bold tracking-[0.5em] uppercase text-neutral-500">Unbiased Journalism • Shahara Online TV •</p>
        <p className="text-[9px] md:text-[10px] font-medium text-neutral-600">Designed by Khang</p>
      </footer>
    </div>
  );
}