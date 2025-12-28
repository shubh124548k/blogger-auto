import { Link } from "react-router-dom";
import { Clock, TrendingUp } from "lucide-react";
import { BlogPost } from "@/data/blogData";

interface BlogCardProps {
  post: BlogPost;
  variant?: "default" | "featured" | "compact";
}

const BlogCard = ({ post, variant = "default" }: BlogCardProps) => {
  if (variant === "featured") {
    return (
      <Link
        to={`/blog/${post.id}`}
        className="group relative block h-[400px] md:h-[500px] rounded-2xl overflow-hidden"
      >
        <img
          src={post.image}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
        
        {post.trending && (
          <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 bg-accent text-accent-foreground text-sm font-medium rounded-full">
            <TrendingUp className="w-3.5 h-3.5" />
            Trending
          </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <span className="inline-block px-3 py-1 bg-background/20 backdrop-blur-sm text-background text-sm rounded-full mb-4">
            {post.category}
          </span>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-background mb-3 group-hover:text-accent transition-colors line-clamp-2">
            {post.title}
          </h2>
          <p className="text-background/80 mb-4 line-clamp-2 max-w-2xl">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="text-background/90 text-sm">{post.author.name}</span>
            </div>
            <div className="flex items-center gap-1.5 text-background/70 text-sm">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </div>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === "compact") {
    return (
      <Link
        to={`/blog/${post.id}`}
        className="group flex items-start gap-4 p-3 rounded-xl hover:bg-secondary transition-colors"
      >
        <img
          src={post.image}
          alt={post.title}
          className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
          loading="lazy"
        />
        <div className="flex-1 min-w-0">
          <span className="text-xs text-accent font-medium">{post.category}</span>
          <h4 className="font-display font-semibold text-foreground group-hover:text-accent transition-colors line-clamp-2 mt-1">
            {post.title}
          </h4>
          <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/blog/${post.id}`}
      className="group block bg-card rounded-2xl overflow-hidden card-hover shadow-sm border border-border/50"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {post.trending && (
          <div className="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
            <TrendingUp className="w-3 h-3" />
            Trending
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs px-2.5 py-1 bg-accent/10 text-accent font-medium rounded-full">
            {post.category}
          </span>
          <span className="text-xs text-muted-foreground">{post.date}</span>
        </div>
        <h3 className="font-display text-lg font-semibold text-card-foreground group-hover:text-accent transition-colors line-clamp-2 mb-2">
          {post.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-7 h-7 rounded-full object-cover"
            />
            <span className="text-sm text-muted-foreground">{post.author.name}</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="w-3.5 h-3.5" />
            {post.readTime}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
