import { ReactNode } from "react";
import { Label, TagList } from "@/components";
import { PreviewNoImage } from "@/assets";
import styled from "@emotion/styled";
import { theme } from "@/styles";

interface CardProps {
  description: string;
  href: string;
  icon?: ReactNode;
  label: string;
  src?: string;
  tags: string[];
}

const CardContainer = styled.div({
  display: "flex",
  flexDirection: "row",
  gap: theme.space.large,
  [theme.device.mobile]: {
    flexDirection: "column",
  },
});

const Data = styled.div({
  display: "flex",
  flexDirection: "column",
  width: "50%",
  [theme.device.mobile]: {
    width: "100%",
  },
});

const LabelContainer = styled.div({
  marginBottom: theme.space.small,
});

const PreviewContainer = styled.div({
  display: "flex",
  flex: 1,
  height: "100%",
  width: "100%",
});

const Preview = styled.img({
  borderRadius: "8px",
  height: "100%",
  width: "100%",
});

const TagListContainer = styled.div({
  marginBottom: theme.space.medium,
});

const Card = ({
  description,
  href,
  icon,
  label,
  src = PreviewNoImage,
  tags,
}: CardProps) => {
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
        <p>{description}</p>
      </Data>
    </CardContainer>
  );
};

export default Card;
