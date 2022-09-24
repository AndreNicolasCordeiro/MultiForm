import { Routes, Route} from 'react-router-dom';

import { FormStepOne } from './pages/FormStepOne';
import { FormStepTwo } from './pages/FormStepTwo';
import { FormStepThree } from './pages/FormStepThree';
import { FormStepFour } from './pages/FormStepFour';

export const MainRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<FormStepOne />} />
            <Route path="/steptwo" element={<FormStepTwo />} />
            <Route path="/stepthree" element={<FormStepThree />} />
            <Route path="/stepFour" element={<FormStepFour/>} />
        </Routes>
    );
}