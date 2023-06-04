const validate = (req, res, next) => {
    const { name } = req.body;
    if (!name) return res.status(400).json({error: "Property 'name' required"});

    next();
}

module.exports = {
    validate
}