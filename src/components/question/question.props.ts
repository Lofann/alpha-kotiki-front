//Тип вопроса
export type QuestionPostProps = {
    id:number,
    name: string,
    tooltip?: string,
    // type: 'Checkbox' | 'RadioButton' | 'DropDownList',
    type: string //Пусть пока будет string, надо создать enum для хранения типов. Поле type много где используется, добавлять новый тип - ужас
    isRequired: boolean,
    variables: string[],
  }