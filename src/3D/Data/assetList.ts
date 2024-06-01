export enum AssetType {
    Gltf,
    Texture,
    Hdr,
    HtmlAudio,
    HtmlImage,
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

    // Some html images
    {
        type: AssetType.HtmlImage,
        url: "images/drinks/cocacola.webp",
        name: "cocacolaImage",
        size: 40732,
    },
    {
        type: AssetType.HtmlImage,
        url: "images/drinks/fanta.webp",
        name: "fantaImage",
        size: 10882,
    },
    {
        type: AssetType.HtmlImage,
        url: "images/drinks/mountain-dew.webp",
        name: "mountainDewImage",
        size: 31648,
    },
    {
        type: AssetType.HtmlImage,
        url: "images/drinks/red-bull.webp",
        name: "redBullImage",
        size: 10868,
    },
    {
        type: AssetType.HtmlImage,
        url: "images/drinks/sprite.webp",
        name: "spriteImage",
        size: 7754,
    },

    // Project images
    {
        type: AssetType.HtmlImage,
        url: "/images/projects/2022/luajoin.webp",
        name: "/images/projects/2022/luajoin.webp",
        size: 44360,
    },
    {
        type: AssetType.HtmlImage,
        url: "/images/projects/2022/vanier-schedule-builder.webp",
        name: "/images/projects/2022/vanier-schedule-builder.webp",
        size: 79584,
    },

    {
        type: AssetType.HtmlImage,
        url: "/images/projects/2023/color-switcher.webp",
        name: "/images/projects/2023/color-switcher.webp",
        size: 27426,
    },
    {
        type: AssetType.HtmlImage,
        url: "/images/projects/2023/crimes-api.webp",
        name: "/images/projects/2023/crimes-api.webp",
        size: 40104,
    },
    {
        type: AssetType.HtmlImage,
        url: "/images/projects/2023/ghostly-echoes.webp",
        name: "/images/projects/2023/ghostly-echoes.webp",
        size: 11700,
    },
    {
        type: AssetType.HtmlImage,
        url: "/images/projects/2023/intellihouse.webp",
        name: "/images/projects/2023/intellihouse.webp",
        size: 44486,
    },
    {
        type: AssetType.HtmlImage,
        url: "/images/projects/2023/pinpoint.webp",
        name: "/images/projects/2023/pinpoint.webp",
        size: 15922,
    },
    {
        type: AssetType.HtmlImage,
        url: "/images/projects/2023/renozed.webp",
        name: "/images/projects/2023/renozed.webp",
        size: 74488,
    },
    {
        type: AssetType.HtmlImage,
        url: "/images/projects/2024/algo-visualizations.webp",
        name: "/images/projects/2024/algo-visualizations.webp",
        size: 60336,
    },
    {
        type: AssetType.HtmlImage,
        url: "/images/projects/2024/multiwindow-canvas.webp",
        name: "/images/projects/2024/multiwindow-canvas.webp",
        size: 29688,
    },
    {
        type: AssetType.HtmlImage,
        url: "/images/projects/2024/robotics-2024.webp",
        name: "/images/projects/2024/robotics-2024.webp",
        size: 67518,
    },
    {
        type: AssetType.HtmlImage,
        url: "/images/projects/2024/virtu-market.webp",
        name: "/images/projects/2024/virtu-market.webp",
        size: 97178,
    },
    {
        type: AssetType.HtmlImage,
        url: "/images/projects/2024/resume-builder.webp",
        name: "/images/projects/2024/resume-builder.webp",
        size: 155146,
    },
] as const;
