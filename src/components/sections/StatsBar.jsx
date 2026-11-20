import StatsCounter from '../ui/StatsCounter';

const stats = [
  { value: '2010', prefix: 'Est. ', suffix: '', label: 'Over a Decade of Commodity Trading' },
  { value: '28', suffix: '+', label: 'States Served Across India' },
  { value: '10000', suffix: '+', label: 'MT Annual Supply Capacity' },
  { value: '100', suffix: '%', label: 'GST & Excise Compliant' },
];

export default function StatsBar() {
  return (
    <section className="py-16 bg-gradient-to-r from-brand-green-dark via-primary to-brand-green-dark">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <StatsCounter key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
