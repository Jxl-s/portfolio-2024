import { Bloom, EffectComposer } from "@react-three/postprocessing";

export default function Effects() {
    return (
        <EffectComposer>
            <Bloom luminanceThreshold={1.5} luminanceSmoothing={1} mipmapBlur/>
        </EffectComposer>
    );
}
