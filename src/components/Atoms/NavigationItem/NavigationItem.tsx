import { colors, theme } from "@/styles";
import styled from "@emotion/styled";

interface LinkProps {
  highlight?: boolean;
}

export interface NavigationItemProps {
  children: string;
  highlight?: boolean;
  href: string;
}

const Link = styled.a<LinkProps>(
  {
    color: colors.white,
    position: "relative",
    fontFamily: theme.text.nav.fontFamily,
    fontSize: theme.text.nav.fontSize,
    fontWeight: theme.text.nav.fontWeight,
    textDecoration: "none",
  },
  (props) => ({
    fontWeight: props.highlight ? "600" : theme.text.nav.fontWeight,
    "&:after": {
      content: props.highlight ? '""' : "none",
      position: "absolute",
      left: 0,
      bottom: props.highlight ? "-2px" : "0px",
      width: "100%",
      height: props.highlight ? "2px" : "0px",
      backgroundColor: colors.primary,
    },
  })
);

const NavigationItem = ({ children, highlight, href }: NavigationItemProps) => {
  return (
    <Link highlight={highlight} href={href}>
      {children}
    </Link>
  );
};

export default NavigationItem;
