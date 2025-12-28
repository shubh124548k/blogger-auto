import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Search, TrendingUp } from "lucide-react";
import Layout from "@/components/layout/Layout";
import BlogCard from "@/components/blog/BlogCard";
import CategoryCard from "@/components/blog/CategoryCard";
import { Button } from "@/components/ui/button";
import { blogPosts, categories, trendingTopics } from "@/data/blogData";

const Index = () => {
  const featuredPost = blogPosts.find((post) => post.featured);
  const trendingPosts = blogPosts.filter((post) => post.trending).slice(0, 3);
  const latestPosts = blogPosts.slice(0, 6);
  const mainCategories = categories.slice(0, 8);

  return (
    <Layout>
      <Helmet>
        <title>KnowledgeHub - Your Trusted Source for Tech, Finance & More</title>
        <meta
          name="description"
          content="Stay informed with the latest insights in technology, AI, finance, gaming, and more. Expert articles, guides, and trending topics updated daily."
        />
        <link rel="canonical" href="/" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-blog py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in-up">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Discover Insights That
              <span className="text-accent block mt-2">Matter Most</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Your trusted source for the latest in technology, finance, and beyond. 
              Stay informed, stay ahead.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles, topics, categories..."
                className="w-full h-14 pl-12 pr-32 rounded-2xl bg-background border border-border shadow-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
              />
              <Button variant="accent" size="lg" className="absolute right-2 top-1/2 -translate-y-1/2">
                Search
              </Button>
            </div>

            {/* Trending Topics */}
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <TrendingUp className="w-4 h-4" /> Trending:
              </span>
              {trendingTopics.slice(0, 5).map((topic, index) => (
                <Link
                  key={index}
                  to={`/search?q=${encodeURIComponent(topic)}`}
                  className="text-sm px-3 py-1 bg-secondary hover:bg-accent/10 hover:text-accent rounded-full transition-colors"
                >
                  {topic}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="container-blog py-8">
          <div className="animate-fade-in-up stagger-1" style={{ opacity: 0 }}>
            <BlogCard post={featuredPost} variant="featured" />
          </div>
        </section>
      )}

      {/* Trending Section */}
      <section className="container-blog py-12 md:py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground flex items-center gap-2">
              <TrendingUp className="w-7 h-7 text-accent" />
              Trending Now
            </h2>
            <p className="text-muted-foreground mt-1">What's hot right now</p>
          </div>
          <Button variant="ghost" asChild className="hidden md:flex">
            <Link to="/latest" className="gap-2">
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingPosts.map((post, index) => (
            <div
              key={post.id}
              className="animate-fade-in-up"
              style={{ opacity: 0, animationDelay: `${(index + 2) * 0.1}s` }}
            >
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-secondary/30 py-12 md:py-16">
        <div className="container-blog">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                Explore Categories
              </h2>
              <p className="text-muted-foreground mt-1">Find content that interests you</p>
            </div>
            <Button variant="ghost" asChild className="hidden md:flex">
              <Link to="/categories" className="gap-2">
                All categories <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {mainCategories.map((category, index) => (
              <div
                key={category.id}
                className="animate-fade-in-up"
                style={{ opacity: 0, animationDelay: `${(index + 1) * 0.05}s` }}
              >
                <CategoryCard category={category} size="large" />
              </div>
            ))}
          </div>

          <div className="mt-6 text-center md:hidden">
            <Button variant="outline" asChild>
              <Link to="/categories" className="gap-2">
                View all categories <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="container-blog py-12 md:py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Latest Articles
            </h2>
            <p className="text-muted-foreground mt-1">Fresh content updated daily</p>
          </div>
          <Button variant="ghost" asChild className="hidden md:flex">
            <Link to="/latest" className="gap-2">
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestPosts.map((post, index) => (
            <div
              key={post.id}
              className="animate-fade-in-up"
              style={{ opacity: 0, animationDelay: `${(index + 1) * 0.08}s` }}
            >
              <BlogCard post={post} />
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link to="/latest" className="gap-2">
              Load More Articles <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
