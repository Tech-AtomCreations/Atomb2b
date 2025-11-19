"use client";

import Image from 'next/image';

const testimonials = [
  {
    name: "Rohan Malhotra",
    handle: "Founder, BrewBite Café",
    avatar: "https://i.pravatar.cc/64?img=12",
    text: `Atom Creations helped us design premium staff uniforms with embroidery. 
Fast turnaround, perfect fit, and amazing quality — all with just 20 pieces to start!`,
  },
  {
    name: "Sakshi Sharma",
    handle: "Head, Startup Delhi Fest",
    avatar: "https://i.pravatar.cc/64?img=28",
    text: `We ordered 300+ custom hoodies for our college fest from Atom Creations. 
Free mock-ups, on-time delivery, and super soft fabric. Highly recommend!`,
  },
  {
    name: "Ankit Verma",
    handle: "Co-founder, BoldThreads Clothing",
    avatar: "https://i.pravatar.cc/64?img=14",
    text: `As a startup launching a new merch brand, we loved how easy Atom Creations made it. 
We started with just 10 tees — the print quality and packaging were premium!`,
  },
  {
    name: "Neha Gupta",
    handle: "HR, FinEdge Pvt Ltd",
    avatar: "https://i.pravatar.cc/64?img=47",
    text: `Our corporate t-shirts came out perfect. 
Great color consistency and DTF printing that feels smooth and lasts long.`,
  },
  {
    name: "Karan Singh",
    handle: "Owner, The Food Joint",
    avatar: "https://i.pravatar.cc/64?img=13",
    text: `We needed branded aprons and polos fast. 
Atom Creations handled design, embroidery, and delivery in just 7 days.`,
  },
  {
    name: "Priya Mehta",
    handle: "Founder, Bloom Studio",
    avatar: "https://i.pravatar.cc/64?img=5",
    text: `Loved the professionalism! 
They gave us multiple fabric and print options with clear mock-ups before production.`,
  },
];

export default function Testimonials() {
  function highlightAtom(text: string) {
    // highlight brand mentions
    return text.split(/(Atom Creations)/ig).map((part, idx) =>
      part.toLowerCase() === 'atom creations' ? (
        <span key={idx} className="text-blue-600 font-semibold">
          {part}
        </span>
      ) : (
        part
      )
    );
  }

  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
     
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
          {testimonials.map((t, i) => (
            <div
              key={i}
              style={{ breakInside: 'avoid' }}
              className="inline-block w-full mb-4 rounded-2xl bg-white/60 backdrop-blur-sm shadow-md border border-gray-200 px-5 py-4 hover:shadow-lg transition"
            >
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={40}
                  height={40}
                  className="rounded-full w-10 h-10 object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-800">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.handle}</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 whitespace-pre-line leading-relaxed">
                {highlightAtom(t.text)}
              </p>
            </div>
          ))}
        </div>
   
      </div>
    </section>
  );
}
