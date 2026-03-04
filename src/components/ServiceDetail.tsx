import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, Phone, Mail, MapPin, ArrowLeft } from 'lucide-react';
import { servicesData } from '../servicesData';

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = servicesData.find((s) => s.slug === slug);

  useEffect(() => {
    if (service) {
      document.title = service.seoTitle;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', service.metaDescription);
      }
    }
    window.scrollTo(0, 0);
  }, [service]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">Sayfa Bulunamadı</h1>
          <Link to="/" className="text-gold hover:underline flex items-center justify-center gap-2">
            <ArrowLeft size={18} /> Anasayfaya Dön
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white selection:bg-gold selection:text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#FAFAFA] overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 -skew-x-12 transform translate-x-1/4" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-8">
              <Link to="/" className="hover:text-gold transition-colors">Anasayfa</Link>
              <ChevronRight size={12} />
              <span className="text-gold">Hizmetlerimiz</span>
              <ChevronRight size={12} />
              <span className="text-black">{service.title}</span>
            </nav>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">
              {service.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
              {service.intro}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-16">
            {/* Image */}
            <div className="aspect-[16/9] rounded-sm overflow-hidden shadow-2xl">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Scope */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-8 flex items-center gap-4">
                <span className="w-12 h-0.5 bg-gold" />
                Hizmet Kapsamı
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {service.scope.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-6 bg-[#FAFAFA] border border-gray-100 rounded-sm">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 shrink-0" />
                    <p className="font-medium text-gray-800">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-8 flex items-center gap-4">
                <span className="w-12 h-0.5 bg-gold" />
                Süreç Nasıl İşler?
              </h2>
              <div className="space-y-8">
                {service.process.map((step, idx) => (
                  <div key={idx} className="flex gap-8 items-start">
                    <div className="text-4xl font-serif font-bold text-gold/20 shrink-0">
                      {(idx + 1).toString().padStart(2, '0')}
                    </div>
                    <div className="pt-2">
                      <p className="text-lg text-gray-700 leading-relaxed">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-8 flex items-center gap-4">
                <span className="w-12 h-0.5 bg-gold" />
                Sıkça Sorulan Sorular
              </h2>
              <div className="space-y-6">
                {service.faqs.map((faq, idx) => (
                  <div key={idx} className="p-8 border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="text-xl font-serif font-bold mb-4 text-black">{faq.question}</h4>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar / CTA */}
          <div className="space-y-8">
            <div className="bg-black text-white p-10 rounded-sm sticky top-32">
              <h3 className="text-2xl font-serif font-bold mb-6">Hukuki Destek Alın</h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                {service.title} alanındaki uyuşmazlıklarınız için İzmir'deki ofisimizde profesyonel danışmanlık sağlıyoruz.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-gold/30 flex items-center justify-center rounded-full">
                    <Phone size={18} className="text-gold" />
                  </div>
                  <span className="text-sm font-bold">+90 530 912 59 21</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-gold/30 flex items-center justify-center rounded-full">
                    <Mail size={18} className="text-gold" />
                  </div>
                  <span className="text-sm font-bold">av.rahimeozpolat@outlook.com</span>
                </div>
              </div>

              <Link 
                to="/#contact" 
                className="block w-full bg-gold text-white py-4 text-center font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 rounded-sm"
              >
                Randevu Al
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
