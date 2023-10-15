import styled from "@emotion/styled";

interface LinkProps {
  highlight?: boolean;
}

export interface NavigationItemProps {
  children: string;
  highlight?: boolean;
  href: string;
}

const Link = styled.a<LinkProps>({}, (props) => ({
  color: props.highlight ? "red" : "white",
}));

const NavigationItem = ({ children, highlight, href }: NavigationItemProps) => {
  return (
    <Link highlight={highlight} href={href}>
      {children}
    </Link>
  );
};

export default NavigationItem;
