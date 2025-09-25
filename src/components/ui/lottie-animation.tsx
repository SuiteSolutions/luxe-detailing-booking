import React from 'react';
import Lottie from 'lottie-react';

interface LottieAnimationProps {
  animationData?: any;
  animationPath?: string;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
  style?: React.CSSProperties;
}

export const LottieAnimation: React.FC<LottieAnimationProps> = ({
  animationData,
  animationPath,
  className,
  loop = true,
  autoplay = true,
  style,
}) => {
  const [animation, setAnimation] = React.useState(animationData);

  React.useEffect(() => {
    if (animationPath && !animationData) {
      fetch(animationPath)
        .then(response => response.json())
        .then(data => setAnimation(data))
        .catch(console.error);
    }
  }, [animationPath, animationData]);

  if (!animation) {
    return <div className={className} style={style} />;
  }

  return (
    <Lottie
      animationData={animation}
      loop={loop}
      autoPlay={autoplay}
      className={className}
      style={style}
    />
  );
};