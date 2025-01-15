const bcrypt = require('bcryptjs')

exports.doHash = async (value, saltRounds = 10) => {
    try {

         // Generate a salt with the specified number of rounds
        const salt = await bcrypt.genSalt(saltRounds);

        //hash the password using the salt
        const hashedValue = await bcrypt.hash(value, salt)
        return hashedValue

    } catch(error){
        throw new Error('Error hashing value: ' + error.message);
    }
}