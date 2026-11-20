export const molassesSpecs = [
  { parameter: 'Total Soluble Solids (Brix)', limits: '82.0% – 88.0%', method: 'Refractometric at 20°C' },
  { parameter: 'Total Reducing Sugars (TRS)', limits: '45.0% – 50.0%', method: 'Lane & Eynon Method' },
  { parameter: 'Sulfated Ash', limits: '12.0% – 15.0% max', method: 'Gravimetric Calcination' },
  { parameter: 'pH (1:1 Aqueous)', limits: '4.5 – 5.5', method: 'Potentiometric' },
  { parameter: 'Specific Gravity / Density', limits: '1.42 – 1.47 g/ml', method: 'Hydrometer / Pycnometer' },
  { parameter: 'Appearance', limits: 'Dark brown, thick viscous liquid', method: 'Visual Examination' },
  { parameter: 'Apparent Viscosity', limits: '3000 – 5000 cP at 25°C', method: 'Brookfield Viscometer' },
];

export const storageGuidance = [
  {
    title: 'Storage Tanks',
    description: 'Store in mild steel, stainless steel, or lined concrete tanks with top ventilation to prevent moisture condensation and wild-yeast fermentation.',
    icon: 'container',
  },
  {
    title: 'Temperature Control',
    description: 'Maintain storage below 40°C. In cooler climates, hold between 20–25°C using low-pressure steam or hot-water coils for smooth flow.',
    icon: 'thermometer',
  },
  {
    title: 'Pumping Systems',
    description: 'Use positive displacement pumps (gear or rotary lobe) with wide-diameter feed lines.',
    icon: 'cog',
  },
];
