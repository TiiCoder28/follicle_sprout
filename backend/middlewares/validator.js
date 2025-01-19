const Joi = require('joi');

exports.signupSchema = Joi.object({
    email: Joi.string()
        .min(5)
        .max(60)
        .required()
        .email({
            tlds: { allow: ['com', 'net'] }
        }),

    password: Joi.string()
        .min(6)
        .max(60)
        .required()
        .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/) // Fixed regex
        .messages({
            "string.pattern.base": "Password must include at least one letter, one number, and be at least 6 characters long."
        }),

    username: Joi.string()
        .min(3)
        .max(30)
        .required()
        .messages({
            "string.min": "Username must be at least 3 characters.",
            "string.max": "Username cannot exceed 30 characters."
        }),

    facebookId: Joi.string().optional().allow(null, ''),
    instagramId: Joi.string().optional().allow(null, ''),
    googleId: Joi.string().optional().allow(null, '')
});


exports.loginSchema = Joi.object({
    username: Joi.string()
        .min(3)
        .max(30)
        .required()
        .messages({
            "string.min": "Username must be at least 3 characters.",
            "string.max": "Username cannot exceed 30 characters."
        }),
    password: Joi.string()
        .min(6)
        .max(60)
        .required()
        .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/) // Fixed regex
        .messages({
            "string.pattern.base": "Password must include at least one letter, one number, and be at least 6 characters long."
        }),
    facebookId: Joi.string().optional().allow(null, ''),
    instagramId: Joi.string().optional().allow(null, ''),
    googleId: Joi.string().optional().allow(null, '')
});


exports.acceptCodeSchema = Joi.object({
    email: Joi.string()
        .min(5)
        .max(60)
        .required()
        .email({
            tlds: { allow: ['com', 'net'] }
        }),
    providedCode: Joi.number()
    .required()
})


exports.changePasswordSchema = Joi.object({
    oldPassword: Joi.string().required(),
    newPassword: Joi.string()
        .required()
        .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/)
        .messages({
            "string.pattern.base": "Password must include at least one letter, one number, and be at least 6 characters long."
        }),
});
