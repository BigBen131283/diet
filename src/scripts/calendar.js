import Tab from "./tab.js";

let date = new Date();

const addCalendarBtn = document.querySelector('.add-month');
const calendar = document.querySelector('.calendar')

const months =  [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];
const mois = [ 'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre' ];
const joursSemaine = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'SaT'];

function getCurrentDate() {
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    
    return {
        'day': day,
        'month': month,
        'monthName': mois[month],
        'year': year,
        'numberOfDays': new Date(year, month + 1, 0).getDate()
    }
}

function getFirstDayofMonth(year, month) {
    const date = new Date(year, month, 1);
    const options = { weekday: 'long'};
    const dayName = date.toLocaleString('fr-FR', options);

    return dayName;
}

function getNumberOfDays(year, month) {
    const numberOfDays = new Date(year, month + 1, 0).getDate();
    return numberOfDays;
}

// console.log(getFirstDayofMonth(2023, 11));


/////////////////////////////////////////////////////////////////////////////////
// Gestion des onglets
/////////////////////////////////////////////////////////////////////////////////

let tabMonths = [];
const monthContents = Array.from(document.querySelectorAll('.days-container'));

function handleTab() {
    
    tabMonths = Array.from(document.querySelectorAll('.month'));
    tabMonths.forEach(tab => {
        tab.addEventListener('click', (e) => {
            
            for(let i=0; i < tabMonths.length; i++){
                if(tabMonths[i] === e.target){
                    tabMonths[i].classList.add('is-active');
                }else{
                    tabMonths[i].classList.remove('is-active');
                }
            }
            
            for(let i=0; i < monthContents.length; i++){
                if(i === tabMonths.indexOf(e.target)){
                    monthContents[i].classList.add('is-active');
                }else{
                    monthContents[i].classList.remove('is-active');
                }
            }
        })
    })

}

/////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////
// Ajout d'un mois
/////////////////////////////////////////////////////////////////////////////////

const addMonthBtn = document.querySelector('.add-tab');
const tabs = document.querySelector('.tab-content');
const arrayTabs = [];

addMonthBtn.addEventListener('click', () => {
    addTabMonth();
    createCalendarMonth();
    handleTab();
})

function addTabMonth() {
    
    
    if(arrayTabs.length === 0){
        let currentDate = getCurrentDate();
        
        const newTabObj = new Tab();
        newTabObj.firstDay = getFirstDayofMonth(currentDate.year, currentDate.month);
        newTabObj.month = currentDate.monthName;
        newTabObj.year = currentDate.year;
        newTabObj.numberOfDays = currentDate.numberOfDays;
        arrayTabs.push(newTabObj);
        
        const newTab = document.createElement('div');
        newTab.classList.add('month');
        newTab.innerText = newTabObj.month;
        tabs.appendChild(newTab);
    }else{
        const lastAddedMonth = arrayTabs[arrayTabs.length - 1];
        const indexOfMonth = mois.indexOf(lastAddedMonth.month);
        let newIndexOfMonth;
        let newMonth;
        let newYear;
        
        if(indexOfMonth === 11){
            newIndexOfMonth = 0;
        }else{
            newIndexOfMonth = indexOfMonth + 1;
        }
        
        newMonth = mois[newIndexOfMonth];
        
        if(newMonth === "Janvier"){
            newYear = lastAddedMonth.year + 1;
        }else{
            newYear = lastAddedMonth.year
        }
        
        const newFirstDay = getFirstDayofMonth(newYear, newIndexOfMonth);       
        const newNumberOfDays = getNumberOfDays(newYear, newIndexOfMonth);
        
        const newTabObj = new Tab();
        newTabObj.firstDay = newFirstDay;
        newTabObj.month = newMonth;
        newTabObj.year = newYear;
        newTabObj.numberOfDays = newNumberOfDays;
        arrayTabs.push(newTabObj);
        
        const newTab = document.createElement('div');
        newTab.classList.add('month');
        newTab.innerText = newMonth;
        tabs.appendChild(newTab);
    }
}

function createCalendarMonth() {
    console.log(arrayTabs);
}

/////////////////////////////////////////////////////////////////////////////////