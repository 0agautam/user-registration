import React, {Component} from 'react'
import axios from 'axios'


export default class RegisterUser extends Component {
    constructor(props){
        super(props)

        this.onChangeFirstName  = this.onChangeFirstName.bind(this)
        this.onChangeLastName   = this.onChangeLastName.bind(this)  
        this.onChangeEmail      = this.onChangeEmail.bind(this)
        this.onChangePhone      = this.onChangePhone.bind(this)
        this.onChangeImage      = this.onChangeImage.bind(this)
        this.onSubmit           = this.onSubmit.bind(this)

        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            image: '',
            users:[]
        }
    }

    componentDidMount(){
        this.setState({
        })
    }

    onChangeFirstName(e){
        this.setState({
            firstname: e.target.value
        })
    }

    onChangeLastName(e){
        this.setState({
            lastname: e.target.value
        })
    }

    onChangeEmail(e){
        this.setState({
            email: e.target.value
        })
    }

    onChangePhone(e){
        this.setState({
            phone: e.target.value
        })
    }

    onChangeImage(e){
        this.setState({
            image: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault()

        const newUser = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            phone: this.state.phone,
            image: this.state.image
        }

        console.log(newUser)
        axios.post('http://localhost:5005/register/store', newUser)
        .then(res =>{ 
                console.log(res.data)
                window.location = "/"    
            }
        )
        //.catch(res => console.log(`the Error is :${res.data}`))
    }
    render() {
        return (
            <div>
                <h3>Create a User Account</h3>
                <small>Let's Register!!!</small>
                <br/> <br/>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>First Name:</label>
                        <input type="text" 
                            required 
                            placeholder="Enter First Name"
                            className="form-control" 
                            value={this.state.firstname} 
                            onChange={this.onChangeFirstName}
                            />
                    </div>
                    <div className="form-group">
                        <label>Last Name:</label>
                        <input type="text" 
                            required 
                            placeholder="Enter Last Name"
                            className="form-control" 
                            value={this.state.lastname} 
                            onChange={this.onChangeLastName}
                            />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="text" 
                            required 
                            placeholder="Enter Email"
                            className="form-control" 
                            value={this.state.email} 
                            onChange={this.onChangeEmail}
                            />
                    </div>
                    <div className="form-group">
                        <label>Phone:</label>
                        <input type="text" 
                            required 
                            placeholder="Enter Phone"
                            className="form-control" 
                            value={this.state.phone} 
                            onChange={this.onChangePhone}
                            />
                    </div>
                    <div className="form-group">
                        <label>Image:</label>
                        <input type="text" 
                            required 
                            placeholder="Enter Image"
                            className="form-control" 
                            value={this.state.image} 
                            onChange={this.onChangeImage}
                            />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Submit Form" className="btn btn-primary" />
                    </div>

                </form>
            </div>
        )
    }
}