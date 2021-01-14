import React, { Component } from 'react'
import './InfoTable.css'



class infoTable extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            showOutPut: true,
        }
    }
    inputChange = (event) => {
        console.log(this.state)
        this.setState({ [event.target.className]: event.target.value })        
    }

    submit = () => {
        this.setState({ 
        FirstName: '',
        LastName: '',
        PhoneNumber: '',
        savedFirstName: this.state.FirstName,    
        savedLastName: this.state.LastName,    
        savedPhoneNumber: this.state.PhoneNumber    
    })
        const FirstName = this.state.FirstName;
       console.log(this.state.FirstName)
       console.log(this.state.LastName)
       console.log(this.state.PhoneNumber)
    }


    render = () => {
        return (
            <>
                <div className='infoTableContainer'>                          
                    <label>First Name: <input className='FirstName' onInput={this.inputChange} value={this.state.FirstName} /> </label>
                    <label>Last Name: <input className='LastName' onInput={this.inputChange} value={this.state.LastName} />   </label>
                    <label>Phone #: <input className='PhoneNumber' onInput={this.inputChange} value={this.state.PhoneNumber} /></label>
                    <button className='submitButton' onClick={this.submit}> Submit </button>                    
                </div>
                <div className='textOutput'>    
                    <div className='col'>           
                    <h1>  First Name </h1>                     
                    {this.state.savedFirstName} 
                    </div>     
                    <div className='col'> 
                    <h1>  Last Name </h1> 
                    {this.state.savedLastName} 
                    </div> 
                    <div className='col'> 
                    <h1>  Phone Number </h1> 
                    {this.state.savedPhoneNumber}
                    </div> 
                </div>

            </>
        )
    }
}

export default infoTable
