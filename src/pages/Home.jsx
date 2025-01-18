import image1 from '../assets/image1.png';

const Home = () => {
  return (
    <div className='bg-black text-white min-h-screen w-screen flex justify-center items-center'>
      <div className='text-center'>
        <img src={image1} alt="" className='mx-auto mb-8 w-72 h-72 rounded-full object-cover transform transition-transform duration-300 hover:scale-105' />
        
        <h1 className='text-4xl font-bold'>
          I&apos;m {" "}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
            Mohammed Abdul Hafeez Arbaz
          </span>
          , Beginner developer
        </h1>
        
        <p className='mt-4 text-lg text-gray-300'>
          I&apos;m specialized in building modern and responsive web applications.
        </p>
        
        <div className='mt-8 space-x-4'>
          <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
            Contact with me
          </button>
          <button className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
            Resume
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
