import React from 'react';



const DateUtil = {
    'dataISOPattern':(str)=>str.replace(' ','T'),
    'dateFormatted':(str)=>new Date(DateUtil.dataISOPattern(str)),
    'dataPorExtenso':(str)=>{
        const data = DateUtil.dateFormatted(str); 

        const day = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"][data.getDay()];
        const date = data.getDate();
        const month = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"][data.getMonth()];
        const year = data.getFullYear();

        return `${day}, ${date} de ${month} de ${year}`;
    },
    'horaPorExtenso':(str)=>{
        const data = DateUtil.dateFormatted(str);
        
        if(data.getMinutes() > 0)
            return `${data.getHours()}:${data.getMinutes()}`;
        
        return `${data.getHours()}hrs`;
    }
}

export default DateUtil;