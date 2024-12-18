'use client'

import { Text } from '../../Texts/Text'
import { SelectHTMLAttributes, useState } from 'react'
import { cn } from '../../../utils/cn'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../Select/Select'

export type SelectOption = {
  label: string
  value: string
}

type LinkProps = {
  label?: string
  href?: string
}

export type InputSelectProps = {
  label?: string
  placeholder?: string
  options: SelectOption[]
  disabled?: boolean
  hasError?: boolean
  errorMessage?: string
  accessoryText?: string
  onValueChange: (value: string) => void
  defaultValue?: string
  isCheck?: boolean
  link?: LinkProps
  dark?: boolean
} & SelectHTMLAttributes<HTMLSelectElement>

type OptionListProps = Pick<InputSelectProps, 'options' | 'isCheck'>

const OptionList = ({ options, isCheck }: OptionListProps) => {
  return (
    <>
      {options.map(({ label, value }) => (
        <SelectItem
          isCheck={isCheck}
          className={cn(
            'hover:bg-primary-regular/10 cursor-pointer rounded-md transition-colors duration-300 bg-neutral-white'
          )}
          value={value}
          key={value}
        >
          <Text>{label}</Text>
        </SelectItem>
      ))}
    </>
  )
}

export const InputSelect = ({
  label,
  options,
  disabled,
  className,
  defaultValue,
  onValueChange,
  isCheck,
  id,
  placeholder,
  hasError,
  errorMessage,
  accessoryText,
  link,
  dark,
}: InputSelectProps) => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <Select
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      onOpenChange={setIsOpen}
    >
      <div data-testid="input-select-wrapper">
        <div className="flex justify-between">
          {label && (
            <label
              htmlFor={id}
              className={cn('font-semibold text-inherit mb-2', {
                'text-neutral-white': dark,
              })}
            >
              {label}
            </label>
          )}
          {link && (
            <a
              className="mb-1 text-primary-regular text-xs w-fit"
              href={link.href}
            >
              {link.label}
            </a>
          )}
        </div>
        <SelectTrigger
          disabled={disabled}
          isOpen={isOpen}
          aria-label={label}
          className={cn(
            'flex w-full cursor-pointer items-center rounded-md border bg-neutral-white sm:min-w-[320px] sm:border-solid group hover:bg-primary-light transition-colors delay-300',
            [
              hasError
                ? 'border-feedback-error text-feedback-error'
                : 'border-neutral-light text-primary-regular ',
            ],
            {
              'text-neutral-dark bg-neutral-light hover:bg-neutral-lightest':
                disabled,
            },
            { 'border-primary-regular': !disabled && !hasError },
            {
              'focus:outline-none focus:ring-2 focus:ring-primary-regular focus:ring-offset-2':
                !disabled,
            },
            {
              'bg-neutral-dark !text-neutral-white': dark,
            },
            className
          )}
          onKeyDown={(e) => {
            e.key === 'Enter'
          }}
        >
          <SelectValue aria-label="Select Value" placeholder={placeholder} />
        </SelectTrigger>
        {hasError && errorMessage && !isOpen && (
          <Text
            variant="xs/normal"
            tag="small"
            className="mt-1 text-feedback-error"
          >
            {errorMessage}
          </Text>
        )}
        {accessoryText && !errorMessage && !isOpen && (
          <Text
            variant="xs/normal"
            tag="small"
            className={cn(
              'mt-1',
              hasError ? 'text-feedback-error' : 'text-neutral-dark'
            )}
          >
            {accessoryText}
          </Text>
        )}
      </div>
      <SelectContent className={'bg-neutral-white'}>
        <OptionList options={options} isCheck={isCheck} />
      </SelectContent>
    </Select>
  )
}
