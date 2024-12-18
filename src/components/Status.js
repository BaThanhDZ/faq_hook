import React from "react";

function Status(props) {
  return (
    <div className="card mb-2">
      <div className="card-header">
        <h4 className="card-title">Filter By Status</h4>
      </div>
      <div className="card-body">
        <label className="form-check">
          <input
            className="form-check-input btn-status Published"
            type="checkbox"
            name="status"
            defaultValue="published"
            onChange={props.handleFillter}
          />
          <span className="form-check-label"> Published </span>
        </label>
        <label className="form-check">
          <input
            className="form-check-input btn-status Pending"
            name="status"
            type="checkbox"
            defaultValue="pending"
            onChange={props.handleFillter}
          />
          <span className="form-check-label"> Pending </span>
        </label>
        <label className="form-check">
          <input
            className="form-check-input btn-status Draft"
            name="status"
            type="checkbox"
            defaultValue="draft"
            onChange={props.handleFillter}
          />
          <span className="form-check-label">Draft</span>
        </label>
      </div>
    </div>
  );
}

export default Status;
