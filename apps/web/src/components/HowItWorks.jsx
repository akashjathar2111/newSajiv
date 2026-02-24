
import React from 'react';
import { Leaf, Droplet, Sprout, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const steps = [
    {
      day: 'Day 1-2',
      title: 'Initial Breakdown',
      description: 'Microorganisms begin breaking down the organic materials',
      icon: Droplet,
      color: 'from-blue-500 to-blue-600'
    },
    {
      day: 'Day 3-4',
      title: 'Active Decomposition',
      description: 'Natural enzymes accelerate the decomposition process',
      icon: Leaf,
      color: 'from-green-500 to-green-600'
    },
    {
      day: 'Day 5-6',
      title: 'Nutrient Release',
      description: 'Materials transform into nutrient-rich organic matter',
      icon: Sprout,
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      day: 'Day 7',
      title: 'Complete Decomposition',
      description: 'Products fully integrate back into the ecosystem',
      icon: CheckCircle,
      color: 'from-teal-500 to-teal-600'
    }
  ];

  const certifications = [
    { name: 'USDA Certified Biobased', percentage: '100%' },
    { name: 'Compostable Certified', percentage: '100%' },
    { name: 'BPI Certified', percentage: '100%' },
    { name: 'Carbon Neutral', percentage: '100%' }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1661430236303-6d5a8af2f1af"
          alt="Natural forest ecosystem showing biodegradable decomposition process"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/90 via-green-800/85 to-green-700/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            The 7-Day Decomposition Process
          </h2>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Watch how our products naturally return to the earth, leaving zero environmental footprint
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all h-full">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl mb-4 shadow-lg`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                {/* Day Label */}
                <div className="text-green-200 font-bold text-sm mb-2">{step.day}</div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>

                {/* Description */}
                <p className="text-green-100 text-sm leading-relaxed">{step.description}</p>

                {/* Connector Line (except last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-3 w-6 h-0.5 bg-gradient-to-r from-white/50 to-transparent" />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications & Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Certified & Trusted
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/20 rounded-xl p-4 mb-3">
                  <div className="text-3xl font-bold text-white mb-1">{cert.percentage}</div>
                  <div className="text-green-100 text-sm font-medium">{cert.name}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Benefits */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-3 bg-white/10 rounded-lg p-4">
              <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
              <span className="text-white text-sm">No harmful chemicals</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/10 rounded-lg p-4">
              <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
              <span className="text-white text-sm">Safe for soil & water</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/10 rounded-lg p-4">
              <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
              <span className="text-white text-sm">Reduces landfill waste</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
