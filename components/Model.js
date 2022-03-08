import '@google/model-viewer';

const Model = () => (
  <div id="card">
  <model-viewer
    src="https://www.arweave.net/hZIaHXCq7UcMvevRZ0VtMlMxPnfVS9ZYizoGYjZ_WlE?ext=glb"
    ios-src=""
    poster="https://www.arweave.net/vyzBWnC5lJql4UISImR8LS32TBCwN_SIiL0W1WPgRec?ext=PNG"
    alt="A 3D model of an astronaut"
    shadow-intensity="1"
    camera-controls
    auto-rotate
    ar
  ></model-viewer>
</div>
)

export default Model;
