import 'react-multi-carousel/lib/styles.css';
import * as React from 'react';
import { useCallback, useState } from 'react';
import AlumniTable from 'app/components/AlumniTable';
import AlumniModal from 'app/containers/AlumniModal';
import Button from '@mui/material/Button';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import AssessmentIcon from '@mui/icons-material/Assessment';
import { MODAL_TYPE } from 'utils/constants';
import { Helmet } from 'react-helmet-async';

export default function AlumniControl({ deviceType = 'desktop' }) {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState()
  const handleShowModal = useCallback((type) =>() => {
    setOpen(true);
    setType(type)
  }, []);
  const handleCloseModal = useCallback(() => {
    setOpen(false);
  }, []);
  return (
    <div className={''}>
      <Helmet>
        <title>Quản lý cựu sinh viên</title>
      </Helmet>
      <Button
        variant="outlined"
        startIcon={<ControlPointIcon />}
        className={'uppercase mb-6 ml-6 float-right hover:animate-pulse hover:text-black-200 font-bold'}
        onClick={handleShowModal(MODAL_TYPE.ADD_ALUMNI)}
      >
        Thêm cựu sinh viên
      </Button>
      <Button
        variant="outlined"
        startIcon={<AssessmentIcon />}
        className={'uppercase mb-6 float-right hover:animate-pulse hover:text-black-200 font-bold'}
        onClick={handleShowModal(MODAL_TYPE.FILE_UPLOAD)}
      >
        Upload file excel
      </Button>
      <AlumniTable onClick={handleShowModal(MODAL_TYPE.VIEW_ALUMNI)}/>
      <AlumniModal open={open} onClose={handleCloseModal} type={type} />
    </div>
  );
}
