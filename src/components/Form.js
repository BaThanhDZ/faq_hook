import React, { useEffect, useState } from "react";

function Form(props) {
  // let categoryId = props.categoryId
  // const category = FAQ_CATEGORIES.find(el => el.id === categoryId);

  // const [button, setButton] = useState("Add");
  const [newItem, setNewItem] = useState({
    id: "",
    question: "",
    answer: "",
    status: "published",
    categoryId: 1,
  });

  useEffect(() => {
    updateItem(props.editItem, props.button);
  }, [props.editItem])

  function updateItem(item) {
    if(item.id) {
      setNewItem({
        ...newItem,
        id: item.id,
        question: item.question,
        answer: item.answer,
        status: item.status,
        categoryId: item.categoryId,
      });
      // setButton("Edit");
    }
  }
  
  function handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setNewItem({
      ...newItem,
      [name]: value
    })
  }

  function handleCancel() {
    setNewItem({
      ...newItem,
      id: "",
      question: "",
      answer: "",
      status: "",
      categoryId: "",
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    setNewItem({
      ...newItem,
      id: "",
      question: "",
      answer: "",
      status: "",
      categoryId: "",
    })
    props.onclickSubmit(newItem);
  }
  


  

  return (
    <div className="col-lg-8">
      <div className="card mb-2">
        <div className="card-body">
          <div className="row" id="myForm">
            <div className="mb-3 col-md-6">
              <label htmlFor="category_id" className="form-label required">
                Category
              </label>
              <select
                className="form-control form-select"
                required="required"
                name="categoryId"
                aria-required="true"
                onChange={handleChange}
                value={newItem.categoryId}
              >
                <option value={1}>SHIPPING</option>
                <option value={2}>PAYMENT</option>
                <option value={3}>ORDER &amp; RETURNS</option>
              </select>
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="status" className="form-label required">
                Status
              </label>
              <select
                className="form-control form-select"
                required="required"
                name="status"
                aria-required="true"
                onChange={handleChange}
                value={newItem.status}
              >
                <option value="published">Published</option>
                <option value="draft">Draft</option>
                <option value="pending">Pending</option>
              </select>
            </div>
            <div className="mb-3 col-12">
              <label htmlFor="question" className="form-label required">
                Question
              </label>
              <input
                type="text"
                className="form-control"
                name="question"
                onChange={handleChange}
                value={newItem.question}
              />
            </div>
            <div className="mb-3 col-12">
              <label htmlFor="answer" className="form-label required">
                Answer
              </label>
              <textarea
                className="form-control"
                rows={4}
                required="required"
                name="answer"
                cols={50}
                onChange={handleChange}
                value={newItem.answer}
              />
            </div>
          </div>
          <button
            onClick={handleSubmit}
            type="button"
            className="btn btn-primary"
            id="btn-create"
          >
            {props.button}
          </button>
          <button
            onClick={handleCancel} 
            type="button" 
            className="btn">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
