export function generateId() {
  if (typeof window === 'undefined') {
    return crypto.randomUUID()
  } else {
    return null
  }
}
