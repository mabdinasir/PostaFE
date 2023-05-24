import { DateTime } from "luxon";
import { useCallback } from "react";

export enum DateFormatVariants {
  Short,
  Long,
  WithTime,
  Time,
  Numbers,
  WithSystemFormatTime,
}

export const useDateFormat = () => {
  const isDayMonthYearFormat = true;

  return useCallback(
    (
      value: string | DateTime | null | undefined,
      variant = DateFormatVariants.Short
    ): string => {
      if (!value) {
        return "";
      }

      const dateObj =
        typeof value === "string" ? DateTime.fromISO(value) : value;

      if (!dateObj.isValid) {
        return "";
      }

      switch (variant) {
        case DateFormatVariants.Long:
          return dateObj.toFormat(
            isDayMonthYearFormat ? "d MMMM, yyyy" : "MMMM d, yyyy"
          );
        case DateFormatVariants.WithTime:
          return dateObj.toFormat(
            isDayMonthYearFormat ? "d MMM, yyyy T" : "MMM d, yyyy T"
          );
        case DateFormatVariants.Numbers:
          return dateObj.toFormat(
            isDayMonthYearFormat ? "dd/MM/yyyy" : "MM/dd/yyyy"
          );
        case DateFormatVariants.Time:
          return dateObj.toFormat("T");
        case DateFormatVariants.WithSystemFormatTime:
          return dateObj.toFormat(
            isDayMonthYearFormat ? "d MMM yyyy h:mm a" : "MMM d yyyy h:mm a"
          );
        default:
          return dateObj.toFormat(
            isDayMonthYearFormat ? "d MMM, yyyy" : "MMM d, yyyy"
          );
      }
    },
    [isDayMonthYearFormat]
  );
};

export default useDateFormat;
