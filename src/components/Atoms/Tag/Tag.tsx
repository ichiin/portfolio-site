import styled from "@emotion/styled";

interface TagProps {
  children: string;
}

const TagContainer = styled.span({});

const Tag = ({ children }: TagProps) => {
  return <TagContainer>{children}</TagContainer>;
};

export default Tag;
