import styled from "@emotion/styled";
import { Tag } from "@/components";
import { v4 as uuidv4 } from "uuid";
import { theme } from "@/styles";

interface TagListProps {
  tags: string[];
}

const TagListContainer = styled.div({
  display: "flex",
  gap: `0px ${theme.space.medium}`,
  [theme.device.mobile]: {
    flexWrap: "wrap",
    gap: `8px ${theme.space.medium}`,
  },
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
