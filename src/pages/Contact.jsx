import { FaEnvelope, FaPhone, FaMapMarkedAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className='bg-black text-white min-h-screen w-screen flex justify-center items-center' id='Contact'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <div className='flex flex-col md:flex-row items-center md:space-x-12'>
          <div className='flex-1'>
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4'>
              Let&apos;s talk
            </h3>
            <p>I&apos;m open to discuss web development projects or partnership opportunities.</p>
            <div className='mb-4'>
              <FaEnvelope className='inline-block text-green-400 mr-2' />
              <a href='mailto:Hafeez.arbaz08@gmail.com' className='hover:underline'>
                Hafeez.arbaz08@gmail.com
              </a>
            </div>
            <div className='mb-4'>
              <FaPhone className='inline-block text-green-400 mr-2' />
              <span> +91 8374423038</span>
            </div>
            <div className='mb-4'>
              <FaMapMarkedAlt className='inline-block text-green-400 mr-2' />
              <span> Hyderabad, India</span>
            </div>
          </div>

          {/* Form Section */}
          <div className='flex-1 w-full'>
            <form className='space-y-4'>
              <div>
                <label htmlFor='name' className='block mb-2'>
                  Your Name
                </label>
                <input
                  id='name'
                  type='text'
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                  placeholder='Enter Your Name'
                />
              </div>
              <div>
                <label htmlFor='email' className='block mb-2'>
                  Email
                </label>
                <input
                  id='email'
                  type='email'
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                  placeholder='Enter Your Email Address'
                />
              </div>
              <div>
                <label htmlFor='message' className='block mb-2'>
                  Message
                </label>
                <textarea
                  id='message'
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                  rows='5'
                  placeholder='Enter Your Message'
                />
              </div>
              <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'>
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
