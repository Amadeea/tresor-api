const util = {
    ping: function (req, res, next) {
        res.status(200).send({
            time: Date.now()
        });
    }
}
export default util;