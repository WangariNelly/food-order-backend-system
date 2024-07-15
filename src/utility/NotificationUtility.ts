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
        const accountSid = " ";
        const authToken = " ";
        const client = require('twilio')(accountSid, authToken);
    
        const response = await client.messages.create({
            body: `Your OTP is ${otp}`,
            from: '',
            to: '+254${toPhoneNumber}'
        })
    
        return response;
    } catch (error){
        return false
    }
    
}
 //Payment 