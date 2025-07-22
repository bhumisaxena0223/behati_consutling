import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Award } from "lucide-react";
import Image from "next/image";
import { clients } from "@/lib/data/clients";

const successStats = [
  { icon: TrendingUp, value: "98%", label: "Client Satisfaction", color: "text-green-600" },
  { icon: Users, value: "50+", label: "Enterprise Clients", color: "text-primary" },
  { icon: Award, value: "11+", label: "Years Experience", color: "text-secondary" },
];

export function ClientSuccessPreview() {
  // we duplicate the array so the scroll is seamless
  const marqueeItems = [...clients, ...clients];

  return (
    <div className="space-y-8">
      {/* Success Stats */}
      <div className="grid gap-6 md:grid-cols-3 mx-8 md:mx-16">
        {successStats.map((stat, index) => (
          <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <stat.icon className={`h-12 w-12 mx-auto mb-4 ${stat.color}`} />
              <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
              <div className="text-sm text-slate-600">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Client Logos Marquee */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-center mb-8">Our Trusted Clients</h2>
        <div className="relative overflow-hidden bg-white py-8">
          <div className="flex animate-marquee space-x-8">
            {marqueeItems.map((client, index) => (
              <div
                key={`${client.id}-${index}`}
                className="flex-shrink-0 flex items-center justify-center w-32 h-16 transition-all duration-300"
              >
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={`${client.name} logo`}
                  width={120}
                  height={60}
                  className="object-contain max-w-full max-h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: inline-flex;
          /* duration: adjust as you like */
          animation: marquee 25s linear infinite;
        }
        @media (max-width: 768px) {
          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
        }
      `}</style>
    </div>
  );
}
