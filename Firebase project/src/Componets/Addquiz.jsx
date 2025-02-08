import React from 'react'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/16/solid'

export default function Addquiz() {
  return (
    <>
      <div className='w-[1200px] mx-auto '>
        <form autoComplete="off">
          <div className='text-center text-3xl mt-6 ' >
          <h2 className=" text-gray-900">Add-Quiz</h2>
          </div>

          <div className="space-y-12 mt-1 p-5 rounded-3xl  border-2 border-gray-600 ">
            

            <div className="border-b border-gray-900/10 pb-12">
              

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="col-span-full">
                  <label htmlFor="question" className="block text-sm/6 font-medium text-gray-900">
                  Question
                  </label>
                  <div className="mt-2">
                    <input
                      id="question"
                      name="question"
                      type="text"
                      placeholder="Enter Question"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label htmlFor="option_1" className="block text-sm/6 font-medium text-gray-900">
                    Option 1
                  </label>
                  <div className="mt-2">
                    <input
                      id="option_1"
                      name="option_1"
                      type="text"
                      placeholder="Option 1"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="option_2" className="block text-sm/6 font-medium text-gray-900">
                  Option 2
                  </label>
                  <div className="mt-2">
                    <input
                      id="option_2"
                      name="option_2"
                      type="text"
                      placeholder="Option 2"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label htmlFor="option_3" className="block text-sm/6 font-medium text-gray-900">
                  Option 3
                  </label>
                  <div className="mt-2">
                    <input
                      id="option_3"
                      name="option_3"
                      type="text"
                      placeholder="Option 3"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label htmlFor="option_4" className="block text-sm/6 font-medium text-gray-900">
                  Option 4
                  </label>
                  <div className="mt-2">
                    <input
                      id="option_4"
                      name="option_4"
                      type="text"
                      placeholder="Option 4"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                

                <div className="sm:col-span-3">
                  <label htmlFor="currect_answer" className="block text-sm/6 font-medium text-gray-900">
                    Currect Answer
                  </label>
                  <div className="mt-2 grid grid-cols-1">
                    <select
                      id="currect_answer"
                      name="currect_answer"
                      className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    >
                      <option value= "">Select Currect Anwser</option>
                      <option value='1'>option 1</option>
                      <option value='2'>option 2</option>
                      <option value='3'>option 3</option>
                      <option value='4'>option 4</option>
                      
                    </select>
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                    />
                  </div>
                </div>

                

                

                

                
              </div>
            </div>

            
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button type="Reset" className="text-sm/6 font-semibold text-gray-900">
              Reset
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </form>







      </div>



    </>
  )
}
