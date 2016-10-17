/**
  *   (c) Copyright Reserved SH MEDIA Ltd. 2016. All rights reserved.
  *   Use of this material is subject to license.
  *   Copying and unauthorised use of this material strictly prohibited.
  *
  *   @Author: Patrick Wolleb
***/§

'use strict';

(function(w) {

  w.cvg = (function() {

    var MIDI_NOTE_TO_KEY = ['-C1','-C1s','-D1','-D1s','-E1','-F1','-F1s','-G1','-G1s','-A1','-A1s','-B1'];
    MIDI_NOTE_TO_KEY.concat(['C0','C0s','D0','D0s','E0','F0','F0s','G0','G0s','A0','A0s','B0']);
    MIDI_NOTE_TO_KEY.concat(['C1','C1s','D1','D1s','E1','F1','F1s','G1','G1s','A1','A1s','B1']);


    function midiNoteToKey(note) {
      return MIDI_NOTE_TO_KEY[note];
    }

    function clone(obj) {
      return JSON.parse(JSON.stringify(obj));
    }

    return {

      noteOn: function(note, velocity) {
        return {
          key : midiNoteToKey(note),
          hz :
        }
        //https://www.keithmcmillen.com/blog/making-music-in-the-browser-web-midi-api/
      },

      noteOff: function(note, velocity) {

      }

    };
  })();
})(window);
