/**
 * NẠP GAME THEO TYPE NẠP VÀ ITEM NẠP
 */

function napKimCuong(itemName) {
    var result = h_findImage(1, path + '/images/nap game/home/nap-kim-cuong.png')
    if (result[0]) {
        at.toast('___Nạp Kim Cương___')
        h_touch(result[0]['x'], result[0]['y'])
        at.usleep(2000000)

        var iconNapKimCuong = []

        if (itemName==='1-dola' || itemName==='5-dola' || itemName==='10-dola' || itemName==='20-dola') {
            iconNapKimCuong = [
                path + '/images/nap game/nap kim cuong/' + itemName +'.png',
                path + '/images/nap game/nap kim cuong/' + itemName +'-nap-lan-dau.png'
            ]
        }
        else if (itemName==='30-dola' || itemName==='50-dola' || itemName==='100-dola' || itemName==='ruong-chi-ton') {
            iconNapKimCuong = [ path + '/images/nap game/nap kim cuong/' + itemName +'.png' ]
        }
        else {
            alert('Item nạp không đúng')
            at.stop()
        }

        var result = h_findMultipleImage(1, iconNapKimCuong)

        if (result[0]) {
            h_touch(result[0]['x'], result[0]['y'])
            at.usleep(1000000)

            h_pay()
        }
        else {
            at.toast('___Không tìm thấy icon nạp ' + itemName + '___')
            at.usleep(1000000)
        }

        // Close popup nạp kim cương
        closePopup('___Close popup nạp kim cương___')
    }
    else {
        at.toast('___Không tìm thấy icon nạp kim cương___')
        at.usleep(1000000)
    }
}

function napRuongChiTon(itemName) {
    var result = h_findImage(1, path + '/images/nap game/home/nap-kim-cuong.png')
    if (result[0]) {
        at.toast('___Nạp rương chí tôn___')
        h_touch(result[0]['x'], result[0]['y'])
        at.usleep(2000000)

        if (itemName === 'ruong-chi-ton') {
            var result = h_findImage(1, path + '/images/nap game/nap kim cuong/' + itemName + '.png' )
            if (result[0]) {
                h_touch(result[0]['x'], result[0]['y'])
                at.usleep(1000000)

                var result = h_findImage(1, path + '/images/nap game/nap kim cuong/nap-ngay-ruong-chi-ton.png')
                if (result[0]) {
                    h_touch(result[0]['x'], result[0]['y'])
                }

                at.usleep(1000000)

                h_pay()

                closePopup('___Close popup nạp rương chí tôn 1___')
            }
            else {
                at.toast('___Không tìm thấy icon nạp ' + itemName + '___')
                at.usleep(1000000)
            }
        }
        else {
            alert('Item nạp không đúng')
            at.stop()
        }

        closePopup('___Close popup nạp rương chí tôn 2___')
    }
    else {
        at.toast('___Không tìm thấy icon nạp kim cương___')
        at.usleep(1000000)
    }
}

function napTheTuanTheThang(itemName) {
    var result = h_findImage(1, path + '/images/nap game/home/sanh-phuc-loi.png')
    if (result[0]){
        at.toast('___Nạp thẻ tuần, thẻ tháng___')
        h_touch(result[0]['x'], result[0]['y'])
        at.usleep(2000000)
    }
}

function napVip1Vip3(itemName) {
    var result = h_findMultipleImage(1, [
        path + '/images/nap game/home/nap-vip-1-vip-3.png',
        path + '/images/nap game/home/nap-vip-1-vip-3-b.png'
    ])

    if (result[0]) {
        at.toast('___Nạp Vip 1, Vip 3___')
        h_touch( result[0]['x'], result[0]['y'])
        at.usleep(2000000)

        // Nếu thấy nút trả phí tiếp (Khách đã đăng kí từ trước)
        var result = h_findImage(1, path + '/images/nap game/nap vip 1 vip 3/tra_phi_tiep.png') 
        if (result[0]) {
            h_touch(result[0]['x'], result[0]['y'])
            at.usleep(2000000)
        }

        var iconNapVip1Vip3 = []

        if (itemName==='vip-1' || itemName==='vip-3') {
            iconNapVip1Vip3 = [ path + '/images/nap game/nap vip 1 vip 3/' + itemName + '.png' ]
        }
        else {
            alert('Item nạp không đúng')
            at.stop()
        }

        var result = h_findMultipleImage(1, iconNapVip1Vip3)
        if (result[0]) {
            h_touch(result[0]['x'], result[0]['y'])
            at.usleep(1000000)

            h_pay()
        }
        else {
            at.toast('Không tìm thấy icon nạp ' + itemName + '___')
            at.usleep(1000000)
        }

        // Close popup nạp vip 1 vip 3
        closePopup('___Close popup nạp vip 1 vip 3___')
    }
    else {
        at.toast('___Không tìm tháy icon nạp vip 1, vip 3___')
        at.usleep(1000000)
    }
}

function closePopup(text='') {
    var result = h_findMultipleImage(1, [
        path + '/images/nap game/close popup/close-popup-nap-kim-cuong.png',
        path + '/images/nap game/close popup/close-popup-nap-vip1-vip3.png',
        path + '/images/nap game/close popup/close-popup-nap-ruong-chi-ton.png'
    ])

    if (result[0]) {
        at.toast(text)
        h_touch(result[0]['x'], result[0]['y'])
        at.usleep(2000000)
    }
    else {
        at.toast('Không tìm thấy icon close popup')
        at.usleep(2000000)
    }
}

/*------------ Run ----------*/
function napGame(){
    task.items.forEach(item => {
        if (item.type === 'nap-kim-cuong') {
            napKimCuong(item.name)
        }
        else if (item.type === 'ruong-chi-ton') {
            napRuongChiTon(item.name)
        }
        else if (item.type === 'the-tuan-the-thang') {
            napTheTuanTheThang(item.name)
        }

        else if (item.type === 'vip-1-vip-3') {
            napVip1Vip3(item.name)
        }
        else {
            alert('Kiểu nạp không đúng')
        }
    })

}

module.exports = {
    napGame
}

