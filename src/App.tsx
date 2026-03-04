/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import { 
  Scale, 
  Gavel, 
  FileText, 
  Users, 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ChevronRight,
  ChevronDown,
  ShieldCheck,
  Briefcase,
  Globe,
  Instagram,
  Linkedin,
  Twitter,
  Stethoscope,
  HardHat,
  Heart,
  ArrowRight,
  Landmark,
  Database,
  Search
} from 'lucide-react';
import ServiceDetail from './components/ServiceDetail';
import ServicesPage from './pages/ServicesPage';
import { servicesData } from './servicesData';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (location.pathname === '/' && href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (href.startsWith('#')) {
      e.preventDefault();
      navigate('/' + href);
    }
  };

  const servicesLinks = servicesData.map(s => ({ name: s.title.toUpperCase(), href: `/hizmetlerimiz/${s.slug}` }));

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || location.pathname !== '/' ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 border-2 border-gold flex items-center justify-center rounded-sm group-hover:bg-gold transition-colors duration-300">
            <span className={`text-xl font-serif font-bold ${isScrolled || location.pathname !== '/' ? 'text-black' : 'text-black'} group-hover:text-white`}>RÖ</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-serif font-bold tracking-wider uppercase leading-none">Av. Rahime Özpolat</span>
            <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-gold-dark">Hukuk & Danışmanlık</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" onClick={(e) => handleNavClick(e, '#home')} className="text-sm font-medium uppercase tracking-widest hover:text-gold transition-colors duration-200">Anasayfa</Link>
          
          {/* Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <Link to="/hizmetlerimiz" className="flex items-center gap-1 text-sm font-medium uppercase tracking-widest hover:text-gold transition-colors duration-200">
              AVUKATLIK HİZMETLERİMİZ <ChevronDown size={14} />
            </Link>
            
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 w-72 bg-white shadow-2xl border-t-2 border-gold mt-2 py-2 overflow-hidden"
                >
                  {servicesLinks.map((link) => (
                    <Link 
                      key={link.name} 
                      to={link.href}
                      className="block px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-gray-700 hover:bg-gold hover:text-white transition-all duration-200"
                    >
                      {link.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/" onClick={(e) => handleNavClick(e, '#contact')} className="text-sm font-medium uppercase tracking-widest hover:text-gold transition-colors duration-200">İletişim</Link>
          
          <Link 
            to="/"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="bg-black text-white px-6 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-gold transition-all duration-300 rounded-sm"
          >
            Randevu Al
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-black"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 md:hidden flex flex-col p-6 gap-4 max-h-[80vh] overflow-y-auto"
          >
            <Link to="/" onClick={(e) => { setIsMobileMenuOpen(false); handleNavClick(e, '#home'); }} className="text-lg font-serif font-medium hover:text-gold">Anasayfa</Link>
            
            <div className="space-y-2">
              <Link 
                to="/hizmetlerimiz" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xs font-bold uppercase tracking-widest text-gold hover:text-black transition-colors"
              >
                AVUKATLIK HİZMETLERİMİZ
              </Link>
              <div className="pl-4 flex flex-col gap-2 border-l border-gold/20">
                {servicesLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-sm font-serif hover:text-gold"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/" onClick={(e) => { setIsMobileMenuOpen(false); handleNavClick(e, '#contact'); }} className="text-lg font-serif font-medium hover:text-gold">İletişim</Link>
            
            <Link 
              to="/"
              onClick={(e) => { setIsMobileMenuOpen(false); handleNavClick(e, '#contact'); }}
              className="bg-gold text-white py-3 text-center font-bold uppercase tracking-widest rounded-sm"
            >
              Randevu Al
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#FAFAFA]">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-black/5 -skew-x-12 transform translate-x-1/4 z-0" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 border-[40px] border-gold/10 rounded-full z-0" />
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/10 border border-gold/20 rounded-full mb-6">
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-gold-dark">İzmir Hukuk Danışmanlığı</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-light leading-[1.2] mb-6">
            “Bir kişiye karşı yapılmış <span className="font-bold italic gold-text-gradient">haksızlık</span>, bütün insanlığa karşı yapılmış haksızlık demektir.”
          </h1>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-gold mb-4">— Emile Zola</p>
          <p className="text-lg text-gray-600 max-w-lg mb-10 leading-relaxed">
            Av. Rahime Özpolat olarak, İzmir'de modern hukuk anlayışı ve şeffaf danışmanlık hizmetlerimizle yanınızdayız.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#contact" 
              className="bg-black text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-gold transition-all duration-300 flex items-center gap-2 group"
            >
              İletişime Geçin
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <Link 
              to="/hizmetlerimiz" 
              className="border border-black/10 px-8 py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300"
            >
              Hizmetlerimiz
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative w-full aspect-square max-w-lg mx-auto">
            <div className="absolute inset-0 bg-gold/5 rounded-full animate-blob" />
            <div className="absolute inset-10 border-2 border-gold/20 rounded-full" />
            <div className="absolute inset-20 border border-gold/40 rounded-full" />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-20"
              >
                <Scale size={180} strokeWidth={0.5} className="text-gold" />
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-black flex items-center justify-center rounded-full shadow-xl">
                  <ShieldCheck size={24} className="text-gold" />
                </div>
              </motion.div>
            </div>

            <motion.div 
              animate={{ x: [0, 15, 0], y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute top-1/4 right-0 bg-white p-4 shadow-lg rounded-xl border border-gray-100"
            >
              <FileText className="text-gold mb-1" size={20} />
              <div className="h-1 w-8 bg-gray-100 rounded" />
            </motion.div>

            <motion.div 
              animate={{ x: [0, -10, 0], y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute bottom-1/4 left-0 bg-white p-4 shadow-lg rounded-xl border border-gray-100"
            >
              <Gavel className="text-gold mb-1" size={20} />
              <div className="h-1 w-8 bg-gray-100 rounded" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showMailtoFallback, setShowMailtoFallback] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setShowMailtoFallback(false);
    
    const { name, email, subject, message } = formData;
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        // Reset success message after a delay
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        setError(result.error || 'Bir hata oluştu. Lütfen tekrar deneyin.');
        if (result.fallback) {
          setShowMailtoFallback(true);
        }
      }
    } catch (err) {
      console.error('Submission error:', err);
      setError('Bağlantı hatası. Lütfen internet bağlantınızı kontrol edin.');
      setShowMailtoFallback(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMailtoFallback = () => {
    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:av.rahimeozpolat@outlook.com?subject=${encodeURIComponent(subject || 'Hukuki Destek Talebi')}&body=${encodeURIComponent(`Ad Soyad: ${name}\nE-posta: ${email}\n\nMesaj:\n${message}`)}`;
    
    const link = document.createElement('a');
    link.href = mailtoLink;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white shadow-2xl rounded-sm overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/2 p-12 lg:p-16">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold mb-4 block">İletişim</span>
            <h2 className="text-4xl font-serif font-bold mb-8">Hukuki Destek Alın</h2>
            
            <AnimatePresence>
              {submitted && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-8 p-4 bg-green-50 border border-green-100 text-green-800 text-sm rounded-sm flex items-center gap-3"
                >
                  <ShieldCheck className="text-green-600 shrink-0" size={18} />
                  <p>Mesajınız başarıyla avukatımıza iletildi. En kısa sürede size dönüş yapılacaktır.</p>
                </motion.div>
              )}
              {error && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-8 p-4 bg-red-50 border border-red-100 text-red-800 text-sm rounded-sm flex flex-col gap-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-red-600 flex items-center justify-center text-white text-[10px] font-bold shrink-0">!</div>
                    <p>{error}</p>
                  </div>
                  {showMailtoFallback && (
                    <button 
                      onClick={handleMailtoFallback}
                      className="text-xs font-bold uppercase tracking-widest text-red-700 hover:underline text-left"
                    >
                      E-posta uygulaması ile gönder →
                    </button>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Ad Soyad</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border-b border-gray-200 py-2 focus:border-gold outline-none transition-colors" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">E-posta</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border-b border-gray-200 py-2 focus:border-gold outline-none transition-colors" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Konu</label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full border-b border-gray-200 py-2 focus:border-gold outline-none transition-colors" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Mesajınız</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4} 
                  className="w-full border-b border-gray-200 py-2 focus:border-gold outline-none transition-colors resize-none" 
                />
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full bg-black text-white py-4 font-bold uppercase tracking-widest hover:bg-gold transition-all duration-300 rounded-sm flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Gönderiliyor...' : 'Mesaj Gönder'}
                {!isSubmitting && <ArrowRight size={14} />}
              </button>
            </form>
          </div>

          <div className="md:w-1/2 bg-black text-white p-12 lg:p-16 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full -mr-32 -mt-32 blur-3xl" />
            
            <div>
              <h3 className="text-3xl font-serif font-bold mb-12">İletişim Bilgileri</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 border border-gold/30 flex items-center justify-center shrink-0">
                    <MapPin className="text-gold" size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gold mb-1">Adres</h4>
                    <p className="text-gray-300 text-sm">Adalet mh. Manas Bulv. No:39/3408 <br />Bayraklı İzmir</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 border border-gold/30 flex items-center justify-center shrink-0">
                    <Phone className="text-gold" size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gold mb-1">Telefon</h4>
                    <p className="text-gray-300 text-sm">+90 530 912 59 21</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 border border-gold/30 flex items-center justify-center shrink-0">
                    <Mail className="text-gold" size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gold mb-1">E-posta</h4>
                    <p className="text-gray-300 text-sm">av.rahimeozpolat@outlook.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold mb-4">Sosyal Medya</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-gold transition-colors">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-gold transition-colors">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-gold transition-colors">
                  <Twitter size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 border border-gold flex items-center justify-center">
            <span className="text-sm font-serif font-bold">RÖ</span>
          </div>
          <span className="text-sm font-serif font-bold tracking-wider uppercase">Av. Rahime Özpolat</span>
        </div>
        
        <p className="text-xs text-gray-400 uppercase tracking-widest">
          © {new Date().getFullYear()} Av. Rahime Özpolat. Tüm Hakları Saklıdır.
        </p>

        <div className="flex gap-6">
          <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-gold transition-colors">Gizlilik Politikası</a>
          <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-gold transition-colors">Yasal Uyarı</a>
        </div>
      </div>
    </footer>
  );
};

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "Av. Rahime Özpolat | İzmir Hukuk & Danışmanlık";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Av. Rahime Özpolat - İzmir'de aile, ceza, iş ve gayrimenkul hukuku alanlarında profesyonel avukatlık ve danışmanlık hizmetleri.");
    }

    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <Hero />
      <Contact />
    </>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <div className="selection:bg-gold selection:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hizmetlerimiz" element={<ServicesPage />} />
          <Route path="/hizmetlerimiz/:slug" element={<ServiceDetail />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
