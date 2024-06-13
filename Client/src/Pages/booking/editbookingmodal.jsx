import  { useState } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function EditBookingModal({ open, onClose, booking, onSave }) {
    const [date, setDate] = useState(booking.b_date);
    const [time, setTime] = useState(booking.b_time);

    const handleSave = () => {
        onSave(booking.b_id, date, time);
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Edit Booking</DialogTitle>
            <DialogContent>
                <TextField
                    margin="dense"
                    label="Date"
                    type="date"
                    fullWidth
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <TextField
                    margin="dense"
                    label="Time"
                    type="time"
                    fullWidth
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={handleSave}>Save</Button>
            </DialogActions>
        </Dialog>
    );
}

EditBookingModal.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    booking: PropTypes.shape({
        b_id: PropTypes.number.isRequired,
        b_date: PropTypes.string.isRequired,
        b_time: PropTypes.string.isRequired,
    }).isRequired,
    onSave: PropTypes.func.isRequired,
};

export default EditBookingModal;
