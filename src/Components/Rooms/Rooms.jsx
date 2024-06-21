import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import "./Rooms.css";
import { BiCopy } from "react-icons/bi";

const Rooms = () => {
    const [showJoinModal, setShowJoinModal] = useState(false);
    const [showCreateModal, setShowCreateModal] = useState(false);

    const roomId = "556fvp89"; // Example room ID, you can dynamically generate this as needed
    
    const handleCopy = () => {
        navigator.clipboard.writeText(roomId);
        alert("Room ID copied to clipboard");
    };

    return (
        <div className="rooms">
            <button onClick={() => setShowJoinModal(true)} className="btn join-room">Join room</button>
            <button onClick={() => setShowCreateModal(true)} className="btn create-room">Create room</button>

            <Modal show={showJoinModal} onClose={() => setShowJoinModal(false)}>
                <h2>Enter room ID :</h2>
                <input type="text" placeholder="Room ID" />
                <button className="join-button">Join</button>
            </Modal>

            <Modal show={showCreateModal} onClose={() => setShowCreateModal(false)}>
                <div className="room-id-container">
                    <input type="text" value={`Room ID: ${roomId}`} readOnly />
                    <button className="copy-button" onClick={handleCopy}>
                     <BiCopy />
                    </button>
                </div>
                <p>Share room with your mates to join</p>
            </Modal>
        </div>
    );
}

export default Rooms;

