import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import CategoryCard from "@/components/blog/CategoryCard";
import BlogCard from "@/components/blog/BlogCard";
import { categories, blogPosts, trendingTopics } from "@/data/blogData";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <Layout>
      <Helmet>
        <title>Categories - Explore All Topics | KnowledgeHub</title>
        <meta
          name="description"
          content="Browse all categories including Technology, AI, Finance, Gaming, Crypto, Jobs, and more. Find the content that interests you."
        />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-b from-secondary/50 to-background py-12 md:py-16">
        <div className="container-blog">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Explore Categories
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover content across {categories.length}+ topics. From technology to finance, 
              we've got everything covered.
            </p>
          </div>
        </div>
      </section>

      {/* All Categories Grid */}
      <section className="container-blog py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="animate-fade-in-up"
              style={{ opacity: 0, animationDelay: `${index * 0.03}s` }}
            >
              <CategoryCard category={category} size="large" />
            </div>
          ))}
        </div>
      </section>

      {/* Trending Topics */}
      <section className="bg-secondary/30 py-12 md:py-16">
        <div className="container-blog">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
            Trending Topics
          </h2>
          <div className="flex flex-wrap gap-3">
            {trendingTopics.map((topic, index) => (
              <Link
                key={index}
                to={`/search?q=${encodeURIComponent(topic)}`}
                className="px-4 py-2 bg-background border border-border rounded-full text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all animate-fade-in-up"
                style={{ opacity: 0, animationDelay: `${index * 0.03}s` }}
              >
                {topic}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular in Categories */}
      <section className="container-blog py-12 md:py-16">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
          Popular Across All Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.slice(0, 6).map((post, index) => (
            <div
              key={post.id}
              className="animate-fade-in-up"
              style={{ opacity: 0, animationDelay: `${index * 0.05}s` }}
            >
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Categories;
