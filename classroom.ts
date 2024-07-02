function isIntergerCheck(value: number): boolean {
  let checkValue: boolean = Number.isInteger(value);
  return checkValue;
}

function add(a: number, b: number): number {
  if(isIntergerCheck(a) === false || isIntergerCheck(b) === false){
    throw new Error('매개변수 둘중 하나라도 정수가 아니라면 에러를 발생시키기');
  }
  let result:number = a + b;
  return result;
}

//*----------

try{
  const result: number = add(2, 3);
  console.log(result);

  const resultWithFloat: number = add(2.5, 3);
  console.log(resultWithFloat);
} catch(error) {
  console.error(error.message);
}