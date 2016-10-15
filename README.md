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
MIDI input signals are transformed to CV/gate signals at a variable samlpling frequency and bit depth.
- http://www.midikits.net/midi_analyser/midi_note_frequency.htm  
- http://www.midikits.net/midi_analyser/midi_note_numbers_for_octaves.htm  
- http://www.doepfer.de/a1922.htm

#### CV
1 Volt per ocatve such as from A3 to A4 (C major): 3.000V - 3.167V - 3.250V - 3.417V - 3.583V - 4.000V
- CVN for midi note 0...+10V
- CVV for midi note 0...+5V

#### Gate
V-trigger meaning that 0 is off and 1 Volt is on. Pretty much simultating analog binary hence the somewhat odd transformation from Midi noteOn/Off events to quantized binary representing voltageswhci in turn get interpretted to swich the audio output on the DSN.     
     
