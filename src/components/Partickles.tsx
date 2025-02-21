'use client'
import Particles, { initParticlesEngine} from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim"; 
import { ParticleOptions } from "@/constants/particles-types";






const ParticlesComponent = () => {

  const [init, setInit] = useState<boolean>(false);
    console.log(init);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);

    }).then(() => {
      setInit(true);
    });
  }, []);

    
// @ts-expect-error: Ошибка 
    
  const particlesLoaded = (container):void => {
    console.log(container);
  };




    const options:ParticleOptions = useMemo(
    () => ({
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse",
          },
          onHover: {
            enable: true,
            mode: 'grab',
          },
        },
        modes: {
          push: {
            distance: 200,
            duration: 15,
          },
          grab: {
            distance: 150,
          },
        },
      },
      particles: {
        color: {
          value: "#e64e4e",
        },
        links: {
          color: "#e64e4e",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
                enable: true,
                area: 800
          },
          value: 150,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

// @ts-expect-error: Ошибка ожидается, так как тип `move.direction` должен быть из множества допустимых значений, но используется строка "none"

  return <Particles  init={particlesLoaded} options={options} className="absolute right-0 top-0 h-full w-[80%] z-[20]"/>; 
};

export default ParticlesComponent;