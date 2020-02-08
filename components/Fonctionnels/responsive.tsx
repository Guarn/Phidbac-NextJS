import { useMediaQuery } from "react-responsive";

export const Desktop = ({ children }: any) => {
    const isDesktop = useMediaQuery({ minWidth: 1024, minHeight: 720 });
    return isDesktop ? children : null;
};
export const DesktopTablet = ({ children }: any) => {
    const isDesktopTablet = useMediaQuery({ minWidth: 768 });
    return isDesktopTablet ? children : null;
};
export const TabletMobile = ({ children }: any) => {
    const isTabletMobile = useMediaQuery({ maxWidth: 1023 });
    return isTabletMobile ? children : null;
};
export const Tablet = ({ children }: any) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
    return isTablet ? children : null;
};
export const Mobile = ({ children }: any) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? children : null;
};
export const Default = ({ children }: any) => {
    const isNotMobile = useMediaQuery({ minWidth: 768 });
    return isNotMobile ? children : null;
};
