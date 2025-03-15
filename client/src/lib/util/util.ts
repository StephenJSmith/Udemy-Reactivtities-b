import { DateArg, format, formatDistanceToNow } from "date-fns";
import { z } from "zod";

export const formatDate = (date: DateArg<Date>) =>
  format(date, "dd MMMM yyyy h:mm a");

export const timeAgo = (date: DateArg<Date>) => {
  return formatDistanceToNow(date) + ' ago';
}

export const requiredString = (fieldName: string) => z
    .string({ required_error: `${fieldName} is required` })
    .min(1, { message: `${fieldName} is required` });
