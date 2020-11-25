const { findImage, usleep, touchDown, touchUp, copyText, clipText } = at

/**
 * h_findImage thay thế at.findImage
 */
function h_findImage(option, image_url) {

    var options = {
        targetImagePath: image_url,
        count: 3,
        threshold: 0.9,
        region: null, 
        debug: true,
        method: option,
    }

    const [result, error] = findImage(options)

    if (error) {
        alert('Failed to findImage, error: %s', error)
    }
    else {
        return result
    }
}

/**
 * h_touch thay thế at.touchDown, at.touchUp
 */
function h_touch(x, y) {
    touchDown(1, x, y)
    usleep(50000)
    touchUp(1, x, y)
}

/**
 * h_inputText thay thế at.inputText vì inputText hoạt động không ổn định (IOS14.2/IP7 not working)
 * Sử dụng tính năng at.copyText và at.clipText để thay thế
 */
function h_inputText(region, text) {
    // backspace button. region: 705, 1176
    // Paste button. region: 150, 468

    // Xóa toàn bộ kí tự có sẵn
    touchDown(1, ...[705, 1176])
    usleep(2000000)
    touchUp(1, ...[705, 1176])

    usleep(500000)

    // Copy và pase text
    copyText(text)
    touchDown(1, ...region)
    usleep(300000)
    touchUp(1, ...region)
    usleep(500000)
    var result = h_findImage(2, '../common/images/paste.png')
    if (result[0]) {
        h_touch(result[0]['x'], result[0]['y'])
    }


}

module.exports = {
    h_findImage,
    h_touch,
    h_inputText
}