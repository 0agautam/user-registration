import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

console.log("In the List component")
const User = props => (
    <tr>
        <td>{props.CrUser.firstname}</td>
        <td>{props.CrUser.lastname}</td>
        <td>{props.CrUser.email}</td>
        <td>{props.CrUser.phone}</td>
        <td>{props.CrUser.image}</td>
        <td>
            <Link to = {"/edit/"+props.CrUser._id}>edit</Link> | <input type="button"  onClick={() => { props.deleteUser(props.CrUser._id)}} value="delete" />
        </td>
    </tr>
)

export default class ListUser extends Component {
    constructor(props){
        super(props)

        this.deleteUser = this.deleteUser.bind(this)

        this.state = {users: [] }
    }
    componentDidMount(){
        axios.get('http://localhost:5005/register/')
        .then(response => {
            this.setState({users: response.data.users})
            console.log(response.data.users)
        })
        
        .catch((error) => {
            console.log(error)
        })
    }
    deleteUser(id){
        axios.delete('http://localhost:5005/register/'+id)
        .then(res => console.log(res.data))
        this.setState({
            users: this.state.users.filter(el => el._id !== id)
        })
    }

    listUser() {
        return this.state.users.map(currentUser => {
            return <User CrUser={currentUser} deleteUser={this.deleteUser} key={currentUser._id} /> 
        })
    }

    render() {
        return (
            <div>
               <h3>Signed Up Users</h3>
               <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Image</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.listUser()}
                    </tbody>
               </table>
            </div>
        )
    }
}