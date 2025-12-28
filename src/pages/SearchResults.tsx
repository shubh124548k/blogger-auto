import { useState, useEffect, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Search, Filter, X, TrendingUp } from "lucide-react";
import Layout from "@/components/layout/Layout";
import BlogCard from "@/components/blog/BlogCard";
import { Button } from "@/components/ui/button";
import { blogPosts, categories, popularSearches } from "@/data/blogData";

const SearchResults = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  useEffect(() => {
    setQuery(searchParams.get("q") || "");
  }, [searchParams]);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    
    return blogPosts.filter((post) => {
      const matchesQuery =
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        post.category.toLowerCase().includes(query.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase())) ||
        post.content?.toLowerCase().includes(query.toLowerCase());

      const matchesCategory = !selectedCategory || post.category === selectedCategory;

      return matchesQuery && matchesCategory;
    });
  }, [query, selectedCategory]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setSearchParams({ q: query });
    }
  };

  const clearFilters = () => {
    setSelectedCategory("");
  };

  return (
    <Layout>
      <Helmet>
        <title>{query ? `Search: ${query}` : "Search"} | KnowledgeHub</title>
        <meta
          name="description"
          content={`Search results for "${query}" on KnowledgeHub. Find articles, guides, and insights.`}
        />
      </Helmet>

      {/* Search Header */}
      <section className="bg-gradient-to-b from-secondary/50 to-background py-12 md:py-16">
        <div className="container-blog">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-8">
              Search Articles
            </h1>
            
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles, topics, categories..."
                className="w-full h-14 pl-12 pr-32 rounded-2xl bg-background border border-border shadow-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
              />
              <Button type="submit" variant="accent" size="lg" className="absolute right-2 top-1/2 -translate-y-1/2">
                Search
              </Button>
            </form>

            {/* Popular Searches */}
            {!query && (
              <div className="mt-6 text-center">
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-3">
                  <TrendingUp className="w-4 h-4" />
                  Popular Searches
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  {popularSearches.map((search, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setQuery(search);
                        setSearchParams({ q: search });
                      }}
                      className="px-3 py-1.5 bg-secondary text-sm text-secondary-foreground rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      {search}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="container-blog py-12">
        {query && (
          <>
            {/* Filters */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Filter className="w-4 h-4" />
                Filter by:
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory("")}
                  className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
                    !selectedCategory
                      ? "bg-accent text-accent-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  All
                </button>
                {categories.slice(0, 8).map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.name)}
                    className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
                      selectedCategory === cat.name
                        ? "bg-accent text-accent-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {cat.icon} {cat.name}
                  </button>
                ))}
              </div>
              {selectedCategory && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="w-4 h-4" />
                  Clear filters
                </button>
              )}
            </div>

            {/* Results Count */}
            <p className="text-muted-foreground mb-6">
              {results.length} result{results.length !== 1 ? "s" : ""} found for "{query}"
              {selectedCategory && ` in ${selectedCategory}`}
            </p>

            {/* Results Grid */}
            {results.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.map((post, index) => (
                  <div
                    key={post.id}
                    className="animate-fade-in-up"
                    style={{ opacity: 0, animationDelay: `${index * 0.05}s` }}
                  >
                    <BlogCard post={post} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-secondary flex items-center justify-center">
                  <Search className="w-10 h-10 text-muted-foreground" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                  No results found
                </h2>
                <p className="text-muted-foreground mb-6">
                  We couldn't find any articles matching "{query}". Try different keywords.
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {popularSearches.slice(0, 5).map((search, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setQuery(search);
                        setSearchParams({ q: search });
                      }}
                      className="px-3 py-1.5 bg-secondary text-sm text-secondary-foreground rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      {search}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {/* Browse Categories when no query */}
        {!query && (
          <div className="text-center py-8">
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">
              Browse by Category
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={`/categories/${category.slug}`}
                  className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-accent/10 transition-colors"
                >
                  <span className="text-2xl">{category.icon}</span>
                  <span className="font-medium text-foreground">{category.name}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default SearchResults;
