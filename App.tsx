
import React, { useState, useEffect } from 'react';
import { 
  NAV_LINKS, 
  CACAO_FAQ, 
  GANADO_FAQ, 
  GALLERY_DATA, 
  COLORS, 
  SEO_DATA, 
  RECOMMENDED_PHOTOS 
} from './constants';
import { FAQItem } from './types';

// --- Sub-components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#inicio" className="text-2xl font-serif font-bold tracking-tight text-[#4B3621]">
          Finca Marfid
        </a>
        
        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-[#4B3621]">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path></svg>
        </button>

        <div className={`md:flex space-x-8 items-center ${isOpen ? 'absolute top-full left-0 w-full bg-white p-6 shadow-lg flex flex-col space-y-4 md:static md:w-auto md:bg-transparent md:p-0 md:shadow-none md:flex-row' : 'hidden'}`}>
          {NAV_LINKS.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-[#333] hover:text-[#2D4F1E] font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a href="#contacto" className="bg-[#2D4F1E] text-white px-6 py-2 rounded-full hover:bg-[#1D3A13] transition-colors">
            Contactar
          </a>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://picsum.photos/1920/1080?nature=1" 
        alt="Finca Marfid Paisaje" 
        className="w-full h-full object-cover brightness-50"
      />
    </div>
    <div className="relative z-10 text-center text-white px-6 max-w-4xl">
      <h1 className="text-5xl md:text-7xl font-serif mb-6 drop-shadow-lg">Finca Marfid</h1>
      <p className="text-xl md:text-2xl mb-8 font-light italic">Producción responsable y calidad desde el origen</p>
      <p className="text-lg mb-10 opacity-90 max-w-2xl mx-auto">
        Comprometidos con la excelencia en cada grano de cacao y cada ejemplar de ganado, 
        trabajando en armonía con la tierra para ofrecer productos de trazabilidad garantizada.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#cacao" className="bg-[#D4A373] text-white px-8 py-4 rounded-md font-semibold hover:bg-[#C28E5C] transition-all">
          Conoce nuestro cacao
        </a>
        <a href="#ganado" className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-md font-semibold hover:bg-white/20 transition-all">
          Conoce nuestro ganado
        </a>
      </div>
    </div>
  </section>
);

const Accordion = ({ items }: { items: FAQItem[] }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4 mt-12">
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-200">
          <button 
            className="w-full py-4 text-left flex justify-between items-center focus:outline-none"
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
          >
            <span className="font-semibold text-gray-800">{item.question}</span>
            <span className="text-[#2D4F1E] font-bold">{activeIndex === index ? '−' : '+'}</span>
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-40 pb-4' : 'max-h-0'}`}>
            <p className="text-gray-600 leading-relaxed">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const SectionHeading = ({ subtitle, title, color = 'brown' }: { subtitle: string; title: string; color?: 'brown' | 'green' }) => (
  <div className="mb-12">
    <span className={`uppercase tracking-widest text-sm font-bold ${color === 'brown' ? 'text-[#D4A373]' : 'text-[#2D4F1E]'}`}>
      {subtitle}
    </span>
    <h2 className="text-4xl md:text-5xl font-serif mt-2 text-[#4B3621]">{title}</h2>
  </div>
);

const CacaoSection = () => (
  <section id="cacao" className="py-24 bg-white">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <SectionHeading subtitle="El Oro de Nuestra Tierra" title="Cacao de Aroma" />
          <div className="prose prose-lg text-gray-600 space-y-6">
            <p>
              En Finca Marfid, entendemos que el cacao es más que un fruto; es un legado sensorial. 
              Nuestra producción se asienta en suelos fértiles y un clima privilegiado que permite 
              el desarrollo de notas aromáticas profundas y complejas.
            </p>
            <h3 className="text-2xl font-serif text-[#4B3621]">Proceso de Producción</h3>
            <ul className="grid grid-cols-1 gap-4 list-none p-0">
              <li className="flex items-start gap-3">
                <span className="text-[#D4A373] font-bold mt-1">✓</span>
                <div><strong>Cultivo:</strong> Manejo agroecológico bajo sombra regulada.</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#D4A373] font-bold mt-1">✓</span>
                <div><strong>Cosecha:</strong> Selección manual exclusiva de mazorcas en su punto exacto.</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#D4A373] font-bold mt-1">✓</span>
                <div><strong>Fermentación:</strong> Control térmico en cajones de madera para refinar el sabor.</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#D4A373] font-bold mt-1">✓</span>
                <div><strong>Secado:</strong> Proceso lento y natural al sol para estabilizar el aroma.</div>
              </li>
            </ul>
            <div className="mt-8 p-6 bg-[#FCFBF7] border-l-4 border-[#D4A373]">
              <h4 className="font-bold mb-2">Productos Disponibles</h4>
              <p>Cacao en grano seco de exportación y subproductos artesanales (según disponibilidad estacional).</p>
            </div>
            <div className="mt-10">
              <a href="#contacto" className="inline-block bg-[#4B3621] text-white px-8 py-4 rounded hover:bg-[#322415] transition-colors">
                Solicitar Ficha Técnica
              </a>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src="https://picsum.photos/600/800?cacao=1" alt="Producción de Cacao" className="rounded-2xl shadow-2xl" />
          <div className="absolute -bottom-10 -left-10 bg-[#2D4F1E] p-8 text-white rounded-xl hidden lg:block max-w-xs">
            <p className="italic font-serif">"La excelencia no es un acto, es un hábito en nuestro secado."</p>
          </div>
        </div>
      </div>

      <div className="mt-24 max-w-3xl mx-auto">
        <h3 className="text-3xl font-serif text-center mb-8">Preguntas Frecuentes - Cacao</h3>
        <Accordion items={CACAO_FAQ} />
      </div>
    </div>
  </section>
);

const GanadoSection = () => (
  <section id="ganado" className="py-24 bg-[#FCFBF7]">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center flex-row-reverse">
        <div className="order-2 md:order-1">
          <img src="https://picsum.photos/600/800?cattle=1" alt="Ganado Finca Marfid" className="rounded-2xl shadow-2xl" />
        </div>
        <div className="order-1 md:order-2">
          <SectionHeading subtitle="Pasión por el Bienestar" title="Ganado de Selección" color="green" />
          <div className="prose prose-lg text-gray-600 space-y-6">
            <p>
              Nuestro enfoque ganadero se basa en el respeto animal y la sostenibilidad ambiental. 
              Criamos ejemplares bajo un sistema de pastoreo rotativo que no solo garantiza la salud 
              del animal, sino que también regenera nuestros suelos.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-[#2D4F1E] mb-2 text-lg">Manejo Natural</h4>
                <p className="text-sm">Alimentación basada en pasturas de alta calidad, libres de aditivos innecesarios.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-[#2D4F1E] mb-2 text-lg">Sanidad Superior</h4>
                <p className="text-sm">Controles veterinarios preventivos y protocolos de bienestar animal estrictos.</p>
              </div>
            </div>
            <p className="mt-6 italic">
              Producimos carne y pie de cría con los más altos estándares de trazabilidad, asegurando 
              un producto final de calidad excepcional para nuestros aliados comerciales.
            </p>
            <div className="mt-10">
              <a href="#contacto" className="inline-block bg-[#2D4F1E] text-white px-8 py-4 rounded hover:bg-[#1D3A13] transition-colors">
                Contactar sobre Disponibilidad
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24 max-w-3xl mx-auto">
        <h3 className="text-3xl font-serif text-center mb-8 text-[#4B3621]">Preguntas Frecuentes - Ganado</h3>
        <Accordion items={GANADO_FAQ} />
      </div>
    </div>
  </section>
);

const GallerySection = () => {
  const [filter, setFilter] = useState<'todos' | 'cacao' | 'ganado'>('todos');
  
  const filteredImages = filter === 'todos' 
    ? GALLERY_DATA 
    : GALLERY_DATA.filter(img => img.category === filter);

  return (
    <section id="galeria" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <SectionHeading subtitle="Ventana a la Finca" title="Nuestra Galería" />
          <div className="flex justify-center gap-4 mt-8">
            {['todos', 'cacao', 'ganado'].map((cat) => (
              <button 
                key={cat}
                onClick={() => setFilter(cat as any)}
                className={`px-6 py-2 rounded-full border transition-all ${filter === cat ? 'bg-[#4B3621] text-white border-[#4B3621]' : 'border-gray-200 text-gray-500 hover:border-[#4B3621]'}`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((img) => (
            <div key={img.id} className="group relative overflow-hidden rounded-xl aspect-square">
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4 text-center">
                <span className="text-white font-serif italic text-lg">{img.title}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-[#FCFBF7] rounded-2xl border border-dashed border-[#D4A373]">
          <h4 className="text-xl font-serif mb-4 text-[#4B3621]">📸 Recomendaciones Fotográficas (Para el Dueño)</h4>
          <ul className="text-sm text-gray-600 space-y-2 list-disc pl-5">
            {RECOMMENDED_PHOTOS.map((rec, i) => <li key={i}>{rec}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => (
  <section id="nosotros" className="py-24 bg-[#2D4F1E] text-white overflow-hidden relative">
    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-3xl mx-auto text-center">
        <span className="uppercase tracking-widest text-sm font-bold text-[#D4A373]">Nuestra Esencia</span>
        <h2 className="text-4xl md:text-5xl font-serif mt-4 mb-8 text-white">Sobre Finca Marfid</h2>
        <div className="text-lg opacity-90 space-y-6 leading-relaxed">
          <p>
            Finca Marfid nace de una pasión compartida por la tierra y el respeto por los procesos naturales. 
            A través de las generaciones, la Familia Marfid ha consolidado un modelo de producción donde 
            la calidad nunca se negocia y la sostenibilidad es el eje de cada decisión.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 py-8 border-y border-white/20">
            <div>
              <div className="text-3xl font-serif text-[#D4A373] mb-2">Honestidad</div>
              <p className="text-xs uppercase">Transparencia Total</p>
            </div>
            <div>
              <div className="text-3xl font-serif text-[#D4A373] mb-2">Respeto</div>
              <p className="text-xs uppercase">Bienestar Animal</p>
            </div>
            <div>
              <div className="text-3xl font-serif text-[#D4A373] mb-2">Futuro</div>
              <p className="text-xs uppercase">Sostenibilidad</p>
            </div>
            <div>
              <div className="text-3xl font-serif text-[#D4A373] mb-2">Familia</div>
              <p className="text-xs uppercase">Trabajo Unido</p>
            </div>
          </div>
          <p className="mt-10 font-serif italic text-2xl">
            "Producimos con el orgullo de saber que lo que sale de nuestra tierra es lo mejor de nosotros."
          </p>
          <p className="text-[#D4A373] font-bold">— Familia Marfid</p>
        </div>
      </div>
    </div>
    {/* Decorative background element */}
    <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
    <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#D4A373]/10 rounded-full blur-2xl"></div>
  </section>
);

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', interest: 'Cacao', message: '' });
  const [status, setStatus] = useState<null | 'success' | 'error'>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending
    setStatus('success');
    setTimeout(() => setStatus(null), 5000);
  };

  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <SectionHeading subtitle="Comunicación Directa" title="Hablemos de su proyecto" />
            <p className="text-gray-600 text-lg mb-8">
              Estamos a su disposición para consultas comerciales, visitas a la finca o solicitudes de información técnica. 
              Como productores directos, ofrecemos transparencia en cada negociación.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#FCFBF7] flex items-center justify-center rounded-full text-[#2D4F1E]">
                  📍
                </div>
                <div>
                  <h4 className="font-bold">Ubicación</h4>
                  <p className="text-gray-500">Región Productora, Ecuador</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#FCFBF7] flex items-center justify-center rounded-full text-[#2D4F1E]">
                  ⏰
                </div>
                <div>
                  <h4 className="font-bold">Respuesta</h4>
                  <p className="text-gray-500">Normalmente en 24–48 horas hábiles</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <a 
                href="https://wa.me/[TU_WHATSAPP_AQUI]" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:shadow-lg transition-all"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.891 11.891-11.891 3.181 0 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.481 8.403 0 6.556-5.332 11.891-11.891 11.891-2.01 0-3.98-.511-5.719-1.481l-6.275 1.649zm6.05-4.577c1.543.916 3.037 1.381 4.54 1.381 5.225 0 9.479-4.254 9.479-9.479 0-2.536-.987-4.92-2.778-6.713-1.793-1.791-4.175-2.778-6.701-2.778-5.225 0-9.479 4.254-9.479 9.479 0 1.761.488 3.483 1.413 4.978l-.946 3.454 3.572-.938z"/></svg>
                Chat Directo WhatsApp
              </a>
            </div>
          </div>

          <div className="bg-[#FCFBF7] p-10 rounded-3xl shadow-xl">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-2xl font-serif mb-2">Mensaje Enviado</h3>
                <p className="text-gray-600">Gracias por contactarnos. La Familia Marfid le responderá pronto.</p>
                <button onClick={() => setStatus(null)} className="mt-8 text-[#2D4F1E] underline font-bold">Enviar otro mensaje</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Nombre Completo</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Ej. Juan Pérez"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#2D4F1E] focus:ring-1 focus:ring-[#2D4F1E] outline-none"
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">WhatsApp / Teléfono</label>
                    <input 
                      required
                      type="tel" 
                      placeholder="+593 ..."
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#2D4F1E] focus:ring-1 focus:ring-[#2D4F1E] outline-none"
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Correo Electrónico</label>
                  <input 
                    required
                    type="email" 
                    placeholder="contacto@empresa.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#2D4F1E] focus:ring-1 focus:ring-[#2D4F1E] outline-none"
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Interés Principal</label>
                  <select 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#2D4F1E] focus:ring-1 focus:ring-[#2D4F1E] outline-none bg-white"
                    onChange={(e) => setFormData({...formData, interest: e.target.value})}
                  >
                    <option>Cacao</option>
                    <option>Ganado</option>
                    <option>Ambos</option>
                    <option>Otro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Mensaje</label>
                  <textarea 
                    rows={4} 
                    placeholder="Cuéntenos sobre sus requerimientos..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#2D4F1E] focus:ring-1 focus:ring-[#2D4F1E] outline-none"
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                <button type="submit" className="w-full bg-[#4B3621] text-white py-4 rounded-lg font-bold hover:bg-[#322415] transition-colors">
                  Enviar Mensaje
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-[#4B3621] text-white py-16">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12 mb-12 border-b border-white/10 pb-12">
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-2xl font-serif mb-6">Finca Marfid</h3>
          <p className="text-sm opacity-70 leading-relaxed">
            Excelencia agrícola y ganadera desde el corazón de Ecuador. 
            Producción responsable, familias comprometidas.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-[#D4A373]">Mapa del Sitio</h4>
          <ul className="space-y-4 text-sm opacity-80">
            {NAV_LINKS.map(link => (
              <li key={link.href}><a href={link.href} className="hover:text-[#D4A373] transition-colors">{link.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-[#D4A373]">Líneas de Producción</h4>
          <ul className="space-y-4 text-sm opacity-80">
            <li>Cacao de Aroma en Grano</li>
            <li>Subproductos del Cacao</li>
            <li>Ganado de Selección</li>
            <li>Asesoría Técnica Básica</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-[#D4A373]">Redes Sociales</h4>
          <div className="flex gap-4">
            {['Instagram', 'Facebook', 'LinkedIn'].map(net => (
              <a key={net} href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center rounded-full hover:bg-white hover:text-[#4B3621] transition-all">
                {net[0]}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center text-xs opacity-50 space-y-4 md:space-y-0">
        <p>&copy; {new Date().getFullYear()} Finca Marfid. Todos los derechos reservados. Ecuador.</p>
        <p>Desarrollado con compromiso por la calidad.</p>
      </div>
    </div>
  </footer>
);

// --- Main App ---

export default function App() {
  return (
    <div className="antialiased">
      {/* SEO hidden metadata */}
      <h1 className="sr-only">{SEO_DATA.title}</h1>
      
      <Navbar />
      <main>
        <Hero />
        <CacaoSection />
        <GanadoSection />
        <GallerySection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      
      {/* Floating WhatsApp for UX */}
      <a 
        href="https://wa.me/[TU_WHATSAPP_AQUI]" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-40"
        title="WhatsApp Directo"
      >
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.891 11.891-11.891 3.181 0 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.481 8.403 0 6.556-5.332 11.891-11.891 11.891-2.01 0-3.98-.511-5.719-1.481l-6.275 1.649zm6.05-4.577c1.543.916 3.037 1.381 4.54 1.381 5.225 0 9.479-4.254 9.479-9.479 0-2.536-.987-4.92-2.778-6.713-1.793-1.791-4.175-2.778-6.701-2.778-5.225 0-9.479 4.254-9.479 9.479 0 1.761.488 3.483 1.413 4.978l-.946 3.454 3.572-.938z"/></svg>
      </a>
    </div>
  );
}
