
// Set Settings
var convertColorsSettings = {
  oldRGB: {R: 203, G: 96, B:21},
  newRGB: {R: 255, G: 150, B: 167},
  imgColorLikenessTolerance: 18,
  elementColorLikenessTolerance: 10,
  imgMaxWidthToProcess: 600,
  exclude: [
    '.alignright.wp-image-3058.size-large',
    '.gallery-new-thumbs *',
    '.colorBG',
    '.fb__list__link *',
    '.aligncenter.size-full.wp-image-8838',
    '.specials-icons *',
    '.special_img *',
    '#trust_container *',
    '.review-list *',
    '.gallery-new-feature-single img',
    '.location-map img',
    '.page-template-page-location-home .section-bottom .content-img',
    '.other-window-types__item *',
    '.timeline-container *',
    '.content-awards *',
    '.location_managers img',
    '.alignleft.size-full.wp-image-6219',
    '.cta-section.image-thumbs *',
    '.page-template-page-ppc.page-id-863 #site-title img',
    '.pink--exclude',
    '.pink--exclude *',
  ],
};

// Run Color Changer
jQuery(document).ready(function() {
  // Enable pink only if found in query string or cookie
  //var pink = /pink/i.test(location.search) || /pink/i.test(document.cookie);
  
  //if (!pink) {
    //console.log('Pink: No');
  //} else {
    //console.log('Pink: Yes');

    //jQuery.cookie('pink', '1', {path: '/'});

    jQuery('body').addClass('beldon--pink');
    //convertColors.init('body *', convertColorsSettings);
    convertColors.init('#site-title.logo img', convertColorsSettings);
    convertColors.init('.mobile-phone-hdr', convertColorsSettings);
    convertColors.init('.mobile-phone-hdr *', convertColorsSettings);
    convertColors.init('.top_phone', convertColorsSettings);
    convertColors.init('#menu-top-nav *', convertColorsSettings);
    convertColors.init('#main_nav *', convertColorsSettings);
    convertColors.init('.img_hero_content *', convertColorsSettings);
    convertColors.init('.entry-content *', convertColorsSettings);
    convertColors.init('.top_testimonial *', convertColorsSettings);
    convertColors.init('.product_selector *', convertColorsSettings);
    convertColors.init('.why-top *', convertColorsSettings);
    convertColors.init('.cta-section *', convertColorsSettings);
    convertColors.init('.reviews_container *', convertColorsSettings);
    convertColors.init('.drop-logo .logo *', convertColorsSettings);
    convertColors.init('.btn', convertColorsSettings);
    convertColors.init('.fa.fa-bars', convertColorsSettings);
    convertColors.init('.top_special *', convertColorsSettings);
    convertColors.init('.gallery-title', convertColorsSettings);
    convertColors.init('.gallery-cta', convertColorsSettings);
    convertColors.init('.gallery-cta *', convertColorsSettings);
    convertColors.init('.product-logo *', convertColorsSettings);
    convertColors.init('.sectionbox *', convertColorsSettings);
    convertColors.init('.ppc-content .logobox *', convertColorsSettings);
    convertColors.init('.ppc-content .content *', convertColorsSettings);
    convertColors.init('.ppc-content .ppc-post h3', convertColorsSettings);
    convertColors.init('.logo-box img', convertColorsSettings);
    convertColors.init('.panel .panel-heading h3', convertColorsSettings);
    
    convertColors.init('.alignright.wp-image-3058.size-large', {
      oldRGB: {R: 203, G: 96, B: 21},
      newRGB: {R: 255, G: 150, B: 167},
      imgColorLikenessTolerance: 6,
    });
    convertColors.init('.aligncenter.size-full.wp-image-7364', {
      imgMaxWidthToProcess: 5000,
      oldRGB: {R: 203, G: 96, B:21},
      newRGB: {R: 255, G: 150, B: 167},
      imgColorLikenessTolerance: 20,
    });
    convertColors.init('.special_img img', {
      imgMaxWidthToProcess: 1200,
      oldRGB: {R: 203, G: 96, B:21},
      newRGB: {R: 255, G: 150, B: 167},
      imgColorLikenessTolerance: 20,
    });
    convertColors.init('.size-full.wp-image-5727.aligncenter', {
      imgMaxWidthToProcess: 1900,
      oldRGB: {R: 203, G: 96, B:21},
      newRGB: {R: 255, G: 150, B: 167},
      imgColorLikenessTolerance: 20,
    });
    convertColors.init('.location-map img', {
      imgMaxWidthToProcess: 1250,
      oldRGB: {R: 203, G: 96, B:21},
      newRGB: {R: 255, G: 150, B: 167},
      imgColorLikenessTolerance: 20,
    });
    convertColors.init('.page-template-page-location-home .section-bottom .content-img', {
      imgMaxWidthToProcess: 1000,
      oldRGB: {R: 203, G: 96, B:21},
      newRGB: {R: 255, G: 150, B: 167},
      imgColorLikenessTolerance: 20,
    });
    convertColors.init('#trust_container a', {
      oldRGB: {R: 203, G: 96, B:21},
      newRGB: {R: 255, G: 150, B: 167},
    });
    convertColors.init('.logo-box img', {
      imgMaxWidthToProcess: 1000,
      oldRGB: {R: 203, G: 96, B:21},
      newRGB: {R: 255, G: 150, B: 167},
    });
    convertColors.init('.event-logo img', {
      oldRGB: {R: 203, G: 96, B:21},
      newRGB: {R: 255, G: 150, B: 167},
    });
    convertColors.init('.scholarship .badgeBG', {
      imgMaxWidthToProcess: 1000,
      oldRGB: {R: 203, G: 96, B:21},
      newRGB: {R: 255, G: 150, B: 167},
    });
    convertColors.init('.blog .iconImg img', {
      oldRGB: {R: 203, G: 96, B:21},
      newRGB: {R: 255, G: 150, B: 167},
    });
    convertColors.init('.chatWindow', {
      imgMaxWidthToProcess: 1000,
      oldRGB: {R: 203, G: 96, B:21},
      newRGB: {R: 255, G: 150, B: 167},
    });

    convertColors.init('.page-template-page-ppc .logobox img', convertColorsSettings);
    convertColors.init('.page-template-page-ppc .btnbox *', convertColorsSettings);
    convertColors.init('.page-template-page-ppc .content *', convertColorsSettings);
    convertColors.init('.page-template-page-ppc .btn', convertColorsSettings);
    convertColors.init('.page-template-page-ppc .why-logo img', convertColorsSettings);
    convertColors.init('.page-template-page-ppc.page-id-863 #site-title img', {
      imgMaxWidthToProcess: 1900,
      oldRGB: {R: 203, G: 96, B:21},
      newRGB: {R: 255, G: 150, B: 167},
    });
    convertColors.init('.page-template-page-ppc .entry-content *', convertColorsSettings);
    convertColors.init('.page-template-page-ppc .panel-heading *', convertColorsSettings);
    convertColors.init('#review-location-container *', convertColorsSettings);
    
    jQuery("body").on('svgs.cloned', function() {
      convertColors.init('.specials-icons *', {
        oldRGB: {R: 203, G: 96, B:21},
        newRGB: {R: 255, G: 150, B: 167},
        imgColorLikenessTolerance: 6,
        elementColorLikenessTolerance: 0,
        imgMaxWidthToProcess: 600,
      });
      convertColors.init('.iconImg *', {
        oldRGB: {R: 203, G: 96, B:21},
        newRGB: {R: 255, G: 150, B: 167},
        imgColorLikenessTolerance: 6,
        elementColorLikenessTolerance: 0,
        imgMaxWidthToProcess: 600,
      });
    });

  //}
});




// colorChanger 

var convertColors = {

  init: function(selector, settings) {    
    settings = settings || {};
    var app = this;
    if (app.setup(settings) === true) {
      var nodes = document.querySelectorAll(selector);
      var nodesLength = nodes.length;
      for (var i = 0; i < nodesLength; i++) {
        if (!app.isExcluded(settings, nodes[i])) {
          app.handleElement(settings, nodes[i]);
        }
      }
    }
  },

  isExcluded: function(settings, node) {
    var app = this;
    if (typeof node.className != "undefined" && typeof node.className.split == "function") {
      var nodeClassListString = "." + node.className.split(" ").join(".");
      for(var i = 0; i < settings.exclude.length; i++) {
        // exclude children if there's a wildcard
        if (settings.exclude[i].slice(-2) === " *") {
          var parents = document.querySelectorAll(settings.exclude[i].split(" *")[0]);
          for(var j = 0; j < parents.length; j++) {
            if (parents[j].contains(node)) {
              return true;
            }
          }
        }
        // exclude a specific element
        if (nodeClassListString.indexOf(settings.exclude[i]) !== -1) {
          return true;
        }
        // check to make sure the node we are on is not excluded itself
        var excludedNodes = document.querySelectorAll(settings.exclude[i]);
        for (var k = 0; k < excludedNodes.length; k++) {
          if (excludedNodes[k].isSameNode(node)) {
            return true;
          }
        }
      }
    }
    return false;
  },

  handleElement: function(settings, node) {
    var app = this;
    if (typeof node != 'undefined') {
      if (node.tagName == "IMG") {
        var oldImg = node;
        var newImg = document.createElement('img');
        var src = app.getImgSrcOrNull(oldImg);
        if (src) {
          newImg.src = src;
          if (newImg.src) {
            newImg.onload = function() {
              var newImg = this;
              if (newImg.width > 0 && newImg.width <= settings.imgMaxWidthToProcess) {
                app.putDataUrl(settings, oldImg, newImg, settings.oldRGB, settings.newRGB);
              }
            }
          }
        }
      }
      else {
        // if color
        if (jQuery(node).css('color')) {
          var currentRgb = app.getRgbOrNull(jQuery(node).css('color'));
          if (currentRgb) {
            if (app.colorLikeness(currentRgb, settings.oldRGB) <= settings.elementColorLikenessTolerance) {
              var rgb = app.rgbObjToString(settings.newRGB);
              jQuery(node).css('color', rgb);
            }
          }
        }
        // if background-color
        if (jQuery(node).css('background-color')) {
          var currentRgb = app.getRgbOrNull(jQuery(node).css('background-color'));
          if (currentRgb) {
            if (app.colorLikeness(currentRgb, settings.oldRGB) <= settings.elementColorLikenessTolerance) {
              var rgb = app.rgbObjToString(settings.newRGB);
              jQuery(node).css('background-color', rgb);
            }
          }
        }
        // if border color
        if (jQuery(node).css('border-left-color')) {
          var currentRgb = app.getRgbOrNull(jQuery(node).css('border-left-color'));
          if (currentRgb) {
            if (app.colorLikeness(currentRgb, settings.oldRGB) <= settings.elementColorLikenessTolerance) {
              var rgb = app.rgbObjToString(settings.newRGB);
              jQuery(node).css('border-left-color', rgb);
            }
          }
        }
        // if border color
        if (jQuery(node).css('border-right-color')) {
          var currentRgb = app.getRgbOrNull(jQuery(node).css('border-right-color'));
          if (currentRgb) {
            if (app.colorLikeness(currentRgb, settings.oldRGB) <= settings.elementColorLikenessTolerance) {
              var rgb = app.rgbObjToString(settings.newRGB);
              jQuery(node).css('border-right-color', rgb);
            }
          }
        }
        // if border color
        if (jQuery(node).css('border-top-color')) {
          var currentRgb = app.getRgbOrNull(jQuery(node).css('border-top-color'));
          if (currentRgb) {
            if (app.colorLikeness(currentRgb, settings.oldRGB) <= settings.elementColorLikenessTolerance) {
              var rgb = app.rgbObjToString(settings.newRGB);
              jQuery(node).css('border-top-color', rgb);
            }
          }
        }
        // if border color
        if (jQuery(node).css('border-bottom-color')) {
          var currentRgb = app.getRgbOrNull(jQuery(node).css('border-bottom-color'));
          if (currentRgb) {
            if (app.colorLikeness(currentRgb, settings.oldRGB) <= settings.elementColorLikenessTolerance) {
              var rgb = app.rgbObjToString(settings.newRGB);
              jQuery(node).css('border-bottom-color', rgb);
            }
          }
        }
        // if background-image
        if (jQuery(node).css('background-image')) {
          var app = this;
          var imgSrc = app.extractBgImgSrcOrNull(node);
          if (imgSrc) {
            var newImg = document.createElement('img');
            newImg.src = imgSrc;
            if (newImg.src) {
              newImg.onload = function() {
                var newImg = this;
                if (newImg.width > 0 && newImg.width <= settings.imgMaxWidthToProcess) {
                  var dataUrl = app.imageToDataUrl(settings, newImg, settings.oldRGB, settings.newRGB);
                  jQuery(node).css('background-image', 'url(' + dataUrl + ')');
                  jQuery(node).attr('data-original', dataUrl);
                }
              }
            }
          }
        }
      }
    }
  },

  imageToDataUrl: function (settings, newImg, oldRGB, newRGB) {
    var app = this;
    var c = document.createElement("canvas");
    var ctx = c.getContext("2d");
    var w = newImg.width;
    var h = newImg.height;

    c.width = w;
    c.height = h;

    // draw the image on the temporary canvas
    ctx.drawImage(newImg, 0, 0, w, h);

    // pull the entire image into an array of pixel data
    var imageData = ctx.getImageData(0, 0, w, h);

    // examine every pixel, 
    // change any old rgb to the new-rgb
    for (var i = 0; i < imageData.data.length; i += 4) {
        // is this pixel the old rgb?
        var pixelRGB = {R: imageData.data[i], G: imageData.data[i + 1], B: imageData.data[i + 2]};
        if (app.colorLikeness(pixelRGB, settings.oldRGB) <= settings.imgColorLikenessTolerance) {
          imageData.data[i] = settings.newRGB.R;
          imageData.data[i + 1] = settings.newRGB.G;
          imageData.data[i + 2] = settings.newRGB.B;
        }
    }

    // put the altered data back on the canvas  
    ctx.putImageData(imageData, 0, 0);
    // put the re-colored image back on the image
    return c.toDataURL('image/png');
  },

  putDataUrl: function(settings, oldImg, newImg, oldRGB, newRGB) {
    var app = this;
    var dataUrl = app.imageToDataUrl(settings, newImg, oldRGB, newRGB);
    if (jQuery(oldImg).is('.product_selector .specials-icons .iconImg img')) {
      jQuery(oldImg).css({'max-width': '90px', 'max-height': '90px', 'width': '61px'});
    }
    oldImg.src = dataUrl;
    // Lazy loading
    oldImg.setAttribute('srcset', '');
    oldImg.setAttribute('data-original', dataUrl);
  },

  getImgSrcOrNull: function(img) {
    var url = img.getAttribute('data-original');
    if (url) {
      return url; 
    }
    url = img.src;
    if (url) {
      return url;
    }
    return null;
  },

  getRgbOrNull: function(colorString) {
    if (colorString.indexOf('rgb') !== -1) {
      colors = colorString.replace(/[^\d,]/g, '').split(',');
      rgb = {};
      rgb.R = colors[0];
      rgb.G = colors[1];
      rgb.B = colors[2];
      return rgb;
    }
    return null;
  },

  extractBgImgSrcOrNull: function(node) {
    var url = node.getAttribute('data-original');
    if (url) {
      return url;
    }
    else {
      var matches = jQuery(node).css('background-image').match(/\bhttps?:\/\/\S+/gi);
      if (matches) {
        return matches[0];
      }
    }
    return null;
  },

  rgbObjToString: function(rgbObj) {
    return 'rgb(' + rgbObj.R.toString() + ',' + rgbObj.G.toString() + ',' + rgbObj.B.toString() + ')';
  },

  colorLikeness: function(oldRGB, newRGB) {
    var oldLAB = rgb2lab(oldRGB);
    var newLAB = rgb2lab(newRGB);
    var deltaE = new dE00(
      oldLAB,
      newLAB
    );
    return deltaE.getDeltaE();
  },

  setup: function(settings) {
    if (typeof settings.oldRGB == 'undefined') {
      console.log('convert colors: you need to set a RGB value to change');
      return false;
    }
    if (typeof settings.newRGB == 'undefined') {
      console.log('convert colors: you need to set a RGB value to change to');
      return false;
    }
    if (typeof settings.imgColorLikenessTolerance == 'undefined') {
      settings.imgColorLikenessTolerance = 6.8;
    }
    if (typeof settings.elementColorLikenessTolerance == 'undefined') {
      settings.elementColorLikenessTolerance = 10;
    }
    if (typeof settings.imgMaxWidthToProcess == 'undefined') {
      settings.imgMaxWidthToProcess = 1050;
    }
    if (typeof settings.exclude == 'undefined') {
      settings.exclude = [];
    }
    return true;
  }

};

// https://github.com/zschuessler/DeltaE/blob/master/src/dE00.js
function dE00(i,t,h){var s=Math.sqrt,e=Math.pow;this.x1=i,this.x2=t,this.weights=h||{},this.ksubL=this.weights.lightness||1,this.ksubC=this.weights.chroma||1,this.ksubH=this.weights.hue||1,this.deltaLPrime=t.L-i.L,this.LBar=(i.L+t.L)/2,this.C1=s(e(i.A,2)+e(i.B,2)),this.C2=s(e(t.A,2)+e(t.B,2)),this.CBar=(this.C1+this.C2)/2,this.aPrime1=i.A+i.A/2*(1-s(e(this.CBar,7)/(e(this.CBar,7)+e(25,7)))),this.aPrime2=t.A+t.A/2*(1-s(e(this.CBar,7)/(e(this.CBar,7)+e(25,7)))),this.CPrime1=s(e(this.aPrime1,2)+e(i.B,2)),this.CPrime2=s(e(this.aPrime2,2)+e(t.B,2)),this.CBarPrime=(this.CPrime1+this.CPrime2)/2,this.deltaCPrime=this.CPrime2-this.CPrime1,this.SsubL=1+.015*e(this.LBar-50,2)/s(20+e(this.LBar-50,2)),this.SsubC=1+.045*this.CBarPrime,this.hPrime1=0,this.hPrime2=0,this.deltahPrime=0,this.deltaHPrime=0,this.HBarPrime=0,this.T=0,this.SsubH=0,this.RsubT=0}dE00.prototype.getDeltaE=function(){var i=Math.sqrt,t=Math.sin,h=Math.pow;this.hPrime1=this.gethPrime1(),this.hPrime2=this.gethPrime2(),this.deltahPrime=this.getDeltahPrime(),this.deltaHPrime=2*i(this.CPrime1*this.CPrime2)*t(this.degreesToRadians(this.deltahPrime)/2),this.HBarPrime=this.getHBarPrime(),this.T=this.getT(),this.SsubH=1+.015*this.CBarPrime*this.T,this.RsubT=this.getRsubT();var s=this.deltaLPrime/(this.ksubL*this.SsubL),e=this.deltaCPrime/(this.ksubC*this.SsubC),r=this.deltaHPrime/(this.ksubH*this.SsubH);return i(h(s,2)+h(e,2)+h(r,2)+this.RsubT*e*r)},dE00.prototype.getRsubT=function(){var i=Math.sin,t=Math.sqrt,h=Math.pow,s=Math.exp;return-2*t(h(this.CBarPrime,7)/(h(this.CBarPrime,7)+h(25,7)))*i(this.degreesToRadians(60*s(-h((this.HBarPrime-275)/25,2))))},dE00.prototype.getT=function(){var i=Math.cos;return 1-.17*i(this.degreesToRadians(this.HBarPrime-30))+.24*i(this.degreesToRadians(2*this.HBarPrime))+.32*i(this.degreesToRadians(3*this.HBarPrime+6))-.2*i(this.degreesToRadians(4*this.HBarPrime-63))},dE00.prototype.getHBarPrime=function(){return(0,Math.abs)(this.hPrime1-this.hPrime2)>180?(this.hPrime1+this.hPrime2+360)/2:(this.hPrime1+this.hPrime2)/2},dE00.prototype.getDeltahPrime=function(){var i=Math.abs;return 0===this.C1||0===this.C2?0:i(this.hPrime1-this.hPrime2)<=180?this.hPrime2-this.hPrime1:this.hPrime2<=this.hPrime1?this.hPrime2-this.hPrime1+360:this.hPrime2-this.hPrime1-360},dE00.prototype.gethPrime1=function(){return this._gethPrimeFn(this.x1.B,this.aPrime1)},dE00.prototype.gethPrime2=function(){return this._gethPrimeFn(this.x2.B,this.aPrime2)},dE00.prototype._gethPrimeFn=function(i,t){var h;return 0===i&&0===t?0:(h=this.radiansToDegrees(Math.atan2(i,t)))>=0?h:h+360},dE00.prototype.radiansToDegrees=function(i){return i*(180/Math.PI)},dE00.prototype.degreesToRadians=function(i){return i*(Math.PI/180)};

// credit: https://github.com/antimatter15/rgb-lab/blob/master/color.js
function rgb2lab(a){var t,h,M,o=a.R/255,n=a.G/255,p=a.B/255;return h=(.2126*(o=o>.04045?Math.pow((o+.055)/1.055,2.4):o/12.92)+.7152*(n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92)+.0722*(p=p>.04045?Math.pow((p+.055)/1.055,2.4):p/12.92))/1,M=(.0193*o+.1192*n+.9505*p)/1.08883,t=(t=(.4124*o+.3576*n+.1805*p)/.95047)>.008856?Math.pow(t,1/3):7.787*t+16/116,{L:116*(h=h>.008856?Math.pow(h,1/3):7.787*h+16/116)-16,A:500*(t-h),B:200*(h-(M=M>.008856?Math.pow(M,1/3):7.787*M+16/116))}}function lab2rgb(a){var t,h,M,o=(a[0]+16)/116,n=a[1]/500+o,p=o-a[2]/200;return h=-.9689*(n=.95047*(n*n*n>.008856?n*n*n:(n-16/116)/7.787))+1.8758*(o=1*(o*o*o>.008856?o*o*o:(o-16/116)/7.787))+.0415*(p=1.08883*(p*p*p>.008856?p*p*p:(p-16/116)/7.787)),M=.0557*n+-.204*o+1.057*p,t=(t=3.2406*n+-1.5372*o+-.4986*p)>.0031308?1.055*Math.pow(t,1/2.4)-.055:12.92*t,h=h>.0031308?1.055*Math.pow(h,1/2.4)-.055:12.92*h,M=M>.0031308?1.055*Math.pow(M,1/2.4)-.055:12.92*M,{R:255*Math.max(0,Math.min(1,t)),G:255*Math.max(0,Math.min(1,h)),B:255*Math.max(0,Math.min(1,M))}}
