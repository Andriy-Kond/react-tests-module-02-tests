import { Component } from 'react';
import { nanoid } from 'nanoid';

export class Form extends Component {
  state = {
    name: '',
    email: '',
    avatar: '',
  };

  setStateValue = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { name, email, avatar } = this.state;

    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          const id = nanoid();
          const hasJOb = false;
          this.props.addUser({ name, email, avatar, id, hasJOb });

          // Очистити поля інпутів:
          // this.setState({
          //   name: '',
          //   email: '',
          //   avatar: '',
          // });
        }}
      >
        <label>
          Name
          <input
            name="name"
            type="text"
            value={name}
            onChange={this.setStateValue}
          />
        </label>

        <label>
          Email
          <input
            name="email"
            type="email"
            value={email}
            onChange={this.setStateValue}
          />
        </label>

        <label>
          Avatar
          <input
            name="avatar"
            type="url"
            value={avatar}
            onChange={this.setStateValue}
          />
        </label>

        <button type="submit">Save</button>
      </form>
    );
  }
}
