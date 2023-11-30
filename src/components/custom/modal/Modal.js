import  { useEffect } from "react"
import { createPortal } from "react-dom"

// Style CSS
import "./Modal.css"

export default function Modal ({ children, closeModal }) {

	// Closes the modal with the esc key
	const handleKeyup = (event) => {
		if (event.keyCode === 27) closeModal()
	}

	useEffect(() => {
		window.addEventListener("keyup", handleKeyup)
		return () => window.removeEventListener("keyup", handleKeyup)
	})

	const handleClick = (event) => {
		if (event.target === event.currentTarget) closeModal()
	}

	return createPortal(
		<div className="modal-window" onClick={handleClick}>
			<div className="modal-overlay">
				{children}
			</div>
		</div>,
		document.body
	)
}
