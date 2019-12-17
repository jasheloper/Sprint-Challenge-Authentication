/* 

Just a module to centralize our JWT signing secret, so we don't end up with bugs becaue of mismatched secrets 
on token signing and token verifying.

- Sean Kirkby said this :)

*/



module.exports = {
   jwtSecret: process.env.JWT_SECRET || 'ilikebread'
}