import { shaderMaterial } from "@react-three/drei";

const vertexShader = `
    varying vec2 vUv;
    void main() {
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        vUv = uv;
    }
`;

const fragmentShader = `
    varying vec2 vUv;

    uniform sampler2D uTextureDay;
    uniform sampler2D uTextureNight;
    uniform float uNightMix;

    void main() {
        vec4 day = texture2D(uTextureDay, vUv);
        vec4 night = texture2D(uTextureNight, vUv);
        gl_FragColor = mix(day, night, uNightMix);    
    }
`;

const NightMaterial = shaderMaterial(
    {
        uTextureDay: null,
        uTextureNight: null,
        uNightMix: 0,
    },
    vertexShader,
    fragmentShader
);

export default NightMaterial;
