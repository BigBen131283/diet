import Tab from "./tab.js";

let date = new Date();

const addCalendarBtn = document.querySelector('.add-month');
const calendar = document.querySelector('.calendar')
// console.dir(calendar);

const months =  [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];
const mois = [ 'Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aout', 'Sep', 'Oct', 'Nov', 'Dec' ];
const joursSemaine = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'SaT'];

function getCurrentDate() {
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    
    return {
        'day': day,
        'month': month + 1,
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

console.log(getFirstDayofMonth(2023, 11));


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

addMonthBtn.addEventListener('click', () => {
    addTabMonth();
    handleTab();
})

function addTabMonth() {
    
    console.log(tabMonths.length);

    const arrayTabs = [];
    
    if(tabMonths.length === 0){
        let currentDate = getCurrentDate();
        const newTab = document.createElement('div');
        newTab.classList.add('month');
        newTab.innerText = currentDate.monthName;
        tabs.appendChild(newTab);
        tabMonths.push(newTab);

        const newTabObj = new Tab();
        arrayTabs.push(newTabObj);
        console.log(arrayTabs);

        // console.log(currentDate.monthName);
    }else{
        console.log(tabMonths);
    }
}

/////////////////////////////////////////////////////////////////////////////////