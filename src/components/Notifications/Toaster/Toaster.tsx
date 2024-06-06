'use client'

import { Toast, ToastProvider, ToastViewport, ViewPortVariant } from './Toast'
import { useToast } from './useToast'

export type ToasterProps = {
  position?: ViewPortVariant['position']
}

export function Toaster({ position = 'bottom/center' }: ToasterProps) {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({
        id,
        title,
        description,
        action,
        duration,
        ...props
      }) {
        return (
          <Toast
            key={id}
            {...props}
            title={title}
            description={description}
            action={action}
            duration={duration}
          />
        )
      })}
      <ToastViewport position={position} />
    </ToastProvider>
  )
}
