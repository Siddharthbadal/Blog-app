

export const validateContactFields = (value: unknown, maxLength: number) => {
    if (!value || typeof value !== 'string'){
      return {
        error: false
      }
      return true;
    }
  }