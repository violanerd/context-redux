import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from '../../utils/actions';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import {useSelector, useDispatch } from 'react-redux'
import {updateCategories, updateCurrentCategory} from "../../features/category/categorySlice"


function CategoryMenu() {
  //const [state, dispatch] = useStoreContext();
  //const { categories } = state;
  const categories = useSelector((state) => state.categorySlice.categories)
  const dispatch = useDispatch()
  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);
  //console.log("categories", categories)
  useEffect(() => {
    if (categoryData) {
      dispatch(updateCategories(categoryData.categories));
      categoryData.categories.forEach((category) => {
        idbPromise('categories', 'put', category);
      });
    } else if (!loading) {
      idbPromise('categories', 'get').then((categories) => {
        dispatch(updateCategories(categories));
    })
  }
  }, [categoryData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch(updateCurrentCategory(id))
  };
  //console.log("categories", categories)
  return (
    <div>
      <h2>Choose a Category:</h2>
      {categories.map((item) => (
        <button
          key={item._id}
          onClick={() => {
            handleClick(item._id);
          }}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryMenu;
