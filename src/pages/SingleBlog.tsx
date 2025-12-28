import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Share2, Bookmark, Twitter, Facebook, Linkedin } from "lucide-react";
import Layout from "@/components/layout/Layout";
import BlogCard from "@/components/blog/BlogCard";
import TableOfContents from "@/components/blog/TableOfContents";
import FAQAccordion from "@/components/blog/FAQAccordion";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogData";

const SingleBlog = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);
  const relatedPosts = blogPosts.filter((p) => p.id !== id && p.category === post?.category).slice(0, 3);

  if (!post) {
    return (
      <Layout>
        <div className="container-blog py-20 text-center">
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/">Go Home</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const tocItems = [
    { id: "introduction", title: "Introduction", level: 2 },
    { id: "main-content", title: "Main Content", level: 2 },
    { id: "key-takeaways", title: "Key Takeaways", level: 2 },
    { id: "conclusion", title: "Conclusion", level: 2 },
    { id: "faq", title: "FAQ", level: 2 },
  ];

  const faqItems = [
    {
      question: "What are the key points of this article?",
      answer: "This article covers the latest developments and provides actionable insights that you can apply immediately. The key points are highlighted throughout the content for easy reference.",
    },
    {
      question: "How often is this content updated?",
      answer: "We regularly update our articles to ensure they remain accurate and relevant. Check the publication date at the top of the article for the last update.",
    },
    {
      question: "Can I share this article?",
      answer: "Absolutely! We encourage sharing. Use the social share buttons provided or copy the article link to share with your network.",
    },
    {
      question: "Where can I find related content?",
      answer: "Scroll down to the 'Related Posts' section at the bottom of this article. You can also explore our categories page for more content on similar topics.",
    },
  ];

  return (
    <Layout>
      <Helmet>
        <title>{post.title} | KnowledgeHub</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={post.image} />
      </Helmet>

      <article>
        {/* Hero */}
        <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 container-blog pb-10 md:pb-16">
            <div className="max-w-3xl">
              <Link
                to="/latest"
                className="inline-flex items-center gap-2 text-background/70 hover:text-background mb-4 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to articles
              </Link>
              <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-sm font-medium rounded-full mb-4">
                {post.category}
              </span>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-4">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-background/80">
                <div className="flex items-center gap-2">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <span className="font-medium">{post.author.name}</span>
                </div>
                <span>•</span>
                <span>{post.date}</span>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container-blog py-12 md:py-16">
          <div className="lg:flex lg:gap-12">
            {/* Sidebar */}
            <aside className="hidden lg:block w-72 flex-shrink-0">
              <div className="sticky top-24 space-y-6">
                <TableOfContents items={tocItems} />

                {/* Share */}
                <div className="bg-secondary/30 rounded-2xl p-6">
                  <h4 className="font-display font-semibold text-foreground mb-4">Share Article</h4>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" aria-label="Share on Twitter">
                      <Twitter className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="icon" aria-label="Share on Facebook">
                      <Facebook className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="icon" aria-label="Share on LinkedIn">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="icon" aria-label="Copy link">
                      <Share2 className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="icon" aria-label="Bookmark">
                      <Bookmark className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 max-w-3xl">
              {/* Article Body */}
              <div className="prose prose-lg max-w-none">
                <section id="introduction">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Introduction</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {post.excerpt} In this comprehensive guide, we'll explore everything you need to know 
                    about this topic and provide actionable insights you can implement right away.
                  </p>
                </section>

                <section id="main-content" className="mt-10">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Main Content</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    The landscape is constantly evolving, and staying ahead requires continuous learning 
                    and adaptation. Whether you're a beginner just starting out or an experienced professional 
                    looking to expand your knowledge, this article has something for everyone.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    We've compiled research from industry experts and real-world case studies to bring you 
                    the most comprehensive and up-to-date information available. Our goal is to help you 
                    make informed decisions and achieve your objectives.
                  </p>
                </section>

                <section id="key-takeaways" className="mt-10">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Key Takeaways</h2>
                  <ul className="space-y-3 text-muted-foreground mb-6">
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-accent/10 text-accent flex items-center justify-center flex-shrink-0 mt-0.5 text-sm font-medium">1</span>
                      <span>Understanding the fundamentals is crucial for long-term success in this field.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-accent/10 text-accent flex items-center justify-center flex-shrink-0 mt-0.5 text-sm font-medium">2</span>
                      <span>Staying updated with the latest trends gives you a competitive advantage.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-accent/10 text-accent flex items-center justify-center flex-shrink-0 mt-0.5 text-sm font-medium">3</span>
                      <span>Practical application of knowledge leads to better retention and results.</span>
                    </li>
                  </ul>
                </section>

                <section id="conclusion" className="mt-10">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Conclusion</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    We hope this article has provided valuable insights and practical knowledge you can 
                    apply. Remember, success comes from consistent effort and staying curious. Keep 
                    learning, keep growing, and don't hesitate to reach out if you have questions.
                  </p>
                </section>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-border">
                  {post.tags.map((tag, index) => (
                    <Link
                      key={index}
                      to={`/search?q=${encodeURIComponent(tag)}`}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div className="mt-12" id="faq">
                <FAQAccordion items={faqItems} />
              </div>

              {/* Author Card */}
              <div className="mt-12 p-6 bg-secondary/30 rounded-2xl flex flex-col sm:flex-row items-center gap-6">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div className="text-center sm:text-left">
                  <h4 className="font-display font-semibold text-lg text-foreground">{post.author.name}</h4>
                  <p className="text-muted-foreground mt-1">
                    Expert writer and researcher with years of experience in the industry. 
                    Passionate about sharing knowledge and helping others succeed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="bg-secondary/30 py-12 md:py-16">
            <div className="container-blog">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <BlogCard key={relatedPost.id} post={relatedPost} />
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
    </Layout>
  );
};

export default SingleBlog;
