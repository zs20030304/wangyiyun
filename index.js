/*
 * @Author: wangshiyang
 * @Date: 2023-12-05 14:16:20
 * @LastEditors: wangshiyang
 * @LastEditTime: 2023-12-05 14:30:58
 * @Description: 请填写简介
 */
window.onload = () => {

    const url = 'http://39.103.151.139:3000/banner';

    const getData = async () => {
        const res = await axios.get(url);
        console.log(res);
        if (res.status === 200) {
            const { data: { banners } } = res;
            console.log(banners);
            const swiperWrapper = document.getElementsByClassName('swiper-wrapper')[0];
            banners.forEach(banner => {
                const { imageUrl } = banner;
                const divSwiper = document.createElement('div');
                divSwiper.className = 'swiper-slide';
                const img = document.createElement('img');
                img.src = imageUrl;
                divSwiper.appendChild(img);
                swiperWrapper.appendChild(divSwiper);
            });

            const mySwiper = new Swiper('.swiper', {
                direction: 'horizontal', // 垂直切换选项
                loop: true, // 循环模式选项

                // 如果需要分页器
                pagination: {
                    el: '.swiper-pagination',
                },

                // 如果需要前进后退按钮
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        }};
    const url1='http://39.103.151.139:8000/music/playlist';
    const getData1=async()=>{
        const res=await axios.get(url1);
        console.log(res);
        if(res.status===200){
            const {data:{playlists}}=res;
            console.log(playlists);
            const musiclist=document.getElementsByClassName("list")[0];
            const list=document.createElement("table");
            playlists.forEach((playlist)=>{
                const{coverImgUrl}=playlist;
                const{name}=playlist;
                console.log(name);
                list.className="list";
                const td=document.createElement("td");
                const p=document.createElement("p");
                p.innerHTML=name;
                const img = document.createElement('img');
                img.className="imglist";
                img.src = coverImgUrl;
                td.appendChild(img);
                td.appendChild(p);
                list.appendChild(td);
                musiclist.appendChild(list);
            })

            
        }
        
    }
    getData();
    getData1();
};