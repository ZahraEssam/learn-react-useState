import React from "react";

export default function ProfilePreview({ profile, renderCount }) {
  return (
    <div className="card applied-card">
      <h2>Applied Profile</h2>
      <div className="preview-name">{profile.name || "Your Name"}</div>
      <div className="preview-role">{profile.role || "Your Role"}</div>
      <div className="preview-bio">{profile.bio || "Your Bio..."}</div>
      <div className="render-count">Render count: {renderCount}</div>
    </div>
  );
}
