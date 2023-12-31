"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const it = {
  save: 'Salva',
  selectSingle: 'Seleziona la data',
  selectMultiple: 'Seleziona le date',
  selectRange: 'Seleziona il periodo',
  notAccordingToDateFormat: inputFormat => `Il formato della data deve essere ${inputFormat}`,
  mustBeHigherThan: date => `Deve essere successivo a ${date}`,
  mustBeLowerThan: date => `Deve essere precedente a ${date}`,
  mustBeBetween: (startDate, endDate) => `Deve essere compreso tra ${startDate} - ${endDate}`,
  dateIsDisabled: 'Il giorno non è consentito',
  previous: 'Precedente',
  next: 'Successivo',
  typeInDate: 'Digita la data',
  pickDateFromCalendar: 'Scegli data dal calendario',
  close: 'Chiudi'
};
var _default = it;
exports.default = _default;
//# sourceMappingURL=it.js.map