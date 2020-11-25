const { usleep, toast, rootDir } = at
const { outGame } = require(path + '/process/out-game')

/**
 * Nếu hiện thông báo sẽ tắt thông báo
 */
function tatThongBao() {
    const result = h_findMultipleImage(1, [
        path + '/images/close popup/close_thong_bao_vao_game.png',
        path + '/images/close popup/close-thong-bao-home-game.png',
        path + '/images/close popup/nhap-quay-ve-home-game.png',
    ])

    if (result[0]) {
        toast('___Tắt thông báo___')

        usleep(500000)

        h_touch(result[0]['x'], result[0]['y'])

        usleep(1000000)
    }

}

/**
 * Bấm đổi acc để bật popup đăng nhập
 */
function doiAcc() {
    const result = h_findImage(1, path + '/images/login/doi_acc.png')
    if (result[0]) {
        toast('___Đổi Acc___')
        usleep(500000)
        h_touch(result[0]['x'], result[0]['y'])
        usleep(4000000)
    }
    else {
        toast('Không tìm thấy nút Đổi Acc')
        usleep(1000000)
    }
}

/**
 * Nhập username, password và bấm đăng nhập
 */
function inputUsernamePassword() {
    const result = h_findImage(1, path + '/images/login/login_logo.png')
    if (result[0]) {
        toast('___Nhập username___')
        // Focus vào ô nhập username
        h_touch(489, 574)
        usleep(1000000)
        // Nhập username
        h_inputText([489, 574], task.username)

        usleep(1000000)
        
        toast('___Nhập password___')
        // Focus vào ô nhập password
        h_touch(581, 639)
        usleep(1000000)
        // Nhập password
        h_inputText([558, 551], task.password)

        usleep(1000000)
    }
    else {
        toast('___Không tìm thấy popup đăng nhập___')
        usleep(1000000)
        outGame()
    }
}

/**
 * Bấm vào `Đăng nhập`
 */
function bamDangNhap() {
    const result = h_findImage(1, path + '/images/login/dang_nhap.png')
    if (result[0]) {
        h_touch(result[0]['x'], result[0]['y'])
        usleep(1000000)
    }
    else {
        toast('___Không tìm thấy nút đăng nhập___')
        usleep(1000000)
        outGame()
    }
}

/**
 * Bấm vào `Vào game`
 */
function bamVaoGame() {
    const result = h_findImage(1, path + '/images/login/vao_game.png')
    if (result[0]) {
        h_touch(result[0]['x'], result[0]['y'])
        
        usleep(3000000)

        for (let i = 0; i < 60000000; i+= 2000000) {
            const result = h_findImage(1, path + '/images/login/doi_tai.png')
            if (!result[0]) {
                break
            }

            usleep(3000000)
        }

        usleep(2000000)
    }
    else {
        toast('___Không tìm thấy nút vào game___')
        usleep(1000000)
        outGame()
    }
}

function login() {
    tatThongBao()

    doiAcc()

    inputUsernamePassword()

    bamDangNhap()

    tatThongBao()

    bamVaoGame()

    tatThongBao()
}

module.exports = {
    login
}