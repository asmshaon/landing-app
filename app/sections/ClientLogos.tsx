import { Cloud, ShoppingBag, Droplets } from "lucide-react";

export function ClientLogos() {
  return (
    <section className="bg-dark-900 border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 lg:gap-16">
          <div className="text-gray-500 text-sm text-center sm:text-left">
            <div className="font-medium text-gray-400">Trusted by clients</div>
            <div className="text-xs">worldwide</div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-14 opacity-60">
            {/* Upwork */}
            <div className="flex items-center gap-1.5 text-white font-bold text-xl">
              <span className="text-green-500 font-bold">up</span>work
            </div>
            {/* Shopify */}
            <div className="flex items-center gap-1.5 text-white font-bold text-xl">
              <ShoppingBag className="w-5 h-5 text-green-500" />
              shopify
            </div>
            {/* AWS */}
            <div className="flex items-center gap-1.5 text-white font-bold text-xl">
              <Cloud className="w-5 h-5 text-orange-400" />
              aws
            </div>
            {/* DigitalOcean */}
            <div className="flex items-center gap-1.5 text-white font-bold text-lg">
              <Droplets className="w-5 h-5 text-blue-400" />
              DigitalOcean
            </div>
            {/* Tailwind */}
            <div className="flex items-center gap-1.5 text-white font-bold text-xl">
              <svg className="w-6 h-6 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
              </svg>
              tailwindcss
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
