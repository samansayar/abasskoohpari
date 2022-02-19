import React, { useState } from 'react';
import CardService from './CardService';
import Landscape from '../../img/servicies/2.jpg';
import Estakhr from '../../img/servicies/estakhr.jpg';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
// import Vila from '../../img/servicies/vila.jpg';
const Services = () => {
    const [Loaded, setLoaded] = useState(false);
    const arry = [
        {
            titleFa: "طـراحی منـظر",
            titleEn: "LANDSCAPING DESIGN",
            image: Landscape,
            description: "ما همواره در بخش طراحی و ساخت استخر در طول سال ها با همکاری و همیاری طراحان فضای سبز مهندسان و معماران حرفه ای و نیز به کارگیری فن آوری های جدید در صنعت ساخت و ساز تلاش کرده ایم پروژه های شگرفی را که هنر و ظرافت را به اوج خود رسانده ایم را ارائه دهیم.",
        },
        {
            titleFa: "استـخـر",
            titleEn: "SWIMMING POOL",
            image: Estakhr,
            description: "فرآیند طراحی منظر ما ، با گوش دادن به نیازهای مشتری و ایده آغاز می شوداگر به دنبال فضایی دلنشین و زیبا هستید اگر می خواهید فضای محوطه شما متفاوت و منحصرترین باشد اگر از محوطه و فضاهای سبز تکراری خسته شده اید با ما تماس بگیرید ما همراه و مشاور شماییم.",
        },
        {
            titleFa: "ویــلا",
            titleEn: "VILLA",
            image: Estakhr,
            description: "مانند ویـلای رویایی شما مطابق با پلان ، ابعاد و طراحی نمای خارجی و داخلی مورد نظر شما در حداقل زمان ممکن آماده خدمت به شما می باشیم. ما طراحی ویلای شما را کاملاٌ مطابق با باغ رویایی شما بنا خواهیم کرد.",
        },
    ];
    setTimeout(() => {
        setLoaded(true)
    }, 3000);

    // clearTimeout(t/ime_loading);
    return (
        <div className="flex justify-end items-center flex-col w-full">
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-x-16 gap-y-10 place-items-center place-content-center w-full'>

                {Loaded ? arry.map(item => (
                    <CardService titleFa={item.titleFa}
                        image={item.image}
                        titleEn={item.titleEn}
                        description={item.description} />
                )) : (
                    <div class="mx-auto w-full flex justify-center lg:flex-row flex-col items-center gap-y-6 place-items-center place-content-center">
                        <div class="w-full mt-10">
                            <Skeleton width={100} height={10} count={1} />
                            <Skeleton width={350} height={250} />
                            <br />
                            <Skeleton width={300} height={15} count={2} />
                        </div>
                        <div class="w-full mt-10">
                            <Skeleton width={100} height={10} count={1} />
                            <Skeleton width={350} height={250} />
                            <br />
                            <Skeleton width={300} height={15} count={2} />
                        </div>
                        <div class="w-full mt-10">
                            <Skeleton width={100} height={10} count={1} />
                            <Skeleton width={350} height={250} />
                            <br />
                            <Skeleton width={300} height={15} count={2} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Services;
