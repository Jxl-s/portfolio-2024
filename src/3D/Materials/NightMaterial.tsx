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

    uniform float uTime;
    uniform bool uMakeBright;

    void main() {
        vec4 day = texture2D(uTextureDay, vUv);
        vec4 night = texture2D(uTextureNight, vUv);
        vec4 nightMix = mix(day, night, uNightMix);    

        if (uMakeBright) {
            float brightness = 1.0 + 5.0 * abs(sin(uTime * 2.0));
            nightMix.rgb *= brightness;
        }

        gl_FragColor = nightMix;
    }
`;

const NightMaterial = shaderMaterial(
    {
        uTextureDay: null,
        uTextureNight: null,
        uNightMix: 0,

        // for brightness
        uTime: 0,
        uMakeBright: false,
    },
    vertexShader,
    fragmentShader
);

export default NightMaterial;
