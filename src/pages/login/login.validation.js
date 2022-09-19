import { Validators, createFormValidation } from "@lemoncode/fonk";

const validationSchema = {
    field: {
        user: [
            {
                validator: Validators.required,
                message: "Campo obligatorio",
            },
            {
                validator: Validators.email,
                message: "Email no válido",
            }
        ],

        password: [{
            validator: Validators.required,
            message: "Campo obligatorio",
        }]
    }
};

export const formValidation = createFormValidation(validationSchema);