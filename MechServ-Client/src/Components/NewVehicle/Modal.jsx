

const Modal = ({dialogOpen, closeDialog, children}) => {
    return (
        <div id="modal_overlay" className={`absolute inset-0 bg-black bg-opacity-60 h-screen w-full flex justify-center items-start md:items-center pt-10 md:pt-0 transition-colors duration-1000 ${dialogOpen ? "block" : "hidden"}`}>
            <dialog open={dialogOpen} onClose={closeDialog} className={`bg-transparent flex justify-around transition-all duration-1000 ${dialogOpen ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}>
                {children}
            </dialog>
        </div>
)
}

export default Modal;