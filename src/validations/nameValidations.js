import { isEmpty } from "../utils/validations"

export const nameValidations = (name) => {
   return !isEmpty(name) && name !== "" && name <
}

