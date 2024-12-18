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
    const elStatus = target.status;
    const elCategory = target.categoryId;
    let _newFilter = {...newFilter};
    let value = "";
    switch(value) {
      case elStatus:
        value = target.value;
        break;
      case elCategory:
        value = parseInt(target.value);
        break;
      default:
        value = target.value;
    }
    if(target.checked) {
      if( elStatus) {
        setNewFilter({
          ...newFilter,
          status: [value]
        })
      }
      else if(elCategory) {
        setNewFilter({
          ...newFilter,
          categoryId: [value]
        })
      }
    }
    else {
      let index = _newFilter.findIndex(([item]) => item === value);
      console.log(index)
      _newFilter.splice(index, 1);
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
