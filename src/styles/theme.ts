import { colors } from "@/styles";

const theme = {
    background: {
        gradient: `linear-gradient(180deg, ${colors.black} 0%, ${colors.black_lighter} 100%)`,
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