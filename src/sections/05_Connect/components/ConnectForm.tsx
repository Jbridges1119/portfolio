import React, { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
//MUI
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LoadingButton from "@mui/lab/LoadingButton";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CloseIcon from "@mui/icons-material/Close";

//Style
import { motion } from "framer-motion";
import linkedin from "../../../assets/linkedin.png";
import { usePageLocation } from "../../../hooks/pageContext";

type FormState = {
  Name: string;
  Email: string;
  Message: string;
};

type ServiceMessage = [string, string, boolean];

const Form = () => {
  const { buttonAnimate, letterAnimate } = usePageLocation();
  const initialFormState = {
    Name: "",
    Email: "",
    Message: "",
  };
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [message, setMessage] = useState<ServiceMessage>(["", "", true]);
  const [inputActive, setInputActive] = useState<boolean>(true);
  const submitForm = async (event: FormEvent) => {
    event.preventDefault();
    if (!formState.Name) return alert("Please enter your name");
    if (
      !formState.Email ||
      !formState.Email.includes("@") ||
      !formState.Email.includes(".com")
    )
      return alert("Please enter valid email so I can get back to you");
    if (!formState.Message) return alert("Please leave me a message");
    setSubmitting(true);
    await postSubmission();
  };

  const postSubmission = async () => {
    const payload = {
      ...formState,
    };
    console.log("payload", payload);

    try {
      const result = await axios.post(
        `https://formsubmit.co/ajax/jbridges1119@gmail.com`,
        payload
      );
      setMessage([
        "Message Was Sent!",
        "I'll get back to you as soon as I can.",
        true,
      ]);
      setInputActive(false);
      setFormState(initialFormState);
    } catch (error) {
      console.log(error);
      setMessage([
        "Message Has Failed!",
        "Uh oh, something went wrong. Maybe try me on linkedin or email",
        false,
      ]);
      setInputActive(false);
    }
  };

  //ChangeEvent is a generic type
  const updateFormControl = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;

    //id as keyof FormState; allows access for use in updated FormState
    const formKey = id as keyof FormState;
    const updatedFormState = { ...formState };
    updatedFormState[formKey] = value;
    setFormState(updatedFormState);
  };

  const formLabels = ["Name", "Email"];
  const formInputs = formLabels.map((item) => {
    const label = item as keyof FormState;
    return (
      <TextField
        key={label}
        id={item}
        onChange={updateFormControl}
        label={item}
        variant="outlined"
        color="secondary"
        value={formState[label]}
        required
        disabled={submitting}
      />
    );
  });

  return (
    <div>
      {inputActive ? (
        <form noValidate autoComplete="off" onSubmit={submitForm}>
          <Stack spacing={2} my={4}>
            {formInputs}
            <TextField
              id="Message"
              onChange={updateFormControl}
              label="Leave a message"
              variant="outlined"
              color="secondary"
              multiline
              rows={4}
              value={formState.Message}
              required
              disabled={submitting}
            />
<motion.div 
 initial="preHover"
 whileHover="onHover"
 whileTap="onTap"
 variants={buttonAnimate}
 style={{maxWidth: '200px',  borderRadius: 400}}
>
            <LoadingButton
              type="submit"
              sx={{
                display: "flex",
                color: "#fff",
                border: "2px solid white",
                borderRadius: 25,
                fontSize: 20,
                backgroundColor: "#7b27f6",
                width: "200px",
                pt: 0.9,
                fontWeight: "bold",
                textTransform: "none",
                ':hover':{
                  bgcolor:"#5802ff"
                }
              }}
              loading={submitting}
            >
              {"Submit".split("").map((letter, i) => {
                  return (
                    <motion.span key={i} style={{paddingInline: '0.07em'}} variants={letterAnimate}>
                      {letter}
                    </motion.span>
                  );
                })}
            </LoadingButton></motion.div>
          </Stack>
        </form>
      ) : (
        <Box
          height={"400px"}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <Stack spacing={3}>
            {message[2] ? (
              <CheckCircleOutlineIcon
                sx={{
                  color: "green",
                  fontSize: "6em",
                  height: "2em",
                  width: "100%",
                }}
              />
            ) : (
              <>
                <CloseIcon
                  sx={{
                    color: "red",
                    fontSize: "4em",
                    height: "2em",
                    width: "100%",
                  }}
                />
                <Box>
                  <motion.div className="wrap-icon">
                    <Button
                      href="https://www.linkedin.com/in/jeff-bridges-bb755a236/"
                      target="_blank"
                    >
                      <img
                        style={{ background: "#4345E8", borderRadius: 8 }}
                        src={linkedin}
                        alt={""}
                        loading="lazy"
                      />
                    </Button>
                  </motion.div>
                  <motion.div className="wrap-icon">
                    <Button
                      href="mailto:Jbridges1119@gmail.com"
                      target="_blank"
                    >
                      <MailOutlineIcon
                        sx={{ height: "50px", width: "50px", color: "#4345E8" }}
                      />
                    </Button>
                  </motion.div>
                </Box>
              </>
            )}
            <Typography mt={2} color={"#4345E8"} variant="h4">
              {message[0]}
            </Typography>
            <Typography variant="h6">{message[1]}</Typography>
          </Stack>
        </Box>
      )}
    </div>
  );
};

export default Form;
