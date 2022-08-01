import React from "react";

const AnotherModel = () => {
  return (
    <div>
      <model-viewer
        bounds="tight"
        enable-pan
        src="/hulk.glb"
        ar
        ar-modes="webxr scene-viewer quick-look"
        camera-controls
        environment-image="neutral"
        poster="poster.webp"
        shadow-intensity="1"
        autoplay
      >
        <div class="progress-bar hide" slot="progress-bar">
          <div class="update-bar"></div>
        </div>
        <button slot="ar-button" id="ar-button">
          View in your space
        </button>
        <div id="ar-prompt">
          <img src="https://modelviewer.dev/shared-assets/icons/hand.png" />
        </div>
      </model-viewer>
    </div>
  );
};

export default AnotherModel;