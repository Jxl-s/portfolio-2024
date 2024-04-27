export enum AssetType {
    Gltf,
    Texture,
    Hdr,
    HtmlAudio,
}

export const ASSETS = [
    // Scene and ground
    {
        type: AssetType.Gltf,
        url: "models/scene.glb",
        name: "sceneModel",
        size: 390068,
        data: {},
    },
    {
        type: AssetType.Gltf,
        url: "models/sceneGround.glb",
        name: "sceneGround",
        size: 1016,
        data: {},
    },

    // Textures for the scene (both 4096 and 2048)
    {
        type: AssetType.Texture,
        url: "textures/bakedScene_4096x4096.jpg",
        name: "sceneTexture",
        size: 1829507,
        data: { textureSize: 4096 },
    },
    {
        type: AssetType.Texture,
        url: "textures/bakedSceneNight_4096x4096.jpg",
        name: "sceneTextureNight",
        size: 783169,
        data: { textureSize: 4096 },
    },

    {
        type: AssetType.Texture,
        url: "textures/bakedScene_2048x2048.jpg",
        name: "sceneTexture",
        size: 706746,
        data: { textureSize: 2048 },
    },
    {
        type: AssetType.Texture,
        url: "textures/bakedSceneNight_2048x2048.jpg",
        name: "sceneTextureNight",
        size: 258125,
        data: { textureSize: 2048 },
    },

    {
        type: AssetType.Texture,
        url: "textures/bakedGround_2048x2048.jpg",
        name: "groundTexture",
        size: 101930,
        data: {},
    },
    {
        type: AssetType.Texture,
        url: "textures/bakedGroundNight_2048x2048.jpg",
        name: "groundTextureNight",
        size: 94537,
        data: {},
    },

    // Other textures
    {
        type: AssetType.Texture,
        url: "textures/tvGithub_938x596.jpg",
        name: "tvGithub",
        size: 61014,
        data: {},
    },
    {
        type: AssetType.Texture,
        url: "textures/tvLinkedin_938x596.jpg",
        name: "tvLinkedin",
        size: 57589,
        data: {},
    },
    {
        type: AssetType.Texture,
        url: "textures/perlin.png",
        name: "perlin",
        size: 11280,
        data: {},
    },

    // Env audio
    {
        type: AssetType.HtmlAudio,
        url: "sounds/background.mp3",
        name: "backgroundAudio",
        size: 7187363,
        data: {},
    },
    {
        type: AssetType.HtmlAudio,
        url: "sounds/cans.mp3",
        name: "cansAudio",
        size: 7752,
        data: {},
    },
    {
        type: AssetType.HtmlAudio,
        url: "sounds/click.mp3",
        name: "clickAudio",
        size: 3024,
        data: {},
    },
    {
        type: AssetType.HtmlAudio,
        url: "sounds/fan_start.mp3",
        name: "fanStartAudio",
        size: 13374,
        data: {},
    },
    {
        type: AssetType.HtmlAudio,
        url: "sounds/fan_stop.mp3",
        name: "fanStopAudio",
        size: 9576,
        data: {},
    },
    {
        type: AssetType.HtmlAudio,
        url: "sounds/power_switch.mp3",
        name: "powerSwitchAudio",
        size: 9686,
        data: {},
    },
    {
        type: AssetType.HtmlAudio,
        url: "sounds/rain.mp3",
        name: "rainAudio",
        size: 629786,
        data: {},
    },
    {
        type: AssetType.HtmlAudio,
        url: "sounds/whoosh.mp3",
        name: "whooshAudio",
        size: 36218,
        data: {},
    },
] as const;

export type AssetName = (typeof ASSETS)[number]["name"];
