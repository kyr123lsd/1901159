function a(){
    if(document.querySelector('.dark_light').value==='다크모드 켜기'){
            document.getElementById('mode').className='dark';
            document.querySelector('.skills-tool').style.backgroundColor ='rgba(236, 233, 233, 0.849)'
            document.querySelector('.portfolio-photo').style.backgroundColor ='rgba(236, 233, 233, 0.849)'
            document.querySelector('.dark_light').value='다크모드 끄기';
        } else {
            document.getElementById('mode').className='light';
            document.querySelector('.dark_light').value='다크모드 켜기';
        }
}

