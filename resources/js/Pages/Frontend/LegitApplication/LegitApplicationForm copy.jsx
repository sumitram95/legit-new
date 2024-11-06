import { AppLayout } from "@/Layouts/AppLayout";
import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Head, Link } from "@inertiajs/react";
import steps from "./Steps";
import { useIctForm } from "./useIctForm";

export default function LegitApplicationForm({ provinces }) {
    const stepList = steps(provinces);
    const {
        activeStep,
        data,
        setData,
        handleNext,
        handleBack,
        handleReset,
        processing,
        responseMsg,
        errors,
    } = useIctForm(stepList);
    return (
        <AppLayout>
            <Head title="Watch List" />
            <div className="content-wrapper mt-5 xl:mt-0 lg:mt-0 md:relative md:top-[-60px]">
                <div className="block sm:block md:block xl:flex gap-[30px]">
                    {/* News contenet only Desktop */}
                    <div className="w-full order-2 xl:order-1">
                        <div className="w-full  md:border rounded-md bg-transparent md:bg-white lg:bg-white">
                            <div className="lg:border-b border-light-border lg:p-[16px]  pb-4 lg:px-5 flex justify-between items-center">
                                <div className="w-full">
                                    <div className="flex justify-between px-[0] md:px-[16px]  xl:block">
                                        <div>
                                            <div>
                                                <p className="font-bold text-primary-light text-lg">
                                                    LeGit Application Form
                                                </p>
                                            </div>
                                            <div>
                                                <Box className="mt-2">
                                                    {responseMsg && (
                                                        <div className="flex items-center mb-2 w-fit bg-green-400 px-6 py-1 rounded">
                                                            <span className=" font-bold">
                                                                {responseMsg}
                                                            </span>
                                                            <span>
                                                                <i className="fa-solid fa-circle-check ml-3 text-white text-xl"></i>
                                                            </span>
                                                        </div>
                                                    )}
                                                    <Stepper
                                                        activeStep={activeStep}
                                                        orientation="vertical"
                                                    >
                                                        {stepList.map(
                                                            (step, index) => (
                                                                <Step
                                                                    key={
                                                                        step.label
                                                                    }
                                                                >
                                                                    <StepLabel className=" font-bold">
                                                                        <span className=" font-bold text-[16px]">
                                                                            {
                                                                                step.label
                                                                            }
                                                                        </span>
                                                                    </StepLabel>
                                                                    <StepContent>
                                                                        <Typography>
                                                                            {React.cloneElement(
                                                                                step.component,
                                                                                {
                                                                                    data,
                                                                                    setData,
                                                                                    errors,
                                                                                }
                                                                            )}
                                                                        </Typography>
                                                                        <Box
                                                                            sx={{
                                                                                mb: 2,
                                                                            }}
                                                                            className="float-end"
                                                                        >
                                                                            <Button
                                                                                disabled={
                                                                                    index ===
                                                                                    0
                                                                                }
                                                                                onClick={
                                                                                    handleBack
                                                                                }
                                                                                sx={{
                                                                                    mt: 1,
                                                                                    mr: 1,
                                                                                    border: 1,
                                                                                }}
                                                                            >
                                                                                Back
                                                                            </Button>
                                                                            <Button
                                                                                variant="contained"
                                                                                onClick={
                                                                                    handleNext
                                                                                }
                                                                                sx={{
                                                                                    mt: 1,
                                                                                    mr: 1,
                                                                                }}
                                                                                disabled={
                                                                                    processing
                                                                                }
                                                                            >
                                                                                {activeStep ===
                                                                                stepList.length -
                                                                                    1
                                                                                    ? processing
                                                                                        ? "Submitting..."
                                                                                        : "Submit"
                                                                                    : processing
                                                                                    ? "Processing..."
                                                                                    : "Next"}
                                                                            </Button>
                                                                        </Box>
                                                                    </StepContent>
                                                                </Step>
                                                            )
                                                        )}
                                                    </Stepper>
                                                    {activeStep ===
                                                        stepList.length && (
                                                        <Paper
                                                            square
                                                            elevation={0}
                                                            sx={{ p: 3 }}
                                                        >
                                                            <Typography>
                                                                All steps
                                                                completed -
                                                                you're finished
                                                            </Typography>
                                                            <Button
                                                                onClick={
                                                                    handleReset
                                                                }
                                                                sx={{
                                                                    mt: 1,
                                                                    mr: 1,
                                                                }}
                                                            >
                                                                Reset
                                                            </Button>
                                                        </Paper>
                                                    )}
                                                </Box>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* show on small devices only (show and hide filter button) */}
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
