import React, { Component } from 'react'
import axios from 'axios';


class CreateWallet extends Component {
    constructor(props) {
        super();
        this.state = {
            name: '',
            accountNumber: '',
            description: '',
            priority: ''
        }
    }

    changeHandler = (event, fieldName) => {
        this.setState({
            [fieldName]: event.target.value
        })
    }

    submitHandler = (event) => {
        const newWallet = {
            name: this.state.name,
            accountNumber: this.state.accountNumber,
            description: this.state.description,
            priority: this.state.priority
        }
        event.preventDefault();
        axios.post('http://localhost:8080/wallet', newWallet).then((res) => {
                    this.props.navigate('/dashboard');
        }).catch((err) => {
                alert('error')
        })
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Create Wallet</h5>
                            <hr />
                            <form onSubmit={(event)=>this.submitHandler(event)}>
                                <div className="form-group">
                                    <input type="text"
                                        onChange={(event) => this.changeHandler(event, "name")}
                                        className="form-control form-control-lg " placeholder="Account Name" />
                                </div>
                                <br />
                                <div className="form-group">
                                    <input type="text"
                                        onChange={(event) => this.changeHandler(event, "accountNumber")}
                                        className="form-control form-control-lg" placeholder="Account No" />
                                </div>
                                <br />
                                <div className="form-group">
                                    <textarea className="form-control form-control-lg"
                                        onChange={(event) => this.changeHandler(event, "description")}
                                        placeholder="Description"></textarea>
                                </div>
                                <br />
                                <div className="form-group">
                                    <select className="form-control form-control-lg"
                                        onChange={(event) => this.changeHandler(event, "priority")}
                                        name="priority">
                                        <option value={3}>Display Priority</option>
                                        <option value={1}>High</option>
                                        <option value={2}>Medium</option>
                                        <option value={3}>Low</option>
                                    </select>
                                </div>
                                <br />
                                <input type="submit" className="btn btn-primary btn-block mt-4" value="Create/Update" />
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default CreateWallet
