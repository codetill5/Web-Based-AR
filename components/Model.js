import '@google/model-viewer';

const Model = () => (
  <div id="card">
    <model-viewer
      src="https://ipfs.io/ipfs/bafybeigmrbo7mczg2w2szxdzowqm4w6zetk6cps5jtwbw4gx3zs3xmx364"
      ios-src=""
      poster="https://ipfs.io/ipfs/bafkreigigidy73q2c6jnjakmy4b62xadmk22xcnl4dwmbq7n2ih2tuj4su"
      alt="A 3D model of an astronaut"
      shadow-intensity="1"
      camera-controls
      auto-rotate
      ar
    >
      <div id="annotation" style={{ height: '100%', width: '100px', display: 'flex', justifyContent: 'flex-end', alignItems: 'end' }}>
        <h1>Hello world</h1>
      </div>
      {/* <img src='/logo-big.png' style={{ margin: '10px -8px', width: '100%' }} /> */}
    </model-viewer>
  </div>
)

export default Model;
