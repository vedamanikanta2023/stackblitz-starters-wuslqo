import { Box, Button, Input, Typography } from '@mui/material';
import * as React from 'react';
// import * as React from 'react';

let errors = {} as any;

function LoginForm(props: any) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [activeElement, setActiveElement] = React.useState(undefined);
  const [, forceUpdate] = React.useReducer((x) => x + 1, 0);

  const firstUpdate = React.useRef(true);

  const inputChange = (e) => {
    const event = { ...e };
    const isInputValue = event?.nativeEvent?.data;
    if (isInputValue === undefined) {
      return;
    }
    const inputName = e.target.name;
    const inputValue = e.target.value;
    if (inputName === 'username') {
      setUsername(inputValue);
    } else {
      setPassword(inputValue);
    }
    setActiveElement(inputName);
  };

  const validateForm = (element) => {
    if (element === 'all' || element === 'username') {
      if (username === '') {
        errors.usernameError = 'Please enter username';
      } else {
        delete errors.usernameError;
      }
    }

    if (element === 'all' || element === 'password') {
      if (username === '') {
        errors.passwordError = 'Please enter password';
      } else {
        delete errors.passwordError;
      }
    }
    forceUpdate();

    return Object.keys(errors).length === 0;
  };

  React.useEffect(() => {
    if (firstUpdate.current) {
      errors = {};
      firstUpdate.current = false;
      return;
    }
    validateForm(activeElement);
  }, [username, password]);

  const onSubmit = () => {
    if (validateForm('all')) {
      props.setLogin(true);
    }
  };

  return (
    <Box>
      <h1>Hello there, Welcome to {props.name}'s Project</h1>
      <Box display="flex" flexDirection="Column">
        <Typography variant="label">Username</Typography>
        <Input
          value={username}
          placeholder="Enter Username here"
          autocomplet="off"
          onChange={inputChange}
          name="username"
          disableUnderline
        />
        <label>{errors.usernameError ? errors.usernameError : ' '}</label>
      </Box>
      <Box display="flex" flexDirection="Column">
        <Typography variant="label">Password</Typography>
        <Input
          value={password}
          placeholder="Enter Password here"
          autocomplet="off"
          type="password"
          onChange={inputChange}
          name="password"
          disableUnderline
        />
        <label>{errors.passwordError ? errors.passwordError : ' '}</label>
      </Box>
      <Button onClick={onSubmit}>Login</Button>
    </Box>
  );
}

export default LoginForm;
