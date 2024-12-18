import React, {useState} from "react";
import Category from "./Category";
import Status from "./Status";

function Filter(props) {
  // const [categorySelected, setCategorySelected] = useState([]);
  const [newFilter, setNewFilter] = useState({
      status: [],
      categoryId: [],
    });
  function onClickFillter(event) {
    const target = event.target;
    const name = event.target.name;
    const value = (name === "categoryId") ? parseInt(target.value) : target.value
    let _newFilter = {...newFilter};

    if (target.checked) {
      if (name === "categoryId") {
        _newFilter.categoryId.push(value); 
      } else if (name === "status") {
        _newFilter.status.push(value);
      }
    }
    else {
      let index = "";
      if (name === "categoryId") {
        index = _newFilter.categoryId.findIndex((item) => item === value); 
        _newFilter.categoryId.splice(index, 1);
      } else if (name === "status") {
        index = _newFilter.status.findIndex((item) => item === value);
        _newFilter.status.splice(index, 1);
      }
    }
    setNewFilter(_newFilter);
    props.onClickFillter(_newFilter);





    // const target = event.target;
    // let newCategorySelected = [...categorySelected];
    // const value = parseInt(target.value);
    
    // if(target.checked) {
    //   newCategorySelected.push(value)
    // }
    // else {
    //   let index = newCategorySelected.findIndex((item) => item === value);
    //   newCategorySelected.splice(index, 1);
    // }
    // setCategorySelected(newCategorySelected);
    // props.onClickFillter(newCategorySelected);
  }
  return (
    <div className="col-lg-4">
      <Status
        handleFillter={onClickFillter} 
        
      />
      <Category
        handleFillter={onClickFillter}
      />
    </div>
  );
}

export default Filter;
