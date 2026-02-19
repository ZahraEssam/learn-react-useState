import { useState } from "react";
import ProfileEditor from "./components/ProfileEditor";
import ProfilePreview from "./components/ProfilePreview";
import VirtualDOMTree from "./components/VirtualDOMTree";
import "./styles/global.css";

function App() {
  const [draft, setDraft] = useState({ name: "", role: "", bio: "" });
  const [profile, setProfile] = useState({ name: "", role: "", bio: "" });
  const [renderCount, setRenderCount] = useState(0);
  const [diffKey, setDiffKey] = useState(null);

  const applyChanges = () => {
    let changedKey = null;
    if (draft.name !== profile.name) changedKey = "name";
    else if (draft.role !== profile.role) changedKey = "role";
    else if (draft.bio !== profile.bio) changedKey = "bio";

    setProfile(draft);
    setRenderCount((prev) => prev + 1);
    setDiffKey(changedKey);

    setTimeout(() => setDiffKey(null), 800);
  };

  return (
    <div className="app">
      <div className="header">
        <h1>Learn React useState</h1>
      </div>

      <div className="layout">
        <ProfileEditor draft={draft} setDraft={setDraft} applyChanges={applyChanges} />
        <ProfilePreview profile={profile} renderCount={renderCount} />
        <VirtualDOMTree diffKey={diffKey} />
      </div>
    </div>
  );
}

export default App;
