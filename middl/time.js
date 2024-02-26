const workinghours = (req, res, next) => {
    const now= new Date ();
    req.now = now ;
    const dayofweek = now.getDay();// monday 1 to friday 5 saturday 6 sunday 7 
    const hour = now.getHours();

     if (dayofweek >= 1 && dayofweek <= 5 && hour>= 9 &&  hour< 17 ) { 
     next(); }
     else res.send('The web application is only available during working hours (Monday to Friday,  from 9 to 17)')
} ;
module.exports = {workinghours};