'use client'
import {useDispatch, useSelector} from "react-redux";
import {closeModal} from "@/store/modalSlice";
import {FaX} from "react-icons/fa6";
import LoginModal from "@/components/LoginModal";
import RegisterModal from "@/components/RegisterModal";
import OrdersModal from "@/components/OrdersModal";
import styles from '@/styles/Modal.module.scss'

export default function Modal() {
    const modal = useSelector(state => state.modal)

    const dispatch = useDispatch()

    const modalBody = () => {
        switch(modal.status) {
            case 'login': return <LoginModal/>
            case 'register': return <RegisterModal/>
            case 'orders': return <OrdersModal/>
            default: return null
        }
    }

    return (
        <div
            className={styles.wrapper}
            style={ {opacity: modal.status === 'closed' && '0', pointerEvents: modal.status === 'closed' && 'none'} }
            onClick={e => dispatch(closeModal())}
        >
            <div style={ {opacity: modal.status === 'closed' && '0'} } onClick={e => e.stopPropagation()}>
                <div onClick={() => dispatch(closeModal())}>
                    <FaX/>
                </div>
                {modalBody()}
            </div>
        </div>
    )
}