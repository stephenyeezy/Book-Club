import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import * as bookAPI from '../../services/books-api';
import BookList from '../../pages/BookListPage/BookListPage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
import AddBookPage from '../../pages/AddBookPage/AddBookPage';
import BookDetailPage from '../../pages/BookDetailPage/BookDetailPage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      books: []
    };
  }

  /*--- Callback Methods ---*/
  async componentDidMount() {
    const books = await bookAPI.getAll();
    this.setState({books});
  }

  async componentDidUpdate(prevProps, prevState) {
    if (this.state.user !== prevState.user) {
      const books = await bookAPI.getAll();
      this.setState({books});
    }
  }

  handleAddBook = async newBookData => {
    const newBook = await bookAPI.create(newBookData);
    this.setState(state => ({
      books: [...state.books, newBook]
    }),
    () => this.props.history.push('/list'));
  }

  handleLogout = () => {
    userService.logout();
    this.setState({user: null})
  }
  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()})
  }

  /*--- Lifecycle Methods ---*/
  render() {
    return (
      <div>
        <NavBar 
        user={this.state.user} 
        handleLogout={this.handleLogout}
        />
        <Switch>
          <Route exact path='/list' render={() =>
            userService.getUser() ?
              <h1><BookList /></h1>
              : <Redirect to='/login' />
          }/>
          <Route exact path='/add' render={() =>
            userService.getUser() ?
              <AddBookPage handleAddBook={this.handleAddBook}/>
              : <Redirect to='/login' />
          }/>
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/login' render={({history}) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/details' render={({location}) =>
            <BookDetailPage location={location}/>
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;
