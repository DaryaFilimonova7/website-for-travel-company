
// Отправка формы бронирования тура

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('tour_booking_form')
  form.addEventListener('submit', send_form)

  async function send_form(e){
    e.preventDefault();
    let form_data = new FormData(form)
    let response = await fetch('send_booking_form.php', {
      method: 'POST',
      body: form_data
    })
    if (response.ok){
      form.classList.add('_sending')
      let result = await response.json();
      alert(result.message)
      form.reset()
      form.classList.remove('_sending')
    }
    else{
      form.classList.add('_sending')
      alert("Ошибка отправки формы.")
      form.classList.remove('_sending')
    }
  }


})
