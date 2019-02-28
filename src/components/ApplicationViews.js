import { Route } from 'react-router-dom'
import React, { Component } from "react"
import StoreLocations from "./StoreLocations"
import EmployeeList from "./EmployeeList"
import CandyList from "./CandyList"

export default class ApplicationViews extends Component {

    state = {
        stores: [],
        employees: [],
        candyTypes: [],
        candies: []
    }

    //DELETE Candy Button Function
    deleteCandy= (id) => {
        fetch(`http://localhost:8088/candiesFromAPI/${id}`, {
            "method" : "DELETE"
        })
        .then(r => r.json())
        .then(() => fetch("http://localhost:8088/candiesFromAPI"))
        .then(r => r.json())
        .then(candies => this.setState({candies:candies}))
        }

    componentDidMount() {
        const newState = {}

        fetch("http://localhost:8088/storesFromAPI ")
            .then(r => r.json())
            .then(stores => newState.stores = stores)
            .then(() => fetch("http://localhost:8088/employeesFromAPI")
            .then(r => r.json()))
            .then(employees => newState.employees = employees)
            .then(() => fetch("http://localhost:8088/candyTypesFromAPI")
            .then(r => r.json()))
            .then(candyTypes => newState.candyTypes = candyTypes)
            .then(() => fetch("http://localhost:8088/candiesFromAPI")
            .then(r => r.json()))
            .then(candies => newState.candies = candies)
            .then(() => this.setState(newState))
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <StoreLocations stores={this.state.stores} />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees}  />
                }} />
                <Route path="/candies" render={(props) => {
                    return <CandyList candies={this.state.candies}
                            deleteCandy={this.deleteCandy}
                            //Must have related information below for comparisions (methods,loops)
                            candyTypes= {this.state.candyTypes} />
                }} />
            </React.Fragment>
        )
    }
}

