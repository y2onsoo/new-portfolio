// class FolderScroll {
//   constructor(wrapper, sticky) {
//     this.wrapper = wrapper;
//     this.sticky = sticky;
//     this.children = this.sticky.querySelectorAll(".section");
//     this.length = this.children.length;
//     this.headerVh = 6;
//     this.contentVh = 96 - this.headerVh * this.length;
//     this.start = 0;
//     this.end = 0;
//   }

//   init() {
//     this.start = this.wrapper.offsetTop + 100;
//     this.end =
//       this.wrapper.offsetTop + this.wrapper.offsetHeight - innerHeight - 100;

//     this.children.forEach((child, i) => {
//       child.style.bottom = -100 + this.headerVh * (this.length - i) + "vh";
//       child.querySelector(".title").style.height = this.headerVh + "vh";
//       child.querySelector(".content").style.height = this.contentVh + "vh";
//     });
//   }

//   animate() {
//     this.children.forEach((child, i) => {
//       const unit = (this.end - this.start) / this.length;
//       const s = this.start + unit * i + 100;
//       const e = this.start + unit * (i + 1);

//       if (scrollY <= s) {
//         child.style.transform = `translate3d(0, 0, 0)`;
//       } else if (scrollY >= e) {
//         child.style.transform = `translate3d(0, ${-this.contentVh}%, 0)`;
//       } else {
//         child.style.transform = `translate3d(0, ${
//           ((scrollY - s) / (unit - 100)) * -this.contentVh
//         }%, 0)`;
//       }
//     });
//   }
// }

// const mainContent1 = document.querySelector(".main-content-1");
// const sticky = document.querySelector(".sticky");
// const folderScroll = new FolderScroll(mainContent1, sticky);
// folderScroll.init();

// window.addEventListener("resize", () => {
//   folderScroll.init();
// });
// window.addEventListener("scroll", () => {
//   folderScroll.animate();
// });

// //////////////////////////////////////////
// $(document).ready(function () {
//   $("#home").click(function () {
//     const offset = $(".start-screen").offset(); //선택한 태그의 위치를 반환
//     $("body").animate({ scrollTop: offset.top }, 400);
//   });
//   $("#first").click(function () {
//     const offset1 = $(".title-1").offset1(); //선택한 태그의 위치를 반환
//     $("body").animate({ scrollTop: offset.top }, 400);
//   });
//   $("#second").click(function () {
//     const offset2 = $(".title-2").offset2(); //선택한 태그의 위치를 반환
//     $("html").animate({ scrollTop: offset.top }, 400);
//   });
//   $("#thrid").click(function () {
//     const offset3 = $(".title-3").offset3(); //선택한 태그의 위치를 반환
//     $("html").animate({ scrollTop: offset.top }, 400);
//   });
//   $("#fourth").click(function () {
//     const offset4 = $(".title-4").offset4(); //선택한 태그의 위치를 반환
//     $("html").animate({ scrollTop: offset.top }, 400);
//   });
// });

// ///////////
// $(".contact").click(function () {
//   $(".modal-resume").show();
// });
// $(".modal-resume i").click(function () {
//   $(".modal-resume").hide();
// });

// ////////////////////////////////////////////////////
// document.getElementById("banner1").onclick = function () {
//   document.querySelector(".banner1-big").style.display = "block";
//   document.getElementById("bg").classList.add("box-bg");
// };
// document.getElementById("banner2").onclick = function () {
//   document.querySelector(".banner2-big").style.display = "block";
//   document.getElementById("bg").classList.add("box-bg");
// };
// document.getElementById("banner3").onclick = function () {
//   document.querySelector(".banner3-big").style.display = "block";
//   document.getElementById("bg").classList.add("box-bg");
// };
// document.getElementById("banner4").onclick = function () {
//   document.querySelector(".banner4-big").style.display = "block";
//   document.getElementById("bg").classList.add("box-bg");
// };
// document.getElementById("banner5").onclick = function () {
//   document.querySelector(".banner5-big").style.display = "block";
//   document.getElementById("bg").classList.add("box-bg");
// };
// document.getElementById("banner6").onclick = function () {
//   document.querySelector(".banner6-big").style.display = "block";
//   document.getElementById("bg").classList.add("box-bg");
// };
// document.getElementById("banner7").onclick = function () {
//   document.querySelector(".banner7-big").style.display = "block";
//   document.getElementById("bg").classList.add("box-bg");
// };
// document.getElementById("banner8").onclick = function () {
//   document.querySelector(".banner8-big").style.display = "block";
//   document.getElementById("bg").classList.add("box-bg");
// };

// function btn() {
//   document.querySelector(".banner1-big").style.display = "none";
//   document.querySelector(".banner2-big").style.display = "none";
//   document.querySelector(".banner3-big").style.display = "none";
//   document.querySelector(".banner4-big").style.display = "none";
//   document.querySelector(".banner5-big").style.display = "none";
//   document.querySelector(".banner6-big").style.display = "none";
//   document.querySelector(".banner7-big").style.display = "none";
//   document.querySelector(".banner8-big").style.display = "none";

//   document.getElementById("bg").classList.remove("box-bg");
// }

// ////////////타이핑효과
// const content = "Think something different";
// const text = document.querySelector(".text");
// let index = 0;

// function typing() {
//   text.textContent += content[index++];
//   if (index > content.length) {
//     text.textContent = "";
//     index = 0;
//   }
// }
// setInterval(typing, 500);

class FolderScroll {
  constructor(e, t) {
      this.wrapper = e,
      this.sticky = t,
      this.children = this.sticky.querySelectorAll(".section"),
      this.length = this.children.length,
      this.headerVh = 6,
      this.contentVh = 96 - this.headerVh * this.length,
      this.start = 0,
      this.end = 0
  }
  init() {
      this.start = this.wrapper.offsetTop + 100,
      this.end = this.wrapper.offsetTop + this.wrapper.offsetHeight - innerHeight - 100,
      this.children.forEach(((e,t)=>{
          e.style.bottom = this.headerVh * (this.length - t) - 100 + "vh",
          e.querySelector(".title").style.height = this.headerVh + "vh",
          e.querySelector(".content").style.height = this.contentVh + "vh"
      }
      ))
  }
  animate() {
      this.children.forEach(((e,t)=>{
          const n = (this.end - this.start) / this.length
            , o = this.start + n * t + 100
            , l = this.start + n * (t + 1);
          scrollY <= o ? e.style.transform = "translate3d(0, 0, 0)" : scrollY >= l ? e.style.transform = `translate3d(0, ${-this.contentVh}%, 0)` : e.style.transform = `translate3d(0, ${(scrollY - o) / (n - 100) * -this.contentVh}%, 0)`
      }
      ))
  }
}
const mainContent1 = document.querySelector(".main-content-1")
, sticky = document.querySelector(".sticky")
, folderScroll = new FolderScroll(mainContent1,sticky);
function btn() {
  document.querySelector(".banner1-big").style.display = "none",
  document.querySelector(".banner2-big").style.display = "none",
  document.querySelector(".banner3-big").style.display = "none",
  document.querySelector(".banner4-big").style.display = "none",
  document.querySelector(".banner5-big").style.display = "none",
  document.querySelector(".banner6-big").style.display = "none",
  document.querySelector(".banner7-big").style.display = "none",
  document.querySelector(".banner8-big").style.display = "none",
  document.getElementById("bg").classList.remove("box-bg")
}
folderScroll.init(),
window.addEventListener("resize", (()=>{
  folderScroll.init()
}
)),
window.addEventListener("scroll", (()=>{
  folderScroll.animate()
}
)),
$(document).ready((function() {
  $("#home").click((function() {
      const e = $(".start-screen").offset();
      $("html").animate({
          scrollTop: e.top
      }, 400)
  }
  )),
  $("#first").click((function() {
      const e = $(".title-1").offset();
      $("html").animate({
          scrollTop: e.top
      }, 400)
  }
  )),
  $("#second").click((function() {
      const e = $(".title-2").offset();
      $("html").animate({
          scrollTop: e.top
      }, 400)
  }
  )),
  $("#thrid").click((function() {
      const e = $(".title-3").offset();
      $("html").animate({
          scrollTop: e.top
      }, 400)
  }
  )),
  $("#fourth").click((function() {
      const e = $(".title-4").offset();
      $("html").animate({
          scrollTop: e.top
      }, 400)
  }
  ))
}
)),
$(".contact").click((function() {
  $(".modal-resume").show()
}
)),
$(".modal-resume i").click((function() {
  $(".modal-resume").hide()
}
)),
document.getElementById("banner1").onclick = function() {
  document.querySelector(".banner1-big").style.display = "block",
  document.getElementById("bg").classList.add("box-bg")
}
,
document.getElementById("banner2").onclick = function() {
  document.querySelector(".banner2-big").style.display = "block",
  document.getElementById("bg").classList.add("box-bg")
}
,
document.getElementById("banner3").onclick = function() {
  document.querySelector(".banner3-big").style.display = "block",
  document.getElementById("bg").classList.add("box-bg")
}
,
document.getElementById("banner4").onclick = function() {
  document.querySelector(".banner4-big").style.display = "block",
  document.getElementById("bg").classList.add("box-bg")
}
,
document.getElementById("banner5").onclick = function() {
  document.querySelector(".banner5-big").style.display = "block",
  document.getElementById("bg").classList.add("box-bg")
}
,
document.getElementById("banner6").onclick = function() {
  document.querySelector(".banner6-big").style.display = "block",
  document.getElementById("bg").classList.add("box-bg")
}
,
document.getElementById("banner7").onclick = function() {
  document.querySelector(".banner7-big").style.display = "block",
  document.getElementById("bg").classList.add("box-bg")
}
,
document.getElementById("banner8").onclick = function() {
  document.querySelector(".banner8-big").style.display = "block",
  document.getElementById("bg").classList.add("box-bg")
}
;
const content = "Think something different"
, text = document.querySelector(".text");
let index = 0;
function typing() {
  text.textContent += content[index++],
  index > content.length && (text.textContent = "",
  index = 0)
}
setInterval(typing, 500);
