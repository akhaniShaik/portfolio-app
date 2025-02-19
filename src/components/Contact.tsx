import React, { useState } from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import emailjs from 'emailjs-com';
import CustomSnackBar from './CustomSnackBar';

function Contact() {
  // State for input fields
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  // State for validation errors
  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  // State for Snackbar notifications
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">("success");

  // Function to close the Snackbar
  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  // EmailJS function to send email
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate input fields
    if (!name.trim() || !email.trim() || !message.trim()) {
      setNameError(!name.trim());
      setEmailError(!email.trim());
      setMessageError(!message.trim());
      // Show error snackbar for validation failure
      setSnackbarMessage("Validation failed: Please fill in all fields.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
      return;
    }

    // EmailJS Template Parameters
    const templateParams = {
      to_name: "Akhani",
      from_name: name,
      email: email,
      message: message,
    };

    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID || "",
        process.env.REACT_APP_TEMPLATE_ID || "",
        templateParams,
        process.env.REACT_APP_PUBLICKEY || ""
      )
      .then(
        (response) => {
          // Show success snackbar
          setSnackbarMessage("Email sent successfully!");
          setSnackbarSeverity("success");
          setSnackbarOpen(true);
          // Clear form fields after successful email send
          setName('');
          setEmail('');
          setMessage('');
          setNameError(false);
          setEmailError(false);
          setMessageError(false);
        },
        (error) => {
          console.error("FAILED...", error);
          // Show error snackbar for email failure
          setSnackbarMessage("Failed to send email. Please try again later.");
          setSnackbarSeverity("error");
          setSnackbarOpen(true);
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
      <CustomSnackBar open={snackbarOpen} message={snackbarMessage} severity={snackbarSeverity} onClose={handleCloseSnackbar} />
    </div>
  );
}

export default Contact;
