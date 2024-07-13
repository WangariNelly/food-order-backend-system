// Email 

// Notification 

//OTP 
export const GenerateOtp = () => {

    const otp = Math.floor(10000 + Math.random() * 900000);
    let expiry = new Date()
    expiry.setTime(new Date().getTime() + (30 * 60 * 1000));

    return {otp, expiry};
}

export const onRequestOTP = async(otp: number, toPhoneNumber: string) => {

    try {
        const accountSid = "AC687321492507952bb799b129cf550e04";
        const authToken = "1b9bb825a97169e13920184643ca9a64";
        const client = require('twilio')(accountSid, authToken);
    
        const response = await client.messages.create({
            body: `Your OTP is ${otp}`,
            from: '+14439659139',
            to: '+254${toPhoneNumber}'
        })
    
        return response;
    } catch (error){
        return false
    }
    
}
 //Payment 