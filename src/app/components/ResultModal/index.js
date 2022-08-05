import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import SuccessIcon from '../Upload/assets/success.png';
import Modal from '@mui/material/Modal';
import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ErrorIcon from '../Upload/assets/error.png';

export default function ResultModal({ type, reload }) {
  const [open, setOpen] = useState(true);
  const handleCloseModal = () => {
    setOpen(false);
    if (reload === true) {
      window.location.reload();
    }
  }

  return (
    <>
      {open && (
        <div>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={true}
            className={'mt-20'}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
            onClick={handleCloseModal}
          >
            <Fade in={true}>
              <Box className={'relative bg-gray-50 w-96 mx-auto border-2 rounded border-green-400 p-6'}>
                {/* <CloseIcon className={'float-right cursor-pointer'}/> */}
                <Typography id="transition-modal-title" className={'mb-6 font-bold'} variant="h6" component="h2">
                  {type === 'success' ? (
                    <div>
                      <img src={SuccessIcon} alt={''} className={'w-56 mx-auto'}/>
                      <h1 className={'mb-4 text-center font-bold text-2xl text-green-600'}>Thành công !</h1>
                    </div>
                  ) : (
                    <div>
                      <img src={ErrorIcon} alt={''} className={'w-36 mx-auto mb-3'}/>
                      <h1 className={'mb-4 text-center font-bold text-2xl text-red-600'}>Tải lên thất bại!</h1>
                    </div>
                  )}
                </Typography>
              </Box>
            </Fade>
          </Modal>
        </div>
       )
      }
    </>
  )
}