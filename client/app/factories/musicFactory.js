'use strict';

//MAUI API factory used for managing API calls
angular.module('pokExamApp').factory('MusicFactory', function($http, $q) {
  var service = {};

  var mainMusic = document.getElementById("mainMusic");
  var battleMusic = document.getElementById("battleMusic");
  var successFailSound = document.getElementById("successFailSound");
  var winnerMusic = document.getElementById("winnerMusic");

  var mainSongs = [
    'hurry_along',
    'oak_pokemon_research_lab',
    'palette_town_theme',
    'professor_oak',
    'title_screen',
    'vermilion_city',
  ];

  var battleSongs = [
    'battle_theme',
    'battle_gym_leader_battle',
    'opening_movie',
    'pokemon_tower',
    'rival_appears',
    'victory_road',
    'viridian_forest'
  ];

  var successSounds = [
    'item_obtained',
    'fanfare_pokemon_caught',
    'fanfare_pokemon_obtained'
  ];

  var failureSounds = [

  ];

  var musicPath = '../../assets/music/';

  var mainMuicIndex = Math.floor(Math.random() * mainSongs.length);
  var battleMusicIndex = Math.floor(Math.random() * battleSongs.length);
  var successIndex = Math.floor(Math.random() * successSounds.length);
  var failIndex = 0;

  successFailSound.addEventListener("ended", function() {
    mainMusic.play();
  });

  service.playMainMusic = function(intent) {
    battleMusic.pause();
    mainMusic.src = musicPath + mainSongs[mainMuicIndex] + '.mp3';
    mainMusic.play();
    mainMuicIndex = (mainMuicIndex + 1) % mainSongs.length;
  };
  service.playBattleMusic = function(intent) {
    battleMusic.src = musicPath + battleSongs[battleMusicIndex] + '.mp3';
    mainMusic.pause();
    battleMusic.play();
    battleMusicIndex = (battleMusicIndex + 1) % battleSongs.length;
  };
  service.playSuccessSound = function(intent) {
    successFailSound.src = musicPath + successSounds[successIndex] + '.mp3';
    mainMusic.pause();
    successFailSound.play();
    successIndex = (successIndex + 1) % successSounds.length;
  };
  service.playFailureSound = function(intent) {
    //TODO could not find any failure sounds
  };
  service.playWinnerMusic = function(intent) {
    winnerMusic.src = musicPath + 'ending' + '.mp3';
    mainMusic.pause();
    winnerMusic.play();
  };
  return service;
});
