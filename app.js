// Initialize Google Map
let map = new google.maps.Map(document.getElementById("map"), {
  center: { lat: 37.7749, lng: -122.4194 }, // San Francisco
  zoom: 10,
  mapTypeId: "roadmap",
});

// Debug: Log map instance
console.log("Google Map Loaded:", map);

// Define IconLayer Data for a Red Dot
const ICON_DATA = [
  {
    position: [-122.4194, 37.7749], // San Francisco
    size: 10000, // Small size for a dot
  },
];

// Debug: Log icon data
console.log("Icon Data:", ICON_DATA);

// Define Deck.gl IconLayer
const iconLayer = new deck.IconLayer({
  id: "red-dot-layer",
  data: ICON_DATA,
  pickable: true,
  iconAtlas: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Red_dot.svg", // Red Dot Image
  iconMapping: {
    redDot: { x: 0, y: 0, width: 20, height: 20, anchorY: 10 },
  },
  getIcon: (d) => "redDot",
  getSize: (d) => d.size,
  getPosition: (d) => d.position,
  onClick: (info) => console.log(`Clicked on marker at ${info.coordinate}`),
});

// Debug: Log IconLayer instance
console.log("Red Dot Layer Initialized:", iconLayer);

// Add Deck.gl Overlay
const deckOverlay = new deck.GoogleMapsOverlay({
  layers: [iconLayer],
});

// Attach Deck.gl Overlay to Google Map
deckOverlay.setMap(map);

// Debug: Confirm overlay added
console.log("Deck.gl Overlay with Red Dot Added");
