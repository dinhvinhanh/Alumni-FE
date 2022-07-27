import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import { MODAL_TYPE } from 'utils/constants';
import Upload from '../../components/Upload';
import ProfileForm from '../../components/ProfileForm';

const style = {
  position: 'absolute',
  top: '30%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function AlumniModal({ id, open, onClose, type}) {
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        className={`mt-24 ${type !== MODAL_TYPE.FILE_UPLOAD && 'top-1/4 max-h-96 '}`}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <CloseIcon className={'float-right cursor-pointer'} onClick={onClose}/>
            <Typography id="transition-modal-title" className={'mb-6 font-bold'} variant="h6" component="h2">
              {type}
            </Typography>
            {(() => {
              switch (type) {
                case MODAL_TYPE.ADD_ALUMNI:
                  return <ProfileForm mode={'add'}/>
                case MODAL_TYPE.FILE_UPLOAD:
                  return <Upload />
                default:
                  return <ProfileForm mode={'add'}/>
              }
            })()}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
