// app/blog/page.tsx  (for App Router)
// or pages/blog.tsx  (for Pages Router)

import Image from "next/image";
import Link from "next/link";
import Header from '../compnents/Header'
import Footer from '../compnents/Footer'

export default function BlogPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />
  <div className="flex-1 px-0 py-3">
        {/* Header */}
  <section className="w-full max-w-full mx-0 px-4 max-[769px]:px-3 max-[425px]:px-2 text-center mt-30 max-[769px]:mt-20 max-[425px]:mt-16">
          <div className="-mx-2 px-0 max-[769px]:mx-0">
            <div className="w-full px-0">
              <h1 className="text-2xl md:text-3xl lg:text-7xl max-[769px]:text-4xl max-[425px]:text-3xl max-[375px]:text-2xl font-bold text-gray-900 mb-2 leading-tight px-0">
                <span className="font-[Kumbh Sans] block px-0">Fashion Insights: Style & Trends</span>
              </h1>
            </div>
            <p className="text-gray-600 text-lg max-[769px]:text-base max-[425px]:text-sm max-w-4xl mx-auto mt-5 max-[425px]:mt-3 max-[769px]:px-2">
              Discover the latest in fashion and apparel trends. We bring you insights into 
              custom clothing, sustainable fashion, and innovative manufacturing techniques. 
              Explore the world of style through our expert coverage.
            </p>
          </div>
        </section>

      {/* Blog Card */}
  <section className="w-full mx-0 mt-12 max-[769px]:mt-8 flex flex-col md:flex-row max-[769px]:flex-col items-center gap-8 max-[769px]:gap-6 max-[425px]:gap-4 px-30 max-[769px]:px-6 max-[425px]:px-4 max-[375px]:px-3 mt-20 max-[769px]:mt-12 max-[425px]:mt-8">
        {/* Image */}
        <div className="w-full md:w-1/2 max-[769px]:w-full">
          <Image
             src="/d40778b465d9694b0254aa11cf3949f80782e3b6.jpg"
            alt="Custom Apparel Design"
            width={600}
            height={400}
            className="rounded-lg shadow-md object-cover w-full h-64 md:h-80 max-[425px]:h-48 max-[375px]:h-40"
          />
        </div>

        {/* Blog Content */}
        <div className="w-full md:w-1/2 max-[769px]:w-full space-y-4 max-[425px]:space-y-3">
          <h2 className="text-2xl max-[769px]:text-xl max-[425px]:text-lg font-bold text-gray-900 lg:pb-10 md:pb-4">
            The Future of Custom Apparel: Trends and Innovation
          </h2>
          <p className="text-gray-600 max-[425px]:text-sm lg:pb-10 md:pb-4">
            Fashion industry leaders explore cutting-edge customization techniques, 
            sustainable fabric choices, and personalized clothing solutions that are 
            revolutionizing how we think about apparel.
          </p>

          {/* Meta info */}
          <div className="text-sm max-[425px]:text-xs text-gray-500 space-y-1">
            <p>
              <span className="font-semibold">Category:</span> Fashion & Design
            </p>
            <p>
              <span className="font-semibold">Publication Date:</span> October 10, 2025
            </p>
            <p>
              <span className="font-semibold">Author:</span> Sarah Chen
            </p>
          </div>

          {/* Likes + Shares and Button (button aligned right) */}
          <div className="flex items-center gap-2 mt-8 max-[425px]:mt-6 w-full max-[425px]:flex-col max-[425px]:items-stretch max-[425px]:gap-3">
            <div className="flex items-center gap-4 max-[425px]:justify-between max-[425px]:w-full">
              <span className="flex items-center gap-2 text-gray-700 whitespace-nowrap max-[425px]:text-sm">
                <span className="text-xl max-[425px]:text-lg">♡</span>&nbsp;14k
              </span>
              <span className="flex items-center gap-2 text-gray-700 whitespace-nowrap max-[425px]:text-sm">
                ✈&nbsp;204
              </span>
            </div>
            {/* push the button to the right */}
            <div className="flex-shrink-0 ml-auto mr-9 max-[425px]:ml-0 max-[425px]:mr-0">
              <Link href="/blog/future-of-custom-apparel" className="h-10 max-[425px]:h-9 max-[375px]:h-8 inline-flex items-center gap-2 px-4 max-[425px]:px-3 max-[375px]:px-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg shadow-md max-[425px]:text-sm max-[375px]:text-xs max-[425px]:w-full max-[425px]:justify-center">
                Read More
              </Link>
            </div>
          </div>
        </div>
        </section>

       </div>
      {/* Similar Blogs section (matches provided design) */}
  <section className="max-w-7xl mx-auto px-8 max-[769px]:px-6 max-[425px]:px-4 lg:px-12 py-16 max-[769px]:py-12 max-[425px]:py-8">
        <div className="flex items-center justify-between max-[425px]:flex-row max-[425px]:items-center mb-8 max-[425px]:mb-6">
          <h3 className="text-2xl max-[769px]:text-xl max-[425px]:text-lg font-semibold text-gray-900">Related Articles</h3>
          <Link href="/blog/all-articles" className="inline-flex items-center gap-2 px-4 max-[425px]:px-3 max-[375px]:px-2 py-2 max-[425px]:py-1.5 bg-gray-200/70 hover:bg-gray-200 text-gray-800 rounded-lg max-[425px]:text-sm max-[375px]:text-xs max-[425px]:w-auto max-[425px]:flex-shrink-0 transition-colors">
            View All Articles <span className="text-xl max-[425px]:text-lg">↗</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 max-[769px]:grid-cols-2 max-[425px]:grid-cols-1 gap-8 max-[769px]:gap-6 max-[425px]:gap-4 mt-15 max-[769px]:mt-10 max-[425px]:mt-6 items-stretch">
          {[{
            img: '/18a7005c08c5a4486114815d31bdb2c66384d6cf (2).jpg',
            title: 'Sustainable Fashion: Eco-Friendly Materials Revolution',
            cat: 'Sustainability',
            likes: '3.2k',
            shares: '85',
            slug: 'sustainable-fashion-materials'
          }, {
            img: '/3edfb6fca6a884b4907302e77bf4f958b718a15a.png',
            title: 'Custom Embroidery Techniques for Brand Identity',
            cat: 'Branding',
            likes: '2.8k',
            shares: '67',
            slug: 'custom-embroidery-techniques'
          }, {
            img: '/576f2f4d40333f7d67f179fb922244955a6fdc92.png',
            title: 'Print Methods Comparison: DTF vs Screen Printing',
            cat: 'Manufacturing',
            likes: '4.1k',
            shares: '103',
            slug: 'print-methods-comparison'
          }].map((card, idx) => (
            <Link key={idx} href={`/blog/${card.slug}`} className="block cursor-pointer">
              <article className="bg-transparent flex flex-col h-full hover:shadow-md transition-shadow rounded-lg p-3">
                <div className="rounded-xl overflow-hidden h-48 md:h-56 max-[425px]:h-40 max-[375px]:h-36">
                  <Image src={card.img} alt={card.title} width={400} height={300} className="w-full h-full object-cover rounded-xl" />
                </div>

                <div className="flex-1 mt-4 max-[425px]:mt-3">
                  <h4 className="text-lg max-[769px]:text-base max-[425px]:text-sm font-semibold text-gray-900 mb-2 max-[425px]:mb-1">{card.title}</h4>
                  <p className="mb-3 text-sm max-[425px]:text-xs text-gray-400">{card.cat}</p>
                </div>

                <div className="mt-auto flex items-center justify-between max-[425px]:flex-col max-[425px]:gap-3 max-[425px]:items-stretch">
                  <div className="flex items-center gap-3 max-[425px]:justify-between max-[425px]:w-full max-[375px]:gap-2 max-[425px]:pt-3">
                    <span className="inline-flex items-center gap-2 bg-gray-100 px-3 max-[425px]:px-2 max-[375px]:px-1.5 py-2 max-[425px]:py-1.5 max-[375px]:py-1 rounded-full text-sm max-[425px]:text-xs text-gray-700">
                      <span className="text-lg max-[425px]:text-base max-[375px]:text-sm">♡</span> {card.likes}
                    </span>
                    <span className="inline-flex items-center gap-2 bg-gray-100 px-3 max-[425px]:px-2 max-[375px]:px-1.5 py-2 max-[425px]:py-1.5 max-[375px]:py-1 rounded-full text-sm max-[425px]:text-xs text-gray-700">
                      <span className="text-lg max-[425px]:text-base max-[375px]:text-sm">✈</span> {card.shares}
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-2 h-10 max-[425px]:h-9 max-[375px]:h-8 px-4 max-[425px]:px-3 max-[375px]:px-2 bg-gray-200 text-gray-800 rounded-full text-sm max-[425px]:text-xs max-[425px]:justify-center">
                    <span className="hidden max-[425px]:inline">Read More</span>
                    <span className="text-sm max-[425px]:text-xs">↗</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
