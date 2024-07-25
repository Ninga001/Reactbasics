import React, { useState } from "react";
 
           
const ImageUpload = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = (event) => {
    setSelectedImages([...selectedImages, event.target.files[0]]);
  };
              
  return (
    <div className="field">
      <input type="file" onChange={handleImageChange} />
      {selectedImages.map((image, index) => (
        <div key={index}>
          <p>Upload Image:</p>
          <img src={URL.createObjectURL(image)} alt="Selected" />
        </div>
      ))}
    </div>
  );
};

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
    phone: "",
    address: "",
    image: "",
    dob: ""
    };
    add = (e) =>{
      e.preventDefault();
      if (this.state.name === "" || this.state.email === "")
        {
          alert("All the fields are mandatory!");
          return;
     }
      this.props.addContactHandler(this.state);
      this.setState({name:"",email:"",phone:"",address:"",image:"",dob:""});
    };
    handleImageChange = (image) => {
      this.setState({ image });
    }
  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input 
            type="text" 
            name="name" 
            placeholder="Name" 
            value={this.state.name} onChange={ (e) => this.setState({name: e.target.value})} 
            />
          </div>
          <div className="field">
            <label>Phone</label>
            <input 
            type="text" 
            name="phone" 
            placeholder="Phone"
            value={this.state.phone} onChange={ (e) => this.setState({phone: e.target.value})} 
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input 
            type="text" 
            name="email" 
            placeholder="abc@gmail.com"
            value={this.state.email} onChange={ (e) => this.setState({email: e.target.value})} 
            />
          </div>
          <div className="field">
            <label>Address</label>
            <input 
            type="text" 
            name="address" 
            placeholder="Address" 
            value={this.state.address} onChange={ (e) => this.setState({address: e.target.value})}
            />
          </div>
          <ImageUpload onImageChange={(image) => this.setState({ image })} />
          <div className="field">
            <label>Gender</label>
            <select name="gender" className="ui dropdown">
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="field">
            <label>DOB</label>
            <input 
            type="date" 
            name="dob" 
            placeholder="DOB" 
            value={this.state.dob} onChange={ (e) => this.setState({dob: e.target.value})} 
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;