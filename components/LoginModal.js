import {useState} from "react";
import {useDispatch} from "react-redux";
import {useAuthenticateMutation} from "@/store/api";
import {setUser} from "@/store/authSlice";
import {closeModal, setModal} from "@/store/modalSlice";
import Input from "@/components/Input";
import styles from '@/styles/LoginModal.module.scss'

export default function LoginModal() {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    const [authenticate, data] = useAuthenticateMutation()
    const dispatch = useDispatch()

    const handleForm = e => setForm({...form, [e.target.name]: e.target.value})
    const handleLogin = async () => {
        if(form.email && form.password) {
            try {
                await authenticate(form)
                localStorage.setItem('token', data.data.token)
                dispatch(setUser(form))
                dispatch(closeModal())
                console.log(data.data.token)
            } catch (e) {
                console.log(e.response?.data?.message)
            }
        }
    }

    return (
        <div className={styles.wrapper}>
            <h2>Authorization</h2>
            <Input name='email' type='text' placeholder='Email' value={form.email} setValue={handleForm}/>
            <Input name='password' type='password' placeholder='Password' value={form.password} setValue={handleForm}/>
            <button onClick={() => handleLogin()}>Log in</button>
            <div>
                <h6>Don't have an account?</h6>
                <h6 onClick={() => dispatch(setModal('register'))}>Sign in</h6>
            </div>
        </div>
    )
}