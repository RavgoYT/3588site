import React from 'react'
import { Modal, Button } from "react-bootstrap";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
const BiographyModal = ({showModal, setShowModal, activeLead}) => {
	return (
		<Modal
			className="bg-gray-900/50"
			dialogClassName="modal-fullscreen rounded-modal"
			data-bs-theme="dark"
			show={showModal}
			backdrop={true}
			onHide={() => setShowModal(false)}
			centered
		>
			{/* BORDER */}
			<div
				className="relative rounded-xl p-[2px]"
				style={{
					background: "linear-gradient(90deg, #6586c7, #e23942)",
				}}
			>
				<div className="bg-gray-900/90 rounded-xl">
					<Modal.Header closeButton>
						<div
							className="w-24 h-24 rounded-full  mr-5 flex items-center justify-center cursor-pointer"
							style={{
								background: "linear-gradient(90deg, #6586c7, #e23942)",
							}}
						>
							{activeLead.picture ? (
								<img
									src={activeLead.picture.fields.file.url}
									alt={activeLead.name}
									className="w-full h-full rounded-full object-cover"
								/>
							) : (
								<div className="w-full h-full rounded-full bg-gray-300"></div>
							)}
						</div>
						<Modal.Title className="">
							{activeLead?.name} - {activeLead?.role}
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						{documentToReactComponents(activeLead?.biography)}
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={() => setShowModal(false)}>
							Close
						</Button>
					</Modal.Footer>
				</div>
			</div>
		</Modal>
	)
}

export default BiographyModal