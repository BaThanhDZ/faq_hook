import { useState } from "react";
import Filter from "./components/Filter";
import Form from "./components/Form";
import List from "./components/List";
import Search from "./components/Search";
import FAQs_items from "./mocks/FAQS";
import { makeID } from "./helpers";

function App() {
  const [FAQs, setFAQs] = useState(FAQs_items);
  const [searchValue, setSearchValue] = useState("");
  const [filterCate, setFilerCate] = useState("");
  const [filterList, setFilerList] = useState({
        status: [],
        categoryId: [],
  });;
  const [editItem, setEditItem] = useState("");
  let newList = [...FAQs];  
  const [button, setButton] = useState("Add")
  
  
  function onClickButton() {
    setButton("Edit");
  }
  function onClickEdit(item) {
    setEditItem(item)
  }
  // function onClickFillter(value) {
  //   setFilerCate(value); 
    
  // }
  // if(filterCate.length > 0) {
  //   newList = newList.filter((item) => filterCate.includes(item.categoryId));
  // }

  function onClickFillter(value) {
    setFilerList(value)
  }
  if(filterList.length > 0) {
    if(filterList.status !== "") {
      newList = newList.filter((item) => item.status === filterList.status);
    }
    else if(filterList.categoryId !== "") {
      newList = newList.filter((item) => item.categoryId === filterList.categoryId);
    }
    console.log(newList);
  }

  function onclickSubmit(item) {
    let newFAQs = [...FAQs];
    
    if(item.id !== "") {
      newFAQs.forEach((el, key) => {
        if(el.id === item.id) {
          newFAQs[key] = item;
        }
      })
    }
    else {
      item.id = makeID();
      newFAQs.unshift(item);
    }
    setFAQs(newFAQs);
    setButton("Add");
  }
  
  function onclickDelete(idDelete) {
    let newList = FAQs.filter((item) => item.id !== idDelete);
    setFAQs(newList);
  }
  function onclickSearch(value) {
    setSearchValue(value)
  }
  if(searchValue) {
    newList = newList.filter((item) => item.question.includes(searchValue))
  }
  return (
    <div className="container-fluid">
        <h1 className="text-center">FAQs</h1>
        <div className="row">
          <Form
            onclickSubmit={onclickSubmit}
            editItem={editItem}
            button={button}
          />
          <Filter
            onClickFillter={onClickFillter}
          />
        </div>
        <div className="card">
          <Search 
            onclickSearch={onclickSearch}
          />
          <List 
            onClickEdit={onClickEdit}
            items={newList} 
            onclickDelete={onclickDelete}
            onClickButton={onClickButton}
          />
        </div>
      </div>
  );
}

export default App;
