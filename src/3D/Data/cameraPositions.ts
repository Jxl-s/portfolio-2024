export enum CameraFocus {
    None,
    Home,
    Navigation,
    AboutMe,
    Projects,
    Journey,
    Contact,
}

export const positions = {
    [CameraFocus.Home]: {
        position: [2.5, 0.5, 5],
        target: [0, 0, 0],
    },
    [CameraFocus.Navigation]: {
        position: [-1.3, -1.2, 3.1],
        target: [-2.5, -1, 1.6],
    },
    [CameraFocus.AboutMe]: {
        position: [0.1, 2.05, -0.8],
        target: [0.05, 2.05, -2],
    },
    [CameraFocus.Projects]: {
        position: [-1.2, -0.9, -3],
        target: [-1.2, -0.9, 1],
    },
    [CameraFocus.Journey]: {
        position: [2.3, -0.25, 0.8],
        target: [2.3, -0.25, -2],
    },
    [CameraFocus.Contact]: {
        position: [0.1, 2.05, 0],
        target: [0.05, 2.05, -2],
    },
};
