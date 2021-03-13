import { FunctionComponent } from "react";
import Button from "@material-ui/core/Button";
import { createStyles, withStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

import { InputEnums, InputsComponentTypes } from "../../../shared/types/types";
import Input from "../../../shared/ui/Input/Input";
import Spinner from "../../../shared/ui/Spinner/Spinner";

import "./Inputs.css";

const useStylesInputs = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& label.Mui-focused": {
        color: "#f0c30f"
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "#f0c30f"
      },
      "& > *": {
        margin: theme.spacing(1),
        width: "100%"
      }
    }
  })
);

const ColorButton = withStyles((theme: Theme) => ({
  root: {
    color: theme.palette.getContrastText(grey[900]),
    backgroundColor: grey[900],
    "&:hover": {
      backgroundColor: grey[800]
    }
  }
}))(Button);

const Inputs: FunctionComponent<InputsComponentTypes> = ({
  nameInputRef,
  emailInputRef,
  messageInputRef,
  buttonRef,
  submitFormHandler,
  onInputHandler,
  formValid,
  inputsError,
  isLoading
}) => {
  const classes = useStylesInputs();

  const inputsErrorFromServer: { [key: string]: string } = {};

  if (inputsError) {
    for (const obj of inputsError) {
      const key = Object.keys(obj).flat().toString();

      if (!inputsErrorFromServer[key]) {
        inputsErrorFromServer[key] = obj[key];
      }
    }
  }

  return (
    <div className="col-8 p-0">
      <form className={classes.root} noValidate autoComplete="off" onSubmit={submitFormHandler}>
        <div className="row m-0 flex-reverse">
          <div ref={nameInputRef} className="col p-0 mr-4-temp">
            <Input
              label={InputEnums.NAME}
              inputError={inputsErrorFromServer[InputEnums.NAME.toLowerCase()]}
              onInputHandler={onInputHandler}
            />
          </div>

          <div ref={emailInputRef} className="col p-0">
            <Input
              label={InputEnums.EMAIL}
              inputError={inputsErrorFromServer[InputEnums.EMAIL.toLowerCase()]}
              onInputHandler={onInputHandler}
            />
          </div>
        </div>

        <div className="row m-0 mt-5">
          <div ref={messageInputRef} className="col p-0">
            <Input
              label={InputEnums.MESSAGE}
              inputError={inputsErrorFromServer[InputEnums.MESSAGE.toLowerCase()]}
              onInputHandler={onInputHandler}
            />
          </div>
        </div>

        <div ref={buttonRef} className="row m-0 mt-5">
          <div className="p-0 d-flex align-items-center">
            <ColorButton
              variant="contained"
              size="medium"
              color="primary"
              type="submit"
              style={{ marginRight: "30px" }}
              disabled={isLoading ? isLoading : !formValid}
            >
              Send Message
            </ColorButton>

            {isLoading && <Spinner />}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Inputs;
