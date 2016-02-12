/**
 * Calendar Picker Component
 * By Stephani Alves - April 11, 2015
 */
'use strict';

module.exports = {
  WEEKDAYS: [
    'Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'
  ],
  MONTHS: [
    'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz',
    'Auğustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
  ],
  MAX_ROWS: 7,
  MAX_COLUMNS: 7,
  getDaysInMonth: function(month, year) {
    var lastDayOfMonth = new Date(year, month + 1, 0);
    return lastDayOfMonth.getDate();
  },
};
