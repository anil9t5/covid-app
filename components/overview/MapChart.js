import { WorldMap } from "react-svg-worldmap"

const MapChart = () => {
  const data = [
    { country: "cn", value: 1389618778 }, // china
    { country: "in", value: 1311559204 }, // india
  ]
  return (
    <div className="map-section">
      <WorldMap
        color="white"
        value-suffix="people"
        size="md"
        data={data}
        strokeOpacity="1"
        borderColor="white"
      />
      <style jsx>{`
        .map-section {
          border: 1px solid #ebeaf0;
          overflow: hidden;
          text-align: center;
          border-radius: 25px 25px 25px 25px;
          :global(div) {
            background-color: #6b57bf !important;
          }
        }
      `}</style>
    </div>
  )
}

export default MapChart