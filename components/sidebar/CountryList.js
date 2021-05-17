import Select from "react-select"

const CountryList = () => {
  const options = [
    { value: "usa", label: "USA" },
    { value: "spain", label: "Spain" },
    { value: "italy", label: "Italy" },
    { value: "usa", label: "USA" },
    { value: "spain", label: "Spain" },
    { value: "italy", label: "Italy" },
    { value: "usa", label: "USA" },
    { value: "spain", label: "Spain" },
    { value: "italy", label: "Italy" },
    { value: "usa", label: "USA" },
    { value: "spain", label: "Spain" },
    { value: "italy", label: "Italy" },
    { value: "usa", label: "USA" },
    { value: "spain", label: "Spain" },
    { value: "italy", label: "Italy" },
    { value: "usa", label: "USA" },
    { value: "spain", label: "Spain" },
    { value: "italy", label: "Italy" },
    { value: "usa", label: "USA" },
    { value: "spain", label: "Spain" },
    { value: "italy", label: "Italy" },
    { value: "usa", label: "USA" },
    { value: "spain", label: "Spain" },
    { value: "italy", label: "Italy" },
    { value: "usa", label: "USA" },
    { value: "spain", label: "Spain" },
    { value: "italy", label: "Italy" },
    { value: "usa", label: "USA" },
    { value: "spain", label: "Spain" },
    { value: "italy", label: "Italy" },
  ]
  return (
    <>
      <Select className="scrollableList" options={options} menuIsOpen={true} />
      <style jsx>{`
        :global(.scrollableList .css-26l3qy-menu) {
          background-color: #f7f9fd;
          position: relative !important;
          box-shadow: 0px !important;
          box-shadow: none !important;
          border: 1px solid #ebeaf0;
          border-radius: 0px 0px 10px 10px;
          overflow: hidden;
          margin-top: 0px;
          border-top: 0px;
          font-size: 14px;
        }
        :global(.css-9gakcf-option) {
          background-color: #5734d1 !important;
          cursor: pointer !important;
        }

        :global(.css-1pahdxg-control) {
          border: 1px solid #ebeaf0 !important;
          border-radius: 10px 10px 0px 0px !important;
          -webkit-box-shadow: none !important;
          -moz-box-shadow: none !important;
          box-shadow: none !important;
          font-size: 14px !important;
        }
        :global(.css-yk16xz-control) {
          border: 1px solid #ebeaf0 !important;
          border-radius: 10px 10px 0px 0px !important;
          border-bottom: 0px;
          font-size: 14px;
        }
        :global(.css-1n7v3ny-option) {
          cursor: pointer !important;
        }
      `}</style>
    </>
  )
}

export default CountryList
