import React, { Component } from 'react'
import Child from "./Child";
import { v4 as uuidv4 } from 'uuid';

export class Parent extends Component {
    state = {
        groceryList: [
            {
                id: uuidv4(),
                item: "milk",
                checker: false,
            },
            {
                id: uuidv4(),
                item: "chicken breast",
                checker: false,
            },
            {
                id: uuidv4(),
                item: "tomato",
                checker: false,
            },
        ],
        inputItem: "",
    }
    
    // add an item on grocery list
    handleOnSubmit = (event) => {
        event.preventDefault();
        let newArr = [
            ...this.state.groceryList,
            {
                id: uuidv4(),
                item: this.state.inputItem,
                checker: false,
            }
        ]
        this.setState({
            groceryList: newArr,
            inputItem: "",
        })
    }
    
    handleOnChange = (event) => {
        this.setState({
            inputItem: event.target.value
        })
    }

    // delete an item on the list
    handleOnClick = (itemID) => {
        let mappedArr = this.state.groceryList.map((item) => {
            return item.id !== itemID
        })
        this.setState({
            groceryList: mappedArr
        })
    }

    render() {
        return (
            <div>
                <Child
                    handleOnSubmit = {this.handleOnSubmit} 
                    handleOnChange = {this.handleOnChange}
                    handleOnClick = {this.handleOnClick}
                    groceryList = {this.state.groceryList}
                />
            </div>
        )
    }
}

export default Parent

