// import React from 'react';
// var axios = require("axios");

// class Form extends React.Component {
//   state = {userName: ''}
//   handleSubmit = (event) => {
//     event.preventDefault();
//     // ajax... can use FETCH or AXIOS
//     axios.get(`https://api.github.com/users/${this.state.userName}`)
//     .then(resp => {
//       console.log(resp);
//       this.props.onSubmit(resp.data);
//       this.setState({ userName: ''});
//     });
//   };
//   render() {
//     return(
//       <form id="githubform" onSubmit={this.handleSubmit}>
//         <div class="mdl-textfield mdl-js-textfield">
//         <input type="text" class="mdl-textfield__input"
//          // ref={(input) => this.userNameInput = input}
//          value={this.state.userName}
//          onChange={(event) => this.setState({ userName: event.target.value})}
//          placeholder="Github username" required /><br /><br /><br />
//         <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--primary" type="submit">Add Card</button>
//         </div>
//       </form>
//     )
//   }
// }
// export default Form;