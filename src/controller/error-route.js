module.exports = (req, res, next) => {
    try {
        throw new Error('Simulated Server Errorrrrr');
    } catch (err) {
        next(err);
    }
};