import { Link } from "react-router-dom";
import { categories, trendingTopics, blogPosts } from "@/data/blogData";

const Footer = () => {
  const allCategories = categories;
  const latestPosts = blogPosts.slice(0, 6);

  return (
    <footer className="bg-foreground text-background">
      {/* Mega Footer Navigation */}
      <div className="container-blog py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-accent-foreground font-display font-bold text-xl">
                K
              </div>
              <span className="font-display font-bold text-xl">KnowledgeHub</span>
            </Link>
            <p className="text-background/70 mb-6 max-w-xs">
              Your trusted source for the latest insights in technology, finance, and more. Stay informed, stay ahead.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Twitter", "Facebook", "LinkedIn", "YouTube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-background/50 hover:text-accent transition-colors text-sm"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* All Categories */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Categories</h4>
            <ul className="space-y-2">
              {allCategories.slice(0, 10).map((category) => (
                <li key={category.id}>
                  <Link
                    to={`/categories/${category.slug}`}
                    className="text-background/70 hover:text-accent transition-colors text-sm flex items-center gap-2"
                  >
                    <span>{category.icon}</span>
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Categories */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">More Topics</h4>
            <ul className="space-y-2">
              {allCategories.slice(10, 20).map((category) => (
                <li key={category.id}>
                  <Link
                    to={`/categories/${category.slug}`}
                    className="text-background/70 hover:text-accent transition-colors text-sm flex items-center gap-2"
                  >
                    <span>{category.icon}</span>
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trending Topics */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Trending Now</h4>
            <ul className="space-y-2">
              {trendingTopics.slice(0, 10).map((topic, index) => (
                <li key={index}>
                  <Link
                    to={`/search?q=${encodeURIComponent(topic)}`}
                    className="text-background/70 hover:text-accent transition-colors text-sm"
                  >
                    {topic}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Latest Posts */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Latest Posts</h4>
            <ul className="space-y-3">
              {latestPosts.map((post) => (
                <li key={post.id}>
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-background/70 hover:text-accent transition-colors text-sm line-clamp-2"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Quick Links Row */}
        <div className="mt-10 pt-8 border-t border-background/10">
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center text-sm">
            <Link to="/" className="text-background/60 hover:text-accent transition-colors">Home</Link>
            <Link to="/categories" className="text-background/60 hover:text-accent transition-colors">Categories</Link>
            <Link to="/latest" className="text-background/60 hover:text-accent transition-colors">Latest</Link>
            <Link to="/about" className="text-background/60 hover:text-accent transition-colors">About</Link>
            <Link to="/contact" className="text-background/60 hover:text-accent transition-colors">Contact</Link>
            <Link to="/sitemap" className="text-background/60 hover:text-accent transition-colors">Sitemap</Link>
            <Link to="/rss" className="text-background/60 hover:text-accent transition-colors">RSS Feed</Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar with Credit */}
      <div className="border-t border-background/10">
        <div className="container-blog py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/50 text-sm">
              © 2025 KnowledgeHub. All rights reserved.
            </p>
            <p className="text-background/50 text-sm">
              Website made by{" "}
              <a
                href="https://webscraftstudio.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 transition-colors font-medium"
              >
                WebCraft Studios
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
