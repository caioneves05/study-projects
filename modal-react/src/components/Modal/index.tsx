import style from './Modal.module.css'

interface IModal {
    isOpen: boolean
    setOpen: (isOpen: boolean) => void
}

export const Modal = ({ isOpen, setOpen }: IModal) => {

    if(isOpen) {
        return(
            <div className={style.background}>
                <div className={style.modal}>
                    <h2>Título</h2>
                    <p>Descrição</p>
                    <button onClick={() => setOpen(!isOpen)}>Close Modal</button>
                </div>
            </div>
        )
    } else {
        return (
            <></>
        )
    }
}
