import Link from "next/link";

function RectangleComplexSvg() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="537" height="192" viewBox="0 0 537 192" fill="none">
            <path d="M536.683 54.9912V0H487.859C504.127 18.3228 520.415 36.6684 536.683 54.9912Z" fill="#2e2e4cba" fillOpacity="0.3" />
            <path d="M146.473 54.9912V0H97.6486C113.917 18.3228 130.205 36.6684 146.473 54.9912Z" fill="#2e2e4cba" fillOpacity="0.3" />
            <path d="M439.034 54.9912H487.859V0C471.591 18.3228 455.303 36.6684 439.034 54.9912Z" fill="#2e2e4cba" fillOpacity="0.3" />
            <path d="M439.217 54.9912V0H390.393C406.661 18.3228 422.949 36.6684 439.217 54.9912Z" fill="#2e2e4cba" fillOpacity="0.3" />
            <path d="M341.568 54.9912H390.392V0C374.124 18.3228 357.836 36.6684 341.568 54.9912Z" fill="#2e2e4cba" fillOpacity="0.3" />
            <path d="M341.568 54.9912V0H292.743C309.011 18.3228 325.3 36.6684 341.568 54.9912Z" fill="#2e2e4cba" fillOpacity="0.3" />
            <path d="M243.919 54.9912H292.744V0C276.476 18.3228 260.187 36.6684 243.919 54.9912Z" fill="#2e2e4cba" fillOpacity="0.3" />
            <path d="M244.122 54.9912V0H195.297C211.565 18.3228 227.854 36.6684 244.122 54.9912Z" fill="#2e2e4cba" fillOpacity="0.3" />
            <path d="M146.474 54.9912H195.298V0C179.03 18.3228 162.742 36.6684 146.474 54.9912Z" fill="#2e2e4cba" fillOpacity="0.3" />
            <path d="M48.8247 191.715V54.9688H0.000270656C16.2683 100.558 32.5566 146.125 48.8247 191.715Z" fill="#2e2e4cba" fillOpacity="0.3" />
            <path d="M48.8245 191.715H97.6489V54.9688C81.3809 100.558 65.0925 146.125 48.8245 191.715Z" fill="#2e2e4cba" fillOpacity="0.3" />
            <path d="M48.8247 54.9912V0H0.000270656C16.2683 18.3228 32.5566 36.6684 48.8247 54.9912Z" fill="#2e2e4cba" fillOpacity="0.3" />
            <path d="M48.8235 54.9912H97.6479V0C81.3799 18.3228 65.0916 36.6684 48.8235 54.9912Z" fill="#2e2e4cba" fillOpacity="0.3" />
            <path d="M536.683 191.715V54.9688H487.859C504.127 100.558 520.415 146.125 536.683 191.715Z" fill="#2e2e4cba" fillOpacity="0.3" />
            <path d="M146.473 191.715V54.9688H97.6486C113.917 100.558 130.205 146.125 146.473 191.715Z" fill="#2e2e4cba" fillOpacity="0.3" />
            <path d="M439.034 191.715H487.859V54.9688C471.591 100.558 455.303 146.125 439.034 191.715Z" fill="#2e2e4cba" fillOpacity="0.3" />
            <path d="M439.217 191.715V54.9688H390.393C406.661 100.558 422.949 146.125 439.217 191.715Z" fill="#2e2e4cba" fillOpacity="0.3" />
            <path d="M341.568 191.715H390.392V54.9688C374.124 100.558 357.836 146.125 341.568 191.715Z" fill="#2e2e4cba" fillOpacity="0.3" />
            <path d="M341.568 191.715V54.9688H292.743C309.011 100.558 325.3 146.125 341.568 191.715Z" fill="#2e2e4cba" fillOpacity="0.3" />
            <path d="M243.919 191.715H292.744V54.9688C276.476 100.558 260.187 146.125 243.919 191.715Z" fill="#2e2e4cba" fillOpacity="0.3" />
            <path d="M244.123 191.715V54.9688H195.298C211.566 100.558 227.855 146.125 244.123 191.715Z" fill="#2e2e4cba" fillOpacity="0.3" />
            <path d="M146.473 191.715H195.297V54.9688C179.029 100.558 162.741 146.125 146.473 191.715Z" fill="#2e2e4cba" fillOpacity="0.3" />
        </svg>
    );
}
function Company({ company }: { company: any }) {
    const getVisibilityLabel = (isVisible: any) => {
        return isVisible?.label || "غير محدد";
    };
    console.log(company);

    // Get visibility background color
    const getVisibilityBgColor = (isVisible: any) => {
        if (isVisible?.value === 1) {
            return "bg-[rgba(34,197,94,0.25)]"; // Green for visible
        }
        return "bg-[rgba(128,128,128,0.25)]"; // Gray for not visible
    };
    return (
        <Link
            href={`/companies/${company?.id}`}
            className="flex !h-[238px] flex-col justify-end items-end h-[296px] min-w-[300px] overflow-hidden max-w-[410px] min-h-[237.99px] max-h-[446.231px] p-4 gap-2 flex-[1_0_0] rounded-[16px]
         bg-[lightgray] bg-center bg-cover bg-no-repeat relative"
            style={{
                backgroundImage: `url(${company.background_img || "/images/city.png"})`,
            }}
        >
            {/* Blur circle like residential */}
            <div className="absolute right-[-45.31px] z-30 bottom-[-133.309px] w-[346.619px] h-[346.619px] rounded-full bg-[rgba(8,24,47,0.8)] blur-[54px]"></div>

            {/* Decorative SVG background like residential */}
            {/* <div className="absolute w-full h-[191.715px] right-0 bottom-[-5.239px] z-20">
                <RectangleComplexSvg />
            </div> */}

            {/* Info */}
            <div className="info flex flex-col gap-2 z-30 w-full">
                <div className="flex gap-4 w-full">
                    {/* Company logo */}
                    <div className="size-[56px] rounded-full bg-bg-secondry overflow-hidden">
                        <img
                            src={company.logo || "/images/company.png"}
                            alt={company.name?.ar || company.name?.en}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <p className="text-text-main typography-subtitle-18-Light">
                            {company.name?.ar || company.name?.en}
                        </p>
                        <div className="flex gap-2">
                            <p className="text-[#AAB7CB] text-[12px]">
                                {company.type?.name?.ar || company.type?.name?.en}
                            </p>

                        </div>
                    </div>
                </div>

                {/* <div className="border-t border-opacity-white-10 flex pt-3 gap-2 flex-col">


                    {company.branches && company.branches.length > 0 && (
                        <div className="flex gap-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M14.5 10.9878C14.5 9.60654 13.3808 8.4873 12.0005 8.4873C10.6192 8.4873 9.5 9.60654 9.5 10.9878C9.5 12.3681 10.6192 13.4873 12.0005 13.4873C13.3808 13.4873 14.5 12.3681 14.5 10.9878Z" stroke="#EEF5FF" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M11.9995 21.4873C10.801 21.4873 4.5 16.3857 4.5 11.0506C4.5 6.87394 7.8571 3.4873 11.9995 3.4873C13.3808 13.4873 19.5 6.87394 19.5 11.0506C19.5 16.3857 13.198 21.4873 11.9995 21.4873Z" stroke="#EEF5FF" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p className="text-text-gray1 typography-body-14-light flex items-center">
                                {company.branches[0]?.governorate?.name?.ar || company.branches[0]?.governorate?.name?.en}
                            </p>
                        </div>
                    )}
                </div> */}
            </div>
            <div className={`flex bg-[rgba(84,50,29,0.2)] backdrop-blur-[2px] items-center justify-center  px-3 gap-1 h-[36px]  py-2 absolute left-4 top-4 rounded-[16px] border border-white/10 `}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5458 4.27316L13.8505 3.63491C14.4538 3.34108 15.1806 3.5775 15.4948 4.16906L16.1759 5.45237C16.3559 5.79096 16.6818 6.02836 17.0593 6.09452L18.4896 6.34554C19.1502 6.46132 19.5997 7.08011 19.5063 7.74366L19.3029 9.18265C19.2485 9.5621 19.373 9.94544 19.6396 10.2208L20.6505 11.2648C21.1165 11.7464 21.1165 12.5111 20.6505 12.9937L19.6396 14.0377C19.373 14.313 19.2485 14.6964 19.3029 15.0758L19.5063 16.5138C19.5997 17.1783 19.1502 17.7971 18.4896 17.9129L17.0593 18.1639C16.6818 18.2301 16.3559 18.4665 16.1759 18.8051L15.4948 20.0884C15.1806 20.681 14.4538 20.9174 13.8505 20.6226L12.5458 19.9853C12.2014 19.817 11.7986 19.817 11.4542 19.9853L10.1485 20.6226C9.54623 20.9174 8.81944 20.681 8.50518 20.0884L7.82411 18.8051C7.64412 18.4665 7.31818 18.2301 6.94068 18.1639L5.50947 17.9129C4.84982 17.7971 4.40031 17.1783 4.49372 16.5138L4.69706 15.0758C4.75057 14.6964 4.62604 14.313 4.35945 14.0377L3.34953 12.9937C2.88349 12.5111 2.88349 11.7464 3.34953 11.2648L4.35945 10.2208C4.62604 9.94544 4.75057 9.5621 4.69706 9.18265L4.49372 7.74366C4.40031 7.08011 4.84982 6.46132 5.50947 6.34554L6.94068 6.09452C7.31818 6.02836 7.64412 5.79096 7.82411 5.45237L8.50518 4.16906C8.81944 3.5775 9.54623 3.34108 10.1485 3.63491L11.4542 4.27316C11.7986 4.44148 12.2014 4.44148 12.5458 4.27316Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M9.60547 14.5817L14.5026 9.68457" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M14.3827 14.5031V14.5512M14.5777 14.5134C14.5777 14.6217 14.4898 14.7095 14.3815 14.7095C14.2733 14.7095 14.1855 14.6217 14.1855 14.5134C14.1855 14.4052 14.2733 14.3174 14.3815 14.3174C14.4898 14.3174 14.5777 14.4052 14.5777 14.5134Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M9.61907 9.73746V9.78557M9.81398 9.7478C9.81398 9.85607 9.72615 9.94385 9.61787 9.94385C9.5096 9.94385 9.42188 9.85607 9.42188 9.7478C9.42188 9.63953 9.5096 9.55176 9.61787 9.55176C9.72615 9.55176 9.81398 9.63953 9.81398 9.7478Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <p className="text-[#EEF5FF] text-[14px] font-[400] leading-[140%] whitespace-nowrap ">
                    {company.discount}
                    <span className="text-[rgba(255,255,255,0.30)] text-[12px] ">
                        %
                    </span>
                </p>

            </div>
        </Link>
    );
}

export default Company