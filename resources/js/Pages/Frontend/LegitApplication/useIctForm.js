// useIctForm.js
import { useState } from "react";
import { useForm } from "@inertiajs/react";

export const useIctForm = (steps) => {
    const [activeStep, setActiveStep] = useState(0);
    const {
        data,
        setData,
        post,
        processing,
        reset,
        errors: formErrors,
    } = useForm({
        rural_municipality_details: {
            provider_name: "",
            phone_no: "",
            email: "",
            province_label: "",
            district_label: "",
            local_government_lable: "",
            position: "",
        },
        status_of_ict_infrastructure: {
            no_of_desktop: "",
            no_of_laptop: "",
            no_of_desktop_printer: "",
            no_of_staff_use_compture_software: "",
        },
    });

    const [responseMsg, setResponseMsg] = useState("");
    const [errors, setErrors] = useState({});

    const validateStep = (stepIndex) => {
        const currentStepFields = steps[stepIndex].fields;
        const newErrors = {};

        currentStepFields.forEach((field) => {
            if (!data.rural_municipality_details[field] && stepIndex === 0) {
                newErrors[field] = "This field is required";
            }
            if (!data.status_of_ict_infrastructure[field] && stepIndex === 1) {
                newErrors[field] = "This field is required";
            }
        });

        return newErrors;
    };

    const handleNext = () => {
        const stepErrors = validateStep(activeStep);
        if (Object.keys(stepErrors).length > 0) {
            setErrors(stepErrors);
            return;
        }

        if (activeStep === steps.length - 1) {
            handleSubmit();
        } else {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
        reset();
        setErrors({});
    };

    const handleSubmit = async () => {
        post("/legit-aplication-form", {
            onSuccess: (page) => {
                setResponseMsg("Form submitted successfully");
                handleReset();
            },
            onError: (errors) => {
                const newErrors = {};
                Object.keys(errors).forEach((key) => {
                    const fieldKey = key.split(".").pop();
                    newErrors[fieldKey] = errors[key];
                    console.log(errors);
                });
                setErrors(newErrors);
            },
        });
    };

    return {
        activeStep,
        data,
        setData,
        handleNext,
        handleBack,
        handleReset,
        handleSubmit,
        processing,
        responseMsg,
        errors: { ...formErrors, ...errors },
    };
};
