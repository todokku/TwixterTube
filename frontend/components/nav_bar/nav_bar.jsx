import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class NavBar extends React.Component {
    // ({ currentUser, logout, clearErrors }) =>
    constructor(props) {
        super(props);
        this.state = '';  // may need refactoring b/c update is returning a pojo
        this.handleLogout = this.handleLogout.bind(this);
        this.handleErrors = this.handleErrors.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        // need to bind update function
    }

    handleLogout(e) {
        this.props.logout();
    };

    handleErrors(e) {
        this.props.clearErrors();
    }

    handleClick(e) {
        this.props.history.push('/login')
    };
    
    update() {
        return e => this.setState({
                //
        })
    }
    
    handleSubmit(e) {  // this is for search bar form
        // some ajax call to fetch an index of videos that have matching words in the title
        //  this.props.action(this.state)  which will send the update state for a query to back end
    }
    
    render() {
        
        const display = this.props.currentUser ? (
            <div className='nav-bar-container'>

                <div className="nav-bar-left">
                    <h2>TwixterTube</h2>
                </div>
                                                
                <div className="nav-bar-search"> 
                    <form className="search-bar">    
                        <input type="text" placeholder="Search" onChange={this.update}/> {/* Search Bar should be wrapped in a form */}
                    </form>
                        <button className='search-button'>Search</button>                                       {/*  */}
                </div>

                <div className='nav-bar-right'>
                    <p>Hello, {this.props.currentUser.username}</p>
                    <button onClick={this.handleLogout}>Sign Out</button>
                </div>

            </div>
        ) : (
                <div className='nav-bar-container'>

                    <div className="nav-bar-left">
                        <h2>TwixterTube</h2>
                    </div>

                    <div className="nav-bar-search">
                        <form onSubmit={this.handleSubmit} className="search-bar">
                            <input type="text" placeholder="Search" onChange={this.update}/>
                             {/* update function may need refactoring */}
                        </form>
                            <button className='search-button'>Search</button>                                    {/*  */}
                    </div>

                    <div className='nav-bar-right'>
                        <button onClick={this.handleClick} className="sign-in-button">
                            <p>SIGN IN</p> 
                        </button>
                    </div>

                </div>
            )

        return (
            <header>
                <div>
                    {display}
                </div>
            </header>
        )
    }
};

export default withRouter(NavBar);