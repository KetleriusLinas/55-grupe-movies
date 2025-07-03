import { IsValid } from "../../lib/IsValid.js";

    
export function postRegister(req, res) {
    const [err, msg] = IsValid.fields(req.body, {
        username: 'username',
        email: 'email',
        password: 'password',
        tos: 'tos',
        
    });

    if (err) {
        return res.json({
            status: 'error',
            msg: msg,
        });
    }

    return res.json({
        status: 'success',
        msg: 'Sekminga registracija',
    });
}