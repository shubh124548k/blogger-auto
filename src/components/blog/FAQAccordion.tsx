import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  title?: string;
}

const FAQAccordion = ({ items, title = "Frequently Asked Questions" }: FAQAccordionProps) => {
  return (
    <div className="bg-secondary/30 rounded-2xl p-6 md:p-8">
      <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-6">
        {title}
      </h3>
      <Accordion type="single" collapsible className="space-y-3">
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="bg-background rounded-xl border border-border/50 px-5 overflow-hidden"
          >
            <AccordionTrigger className="text-left font-medium text-foreground hover:text-accent transition-colors py-4 [&[data-state=open]>svg]:rotate-180">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-4">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQAccordion;
