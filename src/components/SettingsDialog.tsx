const SettingsComponent = () => {
    return ( 
        <>
            <h2 className="text-lg font-semibold my-3">Theme: </h2>
                <button data-set-theme="light" data-act-class="ACTIVECLASS">light</button>
                <button data-set-theme="dark" data-act-class="ACTIVECLASS">dark</button>
        </>
    );
}

const SettingsDialog = (props: {open: boolean, closeDialog: (()=>void)}) => {
    return (
        <dialog className="modal" open={props.open}>
        {/* This allows us to close the modal by clicking out */}
        <form method="dialog" className="modal-backdrop">
            <button onClick={props.closeDialog}>close</button>
        </form>
        <form method="dialog" className="modal-box">
            {/* This Button allows us to close the modal by clicking the x */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={props.closeDialog}>✕</button>
            {/* This is the body of the modal */}
            <SettingsComponent/>
        </form>
    </dialog>
    )
}

export default SettingsDialog;