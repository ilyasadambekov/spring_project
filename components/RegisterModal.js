import {useState} from "react";
import {useDispatch} from "react-redux";
import {useRegisterMutation} from "@/store/api";
import {setUser} from "@/store/authSlice";
import {closeModal, setModal} from "@/store/modalSlice";
import Input from "@/components/Input";
import styles from '@/styles/LoginModal.module.scss'

export default function RegisterModal() {
    const [form, setForm] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    })
    const [register, data] = useRegisterMutation()
    const dispatch = useDispatch()

    const handleForm = e => setForm({...form, [e.target.name]: e.target.value})
    const handleRegister = async () => {
        if(form.firstname && form.lastname && form.email && form.password) {
            try {
                await register(form)
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
            <h2>Registration</h2>
            <Input name='firstname' type='text' placeholder='First name' value={form.firstname} setValue={handleForm}/>
            <Input name='lastname' type='text' placeholder='Last name' value={form.lastname} setValue={handleForm}/>
            <Input name='email' type='text' placeholder='Email' value={form.email} setValue={handleForm}/>
            <Input name='password' type='password' placeholder='Password' value={form.password} setValue={handleForm}/>
            <button onClick={() => handleRegister()}>Sign in</button>
            <div>
                <h6>Already have an account?</h6>
                <h6 onClick={() => dispatch(setModal('login'))}>Log in</h6>
            </div>
        </div>
    )
}