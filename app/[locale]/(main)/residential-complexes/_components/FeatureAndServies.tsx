import { useState } from "react";
import { Button } from "@/app/_components/Button";

const FeatureAndServies = ({ item }: any) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div
            className="flex flex-col justify-center items-end gap-4 self-stretch px-6 py-4 rounded-[16px] border transition-all duration-300"
            style={{
                borderColor: "var(--stroke-border, #212F43)",
                backgroundColor: "var(--opacomplex-white-5, rgba(255, 255, 255, 0.05))",
                backdropFilter: "blur(9px)",
            }}
        >
            <FeatureItem title="مميزات والخدمات" />

            {/* Scrollable area */}
            <div
                className={`flex items-start gap-4 self-stretch transition-all duration-300 ${expanded ? "max-h-[1000px]" : "max-h-40"
                    } overflow-hidden`}
            >
                <div className="flex w-full flex-col justify-center self-stretch">
                    <div className="flex flex-col  self-stretch flex-wrap gap-2">
                        {item.advantages.map((advantage: any) => (
                            <ServiceItem
                                key={advantage.id}
                                text={advantage.title.ar || advantage.title.en}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Toggle button */}
            <Button
                mode="text"
                className="w-full bg-transparent"
                onClick={() => setExpanded(!expanded)}
            >
                {expanded ? "إظهار أقل" : "قراءة المزيد"}
            </Button>
        </div>
    );
};

function FeatureItem({ title, svg }: { title: string; svg?: string }) {
    return (
        <div
            className="flex items-center gap-2 py-2 self-stretch border-b"
            style={{ borderColor: "rgba(255, 255, 255, 0.07)" }}
        >
            {svg ? (
                svg
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.97076 2.94141C6.29597..."
                        fill="white"
                    />
                </svg>
            )}
            <p className="text-text-gray1 typography-body-16-medium">{title}</p>
        </div>
    );
}

function ServiceItem({ text, svg }: { text: string; svg?: string }) {
    return (
        <div className="flex items-center gap-2 py-1 self-stretch">
            {svg ? (
                svg
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                    <path
                        d="M19 7.1875L9.375 16.8125L5 12.4375"
                        stroke="#B8C6E3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            <p className="text-text-gray2 typography-body-14-light">{text}</p>
        </div>
    );
}

export default FeatureAndServies;
