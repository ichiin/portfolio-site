import styled from "@emotion/styled";
import Tag from "../../Atoms/Tag/Tag";
import { v4 as uuidv4 } from "uuid";
import theme from "../../../styles/theme";

interface TagListProps {
  tags: string[];
}

const TagListContainer = styled.div({
  display: "flex",
  gap: `0px ${theme.space.medium}`,
});

const TagList = ({ tags }: TagListProps) => {
  return (
    <TagListContainer>
      {tags.map((tag) => (
        <Tag key={`tag-${uuidv4()}`}>{tag}</Tag>
      ))}
    </TagListContainer>
  );
};

export default TagList;
