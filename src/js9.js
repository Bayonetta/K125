'use strict';

let diary = {
    date: "",
    weather: "",
    content: ""
}

let diaryA = Object.create(diary);
diaryA.date = "05/14"
diaryA.weather = "晴れ"
diaryA.content = "全天寝る"

let diaryB = Object.create(diary);
diaryB.date = "05/15"
diaryB.weather = "雨"
diaryB.content = "ゲームばかり"

let diaryC = Object.create(diary);
diaryC.date = "05/16"
diaryC.weather = "大雨"
diaryC.content = "家でゴロゴロ"

let diarys = [diaryA, diaryB, diaryC];

for (let i = 0; i < diarys.length; i++) {
    console.log(diarys[i].date);
    console.log(diarys[i].weather);
    console.log(diarys[i].content);
}