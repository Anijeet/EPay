

export function Button({label, onClick}) {
  return <button onClick={onClick} type="button" class="w-full text-white bg-green-600 hover:bg-green-900 transition duration-300 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mt-2 mb-2">{label}</button>
}
