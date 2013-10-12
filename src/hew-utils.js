function timestamp(format) {
    var date = new Date(),
        timestamp = {
            day: date.getUTCDate(),
            month: date.getUTCMonth() + 1,
            year: date.getUTCFullYear(),
            time: date.getUTCHours() + ':' + date.getUTCMinutes(),
            unixtimestamp: date.getTime(),
            timezoneOffset: date.getTimezoneOffset(),
            fullDate: date,
        };
    
    timestamp['formattedDate'] = (function(format) {
        if(format === 'mm/dd/yyyy') {
            return timestamp.month + '/' + timestamp.day + '/' + timestamp.year
        } else {
            return timestamp.day + '/' + timestamp.month + '/' + timestamp.year
        }
    })(format);
    
    return timestamp;
}