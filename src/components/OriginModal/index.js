import { useState } from 'react';
import { Modal, Button, ButtonGroup, ToggleButton } from 'react-bootstrap';

export default function OriginModal({
    visible,
    defaultValue,
    handleClick,
    handleClose,
}) {
    const [value, setValue] = useState(defaultValue);
    const options = [
        { name: 'Api', value: 'http://dummy.restapiexample.com/api/v1/' },
        { name: 'Back', value: 'http://localhost:8080/' },
    ];

    const clickEvent = (e) => {
        e.preventDefault();
        handleClick(value);
    };
    return (
        <Modal show={visible} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Change data origin</Modal.Title>
            </Modal.Header>
            <Modal.Body className='center-items'>
                {defaultValue && (
                    <ButtonGroup className="mb-2">
                        {options.map((radio, idx) => (
                        <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            variant="secondary"
                            name="radio"
                            value={radio.value}
                            checked={value === radio.value}
                            onChange={(e) => setValue(e.currentTarget.value)}
                        >
                            {radio.name}
                        </ToggleButton>
                        ))}
                    </ButtonGroup>
                )}
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={clickEvent}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
    );
}