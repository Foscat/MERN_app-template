import React from "react";
import { Panel, Divider } from "rsuite";

/**
 * @component FlexTron
 * @description A flexible panel component that displays a title, subtitle, and content.
 *              It uses the Panel and Divider components from rsuite for styling and layout.
 * @param {string} props.title - The title of the panel.
 * @param {string} props.subtitle - The subtitle of the panel.
 * @param {string} [props.className] - Optional additional class name for custom styling.
 * @param {object} [props.style] - Optional inline styles for the panel container.
 * @param {object} [props.titleStyle] - Optional inline styles for the title area.
 * @param {object} [props.contentStyle] - Optional inline styles for the content area.
 * @param {React.ReactNode} props.children - The content to be displayed inside the panel.
 * @returns {JSX.Element} The rendered FlexTron component.
 */
const FlexTron = (props) => {
  const classNames = ["app-flextron", props.className].filter(Boolean).join(" ");

  return (
    <Panel
      className={classNames}
      style={props.style}
      bordered
      shaded
    >
      <div className="app-flextron-header stack" style={props.titleStyle}>
        <h1 className="app-flextron-title">{props.title}</h1>
        <h5 className="app-flextron-subtitle text-muted">{props.subtitle}</h5>
      </div>
      <Divider />
      <div className="app-flextron-content" style={props.contentStyle}>
        {props.children}
      </div>
    </Panel>
  );
};

export default FlexTron;
