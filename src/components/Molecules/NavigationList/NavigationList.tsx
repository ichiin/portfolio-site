import { theme } from "@/styles";
import { NavigationItemProps } from "@/components";
import styled from "@emotion/styled";

interface NavigationListProps {
  children: React.ReactElement<NavigationItemProps>[];
}

const List = styled.div({
  display: "flex",
  gap: `0px ${theme.space.medium}`,
});

const NavigationList = ({ children }: NavigationListProps) => {
  return <List>{children}</List>;
};

export default NavigationList;
