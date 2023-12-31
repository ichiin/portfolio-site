import { colors } from "@/styles";

const theme = {
    background: {
        gradient: `linear-gradient(180deg, ${colors.black} 0%, ${colors.black_lighter} 100%)`,
    },
    device: {
        mobile_small: '@media (max-width: 450px)',
        mobile: '@media (max-width: 650px)',
        tablet: '@media (min-width: 651px) and (max-width: 850px)',
    },
    space: {
        xsmall: '6px',
        small: '12px',
        medium: '24px',
        large: '40px',
        xlarge: '60px',
    },
    text: {
        heading_1: {
            color: colors.white,
            fontFamily: 'Bitter',
            fontSize: '48px',
            fontWeight: '400',
        },
        heading_2: {
            color: colors.white,
            fontFamily: 'Bitter',
            fontSize: '36px',
            fontWeight: '600',
        },
        heading_3: {
            color: colors.white,
            fontFamily: 'Bitter',
            fontSize: '24px',
            fontWeight: '300',
        },
        heading_4: {
            color: colors.white,
            fontFamily: 'Bitter',
            fontSize: '16px',
            fontWeight: '600',
        },
        logo: {
            color: colors.white,
            fontFamily: 'EB Garamond',
            fontSize: '20px',
            fontWeight: '400',
        },
        nav: {
            color: colors.white,
            fontFamily: 'Bitter',
            fontSize: '14px',
            fontWeight: '400',
        },
        subtitle: {
            color: colors.white,
            fontFamily: 'Bitter',
            fontSize: '16px',
            fontWeight: '300',
        },
        primary: colors.primary,
        secondary: colors.white,
    }
};

export default theme;