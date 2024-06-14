import {
  ToastContainer,
  ToastContainerProps,
  toast,
  ToastOptions,
} from 'react-toastify'

export type ToastOptionsProps = ToastOptions

export type ToastifyProps = {
  description: string
  option?: ToastOptionsProps
}

export type ToastifyProviderProps = {
  option?: ToastContainerProps
}

export const Toastify = ({ description, option }: ToastifyProps) => {
  return toast(description, option)
}

export const ToastifyProvider = ({ option }: ToastifyProviderProps) => {
  return <ToastContainer {...option} />
}
