import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import BlogCard from "@/components/blog/BlogCard";
import { blogPosts, categories } from "@/data/blogData";
import { Link } from "react-router-dom";

const LatestUpdates = () => {
  return (
    <Layout>
      <Helmet>
        <title>Latest Updates - Fresh Articles Daily | KnowledgeHub</title>
        <meta
          name="description"
          content="Stay up to date with the latest articles, news, and insights. Fresh content updated daily across all categories."
        />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-b from-secondary/50 to-background py-12 md:py-16">
        <div className="container-blog">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Latest Updates
            </h1>
            <p className="text-lg text-muted-foreground">
              Fresh content published daily. Stay informed with our newest articles.
            </p>
          </div>
        </div>
      </section>

      <section className="container-blog py-12 md:py-16">
        <div className="lg:flex lg:gap-12">
          {/* Main Content */}
          <div className="flex-1">
            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              <button className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium transition-colors">
                All
              </button>
              {categories.slice(0, 6).map((category) => (
                <Link
                  key={category.id}
                  to={`/categories/${category.slug}`}
                  className="px-4 py-2 bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground rounded-full text-sm font-medium transition-colors"
                >
                  {category.name}
                </Link>
              ))}
            </div>

            {/* Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts.map((post, index) => (
                <div
                  key={post.id}
                  className="animate-fade-in-up"
                  style={{ opacity: 0, animationDelay: `${index * 0.05}s` }}
                >
                  <BlogCard post={post} />
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block w-80 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Categories Widget */}
              <div className="bg-secondary/30 rounded-2xl p-6">
                <h3 className="font-display font-semibold text-lg mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.slice(0, 8).map((category) => (
                    <Link
                      key={category.id}
                      to={`/categories/${category.slug}`}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-background transition-colors"
                    >
                      <span className="flex items-center gap-2 text-sm">
                        <span>{category.icon}</span>
                        {category.name}
                      </span>
                      <span className="text-xs text-muted-foreground">{category.count}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Popular Posts Widget */}
              <div className="bg-secondary/30 rounded-2xl p-6">
                <h3 className="font-display font-semibold text-lg mb-4">Most Popular</h3>
                <div className="space-y-1">
                  {blogPosts.slice(0, 4).map((post) => (
                    <BlogCard key={post.id} post={post} variant="compact" />
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  );
};

export default LatestUpdates;
