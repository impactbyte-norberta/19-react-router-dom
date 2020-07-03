// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

// function LoginForm() {
//     let history = useHistory();

//     const [userLogin, setUserLogin] = useState({
//         email: '',
//         password: '',
//     });

//     function handleChange(event) {
//         setUserLogin({
//             ...userLogin,
//             [event.target.name]: event.target.value,
//         });
//     }

//     function handleSubmit(event) {
//         event.preventDefault();

//         // Untuk login, maka simpan di local storage
//         localStorage.setItem('user', JSON.stringify(userLogin));

//         history.push('/profile');
//     }

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <input
//                         type='text'
//                         name='email'
//                         id='email'
//                         placeholder='email'
//                         value={userLogin.email}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div>
//                     <input
//                         type='text'
//                         name='password'
//                         id='password'
//                         placeholder='password'
//                         value={userLogin.password}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <input type='submit' value='Login' />
//             </form>
//         </div>
//     );
// }

// export default LoginForm;

// ======================================

import React, { Component } from 'react';
import { withRouter } from 'react-router';

class LoginForm extends Component {
    state = {
        email: '',
        password: '',
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const { history } = this.props;

        let userLogin = {
            email: this.state.email,
            password: this.state.password,
        };

        // Kalau berhasil login, simpan data di local storage
        localStorage.setItem('user', JSON.stringify(userLogin));
        // setelah itu, redirect ke profile
        history.push('/profile');

        // reload, untuk merefresh browser
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            type='text'
                            name='email'
                            id='email'
                            placeholder='email'
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input
                            type='text'
                            name='password'
                            id='password'
                            placeholder='password'
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </div>
                    <input type='submit' value='Login' />
                </form>
            </div>
        );
    }
}

export default withRouter(LoginForm);
