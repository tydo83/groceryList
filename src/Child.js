import React, { Component } from 'react'

export default class Child extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleOnSubmit}>
                    <label>
                        Grocery List
                    </label>
                    <input></input>
                    <button>Submit</button>
                </form>
                <ul>
                    {this.props.groceryList.map((item) => {
                        return (
                            <React.Fragment key = {item.id}>
                                <li>{item.item}</li>
                                <button>Delete</button>
                            </React.Fragment>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
