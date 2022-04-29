const sounds = ['anime-wow', 'censor-beep','noooo','rimshot','yeet',
'mario-jump','friday','oh-hell-no']

sounds.forEach(sound => {
     const btn = document.createElement('button')
     btn.classList.add('btn')

     btn.innerText = sound

     btn.addEventListener('click', ()=> {

        stopsongs()
         document.getElementById(sound).play()
     })

     document.getElementById('buttons').appendChild(btn)
})

function stopsongs(){

    sounds.forEach( sound =>{
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;
    })
}