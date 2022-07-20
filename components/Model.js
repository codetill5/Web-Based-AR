import '@google/model-viewer';

const Model = () => (
  <div id="card">
    <model-viewer
      src="/edited.glb"
      ios-src=""
      poster="/unnamed.jpg"
      alt="A 3D model of an Xhype Room"
      shadow-intensity="1"
      camera-controls
      autoplay
      auto-rotate
      ar
    >
      {/* <div id="annotation" style={{ height: '100%', width: '100px', display: 'flex', justifyContent: 'flex-end', alignItems: 'end' }}>
        <h1>Hello world</h1>
      </div> */}
      {/* <img src='/logo-big.png' style={{ margin: '10px -8px', width: '100%' }} /> */}
    </model-viewer>
  </div>
)

export default Model;
