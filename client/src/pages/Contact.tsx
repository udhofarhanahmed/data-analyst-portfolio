import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Show success message
      toast.success("Message sent successfully! I'll get back to you soon.");

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Have a project in mind? Let's discuss how I can help your business grow through data-driven insights.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {/* Contact Info */}
            <div className="md:col-span-1 space-y-8">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                  <Mail className="h-5 w-5 text-teal-500 mr-3" />
                  Email
                </h3>
                <a href="mailto:dataanalystfarhan@gmail.com" className="text-teal-600 hover:text-teal-700 font-medium">
                  dataanalystfarhan@gmail.com
                </a>
                <p className="text-slate-600 text-sm mt-2">I typically respond within 24 hours</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                  <Phone className="h-5 w-5 text-teal-500 mr-3" />
                  Phone
                </h3>
                <a href="https://wa.me/923032833031" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700 font-medium">
                  +92 303 283 3031 (WhatsApp)
                </a>
                <p className="text-slate-600 text-sm mt-2">Quick response via WhatsApp</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                  <MapPin className="h-5 w-5 text-teal-500 mr-3" />
                  Location
                </h3>
                <p className="text-slate-700 font-medium">Pakistan</p>
                <p className="text-slate-600 text-sm mt-2">Available for remote work globally</p>
              </div>

              <div className="pt-8 border-t border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Connect With Me</h3>
                <div className="flex gap-4">
                  <a href="https://linkedin.com/in/farhan-ahmed-5511a3176" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-teal-600 transition-colors">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href="https://github.com/udhofarhanahmed" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-teal-600 transition-colors">
                    <Github className="h-6 w-6" />
                  </a>
                  <a href="mailto:dataanalystfarhan@gmail.com" className="text-slate-600 hover:text-teal-600 transition-colors">
                    <Mail className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-slate-900 mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Project inquiry, consultation, etc."
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project, goals, and timeline..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  size="lg"
                  className="w-full bg-teal-500 hover:bg-teal-600 text-white"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-slate-50 border-t border-slate-200">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-3">What types of projects do you work on?</h3>
              <p className="text-slate-700">
                I specialize in sales analysis, customer segmentation, financial dashboards, and market research. I work with businesses of all sizes, from startups to established companies.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-3">What's your typical project timeline?</h3>
              <p className="text-slate-700">
                Most projects take 2-6 weeks depending on complexity and data availability. I'll provide a detailed timeline during our initial consultation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Do you offer ongoing support?</h3>
              <p className="text-slate-700">
                Yes! I offer retainer-based support for ongoing analysis, dashboard maintenance, and strategic consulting. Let's discuss what works best for your needs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-3">How do you handle confidential data?</h3>
              <p className="text-slate-700">
                Data security and confidentiality are paramount. I follow industry best practices and can sign NDAs as needed. Your data is treated with the utmost care.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-3">What's your pricing model?</h3>
              <p className="text-slate-700">
                I offer flexible pricing based on project scope, complexity, and timeline. Options include project-based, hourly, or retainer arrangements. Let's discuss what fits your budget.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-3">How do I get started?</h3>
              <p className="text-slate-700">
                Simply fill out the contact form above or reach out via email/LinkedIn. We'll schedule a brief call to understand your needs and discuss how I can help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Data Into Insights?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's start a conversation about your data challenges and opportunities.
          </p>
          <a href="mailto:dataanalystfarhan@gmail.com">
            <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white">
              Send Me an Email
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
