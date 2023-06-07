function Dialog(props) {
  return (
    <section className={props.isOpen ? "dialog-section open" : "dialog-section"}>
        <div className="grid-container">
            <dialog className={props.isOpen ? "open" : ""}>
                <h2>Thank you for your Rating!</h2>
                <button class="close-dialog" onClick={props.onClose}>Close Dialog</button>
            </dialog>
        </div>
    </section>
  )
}

export default Dialog