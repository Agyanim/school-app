
interface textProp{
    Text:string
}
export const SecondaryButtonComponent = ({Text}:textProp) => {
  return (
    <div className='w-full mx-auto'>
        <button className='bg-gradient-to-r from-pink-600 to-orange-600 hover:bg-gradient-to-l  font-bold text-white px-5 py-2 w-full rounded'>{Text}</button>
    </div>
  )
}
