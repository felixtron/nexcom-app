import { LucideIcon } from 'lucide-react';

interface ServiceFeature {
  icon: LucideIcon;
  text: string;
}

interface ServiceAreaProps {
  title: string;
  description: string;
  features: ServiceFeature[];
}

export default function ServiceArea({ title, description, features }: ServiceAreaProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <h3 className="text-2xl font-semibold mb-4 text-secondary">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="space-y-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <feature.icon className="h-5 w-5 text-primary" />
            </div>
            <span className="text-gray-700">{feature.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}