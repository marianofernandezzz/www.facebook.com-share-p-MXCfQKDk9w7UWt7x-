module.exports = (sequelize, DataTypes) => {
    let alias = 'User';
    let columns = {
        id_user : {
            type: DataTypes.BIGINT,
            allowNull: false,
            unique: true,
            primaryKey: true,
            autoIncrement: true
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false
        },
        password: { 
            type : DataTypes.STRING,
            allowNull: false
        }
    }
    let config = {
        tableName: 'USER_PERSON',
        timestamps: false
    }
    const User = sequelize.define(alias, columns, config); // Definición del modelo
    return User; 
}
