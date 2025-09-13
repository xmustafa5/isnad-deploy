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


            <FeatureItem title="مميزات والخدمات" svg={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.97076 2.94141C6.29597 2.94141 6.58413 3.15099 6.6843 3.46039C6.972 4.34899 7.66804 5.04471 8.55787 5.33357C8.86708 5.43395 9.07642 5.72212 9.07629 6.04722C9.07617 6.37232 8.8666 6.66032 8.55731 6.76046C7.66831 7.04828 6.97212 7.74447 6.6843 8.63347C6.58413 8.94287 6.29597 9.15246 5.97076 9.15246C5.64555 9.15246 5.3574 8.94287 5.25723 8.63347C4.96948 7.74471 4.27244 7.04828 3.38404 6.7604C3.07484 6.66021 2.86536 6.37225 2.86523 6.04722C2.86511 5.72219 3.07435 5.43407 3.38348 5.33363C4.27271 5.04471 4.96961 4.34876 5.25723 3.46039C5.3574 3.15099 5.64556 2.94141 5.97076 2.94141ZM5.19369 6.04671C5.48394 6.27222 5.74501 6.5332 5.97064 6.82345C6.19617 6.53321 6.45716 6.27223 6.74741 6.04671C6.45719 5.82123 6.19619 5.56034 5.97064 5.27016C5.74499 5.56035 5.48391 5.82124 5.19369 6.04671Z" fill="white" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.0667 15.5547C19.4809 15.5547 19.8167 15.8905 19.8167 16.3047V17.0198H20.534C20.9482 17.0198 21.284 17.3556 21.284 17.7698C21.284 18.184 20.9482 18.5198 20.534 18.5198H19.8167V19.2352C19.8167 19.6494 19.4809 19.9852 19.0667 19.9852C18.6525 19.9852 18.3167 19.6494 18.3167 19.2352V18.5198H17.6035C17.1893 18.5198 16.8535 18.184 16.8535 17.7698C16.8535 17.3556 17.1893 17.0198 17.6035 17.0198H18.3167V16.3047C18.3167 15.8905 18.6525 15.5547 19.0667 15.5547Z" fill="white" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.06326 9.95313C9.38835 9.95312 9.67643 10.1626 9.7767 10.4718C10.441 12.5208 12.0471 14.1269 14.0962 14.7913C14.4054 14.8916 14.6148 15.1796 14.6148 15.5047C14.6148 15.8298 14.4054 16.1179 14.0961 16.2182C12.0472 16.8824 10.4411 18.4885 9.77673 20.5384C9.67649 20.8477 9.38839 21.0572 9.06326 21.0572C8.73813 21.0572 8.45002 20.8477 8.34979 20.5384C7.68544 18.4885 6.07937 16.8824 4.03043 16.2182C3.72118 16.1179 3.51173 15.8298 3.51172 15.5047C3.51171 15.1796 3.72115 14.8916 4.0304 14.7913C6.07941 14.1269 7.68549 12.5208 8.34982 10.4718C8.45008 10.1626 8.73816 9.95313 9.06326 9.95313ZM9.06326 12.5317C8.34701 13.7633 7.32189 14.7884 6.09031 15.5047C7.32189 16.221 8.34702 17.2462 9.06326 18.4781C9.77952 17.2462 10.8047 16.221 12.0362 15.5047C10.8047 14.7884 9.77952 13.7633 9.06326 12.5317Z" fill="white" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.1218 3.42578C18.4469 3.42579 18.735 3.63527 18.8353 3.94455C19.2981 5.37273 20.4177 6.4923 21.846 6.95524C22.1552 7.05549 22.3647 7.34359 22.3647 7.6687C22.3647 7.99382 22.1552 8.28192 21.846 8.38216C20.4177 8.84509 19.2981 9.96466 18.8353 11.3928C18.735 11.7021 18.4469 11.9116 18.1218 11.9116C17.7967 11.9116 17.5086 11.7021 17.4084 11.3929C16.9454 9.96466 15.8258 8.84508 14.3976 8.38216C14.0884 8.28191 13.8789 7.99382 13.8789 7.6687C13.8789 7.34359 14.0884 7.0555 14.3976 6.95525C15.8258 6.49231 16.9454 5.37274 17.4084 3.94452C17.5086 3.63524 17.7967 3.42577 18.1218 3.42578ZM16.3477 7.6687C17.0539 8.13253 17.6579 8.7366 18.1218 9.44281C18.5856 8.7366 19.1897 8.13253 19.8959 7.6687C19.1897 7.20487 18.5856 6.60079 18.1218 5.89458C17.6579 6.60079 17.0539 7.20487 16.3477 7.6687Z" fill="white" />
            </svg>} />

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

function FeatureItem({ title, svg }: { title: string; svg?: any }) {
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
