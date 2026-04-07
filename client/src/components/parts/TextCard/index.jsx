import React from "react";
import { Panel } from "rsuite";

/**
 * @component TextCard
 * @description A card component that displays text content with a title and subtitle.
 *              It uses the Panel component from rsuite for styling and layout.
 * @param {string} props.title - The title of the card.
 * @param {string} props.subtitle - The subtitle of the card.
 * @param {string} [props.className] - Optional additional class name for custom styling.
 * @param {object} [props.style] - Optional inline styles for the card container.
 * @param {object} [props.contentStyle] - Optional inline styles for the content area.
 * @param {React.ReactNode} props.children - The content to be displayed inside the card.
 * @returns {JSX.Element} The rendered TextCard component.
 * 
 * @example
 * <TextCard title="Card Title" subtitle="Card Subtitle">
 *   <p>This is the content of the card.</p>
 * </TextCard>
 */
const TextCard = (props) => {
  const classNames = ["app-text-card", props.className].filter(Boolean).join(" ");

  return (
    <Panel
      className={classNames}
      style={props.style}
      bordered
      shaded
      header={
        <header className="app-text-card-header stack">
          <h2 className="app-text-card-title">{props.title}</h2>
          <h4 className="app-text-card-subtitle text-muted">{props.subtitle}</h4>
        </header>
      }
    >
      <div className="app-text-card-content" style={props.contentStyle}>
        {props.children}
      </div>
    </Panel>
  );
};

export default TextCard;
