import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
import {
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY,
} from '../utils/actions';
import { QUERY_CATEGORIES } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
import { Button, Heading ,Box} from "@chakra-ui/react"


function CategoryMenu() {
    //  const [state, dispatch] = useStoreContext();
    // use useDispatch and useSelector hook from redux, refactor 
    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    const { categories } = state;

    const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

    useEffect(() => {
        if (categoryData) {
            dispatch({
                type: UPDATE_CATEGORIES,
                categories: categoryData.categories,
            });
            categoryData.categories.forEach((Categories) => {
                idbPromise('categories', 'put', Categories);
            });
        } else if (!loading) {
            idbPromise('categories', 'get').then((categories) => {
                dispatch({
                    type: UPDATE_CATEGORIES,
                    categories: categories,
                });
            });
        }
    }, [categoryData, loading,dispatch]);

    const handleClick = (item) => {
       console.log(categoryData)
        dispatch({
        
            type: QUERY_CATEGORIES ,
            categories: item,
        });
    };

    return (
        <div>
            
            <Heading
                letterSpacing={2}
                size='xl'
                align={'left'}
                mb={4}
                fontWeight="bold"
                fontSize='2xl'
            >Categories</Heading>
            {categories.map((item) => (
                <Button
                    size="md"
                    mb={4}
                    height="48px"
                    width="200px"
                    border="2px"
                    borderColor="cyan.500"
                    direction={{
                        base: 'column', md: 'row'
                    }}
                    key={item._id}
                    onClick={(e) => {
                        console.log(item._id)
                        handleClick(item._id);
                    }}
                >
                    {item.name}
                </Button>
            ))}

           
        </div>
    );
}

export default CategoryMenu;