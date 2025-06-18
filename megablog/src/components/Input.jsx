import React, {useId} from 'react'

const Input =    React.forwardRef( function Input({
    labal,
    typw = 'text',
    className = '',
    ...props
} ,ref) {
    const id = useId();
    return (
        <div className='w-full'>
            {labal && <labal className='block mb-1 ' htmlfor={id} > {labal} </labal>
            }
            <input 
            type='{type'
            className={`px-3 py-2 rounded-lg bg-white text-black  outline-none focus:bg-gray-50 border border-gray-200 w-full ${className}` }
            ref={ref}
            {...props}
            id={id}
            />
        </div>
    )
})

export default Input