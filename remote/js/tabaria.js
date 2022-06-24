document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.getElementsByClassName("tab");
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].addEventListener("click", tabSwitch);
    }
  
    function tabSwitch() {
      // タブのaria属性変更
      document
        .querySelector('.tab[aria-selected="true"]')
        .setAttribute("aria-selected", "false");
      this.setAttribute("aria-selected", true);
  
      // パネルのaria属性変更
      document
        .querySelector('.panel-block[aria-hidden="false"]')
        .setAttribute("aria-hidden", "true");
      const arrayTabs = Array.prototype.slice.call(tabs);
      const index = arrayTabs.indexOf(this);
      document
        .getElementsByClassName("panel-block")
        [index].setAttribute("aria-hidden", "false");
    }
  });
  
  //each 10 seconds switch to the next tab

var isHovering = false;

setInterval(function() {
  if (!isHovering) {
    const tabs = document.getElementsByClassName("tab");
    const arrayTabs = Array.prototype.slice.call(tabs);
    const index = arrayTabs.indexOf(document.querySelector('.tab[aria-selected="true"]'));
    if (index === tabs.length - 1) {
      tabs[0].click();
    } else {
      tabs[index + 1].click();
    }
  }
 
} , 10000);
    
//on hovering over tabs-progress class, stop the timelapse and stop the tab switch

var tabsProgress = document.getElementsByClassName("tabs-progress");
for (let i = 0; i < tabsProgress.length; i++) {
  tabsProgress[i].addEventListener("mouseover", function() {
    isHovering = true;
  }
  );
  tabsProgress[i].addEventListener("mouseout", function() {
    isHovering = false;
  }
  );
}


