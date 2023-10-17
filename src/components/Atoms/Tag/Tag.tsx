import { theme } from "@/styles";
import styled from "@emotion/styled";

interface TagProps {
  children: string;
}

const TagContainer = styled.span({
  color: theme.text.subtitle.color,
  fontFamily: theme.text.subtitle.fontFamily,
  fontSize: theme.text.subtitle.fontSize,
  fontWeight: theme.text.subtitle.fontWeight,
});

const Tag = ({ children }: TagProps) => {
  return <TagContainer>{children}</TagContainer>;
};

export default Tag;
