import Link from 'next/link';
import { Button } from '@/app/ui/button';

export default function Form() {

  return (
    <form method="POST" action="http://localhost/next-formation/back/">
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Invoice Amount */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-black">
            Choose a name
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="name"
                name="name"
                type="string"
                step="0.01"
                placeholder="Enter game name"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500 text-black"
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="desc" className="mb-2 block text-sm font-medium text-black">
            Choose a description
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="desc"
                name="desc"
                type="string"
                step="0.01"
                placeholder="Enter game desc"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500 text-black"
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="etat" className="mb-2 block text-sm font-medium text-black">
            Choose a status
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="etat"
                name="etat"
                type="string"
                step="0.01"
                placeholder="Enter game status"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500 text-black"
              />
            </div>
          </div>
        </div>

        {/* Invoice Status */}
        {/* <fieldset>
          <legend className="mb-2 block text-sm font-medium text-black">
            Set the game status
          </legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  id="pending"
                  name="status"
                  type="radio"
                  value="pending"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="pending"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  Pending
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="paid"
                  name="status"
                  type="radio"
                  value="paid"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="paid"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
                >
                  Paid
                </label>
              </div>
            </div>
          </div>
        </fieldset> */}
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/pages/dashboard"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Create Game</Button>
      </div>
    </form>
  );
}
