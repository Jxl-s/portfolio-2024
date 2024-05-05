import { Bloom, EffectComposer } from "@react-three/postprocessing";
import useExperienceStore from "../Stores/useExperienceStore";

export default function Effects() {
    const detailLevel = useExperienceStore((state) => state.detailLevel);

    return (
        <EffectComposer multisampling={8}>
            <Bloom
                luminanceThreshold={detailLevel > 2 ? 1 : 1.5}
                luminanceSmoothing={2}
                intensity={2}
                mipmapBlur={detailLevel > 2}
            />
        </EffectComposer>
    );
}
