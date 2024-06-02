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

    uniform sampler2D uTexture;
    uniform float uTime;
    uniform bool uPause;

    void main() {
        vec4 color = texture2D(uTexture, vUv);
        float brightness = uPause ? 1.5 : 1.0 + abs(sin(uTime)) * 0.4;
        color.rgb *= brightness;
        gl_FragColor = color;
    }
`;

const PulseMaterial = shaderMaterial(
    {
        uTexture: null,
        uTime: 0,
        uPause: false,
    },
    vertexShader,
    fragmentShader
);

export default PulseMaterial;
