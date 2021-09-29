/* function to add zero in the parts date:
   input | output:
     2   |  02
     9   |  09
     10  |  10
*/ 
const formatPartDate = datePart =>
  (String(datePart).length == 1) ? `0${datePart}` : datePart;

// function to get the current datetime
export default function createTodoDate(){
  const TodoDate = new Date()
  let parsedTodoDate

  const day = formatPartDate(TodoDate.getDate())
  const mouth = formatPartDate(TodoDate.getMonth() + 1) // +1 pois no getMonth Janeiro começa com zero.
  const year = formatPartDate(TodoDate.getFullYear())

  const hour = formatPartDate(TodoDate.getHours())
  const minute = formatPartDate(TodoDate.getMinutes())

  parsedTodoDate = `${day}/${mouth}/${year} ${hour}:${minute}`
  return parsedTodoDate;
}