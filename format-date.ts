/**
     * 
     * @param value 
     */
    formatDate(value){
        let order_date = new Date(value);
        console.log(order_date);
        let timeDiff = Date.now() - order_date.getTime();
        let days = Math.ceil(timeDiff / (24*60*60*1000));
        
        let str: any;
        switch(days){
            case 1: 
                str = "Today";
                break;
            case 2: 
                str = "Yesterday";
                break;
            case 3: 
                str = "2 days ago";
                break;
            case 4: 
                str = "3 days ago";
                break;
            case 5: 
                str = "4 days ago";
                break;
            case 6: 
                str = "5 days ago";
                break;
            case 7: 
                str = "6 days ago";
                break;
            case 8: 
                str = "7 days ago";
                break;
            default:
                //str = order_date.toLocaleString('en-US', { timeZone: 'UTC' });
                str = this.formatDateToString(order_date);
                break;
        }   
        return str;
    }

    formatDateToString(value){
        let date = new Date(value);
        let dd: any = date.getDate();
        let mm: any = date.getMonth()+1; //January is 0!

        let yyyy: any = date.getFullYear();
        if(dd<10){
            dd = '0' + dd;
        } 
        if(mm<10){
            mm = '0' + mm;
        } 
        return dd+'/'+mm+'/'+yyyy;
    }