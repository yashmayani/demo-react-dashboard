import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
    'Select master blaster campaign settings',
    'Create an ad group',
    'Create an ad',
];

const StepperComponent = () => {
    const [activeStep, setActiveStep] = React.useState(0); // Initialize activeStep state

    // Handle "Next" button click
    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    // Handle "Previous" button click
    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>


            <div style={{ display: "flex", justifyContent: "center", marginTop: "50px", gap: "10px" }}>
                <button onClick={handleBack} disabled={activeStep === 0} style={{ border: "none", borderRadius: "5px", padding: "10px", backgroundColor: "powderblue", cursor: "pointer", width: "10%" }}>
                    Previous
                </button>
                <button onClick={handleNext} disabled={activeStep === steps.length - 1} style={{ border: "none", borderRadius: "5px", padding: "10px", backgroundColor: "powderblue", cursor: "pointer", width: "10%" }}>
                    Next
                </button>
            </div>

        </Box>
    );
};

export default StepperComponent;
