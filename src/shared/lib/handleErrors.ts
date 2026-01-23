import {toast} from "react-toastify";
import type {FetchBaseQueryError} from "@reduxjs/toolkit/query";
import {isErrorWithProperty} from "@/shared/lib/isErrorWithProperty.ts";
import {isErrorWithDetailArray} from "@/shared/lib/isErrorWithDetailArray.ts";
import {trimToMaxLength} from "@/shared/lib/trimToMaxLength.ts";

export const handleErrors = (error: FetchBaseQueryError) => {
  if (error) {
    switch (error.status) {
      case 'FETCH_ERROR':
      case 'PARSING_ERROR':
      case 'CUSTOM_ERROR':
      case 'TIMEOUT_ERROR':
        toast(error.error, { type: 'error', theme: 'colored' })
        break

      case 400:
      case 403:
        if (isErrorWithDetailArray(error.data)) {
          toast(trimToMaxLength(error.data.errors[0].detail), { type: 'error', theme: 'colored' })
        } else {
          toast(JSON.stringify(error.data), { type: 'error', theme: 'colored' })
        }
        break

      case 404:
        if (isErrorWithProperty(error.data, 'error')) {
          toast(error.data.error, { type: 'error', theme: 'colored' })
        } else {
          toast(JSON.stringify(error.data), { type: 'error', theme: 'colored' })
        }
        break

      case 401:
      case 429:
        if (isErrorWithProperty(error.data, 'message')) {
          toast(error.data.message, { type: 'error', theme: 'colored' })
        } else {
          toast(JSON.stringify(error.data), { type: 'error', theme: 'colored' })
        }
        break

      default:
        if (error.status >= 500 && error.status < 600) {
          toast('Server error occurred. Please try again later.', {
            type: 'error',
            theme: 'colored',
          })
        } else {
          toast('Some error occurred', { type: 'error', theme: 'colored' })
        }
    }
  }
}