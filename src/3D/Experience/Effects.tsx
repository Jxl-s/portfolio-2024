import { EffectComposer, Bloom } from "@react-three/postprocessing";

export default function Effects() {
    return (
        <EffectComposer>
            <Bloom luminanceThreshold={0.1} luminanceSmoothing={0.1} height={100} />
        </EffectComposer>
    );
}
