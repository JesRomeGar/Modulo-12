import { onUpdateField, onSubmitForm, onSetError, onSetFormErrors, onSetValues } from '../../common/helpers';
import { setAccountOptions } from './transfer.helpers';
import { formValidation } from './transfer.validations';
import { getAccountList, insertTransfer } from './transfer.api';
import { history } from '../../core/router';

const params = history.getParams();

getAccountList().then((accountList) => {
  setAccountOptions(accountList, params.id);
});

let transfer = {
  id: '',
  select: '',
  iban: '',
  name: '',
  amount: '',
  concept: '',
  notes: '',
  day: '',
  month: '',
  year: '',
  date: '',
  email: '',
};


onUpdateField('select-account', event => {
  const value = event.target.value;
  transfer = { ...transfer, select: value };
  formValidation
    .validateField('select-account', transfer.select)
    .then((result) => {
      onSetError('select-account', result);
    });
});

onUpdateField('iban', event => {
  const value = event.target.value;
  transfer = { ...transfer, iban: value };
  formValidation
    .validateField('iban', transfer.iban)
    .then((result) => {
      onSetError('iban', result);
    });
});

onUpdateField('name', (event) => {
  const value = event.target.value;
  transfer = { ...transfer, name: value };
  formValidation
    .validateField('name', transfer.name)
    .then((result) => {
      onSetError('name', result);
    });
});

onUpdateField('amount', (event) => {
  const value = event.target.value;
  transfer = { ...transfer, amount: value };
  formValidation
    .validateField('amount', transfer.amount)
    .then((result) => {
      onSetError('amount', result);
    });
});

onUpdateField('concept', (event) => {
  const value = event.target.value;
  transfer = { ...transfer, concept: value };
  formValidation
    .validateField('concept', transfer.concept)
    .then((result) => {
      onSetError('concept', result);
    });
});

onUpdateField('notes', (event) => {
  const value = event.target.value;
  transfer = { ...transfer, notes: value };
});

onUpdateField('day', (event) => {
  const value = event.target.value;
  transfer = { ...transfer, day: value, date: `${value}-${transfer.month}-${transfer.year}` };
  formValidation
    .validateField('day', transfer.day)
    .then((result) => {
      onSetError('day', result);
    });
});

onUpdateField('month', (event) => {
  const value = event.target.value;
  transfer = { ...transfer, month: value, date: `${transfer.day}-${value}-${transfer.year}`  };
  formValidation
    .validateField('month', transfer.month)
    .then((result) => {
      onSetError('month', result);
    });
});

onUpdateField('year', (event) => {
  const value = event.target.value;
  transfer = { ...transfer, year: value, date: `${transfer.day}-${transfer.month}-${value}` };
  formValidation
    .validateField('year', transfer.year)
    .then((result) => {
      onSetError('year', result);
    });
});

onUpdateField('email', (event) => {
  const value = event.target.value;
  transfer = { ...transfer, email: value };
  formValidation
    .validateField('email', transfer.email)
    .then((result) => {
      onSetError('email', result);
    });
});

onSubmitForm('transfer-button', () => {
  formValidation.validateForm(transfer).then((result) => {
    onSetFormErrors(result);
    if (result.succeeded) {
      insertTransfer(transfer).then(response => {
        history.back()
      });
    };
  });

});