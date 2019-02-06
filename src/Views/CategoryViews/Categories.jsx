import React, { Component } from 'react';
import CategoryList from "../../Components/CategoryComponents/CategoryList";
//This Categories class is only works as view, it receives the CategoryList
//and it runs in App.js
class Categories extends Component {
    render() {
        return (
            <div>
                <CategoryList />
            </div>
        );
    }
}

export default Categories;