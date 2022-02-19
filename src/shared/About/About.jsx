import React from 'react';
import { EmojiProvider, Emoji } from 'react-apple-emojis'
import emojiData from 'react-apple-emojis/lib/data.json'
import GoogleMapReact from 'google-map-react';
const About = () => {
    const defaultProps = {
        center: {
            lat: 36.568133899176075,
            lng: 51.96205965983771,
        },
        zoom: 19
    };
    return (
        <>
            <div className="flex justify-center items-center w-full">
                <p className="text-gray-600">خلاصه ای درباره فضای سبز کوهپری</p>
            </div>
            <div className="mt-8 mx-auto flex justify-center h-full items-center flex-col flex-shrink-0 text-gray-800 lg:px-2 px-0 w-full">
                <div className="mt-4 w-full h-full">
                    <EmojiProvider data={emojiData}>
                        <div class="mb-10">
                            <p className='flex justify-center items-center mt-3 pb-2 border-b w-80 text-center border-gray-400 mx-auto border-dashed lg:text-3xl text-2xl font-bold'> <Emoji name="raising-hands" width={35} /><span class="mx-3">تــیم فضای سبز کوهپری</span> <Emoji name="raising-hands" width={35} /></p>
                        </div>
                        <div className="grid grid-cols-1 gap-x-4 gap-y-8 mb-8 xl:mb-12  lg:grid-cols-2">
                            <div className="p-8 space-y-3 border-2 border-green-400 dark:border-green-300 rounded-xl cursor-pointer">
                                <Emoji name="fire" width="35" />
                                <h1 className="text-xl font-semibold text-gray-700 capitalize">بخش عمران - Civil Enginnering</h1>
                                <p className="text-gray-700 lg:text-md text-sm">
                                    شرکت نگین آذین پارت بابهره گیری از مهندسین عمران زبده وکار آزموده همگام با تکنولوژی روز دنیا در عرصه ساخت واجرا،احتمام خود را در جهت بهسازی هرچه بیشتر انواع پروژه های ساختمانی و محوطه سازی بکار گرفته است.
                                </p>
                            </div>
                            <div className="p-8 space-y-3 border-2 border-green-400 dark:border-green-300 rounded-xl cursor-pointer">
                                <Emoji name="fire" width="35" />

                                <h1 className="text-xl font-semibold text-gray-700 capitalize">معماری منظر - Landscape Design & Construction</h1>

                                <p className="text-gray-700 lg:text-md text-sm">
                                    ما با استفاده از تکنیک های مدرن طراحی، چشم اندازهای طبیعی، پایدار و سازگار با محیط زیست خلق می کنیم. افتخار ما این است که برای تقریباً یک دهه، مشتریان ما از فضاهای دل انگیزی که ما برای آنها ایجاد کرده ایم لذت می برند.
                                </p>
                            </div>
                            <div className="p-8 space-y-3 border-2 border-green-400 dark:border-green-300 rounded-xl cursor-pointer">
                                <Emoji name="fire" width="35" />

                                <h1 className="text-xl font-semibold text-gray-700 capitalize">تیم اجرایی -Executive Team</h1>

                                <p className="text-gray-700 lg:text-md text-sm">
                                    شرکت نگین آذین پارت متشکل از تیم اجرایی مجرب،فنی و هماهنگ با تکنولوژی روز دنیا بوده و افتخار دارد که با ارزش ترین منبع شرکت نیروی انسانی فعال، خلاق و مسئولیت ‌پذیر می‌باشد.
                                </p>
                            </div>
                            <div className="p-8 space-y-3 border-2 border-green-400 dark:border-green-300 rounded-xl cursor-pointer">
                                <Emoji name="fire" width="35" />
                                <h1 className="text-xl font-semibold text-gray-700 capitalize">طراحی معماری - Architectural Design</h1>
                                <p className="text-gray-700 lg:text-md text-sm">
                                    باور شرکت ما طراحی دقیق زیبا و خلاقانه ست. ما باور داریم فرصت زندگی کردن فقط یک باره،پس باید در محیطی زیبا و دلنشین زندگی کرد. تخصص طراحان ما رساندن شما به ایده آل هاست.
                                </p>
                            </div>
                        </div>
                    </EmojiProvider>
                    <div className='my-8 mt-6 rounded-md shadow-sm' style={{ height: '60vh', width: '100%' }}>
                        <GoogleMapReact
                            // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
                            defaultCenter={defaultProps.center}
                            defaultZoom={defaultProps.zoom}
                        >
                            <AnyReactComponent
                                lat={defaultProps.center.lat}
                                lng={defaultProps.center.lng}
                                text="My Marker"
                            />
                        </GoogleMapReact>
                    </div>
                    <div className='w-full grid lg:grid-cols-2 gap-y-6 gap-x-4 grid-cols-1 container px-2 place-content-center'>
                        <div className="bg-green-50 rounded-md shadow-sm text-gray-800 p-2">
                            <div className="h-10 m-2">
                                <strong className='text-green-800 text-xl'>درباره فضای سبز کوهپری</strong>
                            </div>
                            <p className='leading-6 px-2 py-2 text-green-800'>
                                شرکت فضای سبز کوهپری افتخار دارد از سایت ۱۳۸۰ تا اکنون در زمینه معماری منظر با گروهی متشکل از مهدسین عمران , معماری , معماری , باغبانی و فضای سبز ,  هماهنگ با تکنولوژی و معماری روز دنیا , خود را هم جهت با رشد و پیشرفت معماری جامعه میداند.
                            </p>
                        </div>
                        <div className="bg-green-50 rounded-md shadow-sm text-gray-800 p-2">
                            <div className="h-10 m-2">
                                <strong className='text-green-800 text-xl'>ارتباط با ما</strong>
                            </div>
                            <div className="flex justify-center items-center flex-col space-y-6">
                                <></>
                                <ul className="flex justify-start text-green-900 items-center">
                                    آدرس :‌
                                    <li className='mr-4 font-bold'>طبقه دوم دفتر کوهپری</li>
                                </ul>
                                <ul className="flex justify-start text-green-900 items-center">
                                    تلفن دفتر :‌
                                    <li className='mr-4 font-bold'>12345678910</li>
                                </ul>
                                <ul className="flex justify-start text-green-900 items-center">
                                    موبایل :‌
                                    <li className='mr-4 font-bold'>12345678910</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default About;
