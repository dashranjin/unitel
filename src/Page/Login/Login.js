import './Login.css';
import { Button, TextField, Stack } from '@mui/material';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const username = useRef('');
    const password = useRef('');
    const navigate = useNavigate();
    const Authorize = () => {
        if (username.current.value === 'admin' && password.current.value === 'admin') {
            navigate('/dashboard');
            console.log(username.current.value, password.current.value)
        }
    }
    return (
        <div className="container">
            <div className='form'>
                <p>Нэвтрэх</p>
                <Stack spacing={1}>
                    <TextField className='input' variant="outlined" size='small' inputRef={username} label="Нэр">
                    </TextField>
                    <TextField className='input' variant="outlined" size='small' inputRef={password} label="Нууц үг">
                    </TextField>
                </Stack>
                <Button variant='contained' className='button' onClick={Authorize}>
                    Нэвтрэх
                </Button>
            </div>
        </div>
    )
}
export default Login;