import React, {Component} from 'react';
import './AddBookPage.css';

class AddBookPage extends Component {
 state = {
   invalidForm: true,
   formData: {
     title: ''
   }
 };

 formRef = React.createRef();
 handleSubmit = e => {
   e.preventDefault();
   this.props.handleAddBook(this.state.formData);
 };

 handleChange = e => {
   const formData = {...this.state.formData, [e.target.title]: e.target.value};
   this.setState({
     formData,
     invalidForm: !this.formRef.current.checkValidity()
   });
 };

 render() {
   return (
     <div>
       <h1>Add Book</h1>
       <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
         <div className="form-group">
           <label>Search Books</label>
           <input
             className="form-control"
             title="title"
             value={this.state.formData.title}
             onChange={this.handleChange}
             required
           />
         </div>
         <button
           type="submit"
           className="btn add-button"
           disabled={this.state.invalidForm}
         >
           Add Book
         </button>
       </form>
     </div>
   );
 }
}

export default AddBookPage;