import React, { useState } from 'react';
import { ArrowLeft, ShoppingBag, Flame, Star, Check } from 'lucide-react';

interface ProjectViewProps {
  onClose: () => void;
}

export const FriedChickenView: React.FC<ProjectViewProps> = ({ onClose }) => {
  const [cartCount, setCartCount] = useState<number>(0);
  const [activeCategory, setActiveCategory] = useState<string>('Combos');

  const menuItems = [
    {
      id: 1,
      title: 'Bucket Mega Crispy',
      category: 'Combos',
      desc: '12 pedaços de frango ultra crocante com 2 molhos especiais e batata frita tamanho família.',
      price: 'R$ 69,90',
      rating: '4.9',
      image: '/img/Fried-chicken.png',
    },
    {
      id: 2,
      title: 'Burguer Crispy Deluxe',
      category: 'Hambúrgueres',
      desc: 'Pão brioche, sobrecoxa empanada no panko, queijo cheddar derretido e maionese defumada.',
      price: 'R$ 34,90',
      rating: '4.8',
      image: '/img/Fried-chicken.png',
    },
    {
      id: 3,
      title: 'Strips de Frango Grelhado',
      category: 'Acompanhamentos',
      desc: 'Tiras de peito de frango temperadas com ervas finas e molho honey mustard.',
      price: 'R$ 24,90',
      rating: '4.7',
      image: '/img/Fried-chicken.png',
    },
  ];

  const filteredItems = menuItems.filter(
    (item) => activeCategory === 'Todos' || item.category === activeCategory || activeCategory === 'Combos'
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/95 backdrop-blur-2xl p-4 sm:p-8 animate-fade-in">
      <div className="max-w-5xl mx-auto space-y-8 py-6">
        
        {/* Navigation Bar */}
        <div className="flex items-center justify-between">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-white/10 hover:border-orange-500/40 text-xs font-mono text-zinc-300 hover:text-white transition-all"
          >
            <ArrowLeft className="w-4 h-4 text-orange-400" />
            <span>Voltar ao Portfólio</span>
          </button>

          <div className="flex items-center gap-4">
            <div className="glass-card px-4 py-2 rounded-full border border-orange-500/30 flex items-center gap-2 text-xs font-mono text-white">
              <ShoppingBag className="w-4 h-4 text-orange-400" />
              <span>Carrinho: <strong className="text-orange-400">{cartCount}</strong> itens</span>
            </div>
            <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-mono font-bold hidden sm:inline">
              PROJETO REACT: FRIED CHICKEN
            </span>
          </div>
        </div>

        {/* Hero Banner */}
        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-white/10 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-lg text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono font-bold">
              <Flame className="w-3.5 h-3.5" />
              SABOR E CROCÂNCIA EXTREMA
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Fried Chicken Digital Showcase
            </h1>
            <p className="text-zinc-400 text-sm sm:text-base">
              Cardápio digital responsivo com foco em UX para restaurantes e deliveries.
            </p>
          </div>

          <div className="w-48 h-48 rounded-2xl overflow-hidden glass-card border border-orange-500/30 shrink-0">
            <img src="/img/Fried-chicken.png" alt="Fried Chicken" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
          {['Combos', 'Hambúrgueres', 'Acompanhamentos'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-orange-500 via-orange-400 to-amber-500 text-white shadow-lg shadow-orange-500/20'
                  : 'glass-card border border-white/10 text-zinc-300 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="glass-card rounded-3xl border border-white/10 overflow-hidden flex flex-col justify-between group p-6 space-y-4"
            >
              <div className="space-y-3">
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-black">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md text-[11px] font-mono text-amber-400 flex items-center gap-1">
                    <Star className="w-3 h-3 fill-amber-400" /> {item.rating}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <span className="text-lg font-extrabold font-mono text-white">{item.price}</span>
                <button
                  onClick={() => setCartCount((prev) => prev + 1)}
                  className="px-4 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs flex items-center gap-1.5 transition-all"
                >
                  <Check className="w-3.5 h-3.5 text-white" />
                  <span>Adicionar</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
