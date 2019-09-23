import React, {Component} from 'react';
import './LoginPage.css';

class LoginPage extends Component {
    render() {
        return (
            <div className="card p-4 loginCard">
                <div className="card-body">
                    <h1 className="text-center">Login</h1>
                    <hr/>
                    <form method="post">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                <i className="icon-user"/>
                                                </span>
                            </div>
                            <input name="username"
                                   className="form-control"
                                   type="text"
                                   placeholder="Username"/>
                        </div>
                        <div className="input-group mb-4">
                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                <i className="icon-lock"/>
                                                </span>
                            </div>
                            <input name="password1" className="form-control"
                                   type="password"
                                   placeholder="Password"/>
                        </div>
                        <div className="col6 text-center">
                            <button className="btn btn-primary px-4" type="submit">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
};

export default LoginPage;