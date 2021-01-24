let text = ''
async function getSuctitle() {
    const res = await
        
        fetch("https://www.youtube.com/api/timedtext?v=oSHXOlnmNXI&asr_langs=de%2Cen%2Ces%2Cfr%2Cit%2Cja%2Cko%2Cnl%2Cpt%2Cru&caps=asr&exp=xftt&xorp=true&xoaf=5&hl=ja&ip=0.0.0.0&ipbits=0&expire=1611527977&sparams=ip%2Cipbits%2Cexpire%2Cv%2Casr_langs%2Ccaps%2Cexp%2Cxorp%2Cxoaf&signature=57929BDB7E4FB514BF001C5B7CB5C40885D181A8.B6EA848CDB6C6222948EECD82AF70AD12BBDEAA0&key=yt8&lang=en-US&fmt=json3&xorb=2&xobt=3&xovt=3", {
        "headers": {
            "accept": "*/*",
            "accept-language": "ja,en-US;q=0.9,en;q=0.8",
            "cache-control": "no-cache",
            "dpr": "1",
            "pragma": "no-cache",
            "sec-ch-ua": "\"Google Chrome\";v=\"87\", \" Not;A Brand\";v=\"99\", \"Chromium\";v=\"87\"",
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-client-data": "CJG2yQEIo7bJAQjEtskBCKmdygEIxsLKAQisx8oBCKPNygEI3M/KAQjc1coBCJfYygEI7JjLAQiUmssBCIqcywEIqJ3LAQiqncsBGPm4ygE=",
            "x-youtube-ad-signals": "dt=1611502780618&flash=0&frm&u_tz=540&u_his=50&u_java&u_h=1080&u_w=1920&u_ah=1057&u_aw=1920&u_cd=24&u_nplug=3&u_nmime=4&bc=31&bih=946&biw=960&brdim=-278%2C-1057%2C-278%2C-1057%2C1920%2C-1057%2C960%2C1057%2C960%2C946&vis=1&wgl=true&ca_type=image&bid=ANyPxKpa4tcPUvdOljXbOc7Q3l1NL6I7oOvq8bJgatbDJDGsOWmFMr5IxmfMo2kK7YkPD-6wnSxb",
            "x-youtube-client-name": "1",
            "x-youtube-client-version": "2.20210120.08.00",
            "x-youtube-device": "cbr=Chrome&cbrand=apple&cbrver=87.0.4280.141&ceng=WebKit&cengver=537.36&cos=Macintosh&cosver=10_15_7&cplatform=DESKTOP&cyear=2013",
            "x-youtube-identity-token": "QUFFLUhqbkhEWF9ZT0EyUkRxVHhIZU1oRF81S2VaSjVvZ3w=",
            "x-youtube-page-cl": "352834919",
            "x-youtube-page-label": "youtube.desktop.web_20210120_08_RC00",
            "x-youtube-time-zone": "Asia/Tokyo",
            "x-youtube-utc-offset": "540"
        },
        "referrer": "https://www.youtube.com/watch?v=oSHXOlnmNXI",
        "referrerPolicy": "origin-when-cross-origin",
        "body": null,
        "method": "GET",
        "mode": "cors",
        "credentials": "include"
    });


    return res.json()
}

getSuctitle().then(d => {
    d.events.forEach(i => {
        let str = i.segs[0].utf8
        if (str.match(/[^.]$/)) {
            text += str + ' '
        } else {
            text += str + '\n\n'
        }

    })
    console.log(text)
})

