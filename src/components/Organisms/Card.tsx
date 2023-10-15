import { ReactNode } from "react";
import Label from "../Atoms/Label/Label";
import TagList from "../Molecules/TagList/TagList";
import styled from "@emotion/styled";
import theme from "../../styles/theme";

interface CardProps {
  href: string;
  icon: ReactNode;
  label: string;
  src: string;
  tags: string[];
}

const CardContainer = styled.div({
  display: "flex",
  flexDirection: "row",
  gap: theme.space.medium,
});

const Data = styled.div({
  display: "flex",
  flexDirection: "column",
  flex: 1,
});

const LabelContainer = styled.div({
  marginBottom: theme.space.xsmall,
});

const PreviewContainer = styled.div({
  display: "flex",
  flex: 1,
  height: "100%",
  width: "100%",
});

const Preview = styled.img({
  height: "100%",
  width: "100%",
});

const TagListContainer = styled.div({
  marginBottom: theme.space.small,
});

const Card = ({ href, icon, label, src, tags }: CardProps) => {
  return (
    <CardContainer>
      <PreviewContainer>
        <Preview src={src} />
      </PreviewContainer>
      <Data>
        <LabelContainer>
          <Label href={href} icon={icon} label={label} />
        </LabelContainer>
        <TagListContainer>
          <TagList tags={tags} />
        </TagListContainer>
        <p>
          Solution made to make the management of tournaments easier. After
          logging in, an organizer can easily manage registrations and results
          of his ongoing events
        </p>
      </Data>
    </CardContainer>
  );
};

export default Card;
