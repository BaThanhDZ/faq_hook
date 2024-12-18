import React, { useState } from "react";
import { FAQ_CATEGORIES_OBJ } from "../mocks/FAQ_Categories";
import STATUS_CONFIG from "../consts/statusConfig";

function Item(props) {
  const item = props.item;
  const { id, status, categoryId } = item;
  const statusConfig = STATUS_CONFIG[status];
  const { color: elColorStatus, name: elNameStatus } = statusConfig;
  

  // const category = FAQ_CATEGORIES.find((el) => el.id === categoryId);
  const category = FAQ_CATEGORIES_OBJ[categoryId];

  function handelDelete() {
    props.onclickDelete(id);
  }
  function handelEdit() {
    props.onClickButton("");
    props.onClickEdit(item);
  }

  

  return (
    <tr>
      <td className="w-1">
        <input className="form-check-input" type="checkbox" />
      </td>
      <td>{item.id}</td>
      <td>{item.question}</td>
      <td>{category.name}</td>
      <td>
        <span className={`badge bg-${elColorStatus} text-${elColorStatus}-fg`}>
          {elNameStatus}
        </span>
      </td>
      <td className="text-nowrap">
        <button 
          onClick={handelEdit}
          type="button" 
          className="btn btn-sm btn-primary">
          Edit
        </button>
        <button
          onClick={handelDelete}
          className="btn btn-sm btn-danger"
          type="button"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Item;
