'use client'
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {logOut} from "@/store/authSlice";
import {setModal} from "@/store/modalSlice";
import {FaDoorOpen, FaRegClock, FaUser} from "react-icons/fa6";
import styles from '@/styles/NavBar.module.scss'


export default function NavBar() {
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const logOut = () => {
        localStorage.removeItem('token')
        location.reload()
    }

    return (
        <nav className={styles.wrapper}>
            <div>

            </div>
            <div>
                <div onClick={() => dispatch(setModal(localStorage.getItem('token') ? 'orders' : 'login'))}>
                    <FaRegClock/>
                </div>
                {localStorage.getItem('token') ?
                    <div onClick={() => logOut()}>
                        <FaDoorOpen/>
                    </div> :
                    <div onClick={() => dispatch(setModal('login'))}>
                        <FaUser/>
                    </div>
                }
            </div>
        </nav>
    )
}