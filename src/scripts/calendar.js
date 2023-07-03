let date = new Date();

const addCalendarBtn = document.querySelector('.add-month');
const calendar = document.querySelector('.calendar')
// console.dir(calendar);

const months =  [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];
const mois = [ 'Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aout', 'Sep', 'Oct', 'Nov', 'Dec' ];
const joursSemaine = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'SaT', 'Sun'];

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

let currentDate = getCurrentDate();
console.log(currentDate);

/////////////////////////////////////////////////////////////////////////////////
// Gestion des onglets
/////////////////////////////////////////////////////////////////////////////////

const tabMonths = Array.from(document.querySelectorAll('.month'));
const monthContents = Array.from(document.querySelectorAll('.days-container'));

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
/////////////////////////////////////////////////////////////////////////////////

