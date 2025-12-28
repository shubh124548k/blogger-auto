import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Category } from "@/data/blogData";

interface CategoryCardProps {
  category: Category;
  size?: "default" | "large";
}

const CategoryCard = ({ category, size = "default" }: CategoryCardProps) => {
  if (size === "large") {
    return (
      <Link
        to={`/categories/${category.slug}`}
        className="group relative block p-6 md:p-8 rounded-2xl bg-gradient-to-br overflow-hidden card-hover border border-border/50"
        style={{
          background: `linear-gradient(135deg, hsl(var(--secondary)) 0%, hsl(var(--background)) 100%)`,
        }}
      >
        <div className="relative z-10">
          <span className="text-4xl md:text-5xl mb-4 block">{category.icon}</span>
          <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
            {category.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
              {category.count} articles
            </span>
            <span className="flex items-center gap-1 text-sm text-accent font-medium opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
              Explore <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 opacity-5 text-8xl transform translate-x-8 -translate-y-4">
          {category.icon}
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/categories/${category.slug}`}
      className="group flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 card-hover"
    >
      <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
        {category.icon}
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-display font-semibold text-card-foreground group-hover:text-accent transition-colors">
          {category.name}
        </h4>
        <p className="text-sm text-muted-foreground">{category.count} articles</p>
      </div>
      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
    </Link>
  );
};

export default CategoryCard;
