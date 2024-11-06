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
            fiscal_year_id:"",
        },
        status_of_ict_infrastructure: {
            no_of_desktop: "",
            no_of_laptop: "",
            no_of_desktop_printer: "",
            no_of_staff_use_compture_software: "",
        },
        ict_training: {
            is_conducted_training: undefined,
            reason_for_not_conducting: "",
            // ict training conducted
            total_no_of_training: "",
            total_no_of_training_beneficiaries: "",
            no_of_ict_training_lg_staffs: "",
            total_beneficieries_lg_offices: "",
            no_of_male_lg_officer: "",
            no_of_female_lg_officer: "",

            no_of_ict_disadvantage_groups: "",
            no_of_benefecieries_disadvantage_groups: "",
            no_of_male_disadvantage_group: "",
            no_of_female_disadvantage_group: "",

            no_of_ict_lg_school_or_clubs: "",
            no_of_benefecieries_ict_lg_school_or_clubs: "",
            no_of_male_ict_lg_school_or_clubs: "",
            no_of_female_ict_lg_school_or_clubs: "",

            no_of_ict_training_other_agencies: "",
            no_of_benefecieries_ict_training_other_agencies: "",
            no_of_male_ict_training_other_agencies: "",
            no_of_female_ict_training_other_agencies: "",

            have_being_using_fund_by_mofaga: false,
            mention_amount_of_fund_in_training: "",
        },
    });

    const [responseMsg, setResponseMsg] = useState("");
    const [errors, setErrors] = useState({});

    const validateStep = (stepIndex) => {
        const currentStepFields = steps[stepIndex].fields;
        const newErrors = {};

        currentStepFields.forEach((field) => {
            if (stepIndex === 0 && !data.rural_municipality_details[field]) {
                newErrors[field] = "This field is required";
            }
            if (stepIndex === 1 && !data.status_of_ict_infrastructure[field]) {
                newErrors[field] = "This field is required";
            }

            if (stepIndex === 2) {
                if (
                    field === "is_conducted_training" &&
                    data.ict_training.is_conducted_training === undefined
                ) {
                    newErrors[field] = "This field is required";
                }

                if (
                    field === "reason_for_not_conducting" &&
                    data.ict_training.is_conducted_training === false &&
                    !data.ict_training.reason_for_not_conducting
                ) {
                    newErrors[field] =
                        "This field is required if no training was conducted";
                }
                //validations for other fields in ICT Training conducted
                if (
                    data.ict_training.is_conducted_training === true &&
                    (field === "total_no_of_training" ||
                        field === "total_no_of_training_beneficiaries" ||
                        field === "no_of_ict_training_lg_staffs" ||
                        field === "total_beneficieries_lg_offices" ||
                        field === "no_of_female_lg_officer" ||
                        field === "no_of_male_lg_officer" ||
                        field === "no_of_ict_disadvantage_groups" ||
                        field === "no_of_benefecieries_disadvantage_groups" ||
                        field === "no_of_male_disadvantage_group" ||
                        field === "no_of_female_disadvantage_group" ||
                        field === "no_of_ict_lg_school_or_clubs" ||
                        field ===
                            "no_of_benefecieries_ict_lg_school_or_clubs" ||
                        field === "no_of_male_ict_lg_school_or_clubs" ||
                        field === "no_of_female_ict_lg_school_or_clubs" ||
                        field === "no_of_ict_training_other_agencies" ||
                        field ===
                            "no_of_benefecieries_ict_training_other_agencies" ||
                        field === "no_of_male_ict_training_other_agencies" ||
                        field === "no_of_female_ict_training_other_agencies") &&
                    !data.ict_training[field]
                ) {
                    newErrors[field] = "This field is required";
                }

                if (
                    data.ict_training.is_conducted_training === true &&
                    field === "have_being_using_fund_by_mofaga" &&
                    data.ict_training.have_being_using_fund_by_mofaga === undefined
                ) {
                    newErrors[field] = "This field is required";
                }
                // if (
                //     field === "mention_amount_of_fund_in_training" &&
                //     data.ict_training.have_being_using_fund_by_mofaga === false &&
                //     !data.ict_training.mention_amount_of_fund_in_training
                // ) {
                //     newErrors[field] =
                //         "This field is required";
                // }
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
