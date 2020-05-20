//		数据
//人物介绍
var datamanintro = [{
		id: 1,
		name: "林则徐",
		img: "img/lzx.jpg",
		data: new Date(2020, 1, 1),
		intro: "林则徐（1785年8月30日－1850年11月22日），字元抚，又字少穆、石麟，晚号俟村老人、俟村退叟、七十二峰退叟、瓶泉居士、栎社散人等，福建侯官县人，是清朝时期的政治家、思想家和诗人，历史治水名人"
	},
	{
		id: 2,
		name: "徐悲鸿",
		img: "img/xbh.jpg",
		data: new Date(2020, 2, 1),
		intro: "徐悲鸿（1895年7月19日—1953年9月26日），汉族，原名徐寿康，江苏宜兴市屺亭镇人，中国现代画家、美术教育家。"
	},
	{
		id: 3,
		name: "彬小小",
		img: "img/bx.jpg",
		data: new Date(2020, 3, 1),
		intro: "我在这 有些分别 看似一个转身 其实将会是永久 我唯一对你说的谎 就是离开你我不难过"
	},
	{
		id: 4,
		name: "小小彬",
		img: "img/xb.jpg",
		data: new Date(2020, 3, 1),
		intro: "好看视频拥有数十万视频创作者,每天观看次数数十亿次,深度了解你的喜好,好看到停不下来。"
	},
];
//往期回顾
var removdata = [{
		id: 1,
		name: "第1集",
		img: "img/2.png",
		data: new Date(2020, 1, 1),
		movurl: "https://vdept.bdstatic.com/34364e4c4a6a717a7934424a6263354a/49774e4d44634936/1fa715ce3648f8df3ed93f2402ae2486a36ba339199774ec35a19498058291dc4a471e3f329208ccfed0b94201c21d505ec627bbb1aa7a11087daf5b19b412ee.mp4?auth_key=1584854646-0-0-a61bd839008b88fc62d2ac328f1a29e5"
	},
	{
		id: 2,
		name: "第2集",
		img: "img/1.png",
		data: new Date(2020, 2, 1),
		movurl: "https://vdept.bdstatic.com/70744b786a415255754a364d54737275/7a42524467696853/37822a17d319623ab2fe0943a60c45590daec4ffccfea478658fcdea0ac723d67ed5ef8d546638ba6cd27f6ee380e34a.mp4?auth_key=1584858743-0-0-985f468857e2827f9386cf26dbccff60"
	},
	{
		id: 3,
		name: "第3集",
		img: "img/3.jpg",
		data: new Date(2020, 3, 1),
		movurl: "https://vdept.bdstatic.com/4e43316b5751374976644c645675704a/54557a556b685652/68e95a9c7f38ebc01b68a08d87c4187dfc1171a188ddf7c26b85c7a07e84a76275eb55933f17cc2fdba94f1ffb1ab22566dcb8549b9a7676a1b11dbe8d6caa41.mp4?auth_key=1584854833-0-0-1ed2aa89239dd27ca8983f45d8584bd2"
	},
];
//		评论
var usercommentdata = [{
		id: 1,
		uname: '扭转乾坤',
		place: '温州',
		time: new Date(2020, 1, 1, 2, 3, 4),
		content: '大部分的赌徒都是赌久必输，而只有部分职业',
		Guonum: 5,
		tximg: "img/tx.jpg"
	},
	{
		id: 2,
		uname: 'kedaya',
		place: '深圳',
		time: new Date(2020, 2, 1, 3, 4, 5),
		content: '交易员是猎人，捕捉市场动态；交易员是心理分析师，分析别人交易心态的同时也被别人分析着',
		Guonum: 10,
		tximg: "img/右边.png"
	}
];
//		video
var video, opplay, opplay2, oppause, playttime, currenttime,
	videodate, procbar, probutton, fulls = 0,
	videoimg;
//		图片组及数量
var photo = ['img/banner1.png'],
	num = 0;
var selectar = null;
//		计时器,动画初始状态
var timer, bannermh = -200,
	opacity = 0.00;
//		横幅
var banner = document.getElementById('banner').getElementsByTagName('img')[0];
videoimg = document.getElementsByClassName("video-img")[0];
video = document.getElementById("video-content");
opplay = document.getElementsByClassName("op-play")[0];
opplay2 = document.getElementsByClassName("op-play-cent")[0];
oppause = document.getElementsByClassName("op-pause")[0];
videodate = document.getElementsByClassName("controls-progress-ltime")[0];
procbar = document.getElementsByClassName("controls-progress-edbar")[0];
probutton = document.getElementsByClassName("controls-progress-bbutton")[0];
window.onload = function() {
	inphototimer();
	Setre();
	Setcomment();
	Setmanintro();
}
var resizem = 0;
window.onresize =function() {
//	console.log(document.body.clientWidth);
	if(document.documentElement.clientWidth < 764 && resizem == 0) {
		var link = document.getElementsByTagName('link')[0];
		var script = document.getElementsByClassName('input-js')[0];
		link.href = "css/mobile.css";
		type = 1;
		resizem = 1;
	} else if(document.documentElement.clientWidth > 764 && resizem == 1) {
		var script = document.getElementsByClassName('input-js')[0];
		var link = document.getElementsByTagName('link')[0];
		type = 0;
		link.href = "css/pc.css";
		resizem = 0;
	}

};
//		往期回顾

function Setre() {
	var ul = document.createElement('ul'),
		li, div,
		rediv = document.getElementsByClassName('list-re')[0];
	rediv.innerHTML = "";
	rediv.appendChild(ul);
	removdata.forEach(function(item, index) {
		li = document.createElement('li');
		div = '<img src=\"' + item.img + '\"\/><p>' +
			item.name + "</p><p>" +
			item.data.getFullYear() + "/" + item.data.getMonth() + "/" + item.data.getDay() + "</p>";
		div.onClick = function(index) {
			Swichmov(index);
		};
		li.innerHTML = "<div onclick='Swichmov(" + index + ")'>" + div + "</div>";
		ul.appendChild(li);
	});
};
//人物栏加载
function Switchintro(e, id) {
	if(selectar != null) {
		selectar.style.backgroundColor = '#B4A0A0';
		selectar.style.transform = 'rotate(0deg)';
	}
	var tarrow = document.getElementsByClassName('intro-mark' + id)[0];
	selectar = tarrow;
	tarrow.style.backgroundColor = 'black';
	tarrow.style.transform = 'rotate(180deg)';
	var zarrow = document.getElementsByClassName("intro-text-arrow")[0];
	var text = document.getElementsByClassName("intro-text")[0];
	text.innerHTML = datamanintro[id].intro;
	var move = 13 + 23.5 * id;
	zarrow.style.left = move + "%"
}

function Setmanintro() {
	var cdiv = document.getElementsByClassName('intro-man')[0];
	var con = "<ul>";
	datamanintro.forEach(function(item, index) {

		con = con + "<li><div onclick='Switchintro(this," + index + ")'><div><img src='" + item.img + "'/></div>";
		con = con + "<div>" + item.name + "<div class='icon-mark-bottom intro-mark" + index + "'></div></div></div></li>";
	});
	con = con + "</ul>";
	cdiv.innerHTML = con;
	//	console.log(con);
}

function Swichmov(id) {
	console.log(id);
	video.pause();
	oppause.style.display = "none";
	opplay.style.display = "inline-block";
	opplay2.style.display = "inline-block";
	var item = removdata[id];
	videoimg.src = item.img;
	videoimg.style.display = "inline-block";
	video.src = item.movurl;
};
//		评论加载
function Changtotime(s) {
	var t = "";
	s > 10 ? t = s : t = "0" + s;
	return t;
}

function Setcomment() {
	var cdiv = document.getElementsByClassName('usercomment')[0];
	var con = "";
	usercommentdata.forEach(function(item, index) {
		con = con + "<div class=\"text-comment\"><div class=\"num-edcoment\">";
		con = con + "<div class=\"de-house\"><p>" + item.Guonum + "</p></div></div>";
		con = con + "<div class=\"text-intro-user\">";
		con = con + "<img src='" + item.tximg + "' >";
		con = con + "<div class=\"text-userinfor\"><div class=\"text-name\">" + item.uname;
		con = con + "</div><div class=\"text-date\">" + item.place + Changtotime(item.time.getHours()) + ":" + Changtotime(item.time.getMinutes()) + "</div>";
		con = con + "</div></div></div><div class=\"comment-text\">";
		con = con + item.content + "<div class=\"de-line\"></div></div>";
	});
	cdiv.innerHTML = con;
}
//		横幅渐变下滑
function inphototimer() {
	timer = setInterval(inphoto, 30);
};

function inphoto() {
	bannermh = bannermh + 4;
	opacity = opacity + 0.02
	if(bannermh >= 0) {
		clearInterval(timer);
	}
	banner.style.opacity = opacity;
	banner.style.top = bannermh + "px";
};

function opbar(e) {
	var proca = document.getElementsByClassName("controls-progress-bar")[0];
	var ox = e.offsetX || window.event.offsetX,
		wid = proca.clientWidth;
	//			console.log(ox + "," + video.duration * ox / wid);
	video.currentTime = video.duration * ox / wid;
}

function fullsreen() {
	if(fulls == 0) {
		fulls = 1;
		video.requestFullscreen();
	} else {
		fulls = 0;
		document.exitFullscreen();
	}
}

function totime(second) {
	var min = 0,
		hour = 0,
		s = 0,
		re = "";
	s = second % 60;
	min = second / 60;
	hour = min / 60;
	s = Math.round(s);
	min = Math.round(min);
	hour = Math.round(hour);
	if(hour > 99) {
		hour = 99;
		re = "0" + hour + ":";
	} else if(hour < 10 && hour > 0) {
		re = "0" + hour + ":";
	} else if(hour > 0) {
		re = hour + ":";
	}
	re = min + ":" + s;
	return re;
}

function processplay(event) {
	currenttime = video.currentTime;
	playttime = video.duration;
	videodate.innerText = totime(currenttime) + "\\" + totime(playttime);
	var precent = currenttime / playttime * 100;
	//		console.log(precent);
	procbar.style.width = precent + "%";
	probutton.style.left = precent - 1 + "%";
}

function playmov() {
	video.play();
	videoimg.style.display = "none";
	opplay.style.display = "none";
	opplay2.style.display = "none";
	oppause.style.display = "inline-block";
}

function pausemov() {
	video.pause();
	oppause.style.display = "none";
	opplay.style.display = "inline-block";
	opplay2.style.display = "inline-block";
}

window.onscroll = scollRight;

function scollRight() {
	var rh = document.getElementById("content-right");
	var sh = document.documentElement.clientHeight;
	var scrollh = document.documentElement.scrollTop + document.body.scrollTop; 
	var pos = scrollh - rh.offsetTop;  
	pos = scrollh - rh.offsetTop; 
	moveHeight = pos > 0 ? Math.ceil(pos) : Math.floor(pos); 
	//			console.log(moveHeight+","+scrollh+","+sh)
	if(sh * 0.05 < scrollh && type == 0) {  
		rh.style.top = rh.offsetTop + moveHeight + 10 + "px";  
	} else {
		rh.style.top = "5%";
	}
}