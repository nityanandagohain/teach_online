module.exports = {
    PORT: process.env.PORT || 4000,
    MONGODB_URI: process.env.MONGODB_URI || "mongodb://localhost:27017/newt",
    JWT_SECRET: process.env.JWT_SECRET || "sec_key"
}