import React from "react";

export default function AustraliaInfo() {

  const countryName = <div className="country-name">
    Australia
  </div>;

  const countrySnapshotFigures = <div className="country-snapshot-figures">
    <div className="country-snapshot-figures-row-top">
      <div className="country-snapshot-numbers">
        <div className="country-number">7.5</div>
        <div className="country-number-description">XYZ</div>
      </div>
    </div>
    <div className="country-snapshot-figures-row-bottom">
      <div className="country-snapshot-numbers">
        <div className="country-number"></div>
        <div className="country-number-description"></div>
      </div>
    </div>
  </div>;

  return <div className="country-info-cover">

    <div className="country-info-column-left country-info-column">
      {countryName}
      {countrySnapshotFigures}
    </div>

    <div className="country-info-column-right country-info-column">

    </div>

  </div>
}