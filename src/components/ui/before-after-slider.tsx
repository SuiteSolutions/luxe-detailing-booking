import React, { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  className?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeAlt = "Antes",
  afterAlt = "Después",
  className
}) => {
  const [sliderValue, setSliderValue] = useState([50]);

  return (
    <div className={cn("relative w-full aspect-video overflow-hidden rounded-xl", className)}>
      {/* Before Image (Background) */}
      <div className="absolute inset-0">
        <img
          src={beforeImage}
          alt={beforeAlt}
          className="w-full h-full object-cover"
        />
        {/* Before Label */}
        <div className="absolute top-4 left-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm">
          Antes
        </div>
      </div>

      {/* After Image (Clipped) */}
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{
          clipPath: `inset(0 ${100 - sliderValue[0]}% 0 0)`
        }}
      >
        <img
          src={afterImage}
          alt={afterAlt}
          className="w-full h-full object-cover"
        />
        {/* After Label */}
        <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm">
          Después
        </div>
      </div>

      {/* Slider Control */}
      <div className="absolute inset-x-4 bottom-6">
        <div className="relative">
          <Slider
            value={sliderValue}
            onValueChange={setSliderValue}
            max={100}
            step={1}
            className="w-full"
          />
          {/* Visual Divider Line */}
          <div 
            className="absolute top-0 w-0.5 h-6 bg-white shadow-lg pointer-events-none transform -translate-x-1/2 -translate-y-8"
            style={{
              left: `${sliderValue[0]}%`
            }}
          />
          {/* Slider Handle Enhancement */}
          <div 
            className="absolute top-0 w-4 h-4 bg-white rounded-full shadow-lg pointer-events-none transform -translate-x-1/2 -translate-y-2 border-2 border-primary"
            style={{
              left: `${sliderValue[0]}%`
            }}
          />
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="absolute bottom-4 left-4 right-4 flex justify-between text-sm text-white/80">
        <span className={cn("transition-opacity", sliderValue[0] > 20 ? "opacity-100" : "opacity-50")}>
          Antes
        </span>
        <span className={cn("transition-opacity", sliderValue[0] < 80 ? "opacity-100" : "opacity-50")}>
          Después
        </span>
      </div>
    </div>
  );
};