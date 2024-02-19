const myModule = (() => {
  "use strict";
  let e = [],
    t = ["C", "D", "H", "S"],
    l = ["A", "J", "Q", "K"],
    r = [],
    s = document.querySelector("#btnGetCard"),
    a = document.querySelector("#btnStopGame"),
    n = document.querySelector("#btnNewGame"),
    d = document.querySelectorAll(".cardsDiv"),
    i = document.querySelectorAll("small"),
    o = () => {
      for (let r of t) {
        for (let s = 2; s < 11; s++) e.push(s + r);
        for (let a of l) e.push(a + r);
      }
      return _.shuffle(e);
    },
    c = (t = 1) => {
      (e = o()), (r = []);
      for (let l = 0; l < t + 1; l++) r.push(0);
      i.forEach((e) => (e.innerText = 0)),
        d.forEach((e) => g(e)),
        (s.disabled = !1),
        (a.disabled = !1);
    },
    u = () =>
      0 === e.length
        ? console.log("There are no cards available in this deck.")
        : e.pop(),
    $ = (e) => {
      let t = e.substring(0, e.length - 1);
      return isNaN(t) ? ("A" === t ? 11 : 10) : 1 * t;
    },
    h = (e, t) => ((r[t] += $(e)), (i[t].innerText = r[t]), r[t]),
    b = (e, t) => {
      let l = document.createElement("img");
      (l.src = `assets/cartas/${e}.png`),
        l.classList.add("cards"),
        d[t].append(l);
    },
    f = () => {
      let [e, t] = r;
      setTimeout(() => {
        e > t || (21 === e && t < 21) || t > 21
          ? alert("You've won!")
          : e > 21 || t > r[0]
          ? alert("You've lost!")
          : alert("It's a tie!");
      }, 10);
    },
    p = (e) => {
      let t = 0,
        l = r.length - 1;
      do {
        let s = u();
        (t = h(s, l)), b(s, l);
      } while (t < e && e <= 21);
      f();
    },
    g = (e) => {
      for (; e.innerHTML.length > 0; ) e.removeChild(e.lastChild);
    };
  return (
    s.addEventListener("click", () => {
      let e = u(),
        t = h(e, 0);
      b(e, 0), t > 21 ? (s.disabled = !0) : (s.disabled = !1);
    }),
    a.addEventListener("click", () => {
      (s.disabled = !0), (a.disabled = !0), p(r[0]);
    }),
    n.addEventListener("click", () => {
      console.clear(), c();
    }),
    { newGame: c }
  );
})();
