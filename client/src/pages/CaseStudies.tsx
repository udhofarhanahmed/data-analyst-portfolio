import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Link } from "wouter";

export default function CaseStudies() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container">
          <Link href="/portfolio">
            <Button variant="ghost" className="text-white mb-6 hover:bg-white/10">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
            </Button>
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Case Studies</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Detailed analysis of real-world projects, methodologies, and measurable outcomes.
          </p>
        </div>
      </section>

      {/* Case Study 1: Sales Analysis */}
      <section className="py-20 md:py-32 bg-white border-b border-slate-200">
        <div className="container max-w-4xl">
          <div className="mb-12">
            <div className="inline-block bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Sales Analytics
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Sales Performance Analysis</h2>
            <p className="text-xl text-slate-600">
              How I identified revenue trends and optimized pricing to drive a 15% increase in annual revenue.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">The Problem</h3>
              <p className="text-slate-700 leading-relaxed">
                A mid-sized e-commerce company was experiencing inconsistent sales growth and didn't understand which products, regions, or customer segments were driving revenue. They lacked visibility into pricing effectiveness and couldn't forecast future performance with confidence.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">My Approach</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <span className="h-2 w-2 bg-teal-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span><strong>Data Collection:</strong> Extracted 2 years of sales data from their e-commerce platform, including transactions, customer profiles, and product details.</span>
                </li>
                <li className="flex items-start">
                  <span className="h-2 w-2 bg-teal-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span><strong>Data Cleaning:</strong> Identified and handled missing values, duplicates, and outliers. Standardized date formats and product categories.</span>
                </li>
                <li className="flex items-start">
                  <span className="h-2 w-2 bg-teal-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span><strong>Exploratory Analysis:</strong> Analyzed sales trends by product, region, and customer segment. Calculated key metrics like average order value, customer lifetime value, and churn rate.</span>
                </li>
                <li className="flex items-start">
                  <span className="h-2 w-2 bg-teal-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span><strong>Forecasting:</strong> Built a time-series forecast model to predict future sales and identify seasonal patterns.</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Key Findings</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                  <div className="text-3xl font-bold text-teal-600 mb-2">15%</div>
                  <p className="text-slate-700">Potential revenue increase through pricing optimization</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                  <div className="text-3xl font-bold text-teal-600 mb-2">3</div>
                  <p className="text-slate-700">Key seasonal trends identified for inventory planning</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                  <div className="text-3xl font-bold text-teal-600 mb-2">5</div>
                  <p className="text-slate-700">High-value customer segments for targeted marketing</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Recommendations</h3>
              <ol className="space-y-3 text-slate-700 list-decimal list-inside">
                <li>Implement dynamic pricing for high-demand products during peak seasons</li>
                <li>Focus marketing budget on the top 3 customer segments (responsible for 60% of revenue)</li>
                <li>Optimize inventory based on seasonal forecasts to reduce carrying costs</li>
                <li>Create targeted promotions for underperforming product categories</li>
                <li>Establish monthly KPI dashboard for real-time performance monitoring</li>
              </ol>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Impact</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                The client implemented the recommendations and achieved a 15% increase in annual revenue within 6 months. They also reduced inventory costs by 12% through better forecasting and improved customer retention by 8% through targeted marketing.
              </p>
            </div>

            <div className="flex gap-4 pt-8">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Button className="bg-teal-500 hover:bg-teal-600 text-white">
                  <Github className="mr-2 h-4 w-4" /> View Code
                </Button>
              </a>
              <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-slate-300">
                  <ExternalLink className="mr-2 h-4 w-4" /> View Dashboard
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study 2: Customer Segmentation */}
      <section className="py-20 md:py-32 bg-slate-50 border-b border-slate-200">
        <div className="container max-w-4xl">
          <div className="mb-12">
            <div className="inline-block bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Customer Analytics
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Customer Segmentation Analysis</h2>
            <p className="text-xl text-slate-600">
              Identifying high-value customer segments to drive targeted marketing and improve retention.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">The Problem</h3>
              <p className="text-slate-700 leading-relaxed">
                A SaaS company was treating all customers the same, leading to inefficient marketing spend and poor retention. They needed to understand their customer base better to tailor messaging and product offerings.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Solution</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                I performed RFM (Recency, Frequency, Monetary) analysis and K-means clustering to segment customers into 5 distinct personas with different behaviors and value profiles.
              </p>
              <div className="bg-white p-6 rounded-lg border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-4">The 5 Customer Segments:</h4>
                <ul className="space-y-3 text-slate-700">
                  <li><strong>Champions (20%):</strong> Highest value, frequent users, strong advocates</li>
                  <li><strong>Loyal (25%):</strong> Consistent users, moderate spend, stable retention</li>
                  <li><strong>At-Risk (20%):</strong> Previously active, declining engagement, churn risk</li>
                  <li><strong>Prospects (20%):</strong> New customers, low spend, high growth potential</li>
                  <li><strong>Inactive (15%):</strong> Minimal engagement, low value, dormant accounts</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Results</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg border border-slate-200">
                  <div className="text-2xl font-bold text-teal-600 mb-2">40%</div>
                  <p className="text-slate-700">Improvement in marketing campaign targeting efficiency</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-slate-200">
                  <div className="text-2xl font-bold text-teal-600 mb-2">12%</div>
                  <p className="text-slate-700">Increase in customer retention through targeted retention programs</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-8">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Button className="bg-teal-500 hover:bg-teal-600 text-white">
                  <Github className="mr-2 h-4 w-4" /> View Code
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Analyze Your Data?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's explore how data analysis can drive growth for your business.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
