import { useState, useEffect } from "react";

function TreeNode({ label, children, highlight }) {
  const [showLine, setShowLine] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShowLine(true), 50);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div style={{ position: "relative", marginBottom: "40px", textAlign: "center" }}>
      <div className={`tree-node ${highlight ? "highlight" : ""}`}>{label}</div>

      {children && children.length > 0 && (
        <div className="tree-children-horizontal">
          {showLine && <div className="tree-line-horizontal"></div>}
          {children.map((child, idx) => (
            <TreeNode key={idx} {...child} />
          ))}
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
    <div className="card">
      <h2>Virtual DOM Tree</h2>
      <TreeNode {...treeData} />
    </div>
  );
}
