"use client";

import React, { useState } from "react";
import { Plus, Minus, Receipt, Printer, CheckCircle, Sparkles, ShoppingBag } from "lucide-react";
import { Project } from "@/config/projects";
import { TapeSticker } from "../paper/TapeSticker";

interface TamilBillingShowcaseProps {
  project: Project;
}

interface ProductItem {
  id: string;
  tamilName: string;
  engName: string;
  price: number;
  qty: number;
  unit: string;
}

export const TamilBillingShowcase: React.FC<TamilBillingShowcaseProps> = ({ project }) => {
  const [items, setItems] = useState<ProductItem[]>([
    { id: "1", tamilName: "பொன்னி அரிசி (Ponni Rice)", engName: "Rice 5kg", price: 280, qty: 1, unit: "பை (Bag)" },
    { id: "2", tamilName: "துவரம் பருப்பு (Toor Dal)", engName: "Dal 1kg", price: 160, qty: 2, unit: "கிலோ (Kg)" },
    { id: "3", tamilName: "நாட்டு சர்க்கரை (Organic Sugar)", engName: "Sugar 1kg", price: 75, qty: 1, unit: "பாக்கெட் (Pkt)" },
    { id: "4", tamilName: "நல்லெண்ணெய் (Sesame Oil)", engName: "Gingelly Oil", price: 220, qty: 1, unit: "லிட்டர் (Ltr)" },
  ]);

  const updateQty = (id: string, delta: number) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQty = Math.max(0, item.qty + delta);
          return { ...item, qty: newQty };
        }
        return item;
      })
    );
  };

  const subtotal = items.reduce((acc, item) => acc + item.price * item.qty, 0);
  const gst = Math.round(subtotal * 0.05);
  const total = subtotal + gst;

  return (
    <div className="relative w-full bg-[#18181B] border border-[#2D2D32] rounded-sm p-6 sm:p-8 md:p-10 shadow-2xl text-white overflow-hidden">
      {/* Tape accent */}
      <TapeSticker
        variant="dark"
        rotation={-1.5}
        className="absolute -top-3 left-14"
        width="w-28"
      />

      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#2C2C32] pb-5 mb-8">
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm font-bold text-[#E59838] tracking-widest">
            PROJECT // {project.number}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#E59838]" />
          <span className="font-mono text-xs text-[#A1A1AA] uppercase tracking-wider">
            {project.category}
          </span>
        </div>

        <div className="flex items-center gap-2 px-3 py-1 bg-[#232328] border border-[#373740] rounded text-xs font-mono text-[#E59838]">
          <ShoppingBag className="w-3.5 h-3.5" />
          <span>தமிழ் பில்லிங் பயன்பாடு</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Info Column */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-2">
              {project.title}
            </h3>
            <p className="font-mono text-sm text-[#E59838] font-semibold tracking-wide">
              {project.subtitle}
            </p>
          </div>

          <p className="font-sans text-sm sm:text-base leading-relaxed text-[#D4D4D8]">
            {project.description}
          </p>

          {/* Highlights checklist */}
          <div className="space-y-2 pt-2 border-t border-[#2C2C32]">
            {project.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#A1A1AA]">
                <Sparkles className="w-4 h-4 text-[#E59838] shrink-0 mt-0.5" />
                <span>{h}</span>
              </div>
            ))}
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-2.5 py-1 text-xs font-mono font-medium text-[#F4F4F5] bg-[#26262B] border border-[#3A3A42] rounded-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right Tamil POS Interface Simulation */}
        <div className="lg:col-span-6">
          <div className="relative bg-[#111113] border border-[#2F2F36] rounded-sm p-4 sm:p-5 shadow-inner">
            {/* POS App Bar */}
            <div className="flex items-center justify-between border-b border-[#2A2A30] pb-3 mb-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#E59838]" />
                <span className="font-sans text-sm font-bold text-white tracking-wide">
                  தமிழ் பில் கவுண்டர் (Tamil POS)
                </span>
              </div>
              <span className="font-mono text-[11px] text-[#A1A1AA]">
                ரசீது எண்: #2026-88
              </span>
            </div>

            {/* Product Table Header */}
            <div className="grid grid-cols-12 gap-2 text-[11px] font-mono text-[#A1A1AA] uppercase border-b border-[#24242A] pb-2 mb-2">
              <div className="col-span-6">பொருள் (Item)</div>
              <div className="col-span-2 text-center">விலை</div>
              <div className="col-span-2 text-center">அளவு</div>
              <div className="col-span-2 text-right">மொத்தம்</div>
            </div>

            {/* Product Row List with Live Counter Controls */}
            <div className="space-y-2 mb-4 max-h-56 overflow-y-auto pr-1">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-12 gap-2 items-center text-xs bg-[#18181C] p-2 rounded border border-[#282830]"
                >
                  <div className="col-span-6">
                    <p className="font-sans font-medium text-white text-xs truncate">
                      {item.tamilName}
                    </p>
                    <span className="font-mono text-[10px] text-[#71717A]">
                      {item.unit}
                    </span>
                  </div>

                  <div className="col-span-2 text-center font-mono text-[#A1A1AA]">
                    ₹{item.price}
                  </div>

                  <div className="col-span-2 flex items-center justify-center gap-1">
                    <button
                      onClick={() => updateQty(item.id, -1)}
                      className="w-5 h-5 rounded bg-[#24242B] hover:bg-[#33333C] text-white flex items-center justify-center transition-colors"
                      data-cursor="MINUS"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="font-mono font-bold w-4 text-center">
                      {item.qty}
                    </span>
                    <button
                      onClick={() => updateQty(item.id, 1)}
                      className="w-5 h-5 rounded bg-[#24242B] hover:bg-[#33333C] text-white flex items-center justify-center transition-colors"
                      data-cursor="PLUS"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>

                  <div className="col-span-2 text-right font-mono font-bold text-amber-400">
                    ₹{item.price * item.qty}
                  </div>
                </div>
              ))}
            </div>

            {/* Receipt Summary Calculation */}
            <div className="bg-[#1C1C22] p-3 rounded border border-[#2D2D36] space-y-1.5 font-mono text-xs">
              <div className="flex justify-between text-[#A1A1AA]">
                <span>கூட்டுத்தொகை (Subtotal):</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between text-[#A1A1AA]">
                <span>ஜிஎஸ்டி வரி (GST 5%):</span>
                <span>₹{gst}</span>
              </div>
              <div className="flex justify-between text-sm sm:text-base font-bold text-white pt-2 border-t border-[#33333E]">
                <span className="text-[#E59838]">மொத்த தொகை (Net Total):</span>
                <span className="text-[#E59838]">₹{total}</span>
              </div>
            </div>

            {/* POS Actions */}
            <div className="mt-3 flex items-center justify-between text-xs font-mono">
              <span className="flex items-center gap-1 text-emerald-400">
                <CheckCircle className="w-3.5 h-3.5" /> பில் தயார் (Ready)
              </span>
              <button
                onClick={() => alert(`பில் அச்சிடப்பட்டது! ரசீது மொத்தம்: ₹${total}`)}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-[#E59838] hover:bg-[#D4892A] text-black font-bold rounded transition-colors"
                data-cursor="PRINT"
              >
                <Printer className="w-3.5 h-3.5" /> பில் பிரிண்ட் (Print)
              </button>
            </div>
          </div>

          {/* Performance metrics bar */}
          <div className="mt-4 grid grid-cols-3 gap-2 text-center">
            {project.metrics?.map((m, i) => (
              <div key={i} className="bg-[#1F1F24] border border-[#2F2F37] p-2.5 rounded-sm">
                <div className="text-base sm:text-lg font-mono font-black text-white">
                  {m.value}
                </div>
                <div className="text-[10px] font-mono uppercase text-[#A1A1AA]">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
