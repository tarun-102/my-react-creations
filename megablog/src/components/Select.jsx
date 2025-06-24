import React, {useId} from 'react'

function Select({
    option,
    labal,
    className,
    ...props

}, ref) {
  const id = useId();
  return (
    <div className='w-full '>
      {labal && <labbal htmlFor={id} className=''></labbal>}
      <select {...props}
      id={id}
      ref={ref}
      className={`px-3 py-2 rounded-lg bg-white  text-black outline-none focus:bg-gray-50  duration-200 border border-gray-200 w-full ${className}`}
      >
        {option?.map((option) => (
          <option key={option}>
            {option}
          </option>
        ))}
      </select>

    </div>
  )
}

export default  React.forwardRef(Select)