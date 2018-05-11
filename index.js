const puppeteer = require('puppeteer');
const download = require('image-downloader');

(async() => {

    for (var i = 0; i < 6000; i++) {
    	var start = new Date().getTime();
	    const browser = await puppeteer.launch({ headless: true });
    	console.log('Mo');
	    const page = await browser.newPage();
	    const url = 'http://uitcode.blogspot.com';
	    await page.goto(url);
	    console.log('Da xong');
	    await browser.close();
	    console.log('Dong');
	    console.log('=====' + i + '======');
	    var end = new Date().getTime();
		var time = end - start;
	    console.log(time);
	    console.log('=====' + i + '======');
    }
})();





// const puppeteer = require('puppeteer');
// const download = require('image-downloader');

// (async() => {
//     const browser = await puppeteer.launch({ headless: false });
//     console.log('Browser openned');
    
//     const page = await browser.newPage();
//     const url = 'http://www.xemanh.net/duong-len-tien-ca%CC%89nh-cu%CC%A3c-sexy';
//     await page.goto(url);
//     console.log('Page loaded');

//     const imgLinks = await page.evaluate(() => {
//         let imgElements = document.querySelectorAll('img');
//         imgElements = [...imgElements];
//         let imgLinks = imgElements.map(i => i.getAttribute('src'));
//         return imgLinks;
//     });
//     console.log(imgLinks);

//     // Tải các ảnh này về thư mục hiện tại
//     await Promise.all(imgLinks.map(imgUrl => download.image({
//         url: imgUrl,
//         dest: __dirname
//     })));

//     await browser.close();
// })();







// const puppeteer = require('puppeteer');
// const download = require('image-downloader');

// (async () => {
//   const browser = await puppeteer.launch({ headless: false });
//   console.log('Browser openned main');
//   const page = await browser.newPage();
//   page.setViewport({ width: 1280, height:720 });
//   await page.goto('http://www.xemanh.net', { waitUntil: 'networkidle2' });
//   console.log('Page load http://www.xemanh.net');
// 	const imgLinksPage = await page.evaluate(() => {
// 	    let imgElementsPage = document.querySelectorAll('.read-more');
//       imgElementsPage = [...imgElementsPage];
//       let imgLinksPage = imgElementsPage.map(i => i.getAttribute('href'));
//       console.log(imgLinksPage);

// 			(async() => {
// 			    const browserPage = await puppeteer.launch({ headless: false });
// 			    console.log('Browser openned');
			    
// 			    const pageImage = await browserPage.newPage();
// 			    // const url = 'http://www.xemanh.net/duong-len-tien-ca%CC%89nh-cu%CC%A3c-sexy-phan-2';
// 			    await pageImage.goto(imgLinksPage);
// 			    console.log('Page loaded detail');

// 			    const imgLinks = await pageImage.evaluate(() => {
// 			        let imgElements = document.querySelectorAll('img');
// 			        imgElements = [...imgElements];
// 			        let imgLinks = imgElements.map(i => i.getAttribute('src'));
// 			        return imgLinks;
// 			    });
// 			    // console.log(imgLinks);

// 			    // Tải các ảnh này về thư mục hiện tại
// 			    await Promise.all(imgLinks.map(imgUrl => download.image({
// 			        url: imgUrl,
// 			        dest: __dirname
// 			    })));

// 			    await browser.close();
// 			})();
// 	});
//   await browser.close();
// })();



// const puppeteer = require('puppeteer');
// const download = require('image-downloader');

// (async() => {
//     const browser = await puppeteer.launch();
//     console.log('Browser openned');
//     const page = await browser.newPage();
//     const url = 'http://kenh14.vn/ai-roi-cung-khac-cac-hot-girl-nay-cung-khong-ngoai-le-khi-vong-1-cu-ngay-cang-phong-phao-20171207193958533.chn';
//     await page.goto(url);
//     console.log('Page loaded');

//     const imgLinks = await page.evaluate(() => {
//         let imgElements = document.querySelectorAll('.sp-img-zoom > img, .sp-img-lightbox > img, .detail-img-lightbox > img');
//         imgElements = [...imgElements];
//         let imgLinks = imgElements.map(i => i.getAttribute('src'));
//         return imgLinks;
//     });
//     console.log(imgLinks);

//     // Tải các ảnh này về thư mục hiện tại
//     await Promise.all(imgLinks.map(imgUrl => download.image({
//         url: imgUrl,
//         dest: __dirname
//     })));

//     await browser.close();
// })();