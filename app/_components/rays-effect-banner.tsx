import LightRays from "@/components/LightRays";

const RAYS_COLOR = "#fafafa";

export default function RaysEffectBanner() {
  return (
    <div className="absolute inset-0 z-[-1] not-dark:hidden">
      <LightRays
        followMouse
        raysColor={RAYS_COLOR}
        raysSpeed={1}
        lightSpread={1}
        rayLength={1}
        mouseInfluence={0.05}
        noiseAmount={0}
        distortion={0}
        fadeDistance={1}
        saturation={1}
      />
    </div>
  );
}
