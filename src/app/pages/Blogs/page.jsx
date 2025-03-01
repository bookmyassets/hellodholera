import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { getblogs } from "@/sanity/lib/api";
import Footer from "@/app/components/Footer";

export default async function Home() {
  const posts = await getblogs();
  const brandColors = {
    maroon: "#530904",
    gold: "#FDB913",
  };

  

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative flex items-center justify-center h-[50vh] bg-gradient-to-b from-[#650000] to-[#320000] text-white">
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl opacity-30 font-black uppercase tracking-wider mb-2 text-[#FDB913]">
            My Blog
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold relative -mt-8 md:-mt-16">
            Latest Insights
          </h2>
          <p className="mt-4 text-gray-200 max-w-2xl mx-auto text-lg">
            Discover our latest articles and updates
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
              key={post._id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <Link href={`/posts/${post.slug.current}`} className="block">
                <div className="relative h-64 overflow-hidden">
                  {post.mainImage && (
                    <img
                      src={urlFor(post.mainImage).width(600).height(400).url()}
                      alt={post.title}
                      className="object-cover transition-transform duration-500 hover:scale-110 w-full h-full"
                    />
                  )}
                </div>
              </Link>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2 hover:text-blue-600">
                  <Link href={`/posts/${post.slug.current}`}>{post.title}</Link>
                </h2>
                <div className="flex items-center py-2 gap-4 text-sm text-gray-600">
                  {post.author && (
                    <div className="flex items-center gap-2">
                      {post.author.image && (
                        <img
                          src={urlFor(post.author.image).width(32).height(32).url()}
                          alt={post.author.name}
                          width={32}
                          height={32}
                          className="w-8 h-8 rounded-full"
                        />
                      )}
                      <span className="text-[#FDB913]">{post.author.name}</span>
                    </div>
                  )}
                </div>
                <Link href={`/posts/${post.slug.current}`} passHref prefetch={true}>
                  <button
                    className="w-full py-3 px-4 text-white font-medium rounded-md transition-colors duration-300 flex items-center justify-center"
                    style={{
                      background: `linear-gradient(to right, ${brandColors.maroon}, ${brandColors.maroon}DD)`,
                      borderBottom: `3px solid ${brandColors.gold}`,
                    }}
                  >
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
            </article>
            
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}