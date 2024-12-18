import React, { useState } from "react";

function Category(props) {
  
  // console.log('categorySelected', categorySelected);
  // console.log(target.checked, target.value);

  // neu checked la true -> them value vao categorySelected
  // nguoc lai -> xoa value ra khoi categorySelected
  // const newCategorySelected = [];
  
  
  // setCategorySelected(newCategorySelected)
  // props.onClickFillterCate(event.target.value);
  return (
    <div className="card">
      <div className="card-header">
        <h4 className="card-title">Filter By Category</h4>
      </div>
      <div className="card-body">
        <label className="form-check">
          <input
            className="form-check-input btn-category"
            type="checkbox"
            name="categoryId"
            defaultValue={1}
            onChange={props.handleFillter}
          />
          <span className="form-check-label"> SHIPPING </span>
        </label>
        <label className="form-check">
          <input
            className="form-check-input btn-category"
            type="checkbox"
            name="categoryId"
            defaultValue={2}
            onChange={props.handleFillter}
          />
          <span className="form-check-label"> PAYMENT </span>
        </label>
        <label className="form-check">
          <input
            className="form-check-input btn-category"
            type="checkbox"
            name="categoryId"
            defaultValue={3}
            onChange={props.handleFillter}
          />
          <span className="form-check-label"> ORDER &amp; RETURNS </span>
        </label>
      </div>
    </div>
  );
}

export default Category;
