import React from "react";

export default function ProfileEditor({ draft, setDraft, applyChanges }) {
  return (
    <div className="card draft-card">
      <h2>Draft Profile</h2>

      <input
        type="text"
        placeholder="Name"
        value={draft.name}
        onChange={(e) => setDraft({ ...draft, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Role"
        value={draft.role}
        onChange={(e) => setDraft({ ...draft, role: e.target.value })}
      />
      <textarea
        placeholder="Bio"
        value={draft.bio}
        rows={4}
        onChange={(e) => setDraft({ ...draft, bio: e.target.value })}
      />
      <button onClick={applyChanges}>Apply Changes</button>
    </div>
  );
}
