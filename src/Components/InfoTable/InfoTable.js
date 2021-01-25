import React, { Component } from 'react'
import './InfoTable.css'


var str = ''

class infoTable extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            list: [],
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
                    <label>First Name: <input className='FirstName' placeholder="Coder" onInput={this.inputChange} value={this.state.FirstName} /> </label>
                    <label>Last Name: <input className='LastName' placeholder="Byte" onInput={this.inputChange} value={this.state.LastName} />   </label>
                    <label>Phone #: <input className='PhoneNumber' placeholder="8885559999" onInput={this.inputChange} value={this.state.PhoneNumber} /></label>
                    <button className='submitButton' onClick={this.submit}> Submit </button>                    
                </div>
                <div className='textOutput'>    
                    <div className='col'>           
                    <h1>  First Name </h1>                     
                    {this.state.savedFirstName} 
                    </div>     
                    <div className='col'> 
                    <h1>  Last Name </h1> 
                    {str =   this.state.savedLastName} 
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
