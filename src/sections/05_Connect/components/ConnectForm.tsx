import { Button,  Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'


const apiKey = process.env.REACT_APP_REACT_APP_FORMSUBMIT_APIKEY;
const Form = () => {

  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [nameError, setNameError] = useState<boolean>(false)
  const [emailError, setEmailError] = useState<boolean>(false)
  const [messageError, setMessageError] = useState<boolean>(false)
const handleSubmit = (e: { preventDefault: () => void }) => {
  console.log('test1')
  e.preventDefault()
  setNameError(false)
  setEmailError(false)
  setMessageError(false)
  if (name == '') {
    setNameError(true)
  }
  if (email == '') {
    setEmailError(true)
  }
  if (message == '') {
    console.log('test2')
    setMessageError(true)
  }
  if (name && email && message) {
    console.log('test3')
    axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.post(`https://formsubmit.co/ajax/${apiKey}`, {
    name,
    email,
   message,
   _honey: '_honey'
})
    .then(response => console.log(response))
    .catch(error => console.log(error));
  } 
}



  return (
    <div>
      
<form noValidate autoComplete="off" onSubmit={handleSubmit}>
<Stack spacing={2} my={4}>
        <TextField 
          onChange={(e) => setName(e.target.value)}
          label="Name" 
          variant="outlined" 
          color="secondary" 
         value={name}
          required
          error={nameError}
        />
        <TextField 
          onChange={(e) => setEmail(e.target.value)}
          label="Email" 
          variant="outlined" 
          color="secondary" 
          value={email}
          required
          error={emailError}
        />
        <TextField sx={{borderColor: 'white'}}
          onChange={(e) => setMessage(e.target.value)}
          label="Leave a message"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
         value={message}
          required
          error={messageError}
        />

<Button
              type="submit" 
              sx={{
                display: 'inline-block',
                color: "#fff",
                border: "2px solid white",
                borderRadius: 25,
                fontSize: 18,
                backgroundColor: "#a557ff",
                maxWidth: '200px',
                

             
                fontWeight: "bold",
                
              }}
              className="btn-nav"
            >
              Submit
              </Button>

 
           </Stack>
        </form>
     
    </div>
  )
}

export default Form