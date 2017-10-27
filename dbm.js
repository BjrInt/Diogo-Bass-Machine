(function(){
  var l2notes = {};
    l2notes['a'] = {note: 'A2', duration: ((Math.random() + 0.1) /3)};
    l2notes['à'] = l2notes['a'];
    l2notes['b'] = {note: 'B2', duration: ((Math.random() + 0.1) /3)};
    l2notes['c'] = {note: 'C2', duration: ((Math.random() + 0.1) /3)};
    l2notes['d'] = {note: 'D2', duration: ((Math.random() + 0.1) /3)};
    l2notes['e'] = {note: 'E2', duration: ((Math.random() + 0.1) /3)};
    l2notes['é'] = l2notes['e'];
    l2notes['ê'] = l2notes['e'];
    l2notes['è'] = l2notes['e'];
    l2notes['f'] = {note: 'F2', duration: ((Math.random() + 0.1) /3)};
    l2notes['g'] = {note: 'G2', duration: ((Math.random() + 0.1) /3)};
    l2notes['h'] = {note: 'A#2', duration: ((Math.random() + 0.1) /3)};
    l2notes['i'] = {note: 'C#2', duration: ((Math.random() + 0.1) /3)};
    l2notes['j'] = {note: 'D#2', duration: ((Math.random() + 0.1) /3)};
    l2notes['k'] = {note: 'B#2', duration: ((Math.random() + 0.1) /3)};
    l2notes['l'] = {note: 'C#2', duration: ((Math.random() + 0.1) /3)};
    l2notes['m'] = {note: 'D#2', duration: ((Math.random() + 0.1) /3)};
    l2notes['n'] = {note: 'E#2', duration: ((Math.random() + 0.1) /3)};
    l2notes['o'] = {note: 'F#2', duration: ((Math.random() + 0.1) /3)};
    l2notes['p'] = {note: 'G#2', duration: ((Math.random() + 0.1) /3)};
    l2notes['q'] = {note: 'A3', duration: ((Math.random() + 0.1) /3)};
    l2notes['r'] = {note: 'B3', duration: ((Math.random() + 0.1) /3)};
    l2notes['s'] = {note: 'C3', duration: ((Math.random() + 0.1) /3)};
    l2notes['t'] = {note: 'D3', duration: ((Math.random() + 0.1) /3)};
    l2notes['u'] = {note: 'D3', duration: ((Math.random() + 0.1) /3)};
    l2notes['v'] = {note: 'E3', duration: ((Math.random() + 0.1) /3)};
    l2notes['w'] = {note: 'A#3', duration: ((Math.random() + 0.1) /3)};
    l2notes['x'] = {note: 'B#3', duration: ((Math.random() + 0.1) /3)};
    l2notes['y'] = {note: 'C#3', duration: ((Math.random() + 0.1) /3)};
    l2notes['z'] = {note: 'D#3', duration: ((Math.random() + 0.1) /3)};
    l2notes[' '] = {note: 'E4', duration: ((Math.random() + 0.1) /3)};
    l2notes['-'] = {note: 'E#4', duration: ((Math.random() + 0.1) /3)};
    l2notes['?'] = {note: 'F5', duration: ((Math.random() + 0.1) /3)};
    l2notes['!'] = {note: 'F5', duration: ((Math.random() + 0.1) /3)};
    l2notes['.'] = {note: 'F5', duration: ((Math.random() + 0.1) /3)};

  var thePresent = Date.now();
  var synth = new Tone.MonoSynth().toMaster();

document.querySelector('#nameinput').addEventListener('keyup', function(e){
  if(e.which == 13){
    document.querySelector('body').className = 'darken';

    var theFuture = Date.now();
    var execTime = (theFuture - thePresent) / 1000;

    var word = document.querySelector('#nameinput').value.toLowerCase();
    for(i=0; i<word.length; i++){
      obj = word[i];

      if(typeof(l2notes[obj]) != 'undefined')
        synth.triggerAttackRelease(l2notes[obj].note, l2notes[obj].duration, execTime + (i /3));
    }

    window.setTimeout(function(){
      document.querySelector('body').className = '';
    }, (word.length * 400))
  }
})

})()
