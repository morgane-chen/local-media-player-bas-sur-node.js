var express = require('express');

var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.jade', { title: 'Just Play It' });
});
router.get('/likes',function(req,res){
    readDirSync(root1);
    res.render('likes.jade',{title:"like",catalogMusic:titles,catalogVideo:titles2,catalogImage:titles3,getPrefix:root1});
     });
router.get('/dislikes',function(req,res){
    readDirSync(root2);
    res.render('dislikes.jade',{title:"dislike",catalogMusic:titles,catalogVideo:titles2,catalogImage:titles3,getPrefix:root2});
});

var fs = require('fs');
var path=require("path");

var root1 = "../public/resource/likes";
var root2="../public/resource/dislikes";

var titles=null;
var titles2=null;
var titles3=null;


function readDirSync(path){
    var cnt=0;
    var cnt2=0;
    var cnt3=0;
    titles=null;
    titles2=null;
    titles3=null;
		var path1 = path + "/music/";
		var path2 = path + "/video/";
		var path3 = path + "/image/";
    var pa1 = fs.readdirSync(path1);
    var pa2 = fs.readdirSync(path2);
    var pa3 = fs.readdirSync(path3);
    pa1.forEach(function(ele,index){
        var info = fs.statSync(path1+"/"+ele);
        if(getdir(ele)=="mp3"){//obtenir tous les chaosons

            if(cnt++==0)
                titles=ele+'*';
            else {
                titles = titles + ele + '*';
            }
        }
    });
     
        pa2.forEach(function(ele,index){
        var info = fs.statSync(path2+"/"+ele);
        if(getdir(ele)=="mp4"){//obtenir tous les vidéos
            //console.log("file: "+ele); 
            if(cnt2++==0)
                titles2=ele+'*';
            else {
                titles2 = titles2 + ele + '*';
            }
        }
    });
        pa3.forEach(function(ele,index){
        var info = fs.statSync(path3+"/"+ele);
        if(getdir(ele)=="jpg"){//obtenir tous les photos
            //console.log("file: "+ele); 
            if(cnt3++==0)
                titles3=ele+'*';
            else {
                titles3 = titles3 + ele + '*';
            }
        }
    });
}
function getdir(url){
    var arr = url.split('.');
    var len = arr.length;
    return arr[len-1];
}

module.exports = router;

