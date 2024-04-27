import { Bloom, EffectComposer, N8AO } from "@react-three/postprocessing";

export default function Effects() {
    return (
        <EffectComposer>
            <Bloom
                luminanceThreshold={0.5}
                luminanceSmoothing={0}
                height={300}
                mipmapBlur
            />
            <N8AO aoRadius={1} intensity={1} color={"blue"} />
        </EffectComposer>
    );
}
