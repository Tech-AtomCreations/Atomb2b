// app/blog/[slug]/page.tsx
import Header from '../../compnents/Header';
import Footer from '../../compnents/Footer';
import ClientImage from '../../compnents/ClientImage';
import Link from 'next/link';

// Blog data - in a real app, this would come from a CMS or database
const blogPosts = {
  'future-of-custom-apparel': {
    title: 'The Future of Custom Apparel: Trends and Innovation',
    heroImg: '/d40778b465d9694b0254aa11cf3949f80782e3b6.jpg',
    category: 'Fashion & Design',
    author: 'Sarah Chen',
    date: 'October 10, 2025',
    likes: '14k',
    shares: '204',
    introduction: 'Fashion industry leaders explore cutting-edge customization techniques, sustainable fabric choices, and personalized clothing solutions that are revolutionizing how we think about apparel.',
    content: [
      {
        type: 'heading',
        text: 'Introduction'
      },
      {
        type: 'paragraph',
        text: 'The fashion industry is undergoing a remarkable transformation driven by technological advances, changing consumer preferences, and a growing emphasis on sustainability. Custom apparel, once considered a luxury reserved for the elite, is now becoming increasingly accessible to consumers worldwide.'
      },
      {
        type: 'heading',
        text: 'Artificial Intelligence (AI)'
      },
      {
        type: 'paragraph',
        text: 'Artificial Intelligence (AI) has revolutionized virtually every aspect of our lives, and fashion is no exception. The integration of AI in custom apparel design is opening up new possibilities for personalization, efficiency, and creativity. From pattern recognition to predictive analytics, AI is transforming how we approach clothing customization and manufacturing.'
      },
      {
        type: 'paragraph',
        text: 'Machine learning algorithms can now analyze vast amounts of data to predict fashion trends, optimize supply chains, and even assist in the creative design process. This technology enables brands to offer hyper-personalized experiences while maintaining cost-effectiveness and sustainability.'
      }
      ,
      { type: 'heading', text: 'Sustainable Materials' },
      { type: 'paragraph', text: 'Sustainable materials such as organic cotton and recycled synthetics are being integrated into custom apparel workflows to reduce environmental impact and improve lifecycle performance.' },
      { type: 'heading', text: 'Digital Design Tools' },
      { type: 'paragraph', text: 'Augmented reality and 3D prototyping tools speed up the design process and help customers visualize custom pieces prior to production.' },
      { type: 'heading', text: 'Manufacturing Innovation' },
      { type: 'paragraph', text: 'On-demand and localized manufacturing models are reducing inventory waste and lowering the carbon footprint of garment transport.' },
      { type: 'heading', text: 'Consumer Customization' },
      { type: 'paragraph', text: 'Consumers now expect deeper personalization options—from fit adjustments to bespoke graphics—forcing brands to adopt flexible production systems.' },
      { type: 'heading', text: 'Quality Control' },
      { type: 'paragraph', text: 'Automated inspection and standardized testing ensure consistent quality across custom-made products, even at scale.' },
      { type: 'heading', text: 'Future Trends' },
      { type: 'paragraph', text: 'Emerging trends include biodegradable finishes, digital wardrobes, and AI-driven recommendation systems that learn individual style preferences.' },
      { type: 'heading', text: 'Conclusion' },
      { type: 'paragraph', text: 'Custom apparel is poised to become mainstream as technology, sustainability, and consumer demand converge to enable personalized, responsible fashion.' }
    ],
    sidebarItems: [
      'Introduction',
      'Artificial Intelligence (AI)',
      'Sustainable Materials',
      'Digital Design Tools',
      'Manufacturing Innovation',
      'Consumer Customization',
      'Quality Control',
      'Future Trends',
      'Conclusion'
    ]
  },
  'sustainable-fashion-materials': {
    title: 'Sustainable Fashion: Eco-Friendly Materials Revolution',
    heroImg: '/1f773a1770a87e00e9427d4930127cc9cc33e365.jpg',
    category: 'Sustainability',
    author: 'Emily Rodriguez',
    date: 'October 8, 2025',
    likes: '3.2k',
    shares: '85',
    introduction: 'Discover how eco-friendly materials are transforming the fashion industry, from organic cotton to innovative recycled fibers.',
    content: [
      {
        type: 'heading',
        text: 'Introduction'
      },
      {
        type: 'paragraph',
        text: 'The fashion industry is embracing sustainable materials as consumers become more environmentally conscious. This shift towards eco-friendly options is reshaping how brands approach design and manufacturing.'
      },
      {
        type: 'heading',
        text: 'Organic Cotton Revolution'
      },
      {
        type: 'paragraph',
        text: 'Organic cotton has emerged as a leading sustainable material, requiring 91% less water than conventional cotton. Brands are increasingly adopting organic cotton for its environmental benefits and superior quality.'
      }
      ,
      { type: 'heading', text: 'Recycled Polyester Innovation' },
      { type: 'paragraph', text: 'Recycled polyester, often sourced from post-consumer plastics, reduces reliance on virgin petrochemicals and diverts waste from landfills while providing durable textile performance.' },
      { type: 'heading', text: 'Hemp and Bamboo Alternatives' },
      { type: 'paragraph', text: 'Hemp and bamboo are gaining traction for their low-input cultivation and natural breathability; proper processing ensures they can feel soft and modern in apparel.' },
      { type: 'heading', text: 'Dyeing Processes' },
      { type: 'paragraph', text: 'Innovations in low-water dyeing, digital pigment printing, and natural dyes are helping brands cut water use and chemical discharge significantly.' },
      { type: 'heading', text: 'Consumer Impact' },
      { type: 'paragraph', text: 'Consumers increasingly favor transparent supply chains and are willing to pay a premium for garments with verified sustainable credentials.' },
      { type: 'heading', text: 'Future Outlook' },
  { type: 'paragraph', text: 'The future will likely see broader adoption of circular systems—repair, resale, and recycling—paired with new bio-based fibers that mimic the best properties of traditional fabrics.'
  }
    ],
    sidebarItems: [
      'Introduction',
      'Organic Cotton Revolution',
      'Recycled Polyester Innovation',
      'Hemp and Bamboo Alternatives',
      'Dyeing Processes',
      'Consumer Impact',
      'Future Outlook'
    ]
  },
  'custom-embroidery-techniques': {
    title: 'Custom Embroidery Techniques for Brand Identity',
    heroImg: '/adea4208c4084ddbe72ada467f57b034f8d356e7.jpg',
    category: 'Branding',
    author: 'Michael Chen',
    date: 'October 5, 2025',
    likes: '2.8k',
    shares: '67',
    introduction: 'Learn how custom embroidery techniques can elevate your brand identity and create lasting impressions.',
    content: [
      {
        type: 'heading',
        text: 'Introduction'
      },
      {
        type: 'paragraph',
        text: 'Embroidery remains one of the most prestigious and durable methods for applying brand logos and designs to apparel. This traditional craft has evolved with modern technology to offer unprecedented precision and creativity.'
      },
      {
        type: 'heading',
        text: 'Modern Embroidery Technology'
      },
      {
        type: 'paragraph',
        text: 'Today\'s embroidery machines combine traditional craftsmanship with digital precision, allowing for complex designs that were once impossible to achieve.'
      }
      ,
      { type: 'heading', text: 'Thread Selection Guide' },
      { type: 'paragraph', text: 'Selecting the right thread—polyester for durability, rayon for sheen—affects both longevity and visual impact.' },
      { type: 'heading', text: 'Design Considerations' },
      { type: 'paragraph', text: 'Simplify small logos and consider stitch density to avoid puckering; test on base fabrics to validate results.' },
      { type: 'heading', text: 'Quality Control' },
      { type: 'paragraph', text: 'Consistent tension, backing choice, and post-production washing tests help ensure embroidery quality holds up over time.' },
      { type: 'heading', text: 'Brand Applications' },
      { type: 'paragraph', text: 'Embroidery can elevate uniforms, caps, and premium garments where durability and perception of quality matter most.' }
    ],
    sidebarItems: [
      'Introduction',
      'Modern Embroidery Technology',
      'Thread Selection Guide',
      'Design Considerations',
      'Quality Control',
      'Brand Applications'
    ]
  },
  'print-methods-comparison': {
    title: 'Print Methods Comparison: DTF vs Screen Printing',
    heroImg: '/4539dfa1a80805b965bae58bc2d5c7db06a6ed58.jpg',
    category: 'Manufacturing',
    author: 'David Kumar',
    date: 'October 3, 2025',
    likes: '4.1k',
    shares: '103',
    introduction: 'Compare DTF and screen printing methods to choose the best option for your custom apparel needs.',
    content: [
      {
        type: 'heading',
        text: 'Introduction'
      },
      {
        type: 'paragraph',
        text: 'Choosing the right printing method for your custom apparel is crucial for achieving the desired quality, durability, and cost-effectiveness. Two popular methods dominating the market are Direct-to-Film (DTF) and Screen Printing.'
      },
      {
        type: 'heading',
        text: 'DTF Printing Technology'
      },
      {
        type: 'paragraph',
        text: 'Direct-to-Film printing represents the latest innovation in custom apparel printing. This method offers exceptional versatility, allowing for complex multi-color designs with photographic quality results.'
      },
      {
        type: 'heading',
        text: 'Screen Printing Advantages'
      },
      {
        type: 'paragraph',
        text: 'Screen printing remains the gold standard for large-volume orders and simple designs. Its cost-effectiveness for bulk orders and vibrant color output make it a preferred choice for many businesses.'
      }
      ,
      { type: 'heading', text: 'Cost Comparison' },
      { type: 'paragraph', text: 'DTF can be cost-effective for small runs and complex designs; screen printing becomes cheaper per unit at higher volumes due to setup amortization.' },
      { type: 'heading', text: 'Quality Analysis' },
      { type: 'paragraph', text: 'DTF offers photographic detail and good wash durability; screen printing still produces superior color vibrancy on many fabrics.' },
      { type: 'heading', text: 'Best Use Cases' },
      { type: 'paragraph', text: 'Choose DTF for low-volume, high-detail orders and screen printing for bulk runs of simpler artwork.' },
      { type: 'heading', text: 'Future Trends' },
      { type: 'paragraph', text: 'Advances in hybrid printing and eco-friendly inks will continue to blur the lines between different printing technologies.' }
    ],
    sidebarItems: [
      'Introduction',
      'DTF Printing Technology',
      'Screen Printing Advantages',
      'Cost Comparison',
      'Quality Analysis',
      'Best Use Cases',
      'Future Trends'
    ]
  }
  ,
  'corporate-uniform-design': {
    title: 'Corporate Uniform Design: Balancing Style and Function',
    heroImg: '/1f773a1770a87e00e9427d4930127cc9cc33e365.jpg',
    category: 'Corporate Fashion',
    author: 'Emma Watson',
    date: 'September 28, 2025',
    likes: '1.9k',
    shares: '45',
    introduction: 'Creating corporate uniforms that reflect brand identity while remaining comfortable and practical requires intentional design choices.',
    content: [
      { type: 'heading', text: 'Introduction' },
      { type: 'paragraph', text: 'Corporate uniforms are more than just clothing; they communicate brand values and create a cohesive look across teams.' },
      { type: 'heading', text: 'Brand Aesthetics' },
      { type: 'paragraph', text: 'Choose color palettes, logos, and trims that align with your brand guidelines while keeping garments wearable for long shifts.' },
      { type: 'heading', text: 'Fabric & Function' },
      { type: 'paragraph', text: 'Select durable, breathable fabrics that withstand frequent laundering and deliver comfort for daily wear.' }
      ,
      { type: 'heading', text: 'Sizing & Fit' },
  { type: 'paragraph', text: 'Offer a range of sizes and consider adjustable elements to accommodate diverse body shapes while preserving a consistent brand silhouette.'
  },
      { type: 'heading', text: 'Care & Durability' },
      { type: 'paragraph', text: 'Use colorfast dyes and reinforced stitching to help garments look newer for longer with minimal maintenance.' },
      { type: 'heading', text: 'Final Recommendations' },
      { type: 'paragraph', text: 'Prioritize comfort and durability and pilot small runs before committing to large orders to validate design and fabric choices.' }
    ],
    sidebarItems: ['Introduction', 'Brand Aesthetics', 'Fabric & Function', 'Sizing & Fit', 'Care & Durability', 'Final Recommendations']
  },
  'team-merchandise-unity': {
    title: 'Team Merchandise: Building Unity Through Custom Apparel',
    heroImg: '/4539dfa1a80805b965bae58bc2d5c7db06a6ed58.jpg',
    category: 'Team Building',
    author: 'David Kim',
    date: 'September 25, 2025',
    likes: '2.4k',
    shares: '72',
    introduction: 'Team merchandise strengthens identity and fosters a sense of belonging among members and fans.',
    content: [
      { type: 'heading', text: 'Introduction' },
      { type: 'paragraph', text: 'Well-designed team merchandise becomes a symbol for supporters and members, creating shared experiences.' },
      { type: 'heading', text: 'Design with Purpose' },
      { type: 'paragraph', text: 'Incorporate team colors, logos, and slogans in ways that resonate emotionally with the community.' },
      { type: 'heading', text: 'Distribution & Timing' },
      { type: 'paragraph', text: 'Plan releases around events and seasons to maximize impact and engagement.' }
      ,
      { type: 'heading', text: 'Material Choices' },
      { type: 'paragraph', text: 'Choose materials that match intended use—performance fabrics for active teams, soft cotton blends for casual wear.' },
      { type: 'heading', text: 'Sizing Strategy' },
      { type: 'paragraph', text: 'Include a generous size range and special sizes for children or plus-size members when relevant.' },
      { type: 'heading', text: 'Community Engagement' },
      { type: 'paragraph', text: 'Use merchandise as a tool for community-building: limited editions, collaborations, and fan-driven designs increase engagement.' }
    ],
    sidebarItems: ['Introduction', 'Design with Purpose', 'Material Choices', 'Sizing Strategy', 'Distribution & Timing', 'Community Engagement']
  },
  'premium-hoodies-quality': {
    title: 'Premium Hoodies: Quality Materials and Manufacturing',
    heroImg: '/18a7005c08c5a4486114815d31bdb2c66384d6cf (2).jpg',
    category: 'Product Quality',
    author: 'Rachel Adams',
    date: 'September 22, 2025',
    likes: '3.6k',
    shares: '89',
    introduction: 'Premium hoodies stand out because of fabric choice, construction techniques, and attention to detail.',
    content: [
      { type: 'heading', text: 'Introduction' },
      { type: 'paragraph', text: 'A premium hoodie balances comfort, durability, and style through thoughtful material and manufacturing choices.' },
      { type: 'heading', text: 'Fabric Selection' },
      { type: 'paragraph', text: 'Midweight brushed fleece blends offer warmth without bulk and hold up well to repeated washes.' },
      { type: 'heading', text: 'Construction Details' },
      { type: 'paragraph', text: 'Reinforced seams, quality zippers, and well-finished hems are the hallmarks of a premium garment.' }
      ,
      { type: 'heading', text: 'Finishing & Labels' },
      { type: 'paragraph', text: 'Clean label placement and durable care tags improve the premium feel and provide necessary care information.' },
      { type: 'heading', text: 'Care Instructions' },
      { type: 'paragraph', text: 'Recommend gentle cycles and low-heat drying to extend the life of premium hoodies and preserve fabric hand.' }
    ],
    sidebarItems: ['Introduction', 'Fabric Selection', 'Construction Details', 'Finishing & Labels', 'Care Instructions']
  },
  'event-tshirts-memorable': {
    title: 'Event T-Shirts: Creating Memorable Promotional Merchandise',
    heroImg: '/adea4208c4084ddbe72ada467f57b034f8d356e7.jpg',
    category: 'Event Marketing',
    author: 'Chris Johnson',
    date: 'September 20, 2025',
    likes: '1.7k',
    shares: '38',
    introduction: 'Event t-shirts can become cherished keepsakes when designed with creativity and quality in mind.',
    content: [
      { type: 'heading', text: 'Introduction' },
      { type: 'paragraph', text: 'An event t-shirt should be visually appealing and comfortable so attendees actually wear it after the event.' },
      { type: 'heading', text: 'Design Considerations' },
      { type: 'paragraph', text: 'Keep designs legible, use limited colors for cost savings, and place logos where they are most visible.' },
      { type: 'heading', text: 'Order Logistics' },
      { type: 'paragraph', text: 'Plan sizes and quantities carefully to avoid excess inventory while meeting expected demand.' }
      ,
      { type: 'heading', text: 'Fabric Choices' },
      { type: 'paragraph', text: 'Opt for comfortable, breathable fabrics that suits the event climate and intended usage.' },
      { type: 'heading', text: 'Printing Options' },
      { type: 'paragraph', text: 'Balance cost and quality by choosing printing methods that match your artwork complexity and budget.' }
    ],
    sidebarItems: ['Introduction', 'Design Considerations', 'Fabric Choices', 'Printing Options', 'Order Logistics']
  }
};

const similarBlogs = [
  {
    img: '/18a7005c08c5a4486114815d31bdb2c66384d6cf (2).jpg',
    title: 'Sustainable Fashion: Eco-Friendly Materials Revolution',
    cat: 'Sustainability',
    likes: '3.2k',
    shares: '85',
    slug: 'sustainable-fashion-materials'
  },
  {
    img: '/adea4208c4084ddbe72ada467f57b034f8d356e7.jpg',
    title: 'Custom Embroidery Techniques for Brand Identity',
    cat: 'Branding',
    likes: '2.8k',
    shares: '67',
    slug: 'custom-embroidery-techniques'
  },
  {
    img: '/4539dfa1a80805b965bae58bc2d5c7db06a6ed58.jpg',
    title: 'Print Methods Comparison: DTF vs Screen Printing',
    cat: 'Manufacturing',
    likes: '4.1k',
    shares: '103',
    slug: 'print-methods-comparison'
  }
];

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts[slug as keyof typeof blogPosts];
  
  if (!post) {
    return <div>Blog post not found</div>;
  }

  // Debug: Log the image path
  console.log('Loading blog post:', slug, 'with hero image:', post.heroImg);

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative mt-20 w-full h-[50vh] max-[769px]:h-[40vh] max-[425px]:h-[35vh] max-[375px]:h-[30vh] min-h-[250px] max-[425px]:min-h-[200px] lg:h-[70vh] overflow-hidden">
        <ClientImage
          src={post.heroImg}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-[425px]:px-3 max-[375px]:px-2 max-w-4xl">
            <h1 className="text-2xl max-[769px]:text-xl max-[425px]:text-lg max-[375px]:text-base md:text-4xl lg:text-6xl font-bold mb-4 max-[425px]:mb-2 leading-tight">
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="flex-1 max-w-7xl mx-auto px-4 max-[769px]:px-3 max-[425px]:px-2 lg:px-12 py-8 max-[769px]:py-6 max-[425px]:py-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-[769px]:gap-6 max-[425px]:gap-4">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Article Meta */}
            <div className="flex items-center gap-3 max-[425px]:gap-2 mb-6 max-[769px]:mb-4 max-[425px]:mb-3 text-sm max-[425px]:text-xs text-gray-600">
              <span className="flex items-center gap-1 max-[425px]:gap-1">
                <span className="text-lg max-[425px]:text-base">♡</span> {post.likes}
              </span>
              <span className="flex items-center gap-1 max-[425px]:gap-1">
                <span className="text-lg max-[425px]:text-base">✈</span> {post.shares}
              </span>
            </div>

            {/* Article Info Box */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 max-[769px]:p-3 max-[425px]:p-3 mb-6 max-[769px]:mb-4 max-[425px]:mb-3">
              <div className="flex items-start gap-3 max-[425px]:gap-2">
                <div className="w-2 h-2 max-[425px]:w-1.5 max-[425px]:h-1.5 bg-gray-500 rounded-full mt-2 max-[425px]:mt-1.5"></div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2 max-[425px]:mb-1 text-base max-[425px]:text-sm">Publication Data</h3>
                  <div className="grid grid-cols-1 max-[769px]:grid-cols-1 md:grid-cols-3 gap-2 max-[769px]:gap-1 max-[425px]:gap-1 text-sm max-[425px]:text-xs">
                    <div className="max-[769px]:mb-1">
                      <span className="font-semibold">Category:</span> {post.category}
                    </div>
                    <div className="max-[769px]:mb-1">
                      <span className="font-semibold">Date:</span> {post.date}
                    </div>
                    <div className="max-[769px]:mb-1">
                      <span className="font-semibold">Author:</span> {post.author}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-8 max-[769px]:mb-6 max-[425px]:mb-4">
              <p className="text-lg max-[769px]:text-base max-[425px]:text-sm leading-relaxed text-gray-700 font-medium">
                {post.introduction}
              </p>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none space-y-6 max-[769px]:space-y-4 max-[425px]:space-y-3">
              {post.content.map((item, index) => (
                <div key={index}>
                  {item.type === 'heading' && (
                    <h2 id={item.text.toLowerCase().replace(/\s+/g, '-')} className="text-xl max-[769px]:text-lg max-[425px]:text-base font-bold text-gray-900 mt-8 max-[769px]:mt-6 max-[425px]:mt-4 mb-4 max-[769px]:mb-3 max-[425px]:mb-2">
                      {item.text}
                    </h2>
                  )}
                  {item.type === 'paragraph' && (
                    <p className="text-gray-700 leading-relaxed text-base max-[769px]:text-sm max-[425px]:text-sm mb-4 max-[769px]:mb-3 max-[425px]:mb-2">
                      {item.text}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Read More Button */}
            <div className="mt-8 max-[769px]:mt-6 max-[425px]:mt-4 pt-6 max-[769px]:pt-4 max-[425px]:pt-3 border-t border-gray-200">
            
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 max-[1024px]:order-first max-[1024px]:mb-6">
            <div className="sticky top-8 max-[1024px]:static">
              <div className="bg-white border border-gray-200 rounded-xl p-4 max-[769px]:p-3 max-[425px]:p-3">
                <h3 className="font-semibold text-gray-900 mb-3 max-[425px]:mb-2 text-base max-[425px]:text-sm">Table of Contents</h3>
                <ul className="space-y-2 max-[425px]:space-y-1.5">
                  {post.sidebarItems.map((item, index) => (
                    <li key={index}>
                      <a 
                        href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-sm max-[425px]:text-xs text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2 max-[425px]:gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 max-[425px]:w-1 max-[425px]:h-1 bg-gray-400 rounded-full flex-shrink-0"></span>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Blogs Section */}
      <section className="bg-white py-12 max-[769px]:py-8 max-[425px]:py-6">
        <div className="max-w-7xl mx-auto px-4 max-[769px]:px-3 max-[425px]:px-2 lg:px-12">
          <div className="flex items-center justify-between max-[425px]:flex-col max-[425px]:items-start max-[425px]:gap-3 mb-6 max-[769px]:mb-4 max-[425px]:mb-4">
            <h3 className="text-xl max-[769px]:text-lg max-[425px]:text-base font-semibold text-gray-900">Similar Blogs</h3>
            <Link href="/blog/all-articles" className="inline-flex items-center gap-2 px-3 max-[425px]:px-2 py-2 max-[425px]:py-1.5 bg-gray-200/70 hover:bg-gray-200 text-gray-800 rounded-lg text-sm max-[425px]:text-xs max-[425px]:w-full max-[425px]:justify-center">
              View All Articles <span className="text-lg max-[425px]:text-base">↗</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 max-[769px]:grid-cols-2 max-[425px]:grid-cols-1 md:grid-cols-3 gap-6 max-[769px]:gap-4 max-[425px]:gap-3">
            {similarBlogs.filter(blog => blog.slug !== slug).slice(0, 3).map((card, idx) => (
              <Link key={idx} href={`/blog/${card.slug}`} className="block">
                <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative h-40 max-[769px]:h-36 max-[425px]:h-32 overflow-hidden">
                    <ClientImage
                      src={card.img}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 max-[769px]:p-3 max-[425px]:p-3">
                    <h4 className="text-base max-[769px]:text-sm max-[425px]:text-sm font-semibold text-gray-900 mb-2 max-[425px]:mb-1 line-clamp-2">{card.title}</h4>
                    <p className="text-xs max-[425px]:text-xs text-gray-500 mb-3 max-[425px]:mb-2">{card.cat}</p>
                    
                    <div className="flex items-center justify-between max-[425px]:flex-col max-[425px]:gap-2 max-[425px]:items-stretch">
                      <div className="flex items-center gap-2 max-[425px]:justify-between max-[425px]:w-full">
                        <span className="inline-flex items-center gap-1 text-xs text-gray-600">
                          <span className="text-sm max-[425px]:text-xs">♡</span> {card.likes}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs text-gray-600">
                          <span className="text-sm max-[425px]:text-xs">✈</span> {card.shares}
                        </span>
                      </div>
                      <div className="inline-flex items-center gap-2 text-xs text-gray-900 font-medium max-[425px]:w-full max-[425px]:justify-center max-[425px]:py-1.5 max-[425px]:bg-gray-100 max-[425px]:rounded">
                        <span className="hidden max-[425px]:inline">Read More</span>
                        <span className="text-xs">↗</span>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}