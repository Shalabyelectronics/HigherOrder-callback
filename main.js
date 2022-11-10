document.querySelector('input').addEventListener('click',
()=>{
    const createElement = document.createElement('h3')
    createElement.innerHTML = "Callback fired</br>هنا قامت الدالة الأعلى رتبه بتشغيل الدالة,</br> callback "
    document.body.append(createElement)
    
})