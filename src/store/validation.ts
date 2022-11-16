class Validation {
  validateNewClient (name: string, id: string, age: number): void {
    if (name === '' || id === '' || age === 0) {
      throw new Error(`Invalid client. Name: ${name}, ID: ${id}, Age: ${age}`)
    }
  }

  validateNewTransaction (
    origin: string,
    value: number,
    description: string,
    receiver: string
  ): void {
    if (origin === '' || value === 0 || description === '' || receiver === '') {
      throw new Error(
        `Invalid transaction. Origin: ${origin}, Value: ${value}, Description: ${description}, Receiver: ${receiver}`
      )
    }
  }
}

export default Validation
