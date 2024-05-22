import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";


function DeleteWorkerModal({ isOpen, onClose, onDelete }) {
    return (
        <Modal show={isOpen} size="md" onClose={onClose} popup>
            <Modal.Header />
            <Modal.Body>
                <div className="text-center">
                    <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                    <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                        Are you sure you want to delete this worker?
                    </h3>
                    <div className="flex justify-center gap-4">
                        <Button color="failure" onClick={onDelete}>
                            Yes, I am sure
                        </Button>
                        <Button color="gray" onClick={onClose}>
                            No, cancel
                        </Button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default DeleteWorkerModal;
