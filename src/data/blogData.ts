export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  categorySlug: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  readTime: number;
  trending: boolean;
  featured?: boolean;
  tags: string[];
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  postCount: number;
  count?: number;
  id?: string;
}

export const categories: Category[] = [
  {
    slug: "technology",
    name: "Technology",
    description: "Latest tech trends and innovations",
    icon: "🚀",
    color: "from-blue-600 to-cyan-600",
    postCount: 12,
    count: 12,
    id: "1",
  },
  {
    slug: "lifestyle",
    name: "Lifestyle",
    description: "Tips for living your best life",
    icon: "✨",
    color: "from-purple-600 to-pink-600",
    postCount: 8,
    count: 8,
    id: "2",
  },
  {
    slug: "business",
    name: "Business",
    description: "Entrepreneurship and growth strategies",
    icon: "💼",
    color: "from-green-600 to-emerald-600",
    postCount: 10,
    count: 10,
    id: "3",
  },
  {
    slug: "travel",
    name: "Travel",
    description: "Explore destinations around the world",
    icon: "🌍",
    color: "from-orange-600 to-red-600",
    postCount: 9,
    count: 9,
    id: "4",
  },
  {
    slug: "health",
    name: "Health & Fitness",
    description: "Wellness tips and fitness guidance",
    icon: "💪",
    color: "from-red-600 to-pink-600",
    postCount: 11,
    count: 11,
    id: "5",
  },
  {
    slug: "education",
    name: "Education",
    description: "Learning resources and skill development",
    icon: "📚",
    color: "from-indigo-600 to-blue-600",
    postCount: 7,
    count: 7,
    id: "6",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Web Development in 2025",
    excerpt: "Explore the emerging trends and technologies shaping web development",
    content: `Web development is rapidly evolving with new frameworks and technologies emerging constantly. In 2025, we're seeing a shift towards more performant, user-friendly applications...

Key trends include:
- React Server Components becoming mainstream
- Edge computing and serverless architecture
- AI-powered development tools
- Enhanced focus on accessibility
- Web standards maturation

The tools and frameworks developers choose today will define the web of tomorrow. Whether you're building with React, Vue, or experimenting with new technologies, staying updated is crucial.`,
    image: "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=800&q=80",
    category: "Technology",
    categorySlug: "technology",
    author: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    },
    date: "2025-12-25",
    readTime: 8,
    trending: true,
    featured: true,
    tags: ["web-dev", "technology", "react", "javascript"],
  },
  {
    id: "2",
    title: "Mastering Responsive Design with Tailwind CSS",
    excerpt: "Learn how to create beautiful responsive websites using Tailwind CSS",
    content: `Responsive design is no longer optional—it's essential. With Tailwind CSS, creating responsive designs has become easier than ever...

Topics covered:
- Mobile-first approach
- Breakpoints and responsive utilities
- Flexbox and Grid layouts
- Dark mode implementation
- Performance optimization

Tailwind's utility-first approach makes it straightforward to build layouts that work perfectly on any screen size. By using responsive prefixes like md:, lg:, and xl:, you can target specific breakpoints with precision.`,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    category: "Technology",
    categorySlug: "technology",
    author: {
      name: "Alex Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    },
    date: "2025-12-23",
    readTime: 10,
    trending: true,
    tags: ["css", "tailwind", "responsive-design", "web-dev"],
  },
  {
    id: "3",
    title: "Building a Successful Online Business",
    excerpt: "Essential strategies for launching and growing your digital enterprise",
    content: `Starting an online business requires more than just a good idea. It requires strategy, planning, and execution...

Key components:
- Market research and validation
- Building your brand identity
- Creating a solid business plan
- Digital marketing strategies
- Customer retention tactics

Success in the online business world comes from understanding your audience, providing value, and continuously adapting to market changes. The journey is challenging but rewarding.`,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    category: "Business",
    categorySlug: "business",
    author: {
      name: "Michael Roberts",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    },
    date: "2025-12-21",
    readTime: 12,
    trending: true,
    tags: ["business", "entrepreneurship", "strategy", "growth"],
  },
  {
    id: "4",
    title: "Top 10 Travel Destinations for 2025",
    excerpt: "Discover the most breathtaking destinations to visit this year",
    content: `Travel enriches your life and expands your horizons. Here are the top destinations to consider for your next adventure...

Featured destinations:
1. Japan - Cherry blossoms and ancient temples
2. Iceland - Natural wonders and Northern Lights
3. Portugal - Coastal beauty and vibrant culture
4. New Zealand - Adventure and stunning landscapes
5. Greece - History and island paradise

Each destination offers unique experiences, from cultural immersion to adventure activities. Plan ahead, book early, and make memories that last a lifetime.`,
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80",
    category: "Travel",
    categorySlug: "travel",
    author: {
      name: "Emma Wilson",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    },
    date: "2025-12-20",
    readTime: 9,
    trending: true,
    tags: ["travel", "destinations", "adventure", "culture"],
  },
  {
    id: "5",
    title: "Complete Guide to Fitness and Wellness",
    excerpt: "Transform your health with practical fitness and wellness tips",
    content: `Health is wealth. Creating a sustainable fitness routine and wellness practice is one of the best investments you can make...

Getting started:
- Set realistic fitness goals
- Create a balanced workout routine
- Focus on nutrition and meal planning
- Prioritize recovery and sleep
- Build a supportive community

Remember, fitness is a journey, not a destination. Small consistent steps lead to significant transformations over time.`,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    category: "Health & Fitness",
    categorySlug: "health",
    author: {
      name: "David Martinez",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    },
    date: "2025-12-19",
    readTime: 11,
    trending: false,
    tags: ["fitness", "health", "wellness", "lifestyle"],
  },
  {
    id: "6",
    title: "Self-Care Rituals That Actually Work",
    excerpt: "Practical self-care habits for mental and physical well-being",
    content: `Self-care isn't indulgent—it's necessary for maintaining your mental and physical health...

Essential self-care rituals:
- Morning meditation practice
- Skincare routines
- Exercise and movement
- Digital detox periods
- Quality sleep hygiene

Implementing self-care rituals into your daily life can significantly improve your overall well-being and productivity.`,
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
    category: "Lifestyle",
    categorySlug: "lifestyle",
    author: {
      name: "Lisa Anderson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    },
    date: "2025-12-18",
    readTime: 7,
    trending: false,
    tags: ["self-care", "wellness", "lifestyle", "mental-health"],
  },
  {
    id: "7",
    title: "Learning to Code: A Beginner's Guide",
    excerpt: "Start your programming journey with our comprehensive guide",
    content: `Learning to code is an exciting journey that opens doors to countless opportunities...

First steps:
- Choose a programming language
- Set up your development environment
- Learn fundamental concepts
- Practice with real projects
- Join coding communities

Whether you want to build web applications, mobile apps, or work in data science, learning to code is the first step toward your goals.`,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    category: "Education",
    categorySlug: "education",
    author: {
      name: "James Wilson",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    },
    date: "2025-12-17",
    readTime: 13,
    trending: true,
    tags: ["education", "coding", "programming", "learning"],
  },
  {
    id: "8",
    title: "Advanced TypeScript Patterns",
    excerpt: "Master advanced TypeScript concepts for production applications",
    content: `TypeScript brings powerful type safety to JavaScript development. Understanding advanced patterns can significantly improve your code quality...

Advanced topics:
- Generic types and constraints
- Discriminated unions
- Conditional types
- Mapped types
- Advanced decorator patterns

These patterns help you write more maintainable, scalable, and robust applications.`,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    category: "Technology",
    categorySlug: "technology",
    author: {
      name: "Alex Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    },
    date: "2025-12-16",
    readTime: 15,
    trending: false,
    tags: ["typescript", "javascript", "programming", "advanced"],
  },
  {
    id: "9",
    title: "Mediterranean Cruising Guide",
    excerpt: "Everything you need to know about cruising the Mediterranean",
    content: `A Mediterranean cruise is the perfect way to explore multiple countries and cultures in one trip...

Cruise essentials:
- Best time to cruise
- Major ports and attractions
- Ship amenities and types
- Budget planning
- Packing tips

The Mediterranean offers unparalleled beauty, rich history, and diverse cuisine. Plan your adventure today!`,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    category: "Travel",
    categorySlug: "travel",
    author: {
      name: "Emma Wilson",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    },
    date: "2025-12-15",
    readTime: 10,
    trending: false,
    tags: ["travel", "cruise", "mediterranean", "vacation"],
  },
  {
    id: "10",
    title: "Digital Marketing Strategies for 2025",
    excerpt: "Effective digital marketing tactics to grow your online presence",
    content: `Digital marketing continues to evolve with new platforms, algorithms, and consumer behaviors...

Key strategies:
- Content marketing excellence
- Social media engagement
- Email marketing automation
- SEO optimization
- Influencer partnerships

Staying ahead of digital marketing trends ensures your business remains visible and competitive in the online space.`,
    image: "https://images.unsplash.com/photo-1460925895917-adf4e565db57?w=800&q=80",
    category: "Business",
    categorySlug: "business",
    author: {
      name: "Michael Roberts",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    },
    date: "2025-12-14",
    readTime: 11,
    trending: true,
    tags: ["marketing", "business", "digital-marketing", "strategy"],
  },
];

export const trendingTopics: string[] = [
  "Web Development",
  "Artificial Intelligence",
  "Cloud Computing",
  "Cybersecurity",
  "Machine Learning",
  "Sustainable Living",
  "Digital Marketing",
  "Remote Work",
];

export const popularSearches: string[] = [
  "How to learn React",
  "Best travel destinations",
  "Fitness routines",
  "Business tips",
  "Web design trends",
  "Productivity hacks",
  "Healthy recipes",
  "Career development",
];
