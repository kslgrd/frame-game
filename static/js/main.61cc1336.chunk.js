(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(t,e,n){t.exports=n.p+"static/media/hieee.74b2390c.png"},function(t,e,n){t.exports=n(21)},,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){t.exports=n.p+"static/media/ow.31a79875.png"},function(t,e,n){t.exports=n.p+"static/media/yay.973afd96.png"},function(t,e,n){"use strict";n.r(e);var i=n(0),r=n.n(i),o=n(7),a=n.n(o),s=(n(15),n(1)),c=n(2),u=n(4),l=n(3),h=n(5),v=(n(16),function(t){return Math.random()*t}),p=function(t){return Math.round(v(t))},d=function(){var t=function(){return Math.random()>.5?1:-1};return{vertical:t(),horizontal:t()}},f=function(t){function e(t){var n;Object(s.a)(this,e),(n=Object(u.a)(this,Object(l.a)(e).call(this,t))).direction=null,n.virtualTickID=null,n.virtualTickDuration=15;var i=n.props.velocity;n.direction=d();var r={x:null,y:null},o=v(Math.PI/2),a=i/1e3*n.virtualTickDuration,c={dx:Math.cos(o)*a,dy:Math.sin(o)*a};return n.state={vectors:c,currentPosition:r,virtualPosition:Object.assign({},r)},n}return Object(h.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.virtualTickID=setInterval(function(){return t.recalculateVirtualPosition()},this.virtualTickDuration)}},{key:"componentWillUnmount",value:function(){clearInterval(this.virtualTickID)}},{key:"render",value:function(){var t=this;return(0,this.props.children)(this.state.currentPosition,function(){return t.reposition()})}},{key:"moveDown",value:function(t,e){var n=this.props.boundaries.height,i=t+e;return i>n&&(i=n-(i-n),this.reverseY()),i}},{key:"moveUp",value:function(t,e){var n=t-e;return n<-138&&(n=-138-n-138,this.reverseY()),n}},{key:"moveLeft",value:function(t,e){var n=t-e;return n<-165&&(n=-165-n-165,this.reverseX()),n}},{key:"moveRight",value:function(t,e){var n=this.props.boundaries.width,i=t+e;return i>n&&(i=n-(i-n),this.reverseX()),i}},{key:"recalculateVirtualPosition",value:function(){var t=this.props.boundaries,e=t.width,n=t.height,i=this.state,r=i.virtualPosition,o=r.x,a=r.y,s=i.vectors,c=s.dx,u=s.dy;null!==o&&null!==a||(o=p(e),a=p(n));var l=this.direction.horizontal>0?this.moveRight(o,c):this.moveLeft(o,c),h=this.direction.vertical>0?this.moveDown(a,u):this.moveUp(a,u);this.setState({virtualPosition:{x:l,y:h}})}},{key:"reposition",value:function(){this.setState({currentPosition:Object.assign({},this.state.virtualPosition)})}},{key:"reverseX",value:function(){this.direction.horizontal*=-1}},{key:"reverseY",value:function(){this.direction.vertical*=-1}}]),e}(i.Component),m=(n(17),function(t){function e(t){var n;return Object(s.a)(this,e),(n=Object(u.a)(this,Object(l.a)(e).call(this,t))).state={dimensions:{width:0,height:0}},n}return Object(h.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.setStageSize(),this.resizeWrapper=function(){return t.setStageSize()},window.addEventListener("resize",this.resizeWrapper())}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resizeWrapper())}},{key:"render",value:function(){var t=this.props.children,e=this.state.dimensions;return r.a.createElement("div",{className:"stage"},t(e))}},{key:"setStageSize",value:function(){var t=window,e=t.innerWidth,n=t.innerHeight;this.setState({dimensions:{width:e,height:n}})}}]),e}(i.Component)),y=(n(18),n(8)),k=n.n(y),b=(n(19),n(20),function(t){function e(){return Object(s.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this.props.position,e=t.x,n=t.y,i={left:"".concat(e,"px"),top:"".concat(n,"px")};return r.a.createElement("div",{className:"target",style:i},r.a.createElement("img",{src:k.a,alt:"click me!"}))}}]),e}(i.Component)),j=function(t){function e(){return Object(s.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this.props.children;return r.a.createElement("div",null,t)}},{key:"componentDidMount",value:function(){this.startTimer()}},{key:"componentDidUpdate",value:function(t){this.props.fps!==t.fps&&this.startTimer()}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"startTimer",value:function(){var t=this.props,e=t.fps,n=t.onTick,i=1e3/e;this.timerId=setInterval(function(){return n()},i)}}]),e}(i.Component),O=function(t){function e(){return Object(s.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(m,null,function(t){return r.a.createElement(f,{boundaries:t,velocity:1500},function(t,e){return r.a.createElement(j,{onTick:e,fps:60},r.a.createElement(b,{position:t}))})}))}}]),e}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.61cc1336.chunk.js.map