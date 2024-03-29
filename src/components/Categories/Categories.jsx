import React, { memo } from 'react';

const Categories = memo(function Categories({ items, onClick }) {
  const [activeItem, SetActiveItem] = React.useState(null);

  const onSelectItem = (index) => {
    SetActiveItem(index);
    onClick(index);
  };

  const onClickActive = () => {
    SetActiveItem(null);
    onClick(null);
  };

  return (
    <div className='categories'>
      <ul>
        <li onClick={onClickActive} className={activeItem === null ? 'active' : ''}>
          Все
        </li>
        {items &&
          items.map((item, index) => (
            <li
              className={activeItem === index ? 'active' : ''}
              onClick={() => onSelectItem(index)}
              key={`${item}_${index}`}
            >
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
});

export default Categories;
