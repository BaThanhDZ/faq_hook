import React from 'react';
import Item from './Item';

function List(props) {
  const items = props.items;
  let itemCategorys = props.categorys;
  const elItems = items.map((item, index) => {
      return (
          <Item 
            key={index} 
            item={item} 
            category={itemCategorys} 
            onclickDelete={props.onclickDelete}
            onClickEdit={props.onClickEdit}
            onClickButton={props.onClickButton}
          />
      )
  })
  
  return (
      <div className="card-table">
          <div className="table-responsive table-has-actions table-has-filter">
            <table className="table table-vcenter card-table table-striped">
              <thead>
                <tr>
                  <th>
                    <input className="form-check-input" type="checkbox" />
                  </th>
                  <th>ID</th>
                  <th>Question</th>
                  <th>Category</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className="allList">
                {elItems}
              </tbody>
            </table>
          </div>
      </div>
  );
}

export default List;
