const soundCache = new Map<string, HTMLAudioElement>();

// add some
soundCache.set("click.mp3", new Audio("/sounds/click.mp3"));
soundCache.set("cans.mp3", new Audio("/sounds/cans.mp3"));
soundCache.set("move.wav", new Audio("/sounds/move.wav"));

// update some volumes
soundCache.get("move.wav")!.volume = 0.5;
soundCache.get("move.wav")!.playbackRate = 0.5;

export function playSound(sound: string) {
    if (!soundCache.has(sound)) {
        const audio = new Audio(`/sounds/${sound}`);
        soundCache.set(sound, audio);
    }

    soundCache.get(sound)!.currentTime = 0;
    soundCache.get(sound)!.play();
}
