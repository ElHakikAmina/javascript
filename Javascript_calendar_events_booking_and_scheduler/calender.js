function settingDate(date,day){
    date = new Date(date);
    date.setDate(day);
    date.setHours(23);
    return date;
}
function getDatesBetween(date1,date2)
{
    let range1 = new Date(date1);
    let range2 = new Date(date2);
    date1=settingDate(date1,31);
    date2=settingDate(date2,31);
    let temp;
    let dates=[];
    while(date1<=date2)
    {
        if(date1.getDate()!=31){
            temp = settingDate(date1,0);
            if(temp>=range1 && temp <=range2)
            dates.push(temp);
            date1=settingDate(date1,31);
        }else
        {
            temp=new Date(date1);
            if(temp>=range1 && temp<=range2)
            dates.push(temp);
            date1.setMonth(date1.getMonth()+1);
        }
    }
    let content="";
    let weekDays =[
        {shortDay:"Mon",fullDay:"Monday"},{shortDay:"Tue",fullDay:"Tuesday"},{shortDay:"Wed",fullDay:"wednesday"},
        {shortDay:"Thu",fullDay:"Thursday"},
        {shortDay:"Fri",fullDay:"Friday"},
        {shortDay:"Sat",fullDay:"Saturday"},
        {shortDay:"Sun",fullDay:"Sunday"},
    ];
    let LastDate,firstDate;
    for(let i=0; i<dates.length;i++)
    {
         LastDate=dates[i];
        firstDate=new Date(dates[i].getFullYear(),dates[i].getMonth(),1);
        content="<div id='calenderTable_"+(i+1)+"'";
        content+="<h2>"+firstDate.toString().split(" ")[0]+"-"+firstDate.getFullYear()+"</h2>";
        content+="<table>";
        content+="<thead>";
        weekDays.map(item=>{
            content+="<th>"+item.fullDay+"</th>";
        })
        content+="</thead>";
        content+="<tbody>";
        let j=1;
        let displayNum,idMonth;
        while(j<=LastDate.getDate())
        {
            content+="<tr>";
            for(let k=0;k<7;k++)
            {
                displayNum=j<10 ? "0"+j : j;
                if(j==1)
                {
                    if(firstDate.toString().split(" ")[0] == weekDays[k].shortDay)
                    {
                        content+="<td>"+displayNum+"</td>";
                        j++;
                    }else
                    {
                        content+="<td></td>";
                    }
                }else if(j>LastDate.getDate())
                {
                    content+="<td></td>";
                }else
                {
                    content+="<td>"+displayNum+"</td>";
                    j++;
                }
            }
            content+="</tr>";
        }
        content+="</tbody>";
        content+="</table>";
        content+="</div>";
    }
    return content;
}
let content = getDatesBetween("2020/01/01","2021/01/01");
document.getElementById("calender").innerHTML=content;    
