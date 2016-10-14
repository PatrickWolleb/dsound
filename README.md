# DSOUND 

A distributed software synthesizer utilising dsound protocol for communicating controll voltages (cv), gate and audio signals.


## Protocol

### Signal flow
- LH -> cv,gate -> DSN -> audio -> LH 

#### Localhost
**LH** represents the users local machine running the DS client SDK. It produces binary cv and gate signals from a hardware device such as MIDI keyboard.

#### DSnode
**DSN** reperesents a DSound Synthesizer node. It contains all software to act as a typical modular synth component interface for consuming and producing cv, gate and audio signals. Additionally it takes care of helping IP address exchanges for components withing the system.  


## DSnode

### Inputs
- MIDI realtime http://webaudio.github.io/web-midi-api  
- MIDI from files  
- CV/gate https://en.wikipedia.org/wiki/CV/gate 

### Input transformation
MIDI input signals are transformed to CV/gate signals at a variable resolution
- http://www.midikits.net/midi_analyser/midi_note_frequency.htm  
- http://www.midikits.net/midi_analyser/midi_note_numbers_for_octaves.htm 

#### CV
1 Volt per ocatve such as from A3 to A4 (C major): 3.000 - 3.167 - 3.250 - 3.417 - 3.583 - 4.000 

#### Gate

     
