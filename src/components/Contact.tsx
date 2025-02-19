import React, { useState } from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import emailjs from 'emailjs-com';

function Contact() {
  // State for input fields
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  // State for validation errors
  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  // EmailJS function to send email
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate input fields
    if (!name.trim() || !email.trim() || !message.trim()) {
      setNameError(!name.trim());
      setEmailError(!email.trim());
      setMessageError(!message.trim());
      console.log('Validation failed: Please fill in all fields.');
      return;
    }

    // EmailJS Template Parameters
    const templateParams = {
        to_name: "Akhani",
        from_name: name,      // Sender's name
        email: email,         // Sender's email (this was missing in the email body)
        message: message,     // Message content
      };
    console.log('Sending email with params:', templateParams);
    // const SERVICE_ID = "service_nuukn8s";
    // const TEMPLATE_ID = "template_1wmn9w2";
    // const PUBLICKEY = "3qnZ2CVF3noUqqZQ0";

    emailjs.send(
        process.env.REACT_APP_SERVICE_ID || '',   // Use environment variable
        process.env.REACT_APP_TEMPLATE_ID || '',
        templateParams,
        process.env.REACT_APP_PUBLICKEY || ''
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Email sent successfully!');
          // Clear form fields after successful email send
          setName('');
          setEmail('');
          setMessage('');
          setNameError(false);
          setEmailError(false);
          setMessageError(false);
        },
        (error) => {
          console.error('FAILED...', error);
          alert('Failed to send email. Please try again later.');
        }
      );
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Get In Touch</h1>
          {/* Form for collecting user input */}
          <Box
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
            onSubmit={sendEmail}  // Handles form submission
          >
            <div className='form-flex'>
              <TextField
                required
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
              />
              <TextField
                required
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={emailError ? "Please enter your email or phone number" : ""}
              />
            </div>

            <TextField
              required
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
            />

            <Button type="submit" variant="contained" endIcon={<SendIcon />}>
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
