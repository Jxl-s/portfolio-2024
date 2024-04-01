export default function scrollTo(id: string) {
    const yOffset = -document.getElementById("navbar-container")!.offsetHeight;
    const element = document.getElementById(id)!;
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
}
