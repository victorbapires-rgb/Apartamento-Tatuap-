import React, { useState, useEffect } from 'react';

// Imagens do imóvel
const INITIAL_IMAGES = [
  "https://crm2.imudar.com.br/magnifico_/imagens/imagens/imoveis_sao_caetano_sul_6_JPS0PPGB6B1WWTJD.jpg",
  "https://crm2.imudar.com.br/magnifico_/imagens/imagens/imoveis_sao_caetano_sul_28_V015TONK03QIOSNT.jpg",
  "https://crm2.imudar.com.br/magnifico_/imagens/imagens/imoveis_sao_caetano_sul_29_C6QD5S1AAVKGTFJ1.jpg",
  "https://crm2.imudar.com.br/magnifico_/imagens/imagens/imoveis_sao_caetano_sul_2_BXH1F3OOURX7TLJE.jpg",
  "https://crm2.imudar.com.br/magnifico_/imagens/imagens/imoveis_sao_caetano_sul_3_TW1WA0E37AXPRAYO.jpg",
  "https://crm2.imudar.com.br/magnifico_/imagens/imagens/imoveis_sao_caetano_sul_4_IO2UFQQARYN431VO.jpg",
  "https://crm2.imudar.com.br/magnifico_/imagens/imagens/imoveis_sao_caetano_sul_20_L4V11JINTEH60UHH.jpg",
  "https://crm2.imudar.com.br/magnifico_/imagens/imagens/imoveis_sao_caetano_sul_12_OG5EAOMP96XJQX95.jpg",
  "https://crm2.imudar.com.br/magnifico_/imagens/imagens/imoveis_sao_caetano_sul_5_TXS2KY44LLBJL4MC.jpg",
  "https://crm2.imudar.com.br/magnifico_/imagens/imagens/imoveis_sao_caetano_sul_8_UTB1W6VLMYVVAQLQ.jpg",
  "https://crm2.imudar.com.br/magnifico_/imagens/imagens/imoveis_sao_caetano_sul_9_Y70H6NUPEEFQAWEB.jpg",
  "https://crm2.imudar.com.br/magnifico_/imagens/imagens/imoveis_sao_caetano_sul_10_499IRV2CM8CQ0VFH.jpg",
  "https://crm2.imudar.com.br/magnifico_/imagens/imagens/imoveis_sao_caetano_sul_11_LUCJSB5USRLAGYKT.jpg",
  "https://crm2.imudar.com.br/magnifico_/imagens/imagens/imoveis_sao_caetano_sul_13_7C4KINK8QPIDJQ82.jpg",
  "https://crm2.imudar.com.br/magnifico_/imagens/imagens/imoveis_sao_caetano_sul_14_19XBMARD6VKFQ60F.jpg",
  "https://crm2.imudar.com.br/magnifico_/imagens/imagens/imoveis_sao_caetano_sul_16_MU8B9PJUBRX63GAF.jpg",
  "https://crm2.imudar.com.br/magnifico_/imagens/imagens/imoveis_sao_caetano_sul_17_W4XIEXWN5ELLLJ13.jpg",
  "https://crm2.imudar.com.br/magnifico_/imagens/imagens/imoveis_sao_caetano_sul_18_XWT1ECIHNRR7AVQK.jpg",
  "https://crm2.imudar.com.br/magnifico_/imagens/imagens/imoveis_sao_caetano_sul_19_SR25NQS61MFJDBHD.jpg",
  "https://crm2.imudar.com.br/magnifico_/imagens/imagens/imoveis_sao_caetano_sul_21_JENYDY3GT1PBBS0Y.jpg",
  "https://crm2.imudar.com.br/magnifico_/imagens/imagens/imoveis_sao_caetano_sul_22_CORG6OGPWHE60W5Y.jpg",
  "https://crm2.imudar.com.br/magnifico_/imagens/imagens/imoveis_sao_caetano_sul_23_K951GVPDN2AN2AD6.jpg",
  "https://crm2.imudar.com.br/magnifico_/imagens/imagens/imoveis_sao_caetano_sul_26_VXDR9KCBARDQPESP.jpg",
  "https://crm2.imudar.com.br/magnifico_/imagens/imagens/imoveis_sao_caetano_sul_27_06R4C08AFV45M9BT.jpg"
];

const App: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState(0);
  const whatsappLink = "https://api.whatsapp.com/send?phone=5511940210718";
  const mapsLink = "https://maps.app.goo.gl/pfDWrAqTX3p9kLWM7";
  const galleryImages = INITIAL_IMAGES;

  const nextPhoto = () => {
    setActivePhoto((prev) => (prev + 1) % galleryImages.length);
  };

  const prevPhoto = () => {
    setActivePhoto((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePhoto((prev) => (prev + 1) % galleryImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [galleryImages.length]);

  return (
    <div className="bg-slate-50 min-h-screen selection:bg-amber-200">
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full bg-slate-900 overflow-hidden">
        {galleryImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Imagem Principal do Imóvel ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === activePhoto ? 'opacity-80' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-20 max-w-7xl mx-auto flex flex-col items-start">
          <span className="bg-amber-500 text-slate-950 px-4 py-1.5 mb-6 text-xs font-bold uppercase tracking-widest rounded-sm">
            Oportunidade
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-4 leading-tight">
            Apartamento <br /> Tatuapé
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-slate-300 mb-8 font-light text-lg">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
              R. Tuiuti, São Paulo
            </div>
            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 text-white text-xs py-1.5 px-4 rounded-full border border-white/20 transition-all flex items-center gap-2 no-underline backdrop-blur-sm"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              Ver no Mapa
            </a>
          </div>

          <div className="text-3xl md:text-5xl text-amber-500 font-serif mb-9">
            Venda: R$ 640.000,00
          </div>
          
          <div className="flex flex-wrap gap-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-8 py-4 font-bold rounded-sm transition-all shadow-xl hover:translate-y-[-2px] no-underline"
            >
              Falar com Corretor
            </a>
          </div>
        </div>
      </section>

      {/* Sticky Spec Bar */}
      <div className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: '🛏️', value: '3', label: 'Dormitórios' },
            { icon: '📏', value: '64', label: 'Área total' },
            { icon: '🛁', value: '1', label: 'Banheiro' },
            { icon: '🚗', value: '2', label: 'Vagas' }
          ].map((spec, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-xl">
                {spec.icon}
              </div>
              <div>
                <div className="text-lg font-bold text-slate-900 leading-none mb-1">{spec.value}</div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-slate-400">{spec.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Body */}
      <main className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-16">
        
        <div className="lg:col-span-2 space-y-16">
          {/* Gallery Section */}
          <section className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-serif text-slate-900 border-b border-amber-500 pb-2 inline-block">Galeria de Fotos</h2>
            </div>
            
            {/* Foto Central com Setas de Navegação - MELHORADA PARA MOBILE */}
            <div className="bg-slate-100 p-1 md:p-4 rounded-3xl border border-slate-200 relative group/viewer">
              <div className="rounded-2xl overflow-hidden w-full aspect-[4/5] md:aspect-square relative shadow-2xl bg-white flex items-center justify-center">
                {galleryImages.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Visualização do Imóvel ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
                      index === activePhoto ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
                
                {/* Botões de Navegação - Mais visíveis no mobile */}
                <button
                  onClick={prevPhoto}
                  className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 md:bg-white/80 text-slate-900 p-2 md:p-3 rounded-full shadow-lg transition-all opacity-100 md:opacity-0 md:group-hover/viewer:opacity-100 active:scale-90 z-10"
                  aria-label="Foto anterior"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                </button>
                
                <button
                  onClick={nextPhoto}
                  className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 md:bg-white/80 text-slate-900 p-2 md:p-3 rounded-full shadow-lg transition-all opacity-100 md:opacity-0 md:group-hover/viewer:opacity-100 active:scale-90 z-10"
                  aria-label="Próxima foto"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                </button>

                {/* Indicador de Contador */}
                <div className="absolute bottom-4 right-4 bg-slate-900/70 backdrop-blur-md text-white text-[10px] px-3 py-1 rounded-full font-bold tracking-widest uppercase">
                  {activePhoto + 1} / {galleryImages.length}
                </div>
              </div>
            </div>
            
            {/* Thumbnails */}
            <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-4 gap-3 md:gap-4">
              {galleryImages.map((img, i) => (
                <div key={i} className="relative group">
                  <button
                    onClick={() => setActivePhoto(i)}
                    className={`w-full aspect-square rounded-lg overflow-hidden border-2 transition-all ${activePhoto === i ? 'border-amber-500 scale-95 shadow-lg' : 'border-transparent opacity-60 hover:opacity-100'}`}
                  >
                    <img src={img} className="w-full h-full object-cover" alt={`Miniatura ${i}`} />
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar Card */}
        <aside className="relative">
          <div className="sticky top-28">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mb-4 text-amber-600">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              </div>
              <h4 className="text-2xl font-serif text-slate-900 mb-1">Carlos Alberto</h4>
              <p className="text-slate-400 text-xs uppercase tracking-widest font-bold mb-8">Corretor Imobiliário</p>
              
              <div className="w-full space-y-3">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#1ebe57] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95 no-underline"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412 0 6.556-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.171l.353.21c1.511.896 3.248 1.369 5.021 1.37h.005c5.455 0 9.894-4.439 9.894-9.895 0-2.643-1.029-5.128-2.898-6.997-1.87-1.868-4.353-2.897-6.996-2.897-5.456 0-9.894 4.44-9.894 9.895 0 2.042.531 4.035 1.535 5.79l.23.399-1.012 3.693 3.763-.986z" /></svg>
                  Conversar no WhatsApp
                </a>
                <button className="w-full bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs shadow-lg active:scale-95 transition-all">
                  Agendar uma Visita
                </button>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 w-full text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                CRECI: 086941
              </div>
            </div>
          </div>
        </aside>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-white font-serif text-xl italic">Vila Curuçá Velha - Residencial</div>
          <div className="text-slate-500 text-sm font-light text-center">
            © 2025 Carlos Corretor. Profissionalismo e Exclusividade.
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#1ebe57] hover:scale-110 transition-all z-50 flex items-center justify-center group"
        aria-label="Falar com Corretor no WhatsApp"
      >
        <span className="absolute right-full mr-4 bg-white text-slate-900 text-sm font-bold px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Fale comigo!
        </span>
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412 0 6.556-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.171l.353.21c1.511.896 3.248 1.369 5.021 1.37h.005c5.455 0 9.894-4.439 9.894-9.895 0-2.643-1.029-5.128-2.898-6.997-1.87-1.868-4.353-2.897-6.996-2.897-5.456 0-9.894 4.44-9.894 9.895 0 2.042.531 4.035 1.535 5.79l.23.399-1.012 3.693 3.763-.986z" /></svg>
      </a>
    </div>
  );
};

export default App;
