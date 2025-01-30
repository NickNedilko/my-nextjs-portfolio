type Direction = 'none' | 'top' | 'top-right' | 'right'
  | 'bottom-right' | 'bottom' | 'bottom-left' | 'left' | 'top-left';

export interface ParticleOptions {
  fpsLimit: number;
  interactivity: {
    events: {
      onClick: {
        enable: boolean;
        mode: "repulse";
      };
      onHover: {
        enable: boolean;
        mode: "grab";
      };
    };
    modes: {
      push: {
        distance: number;
        duration: number;
      };
      grab: {
        distance: number;
      };
    };
  };
  particles: {
    color: {
      value: string;
    };
    links: {
      color: string;
      distance: number;
      enable: boolean;
      opacity: number;
      width: number;
    };
    move: {
      direction: Direction;
      enable: boolean;
      outModes: {
        default: "bounce";
      };
      random: boolean;
      speed: number;
      straight: boolean;
    };
    number: {
      density: {
        enable: boolean;
        area: number;
      };
      value: number;
    };
    opacity: {
      value: number;
    };
    shape: {
      type: "circle";
    };
    size: {
      value: {
        min: number;
        max: number;
      };
    };
  };
  detectRetina: boolean;
}