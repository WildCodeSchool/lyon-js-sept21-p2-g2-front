import React from 'react';

function Map() {
  return (
    <div className="overflow-hidden">
      <iframe
        id="inlineFrameExample"
        title="Inline Frame Example"
        width="300"
        height="200"
        src="https://www.openstreetmap.org/relation/307829"
      />
    </div>
  );
}

export default Map;
