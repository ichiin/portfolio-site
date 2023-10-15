import { colors } from "./colors";

const theme = {
    background: {
        gradient: `linear-gradient(180deg, ${colors.black} 0%, ${colors.black_lighter} 100%)`,
    },
    space: {
        medium: '24px',
    },
    text: {
        primary: colors.primary,
        secondary: colors.white,
    }
};

export default theme;