//Тип вопроса
export type Question = {
  id: string,
  name: string,
  tooltip?: string,
  type: 'Checkbox' | 'RadioButton' | 'DropDownList',
  isRequired: boolean,
  variables: string[],
}