import { Bloom, EffectComposer } from "@react-three/postprocessing";

export default function Effects() {
    return (
        <EffectComposer>
            <Bloom luminanceThreshold={0} luminanceSmoothing={1} height={300} />
        </EffectComposer>
    );
}
