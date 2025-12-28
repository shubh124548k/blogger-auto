import { Helmet } from "react-helmet-async";
import { Mail, MapPin, Clock, Send } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@knowledgehub.com",
      description: "We'll respond within 24 hours",
    },
    {
      icon: MapPin,
      title: "Location",
      details: "San Francisco, CA",
      description: "United States",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon - Fri: 9AM - 6PM",
      description: "Pacific Time (PT)",
    },
  ];

  return (
    <Layout>
      <Helmet>
        <title>Contact Us - Get in Touch | KnowledgeHub</title>
        <meta
          name="description"
          content="Have questions or feedback? Contact KnowledgeHub. We'd love to hear from you. Send us a message and we'll respond within 24 hours."
        />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-b from-secondary/50 to-background py-16 md:py-24">
        <div className="container-blog">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground">
              Have questions, feedback, or just want to say hello? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="container-blog py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-fade-in-up" style={{ opacity: 0, animationDelay: "0.1s" }}>
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">
              Send us a Message
            </h2>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full h-12 px-4 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full h-12 px-4 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full h-12 px-4 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>
              <Button variant="hero" size="xl" className="w-full sm:w-auto gap-2">
                Send Message <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in-up" style={{ opacity: 0, animationDelay: "0.2s" }}>
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">
              Contact Information
            </h2>
            <div className="space-y-6 mb-10">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-secondary/30"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground">{item.title}</h3>
                    <p className="text-foreground mt-1">{item.details}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* FAQ Link */}
            <div className="p-6 rounded-2xl bg-accent/5 border border-accent/20">
              <h3 className="font-display font-semibold text-foreground mb-2">
                Looking for Quick Answers?
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Check out our frequently asked questions for instant answers to common queries.
              </p>
              <Button variant="outline">View FAQ</Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
