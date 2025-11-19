"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Header from '../../compnents/Header'
import Footer from '../../compnents/Footer'

// Sample blog data - in a real app, this would come from a CMS or database
const allArticles = [
  {
    id: 1,
    img: '/d40778b465d9694b0254aa11cf3949f80782e3b6.jpg',
    title: 'The Future of Custom Apparel: Trends and Innovation',
    excerpt: 'Fashion industry leaders explore cutting-edge customization techniques, sustainable fabric choices, and personalized clothing solutions.',
    category: 'Fashion & Design',
    date: 'October 10, 2025',
    author: 'Sarah Chen',
    likes: '14k',
    shares: '204',
    slug: 'future-of-custom-apparel'
  },
  {
    id: 2,
    img: '/18a7005c08c5a4486114815d31bdb2c66384d6cf (2).jpg',
    title: 'Sustainable Fashion: Eco-Friendly Materials Revolution',
    excerpt: 'Discover how innovative eco-friendly materials are transforming the fashion industry and reducing environmental impact.',
    category: 'Sustainability',
    date: 'October 8, 2025',
    author: 'Michael Green',
    likes: '3.2k',
    shares: '85',
    slug: 'sustainable-fashion-materials'
  },
  {
    id: 3,
    img: '/3edfb6fca6a884b4907302e77bf4f958b718a15a.png',
    title: 'Custom Embroidery Techniques for Brand Identity',
    excerpt: 'Learn advanced embroidery methods that help businesses create distinctive brand identities through custom apparel.',
    category: 'Branding',
    date: 'October 5, 2025',
    author: 'Lisa Park',
    likes: '2.8k',
    shares: '67',
    slug: 'custom-embroidery-techniques'
  },
  {
    id: 4,
    img: '/576f2f4d40333f7d67f179fb922244955a6fdc92.png',
    title: 'Print Methods Comparison: DTF vs Screen Printing',
    excerpt: 'A comprehensive comparison of Direct-to-Film and Screen Printing methods for custom apparel production.',
    category: 'Manufacturing',
    date: 'October 3, 2025',
    author: 'James Rodriguez',
    likes: '4.1k',
    shares: '103',
    slug: 'print-methods-comparison'
  },
  {
    id: 5,
    img: '/1f773a1770a87e00e9427d4930127cc9cc33e365.jpg',
    title: 'Corporate Uniform Design: Balancing Style and Function',
    excerpt: 'Explore the art of creating corporate uniforms that enhance brand image while ensuring comfort and practicality.',
    category: 'Corporate Fashion',
    date: 'September 28, 2025',
    author: 'Emma Watson',
    likes: '1.9k',
    shares: '45',
    slug: 'corporate-uniform-design'
  },
  {
    id: 6,
    img: '/4539dfa1a80805b965bae58bc2d5c7db06a6ed58.jpg',
    title: 'Team Merchandise: Building Unity Through Custom Apparel',
    excerpt: 'How custom team merchandise strengthens team bonds and creates lasting memories for sports teams and organizations.',
    category: 'Team Building',
    date: 'September 25, 2025',
    author: 'David Kim',
    likes: '2.4k',
    shares: '72',
    slug: 'team-merchandise-unity'
  },
  {
    id: 7,
    img: '/18a7005c08c5a4486114815d31bdb2c66384d6cf (2).jpg',
    title: 'Premium Hoodies: Quality Materials and Manufacturing',
    excerpt: 'An in-depth look at what makes premium hoodies stand out: from fabric selection to construction techniques.',
    category: 'Product Quality',
    date: 'September 22, 2025',
    author: 'Rachel Adams',
    likes: '3.6k',
    shares: '89',
    slug: 'premium-hoodies-quality'
  },
  {
    id: 8,
    img: '/adea4208c4084ddbe72ada467f57b034f8d356e7.jpg',
    title: 'Event T-Shirts: Creating Memorable Promotional Merchandise',
    excerpt: 'Best practices for designing and producing event t-shirts that attendees will actually want to wear and keep.',
    category: 'Event Marketing',
    date: 'September 20, 2025',
    author: 'Chris Johnson',
    likes: '1.7k',
    shares: '38',
    slug: 'event-tshirts-memorable'
  }
];

const categories = ['All', 'Fashion & Design', 'Sustainability', 'Branding', 'Manufacturing', 'Corporate Fashion', 'Team Building', 'Product Quality', 'Event Marketing'];

export default function AllArticlesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredArticles = allArticles.filter(article => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />
      <div className="flex-1 px-0 py-3">
        {/* Back Button */}
        <div className="pt-12 w-full max-w-7xl mx-auto px-4 max-[769px]:px-3 max-[425px]:px-2 mt-8 max-[769px]:mt-6 max-[425px]:mt-4">
          <button 
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-4 py-2 max-[425px]:px-3 max-[425px]:py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg text-sm max-[425px]:text-xs font-medium transition-all duration-200 hover:shadow-md"
          >
            <svg className="w-4 h-4 max-[425px]:w-3 max-[425px]:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
        </div>

        {/* Header Section */}
        <section className="w-full max-w-full mx-0 px-4 max-[769px]:px-3 max-[425px]:px-2 text-center mt-12 max-[769px]:mt-8 max-[425px]:mt-6">
          <div className="-mx-2 px-0 max-[769px]:mx-0">
            <div className="w-full px-0">
              <h1 className="text-2xl md:text-3xl lg:text-7xl max-[769px]:text-4xl max-[425px]:text-3xl max-[375px]:text-2xl font-bold text-gray-900 mb-2 leading-tight px-0">
                <span className="font-[Kumbh Sans] block px-0">All Articles</span>
              </h1>
            </div>
            <p className="text-gray-600 text-lg max-[769px]:text-base max-[425px]:text-sm max-w-4xl mx-auto mt-5 max-[425px]:mt-3 max-[769px]:px-2">
              Browse our complete collection of fashion insights, manufacturing tips, and industry trends. 
              Find the perfect article to inspire your next apparel project.
            </p>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="w-full max-w-7xl mx-auto px-4 max-[769px]:px-3 max-[425px]:px-2 mt-12 max-[769px]:mt-8 max-[425px]:mt-6">
          {/* Search Bar */}
          <div className="mb-8 max-[425px]:mb-6">
            <div className="relative max-w-lg mx-auto">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 max-[425px]:py-3 pl-14 max-[425px]:pl-12 pr-6 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-300 focus:border-gray-300 text-base max-[425px]:text-sm bg-gray-50 focus:bg-white transition-colors"
              />
              <div className="absolute left-5 max-[425px]:left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg className="w-6 h-6 max-[425px]:w-5 max-[425px]:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-8 max-[425px]:mb-6">
            <div className="grid grid-cols-3 gap-3 max-[425px]:gap-2 max-w-4xl mx-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-3 max-[425px]:px-3 max-[425px]:py-2 rounded-xl text-sm max-[425px]:text-xs font-medium transition-all duration-200 text-center ${
                    selectedCategory === category
                      ? 'bg-gray-900 text-white shadow-lg transform scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-8 max-[425px]:mb-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <p className="text-gray-700 text-sm max-[425px]:text-xs font-medium">
                {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} found
              </p>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="w-full max-w-7xl mx-auto px-4 max-[769px]:px-3 max-[425px]:px-2 pb-16 max-[769px]:pb-12 max-[425px]:pb-8">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-12 max-[425px]:py-8">
              <p className="text-gray-500 text-lg max-[425px]:text-base">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-[769px]:gap-6 max-[425px]:gap-5">
              {filteredArticles.map((article) => (
                <article key={article.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full border border-gray-100">
                  {/* Article Image */}
                  <div className="relative overflow-hidden h-56 max-[769px]:h-48 max-[425px]:h-40">
                    <Image
                      src={article.img}
                      alt={article.title}
                      width={400}
                      height={250}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    {/* Category Badge on Image */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1.5 max-[425px]:px-2.5 max-[425px]:py-1 bg-white/95 backdrop-blur-sm text-gray-800 text-xs max-[425px]:text-2xs rounded-full font-medium shadow-sm">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Article Content */}
                  <div className="p-6 max-[425px]:p-4 flex-1 flex flex-col">
                    {/* Date */}
                    <div className="mb-2">
                      <span className="text-xs text-gray-500">{article.date}</span>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl max-[769px]:text-lg max-[425px]:text-base font-bold text-gray-900 mb-3 leading-tight line-clamp-2">
                      {article.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-gray-600 text-sm max-[425px]:text-xs mb-4 leading-relaxed flex-1 line-clamp-3">
                      {article.excerpt}
                    </p>

                    {/* Author */}
                    <p className="text-xs text-gray-500 mb-4">
                      By <span className="font-semibold text-gray-700">{article.author}</span>
                    </p>

                    {/* Footer Section */}
                    <div className="mt-auto pt-4 border-t border-gray-100">
                      {/* Likes/Shares & Read More in same row */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1 text-gray-600 text-sm">
                            <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                            </svg>
                            <span className="font-medium">{article.likes}</span>
                          </div>
                          <div className="flex items-center gap-1 text-gray-600 text-sm">
                            <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                            </svg>
                            <span className="font-medium">{article.shares}</span>
                          </div>
                        </div>
                        
                        {/* Read More Button */}
                        <Link
                          href={`/blog/${article.slug}`}
                          className="inline-flex items-center gap-1 px-4 py-2 max-[425px]:px-3 max-[425px]:py-1.5 bg-gray-900 hover:bg-black text-white rounded-lg text-sm max-[425px]:text-xs font-medium transition-colors"
                        >
                          Read More
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

        </section>
      </div>
      <Footer />
    </main>
  );
}