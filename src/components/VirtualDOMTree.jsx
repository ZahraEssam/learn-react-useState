import React from "react";
function TreeNode({ label, children, highlight }) {
  return (
    <div className="tree-node-wrapper">
      <div className={`tree-parent ${highlight ? "highlight" : ""}`}>
        {label}
      </div>

      {children && children.length > 0 && (
        <div className="tree-children-wrapper">
          {/* Vertical line from parent */}
          <div className="tree-connector"></div>

          {/* Horizontal line from parent */}
          <div className="tree-horizontal-line"></div>

          {/* Vertical lines to each child */}
          {children.map((_, idx) => (
            <div
              key={idx}
              className="tree-line"
              style={{
                left: `${((idx + 0.5) / children.length) * 100}%`,
                transform: "translateX(-50%)",
              }}
            ></div>
          ))}

          {/* Children nodes */}
          <div className="tree-children">
            {children.map((child, idx) => (
              <TreeNode key={idx} {...child} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function VirtualDOMTree({ diffKey }) {
  const treeData = {
    label: "ProfileCard",
    children: [
      { label: "Name Node", highlight: diffKey === "name" },
      { label: "Role Node", highlight: diffKey === "role" },
      { label: "Bio Node", highlight: diffKey === "bio" },
    ],
  };

  return (
    <div className="card tree-card">
      <h2>Virtual DOM Tree</h2>
      <TreeNode {...treeData} />
    </div>
  );
}
