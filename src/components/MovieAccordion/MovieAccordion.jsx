import React from 'react';
import "./MovieAccordion.css";


export default function MovieAccordion() {
  return (
    <div className="contentContainer">
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{
                backgroundColor: "black",
              }}
            >
              <span
                style={{
                                 color: "white",
                 
                }}
              >
                AS SOON AS
              </span>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: "black",
                color: "white",
                textAlign: "center",
              }}
            >
              <span
                style={{
                  color: "white",
                }}
              >
                BE HAPPY WITH MY CANAL
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
