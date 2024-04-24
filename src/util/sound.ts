const soundCache = new Map<string, HTMLAudioElement>();

// add some
soundCache.set("click.mp3", new Audio("/sounds/click.mp3"));
soundCache.set("cans.mp3", new Audio("/sounds/cans.mp3"));

const whooshAudio = new Audio("/sounds/whoosh.mp3");
whooshAudio.playbackRate = 2;
whooshAudio.volume = 0.2;

soundCache.set("whoosh.mp3", whooshAudio);

export function playSound(sound: string) {
    if (!soundCache.has(sound)) {
        const audio = new Audio(`/sounds/${sound}`);
        soundCache.set(sound, audio);
    }

    soundCache.get(sound)!.currentTime = 0;
    if (sound === "whoosh.mp3") soundCache.get(sound)!.currentTime = 0.5;
    soundCache.get(sound)!.play();
}
