"use client";

import { motion } from "framer-motion";

const statsData = [
  { value: "1+", label: "Year Experience" },
  { value: "20+", label: "Satisfied Clients" },
  { value: "30+", label: "Completed Works" },
  { value: "100%", label: "Professional Quality" }
];

export default function Stats() {
  return (
    <section className="py-12 border-y border-foreground/5 bg-foreground/5">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-foreground/10">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center"
            >
              <h3 className="text-4xl font-bold text-accent mb-2">{stat.value}</h3>
              <p className="text-sm font-medium text-foreground/70">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
