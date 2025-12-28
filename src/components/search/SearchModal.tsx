import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X, TrendingUp, Clock } from "lucide-react";
import { blogPosts, categories, popularSearches } from "@/data/blogData";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<typeof blogPosts>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setQuery("");
      setResults([]);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (query.length >= 2) {
      const filtered = blogPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(query.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
          post.category.toLowerCase().includes(query.toLowerCase()) ||
          post.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()))
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  const handleResultClick = (postId: string) => {
    onClose();
    navigate(`/blog/${postId}`);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onClose();
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-20 md:pt-32"
      onClick={onClose}
      onKeyDown={handleKeyDown}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-foreground/20 backdrop-blur-sm animate-fade-in" />

      {/* Modal */}
      <div
        className="relative w-full max-w-2xl mx-4 bg-background rounded-2xl shadow-2xl animate-scale-in overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input */}
        <form onSubmit={handleSearchSubmit} className="relative">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles, topics, categories..."
            className="w-full h-16 pl-14 pr-14 text-lg bg-transparent border-b border-border focus:outline-none placeholder:text-muted-foreground"
          />
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-lg hover:bg-secondary transition-colors"
            aria-label="Close search"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </form>

        {/* Content */}
        <div className="max-h-[60vh] overflow-y-auto">
          {query.length >= 2 && results.length > 0 ? (
            <div className="p-4">
              <p className="text-sm text-muted-foreground mb-3">
                {results.length} result{results.length !== 1 ? "s" : ""} found
              </p>
              <div className="space-y-2">
                {results.map((post) => (
                  <button
                    key={post.id}
                    onClick={() => handleResultClick(post.id)}
                    className="w-full flex items-start gap-4 p-3 rounded-xl hover:bg-secondary transition-colors text-left group"
                  >
                    <img
                      src={post.image}
                      alt=""
                      className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-foreground group-hover:text-accent transition-colors line-clamp-1">
                        {post.title}
                      </h4>
                      <p className="text-sm text-muted-foreground line-clamp-1 mt-1">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-xs px-2 py-0.5 bg-accent/10 text-accent rounded-full">
                          {post.category}
                        </span>
                        <span className="text-xs text-muted-foreground">{post.date}</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : query.length >= 2 ? (
            <div className="p-8 text-center">
              <p className="text-muted-foreground">No results found for "{query}"</p>
            </div>
          ) : (
            <div className="p-4">
              {/* Popular Searches */}
              <div className="mb-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <TrendingUp className="w-4 h-4" />
                  Popular Searches
                </div>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((search, index) => (
                    <button
                      key={index}
                      onClick={() => setQuery(search)}
                      className="px-3 py-1.5 bg-secondary text-sm text-secondary-foreground rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      {search}
                    </button>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Clock className="w-4 h-4" />
                  Browse Categories
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {categories.slice(0, 9).map((category) => (
                    <button
                      key={category.id}
                      onClick={() => {
                        onClose();
                        navigate(`/categories/${category.slug}`);
                      }}
                      className="flex items-center gap-2 p-3 rounded-xl bg-secondary hover:bg-accent/10 transition-colors text-left"
                    >
                      <span className="text-xl">{category.icon}</span>
                      <span className="text-sm font-medium">{category.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer hint */}
        <div className="px-4 py-3 border-t border-border bg-muted/30 text-xs text-muted-foreground flex items-center justify-between">
          <span>Press ESC to close</span>
          <span>↵ to search</span>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
