const db= require('../dbConnection');
var Activity = {
      insertActivityLog:(iPAddress ,continent ,country ,state ,locality,startTime,
        endTime,pageName,activityName,longitude,latitude,selectedProductId,browserDetails,
        deviceDetails,userEmail,request,response, callback)=>{
        db.query('CALL insertActivityLog(\''+iPAddress+'\',\''+continent+'\',\''+country+'\',\''+state+'\',\''+
        locality+'\',\''+startTime+'\',\''+endTime+'\',\''+pageName+'\',\''+activityName+'\',\''+longitude+
        '\',\''+latitude+'\',\''+selectedProductId+'\',\''+browserDetails+'\',\''+deviceDetails+'\',\''+userEmail+'\',\''+request+'\',\''+response+'\');',callback);
     }
  }
  module.exports=Activity;