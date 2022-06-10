module.exports = (sequelize, DataTypes) => {

    const text = sequelize.define("text", {
        text: {
            type: DataTypes.STRING
        },
    
    })

    return text

}