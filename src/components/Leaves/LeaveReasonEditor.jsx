import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";

const LeaveReasonEditor = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const config = {
    height: 400, // Increase height to 400px
    placeholder: "Write your leave reason here...",
    toolbarSticky: false,
  };
  return (
    <JoditEditor
      ref={editor}
      value={content}
      config={config}
      tabIndex={1} // tabIndex of textarea
      onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
      onChange={(newContent) => {}}
    />
  );
};

export default LeaveReasonEditor;
