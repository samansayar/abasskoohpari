import React from 'react';
import About from './shared/About/About';
import Blocklink from './shared/BlockLink';
import Card from './shared/Category/Card';
import Section from './shared/Portfolio/Section';
import Services from './shared/Services/Services';
import { motion } from "framer-motion";
function App() {
  const style = {
    Button: "z-50 transform hover:scale-105 lg:text-md w-5/12 text-sm px-6 py-3 bg-gradient-to-r hover:to-green-800 hover:from-green-500 rounded-md shadow-lg shadow-green-900 transition duration-150 hover:bg-white hover:shadow-xl  from-indigo-500 to-indigo-700",
  }
  return (
    <div className="App text-white overflow-x-hidden">
      <div className='bg-header w-full overflow-hidden lg:px-4 px-3 pb-10 h-[550px]'>
        <div class="absolute inset-0 z-10 h-[550px] bg-clip w-full bg-green-700 bg-opacity-80"></div>
        <div className='flex z-50' >
          <div className='h-20 w-full flex justify-center items-center flex-col z-40' >
            <motion.h3 initial={{ scale: 0 }} transition={{ type: "spring", stiffness: 100, duration: 0.8, delay: .4 }} animate={{ scale: 1.1 }} class="text-white text-center lg:text-2xl text-4xl font-lale z-50">فضای سبز عباس کوهپری </motion.h3>
          </div>
        </div>
        <div className='flex justify-center items-center w-full mt-10 z-50'>
          <div className="grid grid-cols-4 gird z-50 transform skewx-[20] gap-y-2 gap-x-2 place-content-center place-items-center">
            <motion.div initial={{ scale: 0 }} transition={{ duration: .4, delay: .5 }} animate={{ scale: 1 }}>
              <Blocklink title="صفحه اصلی" route="#" />
            </motion.div>
            <motion.div initial={{ scale: 0 }} transition={{ duration: .4, delay: .8 }} animate={{ scale: 1 }}>
              <Blocklink title="درباره ما" route="#" />
            </motion.div>
            <motion.div initial={{ scale: 0 }} transition={{ duration: .4, delay: 1.2 }} animate={{ scale: 1 }}>
              <Blocklink title="خدمات ما" route="#" />
            </motion.div>
            <div></div>
            <div></div>
            <motion.div initial={{ scale: 0 }} transition={{ duration: .4, delay: 1.5 }} animate={{ scale: 1 }}>
              <Blocklink title="نمونه کارها" route="#" />
            </motion.div>
            <motion.div initial={{ scale: 0 }} transition={{ duration: .4, delay: 1.8 }} animate={{ scale: 1 }}>
              <Blocklink title="ارتباط با ما" route="#" />
            </motion.div>
            <motion.div initial={{ scale: 0 }} transition={{ duration: .4, delay: 2.1 }} animate={{ scale: 1 }}>
              <Blocklink title="مقالات" route="#" />
            </motion.div>
          </div>
        </div>
        <div className='mt-10 flex justify-start items-center flex-col w-full'>
          <h3 className='font-bold text-3xl text-center first-letter:text-4xl z-50 first-letter:text-white'><span class="text-3xl text-green-100">#</span> فضای_سبز_کوهپری
            <br />
            <span className='mt-2 text-2xl text-center'>طراح و ایده پرداز</span>
          </h3>
        </div>
        <div className='mt-10 flex justify-center space-x-4 items-center w-full z-50'>
          <div></div>
          <motion.button className={style.Button} 
          initial={{ opacity: 0  }} 
          transition={{
            duration: .7,
            delay: 1.8,
            default: { duration: 2 },
          }} animate={{ opacity: 1 }}>
            درباره ما
          </motion.button>
          <motion.button className={style.Button} 
          initial={{ opacity: 0  }} 
          transition={{
            duration: .7,
            delay: 1.8,
            default: { duration: 2 },
          }} animate={{ opacity: 1 }}>
            ثبت سفارش
          </motion.button>
        </div>
      </div>
      <div className='container w-full'>
        <div class="my-3 px-2 text-gray-800">
          <div>
            <p className='mt-3 pb-2 border-b w-40 text-center border-gray-400 mx-auto border-dashed lg:text-3xl text-2xl font-bold'>خدمات ما</p>
          </div>
          <div class="w-full flex justify-center items-center mb-40">
            <Services />
          </div>
        </div>

        <div class="my-4 px-2 text-gray-800">
          <div>
            <p className='mt-3 pb-2 border-b w-40 text-center border-gray-400 mx-auto border-dashed lg:text-3xl text-2xl font-bold'>خدمات ما</p>
          </div>
          <div class="mt-4 grid lg:grid-cols-4 gap-y-4 gap-x-2 grid-cols-3 place-items-center my-2 px-2">
            <Card title="استخر" />
            <Card title="آبنما" />
            <Card title="آلاچیق" />
            <Card title="محوطه سازی" />
            <Card title="روف گاردن" />
            <Card title="فضای سبز" />
            <Card title="رستوران" />
            <Card title="تالار و باغ" />
          </div>
        </div>
        {/* <div className='h-[.4px] container my-10 w-96 mx-auto bg-gray-200'></div> */}
        <div class="mt-16 mx-auto flex justify-center h-full items-center flex-col flex-shrink-0 text-gray-800 lg:px-2 px-0 w-full">
          <div>
            <p className='mt-3 pb-2 border-b w-40 text-center border-gray-400 mx-auto border-dashed lg:text-3xl text-2xl font-bold'>نمونه کار ها</p>
          </div>
          <div class="mt-4 w-full h-full">
            <Section />
          </div>
          {/* <div class="h-screen"></div> */}
        </div>
        <div class="mt-16 mx-auto flex justify-center h-full items-center flex-col flex-shrink-0 text-gray-800 lg:px-2 px-0 w-full">
          <div>
            <p className='mt-3 pb-2 border-b w-40 text-center border-gray-400 mx-auto border-dashed lg:text-3xl text-2xl font-bold'>درباره ما</p>
          </div>
          <div class="mt-4 w-full h-full">
            <About />
          </div>
          {/* <div class="h-screen"></div> */}
        </div>
      </div>
    </div >

  );
}

export default App;
