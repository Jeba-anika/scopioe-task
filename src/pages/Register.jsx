import { Link } from 'react-router-dom';
import RegisterImg from '../assets/Rectangle 9593.png';
import SInput from '../components/Common/SInput';
import SPasswordField from '../components/Common/SPasswordField';
const Register = () => {
    return (
        <div className='m-28 flex justify-center items-center gap-[121px]'>
            <div className='w-[450px]'>
                <h2 className="logo mb-4">LOGO</h2>
                <div className="poppins font-semibold text-[30px] leading-[24px] mb-3">Sign In To Your Account</div>
                <p className="poppins text-[16px] leading-[28px] text-[#5C635A] text-left">Welcome Back! By click the sign up button, you&apos;re agree to Zenitood Terms and Service and acknlowledge the</p>
                <Link to='/' className="poppins text-[16px] leading-[28px] text-[#4285F3] hover:underline" >Privacy and Policy</Link>

                <form className='poppins'>
                    <SInput label={'Name'} name='name' placeholder={'@username'} styles='w-full' />
                    <SInput label={'Email'} name='email' placeholder={'Enter your email'} styles='w-full' />
                    <SPasswordField label={'Password'} name='password' placeholder={'Enter your password'} />
                    <SPasswordField label={'Confirm Password'} name='password' placeholder={'Re-Type password'} />
                    <div className='mt-3 flex items-center gap-2'>
                        <input type='checkbox' />
                        <label className='text-[#4285F3]'>Accept Terms of Service</label>
                    </div>
                    <div className=" w-full text-center">
                        <button type='submit' className='bg-[#4285F3] py-4 px-28 text-white font-semibold rounded-lg mt-10 mb-4'>Sign up</button>
                        <div>Already Have an Account? Log in</div>
                    </div>
                </form>
            </div >
            <div className='relative w-[648px]'>
                <img src={RegisterImg} alt='Register' />
                <div className='absolute py-8 px-9 top-[332px] left-[180px] bg-black opacity-70 rounded-lg leading-8 text-center text-[22px]'>
                    <div className='text-[#156BCA]  font-semibold'>Create Account</div>
                    <div className='text-white font-medium'>Fill in Your Information</div>
                </div>
            </div>
        </div >
    );
};

export default Register;
