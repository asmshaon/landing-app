import { Star } from "lucide-react";


const testimonials = [
  {
    text: "Abu was a pleasure to work with. He is professional, reliable, and a very hard worker. Always positive, he works well both independently and as part of a team. He consistently made himself available when needed and brought creative, out-of-the-box thinking to every project. Abu stays up to date with best practices and modern frameworks, ensuring high-quality results. I highly recommend him for full-stack development work.",
  },
  {
    text: "I can't recommend Abu enough. He was a pleasure to work with from start to finish. Abu demonstrated strong technical expertise across both front-end and back-end development, delivering clean, efficient code and thoughtful solutions throughout the project. He is a very hard worker, listener and problem solver. I came to him only with an idea and he built it from scratch. Communication was clear, prompt, and professional, and he consistently met (or beat) deadlines. What really stood out was his proactive approach to solving problems and suggesting improvements that added real value. I will absolutely hire Abu again for future projects and recommend him to anyone looking for a skilled and dependable developer.",
  },
  {
    text: "Abu Saleh is one of the best developers I've ever worked with. He not only can accomplish any job presented to him, but he makes really sound judgements on how to fill in all the gaps that were previously undefined. In addition to this, he has exceptional leadership skills as he led our team of developers to complete the project at hand. We have already re-hired him for our next project. Highly recommend.",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-slate-50 dark:bg-dark-800 border-t border-slate-200 dark:border-dark-600 py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12 lg:mb-14">
          <p className="eyebrow mb-3">Testimonials</p>
          <h2 className="font-display font-medium text-accent text-4xl lg:text-5xl leading-tight">
            What it&apos;s like to work with me
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, idx) => (
            <figure key={idx} className="flex flex-col gap-5 border-t border-accent pt-6">
              <div className="flex gap-1" aria-label="5 out of 5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-accent fill-current" />
                ))}
              </div>
              <blockquote className="font-display text-accent text-lg leading-relaxed">
                &ldquo;{t.text}&rdquo;
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
