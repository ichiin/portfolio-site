import { colors } from "./colors";

const theme = {
    background: {
        gradient: `linear-gradient(180deg, ${colors.black} 0%, ${colors.black_lighter} 100%)`,
    },
    space: {
        medium: '24px',
    },
    text: {
        heading_1: {
            color: colors.white,
            fontFamily: 'Bitter',
            fontSize: '48px',
            fontWeight: '700',
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
            fontWeight: '400',
        },
        heading_4: {
            color: colors.white,
            fontFamily: 'Bitter',
            fontSize: '16px',
            fontWeight: '600',
        },
        primary: colors.primary,
        secondary: colors.white,
    }
};

export default theme;