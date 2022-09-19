import { Validators, createFormValidation } from "@lemoncode/fonk";

const validationSchema = {
    field: {
        iban: [{
            validator: Validators.required,
            message: 'Campo requerido',
        },
        {
            validator: Validators.pattern,
            customArgs: {
                pattern:
                    /[A-Z]\d{2}[ ]\d{4}[ ]\d{4}[ ]\d{4}[ ]\d{4}[ ]\d{4}|ES\d{22}/,
            },
            message: 'Introduzca un número IBAN válido',
        },
        ],
        name: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
            {
                validator: Validators.pattern,
                customArgs: {
                    pattern:
                        /^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']+[\s])+([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])+[\s]?([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])?$/,
                },
                message: 'Introduzca un nombre válido',
            },
        ],
        amount: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
            {
                validator: Validators.pattern,
                customArgs: { pattern: /[0-9]/ },
                message: 'Introduzca sólo caracteres numéricos',
            },
        ],
        concept: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
            {
                validator: Validators.pattern,
                customArgs: {
                    pattern: /[A-Za-zÁÉÍÓÚñáéíóúÑ]{2}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']/,
                },
                message: 'Introduzca un concepto correcto',
            },
        ],


        day: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
            {
                validator: Validators.pattern,
                customArgs: { pattern: /^([1-9]|[1-2]\d|3[01])$/ },
                message: 'El día tiene que estar comprendido entre 1 y 31',
            },
        ],

        month: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
            {
                validator: Validators.pattern,
                customArgs: { pattern: /^([1-9]|1[012])$/ },
                message: 'El mes tiene que estar comprendido entre 1 y 12',
            },
        ],

        year: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
        ],



        email: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
            {
                validator: Validators.email,
                message: 'Email no válido',
            },
        ],
    },
};

export const formValidation = createFormValidation(validationSchema);