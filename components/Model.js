import '@google/model-viewer';

const Model = () => (
  <div id="card">
  <model-viewer
    src="/gladiador.glb"
    ios-src=""
    poster="/auctions.jpg"
    alt="A 3D model of an astronaut"
    shadow-intensity="1"
    camera-controls
    auto-rotate
    ar
  ></model-viewer>
</div>
)

export default Model;
