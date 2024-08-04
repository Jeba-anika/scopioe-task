/* eslint-disable react/prop-types */

const SInput = ({ label, name, placeholder, styles }) => {
    return (
        <div className='mt-3'>
            <label htmlFor='name ' className='font-medium'>{label}</label>
            <input type='text' name={name} className={`border border-[#E7E7E7] p-3 rounded-xl text-[#5C635A] block mt-1 ${styles}`} placeholder={placeholder} />
        </div>
    );
};

export default SInput;