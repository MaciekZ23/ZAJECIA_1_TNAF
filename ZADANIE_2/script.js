document.addEventListener('DOMContentLoaded', function() 
{
    const form = document.getElementById('employment-form');
    const dobInput = document.getElementById('dob');

    //Ustawienie maksymalnej daty dla pola data urodzenia na dzisiejszy dzien
    const today = new Date().toISOString().split('T')[0];
    dobInput.setAttribute('max', today);

    //Walidacja formularza
    form.addEventListener('submit', function(event) 
    {
        //Zatrzymanie wysylki formularza jesli jest niewlasciwie wypelniony
        if(!form.checkValidity()) 
        {
            event.preventDefault();
            alert('Prosze poprawnie wypelnic wszystkie wymagane pola');
        }
    });
});
