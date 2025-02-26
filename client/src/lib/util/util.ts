import {DateArg, format} from 'date-fns';

export const formatDate = (date: DateArg<Date>) =>
  format(date, 'dd MMMM yyyy h:mm a');
