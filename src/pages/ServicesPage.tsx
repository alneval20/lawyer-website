import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { servicesData } from '../servicesData';

const ServicesPage = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="pt-32 pb-24 bg-white">
      <section id="services" className="bg-white text-black overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold mb-4 block">Hizmet Alanlarımız</span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Avukatlık Hizmetlerimiz</h1>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
              İzmir'de uzman kadromuzla sunduğumuz profesyonel hukuki danışmanlık ve dava avukatlığı hizmetlerimiz.
            </p>
            <div className="w-24 h-1 bg-gold mx-auto mt-8" />
          </div>

          <div className="grid md:grid-cols-3 gap-x-8 gap-y-16">
            {servicesData.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="relative">
                  <Link to={`/hizmetlerimiz/${service.slug}`}>
                    <div className="aspect-[16/10] overflow-hidden mb-8 bg-gray-100 rounded-sm shadow-lg group-hover:shadow-2xl transition-all duration-500">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold mb-4 group-hover:text-gold transition-colors">{service.title}</h3>
                  </Link>
                  
                  <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                    {service.intro}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <Link 
                      to={`/hizmetlerimiz/${service.slug}`}
                      className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold hover:text-black transition-colors flex items-center gap-2"
                    >
                      DETAYLI BİLGİ
                      <span className="w-4 h-px bg-gold group-hover:w-8 transition-all duration-300" />
                    </Link>
                    <Link 
                      to="/#contact"
                      className="text-[10px] font-bold uppercase tracking-[0.2em] bg-black text-white px-5 py-2.5 rounded-sm hover:bg-gold transition-all duration-300"
                    >
                      Randevu Al
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-24 bg-black py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-8">
            Hukuki Sorunlarınız İçin Profesyonel Çözümler
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10">
            Haklarınızı korumak ve en doğru hukuki stratejiyi belirlemek için bizimle iletişime geçebilirsiniz.
          </p>
          <Link 
            to="/#contact"
            className="inline-block bg-gold text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 rounded-sm"
          >
            Hemen Danışın
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
