import 'react-multi-carousel/lib/styles.css';
import * as React from 'react';
import { useCallback, useState } from 'react';
import AlumniTable from 'app/components/AlumniTable';
import AlumniModal from 'app/components/AlumniModal';

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
      <AlumniTable onClick={handleSelectedAlumni}/>
      <AlumniModal open={open} onClose={handleCloseModal}/>
    </div>
  );
}
