import {useReducer} from "react";
import {FaRegEye, FaRegEyeSlash} from "react-icons/fa6";
import styles from '@/styles/Input.module.scss'

export default function Input({name, type = 'text', placeholder, value, setValue, style}) {
    const [isShown, toggle] = useReducer(value => !value, false)

    return (
        <div className={styles.wrapper} style={style}>
            <input
                name={name}
                type={isShown ? 'text' : type}
                required='required'
                value={value}
                onChange={e => setValue(e)}
            />
            <span>{placeholder}</span>
            {type === 'password' &&
                <div style={{color: isShown ? '#000' : 'rgba(0, 0, 0, 0.4)'}} onClick={() => toggle()}>
                    {isShown ? <FaRegEye/> : <FaRegEyeSlash/>}
                </div>
            }
        </div>
    )
}