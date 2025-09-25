import React from 'react';
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
  ReactCompareSliderHandle
} from 'react-compare-slider';
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
  return (
    <div className={cn("relative w-full aspect-video overflow-hidden rounded-xl", className)}>
      <ReactCompareSlider
        itemOne={
          <div className="relative w-full h-full">
            <ReactCompareSliderImage 
              src={beforeImage} 
              alt={beforeAlt}
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover' 
              }}
            />
            {/* Before Label */}
            <div className="absolute top-4 left-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm">
              Antes
            </div>
          </div>
        }
        itemTwo={
          <div className="relative w-full h-full">
            <ReactCompareSliderImage 
              src={afterImage} 
              alt={afterAlt}
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover' 
              }}
            />
            {/* After Label */}
            <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm">
              Después
            </div>
          </div>
        }
        handle={
          <ReactCompareSliderHandle
            buttonStyle={{
              backdropFilter: undefined,
              background: 'white',
              border: '3px solid hsl(var(--primary))',
              borderRadius: '50%',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
              color: 'hsl(var(--primary))',
              cursor: 'ew-resize',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              outline: 'none',
              padding: 0,
              height: '48px',
              width: '48px'
            }}
            linesStyle={{
              background: 'white',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
              width: '2px'
            }}
          />
        }
        position={50}
        style={{
          width: '100%',
          height: '100%'
        }}
      />
      
      {/* Instruction hint */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm">
        Arrastra para comparar
      </div>
    </div>
  );
};