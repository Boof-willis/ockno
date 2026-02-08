import { Effects } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Particles } from "./particles";
import { VignetteShader } from "./shaders/vignetteShader";

export const GL = ({ hovering }: { hovering: boolean }) => {
  // Original values from the inspiration site - exact 1:1 replication
  const config = {
    speed: 1.0,
    focus: 3.8,
    aperture: 1.79,
    size: 512, // 512x512 = 262,144 particles
    noiseScale: 0.6,
    noiseIntensity: 0.52,
    timeScale: 1,
    pointSize: 10.0, // Original value
    opacity: 0.8, // Original value
    planeScale: 10.0, // Original value - concentrates particles
    vignetteDarkness: 1.5, // Original value
    vignetteOffset: 0.4, // Original value
    useManualTime: false,
    manualTime: 0,
  };

  return (
    <Canvas
      camera={{
        position: [
          1.2629783123314589, 2.664606471394044, -1.8178993743288914,
        ],
        fov: 50,
        near: 0.01,
        far: 300,
      }}
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
      }}
    >
      <color attach="background" args={["#020203"]} />
      <Particles
        speed={config.speed}
        aperture={config.aperture}
        focus={config.focus}
        size={config.size}
        noiseScale={config.noiseScale}
        noiseIntensity={config.noiseIntensity}
        timeScale={config.timeScale}
        pointSize={config.pointSize}
        opacity={config.opacity}
        planeScale={config.planeScale}
        useManualTime={config.useManualTime}
        manualTime={config.manualTime}
        introspect={hovering}
      />
      <Effects multisamping={0} disableGamma>
        <shaderPass
          args={[VignetteShader]}
          uniforms-darkness-value={config.vignetteDarkness}
          uniforms-offset-value={config.vignetteOffset}
        />
      </Effects>
    </Canvas>
  );
};
