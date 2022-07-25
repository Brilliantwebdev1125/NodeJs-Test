import { post } from "../utils/axios"

export const calculateSum = async (number1: number, number2: number) => {
  const response = await post('/math/sum', {number1, number2});
  return response;
}