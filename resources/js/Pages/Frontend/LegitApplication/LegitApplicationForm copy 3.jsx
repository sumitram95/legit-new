import { AppLayout } from "@/Layouts/AppLayout";
import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Head } from "@inertiajs/react";
import steps from "./Steps";
import { useIctForm } from "./useIctForm";

export default function LegitApplicationForm({ provinces }) {
    const stepList = steps(provinces);
    const {
        activeStep,
        setActiveStep,
        data,
        setData,
        handleNext,
        handleBack,
        handleReset,
        processing,
        responseMsg,
        errors,
    } = useIctForm(stepList);

    const isLastStep = activeStep === stepList.length - 1;

    return (
        <AppLayout>
            <Head title="Watch List" />
            <div className="content-wrapper mt-5 xl:mt-0 lg:mt-0 md:relative md:top-[-60px]">
                <div className="block sm:block md:block xl:flex gap-[30px]">
                    <div className="w-full order-2 xl:order-1">
                        <div className="w-full md:border rounded-md bg-transparent md:bg-white lg:bg-white">
                            <div className="lg:border-b border-light-border lg:p-[16px] pb-4 lg:px-5 flex justify-between items-center">
                                <div className="w-full">
                                    <p className="font-bold text-primary-light text-lg">
                                        LeGit Application Form
                                    </p>
                                    <Box sx={{ width: '100%', mt: 2 }}>
                                        {responseMsg && (
                                            <div className="flex items-center mb-2 w-fit bg-green-400 px-6 py-1 rounded">
                                                <span className="font-bold">{responseMsg}</span>
                                                <i className="fa-solid fa-circle-check ml-3 text-white text-xl"></i>
                                            </div>
                                        )}
                                        <Stepper activeStep={activeStep} alternativeLabel>
                                            {stepList.map((step, index) => (
                                                <Step key={step.label}>
                                                    <StepLabel>{step.label}</StepLabel>
                                                </Step>
                                            ))}
                                        </Stepper>
                                        {activeStep < stepList.length ? (
                                            <Box sx={{ mt: 2 }}>
                                                <Typography>
                                                    {React.cloneElement(
                                                        stepList[activeStep].component,
                                                        { data, setData, errors }
                                                    )}
                                                </Typography>
                                                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                                    <Button
                                                        color="inherit"
                                                        disabled={activeStep === 0}
                                                        onClick={handleBack}
                                                        sx={{ mr: 1 }}
                                                    >
                                                        Back
                                                    </Button>
                                                    <Box sx={{ flex: '1 1 auto' }} />
                                                    <Button
                                                        variant="contained"
                                                        onClick={handleNext}
                                                        disabled={processing}
                                                    >
                                                        {isLastStep ? (processing ? "Submitting..." : "Submit") : "Next"}
                                                    </Button>
                                                </Box>
                                            </Box>
                                        ) : (
                                            <Box sx={{ mt: 2, textAlign: 'center' }}>
                                                <Typography>All steps completed - you're finished</Typography>
                                                <Button onClick={handleReset} sx={{ mt: 1 }}>
                                                    Reset
                                                </Button>
                                            </Box>
                                        )}
                                    </Box>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
