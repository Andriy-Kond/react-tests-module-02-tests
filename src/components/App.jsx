import { data } from './Data/userData';
import React, { Component } from 'react';
import { UserList } from './UserList/UserList';
import { Button } from './Button/Buttno';
import { Form } from './Form/Form';

export class App extends Component {
  state = {
    users: data,
    isFormShown: false,
  };

  deleteUser = deleteId => {
    this.setState(prevState => {
      return {
        users: prevState.users.filter(({ id }) => {
          return id !== deleteId;
        }),
      };
    });
  };

  openForm = () => {
    this.setState({ isFormShown: true });
  };

  addUser = obj => {
    this.setState(prev => {
      return {
        users: [...prev.users, obj],

        // закрити форму
        isFormShown: false,
      };
    });
  };

  render() {
    const { users, isFormShown } = this.state;

    return (
      <div>
        <UserList users={users} deleteUser={this.deleteUser}></UserList>
        {isFormShown ? (
          <Form addUser={this.addUser}></Form>
        ) : (
          <Button text="Add User" clickHandler={this.openForm}></Button>
        )}
      </div>
    );
  }
}
