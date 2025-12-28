import { Helmet } from "react-helmet-async";
import { Users, Target, Lightbulb, Award } from "lucide-react";
import Layout from "@/components/layout/Layout";

const About = () => {
  const stats = [
    { label: "Articles Published", value: "5,000+" },
    { label: "Monthly Readers", value: "2M+" },
    { label: "Categories", value: "50+" },
    { label: "Expert Writers", value: "100+" },
  ];

  const values = [
    {
      icon: Target,
      title: "Accuracy First",
      description: "We verify every fact and update our content regularly to ensure you get the most accurate information.",
    },
    {
      icon: Lightbulb,
      title: "Actionable Insights",
      description: "Our articles provide practical knowledge you can apply immediately, not just theoretical concepts.",
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "We listen to our readers and create content based on what matters most to you.",
    },
    {
      icon: Award,
      title: "Quality Content",
      description: "Every article goes through rigorous editorial review to maintain our high standards.",
    },
  ];

  return (
    <Layout>
      <Helmet>
        <title>About Us - Our Mission & Story | KnowledgeHub</title>
        <meta
          name="description"
          content="Learn about KnowledgeHub's mission to provide accurate, actionable insights on technology, finance, and more. Meet our team and discover our values."
        />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-b from-secondary/50 to-background py-16 md:py-24">
        <div className="container-blog">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Empowering Through
              <span className="text-accent block mt-2">Knowledge</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              We're on a mission to make quality information accessible to everyone. 
              From technology to finance, we cover topics that matter.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container-blog py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-secondary/30 animate-fade-in-up"
              style={{ opacity: 0, animationDelay: `${index * 0.1}s` }}
            >
              <div className="font-display text-3xl md:text-4xl font-bold text-accent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="container-blog py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up" style={{ opacity: 0, animationDelay: "0.1s" }}>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Story
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              KnowledgeHub started with a simple idea: everyone deserves access to quality, 
              unbiased information. In a world overflowing with content, we saw the need for 
              a trusted source that cuts through the noise.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Founded by a team of passionate writers, researchers, and industry experts, 
              we've grown into one of the most trusted knowledge platforms on the web. 
              Our commitment to accuracy and practical insights has earned us millions of loyal readers.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, we continue to expand our coverage while maintaining the quality standards 
              that made us who we are. Whether you're looking to learn about the latest tech trends, 
              make smarter financial decisions, or explore new opportunities, we're here to help.
            </p>
          </div>
          <div
            className="relative h-80 md:h-96 rounded-2xl overflow-hidden animate-fade-in-up"
            style={{ opacity: 0, animationDelay: "0.2s" }}
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
              alt="Team collaboration"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary/30 py-12 md:py-16">
        <div className="container-blog">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do, from the content we create 
              to how we interact with our community.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-background p-6 rounded-2xl border border-border/50 animate-fade-in-up"
                style={{ opacity: 0, animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-blog py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Join Our Community
          </h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to our newsletter and get the best insights delivered to your inbox weekly.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 h-12 px-4 rounded-xl bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button className="h-12 px-8 bg-accent text-accent-foreground font-semibold rounded-xl hover:bg-accent/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
