import React, { useEffect, useState } from "react";
import Clip from "./components/Clip";
import "./App.css";

const App = () => {
  const [clips, setClips] = useState([]);

  useEffect(() => {
    fetch("/MyClip.json")
      .then((response) => response.json())
      .then((data) => setClips(data))
      .catch((error) => console.error("Error loading clips:", error));
  }, []);

  return (
    <div className="app">
      {}
      <header>
        <h1>My Clips</h1>
      </header>

      {}
      <main>
        <div className="clips-container">
          {clips.map((clip, index) => (
            <Clip
              key={index}
              title={clip.title}
              description={clip.description}
              start={clip.start}
              source={clip.source_clip}
            />
          ))}
        </div>
      </main>

      {}
      <footer>
        <p>&copy; 2024 Aptech Studio</p>
      </footer>
    </div>
  );
};

export default App;
