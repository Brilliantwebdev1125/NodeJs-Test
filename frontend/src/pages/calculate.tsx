import { useState } from "react";
import { calculateSum } from "../services/api";

const CalculateForm = () => {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [sum, setSum] = useState(null)

  const calculate = async () => {
    const result = await calculateSum(firstNumber, secondNumber);

    if (result.status === 'failed') {
      window.alert(result.data);
      return;
    }

    setSum(result.data?.sum)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Adding Two Numbers</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 mx-2 shadow rounded-lg sm:px-10">
          <div className="space-y-6">
            <div>
              <label htmlFor="First Number" className="block text-sm font-medium text-gray-700">
                First Number
              </label>
              <div className="mt-1">
                <input
                  id="first"
                  name="First Number"
                  type="number"
                  placeholder="First Number"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  value={firstNumber}
                  onChange={(event: React.FormEvent<HTMLInputElement>) => {setFirstNumber(parseInt(event?.currentTarget?.value))}}
                />
              </div>
            </div>

            <div>
              <label htmlFor="Second Number" className="block text-sm font-medium text-gray-700">
                Second Number
              </label>
              <div className="mt-1">
                <input
                  id="second"
                  name="Second Number"
                  type="number"
                  placeholder="Second Number"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  value={secondNumber}
                  onChange={(event: React.FormEvent<HTMLInputElement>) => {setSecondNumber(parseInt(event.currentTarget.value))}}
                />
              </div>
            </div>
            {
              sum == null || sum == undefined? null:
              (<div>
                <label htmlFor="First Number" className="block text-sm font-medium text-gray-700">
                  Sum result
                </label>
                <div className="mt-1">
                  <input
                    id="sum"
                    name="Sum"
                    type="number"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    value={sum}
                    disabled
                  />
                </div>
              </div>)
            }

            <div className="space-y-2">
              <button
                type="button"
                onClick={calculate}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Add Two Numbers
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CalculateForm;