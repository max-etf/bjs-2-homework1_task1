/*task 1*/ 
/* function searchid(object) {
   return ((object.id === id) ? true : false)
} */

class AlarmClock {
        
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

     addClock(time, callback, id) {
        if (id===undefined) throw new Error('Невозможно идентифицировать будильник. Параметр id не задан') ;
        if (this.alarmCollection.find((object) => {
           /*  ((object.id === id) ? true : false)  -- ээээ ?? а почему не работает тернарник ???*/
           if (object.id === id) return true;
           else return false;
        })!==undefined) console.error('Будильник с таким id уже существует') ;
        else {
            let alarm = {
                id,
                time,
                callback
            }

            alarm.id = id;
            alarm.time = time;
            alarm.callback = callback;

            this.alarmCollection.push(alarm);
        }
    }

    removeClock(id) {
        try{
        let filtered = this.alarmCollection.filter(object => {
            /* ((objact.id !== id) ? true : false) // аналогично: почему не работает тернарник ??*/
            if (object.id !== id) return true;
            else return false;
        })
        this.alarmCollection = filtered;
        return true;
        }
        catch {
            return false;
        }
    }
     
    getCurrentFormattedTime() {
        let alarmtime = new Date;
        let alarmtimeString = (alarmtime.getHours() >= 10 ? `${alarmtime.getHours()}` : `0${alarmtime.getHours()}`)+":"+(alarmtime.getMinutes() >= 10 ? `${alarmtime.getMinutes()}` : `0${alarmtime.getMinutes()}`)
                return alarmtimeString;
    }

    start() {
        function checkClock(alarm) {
            let alarmtime = new Date; 
            let alarmtimeString = (alarmtime.getHours() >= 10 ? `${alarmtime.getHours()}` : `0${alarmtime.getHours()}`)+":"+(alarmtime.getMinutes() >= 10 ? `${alarmtime.getMinutes()}` : `0${alarmtime.getMinutes()}`)
            /// а как внутри функиции другого метода обращаться к методу getCurrentFormattedTime ??
           if (alarm.time === alarmtimeString)
           {
               alarm.callback();
               return;
           }
        }

        if (this.timerId === null) {
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach(element => {
                checkClock(element)
            })
        }, 1000)           
        }
    }

    stop() {
        if (this.timerId !== null){
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        console.log ('total count = '+this.alarmCollection.length)
        this.alarmCollection.forEach(element => {
            console.log(`${element.id}`+"  "+`${element.time}`);
        });
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    } 
}
/*task 2*/ 
function testCase () {

let alarm1 = new AlarmClock;

function ringtone () {
    console.log("get up1"); 
    return
} 

let nowString = alarm1.getCurrentFormattedTime();
let id = 1;
alarm1.addClock(nowString,f => {ringtone()},id);

function addMinutes(date, minutes) {
    let result = new Date(date);
    result.setMinutes(result.getMinutes() + minutes);
    return result;
  }

function getFormattedTime(date) {
    let timeString = (date.getHours() >= 10 ? `${date.getHours()}` : `0${date.getHours()}`)+":"+(date.getMinutes() >= 10 ? `${date.getMinutes()}` : `0${date.getMinutes()}`)
    return timeString;
}

/* function ringtone1 (id) {
        console.log("get up2");
        alarm1.removeClock(id);    
}  */

let now = new Date
now = addMinutes(now,1)
nowString = getFormattedTime(now);
id = 2;
alarm1.addClock(nowString,f => {console.log("get up2");alarm1.removeClock(id);},id);

/* function ringtone2 (id) {

        console.log("get up3");
        alarm1.clearAlarms();
        alarm1.printAlarms(); 
} 
 */

now = addMinutes(now,1)
nowString = nowString = getFormattedTime(now);
alarm1.addClock(nowString,f => {console.log("get up3");alarm1.clearAlarms();alarm1.printAlarms();},3);

//alarm1.removeClock(3);

alarm1.printAlarms();

alarm1.start();
}

testCase();