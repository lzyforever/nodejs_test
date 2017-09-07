/**
 * Created by jack on 2017/6/2.
 */

module.exports = {
    expfun: function (flag) {
        if (flag == 0) {
            throw  '我是例外';
        }
        return "success";
    }
}