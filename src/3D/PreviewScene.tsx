import MacbookModel from "./models/Macbook";
import StageLayout from "./StageLayout";

export default function PreviewScene() {
    return (
        <>
            <StageLayout box={[4, 2, 4]} offset={[0, 1.5, 0]}>
                <MacbookModel />
            </StageLayout>
        </>
    );
}
