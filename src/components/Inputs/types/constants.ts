export enum ErrorInputFileTypes {
  FileInvalidType = 'file-invalid-type',
  FileTooLarge = 'file-too-large',
  FileTooSmall = 'file-too-small',
  TooManyFiles = 'too-many-files',
}

export const errorInputFileMessages: Record<ErrorInputFileTypes, string> = {
  [ErrorInputFileTypes.FileInvalidType]: 'Invalid file type',
  [ErrorInputFileTypes.FileTooLarge]: 'File is too large',
  [ErrorInputFileTypes.FileTooSmall]: 'File is too small',
  [ErrorInputFileTypes.TooManyFiles]: 'Too many files',
}
