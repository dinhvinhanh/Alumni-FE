import 'react-multi-carousel/lib/styles.css';
import * as React from 'react';
import { useCallback, useState } from 'react';
import AlumniTable from 'app/components/AlumniTable';
import AlumniModal from 'app/components/AlumniModal';
import Button from '@mui/material/Button';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import AssessmentIcon from '@mui/icons-material/Assessment';

export default function AlumniControl({ deviceType = 'desktop' }) {
  const [open, setOpen] = useState(false);
  const handleSelectedAlumni = useCallback(() => {
    setOpen(true);
  }, []);
  const handleCloseModal = useCallback(() => {
    setOpen(false);
  }, []);
  return (
    <div>
      <Button
        variant="outlined"
        startIcon={<ControlPointIcon />}
        className={'uppercase mb-6 ml-6 float-right hover:animate-pulse hover:text-black-200 font-bold'}
        onClick={handleSelectedAlumni}
      >
        Thêm cựu sinh viên
      </Button>
      <Button
        variant="outlined"
        startIcon={<AssessmentIcon />}
        className={'uppercase mb-6 float-right hover:animate-pulse hover:text-black-200 font-bold'}
      >
        Upload file excel
      </Button>
      <AlumniTable onClick={handleSelectedAlumni}/>
      <AlumniModal open={open} onClose={handleCloseModal}/>
    </div>
  );
}
