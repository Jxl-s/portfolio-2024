import { Bloom, EffectComposer } from "@react-three/postprocessing";

export default function Effects() {
    return (
        <EffectComposer>
            <Bloom luminanceThreshold={0.5} luminanceSmoothing={0} mipmapBlur />
        </EffectComposer>
    );
}
