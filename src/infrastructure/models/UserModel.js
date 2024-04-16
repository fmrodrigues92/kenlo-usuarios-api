const mongoose = require('mongoose');

// Definição do Esquema do Usuário
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        maxlength: [150, 'Name cannot be more than 150 characters']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        trim: true,
        validate: {
            validator: function(v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: props => `${props.value} is not a valid email address!`
        }
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Criação do Modelo com base no esquema
const UserModel = mongoose.model('users', userSchema);



module.exports = UserModel;
