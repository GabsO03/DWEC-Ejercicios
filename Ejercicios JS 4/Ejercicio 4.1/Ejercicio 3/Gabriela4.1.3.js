window.addEventListener('load', () => {
    const cookies = document.cookie.split(';');
    const firstVisitDate = cookies.find((cookie) => cookie.includes('firstVisitDate'));
    const lastVisitDate = cookies.find((cookie) => cookie.includes('lastVisitDate'));
    const totalVisits = cookies.find((cookie) => cookie.includes('totalVisits'));


    if(totalVisits) {
        const num = parseInt(totalVisits.substring(totalVisits.indexOf('=')+1))
        document.cookie = 'totalVisits=' + (num+1) + ';';
    }
    else {
        console.log('00000');
        document.cookie = 'totalVisits=0;';
    }

    if (!firstVisitDate) {
        const hoy = new Date();
        console.log(hoy);
        document.cookie = 'firstVisitDate=' + hoy + ';';
    }

    //Aquí de frente lo crea\actualiza
    const hoy = new Date();
    document.cookie = 'lastVisitDate=' + hoy + ';';

    document.getElementById('totalVisits').textContent = parseInt(totalVisits.substring(totalVisits.indexOf('=')+1));
    document.getElementById('firstVisitDate').textContent = firstVisitDate.substring(firstVisitDate.indexOf('=')+1);
    document.getElementById('lastVisitDate').textContent = lastVisitDate.substring(lastVisitDate.indexOf('=')+1);
})

function resetVisits() {
    document.cookie = 'totalVisits=;expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    document.cookie = 'firstVisitDate=;expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    document.cookie = 'lastVisitDate=;expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    location.reload();
}