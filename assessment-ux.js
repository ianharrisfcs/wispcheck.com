(()=>{const nativeScrollTo=window.scrollTo.bind(window);window.scrollTo=(x,y)=>{if(x&&typeof x==='object'&&x.top===0&&x.behavior==='smooth')return;return nativeScrollTo(x,y);};})();
