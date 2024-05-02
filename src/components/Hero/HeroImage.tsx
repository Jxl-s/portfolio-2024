import { Suspense } from "react";
import useDimensionStore from "../../stores/useDimensionStore";
import { Box, View } from "@react-three/drei";
import PreviewScene from "../../3D/Preview/PreviewScene";
import { useTranslation } from "react-i18next";

interface Props {
    className?: string;
}

export default function HeroImage({ className }: Props) {
    const { t } = useTranslation();
    const setDimension = useDimensionStore((state) => state.setDimension);

    return (
        <section className={`text-center ${className ?? ""}`}>
            <div
                className="w-full h-[200px] md:h-[400px] lg:h-[calc(100vh-72px)] duration-300 cursor-pointer"
                onClick={() => setDimension("3D")}
            >
                <View className="view inline-block w-full h-full rounded-lg">
                    <Suspense fallback={<Box />}>
                        <PreviewScene />
                    </Suspense>
                </View>
            </div>
            <p className="text-center mt-2 text-sm">{t("view_3d")}</p>
        </section>
    );
}
